import { Aplamart } from "@/components/projects/Aplamart.tsx";
import { CanvaToPdf } from "@/components/projects/CanvaToPdf.tsx";
import { RstStore } from "@/components/projects/RstStore.tsx";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icon } from "@iconify/react";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";


type Props = {
    className?: string;
}

export function Menu ({ className }: Props) {

    const handleShare = () => {
        navigator.share({
            title: "Sufiyan Mulla's Portfolio",
            text: "Check out my portfolio and some cool live projects I've worked on!",
            url: "https://sufiyan.live",
        });
    };

    return (
        <NavigationMenu className={className ?? ""}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <span>Projects</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className={"sm:min-w-md"}>
                            <Aplamart />
                            <RstStore />
                            <CanvaToPdf />
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <span>Contact</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className={"min-w-[calc(100vw-60px)] sm:min-w-md"}>
                            <NavigationMenuLink href={"https://github.com/imstoicbtw"} target={"_blank"} className={"flex items-center gap-2 p-2"}>
                                <Icon icon={"simple-icons:github"} className={"!size-5 text-slate-700 -mt-0.5"} />
                                <span>GitHub</span>
                            </NavigationMenuLink>
                            <NavigationMenuLink href={"https://linkedin.com/in/isufiyanmalik"} target={"_blank"} className={"flex items-center gap-2 p-2 hover:text-sky-600"}>
                                <Icon icon={"simple-icons:linkedin"} className={"!size-5 text-sky-600 -mt-0.5"} />
                                <span>LinkedIn</span>
                            </NavigationMenuLink>
                            <NavigationMenuLink href={"mailto:whosufiyanmalik@gmail.com"} target={"_blank"} className={"flex items-center gap-2 p-2 hover:text-red-500"}>
                                <Icon icon={"mdi:email"} className={"!size-5 text-red-500 -mt-px"} />
                                <span>Send Email</span>
                            </NavigationMenuLink>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href={"/resume.pdf"} download={"Sufiyan Mulla Resume - Full Stack Developer.pdf"} className={navigationMenuTriggerStyle()}>
                        <span>Resume</span>
                        <Icon icon={"mynaui:download"} className={"!size-4 mt-px ml-1"} />
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {typeof navigator?.share === "function" && (
                    <NavigationMenuItem>
                        <button
                            className={`cursor-pointer ${navigationMenuTriggerStyle()}`}
                            onClick={handleShare}
                        >
                            <span>Send</span>
                            <Icon icon={"mynaui:send"} className={"!size-4 mt-px ml-1"} />
                        </button>
                    </NavigationMenuItem>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}