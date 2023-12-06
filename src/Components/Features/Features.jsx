import wrench from '../../assets/images/feature/Wrench.svg'
import box from '../../assets/images/feature/Group 38731.svg'
import shield from '../../assets/images/feature/Group 38730.svg'
import { BsFillClockFill, BsPeopleFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';


const Features = () => {
  return (
    <div className='mb-20'>
      <div className='text-center'>
        <h3 className='text-xl text-orange-600'>Core Features</h3>
        <h1 className='text-3xl font-bold'>Why Choose Us</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which do not look even slightly
          believable.
        </p>
      </div>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
    <div className='card w-28 bg-base-100 shadow-xl'>
            <div className='px-10 pt-10 text-4xl text-orange-500'>
            <BsPeopleFill></BsPeopleFill>
            </div>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Expert Team</h2>
        </div>
      </div>
      <div className='card w-28 bg-base-100 shadow-xl'>
        <div className='px-10 pt-10 text-3xl text-orange-500'>
            <BsFillClockFill></BsFillClockFill>
        </div>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Timely Delivery</h2>
        </div>
      </div>
      <div className='card w-28 bg-base-100 shadow-xl'>
        <div className='px-10 pt-10 text-3xl text-orange-500'>
            <BiSupport></BiSupport>
        </div>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>24/7 Support</h2>
        </div>
      </div>
      <div className='card w-28 bg-base-100 shadow-xl'>
        <div className='px-10 pt-10 text-3xl text-orange-500'>
          <img
            src={wrench}
            alt='Shoes'
            className='rounded-xl'
          />
        </div>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Best Equipment</h2>
        </div>
      </div>
      <div className='card w-28 bg-base-100 shadow-xl'>
        <div className='px-10 pt-10 text-3xl text-orange-500'>
          <img
            src={shield}
            alt='Shoes'
            className='rounded-xl'
          />
        </div>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>100% Guaranty</h2>
        </div>
      </div>
      <div className='card w-28 bg-base-100 shadow-xl'>
        <div className='px-10 pt-10'>
          <img
            src={box}
            alt='Shoes'
            className='w-full'
          />
        </div>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Timely Delivery</h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Features;
