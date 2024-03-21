import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/libs/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

interface SubContentProps
    extends React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> {
    className?: string;
}

const DropdownMenuSubContent = React.forwardRef<
    HTMLDivElement,
    SubContentProps
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={cn(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            className
        )}
        {...props}
    />
));
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive.SubContent.displayName;

interface ContentProps
    extends React.ComponentProps<typeof DropdownMenuPrimitive.Content> {
    className?: string;
    sideOffset?: number;
}

const DropdownMenuContent = React.forwardRef<HTMLDivElement, ContentProps>(
    ({ className, sideOffset = 4, ...props }, ref) => (
        <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
                ref={ref}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
                    className
                )}
                {...props}
            />
        </DropdownMenuPrimitive.Portal>
    )
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

interface ItemProps
    extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {
    className?: string;
    inset?: boolean;
}

const DropdownMenuItem = React.forwardRef<HTMLDivElement, ItemProps>(
    ({ className, inset, ...props }, ref) => (
        <DropdownMenuPrimitive.Item
            ref={ref}
            className={cn(
                "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
                inset ? "pl-8" : "",
                className
            )}
            {...props}
        />
    )
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

interface SeparatorProps
    extends React.ComponentProps<typeof DropdownMenuPrimitive.Separator> {
    className?: string;
}

const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, SeparatorProps>(
    ({ className, ...props }, ref) => (
        <DropdownMenuPrimitive.Separator
            ref={ref}
            className={cn(
                "-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800",
                className
            )}
            {...props}
        />
    )
);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

interface ShortcutProps {
    className?: string;
    children?: React.ReactNode;
}

const DropdownMenuShortcut: React.FC<ShortcutProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <span
            className={cn(
                "ml-auto text-xs tracking-widest opacity-60",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuRadioGroup,
};
