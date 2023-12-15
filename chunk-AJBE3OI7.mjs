import { classNames } from './chunk-KR2WOWIH.mjs';
import * as React from 'react';
import { Root as SeparatorRoot } from '@radix-ui/react-separator';
import { jsx } from 'react/jsx-runtime';

// Define Separator component
const Separator = React.forwardRef(({
    className: classes,
    orientation: separatorOrientation = "horizontal",
    decorative: isDecorative = true,
    ...props
}, ref) => {
    // Determine the classes based on the orientation
    let orientationClasses = separatorOrientation === "horizontal" ? "ui-h-[1px] ui-w-full" : "ui-h-full ui-w-[1px]";

    return jsx(SeparatorRoot, {
        ref: ref,
        decorative: isDecorative,
        orientation: separatorOrientation,
        className: classNames("ui-shrink-0 ui-bg-border", orientationClasses, classes),
        ...props
    });
});
Separator.displayName = SeparatorRoot.displayName;

export { Separator };