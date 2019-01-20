import * as React from 'react';
import classNames from 'classnames';
import styles from './loader.styles';

type LoaderProps = { children?: React.ReactNode };
type LoaderState = { currentMessageIndex: number };

export class Loader extends React.Component<LoaderProps, LoaderState> {
  private intervalId: any;

  state = {
    currentMessageIndex: 0
  };

  componentDidMount(): void {
    const length = React.Children.count(this.props.children);
    if (length > 1) {
      this.intervalId = setInterval(() => {
        if (this.state.currentMessageIndex === length - 1) {
          clearInterval(this.intervalId);
        } else {
          this.setState(state => ({
            currentMessageIndex: state.currentMessageIndex + 1
          }));
        }
      }, 5000);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalId);
  }

  render(): React.ReactNode {
    return (
      <div>
        <div className={styles.loader}>
          <div />
          <div />
          <div />
        </div>
        <div className={styles.messages}>
          {React.Children.map(
            this.props.children,
            (child: any, index: number) =>
              React.cloneElement(child, {
                className: classNames(styles.message, {
                  [styles.messageActive]:
                    index === this.state.currentMessageIndex
                }),
                style: {
                  transform: `translateY(${this.state.currentMessageIndex *
                    -100}%)`
                }
              })
          )}
        </div>
      </div>
    );
  }
}
