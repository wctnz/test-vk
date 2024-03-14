export interface Item {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  count: number
  totalPrice: number
}

export interface Rating {
  rate: number
  count: number
}
