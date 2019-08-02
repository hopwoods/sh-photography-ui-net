/* eslint-disable no-unused-vars */
import Api from './../_helpers/api';

export const GetPhotoAlbum = function(googleAlbumId, viewportWidth, viewportHeight) {
  return Api.get(`/photos/getalbumphotos?albumId=${googleAlbumId}&viewportWidth=${viewportWidth}&viewportHeight=${
    viewportHeight}`).then(
    response => {
      return response.data.photos;
    }
  );
};
