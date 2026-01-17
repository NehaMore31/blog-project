import React from "react";
import { Navbar, TextInput,Button } from "flowbite-react";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'

export default function Header() {
  return (
    <Navbar className="border-b-2 ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <span className="px-3 py-1 mr-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
        Nemu's</span>Blog
      </Link>
      <form>
        <TextInput type='text' placeholder="Search..." rightIcon={AiOutlineSearch} className='hidden lg:block '/>
      </form>
      <Button className='w-12 h-10 md:hidden' color='gray'>
        <AiOutlineSearch/>
      </Button>
    </Navbar>

    
  );
}
