import { useState } from 'react'

const Certifications = () => {
    const [filter, setFilter] = useState('all')

    const certificates = [
        // --- HACKATHONS ---
        {
            category: 'hackathon',
            title: 'Predict2Protect',
            organization: 'Hackathon',
            icon: 'fa-shield-alt',
            gradient: 'from-orange-500 to-red-600',
            duration: '48 Hours',
            status: 'Participant',
            date: '2024',
            link: 'https://github.com/saipraveen13/Predict2Protect_hackthon',
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                'https://upload.wikimedia.org/wikipedia/commons/8/8b/Scikit_learn_logo_small.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
            ]
        },
        {
            category: 'hackathon',
            title: 'Full Stack Challenge',
            organization: 'Hackathon',
            icon: 'fa-layer-group',
            gradient: 'from-violet-600 to-indigo-600',
            duration: '24 Hours',
            status: 'Completed',
            date: '2024',
            link: 'https://github.com/saipraveen13/HACKATHON-FULL-STACK',
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
            ]
        },
        {
            category: 'hackathon',
            title: 'TechGig Challenge',
            organization: 'TechGig',
            icon: 'fa-code',
            gradient: 'from-pink-500 to-rose-500',
            duration: 'Competition',
            status: 'Participant',
            date: '2024',
            link: 'https://github.com/saipraveen13/HACKATHON-TechGig-',
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg'
            ]
        },
        {
            category: 'hackathon',
            title: 'VinShik Innovation',
            organization: 'Hackathon',
            icon: 'fa-lightbulb',
            gradient: 'from-purple-500 to-pink-500',
            duration: 'Event',
            status: 'Completed',
            date: '2024',
            link: 'https://github.com/saipraveen13/HACKATHON-VinShik-',
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
            ]
        },
        {
            category: 'hackathon',
            title: 'CodeSpark',
            organization: 'Hackathon',
            icon: 'fa-bolt',
            gradient: 'from-yellow-500 to-orange-500',
            duration: 'Event',
            status: 'Completed',
            date: '2024',
            link: 'https://github.com/saipraveen13/HACKATHON-CodeSpark-',
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg'
            ]
        },

        // --- WORKSHOPS & BOOTCAMPS ---
        {
            category: 'bootcamp',
            title: 'Full Stack Bootcamp',
            organization: 'Coding Bootcamp',
            icon: 'fa-laptop-code',
            gradient: 'from-slate-500 to-slate-700',
            duration: 'Intensive',
            status: 'Completed',
            date: '2024',
            link: 'https://github.com/saipraveen13/BOOTCAMPS',
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
            ]
        },
        {
            category: 'workshop',
            title: 'Technical Workshops',
            organization: 'Various',
            icon: 'fa-chalkboard-teacher',
            gradient: 'from-gray-600 to-gray-800',
            duration: 'Ongoing',
            status: 'Completed',
            date: '2023-2024',
            link: 'https://github.com/saipraveen13/WORKSHOPS',
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
            ]
        },
    ]

    const filteredCertificates = filter === 'all'
        ? certificates
        : certificates.filter(cert => cert.category === filter)

    return (
        <section id="certificates" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-200 bg-clip-text text-transparent mb-3">
                        Certifications & Achievements
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-2"></div>
                    <p className="text-gray-600 dark:text-gray-400">Bootcamps, Workshops & Hackathons</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {['all', 'hackathon', 'bootcamp', 'workshop'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 capitalize ${filter === cat
                                ? 'active bg-purple-600 text-white shadow-lg shadow-purple-500/30 ring-2 ring-purple-400 ring-offset-2 dark:ring-offset-gray-900'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {cat === 'all' ? 'All Certificates' : cat + 's'}
                        </button>
                    ))}
                </div>

                {/* Carousel Container */}
                <div className="relative group/container">
                    {/* Scroll Container */}
                    <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
                        {filteredCertificates.map((cert, index) => (
                            <div key={index} className="min-w-[300px] md:min-w-[360px] snap-center first:pl-4 last:pr-4">
                                <div className="certificate-card group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 h-full">
                                    <div className="flex h-full">
                                        {/* Company Image Side */}
                                        <div className={`w-2/5 bg-gradient-to-br ${cert.gradient} relative overflow-hidden flex items-center justify-center p-4`}>
                                            <div className="text-center relative z-10">
                                                {cert.logo ? (
                                                    <img src={cert.logo} alt={cert.organization} className="w-12 h-12 invert mx-auto mb-2" />
                                                ) : (
                                                    <i className={`fas ${cert.icon} text-3xl text-white mb-2 transform group-hover:scale-110 transition-transform duration-500`}></i>
                                                )}
                                                <div className="bg-white/20 text-white px-2 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm capitalize tracking-wide">
                                                    {cert.category}
                                                </div>
                                            </div>
                                            <div className="absolute bottom-3 left-3 text-white/50">
                                                <i className="fas fa-calendar text-[10px]"></i>
                                            </div>
                                            {/* Decorative circle */}
                                            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                                        </div>

                                        {/* Certificate Details Side */}
                                        <div className="w-3/5 p-4 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-1 leading-tight line-clamp-2" title={cert.title}>{cert.title}</h3>
                                                <p className="text-[11px] text-purple-600 dark:text-purple-400 mb-3 font-medium uppercase tracking-wider">{cert.organization}</p>

                                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                                    <span className={`${cert.category === 'bootcamp' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' : cert.category === 'workshop' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' : 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300'} px-2 py-0.5 rounded-full text-[10px] font-medium border border-transparent`}>
                                                        {cert.duration}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400">
                                                    <i className="fas fa-clock"></i>
                                                    <span>{cert.date}</span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <div className="flex gap-1">
                                                    {cert.techStack.map((tech, i) => (
                                                        <img key={i} src={tech} className="w-4 h-4 hover:scale-125 transition-transform" alt="Tech" title="Tech Stack" />
                                                    ))}
                                                </div>
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-gray-50 dark:bg-gray-700 hover:bg-purple-600 text-gray-600 dark:text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-purple-500/40">
                                                    <i className="fas fa-external-link-alt text-[10px]"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fade Edges for Mobile */}
                    <div className="absolute top-0 bottom-12 left-0 w-8 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none md:hidden"></div>
                    <div className="absolute top-0 bottom-12 right-0 w-8 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none md:hidden"></div>
                </div>

                {/* Scroll Hint */}
                <div className="text-center mt-0 text-sm text-gray-400 animate-pulse md:hidden">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Swipe to see more
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}

export default Certifications
