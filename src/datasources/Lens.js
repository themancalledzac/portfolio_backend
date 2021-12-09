//github.com/GraphQLGuide/apollo-datasource-mongodb/#findonebyid
// https://www.apollographql.com/docs/apollo-server/data/data-sources/

const { MongoDataSource } = require("apollo-datasource-mongodb");

class Lens extends MongoDataSource {
  async getLens(lensId) {
    const lens = await this.findOneById(lensId);
    return lens;
  }
}

module.exports = Lens;
