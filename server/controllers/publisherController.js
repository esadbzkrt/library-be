const { Publisher } = require("../../models/");

const newPublisher = async (req, res) => {
    const { publisherName } = req.body;
    try {
        const publisher = new Publisher({
            publisherName
        });
        await publisher.save();
        res.send(publisher);
    } catch (error) {
        console.log("error", error);
    }
};

    const getPublisher = (req, res) => {
    res.json({ message: "GET publisher" });
    }
    const getAllPublishers = async (req, res) => {
        try {
            const publishers = await Publisher.findAll();
            res.send(publishers);
        } catch (error) {
            console.log("error", error);
        }
    };


    const updatePublisher = (req, res) => {
    res.json({ message: "PUT publisher" });
    }
    const deletePublisher = (req, res) => {
    res.json({ message: "DELETE publisher" });
    }
    module.exports = {
    newPublisher,
    getPublisher,
    getAllPublishers,
    updatePublisher,
    deletePublisher,
    };

