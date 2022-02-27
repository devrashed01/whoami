import { Box, Heading, Progress, SimpleGrid } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

type Props = {};

const skill = {
  date: new Date("04,28,1996"),
  creator: "Brenden Aich",
  title: "Javascript",
  desc: "Check the docs for getting every component API",
  progress: 80,
};

const SkillsView = (props: Props) => {
  return (
    <SimpleGrid columns={2} spacing={5}>
      <Skill skill={skill} />
    </SimpleGrid>
  );
};

export default SkillsView;
type SkillProps = {
  skill: {
    title: string;
    desc: string;
    creator: string;
    date?: Date;
    progress?: number;
  };
};

function Skill({ skill }: SkillProps) {
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
        {skill.title}
      </Heading>

      <Heading color="#fff" fontSize="md" fontWeight={500}>
        {skill.desc}
      </Heading>

      <div className="mt-8 flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-white text-primary text-xl font-semibold grid place-items-center uppercase">
          BA
        </div>
        <div>
          <h5 className="text-blue-300 text-md mb-1">Created By</h5>
          <p className="font-medium text-md text-white">{skill.creator}</p>
        </div>
        {skill.date && (
          <p className="ml-auto text-white self-end border border-blue-400 p-1 px-2  rounded-sm text-xs">
            <AiOutlineClockCircle className="inline-block" />{" "}
            {moment(skill.date).fromNow()}
          </p>
        )}
      </div>
      <div className="flex items-center mt-3">
        <Progress
          borderRadius={5}
          bgColor={"#1175da"}
          sx={{ ">div": { bgColor: "#fff" } }}
          height={1}
          value={skill.progress}
          className="flex-1 mr-5"
        />
        <span className="text-blue-400 text-md font-medium">
          {skill.progress}%
        </span>
      </div>
    </Box>
  );
}
