const User = require('../models/user');

module.exports = {
  show(request, response) {
    const id = parseInt(request.params.id);

    User.findById(id, {
      raw: true,
    }).then((user) => {
      if (!user) {
        return response.status(404).json();
      }

      return response.json({
        data: user,
      });
    });
  },
};
