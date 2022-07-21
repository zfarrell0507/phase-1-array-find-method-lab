// let superbowlWin = record.find(record => record.result === "W")


let superbowlWin = (record) => {
    const result = record.find(record => record.result === "W" );
    return !!result ? result.year : undefined;
}
