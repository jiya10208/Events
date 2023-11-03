import { insertDocument, getAllDocuments } from "../../../helpers/db-util";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://jiya:jiyaisgreat@cluster0.djxiiwy.mongodb.net/?retryWrites=true&w=majority"
  );

  const eventId = req.query.eventId;

  const db = client.db("events");

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    try {
      const result = await db.collection(collection).insertOne(document);

      newComment._id = result.insertedId;
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }

  client.close();
}

export default handler;
