
export default async function handler(req, res) {
  // Accepts scan pings; demo no-op
  res.setHeader("content-type","application/json");
  res.status(204).send("");
}
