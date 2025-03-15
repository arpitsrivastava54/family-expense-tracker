import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDownIcon, ArrowUpIcon, DollarSign, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Family Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Smith Family! Here's your financial overview.</p>
      </div>

      <Tabs defaultValue="family" className="space-y-4">
        <TabsList>
          <TabsTrigger value="family">Family Overview</TabsTrigger>
          <TabsTrigger value="personal">Personal Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="family" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Family Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,580.00</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
                <ArrowUpIcon className="h-4 w-4 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$8,350.00</div>
                <p className="text-xs text-muted-foreground">+4.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                <ArrowDownIcon className="h-4 w-4 text-rose-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$5,240.00</div>
                <p className="text-xs text-muted-foreground">-2.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">+1 new member this month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
                <CardDescription>Family income and expenses for the past 6 months</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <div className="h-[250px] w-full px-4">
                    <div className="h-full w-full flex items-end justify-between gap-2">
                      {[65, 40, 75, 50, 90, 80].map((height, i) => (
                        <div key={i} className="relative flex flex-col items-center gap-2 w-full">
                          <div className="w-full flex gap-1">
                            <div className="bg-primary/80 rounded-t-sm w-1/2" style={{ height: `${height}%` }}></div>
                            <div
                              className="bg-rose-500/80 rounded-t-sm w-1/2"
                              style={{ height: `${height * 0.6}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground absolute -bottom-6">
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Family expenses by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <div className="h-[220px] w-[220px] rounded-full border-8 border-background relative">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 h-1/2 w-1/2 bg-primary"></div>
                      <div className="absolute top-0 right-0 h-1/2 w-1/2 bg-rose-500"></div>
                      <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-amber-500"></div>
                      <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-emerald-500"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-background w-2/3 h-2/3 m-auto">
                      <span className="text-sm font-medium">June 2025</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-xs">Housing (30%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                    <span className="text-xs">Food (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                    <span className="text-xs">Transportation (20%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs">Other (25%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your family's most recent financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      description: "Grocery Shopping",
                      amount: "-$120.50",
                      date: "Today",
                      member: "Mom",
                      type: "expense",
                    },
                    {
                      description: "Salary Deposit",
                      amount: "+$3,500.00",
                      date: "Yesterday",
                      member: "Dad",
                      type: "income",
                    },
                    {
                      description: "Internet Bill",
                      amount: "-$89.99",
                      date: "Jun 10, 2025",
                      member: "Dad",
                      type: "expense",
                    },
                    {
                      description: "Part-time Job",
                      amount: "+$250.00",
                      date: "Jun 8, 2025",
                      member: "Son",
                      type: "income",
                    },
                    {
                      description: "School Supplies",
                      amount: "-$45.75",
                      date: "Jun 5, 2025",
                      member: "Daughter",
                      type: "expense",
                    },
                  ].map((transaction, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-2">
                      <div className="flex flex-col">
                        <span className="font-medium">{transaction.description}</span>
                        <span className="text-xs text-muted-foreground">
                          {transaction.date} • {transaction.member}
                        </span>
                      </div>
                      <span className={transaction.type === "income" ? "text-emerald-500" : "text-rose-500"}>
                        {transaction.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Member Contributions</CardTitle>
                <CardDescription>Monthly contribution by family member</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Dad", income: "$5,200", expenses: "$2,100" },
                    { name: "Mom", income: "$2,800", expenses: "$1,950" },
                    { name: "Son", income: "$350", expenses: "$290" },
                    { name: "Daughter", income: "$0", expenses: "$900" },
                  ].map((member, i) => (
                    <div key={i} className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{member.name}</span>
                        <span className="text-xs text-muted-foreground">
                          Net:{" "}
                          {`$${(
                            Number.parseFloat(member.income.replace("$", "").replace(",", "")) -
                              Number.parseFloat(member.expenses.replace("$", "").replace(",", ""))
                          ).toLocaleString()}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-emerald-500">Income: {member.income}</span>
                        <span>•</span>
                        <span className="text-rose-500">Expenses: {member.expenses}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: `${
                              (Number.parseFloat(member.income.replace("$", "").replace(",", "")) /
                                Number.parseFloat(member.expenses.replace("$", "").replace(",", ""))) *
                              50
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="personal" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,100.00</div>
                <p className="text-xs text-muted-foreground">+15.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Income</CardTitle>
                <ArrowUpIcon className="h-4 w-4 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$5,200.00</div>
                <p className="text-xs text-muted-foreground">+0% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Expenses</CardTitle>
                <ArrowDownIcon className="h-4 w-4 text-rose-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,100.00</div>
                <p className="text-xs text-muted-foreground">-5.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">59.6%</div>
                <p className="text-xs text-muted-foreground">+2.2% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Recent Transactions</CardTitle>
              <CardDescription>Your personal financial activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    description: "Salary Deposit",
                    amount: "+$3,500.00",
                    date: "Yesterday",
                    category: "Income",
                    type: "income",
                  },
                  {
                    description: "Internet Bill",
                    amount: "-$89.99",
                    date: "Jun 10, 2025",
                    category: "Utilities",
                    type: "expense",
                  },
                  {
                    description: "Car Payment",
                    amount: "-$350.00",
                    date: "Jun 5, 2025",
                    category: "Transportation",
                    type: "expense",
                  },
                  {
                    description: "Bonus",
                    amount: "+$1,700.00",
                    date: "Jun 1, 2025",
                    category: "Income",
                    type: "income",
                  },
                  {
                    description: "Dinner with Family",
                    amount: "-$120.50",
                    date: "May 28, 2025",
                    category: "Food",
                    type: "expense",
                  },
                ].map((transaction, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-2">
                    <div className="flex flex-col">
                      <span className="font-medium">{transaction.description}</span>
                      <span className="text-xs text-muted-foreground">
                        {transaction.date} • {transaction.category}
                      </span>
                    </div>
                    <span className={transaction.type === "income" ? "text-emerald-500" : "text-rose-500"}>
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

