export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface ResponseProps {
  statusCode?: number;
  message?: string;
  hasError?: boolean;
  payload?: {
    user: User;
    token?: string;
  };
}

export interface ErrorProps {
  message?: string;
  response: {
    data: ResponseProps;
  };
}
