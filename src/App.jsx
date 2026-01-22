import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Internships from './components/Internships'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // Check for saved dark mode preference
        const savedMode = localStorage.getItem('darkMode')
        if (savedMode === 'true') {
            setDarkMode(true)
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
        localStorage.setItem('darkMode', !darkMode)
    }

    return (
        <div className="bg-gradient-to-br from-white to-purple-50 dark:from-black dark:to-purple-950 text-gray-900 dark:text-white transition duration-500">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero />
            <About />
            <Skills />
            <Internships />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
