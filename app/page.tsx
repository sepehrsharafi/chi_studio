import Image from "next/image";
import DynamicNav from "./dynamic-nav";
import InteractiveCard from "./interactive-card";
import InteractiveHero from "./interactive-hero";
import InteractiveSection from "./interactive-section";

const ArrowUpLeft = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M17 17 7 7M17 7H7v10" />
  </svg>
);

const ArrowLeft = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="m14 6-6 6 6 6M8 12h10" />
  </svg>
);

function CityGameArt() {
  return (
    <div className="group/art relative min-h-[24rem] overflow-hidden rounded-[1.75rem] bg-[#4269f3] sm:min-h-[32rem]">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute -left-[13%] bottom-[8%] h-[58%] w-[54%] rotate-[-8deg] rounded-t-[8rem] bg-ink transition-transform duration-700 group-hover/art:rotate-[-4deg]" />
      <div className="absolute -right-[11%] top-[7%] size-[58%] rounded-full bg-sun transition-transform duration-700 group-hover/art:scale-105" />
      <div className="absolute right-[12%] top-[22%] size-[18%] rounded-full bg-coral" />
      <div className="absolute bottom-[18%] right-[14%] grid grid-cols-3 gap-2" aria-hidden="true">
        {[...Array(9)].map((_, index) => (
          <span
            className={`size-7 rounded-sm sm:size-10 ${
              index === 1 || index === 5 ? "bg-coral" : "bg-cream/85"
            }`}
            key={index}
          />
        ))}
      </div>
      <span className="absolute left-6 top-6 rounded-full border border-white/40 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur sm:left-8 sm:top-8">
        ماجراجویی روایی
      </span>
      <div className="absolute bottom-6 left-6 text-left text-white sm:bottom-8 sm:left-8" dir="ltr">
        <p className="text-[0.65rem] tracking-[0.25em] text-white/60">DIGITAL GAME / 01</p>
        <p className="mt-1 text-3xl font-black uppercase leading-none sm:text-4xl">SILENT CITY</p>
      </div>
    </div>
  );
}

function LanternGameArt() {
  return (
    <div className="group/art relative min-h-[21rem] overflow-hidden rounded-[1.75rem] bg-coral sm:min-h-[27rem]">
      <div className="absolute left-1/2 top-1/2 size-[72%] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[2.5rem] border-[1.15rem] border-ink transition-transform duration-700 group-hover/art:rotate-[6deg]" />
      <div className="absolute left-1/2 top-1/2 size-[39%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-sun transition-transform duration-700 group-hover/art:rotate-[135deg]" />
      <div className="absolute left-1/2 top-1/2 size-[13%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream" />
      <span className="absolute right-5 top-5 rounded-full bg-ink px-3 py-1.5 text-xs text-cream sm:right-7 sm:top-7">
        ۲–۴ بازیکن
      </span>
      <p className="absolute bottom-5 left-6 font-mono text-[0.62rem] tracking-[0.15em] text-ink/65 sm:bottom-7 sm:left-8">
        TABLETOP / 02
      </p>
    </div>
  );
}

function ChelehGameArt() {
  return (
    <div className="group/art relative min-h-[21rem] overflow-hidden rounded-[1.75rem] bg-sun sm:min-h-[27rem]">
      <div className="absolute -bottom-[5%] -left-[4%] size-[75%] rounded-full bg-blue transition-transform duration-700 group-hover/art:translate-x-3" />
      <div className="absolute -right-[5%] top-[5%] size-[58%] rounded-full bg-ink transition-transform duration-700 group-hover/art:-translate-x-2" />
      <div className="absolute left-[19%] top-[20%] size-[27%] rotate-45 rounded-[1.3rem] bg-coral shadow-[12px_12px_0_#f8f3e8]" />
      <div className="absolute bottom-[17%] right-[17%] grid grid-cols-2 gap-2" aria-hidden="true">
        <span className="size-8 rounded-full bg-sun" />
        <span className="size-8 rounded-full bg-coral" />
        <span className="size-8 rounded-full bg-cream" />
        <span className="size-8 rounded-full border-4 border-sun" />
      </div>
      <span className="absolute right-5 top-5 rounded-full bg-cream px-3 py-1.5 text-xs text-ink sm:right-7 sm:top-7">
        ۳–۶ بازیکن
      </span>
      <p className="absolute bottom-5 left-6 font-mono text-[0.62rem] tracking-[0.15em] text-white/65 sm:bottom-7 sm:left-8">
        TABLETOP / 03
      </p>
    </div>
  );
}

