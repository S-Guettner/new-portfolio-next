import { FC } from 'react'
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

interface DotNavigationProps {
    currentSection: number
    totalSections: number
    onSectionChange: (sectionIndex: number) => void;
}

const DotNavigation: FC<DotNavigationProps> = ({ currentSection, totalSections, onSectionChange }) => {

    gsap.registerPlugin(ScrollToPlugin);

    const navigateToSection = (sectionIndex: number) => {

        const duration = 1.5;

        gsap.to(window, {
            duration: 1.5,  // or any other desired duration
            scrollTo: window.innerHeight * sectionIndex,
            ease: "power2",
            onStart: () => {
                gsap.delayedCall(duration / 2, () => { onSectionChange(sectionIndex) })
            }
        })
    }

    return (
        <div className="fixed right-4 bottom-0 transform -translate-y-1/2 space-y-4">
            {Array.from({ length: totalSections }).map((_, index) => (
                    <div
                        onClick={() => navigateToSection(index)}
                        key={index}
                        className={`w-4 h-4 rounded-full transition cursor-pointer  ${currentSection === index ? 'bg-white' : 'bg-gray-400'
                            }`}
                    >

                    </div>
            ))}
        </div>
    )
}

export default DotNavigation