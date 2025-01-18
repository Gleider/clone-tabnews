function status(request, response) {
  response.status(200).json({ test: true });
}

export default status;
