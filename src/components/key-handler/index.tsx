import * as React from 'react';

type KeyHandlerProps = {
  keyEventName: string;
  keyCode: number;
  onKeyHandle: (e: KeyboardEvent) => void;
};

export class KeyHandler extends React.Component<KeyHandlerProps, {}> {
  componentDidMount(): void {
    window.addEventListener(this.props.keyEventName, this.handleKey);
  }

  componentWillUnmount(): void {
    window.removeEventListener(this.props.keyEventName, this.handleKey);
  }

  handleKey = (event: KeyboardEvent): void => {
    if (this.props.onKeyHandle && event.keyCode === this.props.keyCode) {
      this.props.onKeyHandle(event);
    }
  };

  render(): React.ReactNode {
    return null;
  }
}
