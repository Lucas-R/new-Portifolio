import { tv, type VariantProps } from "tailwind-variants";

const container = tv({
    base: "mx-auto",
    variants: {
        size: {
            default: "max-w-[1200px]"
        },
        py: {
            default: "py-10 md:py-20"
        },
        px: {
            default: "px-4"
        }
    },
    defaultVariants: {
        size: "default",
        py: "default",
        px: "default"
    }
});

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof container> { }

export default function Container({ children, py, px, className }: ContainerProps) {
    return (
        <div className={container({ py, px, class: className })}>
            {children}
        </div>
    )
}