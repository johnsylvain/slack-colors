import * as React from 'react';

type KeyHandlerProps = {
  keyEventName: string;
  keyCode: number;
  onKeyHandle: (e: KeyboardEvent) => void;
};

export const KeyHandler: React.SFC<KeyHandlerProps> = ({
  keyEventName,
  keyCode,
  onKeyHandle
}) => {
  React.useEffect(() => {
    const handleKey = (event: KeyboardEvent): void => {
      if (onKeyHandle && event.keyCode === keyCode) {
        onKeyHandle(event);
      }
    };

    window.addEventListener(keyEventName, handleKey);

    return () => window.removeEventListener(keyEventName, handleKey);
  });

  return null;
};
