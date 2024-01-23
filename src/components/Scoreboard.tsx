import React, { useState } from "react";

const Scoreboard = () => {
    const [isData, setIsData] = useState<boolean>(false)
  return (
    <>
      <h1>Scoreboard</h1>
      {!isData && <p>There are no scores yet. Play a few games first!</p>}
    </>
  );
};

export default Scoreboard;
