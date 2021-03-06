import { Button, Flex, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Input } from '../components/Form/input';

interface SignInProps {
  userEmail: string;
  password: string;
}

const signInSchema = yup
  .object({
    userEmail: yup
      .string()
      .required('Email é obrigatório')
      .email('Formato do email errado'),

    password: yup.string().required('Senha é obrigatório'),
  })
  .required();

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInProps> = data => console.log(data);

  const handleSignIn: SubmitHandler<SignInProps> = (value, event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="8px">
          <Input
            name="email"
            type="email"
            labelName="Email"
            {...register('userEmail')}
          />
          <p>{errors.userEmail?.message}</p>
          <Input
            name="password"
            type="password"
            labelName="Senha"
            {...register('password')}
          />
          <p>{errors.password?.message}</p>
        </Stack>
        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
          Entrar{' '}
        </Button>
      </Flex>
    </Flex>
  );
}
