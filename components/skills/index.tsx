import { Box, Heading, Progress, SimpleGrid, Skeleton } from "@chakra-ui/react";
import ErrorView from "components/error";
import { ISkill, useSkill } from "queries";
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
  const { data, isLoading, isError, error } = useSkill();

  if (isError) {
    console.log(error, "error");
    return <ErrorView />;
  }
  if (isLoading) {
    return (
      <SimpleGrid columns={2} spacing={5}>
        {[...Array(2)].map((_, i) => (
          <Box
            key={i}
            bg="linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)"
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Heading color="#fff" fontSize="2xl" mb={4}>
              <Skeleton width={150} height="20px" />
            </Heading>

            <Heading color="#fff" fontSize="md" fontWeight={500}>
              <Skeleton height="20px" />
            </Heading>

            <div className="mt-8 flex items-center gap-4">
              <Skeleton width={12} height={12} />
              <div>
                <h5 className="text-blue-300 text-md mb-1">
                  <Skeleton width={"80px"} height="20px" />
                </h5>
                <p className="font-medium text-md text-white">
                  <Skeleton width={"150px"} height="20px" />
                </p>
              </div>
              <p className="ml-auto text-white self-end p-1 px-2  rounded-sm text-xs">
                <Skeleton width={150} height="20px" />
              </p>
            </div>
            <div className="flex items-center mt-3">
              <Skeleton height="10px" />
              <span className="text-blue-400 text-md font-medium">
                <Skeleton width={50} height="20px" />
              </span>
            </div>
          </Box>
        ))}
      </SimpleGrid>
    );
  }
  return (
    <SimpleGrid columns={2} spacing={5}>
      {data &&
        data?.length > 0 &&
        data?.map((skill) => <Skill key={skill.id} skill={skill} />)}
    </SimpleGrid>
  );
};

export default SkillsView;

function Skill({ skill }: { skill: ISkill }) {
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
        {skill.name}
      </Heading>

      <Heading color="#fff" fontSize="md" fontWeight={500}>
        {skill.description}
      </Heading>

      <div className="mt-8 flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-white text-primary text-xl font-semibold grid place-items-center uppercase">
          {skill.creator}
        </div>
        <div>
          <h5 className="text-blue-300 text-md mb-1">Created By</h5>
          <p className="font-medium text-md text-white">{skill.creator}</p>
        </div>
        <p className="ml-auto text-white self-end border border-blue-400 p-1 px-2  rounded-sm text-xs">
          <AiOutlineClockCircle className="inline-block" /> {skill.ReleasDate}
        </p>
      </div>
      <div className="flex items-center mt-3">
        <Progress
          borderRadius={5}
          bgColor={"#1175da"}
          sx={{ ">div": { bgColor: "#fff" } }}
          height={1}
          value={skill.progress_rate}
          className="flex-1 mr-5"
        />
        <span className="text-blue-400 text-md font-medium">
          {skill.progress_rate}%
        </span>
      </div>
    </Box>
  );
}
