const authModel = require("../Models/Authmodel");
const bookModel = require("../Models/Bookmodel");

const datasave = async (req, res) => {
  const { author, bookName, price, description } = req.body;

  try {
    const createdAuthor = await authModel.create({ author });

    const book = await bookModel.create({
      bookName,
      price,
      description,
      authid: createdAuthor._id
    });

    console.log('Book and author saved:', book);

    res.status(200).json({
      message: "Data saved successfully",
      book
    });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Server error while saving data' });
  }
};


const getAllBooks = async (req, res) => {
    const books = await bookModel.find().populate('authid');
    res.status(200).json(books);
  };

module.exports = { datasave ,  getAllBooks};
