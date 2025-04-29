type __VLS_Props = {
    hasSelectedOption: boolean;
    isMenuOpen: boolean;
    isClearable: boolean;
    isLoading: boolean;
    isDisabled: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        clear?(_: {}): any;
        dropdown?(_: {}): any;
        loading?(_: {}): any;
    };
    refs: {
        container: HTMLDivElement;
        clearButton: HTMLButtonElement;
        dropdownButton: HTMLButtonElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    containerRef: Readonly<import('vue').ShallowRef<HTMLDivElement | null>>;
    clearButtonRef: Readonly<import('vue').ShallowRef<HTMLButtonElement | null>>;
    dropdownButtonRef: Readonly<import('vue').ShallowRef<HTMLButtonElement | null>>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    clear: () => any;
    toggle: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClear?: (() => any) | undefined;
    onToggle?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    container: HTMLDivElement;
    clearButton: HTMLButtonElement;
    dropdownButton: HTMLButtonElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
