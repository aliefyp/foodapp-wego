import { useState } from "react";
import { Category } from "../types/foodCategories";

interface UseCategoryTabProps {
  foodCategories: Category[]
}

interface UseCategoryTabInterface {
  activeCategory: Category['id'];
  categoryList: (Category & { isActive: boolean })[];
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
    { id: '', name: 'All', isActive: activeCategory === '' },
    ...foodCategories.map((item) => ({ ...item, isActive: activeCategory === item.id }))
  ];
  
  return {
    activeCategory,
    categoryList,
    handleCategoryClick
  }
}

export default useCategoryTab;