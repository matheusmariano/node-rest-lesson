module.exports = {
  index(request, response) {
    const subject = request.body.subject || 'world';

    response.json({
      data: {
        hello: subject,
      },
    });
  },
};
