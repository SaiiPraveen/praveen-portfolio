const Internships = () => {
    const internships = [
        {
            title: 'Cybersecurity Intern',
            company: 'IBM',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
            period: 'Jan 2024 – Mar 2024',
            type: 'Remote',
            gradient: 'from-blue-600 to-purple-600',
            achievements: [
                'Security audits & penetration testing',
                'Threat modeling & risk assessment',
                'Incident response optimization'
            ]
        },
        {
            title: 'Data Analytics Intern',
            company: 'Tech Solutions Inc.',
            icon: 'fa-chart-line',
            period: 'Jun 2023 – Aug 2023',
            type: 'Hybrid',
            gradient: 'from-green-600 to-blue-600',
            achievements: [
                'Large dataset analysis & insights',
                'Interactive dashboard creation',
                'Predictive model development'
            ]
        },
        {
            title: 'Web Development Intern',
            company: 'Digital Creations',
            icon: 'fa-laptop-code',
            period: 'Mar 2023 – May 2023',
            type: 'On-site',
            gradient: 'from-orange-600 to-red-600',
            achievements: [
                'Responsive web application development',
                'UI/UX design implementation',
                'Website performance optimization'
            ],
            skills: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
            ]
        }
    ]

    return (
        <section id="internships" className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Enhanced Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-200 bg-clip-text text-transparent mb-3">
                        Internships
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-2"></div>
                    <p className="text-gray-600 dark:text-gray-400">Professional journey and hands-on experience</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {internships.map((internship, index) => (
                        <div key={index} className="group relative">
                            <div className={`absolute -inset-1 bg-gradient-to-r ${internship.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/50 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">

                                {/* Floating Logo */}
                                <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br ${internship.gradient} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 ${index % 2 === 0 ? 'group-hover:rotate-12' : 'group-hover:-rotate-12'} transition-all duration-300`}>
                                    {internship.logo ? (
                                        <img className="w-6 h-6 object-contain invert" src={internship.logo} alt={internship.company} />
                                    ) : (
                                        <i className={`fas ${internship.icon} text-lg text-white`}></i>
                                    )}
                                </div>

                                {/* Header */}
                                <div className="mb-4 pt-2">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{internship.title}</h3>
                                    <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm">{internship.company}</p>
                                </div>

                                {/* Timeline */}
                                <div className={`flex items-center gap-3 mb-4 p-3 bg-gradient-to-r ${internship.gradient.replace('600', '50')} dark:${internship.gradient.replace('600', '900/20')} rounded-xl border ${internship.gradient.replace('to-', 'border-').split(' ')[0].replace('from-', '')}-100 dark:border-${internship.gradient.split(' ')[0].replace('from-', '')}-800`}>
                                    <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                                        <i className="fas fa-calendar-alt"></i>
                                        <span>{internship.period}</span>
                                    </div>
                                    <div className="h-3 w-px bg-blue-200 dark:bg-blue-700"></div>
                                    <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400">
                                        <i className={`fas ${internship.type === 'Remote' ? 'fa-laptop-house' : internship.type === 'Hybrid' ? 'fa-sync-alt' : 'fa-building'}`}></i>
                                        <span>{internship.type}</span>
                                    </div>
                                </div>

                                {/* Work Highlights */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2 text-sm">
                                        <i className="fas fa-tasks text-blue-500 text-xs"></i>
                                        <span>Key Achievements</span>
                                    </h4>
                                    <ul className="space-y-2">
                                        {internship.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-2 group/item">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 group-hover/item:scale-150 transition-transform duration-300"></div>
                                                <span className="text-xs text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-white transition-colors duration-300">
                                                    {achievement}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Skills Developed (if available) */}
                                {internship.skills && (
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2 text-sm">
                                            <i className="fas fa-code text-red-500 text-xs"></i>
                                            <span>Skills Developed</span>
                                        </h4>
                                        <div className="flex gap-2">
                                            {internship.skills.map((skill, i) => (
                                                <img key={i} src={skill} className="w-6 h-6" alt="Skill" />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Internships
