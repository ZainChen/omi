import { WeElement } from 'omi';
import '../text-field';
interface Props {
    type: 'date' | 'time' | 'color' | 'datetime-local';
    label: string;
}
interface Data {
}
export default class MPicker extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static defaultProps: {};
    static propTypes: {
        type: StringConstructor;
        label: StringConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
