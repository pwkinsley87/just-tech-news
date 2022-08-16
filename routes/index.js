const router = require('express').Router();

const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;



