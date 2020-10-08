import React from "react";

import { useStyles } from "../../constants/mainContentConsts";

const MainContent = (props) => {
  const classes = useStyles();
  return (
    <main className="container">
      <div className={classes.container}>
        <h1>Main</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          corporis soluta sint dolore cupiditate? Accusamus unde a ea autem
          excepturi. Id architecto illo sequi, provident ratione exercitationem
          eum vitae culpa.
        </p>
      </div>
    </main>
  );
};

export default MainContent;
