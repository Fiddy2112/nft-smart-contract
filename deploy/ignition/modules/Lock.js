const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("PandaCryptoModule", (m) => {
  const NameToken = m.getParameter("_name", "PandaCrypto");
  const SymbolToken = m.getParameter("_symbol", "PCT");

  const nft = m.contract("PandaCrypto", [NameToken, SymbolToken]);

  try {
    const mintNFT = nft.mint(
      "https://ipfs.io/ipfs/QmcHApmEiRYfB9HquNNEGPF65RFZNucsA6QFWZTrv8heo4"
    );

    console.log("NFT minted successfully : %", mintNFT);
  } catch (error) {
    console.error(error);
  }

  return { nft };
});

// #PandaCrypto - 0xC24da35b95ac2Aeb0ec5aD3b3Af848b344F545B7
