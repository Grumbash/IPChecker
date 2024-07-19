import {useQuery} from '@tanstack/react-query';
import {getIPs} from '../api';

export function useGetIPs(ip: string) {
  const request = useQuery({
    queryKey: ['IPs', ip],
    queryFn: async () => getIPs(ip),
  });

  return request;
}
