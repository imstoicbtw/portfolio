import { Badge } from "@/components/ui/badge.tsx";
import { Icon } from "@iconify/react";


type Props = {
    icon: string;
    name: string;
    className?: string;
}

export default function Skill ({ icon, name, className }: Props) {
    return (
        <Badge className={`sm:text-sm flex gap-1.5 py-1 border sm:border-2 ${className ?? ""}`}>
            <Icon icon={icon} />
            <span>{name}</span>
        </Badge>
    );
}