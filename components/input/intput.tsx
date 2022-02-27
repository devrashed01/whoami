import {
  Code,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

type Props = {};

const InputDefault = (props: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [placeholder, setPlaceholder] = useState<string>("");

  useEffect(() => {
    const YOUR_WORD = "Search Here....";
    const LENGTH = YOUR_WORD.length;
    const CURSOR_SIGN = "|";
    const LOOPING_DELAY = 100; // in mili seconds
    const REST_TIME = 10; // in square times of loping delay

    let count = 0;

    const typer = setInterval(() => {
      count += 1;
      if (count > LENGTH + REST_TIME) {
        count = -1;
        setPlaceholder("");
      }
      if (count <= LENGTH && count >= 0) {
        if (count <= LENGTH - 1) {
          setPlaceholder(YOUR_WORD.slice(0, count + 1) + CURSOR_SIGN);
        } else {
          setPlaceholder(YOUR_WORD.slice(0, count + 1));
        }
      }
    }, LOOPING_DELAY);
    return () => clearInterval(typer);
  }, []);

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
    <InputGroup bgColor={"#fff"}>
      <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
        <RiSearch2Line />
      </InputLeftElement>
      <Input ref={inputRef} placeholder={placeholder} />
      <InputRightElement width={"80px"}>
        <Code p="5px 15px">Ctrl+F</Code>
      </InputRightElement>
    </InputGroup>
  );
};

const InputStyles = {
  default: InputDefault,
};

export default InputStyles;
