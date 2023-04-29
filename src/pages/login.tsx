import { handleLogin } from '@/services/mutations/loginHandler';
import {
  LoginForm,
  LoginFormValues,
} from '@components/private/auth/LoginForm/LoginForm';
import { useMutation } from '@tanstack/react-query';
import styled, { css } from 'styled-components';
import { ErrorProps } from './api/Interfaces';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { ToastType, toaster } from '@sharedComponents/Toaster/Toaster';
import { NextPageContext } from 'next';

const Login = () => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (userInfo: LoginFormValues) => handleLogin(userInfo),
    onSuccess: response => {
      const token = response.payload?.token;

      if (token != null) {
        console.log(token);
        setCookie('token', token, { path: '/' });
        router.replace('/');
      }
    },
    onError: (error: ErrorProps) =>
      toaster(ToastType.Error, {
        title: error.response.data?.message,
      }),
  });

  return (
    <Container>
      <Form>
        <Title>Log In</Title>
        <LoginForm onLogin={values => mutate(values)} />
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 90%;
  max-width: 584px;
  border-radius: 14px;
  height: 470px;
  max-height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0 36px;
  overflow: hidden;
  transform: translate(-50%, -50%);
  ${({ theme }) => ({
    backgroundColor: theme.background.reverse.secondary,
  })}
`;

const Form = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 48px;
  ${({ theme }) => css`
    color: ${theme.text.main.primary};
    font-weight: ${theme.typography.fontWeight.semiBold};
    font-size: ${theme.typography.fontSize.heading.L};
  `}
`;
