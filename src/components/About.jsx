const About = () => {
    return (
        <section id="about" className="about-section relative">
            <div className="container relative z-10">
                {/* Enhanced About Me Heading */}
                <div className="section-header">
                    <h2 className="text-3xl md:text-5xl font-bold mb-3 pb-1">
                        <span className="gradient-title-fixed">
                            About Me
                        </span>
                    </h2>
                    <div className="section-underline"></div>
                    <p className="section-subtitle">Get to know me better</p>
                </div>

                <div className="about-content">
                    <div className="about-image-container">
                        <div className="about-image-wrapper">
                            <img src="https://i.pravatar.cc/600" alt="Profile Photo" />
                        </div>
                    </div>

                    {/* About Text Box */}
                    <div className="about-text-container">
                        <div className="about-text-box">
                            <h3>
                                Hi, I'm <span>Praveen</span>
                            </h3>
                            <p>
                                I'm a passionate <strong>Data Analyst</strong> and creative <strong>Frontend Developer</strong> who turns raw data into impactful insights and clean, modern UI designs.<br /><br />
                                With an academic foundation in <span style={{ color: 'var(--purple-700)', fontWeight: 600 }}>Electronics & Communication Engineering</span>, I blend technical knowledge with visual storytelling — from analyzing complex datasets to building interactive digital interfaces.<br /><br />
                                I'm driven by curiosity, detail, and the thrill of turning concepts into tangible, user-centered solutions that are both functional and beautiful.
                            </p>
                        </div>

                        {/* Location and Education Boxes */}
                        <div className="about-info-boxes">
                            {/* Location Box */}
                            <div className="info-box">
                                <div className="info-box-content">
                                    <div className="info-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info-text">
                                        <h4>Location</h4>
                                        <p>pasarlapudi, Andhra Pradesh, India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Education Box */}
                            <div className="info-box">
                                <div className="info-box-content">
                                    <div className="info-icon">
                                        <i className="fas fa-graduation-cap"></i>
                                    </div>
                                    <div className="info-text">
                                        <h4>Education</h4>
                                        <p>Electronics & Communication Engineering</p>
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
