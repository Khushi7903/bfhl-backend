const { processData } = require('../utils/helpers');

const handleBFHL = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input. "data" must be an array.'
      });
    }

    const result = processData(data);

    const response = {
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      ...result
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response)); 

  } catch (error) {
    console.error('[BFHL Controller Error]', error.message);

    res.status(500).json({
      is_success: false,
      message: 'Internal Server Error. Please try again later.'
    });
  }
};

module.exports = { handleBFHL };
