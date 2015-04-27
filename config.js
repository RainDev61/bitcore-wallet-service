var config = {
  basePath: '/bws/api',
  disableLogs: false,
  port: 3232,
  // Uncomment to make BWS a forking server
  // cluster: true,
  // Uncomment to use the nr of availalbe CPUs
  // clusterInstances: 4,

  // https: true,
  // privateKeyFile: 'private.pem',
  // certificateFile: 'cert.pem',

  storageOpts: {
    mongoDb: {
      host: 'localhost',
      port: 27017,
    },
  },
  lockOpts: {
    //  To use locker-server, uncomment this:
    // lockerServer: {
    //   host: 'localhost',
    //   port: 3231,
    // },
  },
  blockchainExplorerOpts: {
    livenet: {
      provider: 'insight',
      url: 'http://explorer.startcoin.org',
    },
    testnet: {
      provider: 'insight',
      url: 'http://testnet.explorer.startcoin.org',
    },
  },
};
module.exports = config;
