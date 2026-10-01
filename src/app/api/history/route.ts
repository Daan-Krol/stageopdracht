import { NextResponse } from "next/server";
import db from "@/lib/database";

// Returns today's entry plus the most recent entry BEFORE today.
// "recent" is not necessarily yesterday — it's whatever the latest earlier
// saved day happens to be. If today is the first day ever, recent is null.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const today = searchParams.get("date");

  if (!today) {
    return NextResponse.json({ error: "Date is required" }, { status: 400 });
  }

  const todayRow = db
    .prepare(`
      SELECT *
      FROM day
      WHERE player_id = 1 AND date = ?
    `)
    .get(today);

  // ORDER BY date DESC + LIMIT 1 gives the latest day that is earlier
  // than today. Dates are stored as "YYYY-MM-DD" text, which sorts
  // correctly alphabetically, so a plain string comparison works here.
  const recentRow = db
    .prepare(`
      SELECT *
      FROM day
      WHERE player_id = 1 AND date < ?
      ORDER BY date DESC
      LIMIT 1
    `)
    .get(today);

  return NextResponse.json({
    today: todayRow ?? null,
    recent: recentRow ?? null,
  });
}