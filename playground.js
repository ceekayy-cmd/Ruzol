let collectionNFT = [];


function mintNFT(_brand,_color,_size) {
const shoes = {
brand: _brand,
color: _color,
size: _size,
}
collectionNFT.push(shoes);}


function listNFTs() {
    for(let i = 0; i <
collectionNFT.length; i++) {
    console.log(collectionNFT[i]);
    console.log("\nModel Number: " + (i + 1)); 
 }
}

function getTotalSupply() {
    console.log("TOTAL NFT: " + 
collectionNFT.length);
}

mintNFT("ADIDAS","WHITE",9);
mintNFT("NIKE","BLACK",8);
mintNFT("VANS","BROWN",6);
mintNFT("NEW BALANCE","WHITE",9);
mintNFT("JORDAN","RED",7);

listNFTs();
getTotalSupply();
