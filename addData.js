//contract: 0x13Bf54153c34555205D009e492FD725D42287e99

const Web3 = require("web3");
const { setupLoader } = require('@openzeppelin/contract-loader');
var web3 = new Web3(new Web3.providers.HttpProvider("http://34.74.56.215:4545"));
const address = '0x13Bf54153c34555205D009e492FD725D42287e99';

var account = web3.eth.accounts.privateKeyToAccount("ba75df73f651a6ccbbfc5c0133e0fc9fc72cab8ff7e8fd1fef5e5a94d8af42b5");
const loader = setupLoader({ provider: web3 }).web3;
const reg = loader.fromArtifact('CovidCredentialRegistry', address);


async function main() {
    const now = Date.now();
    const symptoms = web3.utils.numberToHex(10001000);

    let geohash = web3.utils.utf8ToHex("6ey9dk");
    console.log(symptoms); //web3.fromAscii("6yh2f4")
    const tx = await reg.methods.register("0x6dc6d99d42e7114a07e616391b2d0fbdc106bc03b6459a8558370ff9b3a2128e",
            "0x7423dff21c5e0eee9c555ecb5fa4759200ddc167060f0bd2d5034650e3e85566", now, now, 0, 33, geohash, 0, 0, symptoms)
        .call({
            form: account,
            gasPrice: 0
        });
    console.log(tx);
}

main();