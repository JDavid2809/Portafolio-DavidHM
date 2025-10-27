"use client"

import { motion } from "framer-motion"
import { Heart, Lightbulb, Users, Award } from "lucide-react"

const values = [
    {
        icon: Lightbulb,
        title: "Innovación",
        description: "Siempre buscando nuevas formas de resolver problemas",
    },
    {
        icon: Users,
        title: "Colaboración",
        description: "El trabajo en equipo es clave, y más cuando se aprende juntos",
    },
    {
        icon: Award,
        title: "Excelencia",
        description: "Iniciativa y proactividad en los proyectos",
    },
    {
        icon: Heart,
        title: "Pasión",
        description: "Aprendizaje continuo y adaptación",
    },
]

export function About() {
    return (
        <section className="py-32 px-4 bg-linear-to-b from-white via-[#0096C7]/5 to-white relative overflow-hidden" id="about">
            <div className="absolute top-20 right-10 w-96 h-96 bg-[#0096C7]/10 rounded-full blur-3xl animate-pulse" />
            <div
                className="absolute bottom-20 left-10 w-96 h-96 bg-[#0096C7]/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0096C7]/5 rounded-full blur-3xl" />

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
                        className="inline-block px-6 py-2 rounded-full bg-[#0096C7]/10 border-2 border-[#0096C7]/20 mb-6"
                    >
                        <span className="text-[#0096C7] font-bold text-sm uppercase tracking-wider">Conóceme</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-balance text-gray-900">
                        Sobre <span className="text-[#0096C7]">Mí</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-[#0096C7]/20 border-4 border-white">
                                <div className="absolute inset-0 bg-linear-to-br from-[#0096C7] to-[#00B4D8] flex items-center justify-center">
                                    <div className="text-white text-center p-8">
                                        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <span className="text-6xl font-black">TU</span>
                                        </div>
                                        <p className="text-2xl font-bold">Tu Foto Aquí</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0096C7]/20 rounded-3xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0096C7]/20 rounded-3xl -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-12 bg-linear-to-b from-[#0096C7] to-[#00B4D8] rounded-full" />
                                    <h3 className="text-3xl md:text-4xl font-black text-gray-900">Mi Historia</h3>
                                </div>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    Hola! Soy Juan David Hernández Mendoza, un desarrollador web apasionado con más de{" "}
                                    <span className="text-[#0096C7] font-bold">2 años de experiencia</span> transformando ideas en
                                    realidades digitales. Mi viaje comenzó con la curiosidad de entender cómo funcionan las cosas, y esa
                                    curiosidad se convirtió en una carrera dedicada a crear soluciones innovadoras.
                                </p>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    Me especializo en <span className="text-[#0096C7] font-bold">React, Next.js y TypeScript</span>, mas que nada
                                    en la experiencia del usuario, lo que realmente me motiva es el impacto positivo que la tecnología puede tener en la vida de las
                                    personas. Cada proyecto es una oportunidad para aprender algo nuevo y superar mis propios límites.
                                </p>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    Cuando no estoy programando, me encontrarás explorando nuevas tecnologías y me gusta aprender de los demás,
                                    disfrutando de pasar el tiempo con amigos, familiares y todos mis seres queridos, buscando un equilibrio saludable entre el trabajo
                                    y la vida personal.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Mis <span className="text-[#0096C7]">Valores</span>
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Los principios que guían mi trabajo y mi vida profesional
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="group relative"
                            >
                                <div className="relative p-8 h-full rounded-3xl bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                                    <motion.div className="absolute inset-0 bg-linear-to-br from-[#0096C7]/5 to-[#00B4D8]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative z-10 text-center">
                                        <div className="w-16 h-16 mx-auto rounded-2xl bg-linear-to-br from-[#0096C7] to-[#00B4D8] flex items-center justify-center mb-4 shadow-lg shadow-[#0096C7]/30 group-hover:scale-110 transition-transform">
                                            <value.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
