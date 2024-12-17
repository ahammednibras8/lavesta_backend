const Artist = require("../models/Artist")

exports.addArtist = async (req, res) => {
    try {
        const artist = new Artist(req.body);
        await artist.save();
        res.status(201).json(artist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.checkAvailability = async (req, res) => {
    try {
        const {id, date, time} = req.query;

        const artist = await Artist.findOne({id});
        if(!artist) return res.status(404).json({message: 'Artist Not Found'});

        const available = artist.availability.some(
            (slot) => slot.date === date && slot.timeSlots.includes(time)
        );

        res.json({available});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};