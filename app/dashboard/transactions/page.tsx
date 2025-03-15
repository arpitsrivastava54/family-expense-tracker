"use client"

import { useEffect, useState } from "react"
import { ArrowDownIcon, ArrowUpIcon, CalendarIcon, ChevronDownIcon, FilterIcon, SearchIcon } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { TransactionType } from "../add-transaction/page"
import transactionService from "@/services/transaction.service"

// Sample transaction data
// const transactions = [
//   {
//     id: "1",
//     description: "Salary Deposit",
//     amount: 3500.0,
//     date: new Date(2025, 5, 15),
//     category: "Income",
//     member: "Dad",
//     type: "income",
//   },
//   {
//     id: "2",
//     description: "Grocery Shopping",
//     amount: 120.5,
//     date: new Date(2025, 5, 16),
//     category: "Food",
//     member: "Mom",
//     type: "expense",
//   },
//   {
//     id: "3",
//     description: "Internet Bill",
//     amount: 89.99,
//     date: new Date(2025, 5, 10),
//     category: "Utilities",
//     member: "Dad",
//     type: "expense",
//   },
//   {
//     id: "4",
//     description: "Part-time Job",
//     amount: 250.0,
//     date: new Date(2025, 5, 8),
//     category: "Income",
//     member: "Son",
//     type: "income",
//   },
//   {
//     id: "5",
//     description: "School Supplies",
//     amount: 45.75,
//     date: new Date(2025, 5, 5),
//     category: "Education",
//     member: "Daughter",
//     type: "expense",
//   },
//   {
//     id: "6",
//     description: "Mortgage Payment",
//     amount: 1200.0,
//     date: new Date(2025, 5, 1),
//     category: "Housing",
//     member: "Dad",
//     type: "expense",
//   },
//   {
//     id: "7",
//     description: "Bonus",
//     amount: 1000.0,
//     date: new Date(2025, 4, 30),
//     category: "Income",
//     member: "Mom",
//     type: "income",
//   },
//   {
//     id: "8",
//     description: "Car Insurance",
//     amount: 150.0,
//     date: new Date(2025, 4, 28),
//     category: "Transportation",
//     member: "Dad",
//     type: "expense",
//   },
//   {
//     id: "9",
//     description: "Restaurant Dinner",
//     amount: 85.25,
//     date: new Date(2025, 4, 25),
//     category: "Food",
//     member: "Mom",
//     type: "expense",
//   },
//   {
//     id: "10",
//     description: "Allowance",
//     amount: 50.0,
//     date: new Date(2025, 4, 20),
//     category: "Other",
//     member: "Daughter",
//     type: "expense",
//   },
// ]

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<TransactionType[] | null>()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState<string>("all")
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: undefined,
    to: undefined,
  })

  async function fetchTransactions() {
    const response = await transactionService.getTransactions()
    if (!response.success) {
      console.error(response.message)
      // return
    }

    setTransactions(response.data)
  }

  useEffect(() => {
    
  }, [])

  if (!transactions) return;
  
  // Get unique members and categories for filters
  const members = Array.from(new Set(transactions.map((t) => t.member)))
  const categories = Array.from(new Set(transactions.map((t) => t.category)))

  // Filter transactions based on search and filters
  const filteredTransactions = transactions.filter((transaction) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.member.toLowerCase().includes(searchQuery.toLowerCase())

    // Member filter
    const matchesMember = selectedMembers.length === 0 || selectedMembers.includes(transaction.member)

    // Category filter
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(transaction.category)

    // Type filter
    const matchesType = selectedType === "all" || transaction.type === selectedType

    // Date range filter
    const matchesDateRange =
      (!dateRange.from || transaction.date >= dateRange.from) && (!dateRange.to || transaction.date <= dateRange.to)

    return matchesSearch && matchesMember && matchesCategory && matchesType && matchesDateRange
  })

  // Calculate totals
  const totalIncome = filteredTransactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = filteredTransactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)

  const netAmount = totalIncome - totalExpense

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
        <p className="text-muted-foreground">View and filter all your family's financial transactions.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <ArrowUpIcon className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-500">${totalIncome.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <ArrowDownIcon className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-rose-500">${totalExpense.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Amount</CardTitle>
            {netAmount >= 0 ? (
              <ArrowUpIcon className="h-4 w-4 text-emerald-500" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-rose-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className={cn("text-2xl font-bold", netAmount >= 0 ? "text-emerald-500" : "text-rose-500")}>
              ${Math.abs(netAmount).toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>Browse and filter all your family's financial activities.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search transactions..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-1">
                      <FilterIcon className="h-4 w-4" />
                      <span>Member</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>Filter by Member</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {members.map((member) => (
                      <DropdownMenuCheckboxItem
                        key={member}
                        checked={selectedMembers.includes(member)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedMembers([...selectedMembers, member])
                          } else {
                            setSelectedMembers(selectedMembers.filter((m) => m !== member))
                          }
                        }}
                      >
                        {member}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-1">
                      <FilterIcon className="h-4 w-4" />
                      <span>Category</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {categories.map((category) => (
                      <DropdownMenuCheckboxItem
                        key={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([...selectedCategories, category])
                          } else {
                            setSelectedCategories(selectedCategories.filter((c) => c !== category))
                          }
                        }}
                      >
                        {category}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="income">Income</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>
                        {dateRange.from ? (
                          dateRange.to ? (
                            <>
                              {format(dateRange.from, "LLL dd")} - {format(dateRange.to, "LLL dd")}
                            </>
                          ) : (
                            format(dateRange.from, "LLL dd")
                          )
                        ) : (
                          "Date Range"
                        )}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={dateRange.from}
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>

                {(selectedMembers.length > 0 ||
                  selectedCategories.length > 0 ||
                  selectedType !== "all" ||
                  dateRange.from ||
                  dateRange.to) && (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setSelectedMembers([])
                      setSelectedCategories([])
                      setSelectedType("all")
                      setDateRange({ from: undefined, to: undefined })
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            <div className="rounded-md border">
              <div className="grid grid-cols-6 border-b bg-muted/50 p-3 text-sm font-medium">
                <div className="col-span-2">Description</div>
                <div className="hidden md:block">Date</div>
                <div className="hidden md:block">Category</div>
                <div className="hidden md:block">Member</div>
                <div className="text-right">Amount</div>
              </div>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="grid grid-cols-6 items-center p-3 text-sm [&:not(:last-child)]:border-b"
                  >
                    <div className="col-span-2 font-medium">{transaction.description}</div>
                    <div className="hidden md:block">{format(transaction.date, "MMM d, yyyy")}</div>
                    <div className="hidden md:block">{transaction.category}</div>
                    <div className="hidden md:block">{transaction.member}</div>
                    <div
                      className={cn(
                        "text-right font-medium",
                        transaction.type === "income" ? "text-emerald-500" : "text-rose-500",
                      )}
                    >
                      {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  No transactions found matching your filters.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

