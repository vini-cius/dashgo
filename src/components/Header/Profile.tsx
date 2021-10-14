import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex aligh="center">
      <Box mr="4" textAlign="right">
        <Text>Vinicius Santos</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          vinicius.santos@aztronic.com.br
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Vinicius Santos"
        src="https://avatars.githubusercontent.com/u/43323955?v=4"
      />
    </Flex>
  )
}
