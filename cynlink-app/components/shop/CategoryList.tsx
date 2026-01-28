import React from 'react'
import { Category } from '@/sanity.types'
import { Title } from '../ui/text'
import { Label } from '../ui/label'

interface Props {
  categories: Category[]
  selectedCategory?: string | null
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>
}

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }: Props) => {
  return (
    <div className="w-full bg-white p-4 font-sans">
      <Title className="text-lg text-black">Product Categories</Title>

      <div className="mt-2 space-y-1">
        {categories?.map((category) => {
          const value = category?.slug?.current as string
          const checked = selectedCategory === value

          return (
            <div
              key={category?._id}
              onClick={() => setSelectedCategory(value)}
              className="flex item-center space-x-2 py-1.5 hover:cursor-pointer"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setSelectedCategory(value)}
                className="size-4 rounded border-2 border-gray-400 accent-black cursor-pointer"
              />

              <Label
                htmlFor={value}
                className={checked ? 'font-semibold text-shop_gold' : 'font-normal'}
              >
                {category?.title}
              </Label>
            </div>
          )
        })}

        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-sm font-medium mt-2 underline underline-offset-2 decoration-1 hover:text-shop_gold hoverEffect text-left"
          >
            Reset selection
          </button>
        )}
      </div>
    </div>
  )
}

export default CategoryList
