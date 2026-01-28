const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 border-t border-purple-200 dark:border-purple-800">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Praveen
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Student • Data Enthusiast • Developer
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            Building impactful digital experiences through data and code.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="text-sm font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            <a href="#home" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                Home
                            </a>
                            <a href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                About
                            </a>
                            <a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                Projects
                            </a>
                            <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-right">
                        <h4 className="text-sm font-semibold mb-4 text-gray-800 dark:text-gray-200">Connect With Me</h4>
                        <div className="flex justify-center md:justify-end gap-4 mb-4">
                            <a
                                href="https://www.linkedin.com/in/sai-srinivas-raghu-praveen-katta-833794270"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="https://github.com/saipraveen13"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                                aria-label="GitHub"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="mailto:saikatta07@gmail.com.com"
                                className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                                aria-label="Email"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                        <a
                            href="#home"
                            className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                        >
                            <i className="fas fa-arrow-up"></i>
                            Back to Top
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-purple-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <p>© {new Date().getFullYear()} Sai Srinivas Raghu Praveen. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
