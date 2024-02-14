
import { IoCloseOutline } from 'react-icons/io5';

export default function Modal(props){

    const { modalRef, activity } = props;

    return <dialog
                className="lg:w-[55%] bg-white shadow-md border border-gray-border rounded-2xl w-full"
                ref={modalRef}
            >
                <div className="absolute right-2 top-2">
                    <button
                        onClick={() => {
                        modalRef.current.close();
                        }}
                        className="lg:text-gray-dark text-white"
                    >
                        <IoCloseOutline  size={25} />
                    </button>
                </div>
                <div className='flex lg:flex-row flex-col'>
                    <div className="lg:w-1/2 w-full h-[18rem] overflow-hidden">
                        <img className="w-[23rem] h-[18rem]" src={activity?.image} />
                    </div>
                    <div className='lg:w-3/4 w-full  h-[18rem] flex flex-col justify-center'>
                        <h1 className='px-5 mb-3 font-roboto text-gray-dark'>{activity?.title}</h1>
                        <p className='px-5 text-gray-dark'>Relax and unwind on our beautiful balcony at Happy Hour at 5pm every Friday. Local musicians provide the perfect atmosphere as you enjoy watching the sun set over the ocean. All welcome.</p>
                    </div>
                </div>
            </dialog>
}