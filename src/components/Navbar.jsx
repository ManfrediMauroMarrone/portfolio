import React from "react";
import Container from "./Container";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <Container>
        <nav className="p-5 flex justify-between text-xl font-semibold">
          <div className="nav-left font">
            <h1>
              <a href="#intro" className="text-secondary text-lg lg:text-3xl">
                Manfredi Marrone
              </a>
            </h1>
          </div>
          <div className="nav-right text-xl hidden lg:block">
            <ul className="flex gap-5 pt-1">
              <li className="hover-line-effect">
                <a href="#about">About me</a>
              </li>
              <li className="hover-line-effect">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover-line-effect">
                <a href="#experience">Experience</a>
              </li>
              <li className="hover-line-effect">
                <a href="#contacts">Contact</a>
              </li>
            </ul>
          </div>

          <Menu as="div" className="relative inline-block text-left lg:hidden">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <FontAwesomeIcon
                  icon="fa-solid fa-bars"
                  className="lg:hidden"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#about"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    About Me
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#skills"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Skills
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#experience"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Experience
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#contacts"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Contacts
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
