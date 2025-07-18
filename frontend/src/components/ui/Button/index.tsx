import { tv, type VariantProps } from "tailwind-variants"

const wrapper = tv({
    base: "group flex items-center justify-center gap-4 cursor-pointer uppercase rounded-full",
    variants: {
        thema: {
            transparent: "bg-transparent",
            default: "bg-primary text-dark"
        },
        size: {
            default: "h-18 pl-8 pr-4"
        }
    },
    defaultVariants: {
        thema: "default",
        size: "default"
    }
});

interface WrapperProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof wrapper> {
    icon?: React.ReactNode
}

export default function Wrapper({ children, className, thema, ...props }: WrapperProps) {
    return (
        <button className={wrapper({ thema, class: className })} {...props}>
            {children}
        </button>
    )
}