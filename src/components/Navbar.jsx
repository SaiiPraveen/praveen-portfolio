import { useEffect, useState } from 'react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
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
        { href: '#contact', icon: 'fa-paper-plane', label: 'Contact' },
    ]

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            {/* The Pillbar */}
            <nav className={`pointer-events-auto transition-all duration-300 ${scrolled ? 'scale-95 translate-y-[-10px]' : ''
                }`}>
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 shadow-2xl rounded-full px-2 py-2 flex items-center gap-1">

                    {/* Brand Icon (visible on mobile only or just decorative) */}
                    <a href="#home" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg mr-2 hidden sm:flex hover:scale-105 transition-transform">
                        <span className="font-bold font-['Playfair_Display']">P</span>
                    </a>

                    {/* Nav Items */}
                    <div className="flex bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1 border border-black/5 dark:border-white/5">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1)
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group ${isActive
                                        ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-300 shadow-sm'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                        }`}
                                >
                                    <i className={`fa-solid ${link.icon} text-sm transition-transform duration-300 group-hover:scale-110`}></i>
                                    {isActive && (
                                        <span className="hidden md:inline animate-fade-in text-xs font-semibold">{link.label}</span>
                                    )}
                                </a>
                            )
                        })}
                    </div>

                    {/* Separator */}
                    <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1"></div>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-300 active:scale-95"
                        aria-label="Toggle Dark Mode"
                    >
                        <i className={`fa-solid ${darkMode ? 'fa-sun text-yellow-500' : 'fa-moon text-purple-600'} text-lg transform transition-transform duration-500 ${darkMode ? 'rotate-90' : 'rotate-0'}`}></i>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
