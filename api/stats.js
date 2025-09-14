
export default async function handler(req, res) {
  const data = {
    byDay: {"2025-08-31": 62, "2025-09-01": 35, "2025-09-02": 39, "2025-09-03": 34, "2025-09-04": 31, "2025-09-05": 56, "2025-09-06": 36, "2025-09-07": 71, "2025-09-08": 48, "2025-09-09": 68, "2025-09-10": 31, "2025-09-11": 68, "2025-09-12": 61, "2025-09-13": 62, "2025-09-14": 46},
    byDevice: {"Mobile": 160, "Desktop": 80, "Tablet": 24},
    byCity: {"Johannesburg": 22, "Pretoria": 18, "Cape Town": 14, "Durban": 10},
    byCampaign: {"vcard": 28, "menu": 21, "product-a": 15, "Unlabeled": 7},
    recent: [{"ts": "2025-09-14 10:41:00", "city": "Pretoria", "device": "iPhone Safari", "campaign": "vcard"}, {"ts": "2025-09-14 09:15:00", "city": "Johannesburg", "device": "Chrome", "campaign": "menu"}]
  };
  res.setHeader("content-type","application/json");
  res.setHeader("cache-control","no-store");
  res.status(200).send(JSON.stringify(data));
}
