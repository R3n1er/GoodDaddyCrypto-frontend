import axios from "axios";


// Fonction pour récupérer le prix d'un asset avec API Coingecko 
export const getCryptoPriceData = async () => {
  try {
    // This is where the api call will go
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoAssetId}&vs_currencies=usd`);
    // Gestion du success
    console.log(response);
    return response.bitcoin.us;
  } 
  
  // gestion des erreurs
  catch (error) {
    console.error(error);
  }
};
