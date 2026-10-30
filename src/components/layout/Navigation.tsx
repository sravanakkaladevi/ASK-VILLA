"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [active, setActive] = useState("Home");

  const scrollTo = (href: string, label: string) => {
    setActive(label);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      aria-label="Site header"
    >
      <div className="relative flex items-center justify-between px-5 md:px-8 pt-5 md:pt-6">

        {/* ── Left: Logo mark ── */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero", "Home");
          }}
          aria-label="Sravan Co. / ASK-VILLA"
          className="pointer-events-auto flex-shrink-0 z-10 group"
        >
          <div
            className="glass-dark w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
          >
            <span className="font-serif text-white/95 text-[13px] font-bold tracking-wider select-none">
              ASK
            </span>
          </div>
        </a>

        {/* ── Centre: glass pill nav — truly centred ── */}
        <div
          className="glass-dark pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-0.5 p-1.5 rounded-full"
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(href, label);
              }}
              className="relative px-4 py-[7px] rounded-full text-[12px] font-sans font-medium cursor-pointer transition-colors duration-200 whitespace-nowrap"
              style={{
                color: active === label ? "#111110" : "rgba(255,255,255,0.75)",
                letterSpacing: "0.025em",
              }}
            >
              {/* Sliding white active indicator */}
              {active === label && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.96)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,1)",
                  }}
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </a>
          ))}
        </div>

        {/* ── Right: Instagram (_sravansravan824_) + CTA ── */}
        <div className="pointer-events-auto flex items-center gap-2.5 z-10">

          {/* Instagram link (X and Facebook removed) */}
          <a
            href="https://www.instagram.com/_sravansravan824_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram: _sravansravan824_"
            title="Instagram @_sravansravan824_"
            className="glass-dark px-3 py-1.5 h-9 flex items-center gap-2 rounded-full transition-all duration-300 hover:scale-105 group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors group-hover:stroke-gold"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span className="hidden md:inline text-[11px] font-sans text-white/80 group-hover:text-gold transition-colors">
              _sravansravan824_
            </span>
          </a>

          {/* Consultation CTA */}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact", "Contact");
            }}
            className="glass-white flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full text-[12px] font-sans font-semibold text-charcoal cursor-pointer"
            style={{ letterSpacing: "0.03em" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            Consultation
            {/* Arrow badge */}
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0"
              style={{
                background: "#111110",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              ↗
            </span>
          </motion.a>

        </div>
      </div>
    </nav>
  );
}
