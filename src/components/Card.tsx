import React, {memo} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Post} from 'types/types';
import {colors} from 'libs/styles';

import AntDesign from 'react-native-vector-icons/AntDesign';

interface CardTitleProps {
  title: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({title}) => {
  if (title.length > 40) {
    return <Text style={styles.cardTitle}>{title.substring(0, 40)}...</Text>;
  }

  return <Text style={styles.cardTitle}>{title}</Text>;
};

interface CardProps extends Post {
  navigation: any;
}

function Card({
  Id,
  Title,
  Image: image,
  Date: date,
  Author,
  navigation,
}: CardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PostDetails', {id: Id})}>
      <View>
        <Image source={image} style={styles.headerImage} />
        <CardTitle title={Title} />
      </View>

      <View style={styles.cardFooter}>
        <View style={styles.footerItem}>
          <AntDesign name="user" size={20} color={colors.green} />
          {!Author && <Text style={styles.footerItemContent}>အမည်မသိ</Text>}
          {Author && (
            <Text style={styles.footerItemContent}>
              {Author?.length > 20 ? `${Author.substring(0, 20)}...` : Author}
            </Text>
          )}
        </View>

        <View style={styles.footerItem}>
          <AntDesign name="calendar" size={20} color={colors.green} />
          <Text style={styles.footerItemContent}>
            {new Date(date).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default memo(Card);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.secondary,
    elevation: 5,
    borderRadius: 10,

    padding: 15,
  },

  headerImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 5,
  },

  cardTitle: {
    fontFamily: 'NotoSansMyanmar-Bold',
    fontSize: 17,
  },

  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  footerItemContent: {
    fontFamily: 'NotoSansMyanmar-Regular',
  },
});
