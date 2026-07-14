export function SocialIcon({ label }: { label: string }) {
  const className = "h-5 w-5 text-cyan-100";

  switch (label) {
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.6 9.66h2.67v8.74H5.6V9.66Zm4.35 0h2.56v1.2h.04c.36-.68 1.22-1.4 2.5-1.4 2.67 0 3.16 1.76 3.16 4.04v4.9h-2.67v-4.34c0-1.03-.02-2.36-1.44-2.36-1.45 0-1.67 1.13-1.67 2.29v4.41H9.95V9.66Z"
          />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.46-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.52 1.01 1.52 1.01.88 1.53 2.32 1.08 2.89.83.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.92 0-1.08.39-1.96 1.02-2.66-.1-.25-.45-1.28.1-2.67 0 0 .83-.27 2.73 1.01a9.45 9.45 0 0 1 4.97 0c1.9-1.28 2.73-1 2.73-1 .54 1.39.2 2.42.1 2.67.64.7 1.02 1.58 1.02 2.66 0 3.83-2.34 4.66-4.57 4.91.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
          />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M18.9 3H21l-4.58 5.24L21.8 21h-4.22l-3.31-4.33L10.5 21H8.4l4.9-5.6L2.2 3h4.32l3 3.97L12.98 3h2.08L10.6 8.1l6.3 8.24h-1.42l-5.54-7.25L4.67 4.35H6.1l5.13 6.7L18.9 3Z"
          />
        </svg>
      );
    default:
      return null;
  }
}
