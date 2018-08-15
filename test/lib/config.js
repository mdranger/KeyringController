const MAINET_RPC_URL = 'https://mainnet.infura.io/metamask'
const ROPSTEN_RPC_URL = 'https://ropsten.infura.io/metamask'
const KOVAN_RPC_URL = 'https://kovan.infura.io/metamask'
const RINKEBY_RPC_URL = 'https://rinkeby.infura.io/metamask'
const MOACMAIN_RPC_URL = 'https://www.moacwalletonline.com/main'
const MOACTEST_RPC_URL = 'https://www.moacwalletonline.com/test'

global.METAMASK_DEBUG = 'GULP_METAMASK_DEBUG'

/*
 * Added MOAC networks
*/
module.exports = {
  network: {
    mainnet: MAINET_RPC_URL,
    ropsten: ROPSTEN_RPC_URL,
    kovan: KOVAN_RPC_URL,
    rinkeby: RINKEBY_RPC_URL,
    MOACmain: MOACMAIN_RPC_URL,
    MOACtest: MOACTEST_RPC_URL,
  },
  networkNames: {
    3: 'Ropsten',
    4: 'Rinkeby',
    42: 'Kovan',
    99: 'MOACmain',
    101: 'MOACtest',
  },
}
