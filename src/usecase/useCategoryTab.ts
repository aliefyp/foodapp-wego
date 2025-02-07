import { useState } from "react";
import { TabItemProps } from "../components/TabItem";
import { Category } from "../types/foodCategories";

interface UseCategoryTabProps {
  foodCategories: Category[]
}

interface UseCategoryTabInterface {
  activeCategory: Category['id'];
  categoryList: TabItemProps[]
  handleCategoryClick: (id: Category['id']) => void;
}

/**
 * Custom hook to manage category tabs state.
 *
 * @param {UseCategoryTabProps} props - The properties for the hook.
 * @param {CategoryItem[]} props.items - Array of category items.
 * 
 * @returns {UseCategoryTabInterface} - An object containing:
 *   - `categoryList`: An array of category items with an `isActive` flag indicating the active tab.
 *   - `handleCategoryClick`: A function to handle tab click events, updating the active tab.
 */

const useCategoryTab = ({ foodCategories }: UseCategoryTabProps): UseCategoryTabInterface => {
  const [activeCategory, setActiveCategory] = useState<Category['id']>('');

  const handleCategoryClick = (id: Category['id']) => {
    setActiveCategory(id);
  }

  const categoryList = [
    {
      text: 'All',
      active: activeCategory === '',
      onClick: () => handleCategoryClick('')
    },
    ...foodCategories.map((category) => ({
      text: category.name,
      active: activeCategory === category.id,
      onClick: () => handleCategoryClick(category.id)
    }))
  ];
  
  return {
    activeCategory,
    categoryList,
    handleCategoryClick
  }
}

export default useCategoryTab;