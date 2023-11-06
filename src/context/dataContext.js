import { createContext, useContext, useState } from "react";

const PlayerDataContext = createContext();

export const PlayerDataContextProvider = ({ children }) => {
  // Define variables and functions that you want to share
  const [playerData, setPlayerData] = useState([
    { name: "No data available.", amount: 0 },
  ]);
  const [totalInvested, setTotalInvested] = useState(0);
  const API_URL = "/api/playerData/route";

  // Create a function to update playerData
  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const jsonData = await response.json();
        setPlayerData(jsonData);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  }

  function addMoney() {
    playerData.map((entries) => {
      setTotalInvested(
        (prevTotalInvested) => prevTotalInvested + entries.amount
      );
    });
  }

  async function deleteData() {
    try {
      await fetch(API_URL, {
        method: "DELETE",
      });
      setData([]);
      setTotalInvested(0);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <PlayerDataContext.Provider
      value={{
        addMoney,
        fetchData,
        playerData,
        deleteData,
        totalInvested,
      }}
    >
      {children}
    </PlayerDataContext.Provider>
  );
};

export const usePlayerDataContext = () => {
  return useContext(PlayerDataContext);
};
