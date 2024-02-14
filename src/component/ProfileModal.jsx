import { IoCloseOutline } from "react-icons/io5";
import { HiCheckCircle, HiOutlinePencilAlt } from "react-icons/hi";

export default function ProfileModal(props) {

    const { modalRef } = props;

    return <dialog
    className="lg:w-[55%] bg-white shadow-md border border-gray-border rounded-2xl w-full "
    ref={modalRef}
>
    <div className="flex justify-between py-3 px-5 border-b border-gray-border">
        <h2 className="font-roboto">My Profile</h2>
        <button
            onClick={() => {
            modalRef.current.close();
            }}
            className=""
        >
            <IoCloseOutline color={'#1D1950'} size={25} />
        </button>
    </div>
    <div className='flex flex-col py-10'>
       <div className="flex justify-center w-full">
            <div className="relative">
                <img className='rounded-full' width={90} height={90} src={'https://lh3.googleusercontent.com/a/ACg8ocKTCcWOmLtHMWHrY_uoCSSNjNas7zteB1T8s38lZ9eQxic=s360-c-no'} />
                <button className="absolute bottom-2 -right-2 bg-yellow rounded-full p-2">
                    <HiOutlinePencilAlt color="#fff" />
                </button>
            </div>
       </div>
       <div className="mt-10 w-full  px-10 ">
            <div className="flex lg:flex-row flex-col gap-x-5">
                <div className="lg:w-1/2 w-full">
                    <label className="text-sm" htmlFor="firstName">First Name</label>
                    <input value={'April Joy'} id={'firstName'} className="mt-2 w-full py-2 px-3 border border-gray-dark rounded-xl mb-5" />
                </div>
                <div className="lg:w-1/2 w-full">
                    <label className="text-sm" htmlFor="lastName">Last Name</label>
                    <input value={'Agbay'} id={'lastName'} className="mt-2 w-full py-2 px-3 border border-gray-dark rounded-xl mb-5" />
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-x-5">
                <div className="lg:w-1/2 w-full">
                    <label className="text-sm" htmlFor="email">Email</label>
                    <input value={'agbayapriljoy@gmail.com'} readOnly id={'email'} className="mt-2  w-full py-2 px-3 border border-gray-dark rounded-xl mb-7" />
                </div>
                <div className="lg:w-1/2 w-full">
                    <label className="text-sm" htmlFor="mobileNo">Mobile No.</label>
                    <div className="relative">
                        <input value={'+63 9777 593 138'} readOnly id={'mobileNo'} className="mt-2 w-full py-2 px-3 border border-gray-dark rounded-xl mb-16" />
                        <div className='absolute top-3 right-2 flex items-center rounded-full bg-blue px-[0.5rem] py-[0.3rem] text-white'>
                            <HiCheckCircle color={'#fff'} size={20} />
                            <span className="text-sm">Verified</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="font-roboto mb-3">Change Password</p>
            <div className="flex lg:flex-row flex-col gap-x-5">
                <div className="lg:w-1/2 w-full">
                    <label className="text-sm" htmlFor="currentPassword">Current Password</label>
                    <input type="password" value={'April Joy'} id={'currentPassword'} className="mt-2  w-full py-2 px-3 border border-gray-dark rounded-xl mb-5" />
                </div>
                <div className="lg:w-1/2 w-full">
                    <label className="text-sm" htmlFor="newPassword">New Password</label>
                    <input type="password" value={'April Joy'} id={'newPassword'} className="mt-2  w-full py-2 px-3 border border-gray-dark rounded-xl mb-5" />
                </div>
            </div>
           
            <div className="lg:w-1/2 w-full">
                <label className="text-sm" htmlFor="confirmPassword">Confirm Password</label>
                <input type={'password'} value={'April Joy'} id={'confirmPassword'} className="mt-2 w-full py-2 px-3 border border-gray-dark rounded-xl mb-5" />
            </div>
            <div className="w-full flex lg:flex-row flex-col lg:gap-y-0 gap-y-3 justify-end mt-10 gap-x-5 font-roboto">
                <button className="bg-gray-border px-5 py-3 rounded-xl ">CANCEL</button>
                <button className="bg-yellow px-5 py-3 rounded-xl ">UPDATE PROFILE</button>
            </div>
       </div>
    </div>
</dialog>
}