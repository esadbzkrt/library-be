const newPublisher = (req, res) => {
    res.json({ message: "POST new publisher" });
    }
    const getPublisher = (req, res) => {
    res.json({ message: "GET publisher" });
    }
    const getAllPublishers = (req, res) => {
    res.json({ message: "GET all publishers" });
    }
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
    