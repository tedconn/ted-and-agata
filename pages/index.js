import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';

export default function Home() {
  function getColor() {
    return (
      'hsl(' +
      360 * Math.random() +
      ',' +
      (25 + 70 * Math.random()) +
      '%,' +
      (85 + 10 * Math.random()) +
      '%)'
    );
  }

  const countDownDate = new Date('March 24, 2023 09:00:00').getTime();

  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  const startingDays = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const startingHours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const startingMinutes = Math.floor(
    (timeleft % (1000 * 60 * 60)) / (1000 * 60)
  );
  const startingSeconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  const [days, setDays] = useState(startingDays);
  const [hours, setHours] = useState(startingHours);
  const [minutes, setMinutes] = useState(startingMinutes);
  const [seconds, setSeconds] = useState(startingSeconds);
  const startingColor = getColor();
  const [backgroundColor, setBackgroundColor] = useState(startingColor);

  const myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
  }, 1000);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
      onClick={() => {
        const newColor = getColor();
        setBackgroundColor(newColor);
      }}
    >
      <Head>
        <title>Ted & Agata</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {days} days, <br />
          {hours} hours, <br />
          {minutes} minutes, <br />
          {seconds} seconds
        </h1>
      </main>
    </div>
  );
}
