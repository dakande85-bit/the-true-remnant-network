export type ResourceType = "Book" | "Music" | "Audio Teaching" | "Audio Bible" | "Devotional" | "Bible Tool";

export type ResourceItem = {
  id: string;
  title: string;
  creator: string;
  type: ResourceType;
  topic: string;
  summary: string;
  url: string;
  level: "Starter" | "Recommended" | "Reviewed";
  duration?: string;
  imageUrl?: string;
  imageAlt?: string;
};

const logoImage = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
const openLibraryCover = (isbn: string) => `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

export const resourceItems: ResourceItem[] = [
  {
    id: "book-the-unseen-realm",
    title: "The Unseen Realm",
    creator: "Michael S. Heiser",
    type: "Book",
    topic: "Biblical Theology",
    summary: "A serious biblical-theology resource on the Bible's unseen realm language, divine council passages and the worldview of Scripture.",
    url: "https://www.amazon.com/dp/1577995562",
    level: "Recommended",
    imageUrl: openLibraryCover("1577995562"),
    imageAlt: "Cover of The Unseen Realm by Michael S. Heiser"
  },
  {
    id: "book-supernatural",
    title: "Supernatural",
    creator: "Michael S. Heiser",
    type: "Book",
    topic: "Biblical Theology",
    summary: "A shorter companion to The Unseen Realm, useful as a first step before deeper biblical-theology study.",
    url: "https://www.amazon.com/dp/1577995589",
    level: "Recommended",
    imageUrl: openLibraryCover("1577995589"),
    imageAlt: "Cover of Supernatural by Michael S. Heiser"
  },
  {
    id: "book-angels-heiser",
    title: "Angels",
    creator: "Michael S. Heiser",
    type: "Book",
    topic: "Heavenly Host",
    summary: "A focused study on what Scripture says about God's heavenly host, written to keep the reader inside biblical categories.",
    url: "https://www.amazon.com/dp/1683591046",
    level: "Reviewed",
    imageUrl: openLibraryCover("9781683591047"),
    imageAlt: "Cover of Angels by Michael S. Heiser"
  },
  {
    id: "book-mere-christianity",
    title: "Mere Christianity",
    creator: "C. S. Lewis",
    type: "Book",
    topic: "Apologetics",
    summary: "A classic introduction to Christian belief, moral reasoning and the central claims of the faith.",
    url: "https://www.amazon.com/dp/0060652926",
    level: "Recommended",
    imageUrl: openLibraryCover("0060652926"),
    imageAlt: "Cover of Mere Christianity by C. S. Lewis"
  },
  {
    id: "bibleproject-how-to-read",
    title: "How to Read the Bible",
    creator: "BibleProject",
    type: "Audio Teaching",
    topic: "Biblical Literacy",
    summary: "Animated teaching series on literary styles, plot, poetry, prophecy, parables, letters and apocalyptic literature in Scripture.",
    url: "https://bibleproject.com/videos/collections/how-to-read-the-bible/",
    level: "Recommended",
    duration: "Video series",
    imageUrl: logoImage("bibleproject.com"),
    imageAlt: "BibleProject logo"
  },
  {
    id: "audio-bible-david-suchet-niv",
    title: "NIV Audio Bible read by David Suchet",
    creator: "Bible Gateway / David Suchet",
    type: "Audio Bible",
    topic: "Scripture Listening",
    summary: "Authorised audio Bible listening link for Scripture intake. Link out rather than hosting audio files directly.",
    url: "https://www.biblegateway.com/audio/suchet/niv/Gen.1",
    level: "Recommended",
    duration: "Full Bible audio",
    imageUrl: logoImage("biblegateway.com"),
    imageAlt: "Bible Gateway logo"
  },
  {
    id: "blue-letter-bible",
    title: "Blue Letter Bible",
    creator: "Blue Letter Bible",
    type: "Bible Tool",
    topic: "Study Tools",
    summary: "Bible search, lexical tools, concordance links, commentaries and study resources for deeper Scripture work.",
    url: "https://www.blueletterbible.org/",
    level: "Recommended",
    imageUrl: logoImage("blueletterbible.org"),
    imageAlt: "Blue Letter Bible logo"
  },
  {
    id: "step-bible",
    title: "STEP Bible",
    creator: "Tyndale House Cambridge",
    type: "Bible Tool",
    topic: "Bible Study",
    summary: "A study environment for Bible text, cross references, original-language tools and structured Scripture exploration.",
    url: "https://www.stepbible.org/",
    level: "Recommended",
    imageUrl: logoImage("stepbible.org"),
    imageAlt: "STEP Bible logo"
  },
  {
    id: "my-utmost-devotional",
    title: "My Utmost for His Highest",
    creator: "Oswald Chambers / Our Daily Bread Ministries",
    type: "Devotional",
    topic: "Daily Devotion",
    summary: "Daily devotional readings from Oswald Chambers for personal reflection and discipleship content.",
    url: "https://utmost.org/",
    level: "Reviewed",
    imageUrl: logoImage("utmost.org"),
    imageAlt: "My Utmost for His Highest logo"
  },
  {
    id: "cityalight-resources",
    title: "CityAlight Music Resources",
    creator: "CityAlight",
    type: "Music",
    topic: "Worship",
    summary: "Song resources for congregational worship, including lyrics, charts and church-use materials.",
    url: "https://cityalight.com/resources/",
    level: "Reviewed",
    duration: "Songs and resources",
    imageUrl: logoImage("cityalight.com"),
    imageAlt: "CityAlight logo"
  }
];
