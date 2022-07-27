/* eslint-disable camelcase */
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/redux/store'

import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/Navigation'

import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'
import { Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway'
import { PTMono_400Regular } from '@expo-google-fonts/pt-mono'
import AppLoading from 'expo-app-loading'

import { MenuProvider } from 'react-native-popup-menu'

import { colors } from './src/Styles/Colors'

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
		Raleway_400Regular,
		Raleway_500Medium,
		PTMono_400Regular,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<MenuProvider>
						<StatusBar hidden={false} backgroundColor='#111' barStyle='light-content' />
						<SafeAreaView style={styles.safeView}>
							<Navigation />
						</SafeAreaView>
					</MenuProvider>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	)
}

const styles = StyleSheet.create({
	safeView: {
		backgroundColor: colors.background,
		flex: 1,
	},
})
