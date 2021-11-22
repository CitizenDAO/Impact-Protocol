import { genKeyPairAndSeed } from "skynet-js";

const { publicKey, privateKey, seed } = genKeyPairAndSeed();
console.log(`
  PublicKey: ${publicKey}
  PrivateKey: ${privateKey}
  Seed: ${seed}
  `);