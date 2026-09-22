"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type InteractiveSectionProps = {
  children: ReactNode;
  className?: string;
  id: string;
  variant?: "light" | "dark" | "warm";
};

export default function InteractiveSection({
  children,
  className = "",
  id,
  variant = "light",
}: InteractiveSectionProps) {
  function moveBackdrop(event: React.PointerEvent<HTMLElement>) {
    const section = event.currentTarget;
    const rect = section.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    section.style.setProperty("--section-x", x.toFixed(3));
    section.style.setProperty("--section-y", y.toFixed(3));
  }

  function resetBackdrop(event: React.PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--section-x", "0");
    event.currentTarget.style.setProperty("--section-y", "0");
  }

  return (
    <section
      className={`interactive-section ${className}`}
      data-variant={variant}
      id={id}
      onPointerLeave={resetBackdrop}
      onPointerMove={moveBackdrop}
    >
      <div className="section-backdrop" aria-hidden="true">
        <span className="section-backdrop__grid" />
        <span className="section-backdrop__ring" />
        <span className="section-backdrop__core" />
        <Image
          alt=""
          className="section-backdrop__logo"
          height={1000}
          src="/Chi Studio Logo.svg"
          width={1000}
        />
        <span className="section-backdrop__pixels">
          <i /><i /><i /><i /><i />
        </span>
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
