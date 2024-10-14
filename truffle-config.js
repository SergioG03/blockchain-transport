// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a managed Ganache instance for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Configuración para la red de desarrollo local (Ganache)
    development: {
      host: "127.0.0.1",     // Localhost
      port: 7545,            // Puerto de Ganache (predeterminado es 7545)
      network_id: "*",       // Cualquier ID de red
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configura el compilador de Solidity
  compilers: {
    solc: {
      version: "0.8.21",      // Usa la versión exacta de Solidity
      settings: {
        optimizer: {
          enabled: true,      // Habilitar optimización
          runs: 200           // Número de ejecuciones para la optimización
        },
        evmVersion: "istanbul" // Especificar la versión de la EVM
      }
    }
  },

  // Truffle DB está deshabilitado por defecto.
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "indexeddb",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a managed Ganache instance for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Configuración para la red de desarrollo local (Ganache)
    development: {
      host: "127.0.0.1",     // Localhost
      port: 7545,            // Puerto de Ganache (predeterminado es 7545)
      network_id: "*",       // Cualquier ID de red
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configura el compilador de Solidity
  compilers: {
    solc: {
      version: "0.8.21",      // Usa la versión exacta de Solidity
      settings: {
        optimizer: {
          enabled: true,      // Habilitar optimización
          runs: 200           // Número de ejecuciones para la optimización
        },
        evmVersion: "istanbul" // Especificar la versión de la EVM
      }
    }
  },

  // Truffle DB está deshabilitado por defecto.
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "indexeddb",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