export default function Home() {
  const marqueeItems = [
    ["بازی رومیزی", "text-white/60"],
    ["✦", "text-coral"],
    ["بازی دیجیتال", "text-white/60"],
    ["●", "text-blue"],
    ["قصه‌گویی تعاملی", "text-white/60"],
    ["✦", "text-coral"],
    ["نمونه‌سازی و تست", "text-white/60"],
    ["●", "text-blue"],
  ];

  return (
    <>
      <DynamicNav />
      <main className="overflow-hidden bg-cream text-ink">
        <section id="top" className="hero-stage border-b border-white/10 bg-ink text-cream">
        <div className="hero-layout relative z-10 h-svh w-full min-w-0 lg:grid lg:grid-cols-[.82fr_1.18fr]">
          <div className="hero-copy relative z-20 flex h-full min-w-0 items-center pb-20 pt-24 sm:pb-24 sm:pt-28 lg:h-auto lg:py-16">
            <div className="w-full max-w-[36rem]">
              <div className="mb-4 flex items-center gap-3 text-xs font-bold text-white/55 sm:mb-6">
                <span className="h-px w-8 bg-coral" />
                <span>استودیوی مستقل طراحی بازی</span>
              </div>
              <h1 className="max-w-full text-[clamp(2.35rem,9vw,4.25rem)] font-black leading-[1.14] tracking-[-0.05em] sm:max-w-[10ch] sm:text-[clamp(2.75rem,4.2vw,4.25rem)]">
                بازی طراحی می‌کنیم؛
                <br />
                <span className="hero-word-mark relative inline-block">
                  رومیزی
                  <svg aria-hidden="true" className="absolute -bottom-2 right-0 w-full overflow-visible text-sun" viewBox="0 0 185 15" fill="none">
                    <path d="M3 10.5C41 3 98 3.5 182 8" stroke="currentColor" strokeLinecap="round" strokeWidth="7" />
                  </svg>
                </span>{" "}
                و دیجیتال<span className="text-coral">.</span>
              </h1>
              <p className="mt-5 max-w-[33rem] text-[0.9rem] leading-7 text-white/65 sm:mt-8 sm:text-base sm:leading-8">
                ما یک تیم کوچک در تهرانیم. ایده‌ها را روی کاغذ شروع می‌کنیم، سریع نمونه می‌سازیم و با بازی‌کردن و بازخورد گرفتن بهترشان می‌کنیم.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4 sm:mt-9">
                <a className="button-hero group" href="#games">
                  <span>دیدن پروژه‌ها</span>
                  <span className="button-hero__icon">
                    <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
                  </span>
                </a>
                <a className="hero-text-link" href="#about">درباره‌ی تیم</a>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4 text-[0.66rem] text-white/45 sm:mt-12 sm:pt-5 sm:text-[0.7rem]">
                <span className="font-mono tracking-[0.12em]" dir="ltr">EST. 2024</span>
                <span className="size-1 rounded-full bg-white/25" />
                <span>تیم کوچک و مستقل، مستقر در تهران</span>
              </div>
            </div>
          </div>

          <InteractiveHero />
        </div>

        <div className="marquee absolute inset-x-0 bottom-0 z-20 overflow-hidden border-t border-white/10 bg-ink/80 py-3.5 text-[0.68rem] font-bold tracking-wide backdrop-blur-sm" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((group) => (
              <div className="marquee-group" key={group}>
                {[...marqueeItems, ...marqueeItems].map(([label, color], index) => (
                  <span className={color} key={`${group}-${index}`}>{label}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <InteractiveSection id="about" className="scroll-mt-8 py-20 sm:py-24 lg:py-28" variant="light">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="section-kicker"><span className="kicker-mark" /> درباره‌ی استودیو</p>
            <InteractiveCard className="group about-play-card relative mt-12 max-w-sm overflow-hidden rounded-2xl border border-ink/12 bg-white/55 p-5 backdrop-blur-sm" ariaHidden>
              <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                <span className="text-[0.68rem] font-bold text-ink/55">مسیر نسخه‌ی بعدی</span>
                <span className="font-mono text-[0.55rem] tracking-[0.1em] text-ink/35" dir="ltr">V. 0.12</span>
              </div>
              <div className="about-game-board mt-4">
                <svg aria-hidden="true" viewBox="0 0 320 150" preserveAspectRatio="none">
                  <path className="about-game-board__track" d="M278 115 C232 122 229 57 174 68 S105 112 48 39" pathLength="1" />
                  <path className="about-game-board__progress" d="M278 115 C232 122 229 57 174 68 S105 112 48 39" pathLength="1" />
                </svg>
                <div className="about-game-board__node about-game-board__node--idea"><span>۱</span><small>ایده</small></div>
                <div className="about-game-board__node about-game-board__node--prototype"><span>۲</span><small>نمونه</small></div>
                <div className="about-game-board__node about-game-board__node--test"><span>۳</span><small>تست</small></div>
                <span className="about-game-board__piece"><i /><i /></span>
              </div>
              <div className="mt-3 flex items-center justify-between rounded-lg bg-ink/[0.045] px-3 py-2 text-[0.62rem] text-ink/50">
                <span>مهره را تا خانه‌ی تست ببرید</span>
                <span className="font-bold text-ink/70">۳ / ۳</span>
              </div>
            </InteractiveCard>
          </div>
          <div>
            <h2 className="max-w-3xl text-3xl font-black leading-[1.4] tracking-[-0.03em] sm:text-4xl lg:text-[2.8rem]">
              یک تیم کوچکیم که بازی‌های رومیزی و دیجیتال می‌سازد.
            </h2>
            <div className="mt-12 grid gap-8 border-t border-ink/15 pt-8 text-sm leading-7 text-ink/60 sm:grid-cols-2 sm:text-base sm:leading-8">
              <p>طراح، تصویرگر، نویسنده و برنامه‌نویس کنار هم کار می‌کنیم. بسته به پروژه، از دوستان متخصص دیگری هم کمک می‌گیریم.</p>
              <p>هر پروژه را کوچک شروع می‌کنیم، خیلی زود نسخه‌ی قابل‌بازی می‌سازیم و تصمیم‌ها را با تست واقعی جلو می‌بریم.</p>
            </div>
          </div>
        </div>

        <div className="stats-grid mt-20 grid border-y border-ink/15 bg-white/20 sm:grid-cols-3 lg:mt-24">
          <InteractiveCard className="stat-cell">
            <span className="stat-number">۰۲</span>
            <span className="stat-label">حوزه‌ی کاری<br />رومیزی و دیجیتال</span>
          </InteractiveCard>
          <InteractiveCard className="stat-cell border-y border-ink/15 sm:border-x sm:border-y-0">
            <span className="stat-number">۱۰۰٪</span>
            <span className="stat-label">مستقل<br />از طراحی تا انتشار</span>
          </InteractiveCard>
          <InteractiveCard className="stat-cell">
            <span className="stat-number">۱۲</span>
            <span className="stat-label">نسخه‌ی تست<br />برای پروژه‌ی فعلی</span>
          </InteractiveCard>
        </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="games" className="scroll-mt-0 bg-ink px-5 py-20 text-cream sm:px-8 sm:py-24 lg:px-14 lg:py-28" variant="dark">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-8 border-b border-white/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-cream/60"><span className="kicker-mark" /> پروژه‌ها</p>
              <h2 className="mt-6 text-3xl font-black leading-[1.2] tracking-[-0.04em] sm:text-4xl lg:text-5xl">چیزهایی که الان<br />روی میز داریم.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/50 sm:text-base sm:leading-8">این پروژه‌ها هنوز در مراحل مختلف طراحی و توسعه‌اند. جزئیات بیشتر را هم‌زمان با جلو رفتن کار منتشر می‌کنیم.</p>
          </div>

          <InteractiveCard as="article" className="featured-game grid gap-8 py-12 lg:grid-cols-[1.16fr_.84fr] lg:items-center lg:gap-16 lg:py-20">
            <CityGameArt />
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs text-white/45">
                <span className="rounded-full bg-blue px-3 py-1.5 font-bold text-white">بازی دیجیتال</span>
                <span>در حال توسعه</span>
              </div>
              <h3 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl">شهر بی‌صدا</h3>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/58">یک بازی ماجراجویی تک‌نفره درباره‌ی پیدا کردن نشانه‌ها، حل معماهای محله و کنار هم گذاشتن اتفاق‌هایی که در شهر افتاده است.</p>
              <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/60">
                <span className="tag-dark">تک‌نفره</span><span className="tag-dark">ماجراجویی</span><span className="tag-dark">معمایی</span>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a className="button-light group" href="#contact">
                  خبرهای پروژه
                  <ArrowUpLeft className="size-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="flex items-center rounded-full border border-white/20 px-5 text-xs text-white/40">ویندوز / اندروید</span>
              </div>
            </div>
          </InteractiveCard>

          <div className="grid gap-8 border-t border-white/15 pt-12 md:grid-cols-2 lg:gap-12 lg:pt-16">
            <InteractiveCard as="article" className="game-card rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-3 pb-6">
              <LanternGameArt />
              <div className="mt-6 flex items-start justify-between gap-6">
                <div><p className="mb-2 text-xs text-white/40">بازی رومیزی / استراتژیک</p><h3 className="text-3xl font-black sm:text-4xl">آخرین فانوس</h3></div>
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/20"><ArrowUpLeft className="size-5" /></span>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">یک بازی رومیزی استراتژیک برای ۲ تا ۴ نفر. بازیکن‌ها منابع محدود را تقسیم می‌کنند و سعی می‌کنند چراغ‌های شهر را روشن نگه دارند.</p>
            </InteractiveCard>

            <InteractiveCard as="article" className="game-card rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-3 pb-6 md:mt-24">
              <ChelehGameArt />
              <div className="mt-6 flex items-start justify-between gap-6">
                <div><p className="mb-2 text-xs text-white/40">بازی رومیزی / دورهمی</p><h3 className="text-3xl font-black sm:text-4xl">چِلّه</h3></div>
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/20"><ArrowUpLeft className="size-5" /></span>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">یک بازی دورهمی برای ۳ تا ۶ نفر که در آن قصه می‌سازید، بلوف می‌زنید و تلاش می‌کنید راز بقیه را حدس بزنید.</p>
            </InteractiveCard>
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="process" className="scroll-mt-8 py-20 sm:py-24 lg:py-28" variant="warm">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="section-kicker"><span className="kicker-mark" /> روش کار</p>
            <h2 className="mt-7 text-3xl font-black leading-[1.25] tracking-[-0.04em] sm:text-4xl lg:text-5xl">از ایده تا یک<br />نسخه‌ی قابل‌بازی.</h2>
          </div>
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {[
              ["۱", "تعریف مسئله", "اول مشخص می‌کنیم بازی برای چه کسی است، قرار است چه تجربه‌ای بسازد و چه محدودیت‌هایی داریم."],
              ["۲", "نمونه‌ی اولیه", "با کاغذ، کد یا هر ابزار ساده‌ای که لازم باشد، سریع یک نسخه‌ی قابل‌بازی می‌سازیم."],
              ["۳", "تست و اصلاح", "با آدم‌های واقعی تست می‌کنیم، بازخورد می‌گیریم و چیزهایی را که کار نمی‌کنند تغییر می‌دهیم."],
            ].map(([number, title, copy], index) => (
              <InteractiveCard className="process-row group grid gap-5 py-7 sm:grid-cols-[4rem_10rem_1fr] sm:items-start sm:py-9" key={title}>
                <span className={`grid size-11 place-items-center rounded-full text-sm font-black ${index === 0 ? "bg-sun" : index === 1 ? "bg-coral" : "bg-blue text-white"}`}>{number}</span>
                <h3 className="text-2xl font-black sm:text-3xl">{title}</h3>
                <p className="text-sm leading-7 text-ink/55 sm:text-base sm:leading-8">{copy}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
        </div>
      </InteractiveSection>

      <section id="contact" className="scroll-mt-0 px-4 pb-4 pt-4 sm:px-6 sm:pb-6 lg:px-10 lg:pb-10">
        <InteractiveCard className="contact-panel relative mx-auto max-w-[1280px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink px-6 py-12 text-cream sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="contact-panel__grid absolute inset-0" aria-hidden="true" />
          <Image
            alt=""
            aria-hidden="true"
            className="contact-panel__logo"
            height={1000}
            src="/Chi Studio Logo.svg"
            width={1000}
          />
          <div className="absolute -left-12 top-1/2 h-px w-48 -rotate-12 bg-coral/60" aria-hidden="true" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold text-white/50">همکاری یا پروژه‌ی تازه</p>
              <h2 className="max-w-2xl text-3xl font-black leading-[1.3] tracking-[-0.035em] sm:text-4xl lg:text-[3.25rem]">ایده‌ای برای بازی دارید؟<br />درباره‌اش حرف بزنیم.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">لازم نیست همه‌چیز آماده باشد. چند خط درباره‌ی ایده، تیم و مرحله‌ای که در آن هستید برای شروع کافی است.</p>
            </div>
            <a className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-sun px-7 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-coral hover:text-white sm:text-base" href="mailto:hello@chistudio.ir">
              ایمیل بزنید
              <ArrowUpLeft className="size-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </InteractiveCard>
      </section>

      <footer className="bg-ink px-5 pb-8 pt-16 text-cream sm:px-8 sm:pt-20 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-3 text-xs text-white/35">راه ارتباطی</p>
              <a className="text-lg hover:text-sun" href="mailto:hello@chistudio.ir" dir="ltr">hello@chistudio.ir</a>
            </div>
            <div><p className="mb-3 text-xs text-white/35">موقعیت</p><p className="text-sm leading-7 text-white/70">تهران، ایران</p></div>
            <div><p className="mb-3 text-xs text-white/35">شبکه‌ها</p><div className="flex gap-4 text-sm text-white/70"><a href="#top" className="hover:text-sun">اینستاگرام</a><a href="#top" className="hover:text-sun">لینکدین</a></div></div>
            <div className="flex items-start lg:justify-end">
              <a className="grid size-12 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-ink" href="#top" aria-label="بازگشت به بالای صفحه">↑</a>
            </div>
          </div>
          <div className="footer-brand-lockup overflow-hidden py-8 sm:py-10" aria-label="CHI Studio">
            <Image
              alt=""
              aria-hidden="true"
              className="footer-brand-mark"
              height={1000}
              src="/Chi Studio Logo.svg"
              width={1000}
            />
            <p className="select-none font-black leading-[0.8] tracking-[-0.08em] text-cream [font-size:clamp(6rem,20vw,17rem)]" dir="ltr">CHI</p>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/15 pt-5 text-[0.65rem] text-white/35 sm:flex-row sm:justify-between">
            <span>© ۲۰۲۶ استودیو چی. تمام حقوق محفوظ است.</span>
            <span>طراحی و ساخته‌شده در تهران.</span>
          </div>
        </div>
        </footer>
      </main>
    </>
  );
}
