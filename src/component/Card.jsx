
import { HiCheckCircle } from "react-icons/hi";
import { PiWarningCircleFill } from "react-icons/pi";
import PencilIcon from '../icons/PencilIcon';

export default function Card(props){

    const { id, date, title, check_in, check_out, price, is_paid, status, image } = props;

    return <div className='lg:m-[1.4rem] shadow-md rounded-lg lg:w-[30%] w-full overflow-hidden relative'>
                <div className=' absolute top-2 left-2 z-10 text-white'>
                    {
                        status === "approved" ? 
                        <div className='flex items-center rounded-full bg-blue px-[0.5rem] py-[0.3rem]'>
                            <HiCheckCircle color={'#fff'} size={20} />
                            Approved
                        </div>
                    :   status === "pending" ? 
                            <div className='flex items-center rounded-full bg-yellow text-gray-dark px-[0.5rem] py-[0.3rem]'>
                                <PiWarningCircleFill color={'#2d2d2d'} size={20} />
                                Pending
                            </div> 
                        :   <div className='flex items-center rounded-full bg-red text-white px-[0.7rem] py-[0.3rem]'>
                                <PiWarningCircleFill color={'#fff'} size={20} />
                                Cancelled
                            </div>
                    }
                </div>
                <img src={image}  />
                <div className=' shadow pb-3'>
                    <div className='flex justify-between p-5'>
                        <p className={'font-thin text-gray-light'}>Booking ID: <span className='font-semibold'>{id}</span></p>
                        <p className='text-gray-light'>{date}</p>
                    </div>
                    <h2 className='font-roboto px-5 text-gray-dark'>{title}</h2>
                </div>
                <div className={'bg-gray-soft py-3 px-5 flex justify-between'}>
                    <div className='flex gap-x-3'>
                        <HiCheckCircle color={'#1b457b'} size={23} />
                        <div>
                            <p className='text-gray-dark'>Check-In</p>
                            <p className='text-gray-dark'>{check_in}</p>
                        </div>
                    </div>
                    <div className='flex gap-x-3'>
                        <HiCheckCircle color={'#1b457b'} size={23} />
                        <div>
                            <p className='text-gray-dark'>Check-Out</p>
                            <p className='text-gray-dark'>{check_out}</p>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-between items-center px-5 py-3'>
                    <div className='py-3 flex gap-x-4 items-center'>
                        <h2 className='font-roboto text-blue'>${price}<span className='text-sm'>.00</span></h2>
                        {
                            is_paid === "paid" ? <div className='px-2 py-[0.3rem] rounded-full flex bg-blue text-white'>
                                                    <HiCheckCircle color={'#fff'} size={23} />
                                                    <span className='ml'>Paid</span>
                                                </div>
                                        : is_paid === "refunded" ? <div className='px-2 py-[0.3rem] rounded-full flex bg-blue text-white'>
                                                                        <HiCheckCircle color={'#fff'} size={23} />
                                                                        <span className='ml'>Refunded</span>
                                                                    </div>
                                                                :null
                        }
                    </div>
                    <div>
                        <button className='flex gap-x-2 items-center py-2 px-2 border-2 border-blue rounded-xl'>
                            <PencilIcon size={22} />
                            <span className='font-roboto'>Edit Booking</span>
                        </button>
                    </div>
                </div>
            </div>
}