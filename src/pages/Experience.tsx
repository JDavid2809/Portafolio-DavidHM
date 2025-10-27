"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, Github, ExternalLink } from "lucide-react"

const experiences = [
    {
        title: "Desarrollador Front-end",
        company: "Proyecto universitario TruekLand",
        period: "2023",
        description:
            "Aplicación web para realizar trueques e intercambios entre usuarios. Participación en el diseño de interfaz y conexión con el back-end, haciéndola en una PWA.",
        skills: ["Next.js", "TailwindCSS", "FireBase", "GitHub"],
        links: [
            { type: "project", url: "https://trueklandweb.vercel.app/" },
            { type: "repo", url: "https://github.com/lisandro-flores/trueklandweb.git" }
        ]
    },
    {
        title: "Desarrollador Front-End",
        company: "UDEA",
        period: "2025",
        description:
            "Desarrollo de una plataforma web para la creación de una biblioteca virtual. Implementación de funcionalidades interactivas y optimización del rendimiento.",
        skills: ["Next.js", "TypeScript", "Node.js", "TailwindCSS", "GitHub", "API REST"],
        links: [
            { type: "repo", url: "https://github.com/JDavid2809/BibliotecaUDEA.git" }
        ]
    },
    {
        title: "Desarrollador Front-End",
        company: "UTTCAM Universidad Tecnológica de Tecámachalco",
        period: "2025 - Presente",
        description:
            "Desarrollo y mantenimiento del sitio web institucional de la universidad. Despliegue de la aplicación y cambios continuos en servidor CPanel. Actualmente estamos realizando un Dashboard para la gestión de esta página",
        skills: ["React", "TypeScript", "Node.js", "TailwindCSS", "GitHub", "CPanel"],
        links: [
            { type: "project", url: "https://uttecam.edu.mx/" },
            { type: "repo", url: "https://github.com/RaulZamoraPerez/UTTECAM.git" }
        ]
    },
    {
        title: "Desarrollador Full Stack Jr",
        company: "Triunfando con el Inglés",
        period: "2025 - Presente",
        description:
            "PWA enfocada en ofrecer cursos de inglés en línea. Creación de interfaces de usuario modernas y responsivas. Colaboración estrecha con diseñadores y backend developers.",
        skills: ["Next.js", "TailwindCSS", "Node.js", "Docker", "Prisma", "GitHub"],
        links: [
            { type: "repo", url: "https://github.com/JDavid2809/Integradora-TCEI.git" }
        ]
    },
]

export function Experience() {
    return (
        <section className="px-4 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden" id="experience">
            <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-[#0096C7]/5 to-transparent" />
            <motion.div
                className="absolute top-40 -left-20 w-96 h-96 bg-[#0096C7]/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
                className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-[#0096C7]/10 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-linear-to-r from-[#0096C7]/10 to-[#00B4D8]/10 border-2 border-[#0096C7]/20 mb-8 shadow-lg"
                    >
                        <span className="text-[#0096C7] font-black text-base uppercase tracking-wider">
                            Experiencia Profesional
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-balance text-gray-900 leading-tight">
                        Mi <span className="text-[#0096C7]">Trayectoria</span>
                        <br />
                        Profesional
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Construyendo soluciones innovadoras y liderando equipos hacia el éxito
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line mejorada */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#0096C7] via-[#0096C7] to-[#0096C7]/20 -translate-x-1/2" />

                    <div className="space-y-24 md:space-y-32">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                className="relative"
                            >
                                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                                    {/* Content card - alternating sides */}
                                    <motion.div
                                        className={`w-full ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"}`}
                                        whileHover={{ scale: 1.03, y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative p-8 md:p-10 rounded-3xl bg-white border-2 border-gray-200 shadow-2xl hover:shadow-[#0096C7]/20 hover:border-[#0096C7]/30 transition-all overflow-hidden group">
                                            <motion.div
                                                className="absolute inset-0 bg-linear-to-br from-[#0096C7]/5 via-transparent to-[#00B4D8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                initial={false}
                                            />

                                            {/* Decorative corner */}
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-[#0096C7]/10 to-transparent rounded-bl-full" />
                                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-[#0096C7]/5 to-transparent rounded-tr-full" />

                                            <div className="relative z-10">
                                                <div className="flex items-start gap-5 mb-6">
                                                    <motion.div
                                                        className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#0096C7] to-[#00B4D8] flex items-center justify-center shadow-xl shadow-[#0096C7]/40 shrink-0"
                                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                                        transition={{ duration: 0.6 }}
                                                    >
                                                        <Briefcase className="w-8 h-8 text-white" />
                                                    </motion.div>
                                                    <div className="flex-1 pt-1">
                                                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight">
                                                            {exp.title}
                                                        </h3>
                                                        <p className="text-xl md:text-2xl text-[#0096C7] font-black mb-3">{exp.company}</p>
                                                        <div className="flex items-center gap-2 text-gray-500">
                                                            <Calendar className="w-5 h-5" />
                                                            <span className="font-bold text-base">{exp.period}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-gray-700 mb-8 leading-relaxed text-lg font-medium">{exp.description}</p>

                                                <div className="flex flex-wrap gap-3">
                                                    {exp.skills.map((skill, skillIndex) => (
                                                        <motion.span
                                                            key={skill}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                                            whileHover={{ scale: 1.15, y: -3 }}
                                                            className="px-5 py-2.5 rounded-xl bg-linear-to-r from-[#0096C7]/10 to-[#00B4D8]/10 text-[#0096C7] font-black text-sm border-2 border-[#0096C7]/20 hover:bg-linear-to-r hover:from-[#0096C7] hover:to-[#00B4D8] hover:text-white hover:border-transparent transition-all cursor-default shadow-md hover:shadow-lg"
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    ))}
                                                </div>

                                                {/* Enlaces: botones separados debajo de las skills */}
                                                <div className="mt-4 flex flex-wrap gap-3 items-center">
                                                    {exp.links && exp.links.map((ln, linkIndex) => (
                                                        ln.type === "project" ? (
                                                            <motion.a
                                                                key={ln.url}
                                                                href={ln.url}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                initial={{ opacity: 0, scale: 0.95 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.35, delay: linkIndex * 0.06 }}
                                                                whileHover={{ scale: 1.03, y: -3 }}
                                                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0096C7] text-white font-black text-sm hover:brightness-105 transition-all shadow-lg"
                                                                aria-label="Ver proyecto"
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                                <span>Ver proyecto</span>
                                                            </motion.a>
                                                        ) : (
                                                            <motion.a
                                                                key={ln.url}
                                                                href={ln.url}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                initial={{ opacity: 0, scale: 0.95 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.35, delay: linkIndex * 0.06 }}
                                                                whileHover={{ scale: 1.03, y: -3 }}
                                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white font-black text-sm border-2 border-transparent hover:brightness-110 transition-all shadow-sm"
                                                                aria-label="Ver repositorio"
                                                            >
                                                                <Github className="w-4 h-4" />
                                                                <span>Repositorio</span>
                                                            </motion.a>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                                        initial={{ scale: 0, rotate: 0 }}
                                        whileInView={{ scale: 1, rotate: 360 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                                    >
                                        <div className="relative">
                                            <motion.div
                                                className="w-8 h-8 rounded-full bg-linear-to-br from-[#0096C7] to-[#00B4D8] border-4 border-white shadow-2xl shadow-[#0096C7]/50"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                            <motion.div
                                                className="absolute inset-0 rounded-full bg-[#0096C7]/30"
                                                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
