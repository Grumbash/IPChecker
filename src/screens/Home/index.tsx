import {StyleSheet} from 'react-native';
import React from 'react';
import {Info, IPForm, LocationCarousel} from '../../components';
import {useHome} from './useHome';
import {Layout, Spinner} from '@ui-kitten/components';

export function Home() {
  const {data, onSubmit, isLoading} = useHome();

  return (
    <Layout style={styles.container}>
      <IPForm onSubmit={onSubmit} />
      {isLoading ? (
        <Spinner />
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
      <LocationCarousel />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
