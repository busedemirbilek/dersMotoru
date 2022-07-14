import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CourseScreen = ({ route }) => {
  const { data } = route.params;
  const BottomNavigationBar = () => {
    return (
      <View
        style={{
          height: 80,
          bottom: 0,
          zIndex: 100,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
      </View>
    );
  };
  const CourseContentList = ({ content, index }) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#E4E7F4' }}>
          {'0' + (index + 1)}
        </Text>
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <Text
            style={{
              fontSize: 15,
              color: '#A0A5BD',
              fontWeight: '500',
              marginBottom: 5,
            }}>
            {content.time}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {content.title}
          </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'green',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={
              () => {
                Linking.openURL(content.uri);
              }
            }
          >
            <Icon name="picture-as-pdf" style={{ fontSize: 25, color: '#fff' }} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            marginLeft: 5,
            backgroundColor: 'red',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={
              () => {
                Linking.openURL(content.videoUri);
              }
            }
          >
            <Icon name="play-arrow" style={{ fontSize: 25, color: '#fff' }} />
          </TouchableOpacity>

        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <ImageBackground
        source={data.image}
        style={{
          height: 370,
          paddingTop: 40,
          paddingRight: 20,
          paddingLeft: 20,
        }}>
        <Image
          resizeMode="contain"
          style={{
            width: 100,
            marginBottom: 10,
            paddingTop: 5
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            top: -35,
          }}>
          {data.name}
        </Text>
        <View style={{ top: -25, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <Text style={{ color: '#61688B', fontWeight: 'bold' }}>
              {'Ders Öğretmeni: ' + data.teacher}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          marginTop: -35,
          marginBottom: -55,
          backgroundColor: '#fff',
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          height: '100%',
        }}>
        <Text
          style={{
            marginTop: 40,
            marginBottom: 20,
            marginHorizontal: 20,
            fontSize: 21,
            fontWeight: 'bold',
          }}>
          Ders İçerikleri
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CourseContentList index={index} content={item} />
          )}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CourseContentList index={index} content={item} />
          )}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CourseContentList index={index} content={item} />
          )}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CourseContentList index={index} content={item} />
          )}
        />
      </View>
      <BottomNavigationBar />
    </SafeAreaView>
  );
};
export default CourseScreen;