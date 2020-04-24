const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = "ba75df73f651a6ccbbfc5c0133e0fc9fc72cab8ff7e8fd1fef5e5a94d8af42b5";
const privateKeyProvider = new HDWalletProvider(privateKey, "http://34.74.56.215:4545");

module.exports = {
    networks: {
        development: {
            protocol: 'http',
            host: 'localhost',
            port: 8545,
            gas: 8000000,
            gasPrice: 0,
            networkId: '*',
        },
        lacchain: {
            provider: privateKeyProvider,
            network_id: "648529",
            gasPrice: 0
        }
    },
};