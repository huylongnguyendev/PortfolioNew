import Title from "@/components/Title"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Section from "@/layouts/sections/Section"
import { Phone } from "lucide-react"
import zaloIcon from "@/assets/Icon_of_Zalo.svg"

import ContactInfo from "./ContactInfo"
import ContactBox from "./ContactBox"

function ContactSection() {
  return (
    <>
      <Dialog>
        <Section id="contact" className="p-4">
          <Title title="Contact Me" />
          <div className="flex max-md:flex-col items-center gap-8 mt-8">
            <ContactInfo />
            <ContactBox />
          </div>
        </Section>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Contact me by Phone number:
            </DialogTitle>
            <DialogDescription>
              Choose one option to contact me
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-10 justify-center">
            <a href="tel:0967568207" aria-label="telephone" className="transitions hover:bg-secondary p-4 rounded-md">
              <Phone className="size-8" />
            </a>
            <a href="https://zalo.me/0967568207">
              <img src={zaloIcon} alt="zalo-icon" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ContactSection