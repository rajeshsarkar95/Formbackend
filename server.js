const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const productRoutes = require('./routes/ProductRoutes')

const app = express()
const PORT = 4000; 

app.use(express.json());
app.use(cors());

mongoose
  .connect('mongodb+srv://prorajeshsarkar:JMqamcp0LUvq6Afp@productsdb.brojg.mongodb.net/?retryWrites=true&w=majority&appName=productsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));

// Routes
app.use('/api/products', productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});