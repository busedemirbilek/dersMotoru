import React, {useState} from 'react';
import {View, Text, SafeAreaView, ToastAndroid} from 'react-native';
import {COLORS} from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import {createQuiz} from '../service/database';

const CreateQuizScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleQuizSave = async () => {
    const currentQuizId = Math.floor(100000 + Math.random() * 9000).toString();
    // Save to firestore
    await createQuiz(currentQuizId, title, description);

    // Navigate to Add Question string
    navigation.navigate('AddQuestionScreen', {
      currentQuizId: currentQuizId,
      currentQuisTitle: title,
    });

    // Reset
    setTitle('');
    setDescription('');
    ToastAndroid.show('Test Kaydedildi', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20,
          fontWeight: 'bold',
          color: COLORS.black,
        }}>
        Test Oluştur
      </Text>

      <FormInput
        labelText="Başlık"
        placeholderText="testin başlığını giriniz"
        onChangeText={val => setTitle(val)}
        value={title}
      />
      <FormInput
        labelText="Açıklama"
        placeholderText="Testin açıklamasını giriniz"
        onChangeText={val => setDescription(val)}
        value={description}
      />

      <FormButton labelText="Testi Kaydet" handleOnPress={handleQuizSave} />

      {/* Temporary button - navigate without saving quiz*/}
      {/* <FormButton
        labelText="Navigate to AddQuestionScreen"
        style={{
          marginVertical: 20,
        }}
        handleOnPress={() => {
          navigation.navigate('AddQuestionScreen', {
            currentQuizId: '103404',
            currentQuizTitle: 'Demo quiz',
          });
        }}
      /> */}
    </SafeAreaView>
  );
};

export default CreateQuizScreen;
