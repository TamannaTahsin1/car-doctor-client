// eslint-disable-next-line react/prop-types
const ProductsCard = ({ product }) => {
  const { title, img, price } = product || {};
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure className='px-10 pt-10'>
          <img src={img} alt='Shoes' className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <div className='rating rating-sm'>
            <input
              type='radio'
              name='rating-6'
              className='mask mask-star-2 bg-orange-400'
            />
            <input
              type='radio'
              name='rating-6'
              className='mask mask-star-2 bg-orange-400'
              checked
            />
            <input
              type='radio'
              name='rating-6'
              className='mask mask-star-2 bg-orange-400'
            />
            <input
              type='radio'
              name='rating-6'
              className='mask mask-star-2 bg-orange-400'
            />
            <input
              type='radio'
              name='rating-6'
              className='mask mask-star-2 bg-orange-400'
            />
          </div>
          <h2 className='card-title'>{title}</h2>
            <p className="text-orange-600">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
