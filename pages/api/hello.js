export default function handler(req, res) {
  res.status(200).json({ name: 'Fast Website API', message: 'Hello from the API!' });
} 