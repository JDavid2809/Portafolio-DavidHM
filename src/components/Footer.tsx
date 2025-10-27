"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export function Footer() {
    const BASE_URL = "/Portafolio-DavidHM/"
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const socialLinks = [
        { icon: Github, href: "https://github.com/JDavid2809", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
    ]

    const quickLinks = [
        { name: "Inicio", href: "#hero" },
        { name: "Sobre Mí", href: "#about" },
        { name: "Experiencia", href: "#experience" },
        { name: "Stack", href: "#stack" },
    ]

    return (
        <footer className="relative bg-linear-to-br from-[#0096C7] via-[#0077B6] to-[#023E8A] text-white overflow-hidden">
            <img src={`${BASE_URL}ShapeDivider.svg`} alt="Shape divider" className="w-full block -mt-1" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-white to-white/80 bg-clip-text text-transparent">
                            Juan David Hernández Mendoza 
                        </h3>
                        <p className="text-white/80 leading-relaxed mb-6">
                            Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales y soluciones
                            innovadoras.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-black hover:text-[#0096C7] transition-all duration-300 group"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors duration-300 inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2" />
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 mt-1 shrink-0" />
                                <div>
                                    <p className="text-white/80">Email</p>
                                    <a href="mailto:davidhrnndzmndz@gmail.com" className="text-white hover:underline">
                                        davidhrnndzmndz@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-1 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <div>
                                    <p className="text-white/80">Ubicación</p>
                                    <p className="text-white">San Gabriel Tetzoyocan, Puebla</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <motion.p
                        className="text-white/70 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        © {new Date().getFullYear()} Hecho por David H.M
                    </motion.p>
                </div>
            </div>

            <motion.button
                onClick={scrollToTop}
                className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white text-[#0096C7] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                aria-label="Volver arriba"
            >
                <ArrowUp className="w-6 h-6" />
            </motion.button>
        </footer>
    )
}
