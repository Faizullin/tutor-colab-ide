
/* ----------- helper.js ----------- */
import { cn } from '@/lib/utils';

/**
* styles that aligns with shadcn/ui
*/
const controlStyles = {
    base: 'flex !min-h-9 w-full rounded-md border border-input bg-transparent pl-3 py-1 pr-1 gap-1 text-sm shadow-sm transition-colors hover:cursor-pointer',
    focus: 'outline-none ring-1 ring-ring',
    disabled: 'cursor-not-allowed opacity-50'
};
const placeholderStyles = 'text-sm text-muted-foreground';
const valueContainerStyles = 'gap-1';
const multiValueStyles =
    'inline-flex items-center gap-2 rounded-md border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
const indicatorsContainerStyles = 'gap-1';
const clearIndicatorStyles = 'p-1 rounded-md';
const indicatorSeparatorStyles = 'bg-border';
const dropdownIndicatorStyles = 'p-1 rounded-md';
const menuStyles =
    'p-1 mt-1 border bg-popover shadow-md rounded-md text-popover-foreground';
const groupHeadingStyles =
    'py-2 px-1 text-secondary-foreground text-sm font-semibold';
const optionStyles = {
    base: 'hover:cursor-pointer hover:bg-accent hover:text-accent-foreground px-2 py-1.5 rounded-sm !text-sm !cursor-default !select-none !outline-none font-sans',
    focus: 'active:bg-accent/90 bg-accent text-accent-foreground',
    disabled: 'pointer-events-none opacity-50',
    selected: ''
};
const noOptionsMessageStyles =
    'text-accent-foreground p-2 bg-accent border border-dashed border-border rounded-sm';
const loadingIndicatorStyles =
    'flex items-center justify-center h-4 w-4 opacity-50';
const loadingMessageStyles = 'text-accent-foreground p-2 bg-accent';

/**
* This factory method is used to build custom classNames configuration
*/
export const createClassNames = (classNames: Record<string, (state: any) => string>) => {
    return {
        clearIndicator: (state) =>
            cn(clearIndicatorStyles, classNames?.clearIndicator?.(state)),
        container: (state) => cn(classNames?.container?.(state)),
        control: (state) =>
            cn(
                controlStyles.base,
                state.isDisabled && controlStyles.disabled,
                state.isFocused && controlStyles.focus,
                classNames?.control?.(state)
            ),
        dropdownIndicator: (state) =>
            cn(dropdownIndicatorStyles, classNames?.dropdownIndicator?.(state)),
        group: (state) => cn(classNames?.group?.(state)),
        groupHeading: (state) =>
            cn(groupHeadingStyles, classNames?.groupHeading?.(state)),
        indicatorsContainer: (state) =>
            cn(indicatorsContainerStyles, classNames?.indicatorsContainer?.(state)),
        indicatorSeparator: (state) =>
            cn(indicatorSeparatorStyles, classNames?.indicatorSeparator?.(state)),
        input: (state) => cn(classNames?.input?.(state)),
        loadingIndicator: (state) =>
            cn(loadingIndicatorStyles, classNames?.loadingIndicator?.(state)),
        loadingMessage: (state) =>
            cn(loadingMessageStyles, classNames?.loadingMessage?.(state)),
        menu: (state) => cn(menuStyles, classNames?.menu?.(state)),
        menuList: (state) => cn(classNames?.menuList?.(state)),
        menuPortal: (state) => cn(classNames?.menuPortal?.(state)),
        multiValue: (state) =>
            cn(multiValueStyles, classNames?.multiValue?.(state)),
        multiValueLabel: (state) => cn(classNames?.multiValueLabel?.(state)),
        multiValueRemove: (state) => cn(classNames?.multiValueRemove?.(state)),
        noOptionsMessage: (state) =>
            cn(noOptionsMessageStyles, classNames?.noOptionsMessage?.(state)),
        option: (state) =>
            cn(
                optionStyles.base,
                state.isFocused && optionStyles.focus,
                state.isDisabled && optionStyles.disabled,
                state.isSelected && optionStyles.selected,
                classNames?.option?.(state)
            ),
        placeholder: (state) =>
            cn(placeholderStyles, classNames?.placeholder?.(state)),
        singleValue: (state) => cn(classNames?.singleValue?.(state)),
        valueContainer: (state) =>
            cn(valueContainerStyles, classNames?.valueContainer?.(state))
    };
};

export const defaultClassNames = createClassNames({});

export const defaultStyles = {
    input: (base) => ({
        ...base,
        'input:focus': {
            boxShadow: 'none'
        }
    }),
    multiValueLabel: (base) => ({
        ...base,
        whiteSpace: 'normal',
        overflow: 'visible'
    }),
    control: (base) => ({
        ...base,
        transition: 'none'
        // minHeight: '2.25rem', // we used !min-h-9 instead
    }),
    menuList: (base) => ({
        ...base,
        '::-webkit-scrollbar': {
            background: 'transparent'
        },
        '::-webkit-scrollbar-track': {
            background: 'transparent'
        },
        '::-webkit-scrollbar-thumb': {
            background: 'hsl(var(--border))'
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: 'transparent'
        }
    })
};
