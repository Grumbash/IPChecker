import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {Layout, Spinner} from '@ui-kitten/components';

import {IPForm, LocationCarousel, InfoSection} from '../../components';
import {useHome} from './useHome';

export function Home() {
  const {data, onSubmit, isLoading} = useHome();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Layout style={styles.inner}>
          <Layout style={styles.form}>
            <IPForm onSubmit={onSubmit} />
          </Layout>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
  form: {
    padding: 16,
  },
});
