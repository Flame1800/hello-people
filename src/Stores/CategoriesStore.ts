import { makeAutoObservable } from "mobx";

class CategoriesStore {
  categories: Array<Category> = [];
  selectedCategories: Array<Category> = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCategories = (categories: Array<Category>) => {
    this.categories = categories;
    this.selectedCategories = [];
  };

  clearCategories = () => {
    this.selectedCategories = [];
  };

  toggleSelectedCategory = (category: Category) => {
    const categoryInArraySelected = this.selectedCategories.find(
      ({ id }) => id === category.id
    );

    if (categoryInArraySelected) {
      return (this.selectedCategories = this.selectedCategories.filter(
        ({ id }) => id !== category.id
      ));
    }

    return (this.selectedCategories = [...this.selectedCategories, category]);
  };
}

export default new CategoriesStore();
