'use client'
import React, { useState } from 'react';
import Image from 'next/image';
const products = [
  {
    id: 1,
    title: 'Breed Dry Dog Food',
    price: 100,
    rating: 4,
    reviews: 35,
    imgSrc: '/images/dog.png',
    newTag: false,
    colors: ['#DC2626', '#FDE68A'],
  },
  {
    id: 2,
    title: 'CANON EOS DSLR Camera',
    price: 360,
    rating: 4,
    reviews: 95,
    imgSrc: '/images/camera.png',
    newTag: false,
    colors: ['#1F2937'],
  },
  {
    id: 3,
    title: 'ASUS FHD Gaming Laptop',
    price: 700,
    rating: 5,
    reviews: 325,
    imgSrc: '/images/computer.png',
    newTag: false,
    colors: ['#1F2937'],
  },
  {
    id: 4,
    title: 'Curology Product Set',
    price: 500,
    rating: 4,
    reviews: 145,
    imgSrc: '/images/cream.png',
    newTag: false,
    colors: ['#4C1D95'],
  },
  {
    id: 5,
    title: 'Kids Electric Car',
    price: 960,
    rating: 4,
    reviews: 65,
    imgSrc: '/images/car.png',
    newTag: true,
    colors: ['#DC2626', '#F87171'],
  },
  {
    id: 6,
    title: 'Jr. Zoom Soccer Cleats',
    price: 1160,
    rating: 4,
    reviews: 35,
    imgSrc: '/images/shoe.png',
    newTag: false,
    colors: ['#FDE68A', '#1F2937'],
  },
  {
    id: 7,
    title: 'GP11 Shooter USB Gamepad',
    price: 660,
    rating: 4,
    reviews: 55,
    imgSrc: '/images/joystick.png',
    newTag: true,
    colors: ['#000000', '#DC2626'],
  },
  {
    id: 8,
    title: 'Quilted Satin Jacket',
    price: 660,
    rating: 4,
    reviews: 55,
    imgSrc: '/images/jacket.png',
    newTag: false,
    colors: ['#064E3B', '#DC2626'],
  },
];
type StarRatingProps = {
  rating: number;
};
function StarRating({ rating }: StarRatingProps) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 inline-block ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.183c.969
        0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755
        1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175
        0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1
        1 0 00-.364-1.118L2.04 9.384c-.783-.57-.38-1.81.588-1.81h4.183a1
        1 0 00.95-.69l1.287-3.957z" />
      </svg>
    );
  }
  return <>{stars}</>;
}
export default function Product() {
  const [likedProducts, setLikedProducts] = useState<{ [key: number]: boolean }>({});
  const toggleLike = (id: number) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <section className="max-w-7xl mx-auto p-4 top-auto relative bottom-50">
      <div className="mb-6">
        <p className="inline-block text-red-600 font-semibold text-sm mb-1">Our Products</p>
        <h2 className="text-2xl font-semibold mb-4">Explore Our Products</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => {
          const isLiked = likedProducts[product.id] ?? false;
          return (
            <div
              key={product.id}
              className="relative border border-gray-200 rounded-md p-3 hover:shadow-lg transition-shadow"
            >
              {product.newTag && (
                <span className="absolute top-2 left-2 bg-green-400 text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              )}
              <div className="flex justify-end space-x-1 mb-2">
                <button
                  onClick={() => toggleLike(product.id)}
                  className="focus:outline-none"
                  aria-label="Like product"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${isLiked ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition-colors`}
                    fill={isLiked ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 010 6.364L12 20.364l7.682-7.682a4.5 4.5 0 10-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button
                  className="focus:outline-none"
                  aria-label="View product"
                  type="button"
                  onClick={() => alert(`Viewing: ${product.title}`)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 hover:text-gray-700 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
              <div className="relative w-full h-32 mb-3">
                <Image src={product.imgSrc} alt={product.title} layout="fill" objectFit="contain" priority={false} />
              </div>
                     {product.title === 'CANON EOS DSLR Camera' && (
                <button
                  type="button"
                  className="w-full bg-black text-white py-2 rounded mb-3 hover:bg-gray-800 transition-colors"
                  onClick={() => alert(`Added ${product.title} to cart`)}
                >
                  Add To Cart
                </button>
              )}
              <div className="text-xs text-gray-600 mb-1 font-semibold">{product.title}</div>
              <div className="flex items-center text-red-600 font-bold text-sm space-x-1">
                <span>${product.price}</span>
                <StarRating rating={product.rating} />
                <span className="text-gray-400 font-normal mx-1">({product.reviews})</span>
              </div>
              <div className="flex space-x-1 mt-2">
                {product.colors.map((color, i) => (
                  <span key={i} style={{ backgroundColor: color }} className="w-4 h-4 rounded-full border border-gray-300" />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="w-40 p-4 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200  mb-50"
          onClick={() => alert('View all products clicked')}
        >
          View all products
        </button>
      </div>
    </section>
  );
}

