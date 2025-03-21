"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserTableProps {
  users: User[]
  onUserClick: (user: User) => void
}

export function UserTable({ users, onUserClick }: UserTableProps) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Company</TableHead>
            {/* <TableHead>Role</TableHead> */}
            {/* <TableHead>Status</TableHead> */}
            {/* <TableHead className="hidden md:table-cell">Last Active</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                No users found
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id} className="cursor-pointer hover:bg-muted/50" onClick={() => onUserClick(user)}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                      <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.company.name}</TableCell>
                {/* <TableCell>{user.role}</TableCell> */}
                {/* <TableCell>
                  <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                </TableCell> */}
                {/* <TableCell className="hidden md:table-cell">{user.lastActive}</TableCell> */}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
