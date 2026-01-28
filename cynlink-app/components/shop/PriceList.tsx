import React from 'react'
import { Title } from '../ui/text'
import { Label } from '../ui/label'

const priceArray = [
  { title: 'Under $100', value: '0-100' },
  { title: '$100 - $200', value: '100-200' },
  { title: '$200 - $300', value: '200-300' },
  { title: '$300 - $500', value: '300-500' },
  { title: 'Over $500', value: '500-10000' },
]

interface Props {
  selectedPrice?: string | null
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>
}

const PriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div className="w-full bg-white p-4 font-sans">
      <Title className="text-lg text-black">Price</Title>

      <div className="mt-2 space-y-1">
        {priceArray?.map((price, index) => {
          const checked = selectedPrice === price.value

          return (
            <div
              key={index}
              onClick={() => setSelectedPrice(price.value)}
              className="flex items-center space-x-2 py-1.5 hover:cursor-pointer"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setSelectedPrice(price.value)}
                className="size-4 rounded border-2 border-gray-400 accent-black cursor-pointer"
              />

              <Label
                htmlFor={price.value}
                className={checked ? 'font-semibold text-shop_gold' : 'font-normal'}
              >
                {price.title}
              </Label>
            </div>
          )
        })}
      </div>

      {selectedPrice && (
        <button
          onClick={() => setSelectedPrice(null)}
          className="text-sm font-medium mt-2 underline underline-offset-2 decoration-1 hover:text-shop_gold hoverEffect text-left"
        >
          Reset selection
        </button>
      )}
    </div>
  )
}

export default PriceList
