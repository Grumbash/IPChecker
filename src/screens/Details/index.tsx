import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {InfoSection} from '../../components/InfoSection';
import {useGetIPs} from '../../hooks';
import {Spinner} from '@ui-kitten/components';

type DetailsProps = {
  route: {
    params: {
      ip: string;
      image: ImageSourcePropType;
    };
  };
};

export function Details({route}: DetailsProps) {
  const [lastParams, setLastParams] =
    useState<DetailsProps['route']['params']>();
  const {isLoading, data} = useGetIPs(lastParams?.ip);

  useEffect(() => {
    if (route.params?.image) {
      setLastParams(route.params);
    }
  }, [route.params]);

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
