//github.com/GraphQLGuide/apollo-datasource-mongodb/#findonebyid
// https://www.apollographql.com/docs/apollo-server/data/data-sources/

const { MongoDataSource } = require("apollo-datasource-mongodb");

class Authors extends MongoDataSource {
  async getAuthor(authorId) {
    const user = await this.findOneById(authorId);
    return user;
  }
}

module.exports = Authors;
