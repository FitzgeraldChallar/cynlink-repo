// components/header.tsx
import React from "react";
import Container from "@/components/container";
import Logo from "@/components/logo";
import HeaderMenu from "@/components/headermenu";
import SearchBar from "@/components/searchbar";
import CartIcon from "./carticon";
import FavoriteButton from "./favoritebutton";
import SignIn from "./signin";
import MobileMenu from "./mobilemenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Header = async() => {
    const user = await currentUser();
    return (
        <header className="bg-white py-5">
          <Container className="flex items-center justify-between text-lightColor">
            <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
                <MobileMenu />
                <Logo />
            </div>
            <HeaderMenu />
            <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
                <SearchBar />
                <CartIcon />
                <FavoriteButton />
                <ClerkLoaded>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                 {!user && <SignIn />}
                </ClerkLoaded>
            </div>
          </Container>
        </header>
    );
};

export default Header;

