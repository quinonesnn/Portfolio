import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "group bg-indigo-800 dark:bg-indigo-600 text-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-indigo-900 active:scale-105 transition",
        icon: "group w-11 h-11 hover:text-indigo-600 hover:border-indigo-600 border border-2 border-gray-200 rounded-full focus:scale-110 active:scale-105 hover:scale-110 text-2xl transition",
        outline: "border bg-transparent",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[44px] px-6",
        lg: "h-[48px] px-6",
        icon: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
