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
          JSON数据格式调整
        </Text>
        <VStack spacing={4}>
          <HStack>
            <Input placeholder="字段名称" />
            <Input placeholder="数据类型" />
            <IconButton icon={<FaPlus />} aria-label="添加字段" />
            <IconButton icon={<FaTrash />} aria-label="删除字段" />
          </HStack>
          <Button leftIcon={<FaSave />} onClick={handleSave}>
            保存更改
          </Button>
        </VStack>
      </Box>

      {/* Custom Data Pipeline Interface */}
      <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
        <Text fontSize="xl" mb={4}>
          自定义数据管道
        </Text>
        <Flex justify="space-between" align="center">
          <Button leftIcon={<FaPlay />} onClick={() => {}}>
            运行管道
          </Button>
          <Button leftIcon={<FaPause />} onClick={() => {}}>
            暂停管道
          </Button>
          <Button leftIcon={<FaSave />} onClick={handleSave}>
            保存配置
          </Button>
        </Flex>
      </Box>

      {/* Unified API Interface for Data Pipeline */}
      <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
        <Text fontSize="xl" mb={4}>
          统一API接口
        </Text>
        <VStack spacing={4}>
          <Input placeholder="API端点" />
          <Button leftIcon={<FaBook />} onClick={handleTestAPI}>
            测试API
          </Button>
        </VStack>
      </Box>

      {/* Data Pipeline Management Interface */}
      <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
        <Text fontSize="xl" mb={4}>
          数据管道管理
        </Text>
        <VStack spacing={4}>
          <Text>当前管道状态：运行中</Text>
          <Button leftIcon={<FaSave />} onClick={() => {}}>
            导出数据
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
