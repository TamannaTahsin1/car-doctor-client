import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price, img} = service;
  const {user} = useContext(AuthContext)
  const handleBookService = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const amount = form.amount.value;
    const email = user?.email;
    const booking = {
        customerName: name,
        email,
        date,
        amount,
        img,
        service: title,
        service_id: _id,
        price: price
    }
    console.log(booking)
    // send data
    fetch('http://localhost:5000/bookings',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Service booked successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
  }
  return (
    <div>
      <h2>Book Service:{title} </h2>
      {/* form */}

      <form onSubmit={handleBookService} className='card-body'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>First Name</span>
            </label>
            <input
              name='name'
              type='text'
              defaultValue={user?.displayName}
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Date</span>
            </label>
            <input
              name='date'
              type='date'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Due Amount</span>
            </label>
            <input
              name='amount'
              type='text'
              defaultValue={'$' + price}
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Your Email</span>
            </label>
            <input
              name='email'
              type='email'
            defaultValue={user?.email}
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Your Message</span>
            </label>
            <input
              name='password'
              type='password'
              placeholder='Your Message'
              className='input input-bordered'
            />
          </div>
        </div>
        <div className='form-control mt-6'>
          <input
            type='submit'
            value='Order Confirmed'
            className='btn btn-block bg-orange-700 text-white'
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
