# BFHL Task API

A simple Node.js and Express API that processes an array of mixed data (numbers, alphabets, special characters) and returns a formatted response.

## 👤 Author

**Khushi**

## 📁 Project Structure

```
├── controllers
│   └── bfhlController.js
├── utils
│   └── helpers.js
├── routes
│   └── bfhlRoutes.js
├── app.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

* Node.js installed
* Postman for testing
  <img width="1918" height="1015" alt="image" src="https://github.com/user-attachments/assets/dd4c484c-e421-41cc-93c6-70cdf256b60e" />


### Installation

```bash
git clone https://github.com/Khushi7903/bfhl-backend.git
npm install
```

### Run the Server

```bash
npm start
```

## 📫 API Endpoint

### POST `/bfhl`

Send a JSON payload containing an array of strings/numbers.

#### Example Request:

```json
{
  "data": ["A", "Y", "B", "2", "4", "92", "5", "&", "-", "*"]
}
```

#### Example Response:

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

## 🧠 Logic Description

* `even_numbers`: All numeric strings that are even
* `odd_numbers`: All numeric strings that are odd
* `alphabets`: Extracted uppercase characters
* `special_characters`: Non-alphanumeric characters
* `sum`: Sum of all numeric values
* `concat_string`: Concatenation of all alphabets in reverse alphabetical order

## 🛠 Technologies Used

* Node.js
* Express.js


