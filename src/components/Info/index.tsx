import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';

type InfoProps = {
  title: string;
  value: string;
};

export function Info({title, value}: InfoProps) {
  return (
    <Layout style={styles.container} level="2">
      <Text category="label">{title}</Text>
      <Text category="p2">{value}</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
