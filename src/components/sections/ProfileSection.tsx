"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ROLES = [
  "MCA Graduate",
  "Python Developer",
  "Full-Stack Web Developer",
  "Machine Learning Specialist",
  "Blockchain Enthusiast",
];

const SKILLS = [
  "Python",
  "Django",
  "Streamlit",
  "Web Development",
  "Databases",
  "MySQL",
  "PostgreSQL",
  "Machine Learning",
  "scikit-learn",
  "Pandas & NumPy",
  "Cloud Fundamentals",
  "Blockchain",
  "Solidity",
  "Linux & Git",
];

export function ProfileSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-black py-28 md:py-40 px-8 md:px-14 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background Watermark */}
      <span
        className="absolute right-6 top-1/2 -translate-y-1/2 font-serif text-white select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(8rem, 20vw, 24rem)", opacity: 0.03 }}
        aria-hidden
      >
        ASK
      </span>

      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── Left main column (7 cols) ──────────────────────────────── */}
          <div className="lg:col-span-7">
            {/* Gold tag */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="w-6 h-px bg-gold" />
              <p className="font-sans text-gold text-[10px] uppercase" style={{ letterSpacing: "0.28em" }}>
                Founder & Lead Developer
              </p>
            </motion.div>

            {/* Sub-greeting */}
            <motion.p
              className="font-sans text-white/50 text-[13px] md:text-[14px] uppercase tracking-[0.24em] mb-2"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Hi, I am
            </motion.p>

            {/* Name */}
            <motion.h2
              className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight"
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.14 }}
            >
              A. Sravan Kumar
            </motion.h2>

            {/* Animated Typewriter Role */}
            <motion.div
              className="flex items-center flex-wrap gap-2 mt-4 text-xl sm:text-2xl md:text-3xl font-serif"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.22 }}
            >
              <span className="text-white/70">I am an</span>
              <span className="text-gold font-serif italic min-h-[1.4em] inline-flex items-center">
                {displayText}
                <span className="inline-block w-[2.5px] h-6 md:h-7 bg-gold ml-1 animate-pulse" />
              </span>
            </motion.div>

            {/* Gold divider line */}
            <motion.div
              className="mt-8 h-px w-20 bg-gold"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            />

            {/* Bio paragraph */}
            <motion.p
              className="font-sans text-white/85 text-[15px] md:text-[16px] leading-[1.85] mt-8 max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.36 }}
            >
              MCA graduate focused on Python, web development, databases, machine learning, and cloud fundamentals. Experienced in building practical applications with Django, Streamlit, data-driven technologies, and blockchain.
            </motion.p>

            {/* Skills & Tech stack badges */}
            <motion.div
              className="mt-8 flex flex-wrap gap-2 max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.44 }}
            >
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-[11px] font-sans border transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.80)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.52 }}
            >
              {/* Portfolio Link */}
              <a
                href="https://akkaladevisravankumar-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-white flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-sans font-semibold text-charcoal hover:scale-105 transition-all duration-200"
                style={{ letterSpacing: "0.04em" }}
              >
                Personal Portfolio ↗
              </a>

              {/* GitHub Repo Link */}
              <a
                href="https://github.com/sravanakkaladevi/ASK-VILLA"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-sans font-medium text-white hover:text-gold hover:border-gold/50 transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.15)", letterSpacing: "0.04em" }}
              >
                GitHub · ASK-VILLA ↗
              </a>

              {/* Instagram handle link */}
              <a
                href="https://www.instagram.com/_sravansravan824_/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-sans text-gold hover:scale-105 transition-all duration-200"
                style={{ border: "1px solid rgba(201,169,110,0.3)", letterSpacing: "0.04em" }}
              >
                @_sravansravan824_ ↗
              </a>
            </motion.div>
          </div>

          {/* ── Right side highlight card (5 cols) ─────────────────────── */}
          <motion.div
            className="lg:col-span-5 lg:pt-8"
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.28 }}
          >
            <div
              className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex items-center justify-between mb-7">
                <span className="font-serif text-gold text-2xl font-bold tracking-tight">ASK</span>
                <span
                  className="font-sans text-[10px] text-white/50 uppercase px-3 py-1 rounded-full border border-white/10"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Developer Profile
                </span>
              </div>

              <div className="space-y-5">
                <div className="border-t border-white/[0.08] pt-4">
                  <p className="font-sans text-gold text-[10px] uppercase mb-1" style={{ letterSpacing: "0.2em" }}>
                    Qualification
                  </p>
                  <p className="font-serif text-white text-lg">
                    Master of Computer Applications (MCA)
                  </p>
                </div>

                <div className="border-t border-white/[0.08] pt-4">
                  <p className="font-sans text-gold text-[10px] uppercase mb-1" style={{ letterSpacing: "0.2em" }}>
                    Core Focus
                  </p>
                  <p className="font-sans text-white/80 text-[14px] leading-relaxed">
                    Python Development, Machine Learning, Web Applications, Cloud & Blockchain
                  </p>
                </div>

                <div className="border-t border-white/[0.08] pt-4">
                  <p className="font-sans text-gold text-[10px] uppercase mb-1" style={{ letterSpacing: "0.2em" }}>
                    Location
                  </p>
                  <p className="font-sans text-white/80 text-[14px]">
                    Hyderabad, India
                  </p>
                </div>

                <div className="border-t border-white/[0.08] pt-4">
                  <p className="font-sans text-gold text-[10px] uppercase mb-1" style={{ letterSpacing: "0.2em" }}>
                    Contact Email
                  </p>
                  <a
                    href="mailto:railucccha@gmail.com"
                    className="font-sans text-white/90 hover:text-gold text-[14px] transition-colors"
                  >
                    railucccha@gmail.com
                  </a>
                </div>
              </div>

              {/* Direct Link pill */}
              <div className="mt-8 pt-5 border-t border-white/[0.08]">
                <a
                  href="https://akkaladevisravankumar-phi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group text-white/80 hover:text-white transition-colors"
                >
                  <span className="font-sans text-[12px] group-hover:text-gold transition-colors" style={{ letterSpacing: "0.06em" }}>
                    akkaladevisravankumar-phi.vercel.app
                  </span>
                  <span className="text-gold text-sm group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
