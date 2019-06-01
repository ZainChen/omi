import { WeElement } from 'omi';
import '../icon';
interface Props {
    chips: [{
        text: string;
        selected?: boolean;
        leading?: {
            icon: object | string;
        };
        trailing?: {
            icon: object | string;
            role?: string;
            tabindex?: number;
        };
        checkmark: boolean;
    }];
    input?: boolean;
    choice?: boolean;
    filter?: boolean;
    ripple?: boolean;
}
interface Data {
}
export default class chipSet extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static defaultProps: {
        ripple: boolean;
    };
    static propTypes: {
        ripple: BooleanConstructor;
        chips: ObjectConstructor;
        input: BooleanConstructor;
        choice: BooleanConstructor;
        filter: BooleanConstructor;
    };
    trailingClickHandle: (index: any) => void;
    chipClickHandle: (index: any) => void;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
