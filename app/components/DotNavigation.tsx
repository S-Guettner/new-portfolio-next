import { FC } from 'react'

interface DotNavigationProps {
    currentSection: number
    totalSections: number 
}

const DotNavigation: FC<DotNavigationProps> = ({ currentSection, totalSections }) => {
    return (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4">
            {Array.from({ length: totalSections }).map((_, index) => (
                <div
                    key={index}
                    className={`w-4 h-4 rounded-full transition ${currentSection === index ? 'bg-white' : 'bg-gray-400'
                        }`}
                ></div>
            ))}
        </div>
    )
}

export default DotNavigation