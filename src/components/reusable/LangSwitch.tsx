"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl"; // if using next-intl, else omit this

const LangSwitch = () => {
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Manually set locales if you haven't configured next-intl or similar yet:
  const locales = ["en", "cs"];

  // Function to replace locale prefix in pathname
  const getHref = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale; // assumes structure like '/en/about'
    return segments.join("/");
  };

  return (
    <div>
      {locales.map((locale) => (
        <Link key={locale} href={getHref(locale)}>
          <button disabled={locale === currentLocale}>
            {locale.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default LangSwitch;
