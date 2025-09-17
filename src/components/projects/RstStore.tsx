import Icon from "@/components/Icon.tsx";
import { MenuListItem } from "@/components/MenuListItem.tsx";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";


export function RstStore () {
    return (
        <Drawer>
            <DrawerTrigger>
                <MenuListItem title={"RST Store"} iconList={[ "nonicons:javascript-16", "nonicons:react-16", "simple-icons:express", "mdi:tailwind", "tabler:brand-redux", "simple-icons:reactrouter", "simple-icons:mongoose", "logos:jwt-icon" ]}>
                    A classroom project featuring a simple ecommerce application with backend.
                </MenuListItem>
            </DrawerTrigger>
            <DrawerContent className={"!select-auto"}>
                <div className={"max-w-7xl w-full mx-auto p-3 lg:py-5 sm:px-5 md:px-10 lg:px-20 overflow-auto scrollbar-hidden"}>
                    <DrawerHeader>
                        <DrawerTitle className={"text-left text-xl sm:text-2xl font-bold"}>
                            RST Store
                        </DrawerTitle>
                        <DrawerDescription className={"text-left"}>
                            <p>A classroom project featuring a simple ecommerce application with backend.</p>
                            <div className={"flex gap-5 flex-wrap mt-3 *:font-semibold *:text-base"}>
                                <a href={"https://github.com/imstoicbtw/rst-store"} target={"_blank"} className={"text-slate-700 flex items-center gap-1"}>
                                    <Icon icon={"simple-icons:github"} className={"!size-4 -mt-px"} />
                                    <span>Repository</span>
                                </a>
                                <a href={"http://15.207.108.30/"} target={"_blank"} className={"text-blue-600 flex items-center gap-1"}>
                                    <Icon icon={"lucide:external-link"} className={"!size-4 -mt-px"} />
                                    <span>See Live</span>
                                </a>
                            </div>
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className={"mt-5 sm:mt-6 lg:mt-8 text-sm sm:text-base flex flex-col gap-5 sm:gap-6 lg:gap-8"}>
                        <div>
                            <h2 className={"text-lg sm:text-xl font-bold"}>Overview</h2>
                            <p className={"mt-2 lg:mt-3"}>
                                This is a simple ecommerce classroom project in JavaScript + React.js. This application features a simple product listing, product details page, cart, checkout, and admin dashboard and is responsive on any device.
                            </p>
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}