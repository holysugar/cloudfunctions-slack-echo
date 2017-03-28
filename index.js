exports.echo = function echo(req, res) {
  if (req.body.text) {
    response_body = {
      "response_type": "in_channel",
      "text": req.body.text
    }
    res.json(response_body);
  } else {
    res.status(400).end();
  }
};
