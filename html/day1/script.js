//this will be the script for the calendar to schedule events and run purchasing 
// or just send a message to the owner of the business to make sure that date is available

//array of months
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Calendar base functions
class Calendar {
    //this will determine what day it is and what month it is
    constructor(year, month) {
        this.year = year;
        this.month = month;
        this.daysInMonth = new Date(year, month + 1, 0).getDate();
        this.firstDayOfMonth = new Date(year, month, 1).getDay();
    }
    //this will render the calendar on the page
    render() {
        const calendarElement = document.querySelector('.calendar');
        calendarElement.innerHTML = '';

        const header = document.createElement('div');
        header.className = 'calendar-header';
        header.innerHTML = `<h2 class="month-title">${monthNames[this.month]} ${this.year}</h2>`;
        calendarElement.appendChild(header);

        for (let i = 0; i < this.firstDayOfMonth; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'day';
            calendarElement.appendChild(emptyCell);
        }

        for (let day = 1; day <= this.daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'day';
            dayCell.textContent = day;
            calendarElement.appendChild(dayCell);
        }
    }
}

//this will be a search bar to type in dates
//it should return by changing to calender to view that date