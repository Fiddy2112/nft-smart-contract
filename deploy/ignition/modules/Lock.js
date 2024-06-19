const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("PandaCryptoModule", (m) => {
  const NameToken = m.getParameter("_name", "PandaCrypto");
  const SymbolToken = m.getParameter("_symbol", "PCT");

  const nft = m.contract("PandaCrypto", [NameToken, SymbolToken]);

  return { nft };
});

//#PandaCrypto - 0x766Ad5f66A4d9BF93c075b7e6e09F985e5a7CBa4
