
import { useRef, useState } from 'react';
import Logo from '../assets/logo.png'
import { IoNotificationsOutline, IoTriangle } from "react-icons/io5";
import ProfileModal from './ProfileModal';

export default function Nav(){

    const [profileDrop, setProfileDrop] = useState(false);
    const [notificationDrop, setNotificationDrop] = useState(false);
    const modalRef = useRef();

    return <div className='px-10 flex justify-between items-center py-5 '>
            <ProfileModal modalRef={modalRef} />
            <div className='w-1/4'>
                <img src={Logo} width={100} />
            </div>
            <div className='flex justify-end gap-x-5 items-center w-3/4'>
                <h4 className='font-roboto'>MY BOOKINGS</h4>
                <button onClick={()=> setNotificationDrop(prev => !prev)} className='relative '>
                    <IoNotificationsOutline size={30} />
                    <span className='bg-red-light rounded-full py-[0.03rem] px-[0.40rem] text-sm text-white absolute left-3 bottom-4'>1</span>
                    {
                        notificationDrop ? <div className='overflow-hidden flex flex-col lg:w-[30rem] w-[23rem] absolute lg:-right-[4rem] lg:-left-96 -left-60 top-10 shadow z-40 bg-white rounded-xl'>
                                                <div className='relative'>
                                                    <div className='absolute -top-[.6rem] right-[1.3rem] '>
                                                        <IoTriangle color='#f7f7f7' className='' />
                                                    </div>
                                                </div>
                                                <div className='flex w-full py-3 border-b-2 border-gray-soft'>
                                                    <div className='flex gap-x-5 items-center w-full px-5'>
                                                        <p className=' text-gray-dark'>NOTIFICATIONS</p>
                                                        <span className='bg-red-light py-[.09rem] px-[.55rem] rounded-full text-white'>1</span>
                                                    </div>
                                                </div>
                                                <div className='mb-10'>
                                                    <div className='hover:bg-gray-soft px-5 flex items-start py-3 border-b border-gray-border'>
                                                        <div className='w-1/6'>
                                                            <img className='bg-blue w-[3rem] h-[3rem] rounded-full' src={Logo} />
                                                        </div>
                                                        <div className='flex flex-col items-start w-5/6'>
                                                            <p className='font-roboto mb-2'>Booking Confirmed!</p>
                                                            <p className='text-sm mb-2 text-left'>[Service] has successfully booked for [Date].</p>
                                                            <p className='text-sm mb-2'><b>Booking ID: 7234234290</b></p>
                                                        </div>
                                                    </div>
                                                    <div className='hover:bg-gray-soft px-5 flex items-start py-3 border-b border-gray-border'>
                                                        <div className='w-1/6'>
                                                            <img className='bg-blue w-[3rem] h-[3rem] rounded-full' src={Logo} />
                                                        </div>
                                                        <div className='flex flex-col items-start w-5/6'>
                                                            <p className='font-roboto mb-2'>Congratulations!</p>
                                                            <p className='text-sm mb-2 text-left'>Your booking for [Service] is set. We look forward to see you on [Date].</p>
                                                            <p className='text-sm mb-2'><b>Booking ID: 2342423424</b></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full flex justify-end p-5'>
                                                    <p className=' text-gray-light font-roboto'>MARK ALL AS READ</p>
                                                </div>
                                            </div> : null
                    }
                </button>
                <button onClick={()=> setProfileDrop(prev => !prev)} className='rounded-full relative'>
                    <img className='rounded-full' width={45} height={45} src={'https://lh3.googleusercontent.com/a/ACg8ocKTCcWOmLtHMWHrY_uoCSSNjNas7zteB1T8s38lZ9eQxic=s360-c-no'} />
                    {
                        profileDrop ? <div className='flex flex-col w-44 absolute right-3 shadow p-3 z-40 bg-white rounded-xl'>
                                        <button onClick={()=> modalRef.current.showModal()} className='py-2 px-3 hover:bg-gray-soft rounded-lg'>My Profile</button>
                                        <button className='py-2 px-3 hover:bg-gray-soft rounded-lg'>Logout</button>
                                    </div> : null
                    }
                </button>
            </div>
  </div>
}