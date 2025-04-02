import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  // Created this component for optimizing the state of the DeleteConfirmation component
  // This component will be used to show the progress bar for the timer
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
