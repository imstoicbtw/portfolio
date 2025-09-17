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


export function Aplamart () {
    return (
        <Drawer>
            <DrawerTrigger>
                <MenuListItem title={"Aplamart"} iconList={[ "nonicons:typescript-16", "nonicons:react-16", "simple-icons:express", "mdi:tailwind", "tabler:brand-redux", "simple-icons:reactrouter", "simple-icons:mongoose", "simple-icons:zod", "logos:jwt-icon", "simple-icons:postman" ]}>
                    A complete eCommerce app with admin dashboard, payments, categories, media manager, etc.
                </MenuListItem>
            </DrawerTrigger>
            <DrawerContent className={"!select-auto"}>
                <div className={"max-w-7xl w-full mx-auto p-3 lg:py-5 sm:px-5 md:px-10 lg:px-20 overflow-auto scrollbar-hidden"}>
                    <DrawerHeader>
                        <DrawerTitle className={"text-left text-xl sm:text-2xl font-bold"}>
                            Aplamart
                        </DrawerTitle>
                        <DrawerDescription className={"text-left"}>
                            <p>A complete eCommerce project with admin dashboard, payments, categories, media manager, etc.</p>
                            <div className={"flex gap-5 flex-wrap mt-3 *:font-semibold *:text-base"}>
                                <a href={"https://github.com/imstoicbtw/ecommerce"} target={"_blank"} className={"text-slate-700 flex items-center gap-1"}>
                                    <Icon icon={"simple-icons:github"} className={"!size-4 -mt-px"} />
                                    <span>Repository</span>
                                </a>
                                <a href={"https://documenter.getpostman.com/view/39147763/2sB3HrkxPv"} target={"_blank"} className={"text-orange-600 flex items-center gap-1"}>
                                    <Icon icon={"simple-icons:postman"} className={"!size-4 -mt-px"} />
                                    <span>API Docs</span>
                                </a>
                                <a href={"https://aplamart.shop"} target={"_blank"} className={"text-blue-600 flex items-center gap-1"}>
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
                                This is a comprehensive e-commerce application (basically an improved version of my classroom project, RSTStore) featuring production-grade capabilities. The application is well-typed and has strict frontend and backend validation. This application is completely responsive on any device and has some advanced features like media management.
                            </p>
                        </div>
                        <div>
                            <h2 className={"text-lg sm:text-xl font-bold"}>Features</h2>
                            <ul className={"flex flex-col gap-1 sm:gap-2 lg:gap-3 mt-2 lg:mt-3"}>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>User Auth:&nbsp;</h3>
                                    <p>Registration, login, and JWT-based sessions (access + refresh tokens).</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Role-based Access:&nbsp;</h3>
                                    <p>Customers and admin user roles to interact with the application. Customers can shop, manage their own addresses, and view their own orders. Admins can be a customer plus: can view statistics, add and edit products, view and manage all orders and payments, view and manage all customers, upload and delete media, look for customer queries and disputes.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Product Listing:&nbsp;</h3>
                                    <p>Search, Categories, and Pagination.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Product Page:&nbsp;</h3>
                                    <p>A product details page featuring gallery, cart actions, reviews, and related products.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Cart:&nbsp;</h3>
                                    <p>Users can add/remove products from the cart and update the quantity.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Checkout Flow:&nbsp;</h3>
                                    <p>User adds products to the cart &rarr; Selects a shipping address &rarr; Confirms order items &rarr; Pays for the order and completes the checkout.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Media Management:&nbsp;</h3>
                                    <p>A media management feature for admin to upload and reuse media in multiple places. This eliminates the need for uploading the same media multiple times and increasing the storage.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Profile Page:&nbsp;</h3>
                                    <p>A my account page to view orders, manage addresses, update account info and profile picture, and update password.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Image Upload:&nbsp;</h3>
                                    <p>Client &rarr; Server (Multer) &rarr; Cloudinary.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Validation:&nbsp;</h3>
                                    <p>Input forms and server requests are strictly validated using Zod.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Admin Seed:&nbsp;</h3>
                                    <p>A seeder function to create the super admin when the application is deployed.</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={"text-lg sm:text-xl font-bold"}>Tech Stack</h2>
                            <ul className={"flex flex-col gap-1 sm:gap-2 lg:gap-3 mt-2 lg:mt-3"}>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Frontend:&nbsp;</h3>
                                    <p>TypeScript, React.js, Vite, React Router 7.0, Redux ToolKit.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Backend:&nbsp;</h3>
                                    <p>Node.js (TypeScript), Express 5.x, Mongoose 8.x.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Database:&nbsp;</h3>
                                    <p>MongoDB (Community edition).</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Authentication:&nbsp;</h3>
                                    <p>Cookie-based JWT (access + refresh) tokens.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Payments:&nbsp;</h3>
                                    <p>PayPal sandbox.</p>
                                </li>
                                <li className={"*:inline"}>
                                    <h3 className={"font-bold"}>Media Storage:&nbsp;</h3>
                                    <p>Cloudinary.</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={"text-lg sm:text-xl font-bold"}>Folder Structure</h2>
                            <pre className={"mt-2 lg:mt-3"}>
                                / root <br />
                                ├─ client/ # React app <br />
                                ├─ server/ # API + Models <br />
                                ├─ common/ # Shared types & utils <br />
                                └─ README.md
                            </pre>
                        </div>
                        <div>
                            <h2 className={"text-lg sm:text-xl font-bold"}>Architecture</h2>
                            <pre className={"mt-2 lg:mt-3"}>
                                [Browser / Client] &larr;---&rarr; [PayPal]
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| HTTPS REST API
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v
                                <br />[Server (Express)]
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
                                <br />[MongoDB]  [Cloudinary]
                            </pre>
                        </div>
                        <div>
                            <h2 className={"text-lg sm:text-xl font-bold"}>What I Learned New</h2>
                            <ul className={"flex flex-col gap-1 sm:gap-2 lg:gap-3 mt-2 lg:mt-3"}>
                                <li>
                                    <h3 className={"text-base sm:text-lg font-bold"}>TypeScript</h3>
                                    <ol className={"list-decimal list-inside"}>
                                        <li>Learned basic data typing + generics.</li>
                                        <li>Strong typing gave me confidence across client and server.</li>
                                        <li>Reduced runtime bugs and helped me understand the code better.</li>
                                        <li>The typing doesn't follow industry standards, but I am leaning and understanding TypeScript more and more.</li>
                                    </ol>
                                </li>
                                <li>
                                    <h3 className={"text-base sm:text-lg font-bold"}>Zod Validation</h3>
                                    <ol className={"list-decimal list-inside"}>
                                        <li>Build form validations and server-side request validators.</li>
                                        <li>Stopped invalid inputs before hitting the database.</li>
                                        <li>Centralized validation helped me connect frontend and backend better.</li>
                                    </ol>
                                </li>
                                <li>
                                    <h3 className={"text-base sm:text-lg font-bold"}>Aggregation Pipelines</h3>
                                    <ol className={"list-decimal list-inside"}>
                                        <li>Learned how to write aggregated pipelines for effectively and efficiently query the database.</li>
                                        <li>Used it to build advanced queries for products and categories.</li>
                                        <li>Realized aggregation can replace multiple roundtrips with single optimized query.</li>
                                    </ol>
                                </li>
                                <li>
                                    <h3 className={"text-base sm:text-lg font-bold"}>Express Middlewares</h3>
                                    <ol className={"list-decimal list-inside"}>
                                        <li>Created multiple new middlewares for authentication, validation, image upload, and global error handling.</li>
                                    </ol>
                                </li>
                                <li>
                                    <h3 className={"text-base sm:text-lg font-bold"}>Hybrid Authentication</h3>
                                    <ol className={"list-decimal list-inside"}>
                                        <li>Implemented JWT and cookies for access + refresh tokens.</li>
                                        <li>Learned management and retrieval of the session.</li>
                                    </ol>
                                </li>
                                <li>
                                    <h3 className={"text-base sm:text-lg font-bold"}>Cloudinary</h3>
                                    <ol className={"list-decimal list-inside"}>
                                        <li>Integrated image uploads + destroy to Cloudinary.</li>
                                        <li>Read about transformations on the fly.</li>
                                        <li>Stored secured URLs in MongoDB instead of large binary data.</li>
                                    </ol>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}