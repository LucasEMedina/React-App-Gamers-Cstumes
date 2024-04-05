import React from "react";
import usersApi from "./apiUsers";


function PersonajesList() {

    return (
      <>
      {usersApi.listUsers()}
      </>
    )
  }
  
  export default PersonajesList