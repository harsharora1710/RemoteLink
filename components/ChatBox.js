import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./singleChat";
import { ChatState } from "../context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", display: "flex" }}
      alignItems="center"
      flexDirection="column"
       height="89vh"
      whiteSpace="45vw"
      alignSelf="flex-end"
      // placeSelf="end"
      p={3}
      bg="white"
      width={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;