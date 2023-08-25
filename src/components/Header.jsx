import React from "react";
// import HighlightIcon from "@mui/icons-material/Highlight";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Header = () => {
  return (
    <header>
      <h1>
        <TipsAndUpdatesIcon style={{marginRight: "1rem", fontSize: "xlarge"}} />
        Notes Keeper
      </h1>
    </header>
  );
};

export default Header;
