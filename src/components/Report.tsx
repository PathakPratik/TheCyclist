// import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

const Report = () => {

  const handleImageChange = () => {
    alert("success")
  }

  return (
    <div>
        <label>
        <input style={{display: 'none'}} type="file" accept="image/*" capture="environment" onChange={handleImageChange}></input>
        <Button variant="contained" style={{marginTop: '4rem'}} color="primary" >Report Issue</Button>
        </label>
    </div>
  );
}
 
export default Report;