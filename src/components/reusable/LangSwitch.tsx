"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

const LangSwitch = () => {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const locales = ["en", "cs"];

  const getHref = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={"relative"} ref={menuRef}>
      <button
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
        type="button"
        className="cursor-pointer relative z-[70] bg-accent-1 inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-accent-8 ring-1 ring-accent-4"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {currentLocale.toUpperCase()}
        <svg
          className={`-mr-1 size-5 text-accent-6 transition-all ${isMenuOpen ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`${isMenuOpen ? "opacity-100 translate-0" : "opacity-0 -translate-y-4 pointer-events-none"} z-[60] transform transition-all absolute right-0 mt-2 w-full origin-top-right rounded-md ring-1 ring-accent-4 focus:outline-hidden bg-accent-1`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        {locales.map((locale, idx) => (
          <Link
            key={locale}
            href={getHref(locale)}
            className="block px-4 py-2 text-sm text-accent-9"
            role="menuitem"
            tabIndex={-1}
            id={"locale-" + idx}
          >
            {locale.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LangSwitch;
