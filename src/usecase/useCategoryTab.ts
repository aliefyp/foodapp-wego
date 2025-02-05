import { useState } from "react";

interface CategoryItem {
  id: string;
  name: string;
}

type CategoryId = CategoryItem['id'];

interface UseCategoryTabProps {
  items: CategoryItem[]
}

interface UseCategoryTabInterface {
  categoryTabs: (CategoryItem & { isActive: boolean })[];
  handleTabClick: (id: CategoryId) => void;
}

const useCategoryTab = ({ items }: UseCategoryTabProps): UseCategoryTabInterface => {
  const [activeTab, setActiveTab] = useState<CategoryId>('');

  const handleTabClick = (id: CategoryId) => {
    setActiveTab(id);
  }

  const categoryTabs = [
    { id: '', name: 'All', isActive: activeTab === '' },
    ...items.map((item) => ({ ...item, isActive: activeTab === item.id }))
  ];
  
  return {
    categoryTabs,
    handleTabClick
  }
}

export default useCategoryTab;