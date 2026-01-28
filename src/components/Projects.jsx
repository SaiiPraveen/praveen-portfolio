const Projects = () => {
    // Helper to get icon URLs
    // Helper to get icon URLs or Classes
    const getTechIcon = (tech) => {
        const icons = {
            'Python': { type: 'icon', value: 'devicon-python-plain colored' },
            'React': { type: 'icon', value: 'devicon-react-original colored' },
            'Node.js': { type: 'icon', value: 'devicon-nodejs-plain colored' },
            'MongoDB': { type: 'icon', value: 'devicon-mongodb-plain colored' },
            'Tailwind': { type: 'icon', value: 'devicon-tailwindcss-original colored' },
            'Django': { type: 'icon', value: 'devicon-django-plain colored' },
            'PostgreSQL': { type: 'icon', value: 'devicon-postgresql-plain colored' },
            'Pandas': { type: 'icon', value: 'devicon-pandas-plain colored' },
            'Scikit-learn': { type: 'icon', value: 'devicon-scikitlearn-plain colored' },
            'Power BI': { type: 'img', value: 'https://www.svgrepo.com/show/354202/power-bi.svg' },
            'Tableau': { type: 'icon', value: 'devicon-tableau-plain colored' },
            'SQL': { type: 'icon', value: 'devicon-mysql-plain colored' }, // Using MySQL as generic SQL icon or find generic
            'TensorFlow': { type: 'icon', value: 'devicon-tensorflow-original colored' },
            'Plotly': { type: 'img', value: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Plotly-logo-01-square.png' },
            'Bokeh': { type: 'img', value: 'https://static.bokeh.org/branding/icons/bokeh-icon.svg' },
            'Java': { type: 'icon', value: 'devicon-java-plain colored' },
            'JavaScript': { type: 'icon', value: 'devicon-javascript-plain colored' }
        }
        return icons[tech] || icons['Python']
    }

    const projects = [
        {
            title: 'InternVault',
            company: 'Full Stack',
            logo: { type: 'icon', value: 'devicon-react-original colored' },
            category: 'Web Dev',
            gradient: 'from-blue-600 to-cyan-500',
            features: [
                'Comprehensive internship platform',
                'AI-powered features',
                'React, Node.js, MongoDB'
            ],
            techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/Internvault'
        },
        {
            title: 'Travel Explorer',
            company: 'Full Stack',
            logo: { type: 'icon', value: 'devicon-python-plain colored' },
            category: 'Web Dev',
            gradient: 'from-emerald-500 to-teal-600',
            features: [
                'Interactive travel planning',
                'Discover new destinations',
                'Django & PostgreSQL'
            ],
            techStack: ['Python', 'Django', 'PostgreSQL'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/TRAVEL_EXPLORER'
        },
        {
            title: 'Uber Analysis',
            company: 'Data Analytics',
            logo: { type: 'img', value: 'https://www.svgrepo.com/show/354202/power-bi.svg' },
            category: 'Analytics',
            gradient: 'from-green-600 to-emerald-600',
            features: [
                'Ride data insights',
                'Metric visualization',
                'Power BI Dashboard'
            ],
            techStack: ['Power BI', 'Python'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/UBER_ANALYSIS'
        },
        {
            title: 'Blinkit Analysis',
            company: 'Data Analytics',
            logo: { type: 'icon', value: 'devicon-python-plain colored' },
            category: 'Analytics',
            gradient: 'from-yellow-400 to-orange-500',
            features: [
                'Sales driver analysis',
                'Item & Outlet characteristics',
                'Python Data Analysis'
            ],
            techStack: ['Python', 'Pandas'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/BLINKIT_ANALYSIS'
        },
        {
            title: 'Financial Loan',
            company: 'Data Analytics',
            logo: { type: 'icon', value: 'devicon-mysql-plain colored' },
            category: 'Analytics',
            gradient: 'from-cyan-600 to-blue-700',
            features: [
                'Loan performance overview',
                'Lending trends analysis',
                'SQL & Tableau'
            ],
            techStack: ['SQL', 'Tableau'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/FINANCIAL_LOAN'
        },
        {
            title: 'Healthcare Report',
            company: 'Data Analytics',
            logo: { type: 'img', value: 'https://www.svgrepo.com/show/354202/power-bi.svg' },
            category: 'Analytics',
            gradient: 'from-red-400 to-rose-600',
            features: [
                'Patient volume metrics',
                'Treatment outcomes',
                'Healthcare Analytics'
            ],
            techStack: ['Power BI', 'Python'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/HEALTHCARE_REPORT'
        },
        {
            title: 'Airlines Analysis',
            company: 'Data Analytics',
            logo: { type: 'icon', value: 'devicon-python-plain colored' },
            category: 'Analytics',
            gradient: 'from-sky-400 to-blue-500',
            features: [
                'On-time arrivals & delays',
                'Passenger volume trends',
                'Data Visualization'
            ],
            techStack: ['Python', 'Pandas'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/AIRLINES_ANALYSIS'
        },
        {
            title: 'IPL Analysis',
            company: 'Data Analytics',
            logo: { type: 'icon', value: 'devicon-python-plain colored' },
            category: 'Analytics',
            gradient: 'from-indigo-500 to-blue-600',
            features: [
                'Match & Player stats',
                'Team performance analysis',
                'Python & Seaborn'
            ],
            techStack: ['Python', 'Pandas'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/IPL_ANALYSIS'
        },
        {
            title: 'Bank Churn',
            company: 'Data Analytics',
            logo: { type: 'icon', value: 'devicon-postgresql-plain colored' },
            category: 'Analytics',
            gradient: 'from-purple-600 to-indigo-700',
            features: [
                'Customer churn trends',
                'Identify at-risk customers',
                'SQL Powered'
            ],
            techStack: ['SQL', 'Python'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/BANK_CHURN_ANALYSIS'
        },
        {
            title: 'Vehicle Insurance',
            company: 'Data Analytics',
            logo: { type: 'icon', value: 'devicon-python-plain colored' },
            category: 'Analytics',
            gradient: 'from-teal-500 to-green-600',
            features: [
                'Risk assessment models',
                'Regional trend analysis',
                'Data Mining'
            ],
            techStack: ['Python', 'Pandas'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/VEHICLE_INSURENCE'
        },
        {
            title: 'Future Sales',
            company: 'Machine Learning',
            logo: { type: 'icon', value: 'devicon-tensorflow-original colored' },
            category: 'ML/AI',
            gradient: 'from-fuchsia-600 to-pink-600',
            features: [
                'Sales forecasting model',
                'Historical data analysis',
                'Regression algorithms'
            ],
            techStack: ['TensorFlow', 'Python'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/FUTURE_SALES_PREDICTION'
        },
        {
            title: 'Waiter Tip',
            company: 'Machine Learning',
            logo: { type: 'icon', value: 'devicon-python-plain colored' },
            category: 'ML/AI',
            gradient: 'from-amber-500 to-orange-600',
            features: [
                'Tip prediction model',
                'Service factor analysis',
                'Predictive Analytics'
            ],
            techStack: ['Python', 'Scikit-learn'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/WAITER_TIP_PREDICTION'
        },
        {
            title: 'Customer Churn',
            company: 'Machine Learning',
            logo: { type: 'icon', value: 'devicon-python-plain colored' },
            category: 'ML/AI',
            gradient: 'from-red-500 to-orange-500',
            features: [
                'Churn classification',
                'Customer retention insights',
                'Scikit-learn'
            ],
            techStack: ['Python', 'Scikit-learn'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/CUSTOMER_CHURN'
        },
        {
            title: 'Iris Classifier',
            company: 'Machine Learning',
            logo: { type: 'icon', value: 'devicon-python-plain colored' },
            category: 'ML/AI',
            gradient: 'from-lime-500 to-green-600',
            features: [
                'Classic ML classification',
                'Sepal & Petal analysis',
                'Pattern Recognition'
            ],
            techStack: ['Python', 'Scikit-learn'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/IRIS_FLOWER_CLSSIFIER'
        },
        {
            title: 'Dynamic Pricing',
            company: 'Algorithms',
            logo: { type: 'icon', value: 'devicon-python-plain colored' },
            category: 'ML/AI',
            gradient: 'from-blue-500 to-indigo-500',
            features: [
                'Parking lot pricing',
                'Demand-based optimization',
                'Algorithmic Strategy'
            ],
            techStack: ['Python'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/DYNAMIC_PRICING_FOR_PARKING_LOTS'
        },
        {
            title: 'Superstore Analysis',
            company: 'Data Analytics',
            logo: { type: 'img', value: 'https://static.bokeh.org/branding/icons/bokeh-icon.svg' },
            category: 'Analytics',
            gradient: 'from-purple-500 to-blue-500',
            features: [
                'Retail data visualization',
                'Interactive charts',
                'Bokeh Library'
            ],
            techStack: ['Python', 'Bokeh'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/SUPERSTORE_ANALYSIS-BOKESH-'
        },
        {
            title: 'Climate Analysis',
            company: 'Data Analytics',
            logo: { type: 'img', value: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Plotly-logo-01-square.png' },
            category: 'Analytics',
            gradient: 'from-cyan-400 to-blue-500',
            features: [
                'Weather pattern viz',
                'Interactive plotting',
                'Plotly & Python'
            ],
            techStack: ['Python', 'Plotly'].map(getTechIcon),
            link: 'https://github.com/saipraveen13/CLIMATE_ANALYSIS-PLOTLY-'
        },
    ]

    return (
        <section id="projects" className="py-20 px-4 relative overflow-hidden w-full">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold mb-4 pb-1 break-words whitespace-normal">
                        <span className="gradient-title-fixed">
                            Featured Projects
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 py-4">Innovative solutions showcasing technical expertise</p>
                </div>

                {/* Carousel Container */}
                <div className="relative group/container w-full" style={{ maxWidth: '100vw', overflow: 'hidden' }}>
                    {/* Scroll Container */}
                    <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
                        {projects.map((project, index) => (
                            <div key={index} className="min-w-[280px] md:min-w-[340px] snap-center first:pl-4 last:pr-4">
                                <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-purple-200 dark:border-purple-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">

                                    {/* Project Header with Logo */}
                                    <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden shrink-0`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {project.logo.type === 'img' ? (
                                                <img src={project.logo.value} alt={project.title} className="w-16 h-16 object-contain filter drop-shadow-lg" />
                                            ) : (
                                                <i className={`${project.logo.value} text-5xl text-white drop-shadow-lg`}></i>
                                            )}
                                        </div>
                                        <div className="absolute top-3 right-3">
                                            <span className={`bg-white/90 text-${project.gradient.split('-')[1]}-700 px-2 py-1 rounded-xl text-xs font-medium`}>
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-lg font-bold text-gray-800 dark:text-white truncate pr-2">{project.title}</h3>
                                            <div className="text-xs text-purple-600 dark:text-purple-400 font-medium whitespace-nowrap">{project.company}</div>
                                        </div>

                                        {/* Bullet Points */}
                                        <ul className="mb-4 space-y-1.5 flex-grow">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                                    <span className="text-purple-500 mr-2 mt-1 shrink-0">•</span>
                                                    <span className="line-clamp-2">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack */}
                                        <div className="flex items-center gap-2 mb-4 h-6 mt-auto">
                                            <div className="flex gap-1">
                                                {project.techStack.map((tech, i) => (
                                                    tech.type === 'img' ? (
                                                        <img key={i} src={tech.value} className="w-5 h-5" alt="Tech" title="Technology" />
                                                    ) : (
                                                        <i key={i} className={`${tech.value} text-xl`} title="Technology"></i>
                                                    )
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 mt-auto">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-xl text-sm font-medium transition-colors duration-300">
                                                View Project
                                            </a>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl flex items-center justify-center transition-colors duration-300">
                                                <i className="fab fa-github text-sm"></i>
                                            </a>
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
                <div className="text-center mt-4 text-sm text-gray-400 animate-pulse md:hidden">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Swipe to see more
                </div>
            </div>


        </section>
    )
}

export default Projects
