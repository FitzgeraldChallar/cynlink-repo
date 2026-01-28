import React from 'react'
import Logo from '@/components/logo';
import Link from 'next/link';
import Container from '@/components/container';

const NotFoundPage = () => {
  return (
    <Container className="bg-white flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Logo />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Looking for something?
          </h2>
          <p className="mt-2 text-sm text-gray-600 ">
            We&apos;re sorry. The Web address you entered is not a functioning page on our site.
          </p>
        </div>
        <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
                <Link 
                   href="/"
                   className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-shop_gold/80 hover:bg-shop_gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazingOrangeDark hoverEffect"
                >
                  Go back to Cynlink&apos;s home page
                </Link>
                <Link 
                   href="/"
                   className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-semibold rounded-md text-amazonBlue  bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazonBlue"
                >
                    Help
                </Link>
            </div>
        </div>
        <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
                Need help? Visit the{" "}
                <Link href="/help" className="font-medium text-amazon-blue hover:text-amazon-blue-dark">
                    Help Center
                </Link>{" "}
                or{" "}
                <Link href="/contact" className="font-medium text-amazon-blue hover:text-amazon-blue-dark">
                    Contact Us
                </Link>
            </p>
        </div>
      </div>
    </Container>
  );
};


export default NotFoundPage


