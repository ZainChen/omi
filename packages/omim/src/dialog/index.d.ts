import { WeElement } from 'omi';
import { MDCDialogAdapter } from '@material/dialog/adapter';
import '../icon';
import '../button';
interface Props {
    show: boolean;
    title: string;
    msg: string;
    cancelButton: object;
    confirmButton: object;
}
interface Data {
}
export default class Dialog extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        show: BooleanConstructor;
        title: StringConstructor;
        msg: StringConstructor;
        cancelButton: ObjectConstructor;
        confirmButton: ObjectConstructor;
    };
    a: MDCDialogAdapter;
    installed(): void;
    showDialog: boolean;
    onClose: (e: any) => void;
    render(props: any): JSX.Element;
}
export {};
