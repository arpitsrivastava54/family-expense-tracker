import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-primary">Family</span>
            <span>Finance</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Track Your Family Finances Together
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Create a family account, invite members, and manage your finances collectively. See who's saving,
                  who's spending, and how your family is doing financially.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="gap-1.5">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full max-w-[500px] rounded-lg bg-muted p-4 shadow-lg">
                <div className="absolute left-4 right-4 top-4 h-12 rounded-md bg-background p-3 shadow">
                  <div className="h-full w-1/2 rounded-sm bg-primary/20"></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 top-20 grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2 rounded-md bg-background p-3 shadow">
                    <div className="h-2 w-1/2 rounded-sm bg-primary/20"></div>
                    <div className="h-20 rounded-sm bg-muted"></div>
                    <div className="h-2 w-3/4 rounded-sm bg-primary/20"></div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-md bg-background p-3 shadow">
                    <div className="h-2 w-1/2 rounded-sm bg-primary/20"></div>
                    <div className="h-20 rounded-sm bg-muted"></div>
                    <div className="h-2 w-3/4 rounded-sm bg-primary/20"></div>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2 rounded-md bg-background p-3 shadow">
                    <div className="h-2 w-1/3 rounded-sm bg-primary/20"></div>
                    <div className="h-24 rounded-sm bg-muted"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Family Accounts</h3>
                <p className="text-muted-foreground">
                  Create a family account and invite all your family members to join and contribute.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Track Income & Expenses</h3>
                <p className="text-muted-foreground">
                  Each member can track their own income and expenses while contributing to the family total.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Insightful Dashboard</h3>
                <p className="text-muted-foreground">
                  View comprehensive reports of your family's financial health with detailed monthly breakdowns.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Family Finance. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

