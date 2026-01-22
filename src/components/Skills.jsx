const Skills = () => {
    const frontendSkills = [
        { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
        { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', isImage: true },
    ]

    const backendSkills = [
        { name: 'Python', icon: 'fab fa-python', color: 'text-blue-500' },
        { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-600' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', isImage: true },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', isImage: true },
    ]

    return (
        <section id="skills" className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Technical Skills
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit of technologies and methodologies I use to build impactful solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                            <i className="fas fa-code text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Frontend Development</h3>
                        <div className="flex flex-wrap gap-3">
                            {frontendSkills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                    {skill.isImage ? (
                                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                                    ) : (
                                        <i className={`${skill.icon} ${skill.color} text-lg`}></i>
                                    )}
                                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                <i className="fas fa-gem text-red-500 text-lg"></i>
                                <span className="text-gray-700 dark:text-gray-300">Ruby on Rails</span>
                            </div>
                        </div>
                    </div>

                    {/* Backend & Data */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                            <i className="fas fa-database text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Backend & Data</h3>
                        <div className="flex flex-wrap gap-3">
                            {backendSkills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                    {skill.isImage ? (
                                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                                    ) : (
                                        <i className={`${skill.icon} ${skill.color} text-lg`}></i>
                                    )}
                                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                </div>
                            ))}
                            {/* Tableau - Image */}
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tableau/tableau-original.svg" alt="Tableau" className="w-5 h-5" />
                                <span className="text-gray-700 dark:text-gray-300">Tableau</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                <i className="fas fa-shield-alt text-green-500 text-lg"></i>
                                <span className="text-gray-700 dark:text-gray-300">Cybersecurity</span>
                            </div>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                            <i className="fas fa-tools text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Tools & Tech</h3>
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                <i className="fab fa-git-alt text-red-500 text-lg"></i>
                                <span className="text-gray-700 dark:text-gray-300">Git & GitHub</span>
                            </div>
                            {/* Docker - Image */}
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-5 h-5" />
                                <span className="text-gray-700 dark:text-gray-300">Docker</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                <i className="fas fa-terminal text-gray-500 text-lg"></i>
                                <span className="text-gray-700 dark:text-gray-300">Linux/Unix</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                <i className="fab fa-aws text-orange-500 text-lg"></i>
                                <span className="text-gray-700 dark:text-gray-300">AWS</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                <i className="fas fa-server text-blue-400 text-lg"></i>
                                <span className="text-gray-700 dark:text-gray-300">REST APIs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
