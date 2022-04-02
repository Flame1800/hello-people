const sortPictures = (model: Object) => {
    const cover = model.cover?.id || null
    const isCover = pic => pic.id === cover
    return model.pictures.sort((x, y) =>
        isCover(x) === isCover(y) ? 0 : isCover(x) ? -1 : 1
    )
}

export default sortPictures
