import { useGetUserQuery } from '../lib/redux/features/userSlice';
import { userApi } from '@/lib/redux/services/userApi';


export function useUser(handle: string) {

  const { data, isLoading } = userApi.useGetUserQuery(handle);

  return {
    user: data,
    isLoading
  };

}