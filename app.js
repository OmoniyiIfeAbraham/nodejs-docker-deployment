const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node.js Docker Deployment</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f7fb;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
          }

          .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
            text-align: center;
          }

          h1 {
            color: #232f3e;
          }

          p {
            color: #555;
          }

          .status {
            color: green;
            font-weight: bold;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h1>Node.js Docker Deployment</h1>
          <p class="status">Application is running successfully 🚀</p>
          <p>Deployed using Node.js, Docker, Docker Hub and AWS EC2.</p>
        </div>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});