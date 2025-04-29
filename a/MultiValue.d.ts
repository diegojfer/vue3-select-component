type __VLS_Props = {
    label: string;
    classes?: {
        multiValue?: string;
        multiValueLabel?: string;
        multiValueRemove?: string;
    };
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    remove: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onRemove?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
