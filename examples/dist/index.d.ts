import * as vue_demi from 'vue-demi';
import { PropType, Ref } from 'vue-demi';
import * as CSS from 'csstype';

interface CSSProperties extends CSS.Properties<string | number> {
}
declare type StyleValue = CSSProperties | Array<StyleValue>;
declare const _default: vue_demi.DefineComponent<{
    backgroundColor: {
        type: StringConstructor;
        validator: (val: string) => boolean;
        default: string;
    };
    successBgColor: {
        type: StringConstructor;
        validator: (val: string) => boolean;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    innerText: {
        type: StringConstructor;
        default: string;
    };
    sliderSuccessInnerText: {
        type: StringConstructor;
        default: string;
    };
    innerTextStyle: {
        type: PropType<StyleValue>;
        default: () => {};
    };
    sliderStyle: {
        type: PropType<StyleValue>;
        default: () => {};
    };
    sliderSuccessStyle: {
        type: PropType<StyleValue>;
        default: () => {};
    };
}, {
    slideValidatorStatus: Ref<boolean>;
    containerWidth: vue_demi.ComputedRef<string>;
    containerHeight: vue_demi.ComputedRef<string>;
    mergeSliderStyle: StyleValue;
}, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, Record<string, any>, string, vue_demi.VNodeProps & vue_demi.AllowedComponentProps & vue_demi.ComponentCustomProps, Readonly<vue_demi.ExtractPropTypes<{
    backgroundColor: {
        type: StringConstructor;
        validator: (val: string) => boolean;
        default: string;
    };
    successBgColor: {
        type: StringConstructor;
        validator: (val: string) => boolean;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    innerText: {
        type: StringConstructor;
        default: string;
    };
    sliderSuccessInnerText: {
        type: StringConstructor;
        default: string;
    };
    innerTextStyle: {
        type: PropType<StyleValue>;
        default: () => {};
    };
    sliderStyle: {
        type: PropType<StyleValue>;
        default: () => {};
    };
    sliderSuccessStyle: {
        type: PropType<StyleValue>;
        default: () => {};
    };
}>>, {
    backgroundColor: string;
    successBgColor: string;
    width: string;
    height: string;
    innerText: string;
    sliderSuccessInnerText: string;
    innerTextStyle: StyleValue;
    sliderStyle: StyleValue;
    sliderSuccessStyle: StyleValue;
}>;

export { _default as default };
