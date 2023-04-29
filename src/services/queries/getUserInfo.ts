import { ResponseProps } from '@/pages/api/Interfaces';
import axios from 'axios';

export const getUserInfo = (): Promise<ResponseProps> =>
  axios.get('/api/login').then(res => res.data);
