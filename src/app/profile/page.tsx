"use client"

import { useState } from "react"
import Avatar from "react-avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background mt-32">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className=" bg-card rounded-xl bg-violet-500 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-start ">
            <Avatar name="Name" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" size="128" round={true} />
            <div className="space-y-4 flex-1">
              <div>
                <h1 className="text-2xl font-semibold text-white">Name</h1>
                <p className="text-muted-foreground text-white">Email</p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setIsEditModalOpen(true)}>Edit Profile</Button>
                <Button variant="outline">Logout</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Events Registered</h2>
          {/* Ticket content would go here */}
        </div>
      </main>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="flex justify-center">
              <Avatar name="Name" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" size="96" round={true} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="fullName">Full Name</label>
              <Input id="fullName" defaultValue="Name" className="bg-muted" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="gender">Gender</label>
              <Select>
                <SelectTrigger className="bg-muted">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email ID</label>
              <Input id="email" type="email" defaultValue="Email" className="bg-muted" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone">Phone Number</label>
              <Input id="phone" type="tel" placeholder="Phone Number" className="bg-muted" />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90">Save Changes</Button>
          </div>
        </DialogContent>
        
      </Dialog>

    </div>
  )
}
