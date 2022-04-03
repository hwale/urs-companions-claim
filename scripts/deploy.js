const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("URSCompanions");
    const nftContract = await nftContractFactory.deploy("URSCompanion", "URSCOMP", "0x08f0b2a4351514e63e9e03a661adfe58d463cfbc");
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    // Call the function.
    // let txn = await nftContract.toggleClaimOpen();
    // Wait for it to be mined.
    // await txn.wait()
    // console.log("claim active")
  
    // Call the function.
    // let txn = await nftContract.claim([9])
    // // Wait for it to be mined.
    // await txn.wait()
    // console.log("Minted NFT #9")
  
    // txn = await contract.makeAnEpicNFT()
    // // Wait for it to be mined.
    // await txn.wait()
    // console.log("Minted NFT #5")
};
  
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();