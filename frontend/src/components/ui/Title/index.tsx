import type { ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const title = tv({
    base: "font-semibold",
    variants: {
        level: {
            h1: "text-5xl md:text-8xl",
            h2: "text-4xl md:text-7xl",
        },
    },
    defaultVariants: {
        level: "h1",
    },
});

interface TitleProps extends VariantProps<typeof title> {
    as?: ElementType;
    children: React.ReactNode;
    className?: string;
}

export default function Title({ as: Component = "h1", level, children, className }: TitleProps) {
    return (
        <Component className={title({ level, class: className })}>
            {children}
        </Component>
    );
}