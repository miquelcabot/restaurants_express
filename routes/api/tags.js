const express = require('express');
const router = express.Router();

// Tags Model
const Tag = require('../../models/Tag')

// @route   GET api/tags
// @desc    Get all tags
// @access  Public
router.get('/', (req, res) => {
    Tag.find()
        .sort({ name: 1 })
        .then(items => res.json(items));
});

// @route   POST api/tags
// @desc    Create a tag
// @access  Public
router.post('/', (req, res) => {
    const newTag = new Tag({
        name: req.body.name
    });
    newTag.save().then(item => res.json(item));
});

// @route   DELETE api/tags
// @desc    Delete a tag
// @access  Public
router.delete('/:id', (req, res) => {
    Tag.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;