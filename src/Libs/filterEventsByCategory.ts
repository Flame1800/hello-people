const filterOneEvent = (categories: any, filters: any) => {
    const neededCategories = categories.reduce((acc, cur) => {
        const isExist = filters.map(({id}) => id).includes(cur.id)
        return isExist ? acc.push(cur) : acc
    }, [])

    return neededCategories.length !== 0
}

export const filterServicesByCategory = (entries, filters) => {
    return entries.filter(item => filterOneEvent(item.attributes.categories.data, filters))
}