export const WATER_GOAL = 2000;
export const REST_GOAL = 8;
export const EXERCISE_GOAL = 45;

export const DAYS_PER_GENERATION = 7;
export const MAX_LEVEL = 7;

export const LEVEL_INFO: Record<number, { name: string; species: string }> = {
  1: { name: "Tunas Harapan", species: "Sengon" },
  2: { name: "Sang Perintis", species: "Jati" },
  3: { name: "Penyaring Alam", species: "Mahogany" },
  4: { name: "Penjaga Air", species: "Banyan" },
  5: { name: "Pohon Kehidupan", species: "Sea Hibiscus" },
  6: { name: "Sang Pemberi Nafas", species: "Eucalyptus" },
  7: { name: "Penjaga Bumi", species: "Trembesi" },
};

export type TabOption = "Daily" | "My Tree" | "My Impact";
