import React from 'react'
import ArchivedCategories from '../Screens/ArchivedCategories/ArchivedCategories'
import Categories from '../Screens/Categories/Categories'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ArchiveIcon, ArchiveActiveIcon, CategoriesIcon, CategoriesActiveIcon } from '../../assets/icons'
import { colors } from '../Styles/Colors'
import { AddTodoButton } from '../Components/AddTodoButton'

const Tab = createBottomTabNavigator()

const Navigation = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,

				tabBarIcon: ({ focused }) => {
					if (route.name === 'Archive') {
						return focused ? <ArchiveActiveIcon /> : <ArchiveIcon />
					} else if (route.name === 'Categories') {
						return focused ? <CategoriesActiveIcon /> : <CategoriesIcon />
					}
				},
				tabBarActiveTintColor: colors.tabBarActiveText,
				tabBarInactiveTintColor: colors.tabBarInactiveText,
				tabBarShowLabel: false,

				tabBarLabelStyle: { fontSize: 13 },
				tabBarStyle: {
					backgroundColor: colors.navbarBackground,
					height: 64,
					paddingBottom: 5,
					paddingTop: 5,

					position: 'absolute',
					left: 10,
					right: 10,
					bottom: 10,
					borderRadius: 25,


					borderTopWidth: 0,
				},
			})}
		>
			<Tab.Screen name='Categories' component={Categories} />
			<Tab.Screen
				name='AddBtn'
				component={AddTodoButton}
				options={{ tabBarButton: () => <AddTodoButton /> }}
			/>
			<Tab.Screen name='Archive' component={ArchivedCategories} />
		</Tab.Navigator>
	)
}

export default Navigation
