import { Icon as Iconify } from "@iconify/react";


type Props = {
    icon: string;
    className?: string;
}

export default function Icon ({ icon, className }: Props) {
    return (
        <Iconify icon={icon} className={className} />
    );
}