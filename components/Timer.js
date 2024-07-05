import { useEffect } from "react";

function Timer({ setSecondsRemaining, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        setSecondsRemaining((time) => time - 1);
      }, 1000);

      return () => clearInterval(id);
    },
    [setSecondsRemaining]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"} {mins}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
