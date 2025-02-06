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
import { Coordinator } from "@/lib/types/events"

interface AddCoordinatorDialogProps {
  addCoordinator: (coordinator: Coordinator) => void
}

export function AddCoordinatorDialog({ addCoordinator }: AddCoordinatorDialogProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleAddCoordinator = () => {
    if (name && phone) {
      addCoordinator({ name, phone })
      setName("")
      setPhone("")
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="border-[#9158FF] text-[#9158FF] hover:bg-[#9158FF]/20 bg-[#1e2432]">
          Add Coordinator
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#2a3142] text-white border-gray-700">
        <DialogHeader>
          <DialogTitle>Add Coordinator</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 bg-[#1e2432] border-gray-700 text-white"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Phone </Label>
            <Input
              id="email"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="col-span-3 bg-[#1e2432] border-gray-700 text-white"
            />
          </div>
          <Button onClick={handleAddCoordinator} className="bg-[#9158FF] hover:bg-[#9158FF]/90 text-white mt-4">
            Add Coordinator
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
