import React from "react";
import { css } from "@emotion/css";

import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, useDisclosure } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import Feeds from "../resources/rss_feeds.json";

const Menu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton 
        onClick={onOpen}
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        className={css`margin: 1rem;`} />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>RSS feeds</DrawerHeader>
          <div className="custom-drawer-body">
            {Feeds.map(({ name }) => (
              <NavLink
                key={name}
                className={css`
                  display: block;
                  width: 100%;
                  padding: 1rem 0;
                  text-align: center;
                `}
                activeClassName={css`
                  background-color: lightgray;
                `}
                onClick={onClose} 
                to={`/feed/${encodeURIComponent(name)}`}>
                {name}
              </NavLink>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;