'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const flashSalesOriginal = [
  {
    id: 1,
    title: 'HAVIT HV-G92 Gamepad',
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
    discountPct: 40,
    imgSrc: '/images/joys.png',
  },
  {
    id: 2,
    title: 'AK-900 Wired Keyboard',
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
    discountPct: 35,
    imgSrc: '/images/keyboard.png',
  },
  {
    id: 3,
    title: 'IPS LCD Gaming Monitor',
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    discountPct: 30,
    imgSrc: '/images/tv.png',
  },
  {
    id: 4,
    title: 'S-Series Comfort Chair',
    price: 375,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    discountPct: 25,
    imgSrc: '/images/chair.png',
  },
  {
    id: 5,
    title: 'S-Series Comfort Chair',
    price: 375,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    discountPct: 25,
    imgSrc: '/images/chair.png',
  },
];
const flashSales = [...flashSalesOriginal, ...flashSalesOriginal];
type StarRatingProps = {
  rating: number;
};
function StarRating({ rating }: StarRatingProps) {
  return (
    <>
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          className={`w-4 h-4 inline-block ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.183c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.04 9.384c-.783-.57-.38-1.81.588-1.81h4.183a1 1 0 00.95-.69l1.287-3.957z" />
        </svg>
      ))}
    </>
  );
}
function calculateTimeLeft(targetDate: Date) {
  const difference = targetDate.getTime() - new Date().getTime();
  let timeLeft = { days: '00', hours: '00', minutes: '00', seconds: '00' };
  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    timeLeft = {
      days: days < 10 ? `0${days}` : `${days}`,
      hours: hours < 10 ? `0${hours}` : `${hours}`,
      minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
      seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
    };
  }
  return timeLeft;
}
export default function Sales() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <section className="w-full  p-4 mt-24">
      <div className="flex items-center justify-between mb-6 mr-300 ml-40">
        <div>
          <p className="inline-block text-red-600 font-semibold text-sm mb-1">Today's</p>
          <h2 className="text-2xl font-semibold mb-2">Flash Sales</h2>
        </div>
        <div className="flex space-x-6 text-sm font-semibold">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => {
            const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];
            return (
              <div key={label} className="flex flex-col items-center">
                <div className="text-2xl">{values[i]}</div>
                <div className="mt-1">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex space-x-8 overflow-x-auto scrollbar-hide p-4 w-400 ml-30">
        {flashSales.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="relative border border-gray-200 rounded-md p-3 hover:shadow-lg cursor-pointer"
            style={{ minWidth: '320px' }} 
          >
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
              -{product.discountPct}%
            </span>
            <div className="flex justify-end space-x-1 mb-2 items-center">
              <button
                type="button"
                aria-label="Like product"
                className="text-gray-400 hover:text-red-500 flex items-center justify-center"
                style={{ transform: 'none', padding: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 016.364-6.364L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682z"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="View product"
                className="text-gray-400 hover:text-gray-700 flex items-center justify-center"
                style={{ padding: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
            <div className="relative w-full h-40 mb-3">
              <Image src={product.imgSrc} alt={product.title} layout="fill" objectFit="contain" priority={false} />
            </div>
            {product.title === 'AK-900 Wired Keyboard' && (
              <button
                type="button"
                className="w-full bg-black text-white py-2 rounded mb-3 hover:bg-gray-800 transition-colors"
                onClick={() => alert(`Added ${product.title} to cart`)}
              >
                Add To Cart
              </button>
            )}
            <div className="text-xs text-gray-600 mb-1 font-semibold">{product.title}</div>
            <div className="flex items-center gap-2 mb-1 font-bold">
              <span className="text-red-600">${product.price}</span>
              <span className="text-gray-400 line-through">${product.oldPrice}</span>
            </div>
            <div className="flex items-center gap-1">
              <StarRating rating={product.rating} />
              <span className="text-xs text-gray-400">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          type="button"
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors duration-200"
          onClick={() => alert('View All Products clicked')}
        >
          View All Products
        </button>
      </div>
    </section>
  );
}