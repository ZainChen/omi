import { WeElement } from 'omi';
import '../icon';
import '../button';
interface Props {
    show: boolean;
    title: string;
    msg: string;
    cancelText: string;
    confirmText: string;
}
interface Data {
}
export default class Dialog extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        show: BooleanConstructor;
        title: StringConstructor;
        msg: StringConstructor;
        cancelText: StringConstructor;
        confirmText: StringConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
