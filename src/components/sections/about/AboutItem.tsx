import { motion } from "framer-motion"

function AboutItem({ item, index }: { item: string, index: number }) {
  const delay = index * 0.3

  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-4 max-sm:w-full rounded-md border border-slate-600 font-semibold bg-slate-800 text-slate-50">
        {item}
      </motion.p>
    </>
  )
}

export default AboutItem