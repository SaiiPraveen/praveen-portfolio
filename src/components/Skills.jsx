const Skills = () => {
    const frontendSkills = [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ]

    const backendSkills = [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    ]

    return (
        <section id="skills" className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Enhanced Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-200 bg-clip-text text-transparent mb-3">
                        Technical Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-2"></div>
                    <p className="text-gray-600 dark:text-gray-400">Technologies and tools I work with</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Frontend Development */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/50 rounded-2xl shadow-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
                                <i className="fas fa-code text-xl text-purple-600 dark:text-purple-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Frontend Development</h3>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {frontendSkills.map((skill) => (
                                <div key={skill.name} className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                    <img src={skill.icon} className="w-4 h-4 mr-2 inline" alt={skill.name} />
                                    {skill.name}
                                </div>
                            ))}
                            <div className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                <i className="fas fa-gem text-red-500 mr-2 text-xs"></i>
                                Ruby on Rails
                            </div>
                        </div>
                    </div>

                    {/* Backend & Data Analytics */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/50 rounded-2xl shadow-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center">
                                <i className="fas fa-database text-xl text-purple-600 dark:text-purple-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Backend & Data Analytics</h3>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {backendSkills.map((skill) => (
                                <div key={skill.name} className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                    <img src={skill.icon} className="w-4 h-4 mr-2 inline" alt={skill.name} />
                                    {skill.name}
                                </div>
                            ))}
                            <div className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                <i className="fas fa-chart-bar text-purple-600 mr-2 text-xs"></i>
                                Tableau
                            </div>
                            <div className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                <i className="fas fa-shield-alt text-green-600 mr-2 text-xs"></i>
                                Cybersecurity
                            </div>
                        </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/50 rounded-2xl shadow-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center">
                                <i className="fas fa-tools text-xl text-purple-600 dark:text-purple-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Tools & Technologies</h3>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center">
                            <div className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                <i className="fab fa-git-alt mr-2 text-xs"></i>Git & GitHub
                            </div>
                            <div className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                <i className="fab fa-docker mr-2 text-xs"></i>Docker
                            </div>
                            <div className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                <i className="fas fa-terminal mr-2 text-xs"></i>Linux/Unix
                            </div>
                            <div className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                <i className="fas fa-cloud mr-2 text-xs"></i>AWS
                            </div>
                            <div className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                <i className="fas fa-server mr-2 text-xs"></i>REST APIs
                            </div>
                            <div className="tech-tag bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                                <i className="fas fa-mobile-alt mr-2 text-xs"></i>Responsive Design
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
