import { HStack, Tab, TabList } from "@chakra-ui/react";
import { InputStyles } from "components/input";
import React from "react";

type Props = {};

const MainTabs = (props: Props) => {
  return (
    <HStack spacing={8}>
      <TabList border={"none"}>
        <StyledTab label="Skills" />
        <StyledTab label="Works" />
        <StyledTab label="Blog" />
      </TabList>
      <InputStyles.default />
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
