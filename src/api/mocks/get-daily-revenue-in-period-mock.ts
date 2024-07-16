import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 2000 },
    { date: '02/01/2024', receipt: 1387 },
    { date: '03/01/2024', receipt: 1111 },
    { date: '04/01/2024', receipt: 1251 },
    { date: '05/01/2024', receipt: 1899 },
    { date: '06/01/2024', receipt: 2341 },
    { date: '07/01/2024', receipt: 777 },
  ])
})
