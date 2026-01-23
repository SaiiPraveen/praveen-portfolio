import { useEffect } from 'react'

const Hero = () => {
    useEffect(() => {
        const heroBackground = document.getElementById('heroBackground')
        if (!heroBackground) return

        // Data formulas and code snippets
        const formulas = [
            "y = mx + b", "f(x) = ∑(xᵢ - μ)²", "p-value < 0.05", "SELECT * FROM data",
            "df.groupby('category')", "model.fit(X, y)", "plt.plot(x, y)", "function analyze() {}",
            "const results = []", "npm run build", "git commit -m 'analysis'", "docker build -t app .",
            "JSON.parse(data)", "axios.get('/api')", "React.useEffect()", "λ = 1/μ",
            "σ = √(Σ(x-μ)²/N)", "R² = 1 - SSR/SST", "P(A|B) = P(B|A)P(A)/P(B)", "∇f(x,y) = [∂f/∂x, ∂f/∂y]"
        ]

        // Create floating formulas
        for (let i = 0; i < 15; i++) {
            const formula = document.createElement('div')
            formula.classList.add('formula')
            formula.textContent = formulas[Math.floor(Math.random() * formulas.length)]

            let top
            if (i % 3 === 0) { top = 10 + Math.random() * 30 }
            else if (i % 3 === 1) { top = 60 + Math.random() * 30 }
            else { top = 35 + Math.random() * 10 }

            formula.style.top = `${top}%`
            formula.style.setProperty('--formula-width', `${formula.textContent.length * 9}px`)
            formula.style.setProperty('--float-y', `${(Math.random() - 0.5) * 40}px`)

            const duration = 25 + Math.random() * 20
            const delay = Math.random() * 15
            formula.style.animation = `floatAcross ${duration}s linear ${delay}s infinite, formulaType ${duration}s linear ${delay}s infinite`
            heroBackground.appendChild(formula)
        }

        // Create data points
        for (let i = 0; i < 25; i++) {
            const dataPoint = document.createElement('div')
            dataPoint.classList.add('data-point')
            const size = Math.random() * 5 + 3
            dataPoint.style.width = `${size}px`
            dataPoint.style.height = `${size}px`
            dataPoint.style.left = `${Math.random() * 100}%`
            dataPoint.style.top = `${Math.random() * 100}%`
            const hue = 270 + (Math.random() * 20 - 10)
            const saturation = 60 + Math.random() * 30
            const lightness = 50 + Math.random() * 20
            dataPoint.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`
            const duration = 8 + Math.random() * 12
            const delay = Math.random() * 10
            dataPoint.style.animation = `dataPointPulse ${duration}s ease-in-out ${delay}s infinite, subtleFloat ${duration * 2}s ease-in-out ${delay}s infinite`
            heroBackground.appendChild(dataPoint)
        }

        // Create bar chart elements
        const barHeights = [80, 120, 60, 150, 90, 110, 70, 130]
        for (let i = 0; i < barHeights.length; i++) {
            const chartBar = document.createElement('div')
            chartBar.classList.add('chart-bar')
            const left = 5 + i * 11
            chartBar.style.left = `${left}%`
            chartBar.style.setProperty('--target-height', `${barHeights[i]}px`)
            const delay = i * 0.5 + 2
            chartBar.style.animation = `barGrow 3s ease-out ${delay}s forwards`
            heroBackground.appendChild(chartBar)
        }

        // Create data flow lines
        for (let i = 0; i < 5; i++) {
            const flowLine = document.createElement('div')
            flowLine.classList.add('data-flow')
            let top
            if (i < 2) { top = 15 + Math.random() * 25 }
            else { top = 65 + Math.random() * 25 }
            flowLine.style.top = `${top}%`
            const thickness = 0.5 + Math.random()
            flowLine.style.height = `${thickness}px`
            const duration = 30 + Math.random() * 20
            const delay = Math.random() * 10
            flowLine.style.setProperty('--float-y', `${(Math.random() - 0.5) * 20}px`)
            flowLine.style.animation = `floatAcross ${duration}s linear ${delay}s infinite`
            heroBackground.appendChild(flowLine)
        }

        // Create network nodes
        for (let i = 0; i < 20; i++) {
            const node = document.createElement('div')
            node.classList.add('network-node')
            const left = Math.random() * 100
            const top = Math.random() * 100
            node.style.left = `${left}%`
            node.style.top = `${top}%`
            const duration = 6 + Math.random() * 8
            const delay = Math.random() * 5
            node.style.animation = `nodePulse ${duration}s ease-in-out ${delay}s infinite`
            heroBackground.appendChild(node)
        }

        return () => { heroBackground.innerHTML = '' }
    }, [])

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 pt-20">
            {/* Background Animation Container */}
            <div className="hero-background absolute inset-0 z-0" id="heroBackground"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">

                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up animation-delay-300 tracking-tight font-['Playfair_Display']">
                    I'm <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient">Sai Srinivas Raghu Praveen</span>
                </h1>

                {/* Role */}
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-8 animate-fade-in-up animation-delay-500">
                    Student <span className="text-purple-500 mx-2">•</span> Data Enthusiast <span className="text-purple-500 mx-2">•</span> Developer
                </p>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-700">
                    I love building user-friendly websites, analyzing complex data, and solving logic puzzles to create impactful digital experiences.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-900">
                    <a href="resume.pdf" className="group relative px-8 py-3 bg-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                        <span className="flex items-center gap-2">
                            <i className="fas fa-file-alt"></i>
                            View Resume
                        </span>
                    </a>

                    <a href="#contact" className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 flex items-center gap-2">
                        <i className="fas fa-paper-plane"></i>
                        Contact Me
                    </a>
                </div>

                {/* Social Links */}
                <div className="mt-12 flex justify-center gap-6 animate-fade-in-up animation-delay-1000">
                    <a href="https://www.linkedin.com/in/sai-srinivas-raghu-praveen-katta-833794270     " className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-300 text-xl border border-gray-200 dark:border-gray-700">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/saipraveen13?tab=repositories" className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 text-xl border border-gray-200 dark:border-gray-700">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-300 text-xl border border-gray-200 dark:border-gray-700">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
