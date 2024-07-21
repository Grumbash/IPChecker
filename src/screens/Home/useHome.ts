import {useState} from 'react';
import {useGetIPs} from '../../hooks';

export function useHome() {
  const [ip, setIp] = useState('');
  const {isLoading, data} = useGetIPs(ip);

  const onSubmit = ({ipAddress}: {ipAddress: string}) => {
    setIp(ipAddress);
  };

  return {
    isLoading,
    data,
    onSubmit,
  };
}
