import React from "react";
import { BADGES_COLORS, BADGES_LABELS, BADGES_TEXT_COLORS } from "./badges";

export default function Badge({ ID }: { ID: number }) {
  const badge = {
    label: BADGES_LABELS[ID],
    color: BADGES_COLORS[ID],
    textColor: BADGES_TEXT_COLORS[ID],
  };

  return (
    <span
      className={`absolute right-1 top-1 text-xs px-2 py-1 rounded-lg font-bold tracking-wide ${badge.color} ${badge.textColor}`}
    >
      {badge.label}
    </span>
  );
}
