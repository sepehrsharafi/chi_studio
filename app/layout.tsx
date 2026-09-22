import type { Metadata } from "next";
import "@fontsource-variable/vazirmatn";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chistudio.ir"),
  title: "استودیو چی | بازی‌های کوچک، تجربه‌های بزرگ",
  description:
    "استودیو مستقل چی؛ طراح و سازنده‌ی بازی‌های رومیزی و دیجیتال با قصه‌های تازه و تجربه‌های ماندگار.",
  keywords: ["استودیو بازی سازی", "بازی رومیزی", "بازی دیجیتال", "استودیو چی"],
  openGraph: {
    title: "استودیو چی",
    description: "بازی‌های کوچک، تجربه‌های بزرگ.",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
