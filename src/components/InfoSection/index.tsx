import React from 'react';
import {Layout} from '@ui-kitten/components';
import {Info} from '../Info';
import {StyleSheet} from 'react-native';

type InfoSectionProps = {
  ip: string;
  region: string;
  countryCode: string;
  timezoneUtc: string;
  ISP: string;
};

export function InfoSection({
  ip,
  region,
  countryCode,
  timezoneUtc,
  ISP,
}: InfoSectionProps) {
  return (
    <Layout style={styles.container}>
      <Info title="IP Address" value={ip} />
      <Info title="Location" value={`${region}, ${countryCode}`} />
      <Info title="Timezone" value={`UTC ${timezoneUtc}`} />
      <Info title="ISP" value={ISP} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, width: '100%', padding: 16},
});
