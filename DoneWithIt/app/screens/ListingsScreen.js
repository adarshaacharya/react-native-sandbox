import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import listingsApi from '../api/listings';
import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import useApi from '../hooks/useApi';
import routes from '../navigation/routes';

function ListingsScreen() {
  const navigation = useNavigation();
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      )}

      {getListingsApi.loading && (
        <ActivityIndicator visible={getListingsApi.loading} />
      )}
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 2,
  },
});

export default ListingsScreen;
