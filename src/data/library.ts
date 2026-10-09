export type PublicationStatus = "draft" | "review" | "published";
export type LibraryBook = { slug:string; title:string; category:"Biblical Discoveries"|"Children"|"Prayers"; description:string; status:PublicationStatus; passages:string[]; pages:{heading:string;body:string;reference?:string}[] };
export const books:LibraryBook[]=[
{slug:"wilderness",title:"The Wilderness: 40 Days & 40 Years",category:"Biblical Discoveries",status:"published",description:"Discover why Jesus answered temptation with words from Israel's wilderness journey.",passages:["Numbers 1:1","Deuteronomy 8:3","Matthew 4:1–11"],pages:[
{heading:"In the Wilderness",body:"The Hebrew title of Numbers, Bemidbar, means ‘In the Wilderness’. It comes from the book's opening words. The English name Numbers reflects the censuses, but the wilderness forms the setting for Israel's testing and God's provision.",reference:"Numbers 1:1"},
{heading:"The Forty Years",body:"Israel encountered hunger, uncertainty and repeated opportunities to trust God. God provided manna, guided the people and instructed them through Moses. The wilderness exposed the condition of their hearts.",reference:"Deuteronomy 8:2–3"},
{heading:"Jesus Enters the Wilderness",body:"After His baptism Jesus was led by the Spirit into the wilderness. He fasted for forty days and was tempted by the devil. His responses came from Deuteronomy, the book remembering Israel's wilderness years.",reference:"Matthew 4:1–11"},
{heading:"Bread and Trust",body:"When tempted to turn stones into bread, Jesus cited Deuteronomy 8:3. The lesson is not that food is unimportant, but that life ultimately depends upon God's word and provision.",reference:"Deuteronomy 8:3; Matthew 4:4"},
{heading:"Do Not Put God to the Test",body:"Jesus answered the challenge to leap from the temple by citing Deuteronomy 6:16. Faith does not manufacture danger to force God to prove His faithfulness. This recalls Massah, where Israel questioned whether God was among them.",reference:"Exodus 17:1–7; Matthew 4:7"},
{heading:"Worship God Alone",body:"Offered the kingdoms of the world, Jesus refused to worship Satan. He affirmed that worship and service belong to the Lord alone. His obedience contrasts with Israel's recurring temptation toward idolatry.",reference:"Deuteronomy 6:13; Matthew 4:10"},
{heading:"Read the Passages Together",body:"The parallel between Israel's forty years and Jesus' forty days is a major theme in Christian interpretation of Matthew. Read Matthew 4 with Deuteronomy 6–8 and ask: What did Israel learn? How did Jesus respond? How should we apply Scripture faithfully?",reference:"Matthew 4; Deuteronomy 6–8"}
]},
{slug:"peter-restored",title:"Three Denials. Three Questions.",category:"Biblical Discoveries",status:"published",description:"How Jesus restored Peter after his failure.",passages:["John 18:15–18","John 21:9–19"],pages:[
{heading:"When Peter Denied Jesus",body:"Peter denied knowing Jesus three times. John's Gospel specifically mentions a charcoal fire near the place of his denial.",reference:"John 18:17–18,25–27"},
{heading:"Another Charcoal Fire",body:"After the resurrection, Jesus prepared breakfast for His disciples beside a charcoal fire. John uses this memorable detail in both scenes.",reference:"John 21:9"},
{heading:"Do You Love Me?",body:"Three times Jesus asked Peter whether he loved Him and charged him to care for His people. Many readers recognise a deliberate correspondence with Peter's three denials.",reference:"John 21:15–17"},
{heading:"Restored for Service",body:"Jesus did not ignore Peter's failure. Their encounter demonstrates both the seriousness of discipleship and the possibility of restoration. Read both passages and consider how grace calls us to faithful service.",reference:"John 21:18–19"}
]},
{slug:"daniel-prays",title:"Daniel: A Life of Prayer",category:"Children",status:"published",description:"A child-friendly illustrated-ready story about faithfulness and prayer.",passages:["Daniel 6:1–28"],pages:[
{heading:"Daniel's Daily Habit",body:"Daniel loved God and prayed regularly. He continued praying even when people tried to stop him.",reference:"Daniel 6:10"},
{heading:"A Difficult Choice",body:"A new law made Daniel's prayers dangerous. Daniel chose to remain faithful rather than hide his love for God.",reference:"Daniel 6:7–10"},
{heading:"God Is With Daniel",body:"Daniel was thrown into a den of lions, but God protected him. His story teaches courage and trust, not that every faithful person avoids suffering.",reference:"Daniel 6:16–23"},
{heading:"Talk Together",body:"What can we thank God for today? When is it hard to do the right thing? Parents and children can talk and pray together.",reference:"Daniel 6"}
]},
{slug:"stand-firm-in-prayer",title:"Standing Firm in Prayer",category:"Prayers",status:"published",description:"Scripture-guided prayer for repentance, dependence on Christ, protection and intercession.",passages:["Ephesians 6:10–18","Psalm 91","Matthew 6:9–13"],pages:[
{heading:"Come Before the Father",body:"Heavenly Father, I come to You through Jesus Christ. May Your name be honoured in my life. Let Your will be done in my home, church and community.",reference:"Matthew 6:9–10"},
{heading:"Repentance and Renewal",body:"Lord, examine my heart. Forgive my sins and turn me away from pride, bitterness and disobedience. Teach me to walk in truth and to love what is good.",reference:"Psalm 139:23–24; 1 John 1:9"},
{heading:"The Armour of God",body:"Strengthen me in the Lord and in Your mighty power. Help me stand in truth, righteousness, readiness from the gospel of peace, faith, salvation and Your Word.",reference:"Ephesians 6:10–17"},
{heading:"Protection and Peace",body:"Father, guard my thoughts, words and actions. Give wisdom to discern deception and peace in trouble. Teach me to trust Your care without fear.",reference:"Psalm 91; Philippians 4:6–7"},
{heading:"Intercession",body:"I pray for my family, my church, those facing persecution and those who do not yet know Christ. Give them courage, comfort, provision and open hearts to Your gospel.",reference:"Ephesians 6:18–20"},
{heading:"Stand Firm in Christ",body:"Jesus Christ is Lord. Help me resist evil, remain steadfast in Your Word, love my neighbour and persevere in prayer. Amen.",reference:"James 4:7; 1 Thessalonians 5:17"}
]},
{slug:"bronze-serpent",title:"The Bronze Serpent & the Cross",category:"Biblical Discoveries",status:"draft",description:"A developing teaching on Numbers 21 and John 3.",passages:["Numbers 21:4–9","John 3:14–16"],pages:[]}
];
export const publishedBooks=books.filter(b=>b.status==="published");