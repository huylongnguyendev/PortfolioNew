import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"
import { Send } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"

function ContactBox() {
  const [name, setName] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const handleSendMessage = () => {
    const email = "nguyenhuylong.dev@gmail.com"
    const fullBody = `Name: ${name}%0D%0A%0D%0AMessage: ${message}`
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${fullBody}`

    window.location.href = mailtoLink
    toast.info("Send message")
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="grid w-full md:w-1/2 ms-auto gap-6">
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <InputGroup className="max-h-80">
          <InputGroupTextarea
            placeholder="Enter your message"
            value={message}
            maxLength={300}
            onChange={(e) => setMessage(e.target.value)}
          />
          <InputGroupAddon align="block-end">
            <InputGroupText className="text-muted-foreground text-xs">
              {message.length} / 300 characters
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <Button onClick={handleSendMessage}>
          <Send />
          <p>Send Message</p>
        </Button>
      </motion.div>
    </>
  )
}

export default ContactBox