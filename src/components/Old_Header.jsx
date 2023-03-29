import Logo from "../components/assets/images/tenplusLogo.png";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/core";

function Old_Header() {
  return (
    <div>
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <img src={Logo} alt="tenplus logo" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap text-2xl items-center justify-center">
            <a className="mr-5  hover:text-gray-900" href="/">
              Home
            </a>

            <Menu>
              <MenuButton
                as={Button}
                bg="white"
                _hover="transparent"
                fontSize="24px"
                fontWeight="400px"
                _focus={{ outline: 0, boxShadow: "outline" }}
                rightIcon="chevron-down"
              >
                Actions
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
            {/* <a className="mr-5 hover:text-gray-900" href="/">
            Products
          </a> */}
            <a className="mr-5 hover:text-gray-900" href="/">
              About us
            </a>
            <a className="mr-5 hover:text-gray-900" href="/">
              Blog
            </a>
            <a className="mr-5 hover:text-gray-900" href="/">
              FAQ
            </a>
          </nav>
          <button className="  text-2xl mr-3 inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded  mt-4 md:mt-0">
            Sign in
          </button>
          <button className="text-2xl text-white inline-flex items-center bg-[#01313F] border-0 py-5 px-12 focus:outline-none hover:bg-[#127a99] rounded  mt-4 md:mt-0">
            Sign up
          </button>
        </div>
      </header>
    </div>
  )
}

export default Old_Header