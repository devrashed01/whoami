import {
  Alert,
  AlertDescription,
  AlertTitle,
  Progress,
} from "@chakra-ui/react";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";

type Props = {};

const BlogView = (props: Props) => {
  return (
    <div>
      <Alert status="info">
        <BsInfoCircle className="mr-3" />
        <AlertTitle mr={2}>Coming soon!</AlertTitle>
        <AlertDescription>
          Working on it , please wait for the update.
        </AlertDescription>
      </Alert>
      <Progress size="xs" isIndeterminate />
    </div>
  );
};

export default BlogView;
