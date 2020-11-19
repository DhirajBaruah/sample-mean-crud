const { Router } = require("express");
const router = Router();

const { 
  getAllPersons, 
  createPerson, 
  editPerson, 
  deletePerson 
} = require('../controllers/persons');

//params

/**
 * @ route   GET /person
 * @ desc    Displays a table with a list of people
 * @ access  Public
 */
router.get("/",getAllPersons);

/**
 * @ route   POST /person
 * @ desc    a form to create a single person
 * @ access  Public
 */
router.post("/", createPerson);

/**
 * @ route   PUT /person/{id}
 * @ desc    a form through which a person with a specified id parameter can be edited and updated
 * @ access  Public
 */
router.put("/:personId", editPerson);

/**
 * @ route   DELETE /person/{id}
 * @ desc    Displays a page through which a person with a specified id can be deleted
 * @ access  Public
 */
router.delete("/:personId", deletePerson);



module.exports = router;