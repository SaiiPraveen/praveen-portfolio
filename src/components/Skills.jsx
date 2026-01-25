const Skills = () => {
    const languagesAndDb = [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'C', icon: 'devicon-c-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'C#', icon: 'devicon-csharp-plain colored' },
        { name: 'R', icon: 'devicon-r-plain colored' },
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    ]

    const frameworksAndLibs = [
        { name: 'Pandas', icon: 'devicon-pandas-plain colored' },
        { name: 'NumPy', icon: 'devicon-numpy-plain colored' },
        { name: 'Matplotlib', icon: 'devicon-matplotlib-plain colored' },
        { name: 'Seaborn', icon: 'fas fa-chart-area', color: 'text-blue-300' },
        { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain colored' },
        { name: 'Flask', icon: 'devicon-flask-original colored' },
        { name: 'React.js', icon: 'devicon-react-original colored' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express.js', icon: 'devicon-express-original' }, // express-original has no colored version usually, it is just black/white
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
    ]

    const toolsAndIde = [
        { name: 'Power BI', icon: 'fas fa-chart-pie', color: 'text-yellow-500' },
        { name: 'Tableau', icon: 'devicon-tableau-plain colored' },
        { name: 'Excel', icon: 'fas fa-file-excel', color: 'text-green-600' },
        { name: 'Alteryx', icon: 'fas fa-cogs', color: 'text-blue-400' },
        { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
        { name: 'Jupyter', icon: 'devicon-jupyter-plain colored' },
        { name: 'Google Colab', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg', isImage: true },
    ]

    return (
        <section id="skills" className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 pb-1">
                        <span className="gradient-title-fixed">
                            Technical Skills
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit of technologies and methodologies I use to build impactful solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Languages & Databases */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                            <i className="fas fa-code text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Languages & Databases</h3>
                        <div className="flex flex-wrap gap-3">
                            {languagesAndDb.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                    {skill.isImage ? (
                                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                                    ) : (
                                        <i className={`${skill.icon} ${skill.color || ''} text-lg`}></i>
                                    )}
                                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks & Libraries */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                            <i className="fas fa-layer-group text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Frameworks & Libraries</h3>
                        <div className="flex flex-wrap gap-3">
                            {frameworksAndLibs.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                    {skill.isImage ? (
                                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                                    ) : (
                                        <i className={`${skill.icon} ${skill.color || ''} text-lg`}></i>
                                    )}
                                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & IDEs */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                            <i className="fas fa-tools text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Tools & IDEs</h3>
                        <div className="flex flex-wrap gap-3">
                            {toolsAndIde.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300">
                                    {skill.isImage ? (
                                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                                    ) : (
                                        <i className={`${skill.icon} ${skill.color || ''} text-lg`}></i>
                                    )}
                                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
