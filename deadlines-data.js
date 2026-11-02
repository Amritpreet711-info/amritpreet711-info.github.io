/*
  DEADLINES — shown in the "Upcoming due dates" card on the Home page.

  MONTHLY: dates that repeat every month (shown automatically).
  SPECIAL: one-off dates and government extensions. Add new ones here;
           past dates are hidden automatically, so old entries can stay.

  date  : "YYYY-MM-DD"
  label : short description
*/
window.DEADLINES = {
  monthly: [
    { day: 7,  label: "TDS / TCS deposit for previous month", aprilDay: 30 },
    { day: 11, label: "GSTR-1 (monthly filers)" },
    { day: 15, label: "PF & ESI contributions" },
    { day: 20, label: "GSTR-3B (monthly filers)" }
  ],
  special: [
    { date: "2026-11-21", label: "ITR for audit cases, AY 2026-27 (extended)" },
    { date: "2026-12-15", label: "Advance tax, 3rd instalment (75%), FY 2026-27" },
    { date: "2026-12-31", label: "AOC-4, FY 2025-26 (extended)" },
    { date: "2026-12-31", label: "GSTR-9 / GSTR-9C, FY 2025-26" },
    { date: "2027-01-31", label: "MGT-7 / MGT-7A, FY 2025-26 (extended)" }
  ]
};
