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


export function CanvaToPdf () {
    return (
        <Drawer>
            <DrawerTrigger>
                <MenuListItem title={"Canva To PDF"} iconList={[ "nonicons:javascript-16", "nonicons:react-16", "simple-icons:express", "mdi:tailwind", "tabler:brand-redux", "simple-icons:reactrouter", "simple-icons:mongoose", "logos:jwt-icon" ]}>
                    A practice project to convert a canva design to a pdf file.
                </MenuListItem>
            </DrawerTrigger>
            <DrawerContent className={"!select-auto"}>
                <div className={"max-w-7xl w-full mx-auto p-3 lg:py-5 sm:px-5 md:px-10 lg:px-20 overflow-auto scrollbar-hidden"}>
                    <DrawerHeader>
                        <DrawerTitle className={"text-left text-xl sm:text-2xl font-bold"}>
                            Canva To PDF
                        </DrawerTitle>
                        <DrawerDescription className={"text-left"}>
                            <p>A practice project to convert a canva design to a pdf file.</p>
                            <div className={"flex gap-5 flex-wrap mt-3 *:font-semibold *:text-base"}>
                                <a href={"https://github.com/imstoicbtw/canva-to-pdf"} target={"_blank"} className={"text-slate-700 flex items-center gap-1"}>
                                    <Icon icon={"simple-icons:github"} className={"!size-4 -mt-px"} />
                                    <span>Repository</span>
                                </a>
                            </div>
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className={"mt-5 sm:mt-6 lg:mt-8 text-sm sm:text-base flex flex-col gap-5 sm:gap-6 lg:gap-8"}>
                        <div>
                            <h2 className={"text-lg sm:text-xl font-bold"}>Overview</h2>
                            <p className={"mt-2 lg:mt-3"}>
                                This is a practice project based on Express.js, Socket.io, and Puppeteer.js. This is a backend server with some APIs configured to receive data and send files as binary data. The API route accepts the request with a JSON object as the request body which must include the URL of the canva design and the placeholders with the values of the placeholders, to be replace with.
                            </p>
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}