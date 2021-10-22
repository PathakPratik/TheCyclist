const saveData = (position:any) => {
    
    let locations = localStorage.getItem("locations") || "[]";

    locations = JSON.parse(locations);

    // @ts-ignore
    locations.push(position);

    localStorage.setItem("locations", JSON.stringify(locations));
}

export { saveData }