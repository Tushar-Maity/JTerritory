import React from 'react'
import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="bg-[whitesmoke] h-screen w-full flex items-center justify-center">
        <div className='bg-white h-[450px] w-[750px] rounded-xl p-5'>
            <Profile />
            <JobDetails />
            <div className='mt-12 pl-8 pr-24 font-medium text-sm'>
                <p>A Job Description or JD is a written narrative that describes the general tasks, or other related duties, and responsibilities of a person. It may specify the functionality to who the position reports.</p>
            </div>
            <div className='bg-slate-600 h-40'>
                <Link to="/profile">
                    <Button title="180 Matching"/>
                </Link>
                <Button title="150 Under Review"/>
                <Button title="20 Client Submitted"/>
                <Button title="0 Joined"/>
                <Button title="20 Rejected"/>
                <Button title="3 Dropped"/>
            </div>
        </div>
    </div>
  )
}

const Profile = () => {
    return (
        <div className='flex px-8'>
            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png" alt="profile_image" height="38px" width="52px"/>
            <div className='ml-3'>
                <p className='text-zinc-500 text-lg'>Olivia & Pape</p>
                <div className='flex items-center'>
                    <p className='text-xl font-bold mr-4'>Senior Automation Testing Analyst</p>
                    <div className='bg-lime-400 w-14 rounded-xl flex items-center justify-center text-white h-6'>
                        Live
                    </div>
                </div>
            </div>
        </div>
    )
}

const JobDetails = () => {
    return (
        <ul className='flex pr-56 justify-between mt-4 items-center text-sky-600 font-semibold px-8'>
            <li>#JT-00520</li>
            <li>05 Positions</li>
            <li>$14,000 - $25,000</li>
            <li>Delhi, India (Remote)</li>
        </ul>
    )
}

const Button = ({ title }) => {
    return (
        <div className='mx-8 mt-12 h-9 bg-violet-200 text-blue-500 w-56 rounded-3xl flex items-center justify-center cursor-pointer text-sm'>
            {title}
        </div>
    )
}

export default JobCard