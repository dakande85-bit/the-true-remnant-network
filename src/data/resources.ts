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
};

const amazonLinks = {
  unseenRealm: "https://www.amazon.com/gp/product/1577995562/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1577995562&linkCode=as2&tag=drmicsheihom-20&linkId=8ff28cca3fcf452d54b541459416126e",
  jasher: "https://www.amazon.com/gp/product/0830852522/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0830852522&linkCode=as2&tag=adherentapo0e-20&linkId=9797052b9147ab9ab5f39bd0ffd788e5",
  enoch1: "https://www.amazon.com/gp/product/019958043X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=019958043X&linkCode=as2&tag=adherentapo0e-20&linkId=c430f8e4911157f43d52c450bf3b0f66",
  advancedStudy04: "https://www.amazon.com/gp/product/1444350854/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1444350854&linkCode=as2&tag=adherentapo0e-20&linkId=7dff4068369e94661fe9d36027bb8c54",
  advancedStudy05: "https://www.amazon.com/gp/product/0199271682/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0199271682&linkCode=as2&tag=adherentapo0e-20&linkId=c11ea58919ddb840ca28793f62fbbbd6",
  advancedStudy06: "https://www.amazon.com/gp/product/3030237540/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=3030237540&linkCode=as2&tag=adherentapo0e-20&linkId=6c90392830656507252b787918c6b6fe",
  advancedStudy07: "https://www.amazon.com/gp/product/0310259185/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0310259185&linkCode=as2&tag=adherentapo0e-20&linkId=aafc38341156becbb91cd67d04aed0f6",
  advancedStudy08: "https://www.amazon.com/gp/product/0061452572/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0061452572&linkCode=as2&tag=adherentapo0e-20&linkId=78593bc31b02012572be6392ecceae4f",
  advancedStudy09: "https://www.amazon.com/gp/product/0802411002/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0802411002&linkCode=as2&tag=adherentapo0e-20&linkId=1e384533d4a20961d365079425ff3854",
  advancedStudy10: "https://www.amazon.com/gp/product/1581345615/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1581345615&linkCode=as2&tag=adherentapo0e-20&linkId=2d9a8d0b9177753d5c4fb5bbeef2c90b",
  advancedStudy11: "https://www.amazon.com/gp/product/031024210X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=031024210X&linkCode=as2&tag=adherentapo0e-20&linkId=cfd12fa7208410e7f17e3f293d7692b5",
  advancedStudy12: "https://www.amazon.com/gp/product/0310345863/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0310345863&linkCode=as2&tag=adherentapolo-20&linkId=d23db1f5ac8cb4afea91f0aa80bf5d6f",
  advancedStudy13: "https://www.amazon.com/gp/product/0825427886/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0825427886&linkCode=as2&tag=adherentapo0e-20&linkId=c54af4cae93ec9cf030cef2003f1fbb9",
  advancedStudy14: "https://www.amazon.com/gp/product/1414326270/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1414326270&linkCode=as2&tag=adherentapo0e-20&linkId=f6abc881d89929220bc8386913450273",
  advancedStudy15: "https://www.amazon.com/gp/product/1434704696/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1434704696&linkCode=as2&tag=adherentapo0e-20&linkId=5b3c626dfb0295b011cc24c95d1f9e69",
  advancedStudy16: "https://www.amazon.com/gp/product/1947929151/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1947929151&linkCode=as2&tag=adherentapo0e-20&linkId=4d173e482027a643bc6c604198efcc26",
  advancedStudy17: "https://www.amazon.com/gp/product/168307162X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=168307162X&linkCode=as2&tag=adherentapo0e-20&linkId=8759d2328a5583c88771ac846fc939d6",
  advancedStudy18: "https://www.amazon.com/gp/product/1401676707/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1401676707&linkCode=as2&tag=adherentapo0e-20&linkId=041ea7f8871629d2959b8be9118d2359",
  advancedStudy19: "https://www.amazon.com/gp/product/0736974288/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0736974288&linkCode=as2&tag=adherentapo0e-20&linkId=16c99168efe6ac55be82eb7f37e351e0",
  advancedStudy20: "https://www.amazon.com/gp/product/0060652969/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0060652969&linkCode=as2&tag=adherentapo0e-20&linkId=2b8983bd141e91cec847066856486187",
  advancedStudy21: "https://www.amazon.com/gp/product/0060652950/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0060652950&linkCode=as2&tag=adherentapo0e-20&linkId=7510dec6465dd05c55a26335311d0c53",
  advancedStudy22: "https://www.amazon.com/gp/product/1732383405/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1732383405&linkCode=as2&tag=adherentapo0e-20&linkId=c72d60fc794e12797864ffc418f2190c",
  advancedStudy23: "https://www.amazon.com/gp/product/0830845186/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0830845186&linkCode=as2&tag=adherentapo0e-20&linkId=02a6daf83ba3b58cc805747ffc91203b",
  advancedStudy24: "https://www.amazon.com/gp/product/019882601X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=019882601X&linkCode=as2&tag=adherentapo0e-20&linkId=6618b35bb05393f71197a1d054604d23",
  advancedStudy25: "https://www.amazon.com/gp/product/1108487602/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1108487602&linkCode=as2&tag=adherentapo0e-20&linkId=31cf4551fcbf1e40eaa9e7be301e5877",
  advancedStudy26: "https://www.amazon.com/gp/product/0198237987/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0198237987&linkCode=as2&tag=adherentapo0e-20&linkId=71fa62f714ad585f31ce10b756e4baa4"
};

