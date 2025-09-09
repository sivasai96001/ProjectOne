exports.DropDown = class DropDown {

    constructor(page) {
        this.page = page
        this.month = 'select.react-datepicker__month-select'
        this.dateInput = '#datePickerMonthYearInput'
        this.year = 'select.react-datepicker__year-select'
        this.day = '.react-datepicker__day--003:not(.react-datepicker__day--outside-this.month)'

    }
    async gotoUrl() {
        await this.page.goto('https://demoqa.com/date-picker')

    }
    async openDatePicker() {
        await this.page.click(this.dateInput);
    }
    async selectMonth(month) {
        await this.page.selectOption(this.month, { label: month })

    }
    async selectYear(year) {
        await this.page.selectOption(this.year, { label: year })
    }

    async selectDay() {
        await this.page.click(this.day)
    }
}
