import { Platform } from 'react-native';

const local = {
	isAndroid: Platform.OS === 'android',
	BASE_URL: 'http://192.168.100.41:8080', // local graphql server url
};

const beta = {
	isAndroid: Platform.OS === 'android',
	BASE_URL: '',
};

const live = {
	isAndroid: Platform.OS === 'android',
	BASE_URL: '',
};

export default local;
