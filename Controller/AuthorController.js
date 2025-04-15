const datasave = async (req, res) => {
    console.log('Received data:', req.body);
    res.send("Data received successfully");
}


module.exports = {
    datasave
}