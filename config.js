var config = {
  basePath: '/bws/api',
  disableLogs: false,
  BlockchainMonitor: {
    livenet: {
      name: 'insight',
      url: 'http://explorer.startcoin.org',
    },
    testnet: {
      name: 'insight',
      url: 'http://testnet.explorer.startcoin.org',
    },
  },
  WalletService: {
    storageOpts: {
      dbPath: './db',
      /*  To use multilevel, uncomment this:
      multiLevel: {
        host: 'localhost',
        port: 3002,
      },
     */
    },
    lockOpts: {
      /*  To use locker-server, uncomment this:
      lockerServer: {
        host: 'localhost',
        port: 3003,
      },
     */
    },
  },
};
module.exports = config;
