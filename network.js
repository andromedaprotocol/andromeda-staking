export default {
  id: 'cosmos-hub-testnet', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Chain ID',
  description:
    'Cosmos is a network of independent parallel blockchains, powered by BFT consensus algorithms like Tendermint.',
  logo: `logo.svg`,
  website: 'http://137.184.47.16:26657',
  apiURL: 'http://137.184.47.16:1317', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'http://137.184.47.16:26657',
  stakingDenom: 'ANDR',
  coinLookup: [
    {
      viewDenom: 'ANDR',
      chainDenom: 'uandr',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'andr',
  validatorAddressPrefix: 'andrvaloper',
  validatorConsensusaddressPrefix: 'andrvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'uandr',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
