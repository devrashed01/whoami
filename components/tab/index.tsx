import {
  Code,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tab,
  TabList,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";

type Props = {};

const MainTabs = (props: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "F3" || (e.ctrlKey && e.code === "KeyF")) {
        if (document.activeElement === inputRef.current) {
          console.info("%c YOU ARE IN FOCUSED=>>!", "color: #bada55");
          return true;
        } else if (inputRef?.current) {
          e.preventDefault();
          inputRef.current.focus();
        }
      }
    });
  }, []);
  return (
    <HStack spacing={8}>
      <TabList border={"none"}>
        <StyledTab label="Skills" />
        <StyledTab label="Works" />
        <StyledTab label="Blog" />
      </TabList>
      <InputGroup bgColor={"#fff"}>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          <RiSearch2Line />
        </InputLeftElement>
        <Input ref={inputRef} placeholder="Search" />
        <InputRightElement width={"80px"}>
          <Code p="5px 15px">Ctrl+F</Code>
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
};

export default MainTabs;

interface TabProps {
  label: string;
}

function StyledTab({ label }: TabProps) {
  return (
    <Tab
      boxShadow={"none!important"}
      _selected={{
        bg: "#f9f9f9",
        color: "primary.main",
        borderColor: "primary.main",
      }}
      bg="#fff"
      px={10}
      border="1px solid #ddd"
      _last={{
        borderRadius: "0 8px 8px 0",
        borderRightWidth: 1,
      }}
      _first={{ borderRadius: "8px 0 0 8px" }}
    >
      {label}
    </Tab>
  );
}
