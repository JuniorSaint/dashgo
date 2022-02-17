import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Input } from '../../components/Form/input';
import Header from '../../components/header';
import SideBar from '../../components/SideBar';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';

interface userProps {
  userName: string;
  userEmail: string;
  password: string;
  passwordConfirm: string;
  userImage: string;
  isActive: boolean;
  userType: string;
}
const userSchema = yup
  .object({
    userName: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .required('Email é obrigatório')
      .email('Formato do email errado'),
    password: yup.string().required('Senha é obrigatório'),
    passwordConfirm: yup
      .string()
      .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
    userImage: yup.string(),
    isActive: yup.bool().required('Situação do usuário deverá ser informada'),
    userType: yup.string().required('Tipo de usuário obrigatorio'),
  })
  .required();

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userProps>({
    resolver: yupResolver(userSchema),
  });
  const router = useRouter();

  const handleCreateUser: SubmitHandler<userProps> = (value, event) => {
    event.preventDefault();
    console.log(value);
    router.push('/users');
  };

  return (
    <Box>
      <Header />
      <Flex width="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <SideBar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          backgroundColor="gray.800"
          padding={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                name="userName"
                type="text"
                labelName="Nome Completo"
                {...register('userName')}
              />{' '}
              <p>{errors.userName?.message}</p>
              <Input
                name="userEmail"
                type="userEmail"
                labelName="E-mail"
                {...register('userEmail')}
              />
              <p>{errors.userEmail?.message}</p>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                name="password"
                type="password"
                labelName="Senha"
                {...register('password')}
              />
              <p>{errors.password?.message}</p>
              <Input
                name="passwordConfirm"
                type="password"
                labelName="Confirmar Senha"
                {...register('passwordConfirm')}
              />
              <p>{errors.passwordConfirm?.message}</p>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                name="userImage"
                type="userImage"
                labelName="Foto do usuário"
                {...register('userImage')}
              />

              <Input
                name="userType"
                type="userType"
                labelName="Tipo de usuário"
                {...register('userType')}
              />
              <p>{errors.userType?.message}</p>
            </SimpleGrid>

            <FormControl as="fieldset">
              <FormLabel as="legend">Situação do Usuário</FormLabel>
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="24px">
                  <Radio
                    {...register('isActive')}
                    colorScheme="pink"
                    value="True"
                  >
                    Ativo
                  </Radio>
                  <Radio
                    {...register('isActive')}
                    colorScheme="pink"
                    value="False"
                  >
                    Inativo
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </VStack>
          <Flex marginTop="24px" gap="16px" justifyContent="flex-end">
            <HStack>
              <Link href={'/users'} passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
