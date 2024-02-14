
export default function MiniCard(props){

    const { image, title, modalRef, setActivity } = props;

    return <div className="lg:m-[1.4rem] shadow-md border border-gray-border rounded-lg lg:w-[30%] w-full flex gap-x-4 overflow-hidden relative font-roboto">
                <div className="w-40 h-24 overflow-hidden">
                    <img className="w-40 h-24" src={image} />
                </div>
                <div className="w-full">
                    <div className="py-3">
                        <h2 className="">{title}</h2>
                    </div>
                    <div className="absolute bottom-4 right-3">
                        <button onClick={()=> {
                            setActivity({
                                title: title,
                                image: image
                            })
                            modalRef.current.showModal()
                        }} className="border-b-2 text-blue text-sm">View Details</button>
                    </div>
                </div>
            </div>
}