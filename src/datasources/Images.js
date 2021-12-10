//github.com/GraphQLGuide/apollo-datasource-mongodb/#findonebyid
// https://www.apollographql.com/docs/apollo-server/data/data-sources/

const { MongoDataSource } = require("apollo-datasource-mongodb");

class Images extends MongoDataSource {
  async getImage(imageId) {
    const image = await this.findOneById(imageId);
    return image;
  }
  async getAuthor(authorId) {
    const author = await this.findOneById(authorId);
    return author;
  }
  async getImages() {
    const images = await this.findOneById({});
    return images;
  }
}

module.exports = Images;
