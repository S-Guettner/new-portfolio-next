'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import DotNavigation from './components/DotNavigation';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';


export default function Home() {

  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 4;

  useEffect(() => {
    const container = document.getElementById("fullpage-container") as HTMLElement;
    gsap.registerPlugin(ScrollToPlugin);

    document.body.style.overflow = "hidden";

    let isAnimating = false; // Flag to determine if a gsap animation is in progress

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return; // Exit if an animation is currently in progress

      const currentScrollY = window.scrollY;
      const maxScroll = container.scrollHeight - window.innerHeight;

      e.preventDefault();

      // Stop any current gsap animations on window
      gsap.killTweensOf(window, ["scrollTo", "scrollY"]);

      // Scrolling down
      if (e.deltaY > 0 && currentScrollY < maxScroll) {
        isAnimating = true;
        gsap.to(window, {
          duration: 1.5,
          scrollTo: Math.min(currentScrollY + window.innerHeight, maxScroll),
          ease: "power2",
          onComplete: () => {
            isAnimating = false; // Reset flag when animation completes
          }
        });
      }
      // Scrolling up
      else if (e.deltaY < 0 && currentScrollY > 0) {
        isAnimating = true;
        gsap.to(window, {
          duration: 1.5,
          scrollTo: Math.max(currentScrollY - window.innerHeight, 0),
          ease: "power2",
          onComplete: () => {
            isAnimating = false; // Reset flag when animation completes
          }
        });
      }
    };

    container?.addEventListener("wheel", handleWheel, false);

    return () => {
      // Cleanup
      container?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main >
      <section id='fullpage-container' className="bg-black w-screen m-0 p-0">
        <section className='h-screen'>
          <HeroSection />
        </section>
        <section className='h-screen'>
          <SkillsSection />
        </section>
        <section className='h-screen'>
          <h1 className='text-white'>section 3</h1>
        </section>
        <section className='h-screen'>
          <h1 className='text-white'>section 4</h1>
        </section>
      </section>
    </main>

  );
}