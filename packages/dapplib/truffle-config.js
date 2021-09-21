require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture strong dash maze color gloom arena metal genius'; 
let testAccounts = [
"0x493694dad2e777b5ed400e3a2938762ca2a3f9249921b8d0dd1e0348156d5966",
"0xf901b8d688e46bc7a42f9a38041776d8ae70c6849f511292388150134fd71128",
"0x0b55d4d7a4d5859c74a87e6fe1279f66d762876f28813579e590c3bd58122942",
"0xbde55d08abd73f973a882636afeae7d1fc5dbde5488420af8f4030b7e3d738d2",
"0x2bfcf450ee6e2b9aa966a960c358b7d809505ee4c186375558c59a82ac1a7fb7",
"0x2b74f88ce4d82486d1a3edc634c7ea32aeceac6963accb12ecc2651b8ba7bd6a",
"0x6bbfe26fd769131b4448b55bad30d1cbec49170300e92a328c76e5559d05160e",
"0x5e2664a6c967d1ab8d9341a4957ba0f1ae52ec66ebb7d5b5ca15bbb957fb96f1",
"0xa162d0c4ec11e417e2512486d6faa40a442b6228b3b15a30ba6fee437bcb6e71",
"0xd92a22a278f790af92fabd9abd44a28ee5acaef6b89a19e595bb072e48b2b38e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

