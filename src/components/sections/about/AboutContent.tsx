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
          className="text-balance tracking-wide"
        >
          A technical-driven Frontend Developer Intern with a deep obsession for
          React internals and system architecture. Beyond crafting responsive
          UIs with <span className="font-semibold text-foreground">Tailwind CSS</span> and <span className="font-semibold text-foreground">Shadcn UI</span>, I have
          independently authored <span className="font-semibold text-foreground">Magos</span>, a lightweight state
          management library featuring a custom reactive DOM engine and advanced
          TypeScript implementation. I stay updated with the latest industry
          standards like <span className="font-semibold text-foreground">Next.js 16</span> and am eager to contribute my
          problem-solving mindset and engineering depth to a professional
          development team.
        </motion.p>
        <div>
          <p className="font-semibold text-lg mb-4">Focus on:</p>
          <div className="flex items-center gap-4 flex-wrap">
            {focusList.map((item, index) => (
              <AboutItem key={"about-" + item} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent