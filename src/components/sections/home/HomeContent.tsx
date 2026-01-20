import { motion } from "framer-motion"

function HomeContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-md:text-center space-y-8"
      >
        <h1 className="space-y-8 font-semibold">
          <p className="text-3xl md:text-4xl">Hi, <br />I'm <span className="text-primary">Nguyen Huy Long</span></p>
          <p className="text-primary-foreground w-fit px-2 py-1.5 max-md:mx-auto rounded-lg bg-primary">Frontend Developer</p>
        </h1>
        <p className="text-balance text-lg">Building the modern web with React, Next.js, and TanStack Start. Dedicated to SEO-friendly architecture, lightning-fast performance, and intuitive UI/UX.</p>
      </motion.div>
    </>
  )
}

export default HomeContent