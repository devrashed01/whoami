import {
  Container,
  Grid,
  GridItem,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import BlogView from "components/blogs";
import HeroContent from "components/heroContent";
import { InputStyles } from "components/input";
import ProjectsView from "components/projects";
import SkillsView from "components/skills";
import _ from "lodash";
import type { NextPage } from "next";
import * as React from "react";

const Home: NextPage = () => {
  const [search, setSearch] = React.useState<string>("");
  const [query, setSquery] = React.useState<string>("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const doSearch = React.useCallback(
    _.debounce((value) => {
      if (value) {
        setSquery(`?search=${value}`);
      } else {
        setSquery("");
      }
    }, 1000),
    []
  );

  const searchHandler = ({ target: { value } }: IChangeHandlerProps) => {
    setSearch(value);
    doSearch(value);
  };

  return (
    <Container maxW="100%" p={0}>
      <Grid templateColumns="1fr 1fr" minH="100vh" gap={3}>
        <GridItem p={3} pl={20}>
          <HeroContent name="Rashed." profession="FrontEnd Engineer." />
        </GridItem>
        <GridItem>
          <div className="h-screen overflow-hidden bg-[#F3F6F9] p-5">
            <Tabs
              onChange={() =>
                searchHandler({ target: { value: "", name: "" } })
              }
            >
              <HStack spacing={8}>
                <TabList border={"none"}>
                  <StyledTab label="Skills" />
                  <StyledTab label="Works" />
                  <StyledTab label="Blog" />
                </TabList>
                <InputStyles.default onChange={searchHandler} value={search} />
              </HStack>

              <div
                style={{ height: "calc(100vh - 109px)", marginTop: "50px" }}
                className="relative w-full h-ca overflow-hidden"
              >
                <TabPanels
                  sx={{
                    overflowY: "auto",
                    pos: "absolute",
                    h: "100%",
                    w: "calc(100% + 15px)",
                    pr: "15px",
                    pb: "10px",
                  }}
                >
                  <TabPanel p={0}>
                    <SkillsView />
                  </TabPanel>
                  <TabPanel p={0}>
                    <ProjectsView query={query} />
                  </TabPanel>
                  <TabPanel p={0}>
                    <BlogView />
                  </TabPanel>
                </TabPanels>
              </div>
            </Tabs>
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;

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
