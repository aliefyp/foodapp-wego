import { useState } from "react";
import { TabItemProps } from "../components/TabItem/TabItem";
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
 * @param {Category[]} props.foodCategories - Array of category items.
 * 
 * @returns {UseCategoryTabInterface} - An object containing:
 *   - `activeCategory`: The ID of the currently active category.
 *   - `categoryList`: An array of tab items with each tab having a text label and an active state.
 *   - `handleCategoryClick`: A function to handle category tab clicks, updating the active category.
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