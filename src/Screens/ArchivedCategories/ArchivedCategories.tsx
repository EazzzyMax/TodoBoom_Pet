import React from 'react'
import { Category } from '../../Components/Category'
import { useAppSellector } from '../../redux/hooks'
import { ICategory } from '../../types/types'
import { ArchivedCategoriesFlatList, BottomLinearGradient, ItemSeparator, ScreenWrapper } from './styles'

const ArchivedCategories: React.FC = () => {
	const archivedCategories: ICategory[] = useAppSellector((state) => state.archivedCategories)

	const renderItem = ({ item }) => <Category category={item} archived={true} />
	return (
		<ScreenWrapper>
			<ArchivedCategoriesFlatList
				data={archivedCategories}
				renderItem={renderItem}
				ItemSeparatorComponent={() => <ItemSeparator />}
			/>
			<BottomLinearGradient colors={['transparent', 'rgba(17,17,17,0.6)', 'rgba(17,17,17,1)']} />
		</ScreenWrapper>
	)
}

export default ArchivedCategories
