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
        <section id="contact" className="py-10 px-4">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-3 pb-1">
                        <span className="gradient-title-fixed">
                            Let's Work Together
                        </span>
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Left Panel - Contact Info */}
                    <div className="md:w-2/5 bg-gradient-to-br from-purple-600 to-indigo-800 p-8 text-white flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                            <p className="text-purple-100 mb-8 text-sm leading-relaxed">
                                Fill out the form and I will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i className="fa-solid fa-phone text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="text-purple-200 text-xs uppercase tracking-wider font-semibold">Phone</p>
                                        <p className="font-medium text-sm">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i className="fa-solid fa-envelope text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="text-purple-200 text-xs uppercase tracking-wider font-semibold">Email</p>
                                        <p className="font-medium text-sm">praveen@email.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i className="fa-solid fa-location-dot text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="text-purple-200 text-xs uppercase tracking-wider font-semibold">Location</p>
                                        <p className="font-medium text-sm">Visakhapatnam, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-8">
                            <p className="text-purple-200 text-xs mb-3 uppercase tracking-wider font-semibold">Follow Me</p>
                            <div className="flex gap-3">
                                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-purple-700 transition-all duration-300">
                                    <i className="fab fa-linkedin-in text-xs"></i>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-purple-700 transition-all duration-300">
                                    <i className="fab fa-github text-xs"></i>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-purple-700 transition-all duration-300">
                                    <i className="fab fa-twitter text-xs"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Form */}
                    <div className="md:w-3/5 p-8 bg-white dark:bg-gray-800">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block group-focus-within:text-purple-600 transition-colors">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 text-gray-900 dark:text-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block group-focus-within:text-purple-600 transition-colors">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 text-gray-900 dark:text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block group-focus-within:text-purple-600 transition-colors">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 text-gray-900 dark:text-white"
                                    placeholder="Project discussion"
                                />
                            </div>

                            <div className="group">
                                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block group-focus-within:text-purple-600 transition-colors">Message</label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 resize-none text-gray-900 dark:text-white"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                                <span>Send Message</span>
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
