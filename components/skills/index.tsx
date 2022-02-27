import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

type Props = {};

const SkillsView = (props: Props) => {
  return (
    <SimpleGrid columns={2} spacing={5}>
      <Skill
        date={new Date("04,28,1996")}
        creator="Brenden Aich"
        title="Javascript"
        desc="Check the docs for getting every component API"
      />
      <Skill
        creator="Brenden Aich"
        title="HTML"
        desc="Check the docs for getting every component API"
      />
      <Skill
        creator="Brenden Aich"
        title="CSS"
        desc="Check the docs for getting every component API"
      />
      <Skill
        creator="Brenden Aich"
        title="Typescript"
        desc="Check the docs for getting every component API"
      />
    </SimpleGrid>
  );
};

export default SkillsView;
type SkillProps = {
  title: string;
  desc: string;
  creator: string;
  date?: Date;
};

function Skill({ title, desc, creator, date }: SkillProps) {
  return (
    <Box
      bg="linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)"
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Heading color="#fff" fontSize="2xl" mb={4}>
        {title}
      </Heading>

      <Heading color="#fff" fontSize="md" fontWeight={500}>
        {desc}
      </Heading>

      <div className="mt-8 flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-white text-primary text-xl font-semibold grid place-items-center uppercase">
          BA
        </div>
        <div>
          <h5 className="text-blue-300 text-md mb-1">Created By</h5>
          <p className="font-medium text-md text-white">{creator}</p>
        </div>
        {date && (
          <p className="ml-auto text-white self-end border border-blue-400 p-1 px-2  rounded-sm text-xs">
            <AiOutlineClockCircle className="inline-block" />{" "}
            {moment(date).fromNow()}
          </p>
        )}
      </div>
    </Box>
  );
}
