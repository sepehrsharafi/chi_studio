"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ArrowUpLeft = () => (
  <svg
    aria-hidden="true"
    className="size-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M17 17 7 7M17 7H7v10" />
  </svg>
);

export default function DynamicNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateNav = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setIsScrolled(window.scrollY > 48));
    };

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateNav);
    };
  }, []);

  return (
    <header className="site-header" data-scrolled={isScrolled}>
      <div className="site-header__island">
        <a className="group flex min-w-0 items-center gap-3" href="#top" aria-label="چی، صفحه اصلی">
          <span className="grid size-11 shrink-0 place-items-center rounded-[0.9rem] border border-white/15 bg-white/5 transition-transform duration-300 group-hover:-rotate-6">
            <Image
              src="/Chi Studio Logo.svg"
              alt="نشان استودیو چی"
              width={36}
              height={36}
              priority
            />
          </span>
          <span className="hidden sm:block">
            <strong className="block whitespace-nowrap text-base leading-none">استودیو چی</strong>
            <span className="mt-1 block whitespace-nowrap font-mono text-[0.5rem] tracking-[0.18em] text-white/35">
              GAME STUDIO
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="ناوبری اصلی">
          <a className="nav-link nav-link--dark" href="#about">درباره ما</a>
          <a className="nav-link nav-link--dark" href="#games">بازی‌ها</a>
          <a className="nav-link nav-link--dark" href="#process">فرایند ما</a>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
          className="site-header__menu-button md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>

        <a
          className="group hidden shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-cream transition-colors hover:border-sun hover:bg-sun hover:text-ink sm:px-5 sm:text-sm md:flex"
          href="#contact"
        >
          <span className="hidden sm:inline">بیا حرف بزنیم</span>
          <span className="sm:hidden">ارتباط</span>
          <ArrowUpLeft />
        </a>

        <nav
          className="site-header__mobile-menu md:hidden"
          data-open={isMenuOpen}
          id="mobile-navigation"
          aria-label="ناوبری موبایل"
        >
          {[
            ["درباره ما", "#about"],
            ["بازی‌ها", "#games"],
            ["فرایند ما", "#process"],
            ["ارتباط", "#contact"],
          ].map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setIsMenuOpen(false)}>
              <span>{label}</span>
              <small>۰{index + 1}</small>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
