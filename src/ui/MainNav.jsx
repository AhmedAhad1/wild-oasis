import styled from "styled-components";
import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Link = styled.a`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const MainNav = () => {
  return (
    <div className="flex flex-col  items-center">
      <Logo />

      <ul className="mt-6! space-y-3!">
        <li className="">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? " bg-gray-300 " : "text-black "
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/bookings"}
            className={({ isActive }) =>
              isActive ? " bg-gray-300" : "text-black"
            }
          >
            Bookings
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/cabins"}
            className={({ isActive }) =>
              isActive ? " bg-gray-300" : "text-black"
            }
          >
            Cabins
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              isActive ? " bg-gray-300" : "text-black"
            }
          >
            Users
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/settings"}
            className={({ isActive }) =>
              isActive ? " bg-gray-300" : "text-black"
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
