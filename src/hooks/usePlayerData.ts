import { useEffect, useState } from "react";
import { useGameStore } from "@/store/gamestore";

export function getToday() {
  return new Date().toISOString().split("T")[0];
}

// Everything the home page loads from the API:
//  - the streak (put into the global store)
//  - water / exercise / rest for one day (today by default)
// and the update functions that change a value AND save it.
export function usePlayerData(date: string = getToday()) {
  const [water, setWater] = useState(0);
  const [rest, setRest] = useState(0);
  const [exercise, setExercise] = useState(0);

  // Load the streak once, when the page opens.
  useEffect(() => {
    async function loadStreak() {
      const response = await fetch("/api/login");
      if (!response.ok) {
        console.error("Failed to load streak");
        return;
      }
      const data = await response.json();
      useGameStore.setState({ streak: data.streak });
    }

    loadStreak();
  }, []);

  // Load the day's numbers (again if the date ever changes).
  useEffect(() => {
    async function loadDay() {
      const response = await fetch(`/api/day?date=${date}`);
      if (!response.ok) {
        console.error("Failed to load day");
        return;
      }
      const data = await response.json();

      if (!data) {
        setWater(0);
        setRest(0);
        setExercise(0);
        return;
      }

      setWater(data.water);
      setRest(data.sleep);
      setExercise(data.exercised);
    }

    loadDay();
  }, [date]);

  async function saveDay(newWater: number, newRest: number, newExercise: number) {
    const response = await fetch("/api/day", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date,
        water: newWater,
        sleep: newRest,
        exercised: newExercise,
      }),
    });

    if (!response.ok) {
      console.error("Failed to save day");
    }
  }

  function updateWater(newWater: number) {
    setWater(newWater);
    saveDay(newWater, rest, exercise);
  }

  function updateExercise(newExercise: number) {
    setExercise(newExercise);
    saveDay(water, rest, newExercise);
  }

  function updateRest(newRest: number) {
    setRest(newRest);
    saveDay(water, newRest, exercise);
  }

  return { water, exercise, rest, updateWater, updateExercise, updateRest };
}