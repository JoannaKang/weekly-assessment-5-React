const router = require('express').Router();
const controller = require('./controller');

router.get('/vote', controller.voteListfromDB);
router.put('/vote/:id/:dir', controller.voteUpandDown);
router.post('/vote', controller.voteListCreate);
router.delete('/vote/:id', controller.voteListDelete);

module.exports = router;