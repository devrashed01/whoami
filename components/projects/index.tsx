import {
  Badge,
  Box,
  Button,
  Heading,
  SimpleGrid,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import ErrorView from "components/error";
import moment from "moment";
import { IProject, useProject } from "queries";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  query: string;
};

const project = {
  date: new Date("04,28,1996"),
  title: "Javascript",
  desc: "Check the docs for getting every component API",
};

const ProjectsView = ({ query }: Props) => {
  const { data, isLoading, isError } = useProject(query);

  if (isError) {
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
                <div className="font-medium text-md text-white">
                  <Skeleton width={"150px"} height="20px" />
                </div>
              </div>
              <div className="ml-auto text-white self-end p-1 px-2  rounded-sm text-xs">
                <Skeleton width={150} height="20px" />
              </div>
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
        data?.map((project) => <Project key={project._id} project={project} />)}
    </SimpleGrid>
  );
};

export default ProjectsView;

function Project({ project }: { project: IProject }) {
  return (
    <Box
      bg="linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)"
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      {project?.release_date && (
        <p className="ml-auto text-white self-end border border-blue-400 p-1 px-2 rounded-md text-xs inline-block mb-5">
          <AiOutlineClockCircle className="inline-block" />{" "}
          {moment(project?.release_date).fromNow()}
        </p>
      )}
      <Heading color="#fff" fontSize="2xl" mb={4}>
        {project?.name}
      </Heading>

      <Heading color="#fff" fontSize="md" fontWeight={500}>
        {project?.description}
      </Heading>

      {project?.tags.length > 0 && (
        <Stack mt={10} mb={5} direction="row" spacing={4}>
          {project?.tags.map((tag) => (
            <Badge key={tag} colorScheme="green">
              {tag}
            </Badge>
          ))}
        </Stack>
      )}

      {project?.demo_url && (
        <a target={"_blank"} href={project?.demo_url} rel="noreferrer">
          <Button
            rightIcon={<BsArrowRight />}
            colorScheme="twitter"
            variant="solid"
          >
            View Demo
          </Button>
        </a>
      )}
    </Box>
  );
}
