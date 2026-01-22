const Projects = () => {
    const projects = [
        {
            title: 'Real-Time Analytics',
            company: 'IBM',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
            category: 'Data Analytics',
            gradient: 'from-blue-500 to-purple-600',
            features: [
                'Real-time data processing and visualization',
                'Machine learning for predictive insights',
                'Interactive dashboard with React'
            ],
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            ]
        },
        {
            title: 'Cloud Dashboard',
            company: 'Google Cloud',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
            category: 'Cloud Platform',
            gradient: 'from-green-500 to-blue-600',
            features: [
                'Real-time cloud resource monitoring',
                'Interactive data visualization with D3.js',
                'Scalable Node.js backend'
            ],
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
            ]
        },
        {
            title: 'Analytics Suite',
            company: 'AWS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
            category: 'E-commerce',
            gradient: 'from-orange-500 to-yellow-600',
            features: [
                'E-commerce data analysis with Python',
                'Data processing with Pandas',
                'Business insights with Tableau'
            ],
            techStack: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tableau/tableau-original.svg'
            ]
        }
    ]

    return (
        <section id="projects" className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Enhanced Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-200 bg-clip-text text-transparent mb-3">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-2"></div>
                    <p className="text-gray-600 dark:text-gray-400">Innovative solutions showcasing technical expertise</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-purple-200 dark:border-purple-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">

                            {/* Project Header with Logo */}
                            <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img src={project.logo} alt={project.company} className="w-16 h-16 invert" />
                                </div>
                                <div className="absolute top-3 right-3">
                                    <span className={`bg-white/90 text-${project.gradient.split('-')[1]}-700 px-2 py-1 rounded-xl text-xs font-medium`}>
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.title}</h3>
                                    <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">{project.company}</div>
                                </div>

                                {/* Bullet Points */}
                                <ul className="mb-4 space-y-1.5">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                            <span className="text-purple-500 mr-2">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex gap-1">
                                        {project.techStack.map((tech, i) => (
                                            <img key={i} src={tech} className="w-5 h-5" alt="Tech" />
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2">
                                    <a href="#" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-xl text-sm font-medium transition-colors duration-300">
                                        View Project
                                    </a>
                                    <a href="#" className="w-9 h-9 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl flex items-center justify-center transition-colors duration-300">
                                        <i className="fab fa-github text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
