export interface Root {
  foods: Food[]
}

export interface Food {
  id: string
  index: number
  rating: number
  promotion?: string
  isNew: boolean
  categoryId: string
  minCookTime: number
  maxCookTime: number
  restaurant: string
  name: string
  imageUrl: string
}
