const getRecordId = (timestamp: number, UserId: number, TripId: number) => {
    return timestamp + UserId + TripId + Math.floor(Math.random()*90000) + 10000;
}

export { getRecordId }