import {
  Badge,
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const project = {
  date: new Date("04,28,1996"),
  title: "Javascript",
  desc: "Check the docs for getting every component API",
};

const ProjectsView = (props: Props) => {
  return (
    <SimpleGrid columns={2} spacing={5}>
      <Project project={project} />
    </SimpleGrid>
  );
};

export default ProjectsView;
type ProjectProps = {
  project: {
    title: string;
    desc: string;
    date?: Date;
  };
};

function Project({ project }: ProjectProps) {
  return (
    <Box
      bg="linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)"
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      {project.date && (
        <p className="ml-auto text-white self-end border border-blue-400 p-1 px-2 rounded-md text-xs inline-block mb-5">
          <AiOutlineClockCircle className="inline-block" />{" "}
          {moment(project.date).fromNow()}
        </p>
      )}
      <Heading color="#fff" fontSize="2xl" mb={4}>
        {project.title}
      </Heading>

      <Heading color="#fff" fontSize="md" fontWeight={500}>
        {project.desc}
      </Heading>

      <Stack mt={10} mb={5} direction="row" spacing={4}>
        <Badge colorScheme="green">Typescript</Badge>
        <Badge colorScheme="red">Typescript</Badge>
        <Badge colorScheme="blue">Typescript</Badge>
      </Stack>
      <Button
        rightIcon={<BsArrowRight />}
        colorScheme="twitter"
        variant="solid"
      >
        View Demo
      </Button>
    </Box>
  );
}
