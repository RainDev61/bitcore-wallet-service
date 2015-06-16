'use strict';

var _ = require('lodash');
var $ = require('preconditions').singleton();
var log = require('npmlog');
log.debug = log.verbose;

var Insight = require('./blockchainexplorers/insight');

var PROVIDERS = {
  'insight': {
    'livenet': 'https://explorer.startcoin.org:443',
    'testnet': 'https://na:443',
  },
};

function BlockChainExplorer(opts) {
  $.checkArgument(opts);

  var provider = opts.provider || 'insight';
  var network = opts.network || 'livenet';

  $.checkState(PROVIDERS[provider], 'Provider ' + provider + ' not supported');
  $.checkState(_.contains(_.keys(PROVIDERS[provider]), network), 'Network ' + network + ' not supported by this provider');

  var url = opts.url || PROVIDERS[provider][network];

  switch (provider) {
    case 'insight':
      return new Insight({
        network: network,
        url: url
      });
    default:
      throw new Error('Provider ' + provider + ' not supperted.');
  };
};

module.exports = BlockChainExplorer;
