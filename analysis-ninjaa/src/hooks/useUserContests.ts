import { useGetStatusQuery } from '../lib/redux/services/userApi';

export function useUserContests(handle) {

  const { data } = useGetStatusQuery(handle);
  
  // Filter, process contests

  return recentContests;

}