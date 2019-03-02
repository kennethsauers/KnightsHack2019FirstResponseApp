'use strict'

const nconf = require('nconf');

// Read in keys and secrets. Using nconf use can set secrets via
// environment variables, command-line arguments, or a keys.json file.
nconf.argv().env().file('config/keys.json');

// Connect to a MongoDB server provisioned over at
// MongoLab.  See the README for more info.
const user = nconf.get('mongoUser');
const pass = nconf.get('mongoPass');
const host = nconf.get('mongoHost');


let uri = `mongodb://${user}:${pass}@${host}`;
if (nconf.get('mongoDatabase')) {
  uri = `${uri}/${nconf.get('mongoDatabase')}`;
}
uri = `${uri}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;

module.exports = {
  database: uri,
  secret: 'changeme'
}
