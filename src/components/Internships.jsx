const Internships = () => {
    const internships = [
        {
            title: 'AI & ML Intern',
            company: 'Edunet Foundation (AICTE)',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png', // AICTE logo or generic
            period: 'Jun 18, 2025 – Jul 30, 2025',
            type: 'Remote',
            gradient: 'from-blue-600 to-indigo-600',
            achievements: [
                'Built Machine Learning models',
                'Analyzed complex datasets',
                'Integrated AI solutions for real-world problems'
            ]
        },
        {
            title: 'ServiceNow Intern',
            company: 'SmartBridge',
            icon: 'fa-network-wired',
            period: 'May 2025 – Jul 2025',
            type: 'Remote',
            gradient: 'from-green-600 to-teal-600',
            achievements: [
                'ServiceNow Administration tasks',
                'ITSM workflow automation',
                'Instance management and configuration'
            ]
        },
        {
            title: 'Data Analytics Intern',
            company: 'Skillbit Technologies',
            icon: 'fa-chart-bar',
            period: 'May 5, 2025 – Jun 15, 2025',
            type: 'Remote',
            gradient: 'from-yellow-500 to-orange-500',
            achievements: [
                'Data processing and cleaning',
                'Visualized trends using analytics tools',
                'Generated actionable business insights'
            ]
        },
        {
            title: 'AI Fundamentals Intern',
            company: 'Nasscom FutureSkills Prime',
            icon: 'fa-microchip',
            period: 'Short-Term (2 Months)',
            type: 'Remote',
            gradient: 'from-cyan-500 to-blue-500',
            achievements: [
                'Mastered AI core concepts',
                'Completed FutureSkills Prime coursework',
                ' demonstrated AI readiness'
            ]
        },
        {
            title: 'Artificial Intelligence Intern',
            company: 'NoviTech R&D',
            icon: 'fa-brain',
            period: 'Apr 07, 2025 – May 07, 2025',
            type: 'Remote',
            gradient: 'from-purple-600 to-pink-600',
            achievements: [
                'Studied Deep Learning concepts',
                'Designed Neural Network architectures',
                'Explored real-world AI applications'
            ]
        },
        {
            title: 'Data Analytics Intern',
            company: 'NoviTech R&D',
            icon: 'fa-chart-pie',
            period: 'Apr 07, 2025 – May 07, 2025',
            type: 'Remote',
            gradient: 'from-orange-500 to-red-500',
            achievements: [
                'Data visualization with Tableau/PowerBI',
                'Performed statistical analysis',
                'Derived business intelligence insights'
            ]
        },
        {
            title: 'Cybersecurity Intern',
            company: 'Edunet Foundation (IBM SkillsBuild)',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
            period: 'Jun 03, 2024 – Jul 15, 2024',
            type: 'Remote',
            gradient: 'from-gray-700 to-black',
            achievements: [
                'Gained proficiency in Kali Linux',
                'Conducted network security auditing',
                'Learned ethical hacking fundamentals'
            ]
        }
    ]

    return (
        <section id="internships" className="py-20 px-4 relative overflow-hidden w-full max-w-[100vw]">
            <div className="max-w-6xl mx-auto relative z-10 max-w-[100vw]" style={{ maxWidth: '100vw' }}>
                {/* Enhanced Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold mb-4 pb-1 break-words whitespace-normal">
                        <span className="gradient-title-fixed">
                            Internships
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Professional journey and hands-on experience across various domains.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative group/container w-full" style={{ maxWidth: '100vw', overflow: 'hidden' }}>
                    {/* Scroll Container */}
                    <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
                        {internships.map((internship, index) => (
                            <div
                                key={index}
                                className="min-w-[280px] md:min-w-[340px] snap-center first:pl-4 last:pr-4"
                            >
                                <div className="h-full group relative pt-6">
                                    {/* Removed background blur effect as requested */}
                                    <div className="relative h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">

                                        {/* Floating Logo - Adjusted size and position */}
                                        <div className={`absolute -top-5 right-5 w-12 h-12 bg-gradient-to-br ${internship.gradient} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                            {internship.logo ? (
                                                <img className="w-7 h-7 object-contain invert brightness-0 invert" src={internship.logo} alt={internship.company} />
                                            ) : (
                                                <i className={`fas ${internship.icon} text-xl text-white`}></i>
                                            )}
                                        </div>

                                        {/* Header */}
                                        <div className="mb-4 mt-2">
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 pr-12 leading-tight">{internship.title}</h3>
                                            <p className={`text-sm font-semibold bg-gradient-to-r ${internship.gradient} bg-clip-text text-transparent`}>
                                                {internship.company}
                                            </p>
                                        </div>

                                        {/* Timeline & Type - Neutral Background for Readability */}
                                        <div className="flex flex-wrap items-center gap-3 mb-6 p-3 bg-gray-100 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                                            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                                <i className="fas fa-calendar-alt text-gray-500 dark:text-gray-400"></i>
                                                <span>{internship.period}</span>
                                            </div>
                                            <div className="hidden sm:block h-4 w-px bg-gray-300 dark:bg-gray-500"></div>
                                            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                                <i className={`fas ${internship.type === 'Remote' ? 'fa-laptop-house' : 'fa-building'} text-gray-500 dark:text-gray-400`}></i>
                                                <span>{internship.type}</span>
                                            </div>
                                        </div>

                                        {/* Work Highlights */}
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                                                <i className="fas fa-star text-yellow-500 text-sm"></i>
                                                <span>Key Achievements</span>
                                            </h4>
                                            <ul className="space-y-3">
                                                {internship.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-3 group/item">
                                                        <span className={`min-w-[6px] h-6 w-1.5 rounded-full bg-gradient-to-b ${internship.gradient}`}></span>
                                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300 leading-relaxed">
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Fade Edges */}
                    <div className="absolute top-0 bottom-12 left-0 w-8 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none md:hidden"></div>
                    <div className="absolute top-0 bottom-12 right-0 w-8 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none md:hidden"></div>
                </div>

                {/* Scroll Hint */}
                <div className="text-center mt-4 text-sm text-gray-400 animate-pulse md:hidden">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Swipe to see more
                </div>
            </div>


        </section>
    )
}

export default Internships
