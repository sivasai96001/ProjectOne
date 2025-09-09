import { test, expect } from '@playwright/test'

import { DropDown } from '../Pages/dropdown'


test('drop down selection', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/')
  await page.getByText('Demos').click()
  //  await page.selectOption('select', { value: 'IND' })
  await page.locator('a:has-text("Examples")').click()
})

test('date picker', async ({ page }) => {
  await page.goto('https://jqueryui.com/datepicker/')
  const frame = await page.frame({ url: 'https://jqueryui.com/resources/demos/datepicker/default.html' })
  const date = await frame.locator('id=datepicker')
  await date.click()
  await date.fill('09/02/2025')

})

test.only('custom date', async ({ page }) => {
  // await page.goto('https://demoqa.com/date-picker')
  // await page.click('id=datePickerMonthYearInput')
  // //await page.locator('//select[@class="react-datepicker__month-select"]').click()
  // await page.selectOption('select.react-datepicker__month-select',{label: 'January'})
  //  await page.selectOption('select.react-datepicker__year-select',{label: '1997'})

  // await page.click('.react-datepicker__day--003')

  const obj = new DropDown(page)
  await obj.gotoUrl()
  await obj.openDatePicker()
  await obj.selectMonth('January')
  await obj.selectYear('1997')
  await obj.selectDay()
})