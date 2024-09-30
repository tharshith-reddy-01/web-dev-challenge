// server.js

const express = require("express"); // Import express framework
const bodyParser = require("body-parser"); // Import body-parser middleware

const app = express(); // Create an instance of express
const port = 3000; // Define the port to run the server

// Middleware to parse JSON body
app.use(bodyParser.json());

// GET request - responds with a simple message
app.get("/", (req, res) => {
    res.send("Hello, World!"); // Send response for GET request
});

// POST request - receives and processes JSON data
app.post("/submit", (req, res) => {
    const data = req.body; // Access the parsed body
    console.log(data); // Print request body to console for debugging
    res.send(`Received data: ${JSON.stringify(data)}`); // Send confirmation response
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log server status
});

// Questions and Answers for Practice Problems

// 1. Create a GET endpoint that returns a greeting message.
app.get("/greet", (req, res) => {
    res.send("Hello, User!");
});

// 2. Create a POST endpoint that echoes back the received JSON data.
app.post("/echo", (req, res) => {
    res.send(req.body);
});

// 3. Create a GET endpoint that takes a name as a route parameter and returns a personalized greeting.
app.get("/greet/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
});

// 4. Create a POST endpoint that calculates the sum of two numbers sent in the request body.
app.post("/sum", (req, res) => {
    const sum = req.body.a + req.body.b;
    res.send(`Sum is: ${sum}`);
});

// 5. Create a GET endpoint that returns the current server time.
app.get("/time", (req, res) => {
    res.send(`Current server time is: ${new Date().toLocaleTimeString()}`);
});

// 6. Create a POST endpoint that takes user information and returns a confirmation message.
app.post("/register", (req, res) => {
    const { username, email } = req.body;
    res.send(`User ${username} registered with email ${email}`);
});

// 7. Create a GET endpoint that returns a list of items.
app.get("/items", (req, res) => {
    const items = ["Item1", "Item2", "Item3"];
    res.send(items);
});

// 8. Create a POST endpoint that adds a new item to the list and returns the updated list.
let items = ["Item1", "Item2", "Item3"];
app.post("/add-item", (req, res) => {
    items.push(req.body.item);
    res.send(items);
});

// 9. Create a GET endpoint that returns a random joke.
app.get("/joke", (req, res) => {
    const jokes = [
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    ];
    res.send(jokes[Math.floor(Math.random() * jokes.length)]);
});

// 10. Create a POST endpoint that receives an array of numbers and returns their average.
app.post("/average", (req, res) => {
    const numbers = req.body.numbers;
    const avg = numbers.reduce((a, b) => a + b) / numbers.length;
    res.send(`Average is: ${avg}`);
});

// 11. Create a GET endpoint that returns a welcome message with a timestamp.
app.get("/welcome", (req, res) => {
    res.send(`Welcome! Timestamp: ${Date.now()}`);
});

// 12. Create a POST endpoint that reverses a string sent in the request body.
app.post("/reverse", (req, res) => {
    const reversed = req.body.string.split("").reverse().join("");
    res.send(`Reversed string: ${reversed}`);
});

// 13. Create a GET endpoint that returns the total number of requests received.
let requestCount = 0;
app.use((req, res, next) => {
    requestCount++;
    next();
});
app.get("/request-count", (req, res) => {
    res.send(`Total requests received: ${requestCount}`);
});

// 14. Create a POST endpoint that checks if a number is even or odd.
app.post("/even-odd", (req, res) => {
    const isEven = req.body.number % 2 === 0;
    res.send(isEven ? "It's even!" : "It's odd!");
});

// 15. Create a GET endpoint that returns a motivational quote.
app.get("/quote", (req, res) => {
    res.send("Believe you can and you're halfway there.");
});

// 16. Create a POST endpoint that takes an object and returns its keys and values.
app.post("/object-info", (req, res) => {
    const object = req.body;
    const info = Object.entries(object)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
    res.send(`Object info: ${info}`);
});

// 17. Create a GET endpoint that simulates a delay and returns a message.
app.get("/delay", (req, res) => {
    setTimeout(() => {
        res.send("This response was delayed!");
    }, 3000);
});

// 18. Create a POST endpoint that combines two strings sent in the request body.
app.post("/combine", (req, res) => {
    const combined = req.body.str1 + " " + req.body.str2;
    res.send(`Combined string: ${combined}`);
});

// 19. Create a GET endpoint that returns a list of supported HTTP methods.
app.get("/methods", (req, res) => {
    res.send("Supported methods: GET, POST");
});

// 20. Create a POST endpoint that takes a number and returns its square.
app.post("/square", (req, res) => {
    const square = req.body.number * req.body.number;
    res.send(`Square is: ${square}`);
});
