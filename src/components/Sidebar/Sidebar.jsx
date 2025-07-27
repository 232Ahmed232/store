import React from 'react'
import RangeSlider from './Range'

function Sidebar() {
    return (
        <div className='flex flex-col bg-slate-300 h-screen mt-4 w-1/6'  >
            <div className='ml-4 my-4'>
                <h2 className='text-xl font-bold'>Categories</h2>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className=''>Electronics</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className=''>Cosmetics</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className=''>Beauty</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className=''>Perfumes</label>
                </div>
            </div>

            <div className='ml-4 my-4'>
                <h2 className='text-xl font-bold'>Price</h2>
                <RangeSlider min={0} max={5000} step={50}/>
            </div>

            <div className='ml-4 my-4'>
                <h2 className='text-xl font-bold'>Brands</h2>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className=''>Hubabay</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className=''>Xpure</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className=''>Champa</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className=''>Alley</label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar