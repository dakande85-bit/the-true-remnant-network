import type { ImageKey } from "./images";

export const homeContent = {
  hero: {
    eyebrow: "The True Remnant Network",
    title: "One Body. One Mind. One Truth in Christ.",
    description:
      "A Christian interview and end-times ministry bringing believers together to discuss faith, doctrine, prophecy, spiritual warfare, and the difficult questions facing the Church.",
    actions: [
      { label: "Watch Conversations", href: "/watch", variant: "primary" },
      { label: "Explore Topics", href: "/topics", variant: "secondary" },
      { label: "Join Newsletter", href: "/newsletter", variant: "ghost" }
    ]
  },
  mission: {
    title: "Make my joy complete.",
    copy:
      "Philippians 2:2 calls believers to be like-minded, having the same love, being of one accord and of one mind. Our mission is to create conversations that help the Body of Christ return to truth, unity, discernment, and faithfulness to Jesus."
  },
  who: {
    title: "Christian conversations for unity around truth.",
    copy:
      "The True Remnant Network interviews people of faith and brings believers together to discuss the difficult questions facing the Body of Christ.",
    support:
      "We seek biblical truth, understand context, strengthen unity, and help believers become of one mind in Christ without shallow agreement, fear-mongering, or sensationalism."
  },
  beliefs: [
    ["Jesus Christ is the Son of God", "Jesus is Lord, the only way to the Father, and the centre of every faithful conversation."],
    ["The true Gospel must remain central", "Salvation is by grace through faith in Jesus Christ, not performance, culture, or compromise."],
    ["Scripture is the final authority", "Every doctrine, prophecy, testimony, and spiritual claim must be tested by the Word of God."],
    ["Context matters", "Difficult passages and doctrines should be handled carefully, humbly, and in their biblical context."],
    ["Unity must be built around truth", "The Body of Christ needs one mind in Christ, not shallow agreement that avoids hard questions."],
    ["We are living in the last days", "Scripture warns of deception, tribulation, the rise of the Antichrist, and the return of Jesus Christ."],
    ["End-times teaching must be sober", "We speak seriously and biblically about prophecy without fear, speculation, or sensationalism."],
    ["Prayer is spiritual warfare", "Believers need prayer, repentance, discernment, endurance, and dependence on the Holy Spirit."]
  ],
  whatWeDo: [
    ["Interview people of faith", "Long-form conversations with believers, teachers, ministers, missionaries, apologists, and people with testimonies."],
    ["Ask difficult questions", "We make space for serious questions about doctrine, prophecy, deception, prayer, and the Church."],
    ["Test everything by Scripture", "The Bible is the authority above personality, popularity, platform, tradition, or trend."],
    ["Examine context", "We slow down, read carefully, and look at the context behind difficult passages and disputed claims."],
    ["Discuss doctrine and prophecy", "We talk about what Christians believe, why it matters, and how prophecy should shape faithful living."],
    ["Equip believers for the last days", "The aim is a Church that is awake, grounded, prayerful, united in truth, and faithful to Christ."]
  ],
  topics: [
    "The true Gospel",
    "The true Jesus",
    "The nature of God",
    "Salvation",
    "False teaching",
    "End-times deception",
    "The Antichrist system",
    "The tribulation",
    "Spiritual warfare",
    "Prayer and deliverance",
    "Church unity",
    "Testimonies",
    "Mission and evangelism",
    "Christian living"
  ],
  endTimes: {
    title: "Standing firm in the last days.",
    copy:
      "We believe we are living in the last days of human history. Scripture warns of deception, lawlessness, falling away, tribulation, the rise of the Antichrist, and the return of Jesus Christ. Our aim is not fear, speculation, or sensationalism. Our aim is to help believers stay awake, grounded in Scripture, filled with the Spirit, and faithful to Christ until He comes."
  },
  watch: {
    title: "Conversations for the Body of Christ.",
    copy:
      "Through interviews, long-form discussions, testimonies, and teaching videos, we explore the questions that matter: Who is Jesus? What is the true Gospel? How should believers understand prophecy, deception, prayer, doctrine, and unity?"
  },
  resources: {
    title: "Resources that support the conversation.",
    copy:
      "Teachings, books, prayers, testimonies, and recommended voices that help believers study deeper after each conversation.",
    categories: [
      { title: "Teachings", label: "Study", image: "studyDesk" as ImageKey, href: "/resources", copy: "Biblical teaching and studies that help believers examine doctrine and context." },
      { title: "Prayers", label: "Prayer", image: "prayerCircle" as ImageKey, href: "/prayers", copy: "Christ-centred prayers for repentance, deliverance, protection, and endurance." },
      { title: "Conversations", label: "Watch", image: "podcastStudio" as ImageKey, href: "/watch", copy: "Interviews, testimonies, and long-form discussions for the Body of Christ." },
      { title: "Books & Voices", label: "Resources", image: "bibleTable" as ImageKey, href: "/resources", copy: "Recommended voices, books, and study helps for deeper research after each episode." }
    ]
  },
  scripture: {
    quote: "Make my joy complete by being of the same mind, having the same love, being in full accord and of one mind.",
    reference: "Philippians 2:2"
  },
  supportingScripture: {
    quote:
      "That all of you agree, and that there be no divisions among you, but that you be united in the same mind and the same judgment.",
    reference: "1 Corinthians 1:10"
  }
};
