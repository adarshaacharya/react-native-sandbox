import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 1,
  },
});

const usePeople = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
      fetch('https://randomuser.me/api/?results=100&inc=name')
        .then((res) => res.json())
        .then((response) => {
          setPeople(response.results);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return {
    people,
    loading,
  };
};

export default () => {
  const { people, loading } = usePeople();
  return (
    <SafeAreaView>
      <FlatList
        data={people}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => {
          if (loading) {
            return <ActivityIndicator size="large" />;
          }
          return null;
        }}
      />
    </SafeAreaView>
  );
};
