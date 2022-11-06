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
  fetchUser,
  [
    (body("title", "Please enter a valid title.").isLength({ min: 3 }), //validation of user entered value
    body("description", "Please enter a valid description.").isLength({
      min: 5,
    })),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { title, description, tag } = req.body; //extracting the value from body
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savenote = await note.save(); //user notes saved
      res.json(savenote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server internal error occured");
    }
  }
);




//Route-3:updating the user notes using :PUT:/api/notes/updatenote,login required
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  const { title, description, tag } = req.body; //destructuring the value from body

  //adding new updated notes in newNote object if exists
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  //finding notes which will be update
  let note = await Notes.findById(req.params.id);
  if (!note) return res.status(401).send("Not Found");

  //Matching the existing user id with logged in user id

  if (note.user.toString() !== req.user.id)
    return res.status(401).send("Not Found");

  //notes updated
  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
});





//Route-4:Delete the user notes using DELETE:/api/notes/deletenote,login required

router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id); //find the notes which will be delete
    if (!note) return res.status(401).send("Not Found");

    //Matching the existing user id with logged in user id
    if (note.user.toString() !== req.user.id)
      return res.status(401).send("Not Found");

    note = await Notes.findByIdAndDelete(req.params.id); //notes deleted
    res.json({ success: "Notes deleted successfully", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server internal error occured");
  }
});

module.exports = router;
