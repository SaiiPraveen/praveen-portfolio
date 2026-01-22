import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Compact Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-200 bg-clip-text text-transparent mb-2">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-2"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ready to start your next project? Let's talk!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Contact Details */}
                        <div className="space-y-4">
                            {/* Location */}
                            <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-lg border border-purple-200 dark:border-purple-800">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg flex items-center justify-center">
                                    <i className="fa-solid fa-location-dot text-purple-600 dark:text-purple-400"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs">Visakhapatnam, India</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-lg border border-purple-200 dark:border-purple-800">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg flex items-center justify-center">
                                    <i className="fa-solid fa-envelope text-purple-600 dark:text-purple-400"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs">praveen@email.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-lg border border-purple-200 dark:border-purple-800">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg flex items-center justify-center">
                                    <i className="fa-solid fa-phone text-purple-600 dark:text-purple-400"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Phone</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">Follow Me</h4>
                            <div className="flex gap-3">
                                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-purple-200 dark:border-purple-800 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300">
                                    <i className="fab fa-linkedin text-sm"></i>
                                </a>
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-purple-200 dark:border-purple-800 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300">
                                    <i className="fab fa-github text-sm"></i>
                                </a>
                                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-purple-200 dark:border-purple-800 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300">
                                    <i className="fab fa-twitter text-sm"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-purple-200 dark:border-purple-800 rounded-xl shadow-lg p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Send Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                                    <div className="relative">
                                        <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"></i>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full pl-8 pr-3 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-sm"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                    <div className="relative">
                                        <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"></i>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className="w-full pl-8 pr-3 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-sm"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                                <div className="relative">
                                    <i className="fa-solid fa-tag absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"></i>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project discussion"
                                        className="w-full pl-8 pr-3 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <div className="relative">
                                    <i className="fa-solid fa-message absolute left-3 top-3 text-gray-400 text-xs"></i>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="Tell me about your project..."
                                        className="w-full pl-8 pr-3 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none text-sm"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md text-sm"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <i className="fa-solid fa-paper-plane text-xs"></i>
                                    Send Message
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
