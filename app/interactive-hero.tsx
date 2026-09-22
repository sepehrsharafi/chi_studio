import Image from "next/image";

export default function InteractiveHero() {
  return (
    <div className="hero-photo absolute inset-0 min-h-0 overflow-hidden lg:relative lg:inset-auto lg:min-h-svh lg:border-r">
      <Image
        alt="دست‌های اعضای استودیو هنگام آزمایش یک نمونه‌ی کاغذی بازی روی میز کار"
        className="object-cover object-center"
        fill
        priority
        sizes="(min-width: 1024px) 56vw, 100vw"
        src="/studio-playtest-v1.webp"
      />

      <div className="hero-photo__wash" aria-hidden="true" />

      <div className="hero-photo-caption absolute right-8 top-8 z-10 hidden lg:block">
        <p>روی میز این هفته:</p>
        <p>تست نسخه‌ی دوازدهم.</p>
      </div>

      <div className="hero-field-note absolute bottom-20 right-8 z-10 hidden w-[min(20rem,calc(100%-2.5rem))] lg:block">
        <span className="hero-field-note__tape" aria-hidden="true" />
        <p className="hero-field-note__label">یادداشت جلسه‌ی تست</p>
        <p className="hero-field-note__quote">
          «این قانون هنوز واضح نیست؛<br />یک بار دیگر توضیحش بده.»
        </p>
        <p className="hero-field-note__meta">دور سوم، نسخه‌ی ۰.۱۲</p>
      </div>

      <p className="absolute bottom-20 left-8 z-10 hidden max-w-36 -rotate-2 text-[0.65rem] leading-5 text-white/75 lg:block">
        نمونه‌ی کاغذی قبل از جلسه‌ی تست.
      </p>
    </div>
  );
}
