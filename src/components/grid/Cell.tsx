import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import {Component} from "react";

type Props = {
    value?: string
    status?: CharStatus
    isRevealing?: boolean
    isCompleted?: boolean
    position?: number
}

type State = {}

export class Cell extends Component<Props, State> {
    private isFilled: "" | undefined | boolean;
    private shouldReveal: false | undefined | boolean;
    private isHighContrast: boolean;
    private classes: string;

    constructor(props: Props) {
        super(props);
        this.isFilled = this.props.value && !this.props.isCompleted
        this.shouldReveal = this.props.isRevealing && this.props.isCompleted
        this.isHighContrast = getStoredIsHighContrastMode()

        this.classes = classnames(
            'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
            {
                'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600': !this.props.status,
                'border-black dark:border-slate-100': this.props.value && !this.props.status,
                'absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700': this.props.status === 'absent',
                'correct shadowed bg-orange-500 text-white border-orange-500': this.props.status === 'correct' && this.isHighContrast,
                'present shadowed bg-cyan-500 text-white border-cyan-500': this.props.status === 'present' && this.isHighContrast,
                'correct shadowed bg-green-500 text-white border-green-500': this.props.status === 'correct' && !this.isHighContrast,
                'present shadowed bg-yellow-500 text-white border-yellow-500': this.props.status === 'present' && !this.isHighContrast,
                'cell-fill-animation': this.isFilled,
                'cell-reveal': this.shouldReveal,
            }
        )
    }

    render() {
        return (
            <div className={this.classes}>
                <div className="letter-container">
                    {this.props.value}
                </div>
            </div>
        )
    }
}
