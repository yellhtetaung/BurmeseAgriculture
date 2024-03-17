import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {colors} from 'libs/styles';
import data from 'libs/data';
import {Separator} from './Home';
import Card from 'components/Card';
import {Post} from 'types/types';

interface SearchProps {
  navigation: any;
}

export default function Search({navigation}: SearchProps) {
  const [inputValue, setInputValue] = useState('');

  const post = useMemo(
    () =>
      inputValue.length &&
      data.filter(value => value.Title.includes(inputValue)),
    [inputValue],
  ) as Post[];

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.input}
            autoFocus
            placeholder="စာရိုက်ထည့်၍ရှာရန်"
          />
        </View>

        <FlatList
          data={post}
          keyExtractor={item => item.Id}
          style={styles.container}
          contentContainerStyle={styles.cardContentContainer}
          renderItem={({item}: {item: Post}) => (
            <Card navigation={navigation} {...item} />
          )}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    paddingVertical: 20,
    padding: 10,
  },

  input: {
    width: '100%',
    height: 50,
    fontFamily: 'NotoSansMyanmar-Regular',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.green,

    paddingHorizontal: 20,
  },

  cardContentContainer: {
    padding: 10,
  },

  separator: {
    height: 10,
  },
});
