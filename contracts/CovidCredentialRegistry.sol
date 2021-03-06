pragma solidity ^0.5.0;

import "@openzeppelin/contracts-ethereum-package/contracts/access/roles/WhitelistedRole.sol";
import "./ICredentialRegistry.sol";

contract CovidCredentialRegistry is ICredentialRegistry, WhitelistedRole {

  mapping (bytes32 => mapping (address => CovidMetadata)) credentials;

  function register(bytes32 hash, bytes32 subjectId, uint startDate, uint exp,Sex sex, uint8 age, bytes6 geoHash, CovidCode credentialType, InterruptionReason reason, byte symptoms) onlyWhitelisted external returns(bool) {
    CovidMetadata storage credential = credentials[hash][msg.sender];
    require(credential.subjectId==0,"Credential ID already exists");

    credential.subjectId = subjectId;
    credential.startDate = startDate;
    credential.iat = now*1000;
    credential.exp = exp;
    credential.sex = sex;
    credential.age = age;
    credential.geoHash = geoHash;
    credential.credentialType = credentialType;
    credential.reason = reason;
    credential.symptoms = symptoms;
    credential.status = true;
    credentials[hash][msg.sender] = credential;
    emit CredentialRegistered(hash, msg.sender, subjectId, startDate, credential.iat, sex, age, geoHash, credentialType, reason, symptoms);
    return true;
  }

  function revoke(bytes32 hash) onlyWhitelisted external returns(bool) {
    CovidMetadata storage credential = credentials[hash][msg.sender];

    require(credential.subjectId!=0, "credential hash doesn't exist");
    require(credential.status, "Credential is already revoked");  
     
    credential.status = false;  
    credentials[hash][msg.sender] = credential;
    emit CredentialRevoked(hash, msg.sender, now);
    return true;
  }
  
  function verify(bytes32 hash, address citizen) external view returns(bool isValid){
    CovidMetadata memory credential = credentials[hash][citizen];
    require(credential.subjectId!=0,"Credential hash doesn't exist");
    return credential.status;
  }
}