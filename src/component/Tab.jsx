
export default function Tab(props) {

    const { currentTab, setCurrentTab } = props;

    return <div className='bg-gray-soft font-roboto py-3'>
    <div className='flex lg:flex-row flex-col justify-between items-center lg:px-20 px-3'>
      <div className='flex gap-x-5 items-center mb-4'>
        <button onClick={()=> setCurrentTab("upcoming")} className={`${currentTab === 'upcoming' ? 'text-gray-dark py-5 border-b-4 border-yellow lg:px-3' : 'text-gray-light py-5'}`}>UPCOMING BOOKINGS</button>
        <button onClick={()=> setCurrentTab("past")} className={`${currentTab === 'past' ? 'text-gray-dark py-5 border-b-4 border-yellow lg:px-3' : 'text-gray-light py-5'}`}>PAST BOOKINGS</button>
      </div>
      <div>
        <button className='text-gray-dark bg-yellow py-3 px-4 rounded-xl'>+ ADD BOOKING</button>
      </div>
    </div>
  </div>
}