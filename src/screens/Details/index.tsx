import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React from 'react';
import {Spinner} from '@ui-kitten/components';

import {InfoSection} from '../../components';
import {useDetails} from './useDetails';

type DetailsProps = {
  route: {
    params: {
      ip: string;
      image: ImageSourcePropType;
    };
  };
};

export function Details({route}: DetailsProps) {
  const {lastParams, isLoading, data} = useDetails({
    ip: route?.params?.ip,
    image: route?.params?.image,
  });

  return (
    <View style={styles.container}>
      {lastParams?.image && (
        <Image style={styles.image} source={lastParams.image} />
      )}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  image: {flex: 1, width: '100%', objectFit: 'contain'},
});
