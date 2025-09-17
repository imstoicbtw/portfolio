import Icon from "./Icon.tsx";


type Props = {
    icon?: string;
    title: string;
    children?: string;
    iconList?: string[];
}

export const MenuListItem = ({ icon, title, iconList, children }: Props) => {
    return (
        <li className={"text-left flex items-center gap-2 p-2 rounded-md hover:bg-accent/50 cursor-pointer"}>
            {icon && <Icon icon={icon} className={"!size-6 -mt-0.5"} />}
            <div>
                <div className={"flex items-center gap-2"}>
                    <h3 className={"text-lg font-semibold"}>{title}</h3>
                    {iconList?.length && <div className={"flex gap-1"}>
                        {iconList.map(icon => (
                            <Icon key={icon} icon={icon} className={"!size-4 text-blue-600"} />
                        ))}
                    </div>}
                </div>
                {children && <p className={"text-sm text-muted-foreground"}>{children}</p>}
            </div>
        </li>
    );
};