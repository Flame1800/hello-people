const sortPictures = (model: any) => {
  const cover = model.cover?.id || null;
  const isCover = (pic: Image) => pic.id === cover;

  return model.pictures.sort((x: Image, y: Image) =>
    isCover(x) === isCover(y) ? 0 : isCover(x) ? -1 : 1
  );
};

export default sortPictures;
