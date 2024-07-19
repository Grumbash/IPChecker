import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export function Loader() {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
