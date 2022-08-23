import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'><br></br><br></br> Hi my name is</p>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#0a192f]'> Makenson Noel</span>
          </h1>
          <h1 className='py-2 text-zinc-600'>I'm a Software Engineer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          I developed this website using Firebase, Express.js, React.js, Next.js, Node.js and Tailwind CSS.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/makensonnoel/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/makensonn'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <a href='https://drive.google.com/drive/folders/1RjitJ1TRsskAJgX2kx5aIXJ1nanW0Rj5?usp=sharing' target="_blank">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
          <div className='flex justify-center py-12'>
          <Link href='/#about'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleDown
                  className='text-[#0a192f]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
