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

const show = (req, res) => {
    db.Post.findbyId(req.params.id, (err, foundPost) => {
        if (err)
            return res.status(400).json({
                message: "Status 400 Error!",
                error: err,
            });
        return res.status(200).json({
            message: "Success!",
            data: foundPost,
        });
    });
};

const create = (req, res) => {
    db.Post.create(req.body, (err, savedPost) => {
        if (err)
            return res.status(400).json({
                message: "Status 400 Error!",
                error: err,
            });
        return res.status(200).json({
            message: "Success!",
            data: savedPost,
        });
    });
};

const update = (req, res) => {
    db.Post.findbyIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if (err)
                return res.status(400).json({
                    message: "Status 400 Error",
                    error: err,
                });
            return res.status(200).json({
                message: "Success!",
                data: updatedPost,
            });
        }
    );
};

const destroy = (req, res) => {
    db.Post.findbyIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err)
            return res.status(400).json({
                message: "Status 400 Error",
                error: err,
            });
        return res.status(200).json({
            message: "success!",
            data: deletedPost,
        });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
}