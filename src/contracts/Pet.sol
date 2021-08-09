pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Pet is ERC721 {
  // Pet = contract name, PET=symbol
    constructor() ERC721("Pet", "PET") public{
    }
}


git commit -m "Initializing a simple contract"
