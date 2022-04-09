import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { FaUniversity, FaShoppingBag } from 'react-icons/fa';
import linkedin from "../assets/linkedin.png";

const ProfilePage = () => {
  return (
    <div className='bg-[whitesmoke] h-screen flex items-center justify-center'>
        <div className='h-[450px] w-[850px] bg-white rounded-xl p-5'>
            <div className='h-20 flex items-center justify-between'>
                <div>
                    <div className='flex items-center'>
                        <p className='text-2xl mr-4 font-semibold'>Priya Anand</p>
                        <BsThreeDots size={36}/>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-lg font-medium text-gray-400'>Automation Testing Analyst</p>
                        <div className='bg-lime-400 text-white rounded-xl w-48 flex items-center justify-center ml-6'>
                            <p>Can Join in 3 Weeks</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png" alt="profile_image" height="38px" width="52px"/>
                </div>
            </div>
            <JobDetails />
            <div className='flex justify-around mt-8'>
                <Button title="Java"/>
                <Button title="Automated Testing"/>
                <Button title="Regression Testing"/>
                <Button title="Python"/>
                <Button title="Maven"/>
            </div>
            <div className='flex justify-around mt-8'>
                <div className='flex items-center'>
                    <FaUniversity size={36}/>
                    <p className='text-xl font-semibold text-neutral-400 ml-6'>University Of Melbourne (BCs)</p>
                </div>
                <div className='flex items-center'>
                    <FaShoppingBag size={36}/>
                    <p className='text-xl font-semibold text-neutral-400 ml-6'>Worked as a Senior Analyst</p>
                </div>
            </div>
            <div className='flex justify-end mt-8'>
                <img src={linkedin} alt="linkedin_img" height={"25px"} width={"36px"}/>
            </div>
            <div className='mt-7 flex items-center'>
                <p className='text-2xl mr-7 font-semibold text-zinc-400'>Match %:</p>
                <div className='border-2 border-blue-600 w-20 flex items-center justify-center rounded-2xl h-8 px-12'>
                    <p>98%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

const JobDetails = () => {
    return (
        <ul className='flex justify-evenly mt-4 items-center text-sky-600 font-semibold pr-60'>
            <li>#JT-00520</li>
            <li>05 Positions</li>
            <li>$14,000 - $25,000</li>
            <li>Delhi, India (Remote)</li>
        </ul>
    )
}

const Button = ({ title }) => {
    return (
        <div className='border-[2px] rounded-2xl bg-transparent px-6 h-8 items-center justify-center flex text-lg font-medium'>
            {title}
        </div>
    )
}

export default ProfilePage