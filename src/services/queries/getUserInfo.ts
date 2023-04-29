import { ResponseProps } from '@/pages/api/Interfaces';
import axios from 'axios';

export const getUserInfo = (userId: string): Promise<ResponseProps> =>
  axios.get(`/api/user/${userId}`).then(res => res.data);
