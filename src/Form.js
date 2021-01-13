import { useState } from "react";
import { HStack, Button, Textarea } from "@chakra-ui/react";

const Form = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    let input = e.target.value;
    setValue(input);
  };

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <HStack w="20%" my={20} mx="auto">
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Enter the Todo..."
        size="sm"
        shadow="md"
        borderRadius="15px"
      />
      <Button
        color="white"
        bg="#77EAFF"
        size="md"
        shadow="md"
        _hover={{ bg: "#77EAFF", opacity: 0.6 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </HStack>
  );
};

export default Form;
