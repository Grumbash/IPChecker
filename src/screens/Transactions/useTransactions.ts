import {useCallback, useState, useRef, useMemo} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import throttle from 'lodash.throttle';

import {ws} from '../../api';
import {Message} from './types';

const subscriber = JSON.stringify({
  method: 'SUBSCRIBE',
  params: ['btcusdt@aggTrade'],
  id: 1,
});

export function useTransactions() {
  const [messages, setMessages] = useState<Message[]>([]);

  const isSubscribed = useRef(false);

  const throttledSetMessages = useMemo(
    () =>
      throttle(message => {
        setMessages(prevMessages => [message, ...prevMessages]);
      }, 1000),
    [],
  );

  const subscribe = useCallback(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(subscriber);
      isSubscribed.current = true;
    } else {
      ws.onopen = () => {
        ws.send(subscriber);
        isSubscribed.current = true;
      };
    }

    ws.onmessage = event => {
      const message = JSON.parse(event.data);
      throttledSetMessages(message);
    };
  }, [throttledSetMessages]);

  const unsubscribe = () => {
    if (isSubscribed.current) {
      ws.send(
        JSON.stringify({
          method: 'UNSUBSCRIBE',
          params: ['btcusdt@aggTrade'],
          id: 1,
        }),
      );
      isSubscribed.current = false;
      console.log('Unsubscribed');
    }
  };

  const onMessage = useCallback(() => {
    subscribe();

    return () => {
      unsubscribe();
    };
  }, [subscribe]);

  useFocusEffect(onMessage);

  return {
    messages,
    subscribe,
    unsubscribe,
  };
}
