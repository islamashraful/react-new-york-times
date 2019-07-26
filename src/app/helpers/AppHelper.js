// @flow

export class AppHelper {
  /**
   * Get image url
   * Get url by adding partial url with the actual New York Times domain
   */
  static getImageUrl(partialUrl: any) {
    let imageUrl = "";
    if (partialUrl) {
      imageUrl = `https://static01.nyt.com/${partialUrl}`;
    } else {
      imageUrl = "https://dummyimage.com/900/f0f2f5/000&text=+IMAGE+NOT+FOUND";
    }
    return imageUrl;
  }

  /**
   * Format long text with ellipsis
   */
  static formatText(str: string, limit: number) {
    if (str.length > limit) {
      return `${str.slice(0, limit)}...`;
    }

    return str;
  }
}
