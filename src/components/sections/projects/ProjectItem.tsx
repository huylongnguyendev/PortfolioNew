import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { IProjectItem } from "@/lib/types/projects.type"
import { motion } from "framer-motion"
import { Github, Globe } from "lucide-react"

function ProjectItem({ item, index }: { item: IProjectItem, index: number }) {
  const delay = index * 0.3
  return (
    <>
      <motion.li
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="min-h-60 group shadow-md rounded-md"
      >
        <Card className="h-full">
          <CardContent >
            <div className="relative bg-accent-foreground h-60 overflow-hidden rounded-md">
              <img
                src={item.imgURl}
                alt={"project-" + item.title}
                className="absolute inset-0 size-full object-cover rounded-md transitions group-hover:scale-102" />
            </div>
          </CardContent>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{item.type}</CardDescription>
            <div className="space-x-2">
              {
                item.dependencies.map(item =>
                  <Badge key={"dependencies" + item} className="mt-4">{item}</Badge>
                )
              }
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <CardAction className="space-x-2 ms-auto">
              <Button
                variant="secondary"
                className="p-0"
              >
                <a
                  href={item.gitUrl}
                  className="h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 inline-flex items-center"
                >
                  <Github />
                  <p>Github</p>
                </a>
              </Button>
              <Button className="p-0">
                <a
                  href={item.webUrl}
                  className="h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 inline-flex items-center"
                >
                  <Globe />
                  <p>Web Demo</p>
                </a>
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
      </motion.li>
    </>
  )
}

export default ProjectItem