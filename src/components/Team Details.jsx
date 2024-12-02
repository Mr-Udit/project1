import { motion } from "framer-motion"
import { MY_TEAM, PROJECTS } from "../constants"

export default function TeamDetails() {
    const projectVarients = {
        hidden: {
            opacity: 0, scale: 0.8, rotate: -40, y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                bounce: 0.4,
            }
        }
    }
    return (
        <section className="px-6 py-10 " id="work">
            <h1 className="text-4xl font-medium tracking-tight md:text-4xl lg:text-6xl " style={{
                textDecoration: "none",
                paddingBottom: "10px"
            }}>
                My Team
            </h1>
            <div className="w-56 h-1 mb-8 bg-white"></div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {MY_TEAM.map((person, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-lg overflow-hidden h-[500px] transition transform"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={projectVarients}
                    >
                        <img
                            src={person.image}
                            alt={person.name}
                            className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300" />
                        <div className="relative z-20 flex flex-col justify-between h-full p-6 text-white bg-black/30">
                            <h2 className="mb-4 text-2xl font-medium">
                                {person.name}
                            </h2>
                            <div className="flex flex-col justify-between">
                                <p className="flex flex-grow mb-4 text-2xl">{person.description}</p>
                                <a href={person.link} target="_blank" rel=" noopener noreffer" className="w-32 px-2 py-2 text-sm text-center bg-white rounded-full text-stone-900 hover:bg-gray-100">Linked In</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
