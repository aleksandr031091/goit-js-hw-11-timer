const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  getTimeComponents(time) {
    refs.days.innerHTML = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    refs.hours.innerHTML = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    refs.mins.innerHTML = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    refs.secs.innerHTML = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  setTime() {
    const currentTime = new Date();
    const time = this.targetDate - currentTime;
    this.getTimeComponents(time);
  }

  start() {
    setInterval(() => {
      this.setTime();
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});

timer.start();
