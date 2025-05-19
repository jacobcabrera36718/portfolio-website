'use client';

import NavBar from '../../../components/NavBar';
import { Anton, Raleway } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });

export default function EcommerceProject() {
  return (
    <>
      <NavBar />
      <section className="relative mt-[28vh] ml-[460px] text-[#e4e2dd] pr-12">
        <div className="min-w-[300px] mb-12">
          <h1 className={`text-6xl font-bold mb-2 ${anton.className}`}>ECOMMERCE PLATFORM</h1>
          <p className={`text-lg leading-relaxed ${raleway.className}`}>
            This cross-platform ecommerce application was built with .NET MAUI and integrates Stripe for payment processing, user authentication, product listings, and an intuitive shopping cart. It's designed with scalability and responsive design in mind.
          </p>
        </div>
      </section>
    </>
  );
}
