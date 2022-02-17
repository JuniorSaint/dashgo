import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}
export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="center" textAlign="right">
          <Text>José Atanázio</Text>
          <Text color="gray.300" fontSize="small">
            junior.saint@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        marginLeft="8px"
        size="md"
        name="José Atanazio"
        src="/images/rosto.jpg"
      />
    </Flex>
  );
}
