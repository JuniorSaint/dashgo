import {
  Button,
  Flex,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { ModalDelete } from '../../components/ModalDelete';

import { axiosApi } from '../../services/api';
import { UserListProps } from './interfaceUsers';

export default function ListUsers() {
  const router = useRouter();

  const [users, setUsers] = useState<UserListProps[]>([]);

  const fetchData = async () => {
    const retriveData = await axiosApi.get('users');

    return retriveData.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await fetchData();
      if (allUsers) setUsers(allUsers);
    };
    getAllUsers();
  }, []);

  return (
    <Flex>
      <Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome / Email</Th>
              <Th>Tipo de usuário</Th>
              <Th>Estado do usuário</Th>
              <Th>Data da Criação</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map(data => {
              return (
                <Tr key={data.id}>
                  <Td>
                    {data.userName} <br /> <span>{data.userEmail}</span>
                  </Td>
                  <Td>{data.userType}</Td>
                  <Td>{data.isActive === true ? 'Ativo' : 'Inativo'}</Td>
                  <Td>
                    {' '}
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(data.createdAt),
                    )}
                  </Td>
                  <Td>
                    <HStack spacing="10px">
                      <Button
                        backgroundColor="gray.900"
                        _hover={{ bg: 'gray.800' }}
                      >
                        {' '}
                        <Icon
                          as={AiOutlineEdit}
                          fontSize="25px"
                          color="blue.500"
                        />
                      </Button>
                      <Button
                        onClick={() => (
                          <ModalDelete
                            nameDelete={data.userName}
                            typeDelete="o usuário"
                            url="users"
                            id={data.id}
                          />
                        )}
                        backgroundColor="gray.900"
                        _hover={{ bg: 'gray.800' }}
                        _active={{
                          borderColor: 'gray.900',
                        }}
                      >
                        {' '}
                        <Icon as={BsTrash} fontSize="25px" color="red.500" />
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
              );
            })}
            <Tr></Tr>
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}
