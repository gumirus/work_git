export class Dates {
  constructor() {
    this.birthDate = "1982-11-20";
    this.startWork = "2022-06-23";
    this.birthEl = document.getElementById("birth-date");
    this.workEl = document.getElementById("start-work");
    this.birthEl.classList.add("birth-date");
    this.workEl.classList.add("start-work");
    this.updateDates();
    setInterval(() => this.updateDates(), 1000);
  }

  updateDates() {
    const now = new Date();
    const birth = new Date(this.birthDate);
    let age = now.getFullYear() - birth.getFullYear();
    const monthDiff = now.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
      age--;
    }

    const start = new Date(this.startWork);
    const workDays = Math.round((now - start) / (1000 * 60 * 60 * 24));

    let ageText;
    if (age % 10 === 1 && age % 100 !== 11) {
      ageText = `${age} год`;
    } else if (
      [2, 3, 4].includes(age % 10) &&
      ![12, 13, 14].includes(age % 100)
    ) {
      ageText = `${age} года`;
    } else {
      ageText = `${age} лет`;
    }

    const birthText = `Мне ${ageText}`;

    let word;
    if (workDays % 10 == 1 && workDays != 11) {
      word = "день";
    } else if (
      workDays % 10 >= 2 &&
      workDays % 10 <= 4 &&
      !(workDays >= 12 && workDays <= 14)
    ) {
      word = "дня";
    } else {
      word = "дней";
    }

    // const workText = `Дата начала учёбы и практики: ${start.toLocaleDateString()} (${workDays} ${word})`;

    const workText = `Время практических занятий: ${workDays} ${word}`;

    this.birthEl.textContent = birthText;
    this.workEl.textContent = workText;
  }
}
