import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Info, IPForm, Loader} from '../../components';
import {useGetIPs} from '../../hooks';

export function Home() {
  const [ip, setIp] = useState('');
  const {isLoading, data} = useGetIPs(ip);

  const onSubmit = ({ipAddress}: {ipAddress: string}) => {
    setIp(ipAddress);
  };

  return (
    <View style={styles.container}>
      <IPForm onSubmit={onSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Info title="IP Address" value={data.ip} />
          <Info
            title="Location"
            value={`${data.region}, ${data.country_code}`}
          />
          <Info title="Timezone" value={`UTC ${data.timezone.utc}`} />
          <Info title="ISP" value={data.connection.isp} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
