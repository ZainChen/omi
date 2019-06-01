import { WeElement } from 'omi';
import '../icon';
interface Props {
    dot?: boolean;
    content?: string;
    x?: number;
    y?: number;
}
interface Data {
}
export default class Badge extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static defaultProps: {
        x: number;
        y: number;
    };
    static propTypes: {
        dot: BooleanConstructor;
        content: StringConstructor;
        x: NumberConstructor;
        y: NumberConstructor;
    };
    installed(): void;
    uninstall(): void;
    render(props: any): JSX.Element;
}
export {};
