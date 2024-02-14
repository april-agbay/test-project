import { useRef, useState } from 'react'
import Tab from './component/Tab'
import Nav from './component/Nav'
import Card from './component/Card'
import { bookings } from './dummy-data/bookings'
import { GiPoolTriangle } from "react-icons/gi";
import { LuSailboat } from "react-icons/lu";
import { GiTennisRacket } from "react-icons/gi";
import MiniCard from './component/MiniCard'
import { activities } from './dummy-data/activities'
import Modal from './component/Modal'

function App() {

  const [currentTab, setCurrentTab] = useState("upcoming");
  const [currentActivity, setCurrentActivity] = useState("leisure");
  const [activity, setActivity] = useState();

  const modalRef = useRef();

  return (
    <div className='pb-20'>
      <Modal activity={activity} modalRef={modalRef} />
      <Nav />
      <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <section id={'bookings'} className='lg:px-20 px-5 flex justify-center w-full '>
        <div className='my-10 flex flex-wrap lg:flex-row flex-col gap-5 lg:gap-0'>
          {bookings.map((item)=> {
              
              if(item.type === currentTab) {
                return <Card id={item.id}
                          date={item.date}
                          title={item.title}
                          check_in={item.check_in}
                          check_out={item.check_out}
                          price={item.price}
                          is_paid={item.is_paid}
                          status={item.status} 
                          image={item.image} />
              }
            })}
        </div>
      </section>
      <section id={'activities'} className='flex justify-center mt-20 mb-10'>
        <div className='lg:w-3/4 w-full px-5 flex flex-col justify-center'>
          <h1 className='text-center font-roboto text-4xl'>Activities</h1>
          <p className='text-center'>Guests at <b>Sargood on Collaroy</b> 
          can choose from an extensive range of <b>leisure and recreational activities</b> 
          specifically designed for people living with spinal cord injury. 
          From surfing to golf, ceramics to whale watching, Sargood on Collaroy is the perfect place 
          to engage in new experiences and discover new skills. As part of your <b>short term accommodation</b> package, 
          our specialist spinal trained therapists will support you throughout your participation in our activities, 
          making it a truly positive experience.</p>
        </div>
      </section>
      <section id={'activity-list'}>
          <div className='flex justify-center mt-20 mb-10 gap-x-2 font-roboto px-2'>
            <button onClick={()=> setCurrentActivity("leisure")} className={`${currentActivity === 'leisure' ? 'bg-blue text-white': 'bg-gray-soft'} py-2 px-4 rounded-l-lg flex items-center gap-x-2`}>
              <GiPoolTriangle size={23} />
              Leisure Activities
            </button>
            <button onClick={()=> setCurrentActivity("beach")} className={`${currentActivity === 'beach' ? 'bg-blue text-white': 'bg-gray-soft'} py-2 px-4 flex items-center gap-x-2`}>
              <LuSailboat size={23} />
              Water Sports
            </button>
            <button onClick={()=> setCurrentActivity("other")} className={`${currentActivity === 'other' ? 'bg-blue text-white': 'bg-gray-soft'} py-2 px-4 rounded-r-lg flex items-center gap-x-2`}>
            <GiTennisRacket size={23} />
            Other Sports
            </button>
          </div>
          <div className='lg:px-20 px-5 flex flex-wrap lg:flex-row flex-col lg:gap-0 gap-5'>
            {
              activities.map((item) => {
                if(item.category === currentActivity){
                  return <MiniCard setActivity={setActivity} modalRef={modalRef} image={item.image} title={item.title} />
                }
              })
            }
          </div>
      </section>
     
    </div>
  )
}

export default App
