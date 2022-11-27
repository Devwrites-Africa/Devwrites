const { DB } = require('../src/config/database');

const db = new DB();

const mochaHooks = {
  async beforeAll() {
    await db.connect();
  },

  async afterAll() {
    await db.disconnect();
  },

  // afterEach() {
  //   if (!nock.isDone()) {
  //     global.console.error(
  //       'Not all nock interceptors were used',
  //       nock.pendingMocks()
  //     );
  //     nock.cleanAll();
  //   }
  // },
};

module.exports = {
  mochaHooks,
};
