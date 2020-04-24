//0xB26ca138a8bc75c4272FD4E2EAA5fb7D2265e260
const abi = [{
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "by",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startDate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "iat",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "enum ICredentialRegistry.Sex",
                "name": "sex",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "age",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "bytes6",
                "name": "geoHash",
                "type": "bytes6"
            },
            {
                "indexed": false,
                "internalType": "enum ICredentialRegistry.CovidCode",
                "name": "credentialType",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "enum ICredentialRegistry.InterruptionReason",
                "name": "reason",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "bytes1",
                "name": "symptoms",
                "type": "bytes1"
            }
        ],
        "name": "CredentialRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "by",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            }
        ],
        "name": "CredentialRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "WhitelistAdminAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "WhitelistAdminRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "WhitelistedAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "WhitelistedRemoved",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "addWhitelistAdmin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "addWhitelisted",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "sender",
            "type": "address"
        }],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "isWhitelistAdmin",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "isWhitelisted",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "subjectId",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "startDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "exp",
                "type": "uint256"
            },
            {
                "internalType": "enum ICredentialRegistry.Sex",
                "name": "sex",
                "type": "uint8"
            },
            {
                "internalType": "uint8",
                "name": "age",
                "type": "uint8"
            },
            {
                "internalType": "bytes6",
                "name": "geoHash",
                "type": "bytes6"
            },
            {
                "internalType": "enum ICredentialRegistry.CovidCode",
                "name": "credentialType",
                "type": "uint8"
            },
            {
                "internalType": "enum ICredentialRegistry.InterruptionReason",
                "name": "reason",
                "type": "uint8"
            },
            {
                "internalType": "bytes1",
                "name": "symptoms",
                "type": "bytes1"
            }
        ],
        "name": "register",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "removeWhitelisted",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceWhitelistAdmin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceWhitelisted",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
        }],
        "name": "revoke",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "citizen",
                "type": "address"
            }
        ],
        "name": "verify",
        "outputs": [{
            "internalType": "bool",
            "name": "isValid",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

const Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://40.71.193.134:4545/"));

var account = web3.eth.accounts.privateKeyToAccount("ba75df73f651a6ccbbfc5c0133e0fc9fc72cab8ff7e8fd1fef5e5a94d8af42b5");
const reg = new web3.eth.Contract(abi, "0x13Bf54153c34555205D009e492FD725D42287e99");

const now = Date.now();

let geohash = web3.utils.hexToBytes(web3.utils.utf8ToHex("6yh2f4")); //web3.fromAscii("6yh2f4")
console.log(geohash);
reg.methods.register("0x6dc6d89d42e7114a07e615391b2d0fbdc106bc03b6459a8558370ff9b3a2128e",
        "0x7443dff21c5e0eee9c555ecb5fa4759200dbc167060f0bd2d5034650e3e85566", now, now, 0, 33, geohash, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0])
    .call({
        form: account,
        gasPrice: 0
    }).then(x => console.log(x), e => console.log("error: " + e));