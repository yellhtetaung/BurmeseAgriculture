import React, {useLayoutEffect} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

import data from 'libs/data';
import {Post} from 'types/types';
import {colors} from 'libs/styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface PostDetailsProps {
  route: any;
  navigation: any;
}

export default function PostDetails({route, navigation}: PostDetailsProps) {
  const id = route.params.id;

  const post = data.find(value => value.Id === id) as Post;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: post.Title,
    });
  }, [navigation, post]);

  return (
    <ScrollView style={styles.container}>
      <Image source={post?.Image} style={styles.coverImage} />

      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{post.Title}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.flexRowContainer}>
            <FontAwesome name="book" size={25} color={colors.green} />
            <Text style={styles.infoContent}>{post.Author}</Text>
          </View>

          <View style={styles.flexRowContainer}>
            <AntDesign name="calendar" size={25} color={colors.green} />
            <Text style={styles.infoContent}>
              {new Date(post.Date).toLocaleDateString()}
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.content}>{post.Content}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  coverImage: {
    width: '100%',
    height: 300,
  },

  bodyContainer: {
    flex: 1,
    padding: 10,
  },

  title: {
    fontSize: 18,
    fontFamily: 'NotoSansMyanmar-Bold',
    color: colors.dark,
  },

  infoContainer: {
    marginVertical: 10,
    gap: 20,
  },

  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  infoContent: {
    fontFamily: 'NotoSansMyanmar-Bold',
    color: colors.dark,
  },

  contentContainer: {
    flex: 1,
    marginVertical: 20,
  },

  content: {
    fontFamily: 'NotoSansMyanmar-Regular',
    fontSize: 16,
    color: colors.dark,
  },
});
