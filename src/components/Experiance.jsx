import { motion } from "framer-motion"
import { EXPERIENCES } from "../constants"

const Experiance = () => {
    const containerVariants = {
        hidden: {
            opacity: 1,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.3,
            }
        }
    }
    const childVariants = {
        hidden: {
            opacity: 1,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        }
    }


    return (
        <section className="px-6 py-10 " id="experience">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
                Work Experiance
            </h2>
            <div className="h-1 w-56 mb-8 bg-white"></div>
            <motion.div
                className="space-y-10 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {
                    EXPERIENCES.map((experience, index) => (
                        <motion.div
                            key={index}
                            variants={childVariants} >
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <div className="text-sm md:w-1/4 mb-2 p-4 ">
                                    {experience.yearRange}
                                </div>
                                <div className="md:w-3/4 mb-10">
                                    <div className="max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
                                        <h2 className="text-xl mb-2">{experience.title}</h2>
                                        <p className="mb-4 text-sm italic">{experience.location}</p>
                                        <ul className="list-disc list-inside space-y-2">
                                            {
                                                experience.description.map((disc, index) => (
                                                    <li key={index} >{disc}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Experiance
