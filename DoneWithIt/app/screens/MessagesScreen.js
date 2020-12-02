import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const INITIAL_MESSAGES = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fuga nihil totam ex sapiente iure eos obcaecati iusto. Dolore, numquam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque quos odio quisquam sequi animi, quia quae reprehenderit minus tenetur sint eius repellat, harum alias nisi ut accusamus? Eaque sunt qui pariatur deleniti tempore quae ipsum dolorum, corrupti quas odio? Iste ducimus, dolor natus, ratione eius beatae dolorem adipisci unde tempore, itaque labore porro. Veniam amet, asperiores assumenda ut dignissimos repellendus. Consectetur necessitatibus esse officia quidem eos repudiandae, labore unde velit eligendi architecto harum assumenda asperiores quas dolores error iure. Adipisci nostrum neque perspiciatis quod sint sunt placeat dolore repellendus porro voluptates quam dolorem exercitationem maxime perferendis nobis, voluptas veritatis.',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/mosh.jpg'),
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) =>
    setMessages(messages.filter((m) => m.id !== message.id));

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('object')}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 4,
              title: 'T4',
              description: 'D4',
              image: require('../assets/mosh.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
