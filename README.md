# Cekayy's Token
this solidty program is about gas token, Whenever any transaction on Ethereum is run, it requires gas in accordance with the amount of computational resources used to compute the operations performed by the transaction.

## Getting Started

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file and after that name it, so now i can start coding

```javascript
pragma solidity ^0.8.18;

contract MyToken {

    string public tokenName = "Ceekay";
    string public tokenAbbrv = "Ck";
    uint public totalSupply = 0;

    
    mapping(address => uint) public balances;

    
    function mint (address _address, uint _value) public {
        totalSupply += _value;
        balances [_address] += _value;
    }

    function burn (address _address, uint _value) public {
        if (balances[_address] >= _value) {
            totalSupply -= _value;
            balances[_address] -= _value;
        }
    }
}

```

after the coding you need to compile it, you'll see in the left part at the middle there's a solidity compiler "click it" after you click it you will see a auto compile click it and under it there was a compile sol "click it to"

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "m3.sol" contract from the dropdown menu, and then click on the "Deploy" button.

Once the contract is deployed, go to the acccount and copy it after that go to the deployed contacts before pasting it check your total supply first, so when your than go to the value and input the value that you want after that go to the mint and paste the address or the account that you copy and input the value under it after that check the total supply and after that the value that you input in the mint is the same in your total supply 

but burn is the same like mint but burn  substract  burn means burn it has the same procedure like mint 

## Authors

Christian Kurl Ruzol
8215638@ntc.edu.ph

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

