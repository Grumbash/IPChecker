import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type InfoProps = {
  title: string;
  value: string;
};

export function Info({title, value}: InfoProps) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
