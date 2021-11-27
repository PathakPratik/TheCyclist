// import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { TextareaAutosize } from "@mui/material";

const Report = () => {

  const handleImageChange = () => {
    alert("Uploaded Successfully!")
  }

  const handleSubmit = () => {
    alert("Submitted Successfully!")
  }

  return (
    <div>
        <div style={{ marginTop: '2rem' }}>Faced an issue while while cycling?</div>
        <div>Report now</div>
        <div style={{ marginTop: '2rem' }}><b>Upload picture</b></div>
        <label>
        <input style={{display: 'none'}} type="file" accept="image/*" capture="environment" onChange={handleImageChange}></input>
        <Button variant="contained" style={{margin: '0.5rem auto', display: 'block'}} color="primary" >Use Camera</Button>
        </label>
        <div style={{ marginTop: '2rem' }}><b>Describe Issue</b></div>
        <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Please describe in as much detail as possible"
            style={{ width: 200, marginTop: '0.5rem' }}
        />
        <Button variant="contained" style={{margin: '2rem auto', display: 'block', width: '14rem'}} color="primary" 
        onClick={handleSubmit}>
            Submit
        </Button>
    </div>
  );
}
 
export default Report;