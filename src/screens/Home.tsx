import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import data from '../libs/data';
import {Post} from '../types/types';
import Card from 'components/Card';

export const Separator: React.FC = () => {
  return <View style={styles.separator} />;
};

interface HomeProps {
  navigation: any;
}

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.Id}
        style={styles.container}
        contentContainerStyle={styles.cardContentContainer}
        renderItem={({item}: {item: Post}) => (
          <Card navigation={navigation} {...item} />
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cardContentContainer: {
    padding: 10,
  },

  separator: {
    height: 10,
  },
});
