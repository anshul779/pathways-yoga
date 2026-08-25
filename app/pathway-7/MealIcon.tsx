export type MealIconType = "breakfast" | "snack" | "lunch" | "dinner";

export default function MealIcon({ type }: { type: MealIconType }) {
  switch (type) {
    case "breakfast":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
        </svg>
      );
    case "snack":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3c2 2.2 3.2 4.4 3.2 6.7A3.2 3.2 0 0 1 12 12.9a3.2 3.2 0 0 1-3.2-3.2C8.8 7.4 10 5.2 12 3Z" />
          <path d="M12 12.9V21M8.6 21h6.8" />
        </svg>
      );
    case "lunch":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 11.2a8 8 0 0 1 16 0" />
          <path d="M3.2 11.2h17.6M6.4 15h11.2" />
          <path d="M12 3v2.4" />
        </svg>
      );
    case "dinner":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 14.5a8 8 0 1 1-9.4-10 6.5 6.5 0 0 0 9.4 10Z" />
        </svg>
      );
  }
}
