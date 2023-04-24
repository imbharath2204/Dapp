import React,{useState, useEffect} from "react";
function MetamaskConnection() {
    const [address, setaddress] = useState('Connect to wallet');
    // Styling
    const walletDetails = {
       height : "250px",
       width : "500px",
       border : "solid 2px black",
       paddingLeft : "100px",
       paddingTop: "50px",
       backgroundColor: "grey"
    }
  const metamaskconnection = async () => {
         if(typeof window.ethereum !== 'undefined') {
             console.log("Installed metamask");
             const accounts = await window.ethereum.request({
                method : 'eth_requestAccounts'
             })
             setaddress(accounts[0]);
         } else {
            alert("no metamask.... please install");
         }
  }

  return (
   <div style={walletDetails}>
    <button onClick={metamaskconnection}>Connect to Wallet</button>
    <p style={{color:"whitesmoke"}}>Wallet Address : {address}</p>
  </div>
  );
}

export default MetamaskConnection;
 