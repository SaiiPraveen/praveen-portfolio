import { useEffect, useState } from 'react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            let current = 'home'

            sections.forEach(section => {
                const sectionTop = section.offsetTop
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id')
                }
            })

            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#home', icon: 'fa-house', label: 'Home' },
        { href: '#about', icon: 'fa-user', label: 'About' },
        { href: '#skills', icon: 'fa-laptop-code', label: 'Skills' },
        { href: '#internships', icon: 'fa-briefcase', label: 'Internships' },
        { href: '#projects', icon: 'fa-code', label: 'Projects' },
        { href: '#certificates', icon: 'fa-certificate', label: 'Certifications' },
        { href: '#contact', icon: 'fa-envelope', label: 'Contact' },
    ]

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-full px-4 py-3 shadow-lg">
            <div className="flex gap-2 items-center overflow-x-auto whitespace-nowrap max-w-[95vw]">
                {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1)
                    return (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${isActive
                                    ? 'bg-purple-600 text-white shadow-md'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            <i className={`fa-solid ${link.icon} text-sm`}></i>
                            <span className="hidden sm:inline text-sm font-medium">{link.label}</span>
                        </a>
                    )
                })}

                <button
                    onClick={toggleDarkMode}
                    className="ml-2 px-3 py-2 rounded-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    <i className={`fa-solid ${darkMode ? 'fa-sun text-yellow-500' : 'fa-moon text-purple-600'} text-sm`}></i>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
