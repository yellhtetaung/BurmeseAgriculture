import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../libs/styles';

const imageBg = require('../assets/background.jpg');

interface LoginProps {
  navigation: any;
}

export default function Login({navigation}: LoginProps) {
  return (
    <ImageBackground
      source={imageBg}
      style={styles.container}
      resizeMode="cover"
      blurRadius={5}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>Burmese Agriculture</Text>
          <Text style={styles.description}>
            အပင်စိုက်နည်းတွေ၊ ထိန်းသိမ်းနည်းတွေ လေ့လာကြည့်ကြမယ်။
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.replace('Home')}>
          <Text style={styles.buttonLabel}>Go to home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 20,
    elevation: 10,

    gap: 20,
  },

  cardHeader: {
    gap: 5,
    marginVertical: 10,
  },

  title: {
    fontSize: 28,
    fontFamily: 'NotoSansMyanmar-Bold',
    color: colors.green,
    textAlign: 'center',
  },

  description: {
    fontFamily: 'NotoSansMyanmar-Medium',
    fontSize: 16,
    textAlign: 'center',
    color: colors.secondary_dark,
  },

  button: {
    backgroundColor: colors.green,
    borderRadius: 10,
    padding: 15,
  },

  buttonLabel: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'NotoSansMyanmar-Black',
    textAlign: 'center',
  },
});
