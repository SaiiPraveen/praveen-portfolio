import { useState } from 'react'

const Certifications = () => {
    const [filter, setFilter] = useState('all')

    const certificates = [
        {
            category: 'bootcamp',
            title: 'Data Analytics Professional',
            organization: 'IBM SkillsBuild',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
            gradient: 'from-blue-500 to-purple-600',
            duration: '4 Weeks',
            status: 'Completed',
            date: 'March 2024',
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tableau/tableau-original.svg'
            ]
        },
        {
            category: 'workshop',
            title: 'Cloud Computing Fundamentals',
            organization: 'Google Cloud',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
            gradient: 'from-green-500 to-blue-600',
            duration: '2 Days',
            status: 'Advanced',
            date: 'February 2024',
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
            ]
        },
        {
            category: 'hackathon',
            title: '1st Place Winner',
            organization: 'CodeFest 2024',
            icon: 'fa-trophy',
            gradient: 'from-yellow-500 to-orange-600',
            duration: '48 Hours',
            status: 'Winner',
            date: 'January 2024',
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
            ]
        }
    ]

    const filteredCertificates = filter === 'all'
        ? certificates
        : certificates.filter(cert => cert.category === filter)

    return (
        <section id="certificates" className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Enhanced Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-200 bg-clip-text text-transparent mb-3">
                        Certifications & Achievements
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-2"></div>
                    <p className="text-gray-600 dark:text-gray-400">Bootcamps, Workshops & Hackathons</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <button
                        onClick={() => setFilter('all')}
                        className={`filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === 'all'
                                ? 'active bg-purple-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white'
                            }`}
                    >
                        All Certificates
                    </button>
                    <button
                        onClick={() => setFilter('bootcamp')}
                        className={`filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === 'bootcamp'
                                ? 'active bg-purple-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white'
                            }`}
                    >
                        Bootcamps
                    </button>
                    <button
                        onClick={() => setFilter('workshop')}
                        className={`filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === 'workshop'
                                ? 'active bg-purple-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white'
                            }`}
                    >
                        Workshops
                    </button>
                    <button
                        onClick={() => setFilter('hackathon')}
                        className={`filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === 'hackathon'
                                ? 'active bg-purple-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white'
                            }`}
                    >
                        Hackathons
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 certificates-container">
                    {filteredCertificates.map((cert, index) => (
                        <div key={index} className="certificate-card group">
                            <div className="flex h-full">
                                {/* Company Image Side */}
                                <div className={`w-2/5 bg-gradient-to-br ${cert.gradient} relative overflow-hidden flex items-center justify-center p-4`}>
                                    <div className="text-center">
                                        {cert.logo ? (
                                            <img src={cert.logo} alt={cert.organization} className="w-12 h-12 invert mx-auto mb-2" />
                                        ) : (
                                            <i className={`fas ${cert.icon} text-3xl text-white mb-2`}></i>
                                        )}
                                        <div className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                            {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-3">
                                        <i className="fas fa-calendar text-white/80 text-xs"></i>
                                    </div>
                                </div>

                                {/* Certificate Details Side */}
                                <div className="w-3/5 p-4 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-2 leading-tight">{cert.title}</h3>
                                        <p className="text-xs text-purple-600 dark:text-purple-400 mb-3 font-medium">{cert.organization}</p>

                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`${cert.category === 'bootcamp' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' : cert.category === 'workshop' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' : 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300'} px-2 py-1 rounded-full text-xs`}>
                                                {cert.duration}
                                            </span>
                                            <span className={`${cert.status === 'Winner' ? 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300' : 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'} px-2 py-1 rounded-full text-xs`}>
                                                {cert.status}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <i className="fas fa-clock text-[10px]"></i>
                                            <span>{cert.date}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-3">
                                        <div className="flex gap-1">
                                            {cert.techStack.map((tech, i) => (
                                                <img key={i} src={tech} className="w-4 h-4" alt="Tech" />
                                            ))}
                                        </div>
                                        <a href="#" className="w-8 h-8 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group-hover:bg-purple-700">
                                            <i className="fas fa-external-link-alt text-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
