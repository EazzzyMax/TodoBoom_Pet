import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import { changeCurrentCategory } from '../../redux/todoSlice'
import { Category } from '../../Components/Category'
import { ICategory } from '../../types/types'
import { useAppDispatch, useAppSellector } from '../../redux/hooks'
import { CategoriesFlatList, ScreenWrapper, Separator } from './styles'
import { sizes } from '../../Styles/Sizes'

const Categories: React.FC = () => {
	const dispatch = useAppDispatch()
	const flatRef = useRef<FlatList<ICategory>>()
	const WIDTH_OF_SCROLL = sizes.WIDTH_OF_SCROLL

	//FIXME: не определяется тип стейта
	const categories: ICategory[] = useAppSellector((state) => state.categories) //all cards

	useEffect(() => {
		dispatch(changeCurrentCategory(0))
	}, [])

	const onScrollEnd = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
		const offsetX = e.nativeEvent.contentOffset.x
		dispatch(changeCurrentCategory(Math.round(offsetX / WIDTH_OF_SCROLL)))
	}, [])

	const renderItem = ({ item }) => <Category category={item} archived={false} />
	return (
		<ScreenWrapper>
			<CategoriesFlatList
				ref={flatRef}
				horizontal={true}
				snapToInterval={WIDTH_OF_SCROLL}
				decelerationRate={0.78}
				disableIntervalMomentum={true}
				showsHorizontalScrollIndicator={false}
				data={categories}
				renderItem={renderItem}
				onMomentumScrollEnd={(e) => onScrollEnd(e)}
				ItemSeparatorComponent={() => <Separator />}
			/>
		</ScreenWrapper>
	)
}
export default Categories
