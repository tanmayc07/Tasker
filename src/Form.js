import { useState } from "react";
import { Box, Button, Textarea } from "@chakra-ui/react";

const Form = ({ handleCreate }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    let input = e.target.value;
    setValue(input);
  };

  const handleSubmit = (e) => {
    handleCreate(value);
    e.target.value = "";
  };

  return (
    <Box
      display={{ md: "flex" }}
      w={{ base: "80%", md: "40%" }}
      my={10}
      mx="auto"
      p={4}
    >
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Enter the Todo..."
        size="lg"
        shadow="md"
        border="1px"
        borderColor="gray.300"
        borderRadius="15px"
        mr={4}
        my={3}
        p={2}
      />
      <Box m="auto">
        <Button
          color="white"
          bg="#77EAFF"
          size="lg"
          shadow="md"
          _hover={{ bg: "#77EAFF", opacity: 0.6 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
