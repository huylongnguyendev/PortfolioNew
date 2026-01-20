import { motion } from "framer-motion"

export default function HomeBox() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full md:w-full bg-slate-900 dark:bg-slate-800 p-4 rounded-md shadow-md shadow-slate-500"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-md bg-red-500" />
            <div className="size-3 rounded-md bg-yellow-500" />
            <div className="size-3 rounded-md bg-green-500" />
          </div>
          <p className="text-muted-foreground">portfolio.tsx</p>
        </div>
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-1.5">
            <p className="space-x-1.5"><span className="text-red-500">const</span><span className="text-blue-500 dark:text-blue-400">developer</span></p>
            <p className="text-gray-400">=</p>
            <p className="text-yellow-500">{"{"}</p>
          </div>
          <div className="ps-4 space-y-2">
            <div className="flex items-start gap-1.5">
              <p className="space-x-0.5"><span className="text-red-500">name</span><span className="text-gray-400 font-semibold">:</span></p>
              <p className="text-green-500">"Nguyen Huy Long" <span className="text-gray-400">,</span></p>
            </div>
            <div className="flex items-start gap-1.5">
              <p className="space-x-0.5"><span className="text-red-500">role</span><span className="text-gray-400 font-semibold">:</span></p>
              <p className="text-green-500">"Frontend Developer" <span className="text-gray-400">,</span></p>
            </div>
            <div className="flex items-start gap-1.5">
              <p className="space-x-0.5"><span className="text-red-500">skills</span><span className="text-gray-400 font-semibold">:</span></p>
              <p className="text-green-500"><span className="text-orange-500">{"[ "}</span>"JavaScript", "TypeScript", "React", "NextJs"<span className="text-orange-500">{" ] "}</span> <span className="text-gray-400">,</span></p>
            </div>
          </div>
          <p className="text-yellow-500">{"}"}</p>
        </div>
      </motion.div>
    </>
  )
}
