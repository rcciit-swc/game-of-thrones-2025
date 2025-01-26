"use client"

import { useState, useMemo } from "react"
import { Users, Search } from "lucide-react"
import { FixedSizeList as List } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { EventData, TeamMember } from "./functions"
import { Filter } from "./EventFilters"

const COLUMN_WIDTHS = [100, 180, 220, 240, 220, 240, 240, 240, 360, 240, 320, 280]
const TABLE_WIDTH = COLUMN_WIDTHS.reduce((a, b) => a + b, 0)

function TeamMembersDialog({ members }: { members: TeamMember[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#1F2937] border-gray-700 hover:bg-[#2D3748] hover:text-white text-gray-300"
        >
          <Users className="w-4 h-4 mr-2" />
          View Members
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#0B0F17] text-gray-100 border-gray-800 max-w-[67vw]">
        <DialogHeader>
          <DialogTitle>Team Members</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex flex-wrap gap-4">
            {members.map((member, index) => (
              <div key={index} className="bg-[#1F2937] p-4 rounded-lg w-[300px]">
                <div className="grid gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Name</p>
                    <p className="font-medium">{member.name}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium break-all">{member.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">{member.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function EventsTable({ initialData }: { initialData: EventData[] }) {
  const [data] = useState<EventData[]>(initialData)
  const [searchQuery, setSearchQuery] = useState("")
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("")
  const [eventFilter, setEventFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [collegeFilter, setCollegeFilter] = useState("")
  const [registeredAtFilter, setRegisteredAtFilter] = useState("")

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const searchMatch =
        !searchQuery ||
        item.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.teamLeadPhone.includes(searchQuery) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.teamLeadEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.transactionId.toLowerCase().includes(searchQuery.toLowerCase())

      const paymentStatusMatch = !paymentStatusFilter || item.paymentStatus === paymentStatusFilter
      const eventMatch = !eventFilter || item.eventName === eventFilter
      const typeMatch = !typeFilter || item.type === typeFilter
      const collegeMatch = !collegeFilter || item.college === collegeFilter

      const registeredAtMatch = (() => {
        if (!registeredAtFilter) return true
        const now = new Date()
        const registeredDate = new Date(item.registeredAt)
        const hoursDiff = (now.getTime() - registeredDate.getTime()) / (1000 * 60 * 60)

        switch (registeredAtFilter) {
          case "Last 24 hours":
            return hoursDiff <= 24
          case "Last 7 days":
            return hoursDiff <= 24 * 7
          case "Last 30 days":
            return hoursDiff <= 24 * 30
          default:
            return true
        }
      })()

      return searchMatch && paymentStatusMatch && eventMatch && typeMatch && collegeMatch && registeredAtMatch
    })
  }, [data, searchQuery, paymentStatusFilter, eventFilter, typeFilter, collegeFilter, registeredAtFilter])

  const uniqueEvents = useMemo(() => Array.from(new Set(data.map((item) => item.eventName))), [data])
  const uniqueTypes = useMemo(() => Array.from(new Set(data.map((item) => item.type))), [data])
  const uniqueColleges = useMemo(() => Array.from(new Set(data.map((item) => item.college))), [data])

  const clearAllFilters = () => {
    setSearchQuery("")
    setPaymentStatusFilter("")
    setEventFilter("")
    setTypeFilter("")
    setCollegeFilter("")
    setRegisteredAtFilter("")
  }

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const item = filteredData[index]

    return (
      <div
        style={{ ...style, width: TABLE_WIDTH }}
        className="flex items-center border-b border-gray-800 hover:bg-[#131926] transition-colors"
      >
        {COLUMN_WIDTHS.map((width, colIndex) => (
          <div key={colIndex} className="p-4 flex-none text-gray-100" style={{ width: width }}>
            {colIndex === 0 ? (
              item.slNo
            ) : colIndex === 1 ? (
              <span
                className={`px-2 py-1 rounded-md font-medium ${
                  item.paymentStatus === "Verified"
                    ? "bg-[#132F21] text-[#4ADE80] border border-[#4ADE80]/20"
                    : "bg-[#2A1215] text-[#F87171] border border-[#F87171]/20"
                }`}
              >
                {item.paymentStatus}
              </span>
            ) : colIndex === 2 ? (
              item.eventName
            ) : colIndex === 3 ? (
              <span className="px-2 py-1 rounded-md bg-[#1F2937] text-gray-300">{item.type}</span>
            ) : colIndex === 4 ? (
              item.teamName
            ) : colIndex === 5 ? (
              item.college
            ) : colIndex === 6 ? (
              item.name
            ) : colIndex === 7 ? (
              item.teamLeadPhone
            ) : colIndex === 8 ? (
              item.teamLeadEmail
            ) : colIndex === 9 ? (
              <span className="font-mono text-gray-300">{item.transactionId}</span>
            ) : colIndex === 10 ? (
              <div className="min-w-[300px]">
                <TeamMembersDialog members={item.teamMembers} />
              </div>
            ) : (
              <span className="text-gray-400">{item.registeredAt}</span>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search by event name, phone, team lead, email, college, or transaction ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 py-3 bg-[#1F2937] text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Filter
            options={["Verified", "Not Verified"]}
          value={paymentStatusFilter}
          onChange={setPaymentStatusFilter}
          placeholder="Payment Status"
        />
        <Filter options={uniqueEvents} value={eventFilter} onChange={setEventFilter} placeholder="Event" />
        <Filter options={uniqueTypes} value={typeFilter} onChange={setTypeFilter} placeholder="Type" />
        <Filter options={uniqueColleges} value={collegeFilter} onChange={setCollegeFilter} placeholder="College" />
        <Filter
          options={["Last 24 hours", "Last 7 days", "Last 30 days"]}
          value={registeredAtFilter}
          onChange={setRegisteredAtFilter}
          placeholder="Registered At"
              />
              <Button
                  onClick={clearAllFilters}
                  variant="outline"
                  disabled={ !searchQuery && !paymentStatusFilter && !eventFilter && !typeFilter && !collegeFilter && !registeredAtFilter }
                  className="bg-[#1F2937] border-gray-700 hover:bg-[#2D3748] hover:text-white text-gray-300 disabled:cursor-not-allowed "
              >
                  Clear All Filters
              </Button>
      </div>
      
     
      <div className="overflow-x-auto border border-gray-800 rounded-lg bg-[#0B0F17]">
        <div style={{ width: TABLE_WIDTH }}>
          <div className="sticky top-0 z-10 flex items-center font-bold border-b border-gray-800 bg-[#0B0F17]">
            {[
              "SL No.",
              "Payment Status",
              "Event Name",
              "Type",
              "Team Name",
              "College",
              "Team Lead",
              "Phone",
              "Email",
              "Transaction ID",
              "Members",
              "Registered At",
            ].map((header, index) => (
              <div key={index} className="p-4 flex-none text-gray-100" style={{ width: COLUMN_WIDTHS[index] }}>
                {header}
              </div>
            ))}
          </div>
          <div style={{ height: "600px", width: "103%" }}>
            <AutoSizer>
              {({ height, width }) => (
                <List height={height} width={width} itemCount={filteredData.length} itemSize={50}>
                  {Row}
                </List>
              )}
            </AutoSizer>
          </div>
        </div>
      </div>
    </div>
  )
}
