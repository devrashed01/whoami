import {
  Container,
  Grid,
  GridItem,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import BlogView from "components/blogs";
import HeroContent from "components/heroContent";
import ProjectsView from "components/projects";
import SkillsView from "components/skills";
import MainTabs from "components/tab";
import type { NextPage } from "next";
import * as React from "react";

const Home: NextPage = () => {
  return (
    <Container maxW="100%" p={0}>
      <Grid templateColumns="1fr 1fr" minH="100vh" gap={3}>
        <GridItem p={3} pl={20}>
          <HeroContent name="Rashed." profession="FrontEnd Engineer." />
        </GridItem>
        <GridItem>
          <div className="max-h-screen overflow-hidden bg-[#F3F6F9] p-5">
            <Tabs>
              <MainTabs />

              <div
                style={{ height: "calc(100vh - 110px)" }}
                className="relative w-full h-ca overflow-hidden"
              >
                <TabPanels
                  sx={{
                    overflowY: "auto",
                    pos: "absolute",
                    h: "100%",
                    w: "calc(100% + 15px)",
                    pr: "15px",
                  }}
                  mt="50px"
                >
                  <TabPanel p={0}>
                    <SkillsView />
                  </TabPanel>
                  <TabPanel p={0}>
                    <ProjectsView />
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
