import man1 from "../../assets/images/team/1.jpg";
import man2 from "../../assets/images/team/2.jpg";
import man3 from "../../assets/images/team/3.jpg";

const Team = () => {
  return (
    <div className="mt-20 mb-20">
      <div className='text-center'>
        <h3 className='text-xl text-orange-600'>Team</h3>
        <h1 className='text-3xl font-bold'>Meet Our Team</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img src={man1} alt='Shoes' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Car Engine Plug</h2>
            <p>Engine Expert</p>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img src={man2} alt='Shoes' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Car Engine Plug</h2>
            <p>Engine Expert</p>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img src={man3} alt='Shoes' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Car Engine Plug</h2>
            <p>Engine Expert</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
