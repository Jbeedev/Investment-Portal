import { useState } from "react";
import Logo from "../components/assets/images/tenplusLogo.png";
import { Twirl as Hamburger } from "hamburger-react";

import { Menu, MenuButton, MenuList, MenuItem, Button, Box } from "@chakra-ui/core";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [navMenu, setNavMenu] = useState(false);


  return (
    <div>
      <nav class=" container mx-auto flex bg-white items-center justify-between flex-wrap p-5    ">
        <div class="flex items-center flex-shrink-0 mr-6">
          <img class="" src={Logo} alt="Logo" />
        </div>

        {/* hamburger menu for mobile screen */}

        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-40 hover:border-white">
            {/* <svg
              class="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg> */}
             <Hamburger
              color="black"
              size="40"
              rounded
              toggled={isOpen}
              toggle={setIsOpen}
              
            />
          </button>
        </div>

        <div class={`w-full bg-white text-2xl flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? " " : "hidden"
          }`}>
          <div class="lg:flex-grow    md:ml-auto md:mr-auto lg:flex lg:flex-wrap text-2xl items-center justify-center">
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Home
            </a>
            <Menu>
              <MenuButton
              as={Button}
                border="none"
                bg="white"
                _hover="transparent"
                fontSize="24px"
                fontWeight="400px"
                _focus={{ outline: 0 }}
                rightIcon="chevron-down"
                paddingLeft="0"
              >
                Products
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem as="a" href="#">
                  Attend a Workshop
                </MenuItem>
              </MenuList>
            </Menu>
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              About Us
            </a>
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Blog
            </a>
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              FAQ
            </a>
          </div>
          <div className="text-2xl">
            <a
              href="/"
              class="inline-block  pr-4 py-2 leading-none rounded  mt-4 lg:mt-0 mr-3"
            >
              Sign In
            </a>
            <a
              href="/"
              class="inline-block leading-none  rounded text-white bg-[#01313F]  border-0 py-5 px-12 mt-4 lg:mt-0"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      
    </div>
  );
};

export default Header;
