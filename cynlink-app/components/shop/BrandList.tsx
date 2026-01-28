import { BRANDS_QUERY_RESULT } from '@/sanity.types'
import React from 'react'
import { Label } from '../ui/label'
import { Title } from '../ui/text'

interface Props {
  brands: BRANDS_QUERY_RESULT
  selectedBrand?: string | null
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>
}

const BrandList = ({ brands, selectedBrand, setSelectedBrand }: Props) => {
  return (
    <div className="w-full bg-white p-4 font-sans">
      <Title className="text-lg text-black">Brands</Title>

      <div className="mt-2 space-y-1">
        {brands?.map((brand) => {
          const value = brand?.slug?.current as string
          const checked = selectedBrand === value

          return (
            <div
              onClick={() => setSelectedBrand(value)}
              key={brand?._id}
              className="flex items-center space-x-2 py-1.5 hover:cursor-pointer"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setSelectedBrand(value)}
                className="size-4 rounded border-2 border-gray-400 accent-black cursor-pointer"
              />

              <Label
                htmlFor={value}
                className={checked ? 'font-semibold text-shop_gold' : 'font-normal'}
              >
                {brand?.title}
              </Label>
            </div>
          )
        })}

        {selectedBrand && (
          <button
            onClick={() => setSelectedBrand(null)}
            className="text-sm font-medium mt-2 underline underline-offset-2 decoration-1 hover:text-shop_gold hoverEffect text-left"
          >
            Reset selection
          </button>
        )}
      </div>
    </div>
  )
}

export default BrandList
