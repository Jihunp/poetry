const db = require("../models/Post")


const index = (req, res) => {
    db.Post.find().exec((err, allPosts) => {
        if (err)
            return res.status(400).json({
                message: "Failed",
                error: err,
            });
        return res.status(200).json({
            message: "success",
            data: allPosts,
        });
    });
};

// async function index(req, res) {
//     try{
//         res.json(await Post.find({}));
//     } catch (error) {
//         res.status(400).json(error);
//     }
// }

module.exports = {
    index,
}