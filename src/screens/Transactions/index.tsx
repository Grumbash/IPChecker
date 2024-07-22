import {Layout, List, ListItem, Button} from '@ui-kitten/components';
import {ListRenderItem, StyleSheet} from 'react-native';
import React from 'react';
import {Message} from './types';
import {useTransactions} from './useTransactions';

export function Transactions() {
  const {subscribe, unsubscribe, messages} = useTransactions();

  const renderItem: ListRenderItem<Message> = ({item}) => (
    <ListItem
      style={styles.listItem}
      title={`Price: ${item.p}`}
      description={`Quantity: ${item.q}, Time: ${new Date(
        item?.T,
      ).toLocaleTimeString()}`}
    />
  );

  return (
    <Layout style={styles.container}>
      <Button onPress={subscribe}>Subscribe</Button>
      <Button onPress={unsubscribe}>Unsubscribe</Button>
      <List
        style={styles.list}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  listItem: {flex: 1, width: '100%'},
  list: {width: '100%'},
});
