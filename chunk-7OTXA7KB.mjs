import { classVarianceAuthority as cva } from 'class-variance-authority';
import { Provider, Viewport, Root, Close, Title, Description } from '@radix-ui/react-toast';
import { forwardRef } from 'react';
import { X as CloseIcon } from 'lucide-react';
import { jsx } from 'react/jsx-runtime';

// Define positions and their corresponding classes
const positions = {
    "bottom-right": "ui-top-0 om-md:ui-bottom-0 ui-right-0 om-md:ui-top-auto",
    "bottom-left": "ui-top-0 om-md:ui-bottom-0 om-md:ui-left-0 om-md:ui-top-auto ui-right-0 om-md:ui-right-auto",
    "top-right": "ui-top-0 ui-right-0",
    "top-left": "ui-top-0 om-md:ui-left-0 ui-right-0 om-md:ui-right-auto"
};

// Define SnackMessageViewport component
const SnackMessageViewport = forwardRef(({ className, position = "bottom-right", ...props }, ref) => {
    let positionClass = positions[position] || positions["bottom-right"];
    return jsx(Viewport, {
        ref: ref,
        className: `${className} ${positionClass} ui-fixed ui-z-[100] ui-px-2 ui-py-3 om-md:ui-px-8 om-md:ui-py-8 ui-space-y-4 ui-flex ui-max-h-screen ui-w-full ui-flex-col-reverse om-md:ui-flex-col om-md:ui-min-w-[420px] om-md:ui-max-w-[532px] om-md:ui-w-auto ui-items-end om-md:ui-items-start`,
        ...props
    });
});
SnackMessageViewport.displayName = "SnackMessageViewport";

// Define SnackMessage component
const SnackMessage = forwardRef(({ className, variant, position = "bottom-right", ...props }, ref) => {
    return jsx(Root, {
        ref: ref,
        className: `${className} ${variant} ${position}`,
        duration: 5000,
        ...props
    });
});
SnackMessage.displayName = "SnackMessage";

// Define ToastIcon component
const ToastIcon = ({ className, children }) => jsx("span", {
    className: `${className} ui-mr-2 ui-w-6 ui-h-6 ui-flex ui-items-center ui-justify-center ui-flex-shrink-0`,
    children: children
});
ToastIcon.displayName = "ToastIcon";

// Define ToastAction component
const ToastAction = forwardRef(({ className, children, ...props }, ref) => jsx("div", {
    ref: ref,
    className: `${className} ui-inline-flex ui-shrink-0 ui-items-center ui-justify-center ui-h-8 ui-px-4 ui-cursor-pointer ui-ml-2 ui-rounded ui-border ui-border-om-white-500 ui-text-sm ui-text-om-white-500 ui-font-medium ui-bg-transparent ui-transition-colors hover:ui-bg-om-white-200 focus:ui-outline-none disabled:ui-pointer-events-none`,
    ...props,
    children: children
}));
ToastAction.displayName = "ToastAction";

// Define ToastClose component
const ToastClose = forwardRef(({ className, ...props }, ref) => jsx(Close, {
    ref: ref,
    className: `${className} ui-absolute ui-right-2 ui-top-2 ui-p-1 ui-rounded-md ui-text-foreground/50 ui-opacity-0 ui-transition-opacity hover:ui-text-foreground focus:ui-opacity-100 focus:ui-outline-none group-hover:ui-opacity-100`,
    "toast-close": "",
    ...props,
    children: jsx(CloseIcon, { className: "ui-h-4 ui-w-4", color: "white" })
}));
ToastClose.displayName = "ToastClose";

// Define ToastTitle component
const ToastTitle = forwardRef(({ className, ...props }, ref) => jsx(Title, {
    ref: ref,
    className: `${className} ui-text-sm ui-text-om-white-500 ui-font-medium ui-line-clamp-2`,
    ...props
}));
ToastTitle.displayName = "ToastTitle";

// Define ToastDescription component
const ToastDescription = forwardRef(({ className, ...props }, ref) => jsx(Description, {
    ref: ref,
    className: `${className} ui-text-sm ui-opacity-90`,
    ...props
}));
ToastDescription.displayName = "ToastDescription";

export { Provider, SnackMessageViewport, SnackMessage, ToastIcon, ToastAction, ToastClose, ToastTitle, ToastDescription };