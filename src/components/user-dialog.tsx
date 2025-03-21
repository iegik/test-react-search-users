import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mail, Phone, Building2 } from "lucide-react"

interface UserDialogProps {
  user: User | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserDialog({ user, open, onOpenChange }: UserDialogProps) {
  if (!user) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center gap-2">
            <Avatar className="h-20 w-20">
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">{user.name}</h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span>{user.company.name}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
