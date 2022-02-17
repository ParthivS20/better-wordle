import {Component, Fragment} from 'react'
import { Transition } from '@headlessui/react'
import classNames from 'classnames'

type Props = {
  isOpen: boolean
  message: string
  variant?: 'success' | 'error'
  topMost?: boolean
}

type State = {};

export class Alert extends Component<Props, State> {
  private classes: string;

  constructor(props: Props) {
    super(props);
    this.classes = classNames(
    'fixed z-20 top-5 left-1/2 transform -translate-x-1/2 max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
      {
        'bg-rose-500 text-white': this.props.variant === 'error',
        'bg-blue-500 text-white': this.props.variant === 'success',
      }
    )
  }

  render() {
    return (
        <Transition
            show={this.props.isOpen}
            as={Fragment}
            enter="ease-out duration-300 transition"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
          <div className={this.classes}>
            <div className="p-4">
              <p className="text-sm text-center font-medium">{this.props.message}</p>
            </div>
          </div>
        </Transition>
    )
  }
}