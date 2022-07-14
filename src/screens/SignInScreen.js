import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import FormButton from '../components/shared/FormButton';
import FormInput from '../components/shared/FormInput';
import { COLORS } from '../constants/theme';
import { signIn } from '../service/auth';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleOnSubmit = () => {
    if (email != '' && password != '') {
      signIn(email, password);
    }
    else {
      ToastAndroid.show('parola eşleşmedi', ToastAndroid.SHORT);
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15,
        paddingTop: 80
      }}>
      <Image
        style={{ height: 250, width: 250, marginLeft: 10, marginTop: -35 }}
        source={require('../assets/app_icon.png')}
      />
      {/* Header */}
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: 'bold',
          marginVertical: 32,
          marginTop: -15
        }}>
        Giriş Yap
      </Text>
      {/* Email */}
      <FormInput
        labelText="Email"
        placeholderText="email bilginizi giriniz"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType={'email-address'}
      />
      {/* Password */}
      <FormInput
        labelText="Şifre"
        placeholderText="şifrenizi giriniz"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />
      {/* Submit button */}
      <FormButton
        labelText="Giriş Yap"
        handleOnPress={() => {
          navigation.navigate('HomeScreen');
        }}
        handleOnPress={handleOnSubmit}
        style={{ width: '100%' }}
      />
      {/* Footer */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text>Hesabınız yok mu?</Text>
        <Text
          style={{ marginLeft: 4, color: COLORS.primary }}
          onPress={() => navigation.navigate('SignUpScreen')}>
          Hesap Oluştur
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default SignInScreen;