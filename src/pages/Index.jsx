import { Box, Button, Flex, Input, Text, VStack, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaSave, FaPlay, FaPause, FaBook } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSave = () => {
    toast({
      title: "Changes saved.",
      description: "Your changes have been successfully saved.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleTestAPI = () => {
    toast({
      title: "API Test",
      description: "API test executed successfully. Data received: {...}",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={10} p={5}>
      {/* JSON Data Format Adjustment Interface */}
      <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
        <Text fontSize="xl" mb={4}>
          JSON Data Format Adjustment
        </Text>
        <VStack spacing={4}>
          <HStack>
            <Input placeholder="Field Name" />
            <Input placeholder="Data Type" />
            <IconButton icon={<FaPlus />} aria-label="Add Field" />
            <IconButton icon={<FaTrash />} aria-label="Remove Field" />
          </HStack>
          <Button leftIcon={<FaSave />} onClick={handleSave}>
            Save Changes
          </Button>
        </VStack>
      </Box>

      {/* Custom Data Pipeline Interface */}
      <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
        <Text fontSize="xl" mb={4}>
          Custom Data Pipeline
        </Text>
        <Flex justify="space-between" align="center">
          <Button leftIcon={<FaPlay />} onClick={() => {}}>
            Run Pipeline
          </Button>
          <Button leftIcon={<FaPause />} onClick={() => {}}>
            Pause Pipeline
          </Button>
          <Button leftIcon={<FaSave />} onClick={handleSave}>
            Save Configuration
          </Button>
        </Flex>
      </Box>

      {/* Unified API Interface for Data Pipeline */}
      <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
        <Text fontSize="xl" mb={4}>
          Unified API Interface
        </Text>
        <VStack spacing={4}>
          <Input placeholder="API Endpoint" />
          <Button leftIcon={<FaBook />} onClick={handleTestAPI}>
            Test API
          </Button>
        </VStack>
      </Box>

      {/* Data Pipeline Management Interface */}
      <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
        <Text fontSize="xl" mb={4}>
          Data Pipeline Management
        </Text>
        <VStack spacing={4}>
          <Text>Current pipeline status: Running</Text>
          <Button leftIcon={<FaSave />} onClick={() => {}}>
            Export Data
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
