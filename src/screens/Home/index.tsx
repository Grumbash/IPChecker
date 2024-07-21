import {StyleSheet} from 'react-native';
import React from 'react';
import {IPForm, LocationCarousel} from '../../components';
import {useHome} from './useHome';
import {Layout, Spinner} from '@ui-kitten/components';
import {InfoSection} from '../../components/InfoSection';

export function Home() {
  const {data, onSubmit, isLoading} = useHome();

  return (
    <Layout style={styles.container}>
      <IPForm onSubmit={onSubmit} />
      {isLoading ? (
        <Spinner />
      ) : (
        <InfoSection
          ip={data.ip}
          timezoneUtc={data.timezone.utc}
          ISP={data.connection.isp}
          region={data.region}
          countryCode={data.country_code}
        />
      )}
      <LocationCarousel />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
