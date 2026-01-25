import { useEffect, useState } from 'react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
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
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none pt-4 md:pt-6">
            {/* The Pillbar */}
            <nav className={`pointer-events-auto transition-all duration-300 ${scrolled ? 'scale-95 translate-y-[-10px]' : ''
                }`}>
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 shadow-2xl rounded-full px-3 py-1.5 md:px-4 md:py-2 flex items-center justify-between md:justify-center gap-2 md:gap-4 mx-auto relative w-[95vw] md:w-auto">
                    {/* Brand Icon */}
                    <a href="#home" className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform">
                        <span className="font-bold font-['Playfair_Display'] text-sm md:text-base">P</span>
                    </a>

                    {/* Desktop Nav Items */}
                    <div className="hidden md:flex bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1 border border-black/5 dark:border-white/5">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1)
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group whitespace-nowrap ${isActive
                                        ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-300 shadow-sm'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                        }`}
                                >
                                    <i className={`fas ${link.icon} text-sm transition-transform duration-300 group-hover:scale-110`}></i>
                                    {isActive && (
                                        <span className="animate-fade-in text-xs font-semibold">{link.label}</span>
                                    )}
                                </a>
                            )
                        })}
                    </div>

                    {/* Separator (Desktop) */}
                    <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1 shrink-0"></div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-300 active:scale-95 border border-gray-200 dark:border-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-sm`}></i>
                    </button>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-300 active:scale-95"
                        aria-label="Toggle Dark Mode"
                    >
                        <i className={`fas ${darkMode ? 'fa-sun text-yellow-500' : 'fa-moon text-purple-600'} text-base md:text-lg transform transition-transform duration-500 ${darkMode ? 'rotate-90' : 'rotate-0'}`}></i>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full mt-4 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-3xl shadow-2xl flex flex-col gap-2 md:hidden animate-fade-in-up origin-top transform transition-all duration-300">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1)
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 ${isActive
                                        ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-purple-200 dark:bg-purple-800 text-purple-700 dark:text-purple-300' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                                        <i className={`fas ${link.icon} text-sm`}></i>
                                    </div>
                                    {link.label}
                                    {isActive && <i className="fa-solid fa-chevron-right ml-auto text-xs opacity-50"></i>}
                                </a>
                            )
                        })}
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
