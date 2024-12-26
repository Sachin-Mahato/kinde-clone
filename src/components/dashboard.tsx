import Link from "next/link";
import { ChevronDown, HelpCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import KindLogo from "@/app/admin/KindeLogo";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-background">
            {/* Top Navigation */}
            <header className=" h-20 lg:h-[6.5rem]">
                <div className="flex h-full justify-between gap-6 items-center px-4 md:px-6">
                    <div>
                        <Link href="/" className="font-semibold text-xl">
                            <KindLogo />
                        </Link>
                    </div>
                    <div className="flex gap-14">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="space-x-2">
                                    <div className="flex gap-1 flex-col justify-center items-start">
                                        <p className="leading-[1.33333] font-normal tracking-normal text-[#636363] text-[0.75rem]">
                                            Business
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-muted-foreground leading-6 text-[#2b2b2b] text-base">
                                                Sachin dev
                                            </p>
                                            <ChevronDown className="h-4 w-4" />
                                        </div>
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    Switch Business
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="space-x-2">
                                    <div className="flex gap-1 flex-col justify-center items-start">
                                        <span className=" leading-[1.33333] font-normal tracking-normal text-[#636363] text-[0.75rem]">
                                            Environment
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <p className="text-muted-foreground leading-6 text-[#2b2b2b] text-base">
                                                Production
                                            </p>
                                            <ChevronDown className="h-4 w-4" />
                                        </div>
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    Switch Environment
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div>
                        <Button
                            variant="ghost"
                            className="text-base font-medium hover:text-inherit hover:bg-transparent"
                        >
                            Docs
                        </Button>
                        <Button className="bg-purple-100 p-6 text-base  text-purple-700 hover:bg-purple-200 hover:text-purple-800">
                            <span className="pointer-events-none bg-[#f4e6ff] text-[#913dd1]">
                                <Zap className="mr-2 w-6 h-6" />
                            </span>
                            Upgrade
                        </Button>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 text-xl font-semibold  border-r min-h-[calc(100vh-4rem)] p-4 hidden md:block">
                    <nav className="space-y-2">
                        {[
                            "Users",
                            "Organizations",
                            "Design",
                            "Billing",
                            "Releases",
                            "Settings",
                        ].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="block px-2  py-1 rounded hover:underline  underline-offset-[0.375rem] leading-6"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div>
                            <h1 className="text-3xl font-semibold mb-2">
                                Welcome to Kinde
                            </h1>
                            <p className="text-muted-foreground">
                                Let&apos;s get you up and running
                            </p>
                        </div>

                        <section>
                            <h2 className="text-xl font-medium mb-4">
                                Your business
                            </h2>

                            <div className="grid md:grid-cols-[1fr_0.625rem_1fr] md:max-w-[40rem] bg-[#f5f5f5] rounded-2xl">
                                <Card className="rounded-l-2xl">
                                    <CardContent className="pt-6">
                                        <div className="space-y-2">
                                            <h3 className="font-medium">
                                                Monthly active users
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Last 30 days
                                            </p>
                                            <p className="text-4xl font-semibold">
                                                0
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <div className="bg-[#dbdbdb] w-[0.05rem] my-12"></div>
                                <Card className="rounded-r-2xl">
                                    <CardContent className="pt-6">
                                        <div className="space-y-2">
                                            <h3 className="font-medium">
                                                Total users
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Current
                                            </p>
                                            <p className="text-4xl font-semibold">
                                                0
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">
                                Your applications
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                You need at least one application to start
                                building on Kinde
                            </p>
                            <Button>Add application</Button>
                        </section>
                    </div>
                </main>

                {/* Help Button */}
                <div className="fixed bottom-4 right-4">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-10 w-10"
                    >
                        <HelpCircle className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
