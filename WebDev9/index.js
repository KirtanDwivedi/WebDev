import express from 'express';
import router from './route.js';

const app = express();
const port = 3000;
// 1. Add this to enable POST request body parsing
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/', router);
app.use('/images', express.static('images'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// http body parser and cookie parser , mongoose setup - post put everything
// using postman for api checking
// express- session
// npm - jwt (json web token) or bycrypt.js
// status codes
// error handling- synchronous and asychronous

/*
/project-root
|-- /src
|   |-- /routes         # API routes
|   |-- /controllers    # Handles request logic
|   |-- /models         # Database models
|   |-- /middlewares    # Custom middlewares
|   |-- /config         # Configuration files
|   |-- /utils          # Helper functions
|-- /public             # Static assets (CSS, images)
|-- /views              # Views (if using templating engine)
|-- /node-modules       # Dependencies
|-- . env               # Environment variables
|-- package . json      # Project metadata & dependencies
|-- server . js         # Entry point

*/