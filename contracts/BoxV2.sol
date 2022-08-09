// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Box.sol";

contract BoxV2 is Box {
   function increment() public {
      store(retrieve()+1);
   }
}