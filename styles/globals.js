import { css } from '@emotion/react';

export const typeWriter = css`
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .typewriter-line1 {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: typewriter 4s steps(30, end) 1s 1 normal both;
  }

  .typewriter-line2 {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: typewriter 4s steps(30, end) 5s 1 normal both, fadeIn 0s ease-in 5s forwards;
  }

  .blink {
    animation: blink 1s step-start infinite;
  }

  .fade-in-p {
    opacity: 0;
    animation: fadeIn 2s ease-in 9s forwards;
  }
`;

export default typeWriter;