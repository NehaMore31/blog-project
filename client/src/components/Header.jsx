import React from "react";
import {
  Navbar,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
  TextInput,
  Button,
  Dropdown,
  Avatar,
  DropdownItem,
  DropdownDivider,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon,FaSun } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice.js";

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const {theme}=useSelector((state)=>state.theme);
 // console.log(currentUser);

  return (
    <Navbar className="border-b-2">
      {/* Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >
        <span className="px-3 py-1 mr-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Nemu's
        </span>
        Blog
      </Link>

      {/* Search */}
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      {/* Right section */}
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={() => dispatch(toggleTheme())}
>
      {theme === 'light' ?<FaSun/>:<FaMoon/>}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              
              // <Avatar alt="user" img={currentUser.profilePicture} rounded />
              <Avatar
  alt="user"
  img={currentUser.profilePicture}
  rounded
  referrerPolicy="no-referrer"
/>

            }
          >
          <DropdownItem disabled className="py-3">
  <div className="flex flex-col gap-0.5">
    <span className="text-sm font-semibold text-gray-900 dark:text-white">
      @{currentUser.username}
    </span>
    <span className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[180px]">
      {currentUser.email}
    </span>
  </div>
</DropdownItem>

          <Link to={'/dashboard?tab=profile'}>
          <DropdownItem>Profile</DropdownItem>
        
          </Link>
          <DropdownDivider/>
          <DropdownItem>Sign out</DropdownItem>

          </Dropdown>
        ) : (
          <Button color="purple" outline>
            <Link to="/sign-in">Sign In</Link>
          </Button>
        )}

        <NavbarToggle />
      </div>

      {/* Links */}
      <NavbarCollapse>
        <NavbarLink active={path === "/"} as="div">
          <Link to="/">Home</Link>
        </NavbarLink>

        <NavbarLink active={path === "/about"} as="div">
          <Link to="/about">About</Link>
        </NavbarLink>

        <NavbarLink active={path === "/projects"} as="div">
          <Link to="/projects">Projects</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
