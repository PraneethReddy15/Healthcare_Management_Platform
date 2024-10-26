import React, { useEffect, useState } from 'react'
import Card from './Card';

const BookAppointment = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        fetchDoctors();
    },[])
    const fetchDoctors = async () => {
        const docs = await fetch(`http://localhost:3000/getDoctors`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await docs.json();
        if(docs.ok){
            setDoctors(data.getDocs)
        }
    }
    console.log(doctors);
  return (
    <>
    <div className='flex flex-wrap justify-around'>
        {doctors.length>0 ? (
            doctors.map((doctor) => (
                <Card key={doctor._id} doctor={doctor} />
            ))
        ):(<p className='bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-4 rounded-md'>No Doctors Available</p>)}
    </div>
    </>
  )
}

export default BookAppointment