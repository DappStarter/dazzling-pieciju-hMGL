require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind artwork grace brave fold twenty'; 
let testAccounts = [
"0xc77d3f7bb8cb70f4e5c3e5b533b2c146fbffb9c603ca07855dfc3d9ff2939fae",
"0xbcdbb5a24c5c9ab595b5a0156d02af720bc022692c57f386cb9ca192444e288d",
"0x4c28c7ab277473d9dc8c15d7a63599adb6526b46f2d7fe53a9dcbcc71cf64e1f",
"0x605a03052abb7ee23d302b045d867201b496db4f2b82ed0786711d9a4b24d7a0",
"0x52aaa858f3d13e7306d219c79810df101b93f31943e39cbafebfc94cfc2be5c8",
"0x40b48875ea94b36e1fdb756b86455fc5acb7344d9d58c92c806c44fe807211eb",
"0xc5dd551236ec0530783c3c75642667939053f44584929418d092dc1ec2b75c4c",
"0x9606f95fcda9b36223c16cb0dfd2178ea3ff14bd6f2bae64b4bac1f18ae8139f",
"0x7d12e607652275c2b2b962a2ea6d0bb73cb9ecbc1322f01eb2dd8ce143dac423",
"0x4fac8b1f355a8d08f51b385b83084a798f2eccd0bd9ee9b543ad5f5f2c09d79d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


