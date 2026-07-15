import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold transition",
	{
		variants: {
			variant: {
				default:
					"border-[var(--chip-line)] bg-[var(--chip-bg)] text-[var(--sea-ink-soft)]",
				secondary:
					"border-[var(--line)] bg-[var(--surface)] text-[var(--sea-ink)]",
				accent:
					"border-[rgba(50,143,151,0.25)] bg-[rgba(79,184,178,0.12)] text-[var(--lagoon-deep)]",
				outline:
					"border-[var(--line)] bg-transparent text-[var(--sea-ink-soft)]",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Badge({
	className,
	variant,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
	return (
		<div
			data-slot="badge"
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
