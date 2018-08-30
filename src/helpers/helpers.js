import {AsyncStorage} from 'react-native';

export async function clearKeys(){
    await AsyncStorage.clear();
}