import { motion } from "framer-motion"
import { CONTACT_CONTENT } from "../constants"
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "@remixicon/react"


const Contact = () => {
    const textVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay,
            }
        })
    }
    const iconVarents = {
        hidden: { opacity: 0, scale: 0 },
        visible: (delay = 0) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay,
            }
        })
    }


    return (
        <section className="flex flex-col justify-center min-h-screen px-4 md:px-10" id="contact">
            <h2 className="mb-4 text-4xl font-medium tracking-tight md:text-6xl">
                Contact
            </h2>
            <div className="w-20 h-1 mb-8 bg-white"></div>
            <motion.h3
                className="text-6xl leading-none md:text-8xl"
                initial="hidden"
                whileInView="visible"
                costum={0.4}
                variants={textVariants}
            >
                {
                    CONTACT_CONTENT.headline
                }
            </motion.h3>

            <motion.p
                className="max-w-3xl mt-6 text-lg md:text-2xl"
                initial="hidden "
                whileInView="visible"
                custom={0.6}
                variants={textVariants}
            >
                {
                    CONTACT_CONTENT.description
                }
            </motion.p>
            <motion.a
                href={`mailto:${CONTACT_CONTENT.email}`}
                className="mt-8 text-2xl font-medium md:text-3xl"
                initial="hidden"
                whileInView="visible"
                custom={0.8}
                variants={textVariants}
            >
                {
                    CONTACT_CONTENT.email
                }
            </motion.a>
            <motion.a
                href={`tel:${CONTACT_CONTENT.phone}`}
                className="mt-8 text-2xl font-medium md:text-3xl"
                initial="hidden"
                whileInView="visible"
                custom={0.8}
                variants={textVariants}
            >
                {
                    CONTACT_CONTENT.phone
                }
            </motion.a>

            <div className="flex mt-8 space-x-6">
                {
                    CONTACT_CONTENT.socialLinks.map((links, index) => {
                        const Icon =
                            links.icon === "RiTwitterXFill"
                                ? RiTwitterFill
                                : links.icon === "RiGithubFill"
                                    ? RiGithubFill
                                    : RiLinkedinFill;
                        return (
                            <motion.a
                                key={links.platform}
                                href={links.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={links.ariaLabel}
                                initial="hidden"
                                whileInView="visible"
                                custom={1.0 + index * 0.2}
                                variants={iconVarents} >
                                <Icon size={36} />
                            </motion.a>
                        )
                    })
                }
            </div>
            <motion.p
                className="mt-3 text-sm text-stone-400"
                initial="hidden"
                whileInView="visible"
                custom={1.6}
                variants={textVariants}
            >
                {CONTACT_CONTENT.footerText}
            </motion.p>
        </section>
    )
}

export default Contact
