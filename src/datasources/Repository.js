//github.com/GraphQLGuide/apollo-datasource-mongodb/#findonebyid
// https://www.apollographql.com/docs/apollo-server/data/data-sources/

const { MongoDataSource } = require("apollo-datasource-mongodb");

class Repository extends MongoDataSource {
  async getRepos() {
    const repos = await this.findOne({});
    return repos;
  }
  async getRepo(repoId) {
    const repo = await this.findOneById(repoId);
    return repo;
  }
}

module.exports = Repository;
