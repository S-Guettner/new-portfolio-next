'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import DotNavigation from './components/navigation/DotNavigation';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';


export default function Home() {



  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 4;


  useEffect(() => {
    // Adjusting for accurate viewport height
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Set the value initially
    setVH();

    // Update it whenever the window is resized
    window.addEventListener('resize', setVH);

    const container = document.getElementById("fullpage-container") as HTMLElement;
    gsap.registerPlugin(ScrollToPlugin);

    document.body.style.overflow = "hidden";
    let isAnimating = false;
    let touchStartY = 0;

    const updateSection = () => {
      const sectionIndex = Math.round(window.scrollY / (window.innerHeight * 0.01 * 100)); // Adjust for the new vh
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
          scrollTo: Math.min(currentScrollY + (window.innerHeight * 0.01 * 100), maxScroll), // Adjust for the new vh
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
          scrollTo: Math.max(currentScrollY - (window.innerHeight * 0.01 * 100), 0), // Adjust for the new vh
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
      window.removeEventListener('resize', setVH); // Cleanup event listener
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };

  }, []);
  return (
    <main className='font-roboto'>
      <DotNavigation
        currentSection={currentSection}
        totalSections={totalSections}
        onSectionChange={setCurrentSection}
      />
      <section id='fullpage-container' className="bg-black w-full m-0 p-0">
        <section className='h-vh100'>
          <HeroSection 
            currentSection={currentSection}
            totalSections={totalSections}
            onSectionChange={setCurrentSection}
          />
        </section>
        <section className='h-vh100'>
          <SkillsSection
            currentSection={currentSection}
          />
        </section>
        <section className='h-vh100 bg-background'>
          <h1 className='text-text'>section 3</h1>
        </section>
        <section className='h-vh100 bg-background'>
          <h1 className='text-text'>section 4</h1>
        </section>
      </section>
    </main>


  );
}