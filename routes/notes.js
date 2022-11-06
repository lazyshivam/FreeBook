const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");

//Route-1:Fetching user all notes using:GET:/api/notes/fetchnotes,login required
router.get("/fetchnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id }); //fetching all notes of the user using id
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server internal error occured");
  }
});

//Route-3:Adding user new notes using :POST:/api/notes/addnotes,login required
router.post(
  "/addnotes",
  fetchUser,[
    (body("title", "Please enter a valid title.").isLength({ min: 3 }), //validation of user entered value
    body("description", "Please enter a valid description.").isLength({
      min: 5,
    }))
  ],
  async (req, res) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const {title,description,tag}=req.body;  //extracting the value from body
        const note= new Notes({
            title,description,tag,user:req.user.id
        })
        const savenote=await note.save();  //user notes saved
        res.json(savenote);
        
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Server internal error occured");
    }

  }
);

module.exports = router;
