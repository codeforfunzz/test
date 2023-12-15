import { useTracking } from './useTracking.mjs';
import { classNames } from './classNames.mjs';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { jsx } from 'react/jsx-runtime';

// Define Pressable component
const Pressable = React.forwardRef(({
    onClick: handleClick,
    trackingIndex: trackingIdx,
    trackingName: trackingName,
    trackingData: trackingData = {},
    className: classes,
    innerTextKey: textKey = "keyword",
    blockSendTracking: blockTracking = false,
    asChild: isChild = false,
    ...props
}, ref) => {
    let { sendTrack } = useTracking() ?? {};

    const handlePress = (event) => {
        if (handleClick) {
            handleClick(event);
        }

        if (!sendTrack) return;

        let target = event.target;
        let text = target.innerText || target.textContent;

        if (!trackingName) return;

        let trackingInfo = {};
        if (trackingIdx != null) {
            trackingInfo.index = trackingIdx;
        }

        if (!blockTracking) {
            sendTrack(trackingName, "click", {
                ...trackingInfo,
                [textKey]: text,
                ...trackingData,
                auto_click: !trackingName
            });
        }
    };

    return jsx(isChild ? Slot : "div", {
        ref: ref,
        className: classNames("ui-cursor-pointer", classes),
        onClick: handlePress,
        ...props
    });
});
Pressable.displayName = "Pressable";

export { Pressable };