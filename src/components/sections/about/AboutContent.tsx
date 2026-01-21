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
          As a passionate Frontend Developer, I’ve dedicated myself to mastering the core of web development. Having perfected my skills in <span className="font-semibold">HTML, CSS, JavaScript and React.Js</span>. I’m excited to further evolve my technical toolkit.
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