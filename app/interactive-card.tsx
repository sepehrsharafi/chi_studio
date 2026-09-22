"use client";

import type { PointerEvent, ReactNode } from "react";

type InteractiveCardProps = {
  as?: "article" | "div";
  ariaHidden?: boolean;
  children: ReactNode;
  className?: string;
};

export default function InteractiveCard({
  as: Element = "div",
  ariaHidden,
  children,
  className = "",
}: InteractiveCardProps) {
  function moveCard(event: PointerEvent<HTMLElement>) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    card.style.setProperty("--card-rx", `${((0.5 - y) * 3).toFixed(2)}deg`);
    card.style.setProperty("--card-ry", `${((x - 0.5) * 3).toFixed(2)}deg`);
  }

  function resetCard(event: PointerEvent<HTMLElement>) {
    const card = event.currentTarget;
    card.style.setProperty("--card-rx", "0deg");
    card.style.setProperty("--card-ry", "0deg");
  }

  return (
    <Element
      aria-hidden={ariaHidden}
      className={`interactive-card ${className}`}
      onPointerLeave={resetCard}
      onPointerMove={moveCard}
    >
      {children}
      <span className="interactive-card__accent" aria-hidden="true" />
    </Element>
  );
}
