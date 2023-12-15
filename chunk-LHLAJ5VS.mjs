import React, { useState, useMemo, useCallback } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { SelectContentAutoLayout, GroupedVirtuoso, Virtuoso } from 'react-virtuoso';
import { useSelectState } from './selectState';
import { Checkbox, Check, Minus } from './checkbox';
import { Placeholder, List, Scroller } from './components';
import { debounce } from './utils';

// Constants for item height
const ITEM_HEIGHT = 36;

// Function to render an option
function renderOption({ option, multiple, inGroupCheckbox }) {
    if (!option || !option.value) return null;
    return (
        <Option
            className={inGroupCheckbox ? "ui-pl-6" : ""}
            multiple={multiple}
            option={option}
        >
            {option.name || option.value}
        </Option>
    );
}

// Component for select content with auto layout
const SelectContentAutoLayout = React.forwardRef(({ hasSearch, autoSearch = true, multiple, options, searchPlaceholder, isGroupCheckbox, itemContentRenderer = renderOption, ...props }, ref) => {
    // State for search keyword and selected options
    let [searchKeyword, setSearchKeyword] = useState("");
    let [filteredKeyword, setFilteredKeyword] = useState("");
    let [filteredOptions, setFilteredOptions] = useState(options || []);

    // Memoized function to filter options
    let filterOptions = useMemo(() => debounce(async keyword => {
        keyword = keyword.trim();
        if (!keyword) {
            setFilteredKeyword("");
            setFilteredOptions(options);
            return;
        }
        let Fuse = (await import('fuse.js')).default;
        let fuse = new Fuse(options, { keys: ["name"] });
        let result = fuse.search(keyword).map(item => item.item);
        setFilteredOptions(result);
        setFilteredKeyword(keyword);
    }, 300), [options]);

    // Callback to handle search input change
    let handleSearchChange = useCallback(event => {
        setSearchKeyword(event.target.value);
        filterOptions(event.target.value);
    }, [filterOptions]);

    // Select state
    let { value: selectedOptions } = useSelectState();

    // Memoized values for Virtuoso
    let initialTopMostItemIndex = useMemo(() => {
        let lastSelectedOption = selectedOptions ? selectedOptions[selectedOptions.length - 1] : undefined;
        return lastSelectedOption ? filteredOptions.findIndex(option => option.value === lastSelectedOption.value) : 0;
    }, [filteredOptions, selectedOptions]);
    let context = useMemo(() => ({ searchKeyword: "" }), []);
    let totalCount = useMemo(() => options.length * ITEM_HEIGHT, [options.length]);

    // Render functions for Virtuoso
    let renderGroup = useCallback(index => {
        let group = options[index];
        return isGroupCheckbox ? <GroupCheckbox group={group} /> : <Group className="ui-bg-om-white-500 ui-pb-1" style={{ background: group.name ? undefined : "transparent", height: group.name ? undefined : "1px" }}>{group.name}</Group>;
    }, [isGroupCheckbox, options]);
    let renderItem = useCallback((index, isLast) => {
        let option = filteredOptions[index];
        let isLastItemInGroup = option.isLastItemInGroup;
        let content = itemContentRenderer({ multiple, option, inGroupCheckbox: isGroupCheckbox });
        return (
            <div>
                {content}
                {isLastItemInGroup && !isLast && !searchKeyword && <Divider />}
            </div>
        );
    }, [isGroupCheckbox, itemContentRenderer, multiple, filteredOptions, searchKeyword]);

    // Render the component
    return (
        <SelectContentAutoLayout
            searchElm={hasSearch ? <SearchInput placeholder={searchPlaceholder} value={searchKeyword} onChange={handleSearchChange} /> : null}
            ref={ref}
            hasFooter={multiple && filteredOptions.length > 0}
            {...props}
        >
            {!filteredKeyword && <GroupedVirtuoso {...{ style: { height: totalCount }, initialTopMostItemIndex, itemContent: renderItem, defaultItemHeight: ITEM_HEIGHT, components: { Scroller, List, EmptyPlaceholder: Placeholder }, context, className: "!ui-h-[calc(100dvh-24px)] om-lg:!ui-h-[216px] ui-max-h-full", groupCounts: options.map(group => group.options.length), groupContent: renderGroup }} />}
            {filteredKeyword && <Virtuoso {...{ style: { height: totalCount }, initialTopMostItemIndex, itemContent: renderItem, defaultItemHeight: ITEM_HEIGHT, components: { Scroller, List, EmptyPlaceholder: Placeholder }, context, className: "!ui-h-[calc(100dvh-24px)] om-lg:!ui-h-[216px] ui-max-h-full", totalCount: filteredOptions.length }} />}
        </SelectContentAutoLayout>
    );
});
SelectContentAutoLayout.displayName = "SelectContentAutoLayout";

export { SelectContentAutoLayout };