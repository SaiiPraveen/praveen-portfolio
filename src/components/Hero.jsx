import { useEffect } from 'react'

const Hero = () => {
    useEffect(() => {
        const heroBackground = document.getElementById('heroBackground')
        if (!heroBackground) return

        // Data formulas and code snippets
        const formulas = [
            "y = mx + b",
            "f(x) = ∑(xᵢ - μ)²",
            "p-value < 0.05",
            "SELECT * FROM data",
            "df.groupby('category')",
            "model.fit(X, y)",
            "plt.plot(x, y)",
            "function analyze() {}",
            "const results = []",
            "npm run build",
            "git commit -m 'analysis'",
            "docker build -t app .",
            "JSON.parse(data)",
            "axios.get('/api')",
            "React.useEffect()",
            "λ = 1/μ",
            "σ = √(Σ(x-μ)²/N)",
            "R² = 1 - SSR/SST",
            "P(A|B) = P(B|A)P(A)/P(B)",
            "∇f(x,y) = [∂f/∂x, ∂f/∂y]"
        ]

        // Create floating formulas
        for (let i = 0; i < 15; i++) {
            const formula = document.createElement('div')
            formula.classList.add('formula')
            formula.textContent = formulas[Math.floor(Math.random() * formulas.length)]

            let top
            if (i % 3 === 0) {
                top = 10 + Math.random() * 30
            } else if (i % 3 === 1) {
                top = 60 + Math.random() * 30
            } else {
                top = 35 + Math.random() * 10
            }

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
            if (i < 2) {
                top = 15 + Math.random() * 25
            } else {
                top = 65 + Math.random() * 25
            }

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

        // Cleanup function
        return () => {
            heroBackground.innerHTML = ''
        }
    }, [])

    return (
        <section id="home" className="flex flex-col justify-center items-center text-center px-4 pt-16 relative">
            <div className="hero-background" id="heroBackground"></div>

            {/* Simple greeting */}
            <div className="mb-2 opacity-0 animate-fade-in-up">
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
                    Hi, I'm
                </p>
            </div>

            {/* Name with clean gradient and custom font */}
            <div className="mb-6 opacity-0 animate-fade-in-up animation-delay-300">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Sai Praveen
                </h1>
            </div>

            {/* Role with simple styling */}
            <div className="mb-6 opacity-0 animate-fade-in-up animation-delay-500">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
                    Student • Data Enthusiast • Developer
                </p>
            </div>

            {/* Description */}
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in-up animation-delay-700 leading-relaxed">
                I love building user-friendly websites, analyzing data, and solving real-world problems using technology.
            </p>

            {/* Simple buttons */}
            <div className="mt-8 flex gap-4 flex-wrap justify-center opacity-0 animate-fade-in-up animation-delay-900">
                <a
                    href="your-resume-link.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                >
                    <i className="fas fa-file-pdf"></i>
                    Resume
                </a>

                <a
                    href="your-cover-letter-link.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white dark:bg-gray-800 border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                >
                    <i className="fas fa-envelope"></i>
                    Cover Letter
                </a>
            </div>

            {/* Simple social links */}
            <div className="mt-8 flex gap-4 opacity-0 animate-fade-in-up animation-delay-1000">
                <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        </section>
    )
}

export default Hero
