const covid = artifacts.require("CovidCredentialRegistry");
contract("Tests", async(accounts) => {

    it("add data", async() => {
        const covidSC = await covid.deployed();
        const now = Date.now();

        let geohash = web3.utils.hexToBytes(web3.utils.utf8ToHex("6yh2f4")); //web3.fromAscii("6yh2f4")
        console.log(geohash);
        const tx = await covidSC.register("0x6dc6d89d42e7114a07e615391b2d0fbdc106bc03b6459a8558370ff9b3a2128e",
            "0x7443dff21c5e0eee9c555ecb5fa4759200dbc167060f0bd2d5034650e3e85566", now, now, 0, 33, geohash, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0]);
        assert.isTrue(tx.receipt.status);
    });
});