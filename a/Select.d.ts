import { Option, Props } from './types';
declare const _default: <GenericOption extends Option<OptionValue>, OptionValue = string>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((value: OptionValue | OptionValue[]) => any) | undefined;
        readonly onOptionSelected?: ((option: GenericOption) => any) | undefined;
        readonly onOptionDeselected?: ((option: GenericOption | null) => any) | undefined;
        readonly onOptionCreated?: ((value: string) => any) | undefined;
        readonly onMenuOpened?: (() => any) | undefined;
        readonly onMenuClosed?: (() => any) | undefined;
        readonly onSearch?: ((value: string) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onUpdate:modelValue" | "onOptionSelected" | "onOptionDeselected" | "onOptionCreated" | "onMenuOpened" | "onMenuClosed" | "onSearch"> & ({
        modelValue: OptionValue | OptionValue[];
    } & Props<GenericOption, OptionValue>) & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        value?(_: {
            option: GenericOption;
        }): any;
        tag?(_: {
            option: GenericOption;
            removeOption: () => void;
        }): any;
        clear?(_: {}): any;
        dropdown?(_: {}): any;
        loading?(_: {}): any;
        'menu-header'?(_: {}): any;
        option?(_: {
            option: GenericOption;
            index: number;
            isFocused: boolean;
            isSelected: boolean;
            isDisabled: boolean;
        }): any;
        'no-options'?(_: {}): any;
        'taggable-no-options'?(_: {
            option: string;
        }): any;
    };
    emit: {
        (e: "optionSelected", option: GenericOption): void;
        (e: "optionDeselected", option: GenericOption | null): void;
        (e: "optionCreated", value: string): void;
        (e: "menuOpened"): void;
        (e: "menuClosed"): void;
        (e: "search", value: string): void;
    } & ((evt: "update:modelValue", value: OptionValue | OptionValue[]) => void);
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
