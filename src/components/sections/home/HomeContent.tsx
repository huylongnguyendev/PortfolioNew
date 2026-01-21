import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LaptopMinimal, MessageSquare } from "lucide-react"

function HomeContent() {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-md:text-center space-y-8"
        >
          <h1 className="space-y-8 font-semibold">
            <p className="text-3xl md:text-4xl">Hi, <br />I'm <span className="text-primary">Nguyen Huy Long</span></p>
            <p className="text-primary-foreground w-fit px-2 py-1.5 max-md:mx-auto rounded-full bg-primary">Frontend Developer</p>
          </h1>
          <p className="text-balance text-lg">Building the modern web with <span className="font-semibold">React, Next.js, and TanStack Start</span>. Dedicated to SEO-friendly architecture, lightning-fast performance, and intuitive UI/UX.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="max-md:text-center space-x-2 mt-8"
        >
          <Button
            variant="secondary"
            className="p-0"
          >
            <a
              href="#projects"
              className="h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 inline-flex items-center"
            >
              <LaptopMinimal />
              <p className="capitalize">View Projects</p>
            </a>
          </Button>
          <Button className="p-0">
            <a
              href="#contact"
              className="h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 inline-flex items-center"
            >
              <MessageSquare />
              <p className="capitalize">Contact me</p>
            </a>
          </Button>
        </motion.div>
      </div>
    </>
  )
}

export default HomeContent