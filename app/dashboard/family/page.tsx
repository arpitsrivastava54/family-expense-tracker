"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Copy, Mail, Plus, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

const inviteFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
})

export default function FamilyMembersPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [familyCode] = useState("SMITH-2025-XYZ")

  const form = useForm<z.infer<typeof inviteFormSchema>>({
    resolver: zodResolver(inviteFormSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  })

  function onSubmit(values: z.infer<typeof inviteFormSchema>) {
    console.log(values)
    toast({
      title: "Invitation sent",
      description: `An invitation has been sent to ${values.name} at ${values.email}.`,
    })
    form.reset()
    setIsDialogOpen(false)
  }

  function copyFamilyCode() {
    navigator.clipboard.writeText(familyCode)
    toast({
      title: "Family code copied",
      description: "The family code has been copied to your clipboard.",
    })
  }

  const familyMembers = [
    {
      name: "John Smith",
      role: "Parent",
      email: "john@example.com",
      joinDate: "Jan 15, 2025",
      status: "Active",
      transactions: 145,
    },
    {
      name: "Sarah Smith",
      role: "Parent",
      email: "sarah@example.com",
      joinDate: "Jan 15, 2025",
      status: "Active",
      transactions: 98,
    },
    {
      name: "Michael Smith",
      role: "Child",
      email: "michael@example.com",
      joinDate: "Feb 3, 2025",
      status: "Active",
      transactions: 42,
    },
    {
      name: "Emma Smith",
      role: "Child",
      email: "emma@example.com",
      joinDate: "Mar 20, 2025",
      status: "Active",
      transactions: 27,
    },
  ]

  const pendingInvitations = [
    {
      name: "Grandma Smith",
      email: "grandma@example.com",
      invitedOn: "Jun 5, 2025",
      status: "Pending",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Family Members</h1>
          <p className="text-muted-foreground">Manage your family members and invitations.</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Invite Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite a Family Member</DialogTitle>
              <DialogDescription>Send an invitation to join your family finance tracker.</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter their name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter their email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Send Invitation</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Family Code</CardTitle>
          <CardDescription>Share this code with family members to let them join your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Input value={familyCode} readOnly className="font-mono" />
            <Button variant="outline" size="icon" onClick={copyFamilyCode}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="members" className="space-y-4">
        <TabsList>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="pending">Pending Invitations</TabsTrigger>
        </TabsList>

        <TabsContent value="members">
          <Card>
            <CardHeader>
              <CardTitle>Family Members</CardTitle>
              <CardDescription>Manage your family members and their access.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b bg-muted/50 p-3 text-sm font-medium">
                  <div className="col-span-2">Name</div>
                  <div className="hidden md:block">Role</div>
                  <div className="hidden md:block">Join Date</div>
                  <div className="hidden md:block">Transactions</div>
                  <div className="text-right">Actions</div>
                </div>
                {familyMembers.map((member, i) => (
                  <div key={i} className="grid grid-cols-6 items-center p-3 text-sm [&:not(:last-child)]:border-b">
                    <div className="col-span-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-xs text-muted-foreground md:hidden">{member.role}</div>
                      </div>
                    </div>
                    <div className="hidden md:block">{member.role}</div>
                    <div className="hidden md:block">{member.joinDate}</div>
                    <div className="hidden md:block">{member.transactions}</div>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Invitations</CardTitle>
              <CardDescription>Manage your pending family member invitations.</CardDescription>
            </CardHeader>
            <CardContent>
              {pendingInvitations.length > 0 ? (
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 border-b bg-muted/50 p-3 text-sm font-medium">
                    <div className="col-span-2">Name</div>
                    <div className="hidden md:block">Invited On</div>
                    <div className="text-right">Actions</div>
                  </div>
                  {pendingInvitations.map((invitation, i) => (
                    <div key={i} className="grid grid-cols-4 items-center p-3 text-sm [&:not(:last-child)]:border-b">
                      <div className="col-span-2 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                          <User className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{invitation.name}</div>
                          <div className="text-xs text-muted-foreground">{invitation.email}</div>
                        </div>
                      </div>
                      <div className="hidden md:block">{invitation.invitedOn}</div>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <Mail className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">No pending invitations</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You don't have any pending invitations at the moment.
                  </p>
                  <Button onClick={() => setIsDialogOpen(true)} variant="outline" className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Invite a Family Member
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

