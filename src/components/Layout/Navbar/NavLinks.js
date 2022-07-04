import React from 'react';
import Link from 'gatsby-link';
import { Link as SLink } from 'react-scroll';

const NavItemsSmoothLinks = ({ NavItem }) => (
  <>
    <NavItem>
      <SLink smooth offset={-70} hashSpy to="home">
        home
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="about">
        sobre mim
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="projects">
        projetos
      </SLink>
    </NavItem>
  </>
);

const NavItemsGatsbyLinks = ({ NavItem }) => (
  <>
    <NavItem>
      <Link to="/">home</Link>
    </NavItem>
    <NavItem>
      <Link to="/#about">sobre mim</Link>
    </NavItem>
    <NavItem>
      <Link to="/#projects">projetos</Link>
    </NavItem>
  </>
);

const NavLinks = React.memo(({ NavItem }) => {
  let path = null;
  if (typeof window !== 'undefined') {
    path = window.location.pathname;
  }

  return (
    <>
      {path === '/' ? (
        <NavItemsSmoothLinks NavItem={NavItem} />
      ) : (
        <NavItemsGatsbyLinks NavItem={NavItem} />
      )}
    </>
  );
});

export default NavLinks;
