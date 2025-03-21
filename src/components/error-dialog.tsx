import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { TriangleAlert } from "lucide-react"

interface ErrorDialogProps {
  message: string | null
}

export function ErrorDialog({ message }: ErrorDialogProps) {
  if (!message) return null

  return (
    <Dialog open={!!message}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Error</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <TriangleAlert className="h-4 w-4 text-muted-foreground" />
            <span>{message}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
