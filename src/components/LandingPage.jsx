import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textstructure mt-32 px-20'>
        {["We Create","Eye Opening ","Presentations"].map((item, index)=>{
            return <div className='masker'>
            <h1 className='uppercase text-7xl leading-[5.5vw] tracking-tighter font-["Founders_Grotesk] font-medium'>
                {item}
            </h1>
        </div>
            })}
        </div>
        <div className='border-zinc-700 border-t-[1px] mt-24 flex justify-between items-center py-5 px-20'>
            {["For publix and private companies", "From the first pitch to IPO"].map((item, index)=><p className='text-md font-light tracking-tight leading-none '>{item}</p>
            )}
            <div className='start'>
                <div className='px-5 py-2 border-[2px]  rounded-full border-zinc-500 font-light text-sm capitalize'>
                    START THE PROJECT
                </div>
            </div>
        </div>


      
    </div>
  )
}

export default LandingPage
