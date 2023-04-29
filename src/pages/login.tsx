import { LoginForm } from '@components/private/auth/LoginForm/LoginForm';
import styled, { css } from 'styled-components';

const Login = () => {
  return (
    <Container>
      <Form>
        <Title>Log In</Title>
        <LoginForm onLogin={values => console.log(values)} />
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
