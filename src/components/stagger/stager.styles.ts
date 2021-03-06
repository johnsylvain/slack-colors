import { css, keyframes } from 'emotion';

const lift = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px)
  }

  to {
    opacity: 1;
    transform: translateY(0px)
  }
`;

export default (count: number) => {
  return {
    item: css({
      opacity: 0,
      transform: 'translateY(20px)',
      animation: `${lift} 0.7s forwards`
    }),

    itemDelay: Array.from({ length: count }).map((_, index: number) =>
      css({ animationDelay: `${index * 0.2}s` })
    )
  };
};
