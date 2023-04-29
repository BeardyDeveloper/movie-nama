import { LoginFormValues } from '@components/private/auth/LoginForm/LoginForm';
import { queryAxiosInstance } from '@lib/axiosInstance';
import { ResponseProps } from '@/pages/api/Interfaces';
import axios from 'axios';

export const handleLogin = (
  userInfo: LoginFormValues,
): Promise<ResponseProps> =>
  axios.post('/api/login', { ...userInfo }).then(res => res.data);
