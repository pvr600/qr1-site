
export default async function handler(req, res) {
  // Accepts scan pings; no persistence in this demo.
  res.setHeader("content-type","application/json");
  res.status(204).send("");
}
