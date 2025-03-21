"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserCardsProps {
  users: User[]
  onUserClick: (user: User) => void
}

export function UserCards({ users, onUserClick }: UserCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.length === 0 ? (
        <div className="col-span-full text-center py-8 text-muted-foreground">No users found</div>
      ) : (
        users.map((user) => (
          <Card
            key={user.id}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onUserClick(user)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                  <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{user.name}</h3>
                    {/* <Badge variant={user.status === "Active" ? "default" : "secondary"} className="ml-2">
                      {user.status}
                    </Badge> */}
                  </div>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <div className="flex items-center justify-between text-sm">
                    {/* <span>{user.role}</span> */}
                    {/* <span className="text-muted-foreground">{user.lastActive}</span> */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
