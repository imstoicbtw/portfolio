import { Menu } from "@/components/Menu.tsx";
import Skills from "@/components/Skills.tsx";


export default function App () {
    return (
        <main className={"min-h-screen min-w-screen max-w-7xl flex items-center m-auto p-5 sm:p-10 md:p-15 lg:p-20"}>
            <section className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6 lg:gap-10">
                <div className={"overflow-hidden max-w-3xs sm:max-w-sm lg:max-w-max aspect-square rounded-full m-auto sm:m-0"}>
                    <img src={"/profile.png"} alt="Sufiyan Mulla's profile picture." />
                </div>
                <div className={"flex flex-col gap-3 lg:col-span-2"}>
                    <div>
                        <h1 className={"text-4xl sm:text-6xl -ml-2 mb-2 text-center sm:text-left"}>Sufiyan Mulla</h1>
                        <p className={"text-center sm:text-left"}>
                            I’m a product-oriented full-stack developer. I am capable of designing, building, and shipping production-grade web applications that solve real user problems. I enjoy learning new tools and turning ideas into working products. Currently exploring Next.js and advanced TypeScript + React.
                        </p>
                    </div>
                    <div className={"flex gap-2 justify-center sm:justify-start order-first lg:order-none"}>
                        <Menu className={"min-w-full sm:justify-start"}/>
                    </div>
                    <div className={"flex gap-2 justify-center sm:justify-start flex-wrap"}>
                        <Skills />
                    </div>
                </div>
            </section>
        </main>
    );
}