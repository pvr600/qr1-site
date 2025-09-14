
export default async function handler(req, res) {
  const data = {
    byDay: {"2025-08-31": 41, "2025-09-01": 47, "2025-09-02": 27, "2025-09-03": 29, "2025-09-04": 31, "2025-09-05": 27, "2025-09-06": 23, "2025-09-07": 23, "2025-09-08": 32, "2025-09-09": 35, "2025-09-10": 11, "2025-09-11": 47, "2025-09-12": 21, "2025-09-13": 37, "2025-09-14": 24},
    byDevice: {"Mobile": 120, "Desktop": 60, "Tablet": 20},
    byCity: {"Johannesburg": 18, "Pretoria": 14, "Cape Town": 12, "Durban": 9},
    byCampaign: {"vcard": 22, "menu": 17, "product-a": 12, "Unlabeled": 5},
    recent: [{"ts": "2025-09-14 10:41:00", "city": "Pretoria", "device": "iPhone Safari", "campaign": "vcard"}, {"ts": "2025-09-14 09:15:00", "city": "Johannesburg", "device": "Chrome", "campaign": "menu"}]
  };
  res.setHeader("content-type","application/json");
  res.setHeader("cache-control","no-store");
  res.status(200).send(JSON.stringify(data));
}
