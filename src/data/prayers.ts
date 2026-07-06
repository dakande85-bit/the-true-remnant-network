export type PrayerItem = {
  title: string;
  category: string;
  summary: string;
};

export const prayerCategories = [
  "Repentance & Cleansing",
  "Protection",
  "Deliverance",
  "Family",
  "Breaking Evil Covenants",
  "Healing",
  "Purpose & Calling",
  "Night Prayers",
  "Morning Prayers",
  "Prayers Against Fear",
  "Prayers for Children"
];

export const prayerItems: PrayerItem[] = prayerCategories.map((category) => ({
  category,
  title: `${category} Prayer Guide`,
  summary:
    "A Christ-centred placeholder prayer card prepared for Scripture, confession, repentance, and steady dependence on God."
}));
