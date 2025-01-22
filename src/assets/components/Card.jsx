import React from "react";

const Card = ({ gameData, localdata }) => {
  console.log(localdata, "aaua");
  return (
    <div className="Gamecard">
      {gameData && (
        <>
          <h2>
            Player:{" "}
            {gameData.user_name ? gameData.user_name : localdata.user_name}
          </h2>
          <h2>GiftCard: {gameData.prize ? gameData.prize : localdata.prize}</h2>
          <h2>
            Points :{" "}
            {gameData.total_counter_score
              ? gameData.total_counter_score
              : localdata.total_counter_score}
          </h2>
        </>
      )}
    </div>
  );
};

export default Card;
