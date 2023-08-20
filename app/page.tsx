'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import DotNavigation from './components/DotNavigation';
import HeroSection from './components/sections/HeroSection';


export default function Home() {

  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 4;

  useEffect(() => {
    const container = document.getElementById("fullpage-container") as HTMLElement;
    gsap.registerPlugin(ScrollToPlugin);

    document.body.style.overflow = "hidden";

    let isAnimating = false;
    let touchStartY = 0;

    const updateSection = () => {
      const sectionIndex = Math.round(window.scrollY / window.innerHeight);
      setCurrentSection(sectionIndex);
    };

    const scrollToSection = (direction: 'up' | 'down') => {
      const currentScrollY = window.scrollY;
      const maxScroll = container.scrollHeight - window.innerHeight;

      if (isAnimating) return;

      // Stop any current gsap animations on window
      gsap.killTweensOf(window, ["scrollTo", "scrollY"]);

      if (direction === 'down' && currentScrollY < maxScroll) {
        isAnimating = true;
        gsap.to(window, {
          duration: 1.5,
          scrollTo: Math.min(currentScrollY + window.innerHeight, maxScroll),
          ease: "power2",
          onComplete: () => {
            isAnimating = false;
            updateSection();
          },
          onStart: () => {
            gsap.delayedCall(0.75, updateSection);
          }
        });
      } else if (direction === 'up' && currentScrollY > 0) {
        isAnimating = true;
        gsap.to(window, {
          duration: 1.5,
          scrollTo: Math.max(currentScrollY - window.innerHeight, 0),
          ease: "power2",
          onComplete: () => {
            isAnimating = false;
            updateSection();
          },
          onStart: () => {
            gsap.delayedCall(0.75, updateSection);
          }
        });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        scrollToSection('down');
      } else {
        scrollToSection('up');
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchEndY - touchStartY;

      if (deltaY < 0) {
        scrollToSection('down');
      } else {
        scrollToSection('up');
      }
    };

    container.addEventListener("wheel", handleWheel);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };

  }, []);

  console.log("TEST")

  return (
    <main >
      <DotNavigation
        currentSection={currentSection}
        totalSections={totalSections}
        onSectionChange={setCurrentSection}
      />
      <section id='fullpage-container' className="bg-black w-screen m-0 p-0">
        <HeroSection />
        <main className='h-screen'>
          <h1 className='text-white'>main 2</h1>
        </main>
        <main className='h-screen'>
          <h1 className='text-white'>main 3</h1>
        </main>
        <main className='h-screen'>
          <h1 className='text-white'>main 4</h1>
        </main>
      </section>
    </main>

  );
}