const About = () => {
    return (
        <section id="about" className="py-16 px-4">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                {/* Enhanced About Me Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 dark:from-purple-400 dark:via-purple-300 dark:to-purple-200 bg-clip-text text-transparent drop-shadow-lg mb-3">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
                    <p className="text-md text-gray-600 dark:text-gray-400 mt-2 font-light">Get to know me better</p>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-start gap-6">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-80 min-h-[400px] bg-white/20 dark:bg-gray-800/40 backdrop-blur-2xl border border-white/40 dark:border-gray-700/50 rounded-3xl shadow-xl overflow-hidden flex">
                            <img src="https://i.pravatar.cc/600" alt="Profile Photo" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* About Text Box */}
                    <div className="w-full md:w-2/3 flex flex-col">
                        <div className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-2xl border border-white/40 dark:border-gray-700/50 rounded-3xl shadow-xl p-6 md:p-8 min-h-[400px] flex flex-col">
                            <h3 className="text-xl md:text-2xl font-bold text-purple-800 dark:text-purple-200 mb-3 drop-shadow-sm">
                                Hi, I'm <span className="text-purple-900 dark:text-purple-100 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">Praveen</span>
                            </h3>
                            <p className="text-sm md:text-base text-gray-900 dark:text-gray-100 leading-relaxed font-medium drop-shadow-sm flex-1">
                                I'm a passionate <strong className="text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-1 rounded">Data Analyst</strong> and creative <strong className="text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-1 rounded">Frontend Developer</strong> who turns raw data into impactful insights and clean, modern UI designs.<br /><br />
                                With an academic foundation in <span className="text-purple-700 dark:text-purple-300 font-semibold">Electronics & Communication Engineering</span>, I blend technical knowledge with visual storytelling — from analyzing complex datasets to building interactive digital interfaces.<br /><br />
                                I'm driven by curiosity, detail, and the thrill of turning concepts into tangible, user-centered solutions that are both functional and beautiful.
                            </p>
                        </div>

                        {/* Location and Education Boxes */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            {/* Location Box */}
                            <div className="flex-1 bg-white/20 dark:bg-gray-800/40 backdrop-blur-2xl border border-white/40 dark:border-gray-700/50 rounded-2xl p-4 shadow-md">
                                <div className="flex items-center gap-3">
                                    <div className="bg-purple-200 dark:bg-purple-900/50 p-2 rounded-full shadow-sm">
                                        <i className="fas fa-map-marker-alt text-purple-700 dark:text-purple-300"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 drop-shadow-sm">Location</h4>
                                        <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">Visakhapatnam, India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Education Box */}
                            <div className="flex-1 bg-white/20 dark:bg-gray-800/40 backdrop-blur-2xl border border-white/40 dark:border-gray-700/50 rounded-2xl p-4 shadow-md">
                                <div className="flex items-center gap-3">
                                    <div className="bg-purple-200 dark:bg-purple-900/50 p-2 rounded-full shadow-sm">
                                        <i className="fas fa-graduation-cap text-purple-700 dark:text-purple-300"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 drop-shadow-sm">Education</h4>
                                        <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">Electronics & Communication Engineering</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
