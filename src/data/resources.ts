export type ResourceType =
  | "person"
  | "ministry"
  | "youtube-channel"
  | "podcast"
  | "music"
  | "book"
  | "church"
  | "mission"
  | "prayer"
  | "blog"
  | "resource";

export type ResourceStatus = "featured" | "recommended" | "resource" | "review-needed";

export type Resource = {
  id: string;
  name: string;
  slug: string;
  category: string;
  resourceType: ResourceType;
  summary: string;
  bio?: string;
  testimony?: string;
  whyIncluded?: string;
  topics: string[];
  links: {
    website?: string;
    youtube?: string;
    spotify?: string;
    applePodcast?: string;
    instagram?: string;
    books?: string;
    donation?: string;
  };
  image?: string;
  status: ResourceStatus;
};

export const resourceCategories = [
  "Men & Women of God",
  "Teachings",
  "Spiritual Warfare Prayers",
  "Apologetics",
  "Podcast & Interviews",
  "Books & Audiobooks",
  "Worship & Music",
  "Missions",
  "Testimonies",
  "Devotionals",
  "Bible Study",
  "Discernment",
  "End Times & Deception",
  "Christian Living"
];

export const resources: Resource[] = [
  {
    id: "russ-dizdar",
    name: "Russ Dizdar",
    slug: "russ-dizdar",
    category: "Men & Women of God",
    resourceType: "person",
    status: "featured",
    summary: "Bible teacher and deliverance-focused ministry resource connected with Shatter the Darkness and Preemption Broadcast.",
    bio:
      "Russ Dizdar's official site says he was ordained to ministry in 1978, served as senior pastor of four churches, founded Shatter the Darkness, and directed Preemption Broadcast.",
    whyIncluded:
      "Included for study around spiritual warfare, deliverance, prayer, and discernment, with the reminder that every resource should be tested by Scripture.",
    topics: ["Spiritual Warfare", "Deliverance", "Discernment", "Prayer", "End Times"],
    links: { website: "https://www.russdizdar.com/" }
  },
  {
    id: "pastor-kevin-l-a-ewing",
    name: "Pastor Kevin L. A. Ewing",
    slug: "pastor-kevin-l-a-ewing",
    category: "Men & Women of God",
    resourceType: "person",
    status: "featured",
    summary: "Bible teacher known online for teaching on dreams, spiritual warfare, deliverance, and prayer.",
    bio:
      "Public channel and author pages describe Kevin L. A. Ewing as a Bible teacher and ordained pastor; his public teaching often focuses on spiritual deliverance, dreams, and biblical knowledge.",
    whyIncluded:
      "Included for believers seeking teaching on prayer, deliverance, dreams, and spiritual discernment. Users should test every teaching by Scripture.",
    topics: ["Spiritual Warfare", "Deliverance", "Prayer", "Discernment", "Bible Teaching"],
    links: { youtube: "https://www.youtube.com/channel/UCqDr1VzEeP8f7wtr7f8SD1A" }
  },
  {
    id: "mike-winger",
    name: "Mike Winger",
    slug: "mike-winger",
    category: "Men & Women of God",
    resourceType: "person",
    status: "featured",
    summary: "BibleThinker teacher creating long-form biblical answers, apologetics content, and careful Bible study resources.",
    bio:
      "BibleThinker identifies Mike Winger as its featured teacher and says he works to provide free teaching content worldwide, helping people think biblically.",
    whyIncluded:
      "Included for accessible Bible teaching, apologetics, and careful engagement with Scripture and difficult questions.",
    topics: ["Bible Teaching", "Apologetics", "Discernment", "Christian Living"],
    links: { website: "https://biblethinker.org/", youtube: "https://www.youtube.com/mikewinger" }
  },
  {
    id: "derek-prince",
    name: "Derek Prince",
    slug: "derek-prince",
    category: "Men & Women of God",
    resourceType: "person",
    status: "featured",
    summary: "International Bible teacher whose ministry continues to distribute teachings on Scripture, prayer, foundations, and spiritual warfare.",
    bio:
      "Derek Prince Ministries describes Derek Prince as a missionary, theologian, Bible teacher, and author whose teaching ministry continues internationally.",
    whyIncluded:
      "Included for foundational Bible teaching, prayer, fasting, and spiritual warfare resources widely used by believers.",
    topics: ["Bible Teaching", "Spiritual Warfare", "Prayer", "Christian Living"],
    links: { website: "https://www.derekprince.com/en-us", youtube: "https://www.youtube.com/@DerekPrinceMinistries" }
  },
  {
    id: "david-pawson-official",
    name: "David Pawson - Official",
    slug: "david-pawson-official",
    category: "Men & Women of God",
    resourceType: "youtube-channel",
    status: "featured",
    summary: "Official teaching archive for David Pawson's biblical exposition and book-by-book Bible teaching.",
    bio:
      "David Pawson's official sites describe him as a biblical expositor whose teaching translations continue through international projects.",
    whyIncluded:
      "Included for serious Bible study, Scripture overview teaching, and long-form biblical exposition.",
    topics: ["Bible Teaching", "Bible Study", "Discernment", "Christian Living"],
    links: { website: "https://www.davidpawson.org/", youtube: "https://www.youtube.com/@DavidPawsonMinistry" }
  },
  {
    id: "wes-huff",
    name: "Wes Huff",
    slug: "wes-huff",
    category: "Men & Women of God",
    resourceType: "person",
    status: "featured",
    summary: "Christian apologist and speaker engaging Scripture, manuscripts, worldview questions, and public faith conversations.",
    bio:
      "Wes Huff's bio says he was born in Pakistan, spent part of his childhood in the Middle East, and developed an interest in faith, worldview questions, and apologetics after deep study and personal experience.",
    whyIncluded:
      "Included for apologetics, manuscript reliability discussions, and thoughtful engagement with objections to Christianity.",
    topics: ["Apologetics", "Bible Study", "Discernment", "Christian Living"],
    links: { website: "https://www.wesleyhuff.com/", youtube: "https://www.youtube.com/@WesHuff" }
  },
  {
    id: "sam-shamoun",
    name: "Sam Shamoun / More Sam Shamoun / Shamounian Explains",
    slug: "sam-shamoun",
    category: "Men & Women of God",
    resourceType: "person",
    status: "review-needed",
    summary: "Christian apologetics resource focused on Islam, biblical theology, and doctrinal argumentation.",
    bio:
      "Public pages connected to Sam Shamoun present apologetics, biblical theology, doctrinal studies, and Islamic critique. A concise official biography needs further confirmation.",
    whyIncluded:
      "Included as a review-needed apologetics resource because the content is relevant to defending the Gospel and engaging Islam, but profile details should be checked carefully.",
    topics: ["Apologetics", "Discernment", "Bible Teaching"],
    links: { website: "https://answeringislam.blog/", youtube: "https://www.youtube.com/@shamounian" }
  },
  {
    id: "isaiah-saldivar",
    name: "Isaiah Saldivar",
    slug: "isaiah-saldivar",
    category: "Men & Women of God",
    resourceType: "person",
    status: "recommended",
    summary: "Preacher, livestreamer, and podcast host with content around repentance, revival, deliverance, and Christian living.",
    bio:
      "Isaiah Saldivar's official site says he travels and preaches a message of revival and repentance and hosts the weekly Revival Lifestyle podcast.",
    whyIncluded:
      "Included for teaching and conversations around repentance, prayer, deliverance, and spiritual awakening.",
    topics: ["Deliverance", "Prayer", "Spiritual Warfare", "Christian Living"],
    links: { website: "https://www.isaiahsaldivar.com/", youtube: "https://www.youtube.com/isaiahsaldivar" }
  },
  {
    id: "mike-signorelli",
    name: "Mike Signorelli",
    slug: "mike-signorelli",
    category: "Men & Women of God",
    resourceType: "person",
    status: "recommended",
    summary: "Pastor and media teacher connected with V1 Church and teaching on faith, spiritual growth, and spiritual battles.",
    bio:
      "Public ministry pages identify Mike Signorelli as the founding lead pastor of V1 Church and host of The Narrow Way, with faith-based teaching resources and events.",
    whyIncluded:
      "Included for media teaching around spiritual growth, deliverance, prayer, and practical Christian living.",
    topics: ["Spiritual Warfare", "Deliverance", "Bible Teaching", "Christian Living"],
    links: { website: "https://mikesignorelli.com/", youtube: "https://www.youtube.com/@MikeSignorelli_" }
  },
  {
    id: "todd-friel-wretched",
    name: "Todd Friel / Wretched",
    slug: "todd-friel-wretched",
    category: "Men & Women of God",
    resourceType: "podcast",
    status: "recommended",
    summary: "Wretched TV and Radio feature witnessing encounters, theological discussion, Gospel clarity, and Christian commentary.",
    bio:
      "Wretched and podcast listings describe Wretched Radio as hosted by Todd Friel and focused on witnessing encounters, theological issues, and topics in the Christian community.",
    whyIncluded:
      "Included for Gospel clarity, evangelism, discernment, and thoughtful Christian commentary.",
    topics: ["Apologetics", "Discernment", "Bible Teaching", "Christian Living"],
    links: {
      website: "https://wretched.org/",
      youtube: "https://www.youtube.com/channel/UCdlxWNzGGPKzQLMXkkyZkUQ",
      applePodcast: "https://podcasts.apple.com/us/podcast/wretched-radio-with-todd-friel/id1292370916"
    }
  },
  {
    id: "cross-examined",
    name: "Cross Examined",
    slug: "cross-examined",
    category: "Men & Women of God",
    resourceType: "ministry",
    status: "featured",
    summary: "Christian apologetics ministry and media platform connected with Frank Turek and CrossExamined.org.",
    bio:
      "CrossExamined.org describes its podcast as exploring major questions with logic, reason, and evidence while challenging listeners to think critically.",
    whyIncluded:
      "Included for apologetics, worldview engagement, and resources that defend Christianity with reasoned argument.",
    topics: ["Apologetics", "Discernment", "Bible Teaching"],
    links: { website: "https://crossexamined.org/", youtube: "https://www.youtube.com/CrossExamined" }
  },
  {
    id: "noah-hines",
    name: "Noah Hines",
    slug: "noah-hines",
    category: "Men & Women of God",
    resourceType: "person",
    status: "recommended",
    summary: "Deliverance and repentance-focused teaching resource connected with Expelling Darkness.",
    bio:
      "Expelling Darkness identifies Noah Hines and shares his testimony, with ministry content focused on repentance and deliverance through Jesus Christ.",
    whyIncluded:
      "Included for deliverance, repentance, prayer, and spiritual warfare teaching; users should keep testing all content by Scripture.",
    topics: ["Deliverance", "Spiritual Warfare", "Prayer", "Testimony"],
    links: { website: "https://expellingdarkness.com/", youtube: "https://www.youtube.com/channel/UCfGJ-GfLInkEEMaTqmHaTMA" }
  },
  {
    id: "father-spyridon",
    name: "Father Spyridon",
    slug: "father-spyridon",
    category: "Men & Women of God",
    resourceType: "person",
    status: "review-needed",
    summary: "Orthodox priest and author with video resources on spiritual life, repentance, and Christian watchfulness.",
    bio:
      "Public YouTube and author pages describe Father Spyridon as an Orthodox priest serving in ROCOR and an author of spiritual books.",
    whyIncluded:
      "Included as review-needed for sober reflection on prayer, repentance, and spiritual life from an Orthodox perspective.",
    topics: ["Prayer", "Discernment", "Christian Living", "End Times"],
    links: { youtube: "https://www.youtube.com/@FatherSpyridonROCOR", books: "https://www.amazon.com/stores/author/B004K2VROW" }
  },
  {
    id: "abednego-lufile",
    name: "Abednego Lufile",
    slug: "abednego-lufile",
    category: "Men & Women of God",
    resourceType: "person",
    status: "review-needed",
    summary: "Teaching and worship resource with content around prayer, deliverance, and edifying the body of Christ.",
    bio:
      "Public YouTube pages identify Abednego Lufile's channels as official pages with teachings, prayers, worship, commentary, and content intended to edify believers.",
    whyIncluded:
      "Included as review-needed because the content themes are relevant to prayer, worship, deliverance, and testimony, but biography and ministry details should be confirmed.",
    topics: ["Worship", "Deliverance", "Prayer", "Bible Teaching"],
    links: { youtube: "https://www.youtube.com/@abednegolufile" }
  },
  {
    id: "no-greater-love",
    name: "No Greater Love",
    slug: "no-greater-love",
    category: "Testimonies",
    resourceType: "resource",
    status: "resource",
    summary: "Curated Christian resource entry awaiting fuller notes, links, and topic review.",
    whyIncluded: "Added to the resource library for later curation and placement.",
    topics: ["Testimony", "Christian Living"],
    links: {}
  },
  {
    id: "tenerife-family-church",
    name: "Tenerife Family Church",
    slug: "tenerife-family-church",
    category: "Missions",
    resourceType: "church",
    status: "resource",
    summary: "Local church resource entry connected to fellowship, worship, teaching, and mission context.",
    whyIncluded: "Included as a local Christian resource that can later connect to mission, prayer, and fellowship content.",
    topics: ["Missions", "Worship", "Christian Living"],
    links: {}
  },
  ...[
    "We Need to Talk",
    "GodLogic Apologetics",
    "John 14:6",
    "Ejayy",
    "Good Fight Ministries",
    "A&Ω Productions",
    "Eredin",
    "More Sam Shamoun",
    "Fight Mythos",
    "Nicholas Bowling",
    "Shamounian Explains",
    "The Bible Show",
    "christsforgiveness",
    "Christian Sermons and Audio Books",
    "Thoughts On These Things with Oluwagbemiga Oyeneye",
    "Lion of Judah",
    "Desiring God",
    "Andreas Poke",
    "Grace Oasis",
    "A Rood Awakening!",
    "Soulful Devotions",
    "Grace For Purpose",
    "Jesse Speaks",
    "Sid Roth's It's Supernatural!",
    "Alejandro Brooks",
    "BibleProject",
    "NEUER WEG | Kirche in Rottweil",
    "Joel Williams",
    "2819 Church",
    "Quoracles Digital Gospel",
    "Adara's Altar",
    "Abide Meditation App",
    "Now You See TV",
    "GOD'S ABLE",
    "Emet Bible Journey",
    "ChristianGymRat",
    "Sol",
    "ChristandGym",
    "Ear to Hear",
    "Hear God's Word",
    "AoC Network",
    "Quentin Kimp",
    "Faithful Women",
    "The Christianity Pill",
    "Memento Mori",
    "Journey To God",
    "Vision unSEALED",
    "The Gospel of Christ"
  ].map((name): Resource => ({
    id: slugify(name),
    name,
    slug: slugify(name),
    category: inferCategory(name),
    resourceType: inferType(name),
    status: "review-needed",
    summary: "Curated candidate resource awaiting owner review, links, and placement notes.",
    whyIncluded: "Added to the internal resource library for review before public featuring.",
    topics: inferTopics(name),
    links: {}
  }))
];

