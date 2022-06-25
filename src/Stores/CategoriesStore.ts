import {makeAutoObservable} from "mobx";

class CategoriesStore {
    categories: Array<any> = []
    selectedCategories: Array<any> = []

    constructor() {
        makeAutoObservable(this)
    }

    setCategories = (categories: Array<any>) => {
        this.categories = categories
    }

    toggleSelectedCategory = (category: Object) => {
        const categoryInArray = this.selectedCategories.find(({id}) => id === category.id)

        if (categoryInArray) {
            return this.selectedCategories = this.selectedCategories.filter(({id}) => id !== category.id)
        }

        return this.selectedCategories = [...this.selectedCategories, category]
    }
}

export default new CategoriesStore()