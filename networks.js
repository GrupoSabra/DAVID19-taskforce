const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = "ccc9e9dcbf0575a02d20ba4fbe317acd86795d1bd2521f34cb709d1e762d12b2";
const privateKeyProvider = new HDWalletProvider(privateKey, "HTTP://127.0.0.1:8545");

module.exports = {
    networks: {
        lacchain: {
            provider: privateKeyProvider,
            network_id: "5777",
            gasPrice: 0
        }
    }
};