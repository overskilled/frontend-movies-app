import api from '../axios';

export type User = {
    id: number;
    name: string;
    email: string;
};

export const getUser = async (): Promise<User> => {
    const response = await api.get<User>('/user/me');
    return response.data;
};
