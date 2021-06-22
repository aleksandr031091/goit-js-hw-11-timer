const refs = {};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    (this.days = this.selector.querySelector('[data-value="days"]')),
      (this.hours = this.selector.querySelector('[data-value="hours"]')),
      (this.mins = this.selector.querySelector('[data-value="mins"]')),
      (this.secs = this.selector.querySelector('[data-value="secs"]')),
      (this.targetDate = targetDate);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.updateTimer(days, hours, mins, secs);
  }

  updateTimer(days, hours, mins, secs) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
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

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jul 17, 2031"),
});

timer.start();
timer2.start();
