import React from 'react';
import '../../styles/Landing.css'
import { useState, useEffect } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [timeLeft, setTimeLeft] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(timeLeft);
};

const getReturnValues = (timeLeft) => {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const CountdownTimer = ({ targetDate, marathon }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <div class="countdown-section">
        <h1>Countdown to the {marathon}</h1>
         <h2>Its Race Day!</h2>
         </div>
         )
  } else {
    return (
      <div class="countdown-section">
        <h1>Countdown to the {marathon}</h1>
        <div className="countdown-display">
        <div className="countdown-value">
          {days} <br></br><span>days</span>
        </div>
        <div className="countdown-value">
          {hours} <br></br><span>hours</span>
        </div>
        <div className="countdown-value">
          {minutes} <br></br><span>minutes</span>
        </div>
        <div className="countdown-value">
          {seconds} <br></br><span>seconds</span>
        </div>
        </div>
      </div>
    );
  }
};

export default CountdownTimer;