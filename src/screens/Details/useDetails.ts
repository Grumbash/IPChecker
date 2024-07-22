import {useEffect, useState} from 'react';
import {useGetIPs} from '../../hooks';
import {ImageSourcePropType} from 'react-native';

type UseDetailsProps = {
  ip?: string;
  image?: ImageSourcePropType;
};

export function useDetails(props: UseDetailsProps) {
  const [lastParams, setLastParams] = useState<UseDetailsProps>();
  const {isLoading, data} = useGetIPs(lastParams?.ip);

  useEffect(() => {
    if (props.image) {
      setLastParams({ip: props?.ip, image: props?.image});
    }
  }, [props?.image, props?.ip]);

  return {
    lastParams,
    isLoading,
    data,
  };
}
