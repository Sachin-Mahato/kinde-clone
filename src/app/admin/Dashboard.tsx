"use client";
import Link from "next/link";
import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import KindLogo from "@/components/icons/KindeLogo";
import Zap from "../../components/icons/zap";
import ApplicationsPage, {
    ApplicationCard,
} from "../../components/applicationPage";
import MenuDropdown from "../../components/MenuDropdown";
import UserMenu from "@/app/admin/UserMenu";
import DropdownSelector from "../../components/DropDownSelector";

export default function Dashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background">
            {/* Top Navigation */}
            <header className=" h-20 lg:h-[var(--header-height)]">
                <div className="flex h-full justify-between gap-6 items-center px-4 md:px-6">
                    <div>
                        <Link href="/" className="font-semibold text-xl">
                            <KindLogo />
                        </Link>
                    </div>
                    {/* Drop-down */}
                    <div className="hidden lg:flex gap-14">
                        <DropdownSelector
                            title="Sachin dev"
                            subtitle="Business"
                            menuItems={["Switch Business"]}
                        />
                        <DropdownSelector
                            title="Production"
                            subtitle="Environment"
                            menuItems={["Switch Environment"]}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Menu */}

                        <div className=" inline-block lg:hidden">
                            <Button
                                onClick={() =>
                                    setIsMenuOpen((prev: boolean) => !prev)
                                }
                                className="capitalize font-medium bg-transparent text-black hover:bg-transparent"
                            >
                                menu
                            </Button>
                        </div>
                        <Button
                            variant="ghost"
                            className="text-base font-medium hover:text-inherit hover:bg-transparent hidden lg:inline-block"
                        >
                            Docs
                        </Button>
                        <Button className="bg-[var(--button-bgColor)] p-6 text-base  text-[var(--button-color)] hover:bg-purple-200 hover:text-purple-800">
                            <Zap />
                            Upgrade
                        </Button>
                        <UserMenu />
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-[var(--sidebar-width)] text-xl font-semibold  min-h-[calc(100vh-4rem)] p-4 hidden lg:block">
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
                <main className="flex-1 p-6 mb-24">
                    {isMenuOpen ? (
                        <MenuDropdown isMenuOpen={isMenuOpen} />
                    ) : (
                        <div className={`max-w-4xl mx-auto space-y-8`}>
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

                                <div className="grid gap-4 sm:grid-cols-[1fr_0.625rem_1fr] sm:max-w-[40rem] bg-[#f5f5f5] rounded-2xl">
                                    <Card className="rounded-t-2xl py-4 px-8  sm:rounded-l-2xl">
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
                                    {/* <div className="bg-[var(--line-color)]  mx-12 sm:my-12  sm:w-[0.05rem] lg:my-12 sm:h-auto w-full h-[0.05rem]"></div> */}
                                    <div className="bg-[var(--line-color)] mx-auto sm:my-12 sm:w-[0.05rem] lg:my-12 sm:h-[8rem] w-[80%] h-[0.05rem]"></div>

                                    <Card className="rounded-b-2xl sm:rounded-r-2xl">
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

                            {/* TODO: Your application */}
                            <ApplicationCard />
                            <ApplicationsPage />
                        </div>
                    )}
                </main>

                {/* Help Button */}
                <div className="fixed bottom-4 right-4 hidden lg:block">
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
