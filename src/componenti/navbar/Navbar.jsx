import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link,
  HStack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./navbar.scss";
import CustomDivider from "../divider/CustomDivider";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        width={{ base: "full", sm: "full" }}
        p={4}
        bg={"#FFFFFF"}
        boxShadow={"-3px 2px 10px rgba(0, 0, 0, 0.2)"}
        position={"sticky"}
        zIndex={999}
      >
        <Box>
          <Link
            as={RouterLink}
            to="/"
            color={"green"}
            className="logoBrand"
            textDecoration={"none"}
            _hover={{ textDecoration: "none" }}
          >
            VegetarianGo
          </Link>
        </Box>

        <Flex
          display={{ base: "none", md: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link
            as={RouterLink}
            to="/"
            className="navbar--link"
            color={"green.500"}
            _hover={{color:"green.400"}}
            mx={2}
            cursor={"pointer"}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="recipes"
            className="navbar--link"
            mx={2}
            cursor={"pointer"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" }}
          >
            Recipes
          </Link>
          <Link
            as={RouterLink}
            to="/contact"
            className="navbar--link"
            mx={2}
            cursor={"pointer"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" }}
          >
            Contact
          </Link>
        </Flex>

        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          colorScheme="green"
        />
      </Flex>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" color={"blackAlpha.800"}>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack align="flex-start" spacing={4}>
              <Link
                href="#"
                onClick={onClose}
                color={"gray.500"}
                fontFamily={"Raleway"}
                transition={"color 0.2s ease-in"}
                _hover={{
                  color: "green.400",
                  transition: "color 0.2s ease-out",
                  fontWeight: "bold",
                }}
              >
                About
              </Link>
              <Link
                href="#"
                fontFamily={"Raleway"}
                onClick={onClose}
                color={"gray.500"}
                transition={"color 0.2s ease-in"}
                _hover={{
                  color: "green.400",
                  transition: "color 0.2s ease-out",
                  fontWeight: "bold",
                }}
              >
                Info
              </Link>
              <Link
                href="#"
                fontFamily={"Raleway"}
                onClick={onClose}
                color={"gray.500"}
                transition={"color 0.2s ease-in"}
                _hover={{
                  color: "green.400",
                  transition: "color 0.2s ease-out",
                  fontWeight: "bold",
                }}
              >
                Contact
              </Link>

              <CustomDivider
                title={"Social links"}
                width={"90%"}
                mx={"auto"}
                size={12}
              />

              <HStack spacing={4}>
                <Link href="#" isExternal>
                  <Icon
                    as={FaFacebook}
                    boxSize={4}
                    color="gray.200"
                    transition={"color 0.2s ease-in-out"}
                    _hover={{
                      color: "green.400",
                      transition: "color 0.2s ease-in-out",
                    }}
                  />
                </Link>
                <Link href="#" isExternal>
                  <Icon
                    as={FaInstagram}
                    boxSize={4}
                    color="gray.200"
                    transition={"color 0.2s ease-in-out"}
                    _hover={{
                      color: "green.400",
                      transition: "color 0.2s ease-in-out",
                    }}
                  />
                </Link>
                <Link href="#" isExternal>
                  <Icon
                    as={FaTwitter}
                    boxSize={4}
                    color="gray.200"
                    transition={"color 0.2s ease-in-out"}
                    _hover={{
                      color: "green.400",
                      transition: "color 0.2s ease-in-out",
                    }}
                  />
                </Link>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
