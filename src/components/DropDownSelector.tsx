import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
interface DropdownSelectorProps {
    title: string;
    subtitle: string;
    menuItems: string[];
    size?: "small" | "large";
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
    title,
    subtitle,
    menuItems,
    size = "large",
}) => {
    const alignmentClass =
        size === "small" ? "justify-normal" : "justify-center";
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className={`space-x-2 hover:bg-transparent ${alignmentClass}`}
                >
                    <div className="flex gap-1 flex-col justify-center items-start">
                        <p className="leading-[1.33333] font-normal tracking-normal text-[var(--subheading-color)] text-[0.75rem]">
                            {subtitle}
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="leading-6 text-[var(--dropdown-title-color)] text-base">
                                {title}
                            </p>
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                {menuItems.map((item, index) => (
                    <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownSelector;
