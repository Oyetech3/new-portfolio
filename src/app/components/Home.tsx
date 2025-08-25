"use client"
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import Particles from './Particles';
import { useRouter } from 'next/navigation';

interface MousePosition {
    x: number;
    y: number;
}

interface StatItem {
    number: string;
    label: string;
}

const HomePage: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    const router = useRouter()

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const floatingVariants: Variants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="relative min-h-screen  overflow-hidden">
            
            <div className="absolute inset-0  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Particles />
               
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <motion.section 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col lg:flex-row justify-between items-center py-10 md:py-20 gap-8 px-4 md:px-8 max-w-7xl mx-auto min-h-screen"
            >
                {/* Left Content */}
                <motion.div 
                    variants={itemVariants}
                    className="flex items-center gap-4 lg:gap-6 flex-1"
                >
                    {/* Enhanced Decorative Line */}
                    <motion.div 
                        className="hidden sm:grid grid-rows-[auto_auto_auto_auto_auto] gap-3"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {[...Array(5)].map((_, i: number) => (
                            <motion.div
                                key={i}
                                className={`w-1 rounded ${
                                    i % 2 === 0 
                                        ? 'h-12 bg-gradient-to-b from-[#f04770] to-[#d03a64]' 
                                        : 'h-2 bg-white rounded-full'
                                }`}
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ 
                                    delay: i * 0.1,
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                                whileHover={{ 
                                    scaleY: 1.2,
                                    transition: { duration: 0.2 }
                                }}
                            />
                        ))}
                    </motion.div>

                    <motion.div 
                        className='pl-5 lg:pl-8'
                        style={{
                            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                        }}
                    >
                        <motion.p 
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-white/90 mb-2"
                        >
                            Hello <motion.span 
                                className="text-[#f04770] inline-block"
                                animate={{ rotate: [0, 20, 0] }}
                                transition={{ 
                                    duration: 0.5,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                }}
                            >
                                !
                            </motion.span>
                        </motion.p>
                        
                        <motion.h1 
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3"
                        >
                            I'm{' '}
                            <motion.span 
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04770] to-[#ff6b9d]"
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                            >
                                Oyekola Abdulqobid B.
                            </motion.span>
                        </motion.h1>
                        
                        <motion.div
                            variants={itemVariants}
                            className="mb-6"
                        >
                            <motion.p 
                                className="text-lg md:text-xl font-semibold text-white/80 mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                Full-Stack Developer
                            </motion.p>
                            <motion.p
                                className="text-sm md:text-base text-white/70 max-w-md leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                Crafting innovative digital experiences with modern technologies. 
                                Passionate about creating solutions that make a difference.
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap gap-2 mb-6"
                        >
                            {(['React', 'Next.js', 'Node.js', 'TypeScript', 'Laravel'] as const).map((tech: string, index: number) => (
                                <motion.span
                                    key={tech}
                                    className="px-3 py-1 text-xs md:text-sm font-medium text-[#f04770] bg-white/10 backdrop-blur-sm border border-[#f04770]/30 rounded-full"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        delay: 1.5 + index * 0.1,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    whileHover={{ 
                                        scale: 1.1,
                                        backgroundColor: "rgba(240, 71, 112, 0.2)"
                                    }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a 
                                href="/assets/profiles/my-resume.pdf" 
                                download 
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#f04770] to-[#d03a64] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#f04770]/25 transition-all duration-300 group"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(240, 71, 112, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="mr-2">Download Resume</span>
                                <motion.span
                                    className="inline-block"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ 
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatDelay: 2
                                    }}
                                >
                                    📄
                                </motion.span>
                            </motion.a>

                            <motion.button
                                onClick={() => router.push("/projects")}
                                className="inline-flex items-center cursor-pointer justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-[#f04770] transition-all duration-300"
                                whileHover={{ 
                                    scale: 1.05,
                                    borderColor: "#f04770"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="mr-2">View Projects</span>
                                <motion.span
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
                                    🚀
                                </motion.span>
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="flex gap-8 mt-8 pt-6 border-t border-white/20"
                        >
                            {([
                                { number: '20+', label: 'Projects' },
                                { number: '3+', label: 'Years Exp' },
                                { number: '100%', label: 'Client Satisfaction' }
                            ] as StatItem[]).map((stat: StatItem, index: number) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2 + index * 0.2 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <motion.div 
                                        className="text-2xl md:text-3xl font-bold text-[#f04770]"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ 
                                            delay: 2.2 + index * 0.2,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                    >
                                        {stat.number}
                                    </motion.div>
                                    <div className="text-sm text-white/70">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Enhanced Right Side - Image */}
                <motion.div 
                    variants={itemVariants}
                    className="hidden lg:block flex-1 max-w-lg"
                >
                    <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="relative"
                        style={{
                            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
                        }}
                    >
                        {/* Glowing background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#f04770]/20 to-purple-500/20 rounded-3xl blur-3xl"
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        
                        {/* Image container */}
                        <motion.div
                            className="relative z-10 p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20"
                            whileHover={{ 
                                scale: 1.02,
                                rotate: 1,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            <Image 
                                src="/assets/profiles/dev1.png" 
                                alt="Developer illustration"
                                width={400} 
                                height={400} 
                                priority 
                                className="w-full h-auto object-contain filter drop-shadow-2xl"
                            />
                            
                            {/* Floating elements around image */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#f04770] to-purple-500 rounded-full"
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                                animate={{
                                    y: [0, 15, 0],
                                    x: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />
                            <motion.div
                                className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Mobile Image */}
                <motion.div 
                    variants={itemVariants}
                    className="block lg:hidden w-full max-w-sm mx-auto"
                    style={{
                        transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`
                    }}
                >
                    <motion.div
                        className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20"
                        whileHover={{ scale: 1.02 }}
                    >
                        <Image 
                            src="/assets/profiles/dev1.png" 
                            alt="Developer illustration" 
                            width={300} 
                            height={300} 
                            priority 
                            className="w-full h-auto object-contain filter drop-shadow-xl"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default HomePage;