const advancedStudyBooks: ResourceItem[] = Object.entries(amazonLinks)
  .filter(([id]) => id.startsWith("advancedStudy"))
  .map(([id, url], index) => ({
    id: `book-${id}`,
    title: `Advanced Biblical Studies Resource ${String(index + 4).padStart(2, "0")}`,
    creator: "Curated external book link",
    type: "Book",
    topic: "Advanced Biblical Studies",
    summary: "External Amazon book link supplied for the advanced reading list. Replace this placeholder title with the verified book title before public launch.",
    url,
    level: "Starter"
  }));

export const resourceItems: ResourceItem[] = [
  {
    id: "book-the-unseen-realm",
    title: "The Unseen Realm",
    creator: "Michael S. Heiser",
    type: "Book",
    topic: "Divine Council / Biblical Theology",
    summary: "A serious biblical-theology resource on the unseen spiritual realm, divine council language and the supernatural worldview of Scripture.",
    url: amazonLinks.unseenRealm,
    level: "Recommended"
  },
  {
    id: "book-of-jasher-study",
    title: "The Book of Jasher",
    creator: "Extra-biblical historical study",
    type: "Book",
    topic: "Ancient Texts / Background Study",
    summary: "Listed as an extra-biblical study resource. It should be read critically and not treated as equal to the canon of Scripture.",
    url: amazonLinks.jasher,
    level: "Reviewed"
  },
  {
    id: "book-1-enoch-study",
    title: "1 Enoch / The Book of Enoch",
    creator: "Second Temple Jewish literature",
    type: "Book",
    topic: "Ancient Texts / Watchers / Second Temple Background",
    summary: "Listed for historical and Second Temple background study. It is not received as canonical Scripture by most Christian traditions, so it should be labelled clearly.",
    url: amazonLinks.enoch1,
    level: "Reviewed"
  },
  ...advancedStudyBooks,
  {
    id: "audio-bible-david-suchet-niv",
    title: "NIV Audio Bible read by David Suchet",
    creator: "David Suchet / NIV audio Bible",
    type: "Audio Bible",
    topic: "Scripture Listening",
    summary: "External listening link for the NIV audio Bible read by David Suchet. Do not host the audio files directly; link to the authorised platform.",
    url: "https://www.biblegateway.com/audio/suchet/niv/Gen.1",
    level: "Recommended",
    duration: "Full Bible audio"
  },
  {
    id: "music-worship-playlist-slot",
    title: "Worship Playlist Slot",
    creator: "Curated artist or playlist to be added",
    type: "Music",
    topic: "Worship",
    summary: "A music-tab card for worship songs, albums or playlists that are reviewed before being featured.",
    url: "#",
    level: "Starter",
    duration: "Playlist"
  },
  {
    id: "audio-teaching-series-slot",
    title: "Audio Teaching Series Slot",
    creator: "Curated speaker to be added",
    type: "Audio Teaching",
    topic: "Bible Teaching",
    summary: "A teaching-audio card for sermons, studies, messages and podcast series from reviewed voices.",
    url: "#",
    level: "Reviewed",
    duration: "Series"
  },
  {
    id: "devotional-daily-reading-slot",
    title: "Daily Devotional Slot",
    creator: "Curated ministry to be added",
    type: "Devotional",
    topic: "Daily Faith",
    summary: "A daily reading, prayer or reflection card for believers who want steady spiritual growth.",
    url: "#",
    level: "Starter"
  },
  {
    id: "bible-tool-study-slot",
    title: "Bible Study Tool Slot",
    creator: "Curated tool provider to be added",
    type: "Bible Tool",
    topic: "Study Tools",
    summary: "A Bible app, concordance, map, language tool or study resource card for deeper Scripture study.",
    url: "#",
    level: "Starter"
  }
];
