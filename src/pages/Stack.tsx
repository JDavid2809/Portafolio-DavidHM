"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Wrench } from "lucide-react"

const technologies = [
    { name: "Tailwind CSS", logo: "/public/Tailwind_CSS_Logo.png" },
    { name: "CSS", logo: "/public/Css.webp" },
    { name: "Bootstrap", logo: "/public/Bootstrap.png" },
    { name: "React", logo: "/public/React.png" },
    { name: "Next.js", logo: "/public/next-js.png" },
    { name: "TypeScript", logo: "/public/Typescript_Logo.png" },
    { name: "Node.js", logo: "/public/Node.js_logo.png" },
    { name: "Firebase", logo: "/public/Firebase.png" },
    { name: "MySQL", logo: "/public/MySQL.png" },
    { name: "Prisma", logo: "/public/Prisma.png" },
    { name: "Git", logo: "/public/Git.png" },
    { name: "GitHub", logo: "/public/GitHub.png" },
]

const categories = [
    { icon: Code, category: "Frontend", count: "5+", color: "from-blue-500 to-cyan-500" },
    { icon: Database, category: "Backend", count: "3+", color: "from-green-500 to-emerald-500" },
    { icon: Database, category: "Database", count: "2+", color: "from-purple-500 to-pink-500" },
    { icon: Cloud, category: "DevOps", count: "2+", color: "from-orange-500 to-red-500" },
]

export function Stack() {
    return (
        <section className="py-16 px-4 bg-linear-to-b from-white via-[#0096C7]/5 to-white relative overflow-hidden" id="stack">
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 bg-[#0096C7]/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#0096C7]/10 border-2 border-[#0096C7]/20 mb-6"
                    >
                        <Wrench className="w-5 h-5 text-[#0096C7]" />
                        <span className="text-[#0096C7] font-bold text-sm uppercase tracking-wider">Tecnologías</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-balance text-gray-900">
                        Mi <span className="text-[#0096C7]">Stack</span> Tecnológico
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                        Herramientas y tecnologías que he usado en mis proyectos y que he puesto en práctica.
                    </p>
                </motion.div>

                <div className="relative mb-20">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white via-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white via-white to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden py-8">
                        <motion.div
                            className="flex gap-8"
                            animate={{
                                x: [0, -1920],
                            }}
                            transition={{
                                x: {
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                                <motion.div
                                    key={`${tech.name}-${index}`}
                                    className="shrink-0 w-48 h-48 rounded-3xl bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center gap-6 group cursor-pointer overflow-hidden relative"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-br from-[#0096C7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                        initial={false}
                                    />
                                    <div className="relative z-10 flex flex-col items-center gap-4">
                                        <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center p-4 group-hover:bg-[#0096C7]/10 transition-colors">
                                            <img
                                                src={tech.logo || "/placeholder.svg"}
                                                alt={tech.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="font-bold text-lg text-gray-900 group-hover:text-[#0096C7] transition-colors">
                                            {tech.name}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {categories.map((item, index) => (
                        <motion.div
                            key={item.category}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="relative p-8 rounded-3xl bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all text-center overflow-hidden">
                                <motion.div
                                    className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                                    initial={false}
                                />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br from-[#0096C7] to-[#00B4D8] flex items-center justify-center shadow-lg shadow-[#0096C7]/30 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-4xl font-black text-[#0096C7] mb-2">{item.count}</p>
                                    <p className="text-gray-700 font-bold text-lg">{item.category}</p>
                                </div>

                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0096C7]/5 rounded-bl-full" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
