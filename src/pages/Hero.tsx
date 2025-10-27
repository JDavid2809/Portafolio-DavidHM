"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
    return (
        <>
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0096C7]">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white opacity-10"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 -left-20 w-[300px] h-[300px] rounded-full bg-white opacity-5"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white opacity-5 rounded-full"
                    animate={{
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: "radial-gradient(circle, #FFFFFF 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
                    {/* Columna izquierda - Contenido principal */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Badge de estado */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm"
                        >
                            <motion.div
                                className="w-2 h-2 bg-white rounded-full"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />
                            <span className="text-sm font-medium text-white">Disponible para nuevos proyectos</span>
                        </motion.div>

                        {/* Título principal */}
                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                            >
                                Hola, soy{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-white drop-shadow-lg">Juan David Hernández Mendoza</span>
                                    <motion.span
                                        className="absolute bottom-2 left-0 w-full h-3 bg-white/30 -z-0"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                    />
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-2xl md:text-2xl text-white/90 leading-relaxed"
                            >
                                Desarrollador Full Stack, desarrollo de software multiplataforma y especializado en crear experiencias web modernas y escalables.
                            </motion.p>
                        </div>

                        {/* Descripción */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-base text-white/80 text-xl leading-relaxed max-w-xl"
                        >
                            Transformo ideas en productos digitales con código limpio, diseño intuitivo y las últimas tecnologías.
                            Apasionado por resolver problemas complejos y crear soluciones que impactan.
                        </motion.p>

                        {/* Botones de acción */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.a
                                href="#experience"
                                className="px-8 py-4 bg-transparent text-white rounded-2xl font-semibold text-base border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Ver mi trabajo
                            </motion.a>
                        </motion.div>

                        {/* Redes sociales */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-4 pt-4"
                        >
                            <span className="text-sm text-white/80 font-medium">Sígueme:</span>
                            <div className="flex gap-3">
                                {[
                                    { icon: Github, href: "https://github.com/JDavid2809", label: "GitHub" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/hern%C3%A1ndez-david-b9594137a/", label: "LinkedIn" },
                                    { icon: Mail, href: "davidhrnndzmndz@gmail.com", label: "Email" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#0096C7] transition-all"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Columna derecha - Elementos visuales decorativos */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Tarjeta principal con efecto 3D */}
                        <motion.div
                            className="relative w-full max-w-lg md:max-w-2xl"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                            {/* Tarjeta de código (agrandada) */}
                            <div className="relative bg-white rounded-3xl p-10 shadow-2xl shadow-black/20 min-h-[420px]">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>

                                <div className="space-y-3 font-mono text-sm">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 }}
                                        className="text-gray-600"
                                    >
                                        <span className="text-purple-600 text-2xl">const</span> <span className="text-blue-600 text-2xl">developer</span> ={" "}
                                        <span className="text-yellow-600 text-2xl">{"{"}</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.2 }}
                                        className="text-gray-800 pl-4"
                                    >
                                        <span className="text-green-600 text-2xl">skills</span>:{" "}
                                        <span className="text-orange-600 text-2xl">["React", "Node.js", "TypeScript", "Next.js"],</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.4 }}
                                        className="text-gray-800 pl-4"
                                    >
                                        <span className="text-green-600 text-2xl">passion</span>:{" "}
                                        <span className="text-orange-600 text-2xl">"Crear soluciones",</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.6 }}
                                        className="text-gray-800 pl-4"
                                    >
                                        <span className="text-green-600 text-2xl">available</span>: <span className="text-blue-600 text-2xl">true</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.8 }}
                                        className="text-gray-600 text-2xl"
                                    >
                                        <span className="text-yellow-600 text-2xl">{"}"}</span>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Elementos decorativos de fondo */}
                            <motion.div
                                className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
        <img src="/ShapeDivider.svg" alt="Shape divider" className="w-full block -mt-1" />
        </>

    )
}
