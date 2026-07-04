import type { ImageKey } from "./images";

export const homeContent = {
  hero: {
    eyebrow: "The True Remnant Network",
    title: "Holding fast to the true Gospel in a time of deception.",
    description:
      "The True Remnant Network exists to point people back to the true Jesus, strengthen believers through biblical teaching, expose spiritual deception, and provide trusted Christian resources for prayer, discipleship, worship, mission, and spiritual warfare.",
    actions: [
      { label: "Watch Latest", href: "/watch", variant: "primary" },
      { label: "Explore Resources", href: "/resources", variant: "secondary" },
      { label: "Join the Newsletter", href: "/newsletter", variant: "ghost" }
    ]
  },
  who: {
    title: "Who we are",
    copy:
      "The True Remnant Network is a Christian media and resource platform created to help believers stand firm in truth. We focus on the true Gospel, the true Jesus, biblical discernment, spiritual warfare, prayer, testimony, teaching, and mission.",
    support:
      "We are not trying to build another social platform or public directory. We curate, create, and share resources that help believers grow in Christ, recognise deception, pray with authority, and remain faithful in dark times."
  },
  beliefs: [
    ["Jesus Christ is Lord", "Every resource should point back to the person, authority, and finished work of Jesus Christ."],
    ["The Gospel must remain pure", "We resist additions, performance, compromise, and messages that move people away from grace and truth."],
    ["Scripture is the final authority", "Truth is tested by the Word of God, not popularity, platforms, personalities, or trends."],
    ["Discernment matters", "Believers need wisdom, humility, and courage to test every voice."],
    ["Prayer is warfare", "Prayer is dependence on God, submission to Christ, and resistance against darkness."],
    ["The Church must stay awake", "The hour calls for faithfulness, sobriety, repentance, and love for the truth."],
    ["Mission still matters", "The Gospel must be proclaimed, demonstrated, and carried with compassion."],
    ["Testimony over hype", "We value faithful witness and real fruit more than spectacle."]
  ],
  problemCards: [
    ["A different Jesus is being preached", "Not every spiritual message points people to the biblical Christ."],
    ["The Gospel is being mixed", "Culture, performance, compromise, and self-centred messages can dilute the truth."],
    ["Believers are overwhelmed by online voices", "Endless clips and personalities make discernment urgent."],
    ["Spiritual darkness is real", "The Christian life requires sobriety, prayer, repentance, and resistance."],
    ["Many lack foundations", "Believers need prayer resources, biblical teaching, and steady discipleship."]
  ],
  response:
    "We create and gather teaching, prayers, interviews, books, music, testimonies, and mission stories to help believers stand firm, grow in truth, and walk in obedience.",
  resourceCategories: [
    { title: "Teachings", label: "Biblical teaching", image: "studyDesk" as ImageKey, href: "/resources", copy: "Biblical teaching, sermons, studies, and conversations that point back to Christ and Scripture." },
    { title: "Spiritual Warfare Prayers", label: "Prayer", image: "prayerCircle" as ImageKey, href: "/prayers", copy: "Prayers for deliverance, protection, repentance, breakthrough, and standing firm against darkness." },
    { title: "Podcast Interviews", label: "Watch", image: "podcastStudio" as ImageKey, href: "/watch", copy: "Long-form conversations with believers, teachers, missionaries, worshippers, and people with testimonies." },
    { title: "Books", label: "Library", image: "bibleTable" as ImageKey, href: "/resources", copy: "Recommended books for doctrine, discipleship, prayer, discernment, mission, and spiritual growth." },
    { title: "Worship & Music", label: "Worship", image: "worshipGathering" as ImageKey, href: "/resources", copy: "Christ-centred worship, songs, and music resources that strengthen faith and devotion." },
    { title: "Missions", label: "Mission", image: "missionHands" as ImageKey, href: "/missions", copy: "Stories and updates from mission work, outreach, charity, evangelism, and practical service." },
    { title: "Testimonies", label: "Witness", image: "cityNight" as ImageKey, href: "/watch", copy: "Real stories of salvation, deliverance, healing, repentance, faith, and obedience." },
    { title: "Blog", label: "Articles", image: "globalMap" as ImageKey, href: "/blog", copy: "Articles on discernment, spiritual warfare, Scripture, prayer, end-times deception, and Christian living." }
  ],
  scripture: {
    quote: "Test everything; hold fast what is good.",
    reference: "1 Thessalonians 5:21"
  }
};
