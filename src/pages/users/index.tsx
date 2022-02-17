import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Checkbox,
  Td,
  Text,
  useBreakpointValue,
  LinkBox,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Header from '../../components/header';
import { Pagination } from '../../components/Pagination';

import SideBar from '../../components/SideBar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding="8">
          <Flex
            marginBottom="8"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href={'users/create'} passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>
          <Table>
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="32px">
                  <Checkbox colorScheme="pink" />{' '}
                </Th>
                <Th px="6" color="gray.300" width="32px">
                  Usuário
                </Th>
                {isWideVersion && (
                  <Th px="6" color="gray.300" width="32px">
                    Data de Cadastro
                  </Th>
                )}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">José Atanazio</Text>
                    <Text fontSize="sm">junior@junior.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2022</Td>}
                <Td>
                  <Link href="/users" passHref>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  </Link>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
