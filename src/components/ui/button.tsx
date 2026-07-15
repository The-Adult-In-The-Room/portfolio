import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lagoon)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] text-[var(--lagoon-deep)] hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]",
				secondary:
					"border border-[var(--line)] bg-[var(--surface)] text-[var(--sea-ink)] hover:-translate-y-0.5 hover:bg-[var(--link-bg-hover)]",
				outline:
					"border border-[var(--line)] bg-transparent text-[var(--sea-ink)] hover:-translate-y-0.5 hover:bg-[var(--link-bg-hover)]",
				ghost:
					"text-[var(--sea-ink-soft)] hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]",
				link: "text-[var(--lagoon-deep)] underline-offset-4 hover:underline",
			},
			size: {
				default: "px-5 py-2.5",
				sm: "rounded-lg px-3.5 py-2 text-xs",
				lg: "rounded-2xl px-7 py-3 text-base",
				icon: "h-10 w-10 rounded-xl",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> & {
	asChild?: boolean;
} & VariantProps<typeof buttonVariants>) {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
