const Footer = () => {
    return (
        <footer className="py-6 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-t border-purple-200 dark:border-purple-800">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        © 2024 Praveen. All rights reserved.
                    </div>
                    <div className="flex gap-4">
                        <a href="#home" className="text-xs text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                            Back to Top
                        </a>
                        <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
