import Link from "next/link";
import DropdownSelector from "./DropDownSelector";

interface MenuDropdownProps {
    isMenuOpen: boolean;
}

export default function MenuDropdown({ isMenuOpen }: MenuDropdownProps) {
    return (
        <div>
            {isMenuOpen && (
                <div className="lg:hidden fixed  bg-white min-h-screen w-full  flex flex-col p-4 z-40 ">
                    {/* <div className="w-full min-h-screen"> */}
                    <div className="flex flex-col gap-8 pb-8 border-b ">
                        <DropdownSelector
                            title="Sachin dev"
                            subtitle="Business"
                            menuItems={["Switch Business"]}
                            size="small"
                        />
                        <DropdownSelector
                            title="Production"
                            subtitle="Environment"
                            menuItems={["Switch Environment"]}
                            size="small"
                        />
                    </div>
                    <aside className="mt-8 text-lg">
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
                                    className="block px-2 py-1 rounded hover:underline underline-offset-[0.375rem] leading-6"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </aside>
                </div>
            )}
        </div>
    );
}
