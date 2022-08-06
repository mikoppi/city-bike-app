

const getJourneys = (req, res) => {
    res.status(200).json({ message: 'Get journeys'})
}

const setJourneys = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a journey")
    }

    res.status(200).json({ message: 'Set journeys'})
}


module.exports = {
    getJourneys,
    setJourneys
}