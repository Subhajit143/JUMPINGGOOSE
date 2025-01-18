import React from 'react'

export const Reviews = () => {
    const data=[
        {name:"Akash Baidya", review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, mauris vel ultrices volutpat, lectus mauris volutpat velit, in posuere arcu ligula nec velit.", designations:"Co-Founder CodeLux PVT LTD,Industry Trainer "},
        {name:"Kumar Singh", review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, mauris vel ultrices volutpat, lectus mauris volutpat velit, in posuere arcu ligula nec velit.", designations:"Consultant At Spencer "},
        {name:"Subhajit Majumdar", review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, mauris vel ultrices volutpat, lectus mauris volutpat velit, in posuere arcu ligula nec velit.", designations:"Founder Shubeats Industry,Co-Founder of SubhInfotech Pvt Ltd "},
        {name:"ALisa Gurwala", review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, mauris vel ultrices volutpat, lectus mauris volutpat velit, in posuere arcu ligula nec velit.", designations:"Manager of Amazoner "},
    ]
  return (
        <>
        <div className='flex flex-col items-center gap-5'>
        <div><h1 className='pt-10 font-semibold text-3xl'>Cheers & Hurrahs</h1></div>
        <div className='sm:flex'>
            {data.map((elem,key)=>(
                <div className='bg-black m-4 p-5 w-80   ' key={key}>
                    <p className='text-6xl  text-lime-200'>❝</p>
                    <p className='text-white py-5'>{elem.review}</p>
                    <hr class="border-t border-lime-200 my-2 w-8
                    "></hr>
                    <h2 className='text-lime-200 font-semibold text-lg'>{elem.name}</h2>
                    <h3 className='text-xs text-lime-200 '>{elem.designations}</h3>
                </div>
            ))}
        </div>
        </div>
        </>
  )
}
