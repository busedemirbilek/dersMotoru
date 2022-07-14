import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image,Alert} from 'react-native';
import FormButton from '../components/shared/FormButton';
import FormInput from '../components/shared/FormInput';
import {COLORS} from '../constants/theme';
import {signUp} from '../service/auth';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnSubmit = () => {
    if (email != '' && password != '' && confirmPassword != '') {
      if (password == confirmPassword) {
        //   SignUp
        signUp(email, password);
      } else {
        Alert.alert('HATA', 'Girilen Parolalar Eşleşmedi');;
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15,
        paddingTop:30
      }}>
        <Image
                style={{height: 250, width: 250, marginLeft: 10, marginTop:-25}}
                source={require('../assets/app_icon.png')}
              />
      {/* Header */}
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: 'bold',
          marginVertical: 32,
          marginTop:-15
        }}>
        Kayıt Ol
      </Text>

      {/* Email */}
      <FormInput
        labelText="Email"
        placeholderText="email hesabınızı giriniz"
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

      {/* Confirm Password */}
      <FormInput
        labelText="Şifre Tekrarı"
        placeholderText="şifrenizi tekrar giriniz"
        onChangeText={value => setConfirmPassword(value)}
        value={confirmPassword}
        secureTextEntry={true}
      />

      {/* Submit button */}
      <FormButton
        labelText="Kayıt Ol"
        handleOnPress={handleOnSubmit}
        style={{width: '100%'}}
      />

      {/* Footer */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Text>Zaten hesabınız var mı?</Text>
        <Text
          style={{marginLeft: 4, color: COLORS.primary}}
          onPress={() => navigation.navigate('SignInScreen')}>
          Giriş Yap
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
