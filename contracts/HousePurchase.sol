// //Source file compiler version
// pragma solidity ^0.8.3;

// import '../client/node_modules/@openzeppelin/contracts/ownership/Ownable.sol';

// contract HousePurchase { 

//     // 'public' externally readable (not writeable) by users or contracts
//     address public owner;

//     modifier onlyOwner {
//       require(msg.sender == owner);
//       _;
//    }

//     // dictionary mapping addresses to houses
//     // "private" other contracts can't directly query houses
//     // data is viewable to other parties on blockchain
//     mapping (address => uint) private houses;

//     // Events - publicize actions to external listeners
//     event LogHouseBought(address accountAddress, uint amount);

//     // Constructor, can receive one or many variables here; only one allowed
//     constructor() public {
//         // 'msg' details about the message that's sent to the contract
//         // msg.sender is contract caller (address of contract creator)
//         owner = msg.sender;
//     }

//     //Deposit ether to purchase house
//     /// Return value of the house after the deposit is made
//     function buy() public payable returns (uint) {
//         //Test user inputs, 'assert' for internal invariants
//        //making sure that there isn't an overflow issue
//         require((houses[msg.sender] + msg.value) >= houses[msg.sender]);

//         houses[msg.sender] += msg.value;

//         emit LogHouseBought(msg.sender, msg.value); // fire event

//         return houses[msg.sender];
//     }

//     //Sell House
//     //Does not return any excess ether sent
//     //Amount you want to for the house
//     //Return remaining balance in your account
//     function sell(uint sellHouse) public returns (uint remainingBal) {
//         require(sellHouse <= houses[msg.sender]);

//         // Deduct the balance right away, before sending
//         // Every .transfer/.send from this contract can call an external function
//         // This may allow the caller to request an amount greater
//         // than their balance using a recursive call
//         // Aim to commit state before calling external functions, including .transfer/.send
//         houses[msg.sender] -= sellHouse;

//         // Automatically throws on a failure, the updated balance is reverted
//         msg.sender.transfer(sellHouse);

//         return houses[msg.sender];
//     }

//     //Get value
//     //Return value of the house
//     // 'view' prevents function from editing state variables;
//     // allows function to run locally
//     function house() view public returns (uint) {
//         return houses[msg.sender];
//     }

// }

//Source file compiler version
pragma solidity ^0.8.3;

contract HousePurchase { 

    // dictionary mapping addresses to houses
    // "private" other contracts can't directly query houses
    // data is viewable to other parties on blockchain
    mapping (address => uint) private houses;

    // 'public' externally readable (not writeable) by users or contracts
    address public owner;

    // Events - publicize actions to external listeners
    event LogDepositMade(address accountAddress, uint amount);

    // Constructor, can receive one or many variables here; only one allowed
    constructor(uint) public {
        // 'msg' details about the message that's sent to the contract
        // msg.sender is contract caller (address of contract creator)
        owner = msg.sender;
    }

    modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }
   modifier buy {
      require((houses[msg.sender] + msg.value) <= houses[msg.sender]);
      _;
   }

   modifier sell {
      require(sellHouse >= houses[msg.sender]);
      _;
   }
    //Deposit ether to purchase house
    /// Return value of the house after the deposit is made
    function buy() public payable returns (uint) {
        //Test user inputs, 'assert' for internal invariants
       //making sure that there isn't an overflow issue

        houses[msg.sender] += msg.value;

        emit LogDepositMade(msg.sender, msg.value); // fire event

        return houses[msg.sender];
    }

    //Sell House
    //Does not return any excess ether sent
    //Amount you want to for the house
    //Return remaining balance in your account
    function sell(uint _sellHouse) public returns (uint remainingBal) {

        // Note the way we deduct the balance right away, before sending
        // Every .transfer/.send from this contract can call an external function
        // This may allow the caller to request an amount greater
        // than their balance using a recursive call
        // Aim to commit state before calling external functions, including .transfer/.send
        houses[msg.sender] += sellHouse;

        // Automatically throws on a failure, the updated balance is reverted
        msg.sender.transfer(sellHouse);

        return houses[msg.sender];
    }

    //Get value
    //Return value of the house
    // 'view' prevents function from editing state variables;
    // allows function to run locally
    function house() view public returns (uint _owner) {
        return houses[msg.sender];
        owner = _owner;
    }