export const internalReviewResources = [
  "Premier League",
  "Manchester United",
  "Billie Holiday",
  "Vusi Thembekwayo",
  "7clouds Rock",
  "la vinyls",
  "Slåttergubben",
  "SeaLoop360",
  "Under the Hood",
  "The AI Bible",
  "The Deep End w/Taylor Welch",
  "شاشة الأخبار _ News Screen",
  "will123will"
].map((name): Resource => ({
  id: `review-${slugify(name)}`,
  name,
  slug: `review-${slugify(name)}`,
  category: "Internal Review",
  resourceType: "resource",
  status: "review-needed",
  summary: "Held for internal review. This item is not shown as a public featured Christian resource.",
  whyIncluded: "Kept from the imported list without public endorsement or deletion.",
  topics: ["Review Needed"],
  links: {}
}));

export const publicResources = resources.filter((resource) => resource.category !== "Internal Review");
export const menAndWomenOfGod = publicResources.filter((resource) => resource.category === "Men & Women of God");

export function getResourceBySlug(slug: string) {
  return publicResources.find((resource) => resource.slug === slug);
}

export function getRelatedResources(resource: Resource) {
  return publicResources
    .filter((item) => item.slug !== resource.slug && item.topics.some((topic) => resource.topics.includes(topic)))
    .slice(0, 3);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function inferCategory(name: string) {
  if (/apologetics|cross examined|godlogic|fight mythos/i.test(name)) return "Apologetics";
  if (/worship|judah|music|soulful|abide|devotions/i.test(name)) return "Worship & Music";
  if (/bible|sermons|teaching|project|gospel|word/i.test(name)) return "Bible Study";
  if (/church|2819|neuer weg|oasis/i.test(name)) return "Missions";
  if (/podcast|talk|show|thoughts/i.test(name)) return "Podcast & Interviews";
  return "Christian Living";
}

function inferType(name: string): ResourceType {
  if (/podcast|talk|show/i.test(name)) return "podcast";
  if (/music|worship|judah/i.test(name)) return "music";
  if (/church|2819|neuer weg|oasis/i.test(name)) return "church";
  if (/bible|sermons|project|youtube|channel/i.test(name)) return "youtube-channel";
  return "resource";
}

function inferTopics(name: string) {
  const topics = new Set<string>(["Christian Living"]);
  if (/apologetics|cross examined|godlogic|fight mythos/i.test(name)) topics.add("Apologetics");
  if (/bible|sermons|project|gospel|word/i.test(name)) topics.add("Bible Teaching");
  if (/worship|music|judah/i.test(name)) topics.add("Worship");
  if (/devotion|abide|prayer/i.test(name)) topics.add("Prayer");
  if (/unsealed|end|deception|aoc/i.test(name)) topics.add("End Times");
  if (/testimony|journey/i.test(name)) topics.add("Testimony");
  return Array.from(topics);
}
