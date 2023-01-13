document.querySelector('.dark-mode-switch').onclick = () => {
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('body').classList.toggle('light');
}

isLeapYear = (year) => {
    return (year % 4 === 0 && year & 100 !== 0 && year %  400 !==0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => { 
    return isLeapYear(year) ? 29 : 28;
}

let calendar = document.querySelector('.calendar');

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let chooseMonth = document.querySelector('#choose-months');

chooseMonth.onclick = () => { 
  month_list.classList.add('show')
}

generateCalendar = (month, year) => { 
    let calendar_days = document.querySelector('.diasDelCalendario');
    
    calendar_days.innerHTML = '';
    
    let calendar_header_year = document.querySelector('#year');
    
    let daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let currDate = new Date();

    chooseMonth.innerHTML = month_names[month];
    calendar_header_year.innerHTML = year;

    let first_day = new Date(year, month, 1);
    
    for (let i = 0; i <= daysOfMonth[month] + first_day.getDay() -1; i++) {
      
        let day = document.createElement('div');
        day.classList.add('calendar-day-hover');
        if (i >= first_day.getDay()) {
          var itemNumber = i - first_day.getDay() + 1;
          day.innerHTML = itemNumber ;
          day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`;
          if (itemNumber === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
            day.classList.add('curr-date');
              }
      }
      calendar_days.appendChild(day);
    }
}

let month_list = calendar.querySelector('.listaMeses');

month_names.forEach((e, index) => { 
  let month = document.createElement('div');
  month.innerHTML = `<div>${e}</div>` ;
  month.onclick = () => { 
    month_list.classList.remove('show');
    curr_month.value = index;
    generateCalendar(curr_month.value, curr_year.value);
  }
  month_list.appendChild(month);
})

document.querySelector('#prev-year').onclick = () => {
  --curr_year.value
  generateCalendar(curr_month.value, curr_year.value);
}

document.querySelector('#next-year').onclick = () => {
  ++curr_year.value
  generateCalendar(curr_month.value, curr_year.value);
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)