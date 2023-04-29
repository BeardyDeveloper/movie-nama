import { FormInput } from '@sharedComponents/FormInput/FormInput';
import { Button, ButtonVariant } from '@sharedComponents/Button/Button';
import type { FC } from 'react';
import { useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onLogin: (values: LoginFormValues) => void;
}

export const LoginForm: FC<LoginFormProps> = props => {
  const { onLogin } = props;

  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm<LoginFormValues>();
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    getValues,
  } = methods;

  const onSubmit = (values: LoginFormValues) => {
    if (Object.keys(errors).length === 0) {
      onLogin(values);
    }
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <form ref={formRef}>
          <Field>
            <FormInput
              value={watch('email')}
              name="email"
              label="Email"
              validationText={errors?.email?.message}
              required="this is required"
              onClear={() => setValue('email', '')}
            />
          </Field>
          <Field>
            <FormInput
              value={watch('password')}
              name="password"
              label="password"
              validationText={errors?.password?.message}
              required="this is required"
              onClear={() => setValue('password', '')}
            />
          </Field>
          <StyledButton
            variant={ButtonVariant.Primary}
            fullWidth
            onClick={handleSubmit(onSubmit)}
          >
            Log In
          </StyledButton>
        </form>
      </FormProvider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > form {
    width: 100%;
  }
`;

const Field = styled.div`
  width: 100%;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 48px;
`;
