import { useGetFriendsQuery } from '../lib/redux/services/userApi';

export function useUserFriends(handle: string) {

  const { data } = useGetFriendsQuery(handle);
  
  const friends = data ?? [];

  return friends;
}

