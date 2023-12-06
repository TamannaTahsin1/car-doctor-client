import about1 from '../../assets/images/about_us/parts.jpg'
import about2 from '../../assets/images/about_us/person.jpg'

const About = () => {
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='relative lg:w-1/2'> 
    <img src={about2} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={about1} className="absolute border-white border-8 right-5 top-1/2 w-1/2 rounded-lg shadow-2xl" />
    </div>
    <div className='lg:w-1/2 space-y-5 p-4'>
        <h1 className='text-xl text-orange-600 font-bold'>About Us</h1>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <button className="btn bg-orange-700 text-white">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;