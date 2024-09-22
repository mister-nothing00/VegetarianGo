import { AbsoluteCenter, Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function CustomDivider({width, title, Icon, mx, size, border }) {
  return (
    <>
      <Box w={width} position="relative" py={10} mt={20} mx={mx}>
        <Divider borderColor={border}/>
        <AbsoluteCenter bg="white" px="4">
          <Flex alignItems="center" justifyContent="center">
            <Text
              fontFamily="Pacifico"
              letterSpacing={2}
              fontSize={size}
              mr={2}
              color={"#222"}
            >
             {title} 
            </Text>
            {Icon && <Icon fontSize={16} color="#48BB78" />}
          </Flex>
        </AbsoluteCenter>
      </Box>
    </>
  );
}
