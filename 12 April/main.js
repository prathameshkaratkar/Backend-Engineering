import Express, { json } from "express";
import { model, connect, Schema } from "mongoose";

// It will connect to DB:shivam or connect & create DB:shivam if not exists
// mongodb://machineURL:runningPort/dbName
connect("mongodb://127.0.0.1:27017/shivam")
  .then(() => {
    console.log("Database connected successfully");
    // Yahaan koi aur operation kar sakte ho, jaise database se data retrieve karna
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// Schema - Strict - It's a blueprint
// Default - Default value to get inserted if not passed anything
//const NotesV1 = new Mongoose.model();

const NoteSchema = Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const Notes = new model("note", NoteSchema);

const app = Express();
const PORT = 4001;

app.use(json());

app.get("/", (req, res) => {
  res.send({ message: "Welcome to Notes App" });
});

app.post("/note", async (req, res) => {
  try {
    // Logic to insert note to DB
    const { title, description } = req.body;
    const note = new Notes({ title, description });
    const result = await note.save();
    res.send(result);
  } catch (err) {
    console.log("Err: ", err);
    res.send({
      data: {},
      meta: { message: "Unable to take your request. Please try later" }
    });
  }
});

app.get("/notes", async (req, res) => {
  // Logic to load all notes from DB
});

app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`);
});
