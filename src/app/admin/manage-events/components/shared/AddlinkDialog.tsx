import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "@/lib/types/events"

interface AddLinkDialogProps {
  addLink: (link: Link) => void
}

export function AddLinkDialog({ addLink }: AddLinkDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")

  const handleClick = () => {
    if (title && url) {
      addLink({ title, url })
      setTitle("")
      setUrl("")
      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="border-[#9158FF] text-[#9158FF] hover:bg-[#9158FF]/20 bg-[#1e2432]">
          Add Link
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#2a3142] text-white">
        <DialogHeader>
          <DialogTitle>Add Link</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3 bg-[#3a4256] border-gray-600 text-white"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">URL</Label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="col-span-3 bg-[#3a4256] border-gray-600 text-white"
            />
          </div>
        </div>
        <Button
          onClick={handleClick}
          className="bg-[#9158FF] text-white hover:bg-[#7e46e3]"
        >
          Save Link
        </Button>
      </DialogContent>


    </Dialog>
  )
}
