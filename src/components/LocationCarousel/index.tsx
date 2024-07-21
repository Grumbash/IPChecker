import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {Layout, ViewPager} from '@ui-kitten/components';

const data = [
  {
    ip: '217.133.50.193',
    image: require('../../assets/Rome.jpeg'),
  },
  {
    ip: '217.13.124.105',
    image: require('../../assets/Barcelona.jpeg'),
  },
  {
    ip: '213.30.114.42',
    image: require('../../assets/Lisbon.jpeg'),
  },
  {
    ip: '196.247.180.132',
    image: require('../../assets/Warsaw.jpeg'),
  },
];

export const LocationCarousel = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handlePress = (ip: string) => () => {
    console.log('ip', ip);
  };

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      {data.map((location, index) => (
        <Layout key={index} style={styles.tab}>
          <Pressable
            style={styles.imageWrapper}
            onPress={handlePress(location.ip)}>
            <Image style={styles.image} source={location.image} />
          </Pressable>
        </Layout>
      ))}
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  imageWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
