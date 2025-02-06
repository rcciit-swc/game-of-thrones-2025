import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AddLinkDialog } from "./AddlinkDialog"
import { AddCoordinatorDialog } from "./AddCoordinatorDialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { Coordinator, Link } from "@/lib/types/events"





export function LinksAndCoordinators({ links, setLinks, coordinators, setCoordinators }: { links: Link[], setLinks: (links: Link[]) => void, coordinators: Coordinator[], setCoordinators: (coordinators: Coordinator[]) => void }) {

  const addLink = (newLink: Link) => {
    setLinks([...links, newLink])
  }

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index))
  }

  const addCoordinator = (newCoordinator: Coordinator) => {
    setCoordinators([...coordinators, newCoordinator])
  }

  const removeCoordinator = (index: number) => {
    setCoordinators(coordinators.filter((_, i) => i !== index))
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="transition-transform bg-[#2a3142] border-none hover:shadow-lg hover:shadow-[#9158FF]/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-white">Links</CardTitle>
            <CardDescription className="text-gray-400">Add relevant links for the event.</CardDescription>
          </div>
          <AddLinkDialog addLink={addLink} />
        </CardHeader>
        <CardContent className="space-y-4">
          {links.length > 0 ? (
            links.map((link, index) => (
              <div key={index} className="flex items-center justify-between bg-[#3a4256] p-3 rounded-md">
                <div>
                  <h4 className="text-sm font-medium text-white">{link.title}</h4>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:underline"
                  >
                    {link.url}
                  </a>
                </div>
                <Button variant="ghost" size="sm" onClick={() => removeLink(index)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-200 text-center py-4">No links added yet</div>
          )}
        </CardContent>
      </Card>

      <Card className="transition-transform bg-[#2a3142] border-none hover:shadow-lg hover:shadow-[#9158FF]/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-white">Coordinators</CardTitle>
            <CardDescription className="text-gray-400">Manage event coordinators.</CardDescription>
          </div>
          <AddCoordinatorDialog addCoordinator={addCoordinator} />
        </CardHeader>
        <CardContent className="space-y-4">
          {coordinators.length > 0 ? (
            coordinators.map((coordinator, index) => (
              <div key={index} className="flex items-center justify-between bg-[#3a4256] p-3 rounded-md">
                <div>
                  <h4 className="text-sm font-medium text-white">{coordinator.name}</h4>
                  <p className="text-xs text-gray-400">{coordinator.phone}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => removeCoordinator(index)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-200 text-center py-4">No coordinators added yet</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

