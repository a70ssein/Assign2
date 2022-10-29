let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to  Model
//let contact = require('../models/contact');

let passport = require('passport');

let contactController = require('../controllers/contact');




// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the  page - READ Operation */
router.get('/',  contactController.displaycontactList);


/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/update/:id', requireAuth, contactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/update/:id', requireAuth, contactController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;