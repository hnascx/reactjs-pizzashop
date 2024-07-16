import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 1', amount: 55 },
    { product: 'Pizza 2', amount: 52 },
    { product: 'Pizza 3', amount: 47 },
    { product: 'Pizza 4', amount: 33 },
    { product: 'Pizza 5', amount: 74 },
  ])
})
