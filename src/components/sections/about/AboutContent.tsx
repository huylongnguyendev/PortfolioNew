import { motion } from "framer-motion"
import AboutItem from "./AboutItem"

function AboutContent() {
  const focusList = ["SEO Friendly", "High Performance", "Priority UI/UX"]
  return (
    <>
      <div className="w-full md:w-2/3 space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-balance tracking-wide">
          A passionate Frontend Developer Intern with a solid foundation in <span className="font-semibold">React.js</span> and TypeScript. I am dedicated to staying updated with the React ecosystem, specifically <span className="font-semibold">Next.js 16 and TanStack Start</span>. Proficient in crafting responsive UIs with <span className="font-semibold">Tailwind CSS and Shadcn UI</span>, I am eager to contribute to a professional team and further evolve my technical skills.
        </motion.p>
        <div>
          <p className="font-semibold text-lg mb-4">Focus on:</p>
          <div className="flex items-center gap-4 flex-wrap">
            {
              focusList.map((item, index) => <AboutItem key={"about-" + item} item={item} index={index} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent