import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/endpoints/user';

export const useMovie = () => {
    return useQuery({
        queryKey: ['movies'],
        queryFn: getUser,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
