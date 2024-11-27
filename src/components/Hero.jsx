import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import logo from "../assets/Digital coding school.png"
import {Link} from "react-router-dom"
const textVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

const containerVariants = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
}

const imageVarients = {
    hidden: {
        clipPath: "inset(0 50%0 50%)"
    },
    visible: {
        clipPath: "inset(0 0% 0 0%",
        transition: {
            duration: 1.2,
            ease: "easeInOut"
        }
    }
}


function Hero() {
    return (
        <section className="overflow-hidden" id="hero">
            <div className="relative z-10 flex flex-col flex-wrap items-center justify-center min-h-screen text-white md:flex-row">
                <motion.div
                    className="w-full p-8 md:w-1/2"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-xl md:text-xl lg:text-5xl my-14"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.greeting}
                    </motion.h1>
                    <motion.p
                        className="mb-4 text-base md:text-base lg:text-2xl"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.introduction}
                    </motion.p>
                    <motion.p
                        className="mb-4 text-base md:text-base lg:text-2xl"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.description}
                    </motion.p>
                    <motion.p
                        className="inline-block p-3 mt-8 bg-stone-50 text-stone-900 lg:p-4 rounded-2xl"
                        style={
                            {cursor : "pointer"}
                        }
                        rel="noopener noreferrer"
                        target="_blank"
                        variants={textVariants}
                    >
                        <Link to={HERO_CONTENT.resumeLink} >{HERO_CONTENT.resumeLinkText}</Link>
                    </motion.p>
                </motion.div>
                <motion.div
                    className="w-full p-8 md:w-1/2"
                    initial="hidden"
                    animate="visible"
                    variants={imageVarients}
                >
                    <img src={logo} alt="jason root" width={650} height={650} className="rounded-3xl" />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
