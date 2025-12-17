import React from 'react'
import Link from 'next/link';
import { Search as SearchIcon } from 'lucide-react';

const SearchButton = () => {
  return (
    <Link href="/search" className="group relative">
      <SearchIcon className="w-5 h-5 hover:text-shop_light_gold hoverEffect" />
    </Link>
  );
};

export default SearchButton;
