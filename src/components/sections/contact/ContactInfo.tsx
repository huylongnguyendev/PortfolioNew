import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Mail, PhoneCall } from "lucide-react"
import { DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion"

function ContactInfo() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-4"
      >
        <div className="flex max-md:justify-center items-baseline-last gap-2 text-lg mx-auto cursor-pointer">
          <p className="flex items-center gap-1.5 font-semibold"><PhoneCall className="size-4" /><span>Phone number:</span></p>
          <DialogTrigger asChild>
            <Button>
              0967568207
            </Button>
          </DialogTrigger>
        </div>
        <div className="flex max-md:justify-center items-baseline-last gap-2 text-lg">
          <p className="flex items-center gap-1.5 font-semibold"><Mail className="size-4" /><span>Email:</span></p>
          <Button className="p-0">
            <a
              href="mailto:nguyenhuylong.dev@gmail.com"
              className="h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 inline-flex items-center"
            >
              nguyenhuylong.dev@gmail.com
            </a>
          </Button>
        </div>
        <div className="flex max-md:flex-col max-md:justify-center items-center gap-2 text-lg">
          <p className="font-semibold">Social:</p>
          <div className="space-x-2">
            <Button variant="outline" size="icon" className="p-0">
              <a
                href="https://www.facebook.com/profile.php?id=61583422176368"
                className="h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 inline-flex items-center"
                aria-label="facebook"
              >
                <Facebook />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="p-0">
              <a
                href="https://www.linkedin.com/in/long-nguyen-6b97a6396/"
                className="h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 inline-flex items-center"
                aria-label="linkedin"
              >
                <Linkedin />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
      <div>
      </div>
    </>
  )
}

export default ContactInfo