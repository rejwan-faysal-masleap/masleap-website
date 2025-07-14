// Label component extends from shadcnui - https://ui.shadcn.com/docs/components/label

"use client";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

import { cn } from "../../../lib/utils";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "small-paragaraph font-semibold text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

