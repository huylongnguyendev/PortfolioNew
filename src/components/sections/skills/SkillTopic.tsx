import { Badge } from "@/components/ui/badge"
import type { ISkillItem } from "@/lib/types/skill.type"
import { motion } from "framer-motion"

function SkillTopic({ data, index }: { data: ISkillItem, index: number }) {
  const delay = index * 0.3
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="rounded-md bg-slate-800 p-4 space-y-4"
      >
        <p className="font-semibold text-lg text-slate-50">{data.type}</p>
        <ul className="flex items-center gap-2 flex-wrap">
          {
            data.skills.map((item, index) => (
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + index / 100, duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                key={"skill-" + item}>
                <Badge >{item}</Badge>
              </motion.li>
            ))
          }
        </ul>
      </motion.div>
    </>
  )
}

export default SkillTopic