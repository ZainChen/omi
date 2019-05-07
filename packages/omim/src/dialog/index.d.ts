import { WeElement } from 'omi';
import '../button';
interface Props {
    show: boolean;
    scrollable: boolean;
    title: string;
    message: string;
    cancelbutton: object;
    confirmbutton: object;
}
interface Data {
}
export default class Dialog extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        show: BooleanConstructor;
        scrollable: BooleanConstructor;
        title: StringConstructor;
        message: StringConstructor;
        cancelbutton: ObjectConstructor;
        confirmbutton: ObjectConstructor;
    };
    installed(): void;
<<<<<<< HEAD
=======
    onScrim: (evt: any) => void;
    onCancel: (evt: any) => void;
    onConfirm: (evt: any) => void;
>>>>>>> omim-dialog
    render(props: any): JSX.Element;
}
export {};
