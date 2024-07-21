import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import React from 'react';

export function Transactions() {
  return (
    <Layout style={styles.container}>
      <Text>Transactions Screen</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
