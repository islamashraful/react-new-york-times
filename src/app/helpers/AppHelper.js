// @flow

export class AppHelper {
  /**
   * Get image url
   * Get url by adding partial url with the actual New York Times domain
   */
  static getImageUrl(partialUrl: string) {
    let imageUrl = "";
    if (partialUrl) {
      imageUrl = `https://static01.nyt.com/${partialUrl}`;
    } else {
      imageUrl = "https://dummyimage.com/150/f0f2f5/000&text=+IMAGE+NOT+FOUND";
    }
    return imageUrl;
  }
}
