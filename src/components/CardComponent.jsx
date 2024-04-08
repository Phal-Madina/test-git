import { useTranslations } from 'next-intl'
import React from 'react'

// async function getProducts(){
//   const res = await fetch(`https://dynamic-route-vert.vercel.app/api/products`);
//   const data = await res.json();
//   return data;
// }

const CarComponent = () => {
  const t = useTranslations('Card');
  const list = [
    {
      id : 1,
      name : "Bag!",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6Ex05bT0WicvWwUtMO5t8dNlBWhykFP7zIvfXNLtEEpaiNyAWLmwb5kRwmsTtL0e3C4&usqp=CAU",
      description : "If a dog chews shoes whose shoes does he choose?"
    },
    {
      id : 2,
      name : "Bag!",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxTnNXdzaYfFRxQMw59jUPNkMnOx6EbSKfTWIvgUs0sfvNtQhzKbRTdWwe4PIRXx6_Mg&usqp=CAU",
      description : "If a dog chews shoes whose shoes does he choose?"
    },
    {
      id : 3,
      name : "Bag!",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRd7yOx2D86hAHNGeNmk3ZTDnG4lxyG7szXOiG29GVVuY3MwRSb3QlcwRb_bCSlBB8WWY&usqp=CAU",
      description : "If a dog chews shoes whose shoes does he choose?"
    },
    {
      id : 4,
      name : "Bag!",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDzaWqLju0NJgMUmArOimh-hq29bFvv-B_g&usqp=CAU",
      description : "If a dog chews shoes whose shoes does he choose?"
    },
];
  // const product_data = await getProducts();
  return (
    <div className='flex gap-10 my-10 mt-[20px]'>
    {list.map((i) =>     
      <div className="card w-96 bg-base-100 shadow-xl" id={i.id}>
        <figure className="px-10 pt-10">
          <img src={i.img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{i.name}</h2>
          <p>{i.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default CarComponent