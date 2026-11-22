// Discussions. phases = spans when the debate was most active (approximate).
// Each position is stated as its holders stated it. thread entries: y = year CE,
// c = approximate, who = figure ids, at = place ids where it happened.

const DEBATES = [
  { id: "imamate", title: "Caliphate and imamate", term: "al-khilafa wa’l-imama", ar: "الخلافة والإمامة",
    phases: [[632, 1100], [1490, 1525]], lanes: ["theology", "law"],
    question: "Who should lead the community after the Prophet, and on what basis?",
    text: "When the Prophet died in 632, Muslims disagreed over who should lead them and why. The dispute ran through the civil wars of the first century and divided the Sunni, Shi’i (Twelver, Isma’ili and Zaydi), Khariji and Ibadi traditions. In the ninth and tenth centuries the Twelver Occultation and the rise of the Fatimid caliphate reshaped Shi’i doctrines of authority; in the eleventh century Sunni jurists wrote theories of the caliphate as real power passed to Buyid and Seljuq rulers.",
    positions: [
      { name: "Leadership by the community’s choice", text: "The leader is chosen by the community’s qualified electors or nominated by his predecessor, and must meet conditions of knowledge, justice and descent from Quraysh.", who: ["mawardi", "ghazali"] },
      { name: "Leadership by designation", text: "In Twelver and Isma’ili doctrine, the Prophet designated Ali, and leadership passes by explicit designation (nass) through Imams of his line, chosen by God and protected from error.", who: ["jafar", "qadi-numan", "mufid", "nasir-khusraw"], notes: { "qadi-numan": "In Da’a’im al-Islam, al-Qadi al-Nu’man made devotion (walaya) to the divinely designated Fatimid Isma’ili Imam the first pillar of Islam, upholding the Imam as the sole authoritative guide in law and faith.", "nasir-khusraw": "As Fatimid chief missionary (hujja) for Khurasan, Nasir-i Khusraw taught that the divinely guided Isma’ili Imam holds both outward authority and the inner spiritual interpretation (ta’wil) of scripture." } },
      { name: "The most qualified Alid who rises", text: "In Zaydi doctrine, the imamate is not restricted by explicit designation to one line: any learned, just descendant of Ali through Hasan or Husayn who rises to establish justice may claim it.", who: ["qasim-rassi"] },
      { name: "Leadership by merit alone", text: "Any upright Muslim may lead, regardless of tribal descent, and an unjust ruler may be removed. Radical Kharijis backed this view with revolt; Ibadis upheld communal election of a righteous imam and lived peacefully beside other Muslims.", who: ["jabir-ibn-zayd", "shammakhi"], notes: { "jabir-ibn-zayd": "In Basra, Jabir ibn Zayd opposed the extremist revolts of the Azariqa and laid the quietist foundations of Ibadi political thought, allowing believers to live under non-Ibadi rulers when no just imamate could be established.", shammakhi: "In Kitab al-Siyar, al-Shammakhi documented centuries of North African Ibadi imams and councils of elders (azzaba), preserving the Ibadi ideal of an elected imamate sustained by communal scholarship." } }
    ],
    thread: [
      { y: 632, text: "The Prophet dies. Abu Bakr is acknowledged as caliph at the hall of the Banu Sa’ida in Medina.", who: [], at: ["medina"] },
      { y: 656, text: "Ali becomes caliph after Uthman is killed, and civil war follows.", who: ["ali"], at: ["medina", "kufa"] },
      { y: 680, text: "Ali’s son Husayn is killed at Karbala, a defining moment for Shi’i tradition.", who: [], at: ["karbala"] },
      { y: 690, c: true, text: "In Basra, Jabir ibn Zayd counsels quietism against Khariji extremism, shaping the distinct Ibadi approach to leadership and communal coexistence.", who: ["jabir-ibn-zayd"], at: ["basra"] },
      { y: 750, c: true, text: "Ja’far al-Sadiq teaches in Medina; Shi’i tradition traces the doctrine of the Imam by designation to him.", who: ["jafar"], at: ["medina"] },
      { y: 840, c: true, text: "Al-Qasim al-Rassi writes in Medina and Egypt on the conditions of the Zaydi imamate, grounding leadership in Alid descent, learning and righteous action.", who: ["qasim-rassi"], at: ["medina", "fustat"] },
      { y: 874, text: "The eleventh Twelver Imam, Hasan al-Askari, dies in Samarra; Twelver Shi’is hold that his son enters the Minor Occultation (al-ghayba al-sughra), communicating through four deputies.", who: [], at: ["samarra"] },
      { y: 910, text: "After Abu Abdallah al-Shi’i takes Raqqada in 909, Ubayd Allah al-Mahdi enters the city in January 910 and is proclaimed Fatimid caliph in Ifriqiya, establishing an Isma’ili imamate-caliphate in North Africa.", who: [], at: ["qayrawan"] },
      { y: 941, text: "The fourth deputy of the hidden Twelfth Imam dies in Baghdad, beginning the Major Occultation (al-ghayba al-kubra) in Twelver doctrine.", who: [], at: ["baghdad"] },
      { y: 960, c: true, text: "At al-Mansuriyya, al-Qadi al-Nu’man compiles Da’a’im al-Islam for the Fatimid caliph al-Mu’izz, placing devotion to the designated Isma’ili Imam at the centre of law and religion.", who: ["qadi-numan"], at: ["mansuriyya"] },
      { y: 1000, c: true, text: "Al-Mufid defends the Imami doctrine of leadership with rational argument in Buyid Baghdad.", who: ["mufid"], at: ["baghdad"] },
      { y: 1045, c: true, text: "Al-Mawardi writes The Ordinances of Government, defining the caliph’s powers and those he may delegate.", who: ["mawardi"], at: ["baghdad"] },
      { y: 1094, c: true, text: "Al-Ghazali defends the Abbasid caliph against the Isma’ili claim to an infallible Imam.", who: ["ghazali"], at: ["baghdad"] },
      { y: 1515, c: true, text: "In Jabal Nafusa and Tunis, al-Shammakhi compiles Kitab al-Siyar, recording the lives of North African Ibadi imams and scholars.", who: ["shammakhi"], at: ["yefren", "tunis"] }
    ],
    related: ["caliphate-modern", "faith"] },

  { id: "faith", title: "Faith, works and the grave sinner", term: "al-iman wa murtakib al-kabira", ar: "الإيمان ومرتكب الكبيرة",
    phases: [[657, 1025]], lanes: ["theology"],
    question: "Is a Muslim who commits a grave sin still a believer?",
    text: "The first civil war pushed Muslims to ask whether those who sinned gravely, rulers included, remained believers. The answers defined the earliest theological groups and, later, how each school understood faith itself.",
    positions: [
      { name: "The sinner has left Islam", text: "A grave sinner is an unbeliever and no longer belongs to the community. This was the view of radical Khariji groups such as the Azariqa.", who: [] },
      { name: "Ungrateful to God, not a polytheist", text: "A grave sinner is guilty of ingratitude for God’s blessings (kufr ni’ma) rather than the unbelief of polytheism (kufr shirk), and remains legally within the Muslim community, able to intermarry and inherit alongside other Muslims.", who: ["jabir-ibn-zayd"], notes: { "jabir-ibn-zayd": "Early Ibadi doctrine, rooted in Jabir ibn Zayd’s Basran circle, distinguished the grave sinner’s ingratitude (kufr ni’ma) from the unbelief of polytheism (kufr shirk), rejecting Khariji bloodshed against fellow Muslims." } },
      { name: "Faith is belief and affirmation", text: "Faith is assent of the heart and affirmation of the tongue; deeds do not enter its definition, and the sinner’s fate is left to God.", who: ["abu-hanifa", "maturidi"], notes: { maturidi: "Al-Maturidi defined faith strictly as assent of the heart (tasdiq), holding that it neither grows nor shrinks; unlike creedal formulas that fold works into faith, he treated verbal confession only as an outward sign by which the community recognises a Muslim." } },
      { name: "The intermediate position", text: "The grave sinner is neither believer nor unbeliever but in a position between the two.", who: ["wasil", "abd-al-jabbar"], notes: { "abd-al-jabbar": "For Abd al-Jabbar faith is knowing God, confessing Him and doing what religion commands while avoiding what it forbids. The grave sinner is therefore called a fasiq, and if he dies unrepentant he stays in Hell forever, though punished less than an unbeliever." } },
      { name: "Faith is belief, word and deed", text: "Faith includes deeds and rises and falls with them; the sinner remains a believer with deficient faith.", who: ["ibn-hanbal", "bukhari", "ashari"], notes: { "ibn-hanbal": "The creeds transmitted under Ibn Hanbal’s name call faith word and deed, increasing and decreasing, and one of them adds that whoever omits the prayer has committed unbelief. A modern study reassigns several of these creeds to his contemporaries, so their exact wording may not be his.", ashari: "Al-Ash’ari’s short creed says faith is word and deed and increases and decreases; elsewhere he defines faith as the heart’s assent (tasdiq), with confession and deeds following from it." } }
    ],
    thread: [
      { y: 657, text: "After Ali accepts arbitration at Siffin, a group breaks from him; they become known as the Kharijis.", who: ["ali"], at: ["siffin"] },
      { y: 700, c: true, text: "Al-Hasan al-Basri calls the grave sinner a hypocrite.", who: ["hasan-basri"], at: ["basra"] },
      { y: 728, c: true, text: "By tradition, Wasil ibn Ata leaves al-Hasan’s circle over the question; the Mu’tazila trace their beginning to him.", who: ["wasil", "hasan-basri"], at: ["basra"] },
      { y: 750, c: true, text: "Abu Hanifa defines faith as assent and affirmation.", who: ["abu-hanifa"], at: ["kufa"] },
      { y: 846, c: true, text: "Al-Bukhari opens the Book of Faith in his Sahih: faith is word and deed, and it increases and decreases.", who: ["bukhari"], at: ["bukhara"] }
    ],
    related: ["free-will", "imamate"] },

  { id: "free-will", title: "Free will and divine decree", term: "al-qada’ wa’l-qadar", ar: "القضاء والقدر",
    phases: [[690, 1140]], lanes: ["theology"],
    question: "If God determines all things, how are people responsible for what they do?",
    text: "The Qur’an speaks both of God’s all-encompassing will and of human accountability. Early Muslims argued over whether people create their own acts, and each theological school framed its answer around God’s justice and power.",
    positions: [
      { name: "Humans create their own acts", text: "God’s justice requires that people be the authors of their deeds, or reward and punishment would be unjust.", who: ["wasil", "qasim-rassi", "abd-al-jabbar"], notes: { "qasim-rassi": "Drawing on Qur’anic arguments for God’s justice, al-Qasim al-Rassi rejected divine compulsion of human acts, setting Zaydi theology on a path closely aligned with Mu’tazili conceptions of human moral agency." } },
      { name: "God compels all acts", text: "People have no real power over their acts. Critics applied the label “Jabriyya” (compulsionists) to proponents of strict determinism, largely as a polemical term rather than a self-designation.", who: [] },
      { name: "God creates, humans acquire", text: "God creates every act, and the human being “acquires” it, which grounds responsibility. This is al-Ash’ari’s doctrine.", who: ["ashari", "juwayni", "ghazali"], notes: { juwayni: "Al-Juwayni’s al-Irshad teaches this doctrine of acquisition; in his later al-Aqida al-Nizamiyya he gives the power God creates in a person a real effect on the act.", ghazali: "In the Revival’s book on divine unity and trust in God, al-Ghazali argues that God creates every event, human acts included; his Persian Alchemy of Happiness says a person is compelled even in the act of choosing." } },
      { name: "God creates, humans choose", text: "God creates acts, but the human power of choice is real and is what responsibility rests on. Maturidi authors also speak of acquisition, but tie it to this power of choice.", who: ["maturidi", "abu-hafs-nasafi"], notes: { "abu-hafs-nasafi": "Abu Hafs al-Nasafi’s creed says humans have acts of choice for which they are rewarded and punished; the good among them happens with God’s good pleasure, the bad does not." } }
    ],
    thread: [
      { y: 690, c: true, text: "Ma’bad al-Juhani teaches in Basra that people determine their own acts.", who: [], at: ["basra"] },
      { y: 700, c: true, text: "A letter attributed to al-Hasan al-Basri argues for human responsibility.", who: ["hasan-basri"], at: ["basra"] },
      { y: 740, c: true, text: "Wasil ibn Ata and the early Mu’tazila make God’s justice a founding principle.", who: ["wasil"], at: ["basra"] },
      { y: 915, c: true, text: "Al-Ash’ari leaves the Mu’tazila and develops the doctrine of acquisition.", who: ["ashari"], at: ["basra", "baghdad"] },
      { y: 930, c: true, text: "Al-Maturidi in Samarkand gives the human power of choice a larger role.", who: ["maturidi"], at: ["samarkand"] },
      { y: 980, c: true, text: "Qadi Abd al-Jabbar dictates al-Mughni (c. 970–990), the fullest statement of the Mu’tazili case.", who: ["abd-al-jabbar"], at: ["rayy"] }
    ],
    related: ["faith", "good-evil", "attributes"] },

  { id: "hadith-criticism", title: "Collecting and testing hadith", term: "ulum al-hadith", ar: "علوم الحديث",
    phases: [[665, 1070], [1150, 1450]], lanes: ["hadith", "law"],
    question: "How can reports about the Prophet be gathered, tested and used?",
    text: "As reports about the Prophet multiplied, scholars judged each chain of narrators by their reliability and by whether they could have met. The ninth century produced the great collections; later scholars wrote commentaries, systematised the rules of hadith criticism, and sustained high-status chains of transmission through prominent male and female masters. Twelver scholars compiled reports from the Imams by their own standards.",
    positions: [
      { name: "Collect broadly, arranged by narrator", text: "Gather what is transmitted, arranged by Companion, with weaker reports kept and judged.", who: ["ibn-hanbal"] },
      { name: "Only the sound", text: "Include only reports whose chains meet strict conditions of reliability and contact.", who: ["bukhari", "muslim"] },
      { name: "Reports arranged for law", text: "Arrange reports by legal topic. Abu Dawud says he flags reports with serious weakness and leaves the rest without comment; al-Tirmidhi often comments on a report’s reliability and on how jurists used it.", who: ["abu-dawud", "tirmidhi"] },
      { name: "Reports from the Imams", text: "The sayings of the Imams are authoritative alongside the Prophet’s, transmitted through Shi’i chains.", who: ["kulayni", "shaykh-tusi"], notes: { "shaykh-tusi": "In al-Udda fi usul al-fiqh, al-Shaykh al-Tusi held that the community may act on reports from single transmitters (akhbar al-ahad) and claimed consensus for this, against his teacher al-Sharif al-Murtada, who had claimed consensus that such reports could not be acted on." } },
      { name: "Codifying the rules of hadith criticism", text: "Systematise the categories of sound, fair and weak reports and the ethics of transmission into a unified manual for later generations.", who: ["ibn-al-salah", "nawawi", "ibn-hajar"], notes: { "ibn-al-salah": "In his Muqaddima, dictated at Dar al-Hadith al-Ashrafiyya in Damascus, Ibn al-Salah organised the sciences of hadith into sixty-five categories that framed later summaries and commentaries by al-Nawawi, Ibn Hajar and others." } }
    ],
    thread: [
      { y: 665, c: true, text: "In Medina, Umm Salama transmits hundreds of reports from the Prophet and advises Companions and Successors on ritual and legal practice.", who: ["umm-salama"], at: ["medina"] },
      { y: 670, c: true, text: "Aisha teaches and corrects reports in Medina.", who: ["aisha"], at: ["medina"] },
      { y: 745, c: true, text: "In Medina, Malik and others attack Ibn Ishaq’s reliability. Later critics such as Ibn Hanbal accept his reports on the Prophet’s campaigns but not as evidence for rulings of law.", who: ["ibn-ishaq", "malik"], at: ["medina"] },
      { y: 770, c: true, text: "Malik compiles the Muwatta’, joining hadith to Medinan practice.", who: ["malik"], at: ["medina"] },
      { y: 830, c: true, text: "Ibn Hanbal assembles his Musnad in Baghdad.", who: ["ibn-hanbal"], at: ["baghdad"] },
      { y: 846, c: true, text: "Al-Bukhari completes his Sahih, which he said took sixteen years. Reports place its writing in Mecca, Medina and Bukhara.", who: ["bukhari"], at: ["mecca", "medina", "bukhara"] },
      { y: 860, c: true, text: "Muslim compiles his Sahih in Nishapur.", who: ["muslim"], at: ["nishapur"] },
      { y: 875, c: true, text: "Abu Dawud and al-Tirmidhi compile collections arranged for law.", who: ["abu-dawud", "tirmidhi"], at: ["basra", "termez"] },
      { y: 930, c: true, text: "Al-Kulayni compiles al-Kafi.", who: ["kulayni"], at: ["baghdad"] },
      { y: 1060, c: true, text: "Karima al-Marwaziyya teaches the Sahih in Mecca.", who: ["karima"], at: ["mecca"] },
      { y: 1160, c: true, text: "In Baghdad, Shuhda al-Katiba teaches canonical hadith collections and grants transmission licences to over a hundred students, including Ibn al-Jawzi.", who: ["shuhda"], at: ["baghdad"] },
      { y: 1235, c: true, text: "Ibn al-Salah dictates his Muqaddima at Dar al-Hadith al-Ashrafiyya in Damascus, establishing the standard manual of hadith criticism.", who: ["ibn-al-salah"], at: ["damascus"] },
      { y: 1270, c: true, text: "Al-Nawawi writes his commentary on Muslim’s Sahih.", who: ["nawawi"], at: ["damascus"] },
      { y: 1330, c: true, text: "In Mamluk Damascus, Zaynab bint al-Kamal presides over large mixed assemblies transmitting canonical hadith collections well into her nineties.", who: ["zaynab-bint-kamal"], at: ["damascus"] },
      { y: 1400, c: true, text: "In Damascus, Aisha bint Abd al-Hadi transmits al-Bukhari’s Sahih as the last surviving student of al-Hajjar, teaching scholars including Ibn Hajar al-Asqalani.", who: ["aisha-bint-abd-al-hadi"], at: ["damascus"] },
      { y: 1438, text: "Ibn Hajar completes Fath al-Bari, his commentary on al-Bukhari.", who: ["ibn-hajar"], at: ["cairo"] }
    ],
    related: ["reason-law"] },

  { id: "reason-law", title: "Reason and text in the law", term: "al-ra’y wa’l-athar", ar: "الرأي والأثر",
    phases: [[690, 900], [1030, 1065]], lanes: ["law"],
    question: "When the texts are silent, how far may a jurist reason, and by what rules?",
    text: "Early jurists differed on how to reach rulings. The circle of Kufa used reasoned opinion and analogy freely; hadith-minded jurists such as Ibn Hanbal preferred a reported tradition, even one classed as “weak” in early usage (a broad label that covered what later critics called fair, hasan, not fabrications), over personal opinion. Al-Shafi’i proposed a method that ranked the sources and limited reasoning to analogy.",
    positions: [
      { name: "Reasoned opinion and analogy", text: "Where the texts are silent, the jurist reasons from their purposes and from similar cases.", who: ["jabir-ibn-zayd", "abu-hanifa"], notes: { "jabir-ibn-zayd": "In Basra, Jabir ibn Zayd issued legal opinions (fatwas) combining reports from Companions such as Ibn Abbas with reasoned personal judgment (ra’y), laying foundations remembered in both Ibadi and early Sunni law." } },
      { name: "The practice of Medina", text: "The living practice of the Prophet’s city is itself evidence of his sunna.", who: ["malik"] },
      { name: "Ranked sources", text: "Qur’an, sunna known through hadith, consensus and analogy, in that order.", who: ["shafii"] },
      { name: "Hadith before reasoning", text: "A report from the Prophet or the Companions outweighs any opinion.", who: ["ibn-hanbal"] },
      { name: "The plain sense only", text: "Analogy is rejected; rulings come from the plain meaning of the texts.", who: ["ibn-hazm"] }
    ],
    thread: [
      { y: 690, c: true, text: "Jabir ibn Zayd teaches law and issues reasoned legal opinions (fatwas) in Basra.", who: ["jabir-ibn-zayd"], at: ["basra"] },
      { y: 740, c: true, text: "Abu Hanifa teaches in Kufa, using reasoned opinion and analogy.", who: ["abu-hanifa"], at: ["kufa"] },
      { y: 770, c: true, text: "Malik compiles the Muwatta’ in Medina.", who: ["malik"], at: ["medina"] },
      { y: 815, c: true, text: "Al-Shafi’i revises the Risala in Egypt.", who: ["shafii"], at: ["fustat"] },
      { y: 840, c: true, text: "Ibn Hanbal’s circle in Baghdad gives priority to reports.", who: ["ibn-hanbal"], at: ["baghdad"] },
      { y: 1050, c: true, text: "Ibn Hazm defends the Zahiri rejection of analogy in Cordoba.", who: ["ibn-hazm"], at: ["cordoba"] }
    ],
    related: ["hadith-criticism", "ijtihad"] },

  { id: "attributes", title: "The divine attributes", term: "al-sifat", ar: "الصفات",
    phases: [[745, 1100], [1290, 1330]], lanes: ["theology"],
    question: "How should scripture’s descriptions of God be understood?",
    text: "Scripture speaks of God’s hand, face and hearing, and says that He istawa ’ala al-’arsh (Q. 20:5), rendered “rose over”, “settled on” or “established Himself on” the throne. Some read such words as attributes to be affirmed, some interpreted them figuratively, and some denied that attributes are distinct from God’s essence. The question shaped every theological school and returned sharply in Mamluk Damascus and Cairo.",
    positions: [
      { name: "No attributes distinct from the essence", text: "To protect God’s unity, His knowledge and power are not things added to His essence.", who: ["wasil", "abd-al-jabbar"], notes: { "abd-al-jabbar": "Following Abu Hashim, Abd al-Jabbar explained God’s being knowing and powerful as states (ahwal) He has by virtue of His essence, not as attributes added to it." } },
      { name: "Affirm without asking how", text: "Accept the texts as they come, without likening God to creatures and without explaining them away.", who: ["ibn-hanbal", "ibn-taymiyya"], notes: { "ibn-taymiyya": "Ibn Taymiyya held that the linguistic meaning (ma’na) of God’s attributes is known from ordinary Arabic usage, while their modality (kayfiyya), how they belong to God, remains unknown and utterly unlike created things." } },
      { name: "Eternal attributes affirmed by argument", text: "God has eternal attributes such as knowledge, power and speech, and reason can argue for them. Maturidis add that God’s act of bringing things into being (takwin) is itself an eternal attribute.", who: ["ashari", "maturidi", "taftazani"], notes: { maturidi: "In Kitab al-Tawhid al-Maturidi argues that God’s creating is as eternal as His knowledge and power and distinct from the things created, and reads God’s “rising over the Throne” as neither sitting nor direction, since the Throne is itself created.", taftazani: "In his commentary on al-Nasafi’s creed (1367), al-Taftazani accepted the Maturidi view that takwin is an eternal attribute; his later works side with the Ash’aris." } },
      { name: "Figurative reading of bodily terms", text: "Texts that seem to give God a body or a place may be read figuratively, by their sense in Arabic and the demands of reason.", who: ["juwayni", "fakhr-razi"] }
    ],
    thread: [
      { y: 745, c: true, text: "The early Mu’tazila deny that God’s attributes are distinct from His essence.", who: ["wasil"], at: ["basra"] },
      { y: 833, text: "The Mihna turns the question of God’s speech into state policy.", who: ["ibn-hanbal"], at: ["baghdad"] },
      { y: 915, c: true, text: "Al-Ash’ari affirms the attributes with rational argument.", who: ["ashari"], at: ["baghdad"] },
      { y: 1075, c: true, text: "Al-Juwayni allows figurative interpretation of anthropomorphic texts.", who: ["juwayni"], at: ["nishapur"] },
      { y: 1200, c: true, text: "Fakhr al-Din al-Razi’s Foundation of Sanctification argues for interpretation.", who: ["fakhr-razi"], at: ["herat"] },
      { y: 1306, text: "Ibn Taymiyya’s creed is examined in Damascus and he is imprisoned in Cairo.", who: ["ibn-taymiyya"], at: ["damascus", "cairo"] }
    ],
    related: ["created-quran", "free-will"] },

  { id: "good-evil", title: "Reason and the knowledge of good and evil", term: "al-tahsin wa’l-taqbih", ar: "التحسين والتقبيح",
    phases: [[780, 1110]], lanes: ["theology", "law"],
    question: "Is an act good because God commands it, or commanded because it is good?",
    text: "The Mu’tazila held that reason knows justice and lying to be good and bad in themselves, and that God acts by these standards. The Ash’aris held that good is what God commands, and that nothing is obligatory before revelation. The Maturidis held that reason can know good and evil and some duties, such as the duty to know God, while revelation settles the rest. The answer shaped how jurists reasoned about cases the texts do not cover.",
    positions: [
      { name: "Reason knows good and evil", text: "Justice and gratitude are good and lying is bad in themselves, and reason can know this without revelation.", who: ["abd-al-jabbar", "jahiz", "mufid"] },
      { name: "Good is what God commands", text: "Acts have no moral value in themselves; revelation alone makes them obligatory or forbidden.", who: ["ashari", "juwayni", "ghazali"] },
      { name: "Reason knows, revelation completes", text: "Reason can know good and evil and some duties, such as the duty to know God, even without revelation; revelation settles what reason cannot.", who: ["maturidi"] }
    ],
    thread: [
      { y: 800, c: true, text: "The Basran Mu’tazila make God’s justice and rational ethics central.", who: [], at: ["basra"] },
      { y: 925, c: true, text: "Al-Ash’ari argues that God’s command defines the good.", who: ["ashari"], at: ["baghdad"] },
      { y: 935, c: true, text: "Al-Maturidi in Samarkand holds that reason can know good and evil, and the duty to know God, before revelation.", who: ["maturidi"], at: ["samarkand"] },
      { y: 1000, c: true, text: "Al-Mufid and Qadi Abd al-Jabbar defend rational ethics.", who: ["mufid", "abd-al-jabbar"], at: ["baghdad", "rayy"] },
      { y: 1080, c: true, text: "Al-Juwayni restates the Ash’ari view.", who: ["juwayni"], at: ["nishapur"] },
      { y: 1109, text: "Al-Ghazali’s al-Mustasfa treats the question at the start of legal theory.", who: ["ghazali"], at: ["tus"] }
    ],
    related: ["free-will", "maqasid"] },

  { id: "sufism-law", title: "Sufism and the Law", term: "al-tasawwuf wa’l-shari’a", ar: "التصوف والشريعة",
    phases: [[780, 1200], [1295, 1330], [1495, 1520], [1635, 1790]], lanes: ["sufism", "law"],
    question: "What is the place of inner experience beside the outward Law?",
    text: "As ascetics became Sufis, they described states of the heart and a knowledge beyond outward rules. Some jurists feared this would loosen obedience to the Law; Sufi authors replied that the inner path fulfils it. Al-Hallaj’s execution sharpened the debate, and al-Qushayri and al-Ghazali gave Sufism a lasting place within Sunni learning, while critics such as Ibn al-Jawzi and Ibn Taymiyya policed the boundary between sober piety and unlawful innovation. From Aceh to Nanjing and Cairo, early modern jurist-Sufis continued to tie mystical devotion closely to the Sharia.",
    positions: [
      { name: "Love beyond reward", text: "God is to be loved for Himself, not for paradise or out of fear of hell.", who: ["rabia"] },
      { name: "The path within the Law", text: "Mystical experience is valid only within the bounds of the Law; sobriety is higher than ecstasy.", who: ["junayd", "qushayri", "ghazali", "jilani", "aisha-bauniyya", "raniri", "liu-zhi", "zabidi"], notes: { "aisha-bauniyya": "In al-Muntakhab fi usul al-rutab (The Principles of Sufism), Aisha al-Ba’uniyya grounded the four fundamental principles of the Sufi path (repentance, sincerity, remembrance and love) in the Qur’an, prophetic traditions and the teachings of earlier Sufi masters.", raniri: "As Shaykh al-Islam of Aceh, Nur al-Din al-Raniri compiled Sirat al-mustaqim to ground Malay ritual law in the Shafi’i school while attacking wujudiyya mystics he judged to have crossed the bounds of the Sharia.", "liu-zhi": "In Tianfang dianli (Norms and Rites of Islam, 1710), Liu Zhi paired Sufi metaphysics with a full exposition of Islamic ritual law and ethics in classical Chinese, presenting outward observance and inner realization as inseparable.", zabidi: "In Ithaf al-sada al-muttaqin, his monumental ten-volume commentary on al-Ghazali’s Revival of the Religious Sciences, Murtada al-Zabidi defended the union of hadith, Hanafi jurisprudence and sober Sufism for eighteenth-century scholars." } },
      { name: "Speech from the state of union", text: "Ecstatic sayings attributed to al-Hallaj, such as “I am the Truth”, were read as the mystic speaking from union with God; their meaning and his intent remain disputed.", who: ["hallaj"] },
      { name: "Suspicion of new practices", text: "Some jurists and hadith scholars opposed Sufi claims to special knowledge and practices such as listening to music.", who: ["ibn-al-jawzi", "ibn-taymiyya"], notes: { "ibn-al-jawzi": "In Talbis Iblis (The Devil’s Deception), Ibn al-Jawzi distinguished early pious ascetics, whom he praised in Sifat al-safwa, from later Sufis whose ecstatic practices, music and claims to unmediated knowledge he attacked as deviations from the Law.", "ibn-taymiyya": "Ibn Taymiyya did not reject Sufism altogether: he praised early sober masters such as al-Junayd who stayed within the Qur’an and Sunna, while fiercely attacking later ecstatic practices, sama’ gatherings and the doctrine of wahdat al-wujud as unlawful innovations." } }
    ],
    thread: [
      { y: 780, c: true, text: "Rabi’a teaches the love of God for His own sake in Basra.", who: ["rabia"], at: ["basra"] },
      { y: 880, c: true, text: "Al-Junayd teaches sober Sufism in Baghdad.", who: ["junayd"], at: ["baghdad"] },
      { y: 922, text: "Al-Hallaj is executed in Baghdad after a long trial.", who: ["hallaj"], at: ["baghdad"] },
      { y: 1045, text: "Al-Qushayri writes his Epistle in Nishapur.", who: ["qushayri"], at: ["nishapur"] },
      { y: 1100, c: true, text: "Al-Ghazali writes The Revival of the Religious Sciences after leaving Baghdad.", who: ["ghazali"], at: ["damascus", "tus"] },
      { y: 1127, text: "Abd al-Qadir al-Jilani, trained in Hanbali law, begins preaching in Baghdad; his sermons and books join Hanbali law with Sufism.", who: ["jilani"], at: ["baghdad"] },
      { y: 1190, c: true, text: "In Baghdad, Ibn al-Jawzi writes Talbis Iblis, warning that later Sufi innovations depart from prophetic law while commending early ascetics.", who: ["ibn-al-jawzi"], at: ["baghdad"] },
      { y: 1315, c: true, text: "After returning to Damascus in 1313, Ibn Taymiyya and his circle write against Sufi practices and doctrines they judge contrary to the Law, while commending early sober masters who stayed within Qur’an and Sunna.", who: ["ibn-taymiyya"], at: ["damascus"] },
      { y: 1513, c: true, text: "Aisha al-Ba’uniyya moves from Damascus to Cairo (919 AH), where she is licensed to teach law and issue fatwas alongside her Sufi writings, including al-Muntakhab fi usul al-rutab.", who: ["aisha-bauniyya"], at: ["damascus", "cairo"] },
      { y: 1787, text: "In Cairo, Murtada al-Zabidi completes Ithaf al-sada al-muttaqin (1201 AH / 1787), his vast commentary linking al-Ghazali’s Sufi ethics with hadith and Sunni jurisprudence.", who: ["zabidi"], at: ["cairo"] }
    ],
    related: ["unity-being", "sama"] },

  { id: "created-quran", title: "The createdness of the Qur’an and the Mihna", term: "khalq al-Qur’an", ar: "خلق القرآن",
    phases: [[800, 855]], lanes: ["theology"],
    question: "Is the Qur’an, as God’s speech, created or eternal?",
    text: "The Mu’tazila held that the Qur’an was created in time, since only God is eternal. In 833 Caliph al-Ma’mun required judges and scholars to affirm this, an inquisition known as the Mihna. Ahmad ibn Hanbal refused and was flogged. The Mihna ended under al-Mutawakkil, and the uncreated Qur’an became the Sunni position.",
    positions: [
      { name: "Created", text: "Only God is eternal, so His speech as revealed and recited is created.", who: ["jahiz", "abd-al-jabbar"], notes: { jahiz: "Al-Jahiz, who enjoyed the patronage of the chief judge Ibn Abi Du’ad, wrote against the hadith scholars as anthropomorphists. In his epistle Khalq al-Qur’an he gave his own polemical account of the inquisition, maintaining that Ahmad ibn Hanbal debated his interrogators, yielded in argument, and was struck only thirty times with whips that posed no danger to his life.", "abd-al-jabbar": "In the seventh part of al-Mughni, Abd al-Jabbar argues that speech is ordered letters and sounds, which can exist only in time, so God’s speech is created; God is called speaking because He makes speech." } },
      { name: "Uncreated", text: "The Qur’an is God’s speech and is not created.", who: ["ibn-hanbal", "bukhari", "tahawi"], notes: { bukhari: "In Khalq af’al al-’ibad, al-Bukhari affirmed that the Qur’an itself is God’s uncreated speech while holding that human acts, including the act of reciting it, are created, a distinction that drew fierce opposition in Nishapur.", tahawi: "Al-Tahawi’s creed says the Qur’an came from God as speech “without how”, sent down as revelation, and is not created like human speech; whoever hears it and calls it human speech has disbelieved." } },
      { name: "Eternal speech, created recitation", text: "God’s speech is an eternal attribute; the letters, sounds and copies are created.", who: ["ashari", "maturidi"], notes: { maturidi: "Unlike the Ash’ari view that God’s eternal speech can be heard, al-Maturidi taught that the eternal speech cannot itself be heard: what reaches the ear is created sound and letters that express it." } }
    ],
    thread: [
      { y: 827, text: "Al-Ma’mun proclaims that the Qur’an is created.", who: [], at: ["baghdad"] },
      { y: 833, text: "The Mihna begins: judges and scholars must affirm the doctrine.", who: [], at: ["baghdad"] },
      { y: 834, c: true, text: "Ibn Hanbal refuses, and is imprisoned and flogged under al-Mu’tasim.", who: ["ibn-hanbal"], at: ["baghdad"] },
      { y: 848, c: true, text: "Al-Mutawakkil abandons the Mihna in 234 AH (848–849) and forbids debate over whether the Qur’an is created; some historians date its full end to 851–852.", who: [], at: ["samarra"] },
      { y: 864, c: true, text: "In Nishapur al-Bukhari is accused over whether the recitation of the Qur’an is created.", who: ["bukhari"], at: ["nishapur"] },
      { y: 915, c: true, text: "Al-Ash’ari separates God’s eternal speech from its created expression.", who: ["ashari"], at: ["baghdad"] }
    ],
    related: ["attributes", "ijaz"] },

  { id: "philosophy", title: "Philosophy and revelation", term: "al-falsafa wa’l-shar’", ar: "الفلسفة والشرع",
    phases: [[830, 1210], [1250, 1380], [1590, 1635]], lanes: ["philosophy", "theology"],
    question: "Can Greek philosophy and revelation both be true, and who decides when they seem to clash?",
    text: "The translation of Greek works raised the question of whether philosophy and revelation agree. Al-Kindi and al-Farabi argued that they reach the same truth by different paths; Ibn Sina built a complete system, and the Isma’ili philosopher Nasir-i Khusraw likewise sought to harmonise Greek philosophy with revelation. Al-Ghazali judged three of the philosophers’ doctrines to be unbelief. Ibn Rushd replied that the Law commands philosophical study of those capable of demonstration, and Nasir al-Din al-Tusi defended Ibn Sina against Fakhr al-Din al-Razi’s critiques. Earlier, Abu Bakr al-Razi was reported to deny that prophets are needed at all; later, Ibn Taymiyya refuted Greek logic and metaphysics while Ibn Khaldun kept logic but doubted that the philosophers’ metaphysics could be proven. In the seventeenth century Mir Damad forged the Safavid synthesis of Isfahan.",
    positions: [
      { name: "One truth, two paths", text: "Philosophy and revelation express the same truth, one by demonstration and the other by images for all people.", who: ["kindi", "farabi", "ibn-sina", "nasir-khusraw", "ibn-tufayl", "nasir-tusi"], notes: { kindi: "Unlike al-Farabi and Ibn Sina, al-Kindi did not frame revelation as symbolic imagery for the masses: he treated prophetic knowledge as a direct divine science that philosophy also expresses rationally, and he broke with Aristotle to argue for creation from nothing (ex nihilo).", "nasir-khusraw": "In Jami’ al-hikmatayn (Harmony of the Two Wisdoms, 462 AH / 1069–1070), Nasir-i Khusraw sought to reconcile Greek philosophy with Isma’ili scriptural interpretation (ta’wil), presenting both as expressions of a single divine wisdom.", "nasir-tusi": "In his commentary on Ibn Sina’s Isharat (Remarks and Admonitions) and in Talkhis al-muhassal, Nasir al-Din al-Tusi defended Avicennan philosophy against Fakhr al-Din al-Razi’s theological critiques and helped integrate it into later Shi’i and Sunni learning." } },
      { name: "Philosophy errs on key points", text: "Logic and mathematics are sound, but three of the philosophers’ teachings contradict revelation, as al-Ghazali reads them: the eternity of the world, that God knows particulars only in a universal way, and the denial of bodily resurrection.", who: ["ghazali"] },
      { name: "The Law commands philosophy", text: "In the Decisive Treatise, scripture obliges those able to reason by demonstration to study philosophy, and where demonstration and the text seem to clash, the text is to be interpreted. The Incoherence of the Incoherence answers al-Ghazali point by point.", who: ["ibn-rushd"] },
      { name: "Wisdom by illumination", text: "True philosophy joins reasoning with direct experience of light.", who: ["suhrawardi", "mir-damad"], notes: { "mir-damad": "In al-Qabasat, Mir Damad fused Ibn Sina’s Peripatetic philosophy with Suhrawardi’s Illuminationism and Shi’i theology, proposing “perpetual creation” (huduth dahri) to resolve the clash between the world’s eternity and its creation." } },
      { name: "Reason without prophets", text: "God gives reason to all people equally, so no one is singled out to bring a revealed law, and revelation is not needed. This view is known mainly from the account of a hostile opponent.", who: ["abu-bakr-razi"] },
      { name: "Sound reason agrees with revelation, not Greek logic", text: "Authentic revelation never contradicts clear reason, but Aristotelian logic and Avicennan metaphysics rest on flawed premises and must be rejected.", who: ["ibn-taymiyya"], notes: { "ibn-taymiyya": "In al-Radd ala al-mantiqiyyin (begun in Alexandria in 1309–1310) and Dar’ ta’arud al-aql wa’l-naql (composed after 1313), Ibn Taymiyya attacked Aristotelian logic and Avicennan metaphysics while arguing that sound reason and human nature (fitra) always accord with authentic revelation." } },
      { name: "Logic yes, metaphysics unproven", text: "Logic is a sound tool, but the philosophers’ claims about what lies beyond the senses cannot be proven and do not bring the happiness they promise.", who: ["ibn-khaldun"] }
    ],
    thread: [
      { y: 838, c: true, text: "Al-Kindi dedicates On First Philosophy to the caliph al-Mu’tasim (r. 833–842).", who: ["kindi"], at: ["baghdad"] },
      { y: 920, c: true, text: "In Rayy, the Isma’ili missionary Abu Hatim al-Razi debates Abu Bakr al-Razi face to face; his later Proofs of Prophecy has al-Razi deny that prophets are needed.", who: ["abu-bakr-razi"], at: ["rayy"] },
      { y: 940, c: true, text: "Al-Farabi writes on the virtuous city.", who: ["farabi"], at: ["baghdad", "aleppo"] },
      { y: 1020, c: true, text: "Ibn Sina writes The Book of Healing.", who: ["ibn-sina"], at: ["hamadan", "isfahan"] },
      { y: 1070, c: true, text: "In exile at Yumgan in Badakhshan, Nasir-i Khusraw writes Jami’ al-hikmatayn (462 AH / 1069–1070), arguing that Greek philosophy and Isma’ili revelation express one truth.", who: ["nasir-khusraw"], at: ["yumgan"] },
      { y: 1095, text: "Al-Ghazali writes The Incoherence of the Philosophers.", who: ["ghazali"], at: ["baghdad"] },
      { y: 1170, c: true, text: "Ibn Tufayl writes Hayy ibn Yaqzan in Marrakesh.", who: ["ibn-tufayl"], at: ["marrakesh"] },
      { y: 1180, c: true, text: "Ibn Rushd answers al-Ghazali in The Incoherence of the Incoherence.", who: ["ibn-rushd"], at: ["cordoba"] },
      { y: 1186, c: true, text: "Suhrawardi writes The Philosophy of Illumination.", who: ["suhrawardi"], at: ["aleppo"] },
      { y: 1205, c: true, text: "Fakhr al-Din al-Razi draws philosophy into theology.", who: ["fakhr-razi"], at: ["herat"] },
      { y: 1315, c: true, text: "In Damascus, Ibn Taymiyya writes Dar’ ta’arud al-aql wa’l-naql (Averting Conflict between Reason and Revelation), following his Refutation of the Logicians.", who: ["ibn-taymiyya"], at: ["damascus"] },
      { y: 1377, text: "At Qal’at Ibn Salama, Ibn Khaldun completes the first draft of the Muqaddima, which he went on revising; its survey of the sciences includes a refutation of philosophy.", who: ["ibn-khaldun"], at: ["qalat"] },
      { y: 1625, c: true, text: "In Safavid Isfahan, Mir Damad completes al-Qabasat (1034 AH / 1624–1625), joining Avicennan metaphysics and Illuminationism around the doctrine of perpetual creation (huduth dahri).", who: ["mir-damad"], at: ["isfahan"] }
    ],
    related: ["heavens", "unity-being"] },

  { id: "ijaz", title: "What makes the Qur’an inimitable", term: "i’jaz al-Qur’an", ar: "إعجاز القرآن",
    phases: [[830, 1080], [1130, 1210], [1960, 1975]], lanes: ["quran", "letters", "theology"],
    question: "The Qur’an challenges its hearers to produce its like. Why could no one do so?",
    text: "Theologians agreed that no one could match the Qur’an but disagreed on why. Al-Nazzam held that God turned people away from trying, a view called sarfa. Al-Jahiz and later Qadi Abd al-Jabbar located the miracle in its eloquence. In the eleventh century Abd al-Qahir al-Jurjani argued that it lies in nazm, the way words are arranged to carry meaning, and his theory shaped later commentary, the science of rhetoric and twentieth-century literary exegesis.",
    positions: [
      { name: "God turned them away (sarfa)", text: "The Qur’an’s language was not beyond the Arabs in itself, but God prevented them from matching it; that prevention is the miracle.", who: ["nazzam"] },
      { name: "Eloquence beyond human reach", text: "The miracle lies in the Qur’an’s eloquence, which reaches a degree no human speaker can attain.", who: ["jahiz", "abd-al-jabbar"] },
      { name: "The arrangement of words (nazm)", text: "The miracle lies in nazm: the way words are joined through the meanings of grammar to say exactly what is meant. Sarfa would make the miracle the silencing of the Arabs rather than the text itself.", who: ["jurjani", "zamakhshari", "fakhr-razi", "bint-al-shati"], notes: { "fakhr-razi": "In Nihayat al-i’jaz, a reworking of al-Jurjani’s two books, Fakhr al-Din al-Razi rejects sarfa with three arguments; his later Qur’an commentary, while stressing eloquence, implicitly allows it.", "bint-al-shati": "Drawing on classical Arabic rhetoric and her teacher Amin al-Khuli’s literary method, Bint al-Shati’ analysed the Qur’an’s rhetorical inimitability (al-i’jaz al-bayani) through its precise lexical choices and semantic consistency across the whole text." } }
    ],
    thread: [
      { y: 830, c: true, text: "Al-Nazzam teaches that God turned the Arabs away from matching the Qur’an.", who: ["nazzam"], at: ["baghdad"] },
      { y: 850, c: true, text: "Al-Jahiz, al-Nazzam’s student, explains the Qur’an’s inimitability through its rhetoric instead.", who: ["jahiz"], at: ["basra"] },
      { y: 985, c: true, text: "Qadi Abd al-Jabbar devotes a volume of al-Mughni to the Qur’an’s inimitability.", who: ["abd-al-jabbar"], at: ["rayy"] },
      { y: 1070, c: true, text: "Abd al-Qahir al-Jurjani writes The Proofs of Inimitability, rejecting sarfa and grounding the miracle in nazm.", who: ["jurjani"], at: ["jurjan"] },
      { y: 1134, text: "Al-Zamakhshari completes al-Kashshaf; its introduction holds that only masters of the sciences of meaning and expression can reach the Qur’an’s secrets.", who: ["zamakhshari"], at: ["mecca"] },
      { y: 1969, c: true, text: "In Cairo, Bint al-Shati’ completes the two-volume al-Tafsir al-bayani (1962–1969) and writes on the Qur’an’s rhetorical inimitability (al-i’jaz al-bayani), treating each word’s placement as irreplaceable.", who: ["bint-al-shati"], at: ["cairo"] }
    ],
    related: ["tafsir", "created-quran"] },

  { id: "tafsir", title: "How to interpret the Qur’an", term: "manahij al-tafsir", ar: "مناهج التفسير",
    phases: [[870, 1685], [1880, 1990]], lanes: ["quran"],
    question: "Should the Qur’an be read through transmitted reports, through language and reason, or through inner insight?",
    text: "Commentators differed on the sources of interpretation. Some built on reports from the Prophet and early authorities; others drew on grammar, rhetoric and theology; Sufis read inner meanings. Modern scholars asked how the Qur’an speaks to new societies, and some proposed reading it through itself or through its purposes.",
    positions: [
      { name: "By transmitted reports", text: "Explain verses by the reports of the Prophet, the Companions and their successors.", who: ["ibn-abbas", "tabari", "ibn-kathir", "suyuti", "sinkili"], notes: { sinkili: "In Tarjuman al-mustafid (c. 1675), the earliest complete Qur’an commentary in Malay, Abd al-Ra’uf al-Sinkili drew closely on Tafsir al-Jalalayn alongside classical Sunni commentaries and transmitted reports to bring standard exegesis to Southeast Asia." } },
      { name: "By language and reason", text: "Explain verses through grammar, rhetoric and reasoned argument.", who: ["maturidi", "zamakhshari", "fakhr-razi", "ebussuud", "bint-al-shati"], notes: { maturidi: "In Ta’wilat al-Qur’an, al-Maturidi distinguished tafsir (certain explanations transmitted from the Companions) from ta’wil (reasoned theological and linguistic interpretation open to jurists and theologians).", ebussuud: "In Irshad al-aql al-salim, completed c. 1566, Ebussuud read the Qur’an through Arabic rhetoric and linguistic analysis, building on al-Zamakhshari, Fakhr al-Din al-Razi and al-Baydawi; his commentary became a standard text across Ottoman madrasas.", "bint-al-shati": "In al-Tafsir al-bayani (1962–1969), Bint al-Shati’ read short Meccan suras through Arabic philology, literary context and cross-referencing every occurrence of a term across the Qur’an itself, rejecting sectarian and extraneous elaborations." } },
      { name: "By inner allusions (ishari)", text: "Beyond the outward meaning, verses carry subtle inner allusions disclosed to the purified heart, without setting aside the literal text.", who: ["qushayri"], notes: { qushayri: "In Lata’if al-isharat, begun in Nishapur in the 1040s, al-Qushayri reads the entire Qur’an for its spiritual allusions while keeping his commentary within the bounds of Sunni creed and law." } },
      { name: "By the Qur’an itself", text: "Verses are best explained by other verses.", who: ["tabatabai", "ibn-kathir", "bint-al-shati"] },
      { name: "By its purposes for today", text: "Read the Qur’an as moral guidance whose purposes speak to present societies.", who: ["sayyid-ahmad-khan", "abduh", "rida", "mawdudi", "ibn-ashur", "fazlur-rahman"], notes: { "sayyid-ahmad-khan": "In his Urdu Tafsir al-Qur’an and his principles of exegesis (Tahrir fi usul al-tafsir, 1892), Sayyid Ahmad Khan argued that the word of God (revelation) cannot contradict the work of God (the law of nature), reading apparent miracles metaphorically.", mawdudi: "In his six-volume Urdu commentary Tafhim al-Qur’an, Abul A’la Mawdudi read the Qur’an as a practical movement-building guide to establishing an Islamic moral, social and political order in the modern world." } }
    ],
    thread: [
      { y: 680, c: true, text: "Ibn Abbas explains the Qur’an to students in Mecca.", who: ["ibn-abbas"], at: ["mecca"] },
      { y: 903, c: true, text: "Al-Tabari completes his commentary.", who: ["tabari"], at: ["baghdad"] },
      { y: 1045, c: true, text: "Al-Qushayri begins Lata’if al-isharat in Nishapur in 437 AH (1045–1046 CE), reading the Qur’an for its Sufi allusions (isharat).", who: ["qushayri"], at: ["nishapur"] },
      { y: 1134, text: "Al-Zamakhshari completes al-Kashshaf in Mecca.", who: ["zamakhshari"], at: ["mecca"] },
      { y: 1205, c: true, text: "Fakhr al-Din al-Razi writes The Keys to the Unseen.", who: ["fakhr-razi"], at: ["herat"] },
      { y: 1360, c: true, text: "Ibn Kathir writes his commentary in Damascus.", who: ["ibn-kathir"], at: ["damascus"] },
      { y: 1466, text: "Al-Suyuti completes his part of the Tafsir al-Jalalayn, begun by al-Mahalli, on 10 Shawwal 870 AH.", who: ["suyuti"], at: ["cairo"] },
      { y: 1566, c: true, text: "Ebussuud Efendi completes Irshad al-aql al-salim in Istanbul, a rhetorical and linguistic commentary that becomes standard across Ottoman madrasas.", who: ["ebussuud"], at: ["istanbul"] },
      { y: 1675, c: true, text: "In Aceh, Abd al-Ra’uf al-Sinkili completes Tarjuman al-mustafid, the earliest complete Qur’an commentary in Malay.", who: ["sinkili"], at: ["aceh"] },
      { y: 1892, text: "Sayyid Ahmad Khan publishes his principles of Qur’anic exegesis (Tahrir fi usul al-tafsir) in Agra, setting out his naturalistic reading of scripture in harmony with modern science.", who: ["sayyid-ahmad-khan"], at: ["agra"] },
      { y: 1900, c: true, text: "Abduh lectures on the Qur’an at al-Azhar; Rida publishes the lectures in al-Manar.", who: ["abduh", "rida"], at: ["cairo"] },
      { y: 1956, text: "The first volume of Ibn Ashur’s thirty-volume Qur’an commentary al-Tahrir wa’l-tanwir is printed in Tunis; the complete work is first printed there in 1984.", who: ["ibn-ashur"], at: ["tunis"] },
      { y: 1962, text: "In Cairo, Bint al-Shati’ publishes the first volume of al-Tafsir al-bayani, applying literary and intratextual analysis to Meccan suras.", who: ["bint-al-shati"], at: ["cairo"] },
      { y: 1972, c: true, text: "Tabataba’i completes al-Mizan in Qom.", who: ["tabatabai"], at: ["qom"] },
      { y: 1980, text: "Fazlur Rahman publishes Major Themes of the Qur’an.", who: ["fazlur-rahman"], at: ["chicago"] }
    ],
    related: ["reform", "ijaz"] },

  { id: "heavens", title: "Rethinking the heavens", term: "al-shukuk ala Batlamyus", ar: "الشكوك على بطلميوس",
    phases: [[1025, 1475]], lanes: ["sciences", "philosophy"],
    question: "Do Ptolemy’s models describe the real heavens?",
    text: "Astronomers accepted Ptolemy’s observations but objected that his models broke the principle of uniform circular motion. Ibn al-Haytham’s Doubts on Ptolemy opened a long effort to build better models. Omar Khayyam took part in the Seljuq astronomical observations behind the Jalali calendar; at Maragha, al-Tusi and his colleagues designed new planetary models, and in Damascus Ibn al-Shatir constructed uniform-motion models later echoed by Copernicus; Ulugh Beg’s observatory refined the numbers; Ali Qushji argued that astronomy need not depend on Aristotle’s physics.",
    positions: [
      { name: "Ptolemy’s models are physically impossible", text: "A model must be built from uniform circular motions that could really exist.", who: ["ibn-haytham"] },
      { name: "New models from uniform motions", text: "Combinations of circles, such as the Tusi couple, can reproduce the observed motions.", who: ["nasir-tusi", "ibn-al-shatir"], notes: { "ibn-al-shatir": "Working as head timekeeper at the Umayyad Mosque in Damascus, Ibn al-Shatir eliminated Ptolemy’s equant with double-epicycle and Tusi-couple mechanisms in Nihayat al-sul, producing planetary and lunar models mathematically equivalent to those later used by Copernicus." } },
      { name: "Better observations", text: "Large instruments and long observation give more exact parameters.", who: ["biruni", "omar-khayyam", "ulugh-beg"], notes: { "omar-khayyam": "Under Sultan Malikshah, Omar Khayyam took a prominent part in the Seljuq astronomical observations (usually placed at Isfahan) behind the Jalali solar calendar (inaugurated in 1079) and is associated with the Zij-i Malikshahi tables; Qutb al-Din al-Shirazi also credits him with a supplementary chapter to Ibn al-Haytham’s treatise on a problem in Ptolemaic planetary motion." } },
      { name: "Astronomy free of Aristotle", text: "Astronomy can rest on observation and mathematics rather than on natural philosophy.", who: ["qushji"] }
    ],
    thread: [
      { y: 1025, c: true, text: "Ibn al-Haytham writes Doubts on Ptolemy in Cairo.", who: ["ibn-haytham"], at: ["cairo"] },
      { y: 1031, c: true, text: "Al-Biruni works on The Mas’udic Canon in Ghazna; he still listed it among his unfinished works in 427 AH (1036 CE).", who: ["biruni"], at: ["ghazna"] },
      { y: 1079, text: "The Jalali solar calendar is inaugurated for Sultan Malikshah; Omar Khayyam was among the astronomers who took part in the observations behind it, usually placed at Isfahan.", who: ["omar-khayyam"], at: ["isfahan"] },
      { y: 1259, text: "The Maragha observatory is founded under al-Tusi’s direction, with Hulagu’s patronage.", who: ["nasir-tusi"], at: ["maragha"] },
      { y: 1261, text: "Al-Tusi presents his new planetary models in al-Tadhkira.", who: ["nasir-tusi"], at: ["maragha"] },
      { y: 1360, c: true, text: "In Damascus, Ibn al-Shatir composes Nihayat al-sul, devising non-Ptolemaic planetary and lunar models from uniform circular motions.", who: ["ibn-al-shatir"], at: ["damascus"] },
      { y: 1424, c: true, text: "Ulugh Beg’s observatory begins work in Samarkand.", who: ["ulugh-beg"], at: ["samarkand"] },
      { y: 1437, c: true, text: "The star catalogue of the Zij-i Sultani is completed; the broader observing programme continued to about 1440.", who: ["ulugh-beg", "qushji"], at: ["samarkand"] },
      { y: 1472, c: true, text: "Ali Qushji teaches in Istanbul.", who: ["qushji"], at: ["istanbul"] }
    ],
    related: ["philosophy"] },

  { id: "sama", title: "Music, dance and the remembrance of God", term: "al-sama’ wa’l-dhikr", ar: "السماع والذكر",
    phases: [[1040, 1200], [1250, 1390], [1545, 1730]], lanes: ["sufism", "law"],
    question: "May Sufis use music, dance and chanting aloud to draw near to God, or should remembrance be silent?",
    text: "Sufis gathered to listen to poetry and music (sama’) and to repeat the names of God (dhikr), sometimes with movement and dance. Al-Ghazali devoted a book of The Revival of the Religious Sciences to listening and set conditions for it; Hanbali critics such as Ibn al-Jawzi and Ibn Taymiyya called such gatherings an innovation. The orders differed as well: Rumi’s followers made music and turning their central ritual, while in Central Asia Baha’ al-Din Naqshband’s circle came to stand for silent remembrance and the Kubrawi tradition of Najm al-Din Kubra and Sayyid Ali Hamadani for vocal remembrance. In sixteenth- and seventeenth-century Istanbul, Ottoman jurists and writers such as Ebussuud and Katib Çelebi renewed the argument over singing and whirling remembrance (devran), and in Damascus Abd al-Ghani al-Nabulusi defended lawful musical listening against Kadızadeli critics.",
    positions: [
      { name: "Listening is lawful under conditions", text: "Listening to music and poetry is lawful and can stir the love of God when the time, the place and the company are right; it is forbidden where it stirs base desire.", who: ["qushayri", "ghazali", "katib-celebi", "nabulusi"], notes: { qushayri: "Al-Qushayri’s Risala holds that listening to poetry sung to fine melodies is permitted in general if the listener believes nothing forbidden, hears nothing the Law condemns and is not led by desire: poems were recited before the Prophet, and a melody does not change the ruling. Listening that makes one keener to obey God is recommended.", "katib-celebi": "In Mizan al-haqq (The Balance of Truth, c. 1656), Katib Çelebi intervened in the Istanbul dispute between Kadızadeli preachers and Sufi orders over singing (taghanni) and whirling remembrance (devran), defending a moderate view of music under proper conditions and warning against militant attempts to ban established customs.", nabulusi: "In Idah al-dalalat fi sama’ al-alat (Clarifying the Proofs on Listening to Musical Instruments), Abd al-Ghani al-Nabulusi argued within Hanafi jurisprudence that musical instruments and Sufi sama’ are permissible when free of immorality and distraction from duty." } },
      { name: "Music and turning as worship", text: "Listening to music with turning movement belongs to the path itself; it became the central ritual of Rumi’s followers.", who: ["rumi"] },
      { name: "Remembrance aloud", text: "God’s names are repeated aloud and in company, often with set movements of the body.", who: ["yasawi", "kubra", "hamadani"], notes: { kubra: "In Fawa’ih al-jamal and his manuals of Sufi training, Najm al-Din Kubra made disciplined repetition of the formula of divine unity (dhikr) with breath and bodily posture the centre of the Kubrawi path, moving from audible recitation on the tongue into the heart and opening into visions of coloured light." } },
      { name: "Remembrance in silence", text: "The heart repeats the remembrance without moving the tongue or body, which avoids display; vocal dhikr and music gatherings are not needed and may be unlawful.", who: ["naqshband"] },
      { name: "A forbidden innovation", text: "Gatherings for music and dance were unknown to the Prophet’s Companions and are an innovation in worship.", who: ["ibn-al-jawzi", "ibn-taymiyya", "ebussuud"], notes: { "ibn-al-jawzi": "In Talbis Iblis, Ibn al-Jawzi attacked Sufi musical listening (sama’), rhythmic chanting and dancing as innovations foreign to the Prophet and his Companions, warning that they excited passion rather than true devotion.", ebussuud: "As Ottoman chief jurist (şeyhülislam), Ebussuud issued fatwas sharply opposing Sufi whirling remembrance (devran) and ritual dancing (raqs) as unlawful innovations, rejecting earlier Ottoman rulings that had permitted them." } }
    ],
    thread: [
      { y: 1045, text: "In his Epistle, written in Nishapur, al-Qushayri sets out conditions under which listening to sung poetry is permitted.", who: ["qushayri"], at: ["nishapur"] },
      { y: 1100, c: true, text: "In The Revival of the Religious Sciences, al-Ghazali devotes a book to the proper conduct of listening and ecstasy.", who: ["ghazali"], at: ["damascus", "tus"] },
      { y: 1160, c: true, text: "Ahmad Yasawi teaches at Yasi; the Yasawi order that traces itself to him becomes known for remembrance with voice and movement.", who: ["yasawi"], at: ["turkistan"] },
      { y: 1190, c: true, text: "Ibn al-Jawzi’s Devil’s Deception attacks the Sufis’ listening and chanting as innovations.", who: ["ibn-al-jawzi"], at: ["baghdad"] },
      { y: 1250, c: true, text: "In Konya, Rumi makes listening to music and turning part of his circle’s worship.", who: ["rumi"], at: ["konya"] },
      { y: 1290, c: true, text: "Rumi’s son Sultan Walad organises his followers into the Mawlawi (Mevlevi) order, with the turning dance as its main ritual.", who: [], at: ["konya"] },
      { y: 1310, c: true, text: "Ibn Taymiyya and his circle write against Sufi listening as an innovation.", who: ["ibn-taymiyya"], at: ["damascus"] },
      { y: 1380, c: true, text: "In Central Asia, the followers of Naqshband and of Sayyid Ali Hamadani divide over silent and vocal remembrance; later biographies make the two masters the faces of each side.", who: ["naqshband", "hamadani"], at: ["bukhara", "kulob"] },
      { y: 1550, c: true, text: "In Istanbul, Ottoman chief jurist Ebussuud Efendi issues fatwas condemning Sufi whirling remembrance (devran) and ritual dancing as unlawful.", who: ["ebussuud"], at: ["istanbul"] },
      { y: 1656, c: true, text: "In Mizan al-haqq (The Balance of Truth), Katib Çelebi weighs the Istanbul disputes over singing and Sufi whirling, urging a middle course against militant efforts to ban them.", who: ["katib-celebi"], at: ["istanbul"] },
      { y: 1680, c: true, text: "In Damascus, Abd al-Ghani al-Nabulusi writes Idah al-dalalat defending lawful listening to musical instruments and Sufi devotion against puritan critics.", who: ["nabulusi"], at: ["damascus"] }
    ],
    related: ["sufism-law", "unity-being"] },

  { id: "ijtihad", title: "Ijtihad and taqlid", term: "al-ijtihad wa’l-taqlid", ar: "الاجتهاد والتقليد",
    phases: [[950, 1330], [1480, 1505], [1610, 1945]], lanes: ["law"],
    question: "Must later Muslims follow the established schools, or may scholars reason afresh from the sources?",
    text: "By the eleventh century the Sunni legal schools had settled their doctrine, and many jurists held that later scholars should follow it, though whether the “gate of ijtihad” was ever closed is itself debated by historians. Others insisted that qualified scholars must still reason from the sources. Earlier, Fatimid Isma’ili jurists rejected Sunni legal theory altogether in favour of the living Imam’s authority; among Twelver Shi’is, a seventeenth- and eighteenth-century dispute pitted Akhbaris, who rejected speculative legal theory and relied on the Imams’ reports, against Usulis, who upheld the ijtihad of living jurists. The wider question returned with force in the eighteenth and nineteenth centuries.",
    positions: [
      { name: "Follow the school’s settled doctrine", text: "Later jurists rule within their school, refining its established positions.", who: ["marghinani", "nawawi", "ahmad-baba", "thanawi"], notes: { "ahmad-baba": "Working within the settled Maliki tradition of Timbuktu and the Maghrib, Ahmad Baba compiled the biographical canon Nayl al-ibtihaj and applied classical Maliki principles to contemporary crises, notably rejecting ethnic enslavement of free Muslims in his 1615 fatwa Mi’raj al-su’ud.", thanawi: "Ashraf Ali Thanawi defended adherence to the Hanafi school (taqlid) against Ahl-i Hadith critics who urged bypassing the madhhabs, arguing that disciplined school scholarship safeguarded legal rigour while still accommodating carefully reasoned fatwas on modern questions." } },
      { name: "Ijtihad remains open", text: "Qualified scholars must reason from the Qur’an and hadith, and blind imitation is not allowed to them.", who: ["ibn-hazm", "ibn-rushd", "ibn-taymiyya", "ibn-qayyim", "suyuti", "shah-wali-allah", "shawkani", "marjani"], notes: { "ibn-rushd": "In Bidayat al-mujtahid (The Distinguished Jurist’s Primer), Ibn Rushd compared the legal schools’ rulings and the causes of their disagreement so that qualified jurists could reason directly from the sources rather than rely on school deference.", "ibn-qayyim": "In I’lam al-muwaqqi’in, Ibn Qayyim mounted a sweeping critique of blind imitation (taqlid) of legal schools over scriptural evidence, distinguishing uncritical taqlid from evidence-based following (ittiba’).", marjani: "In Nazurat al-haqq (Kazan, c. 1870), Marjani defended independent reasoning (ijtihad) against Volga-Ural scholars who dropped the night prayer in short northern summer nights, arguing that core scriptural duties outweigh later school precedent." } },
      { name: "Authority of the living Imam", text: "In Fatimid Isma’ili jurisprudence, personal opinion, analogy and juristic ijtihad are rejected because authoritative legal knowledge comes solely from the divinely guided Imam.", who: ["qadi-numan"], notes: { "qadi-numan": "In Kitab ikhtilaf usul al-madhahib, al-Qadi al-Nu’man attacked Sunni reliance on consensus, analogy and juristic ijtihad, insisting that only the designated Isma’ili Imam possesses infallible authority to declare the Law." } },
      { name: "Rely on the Imams’ reports (Akhbari)", text: "Law rests on the transmitted reports (akhbar) of the Imams; speculative legal theory and fallible juristic ijtihad are rejected, and where reports conflict or are silent, the scholar suspends judgment or exercises caution.", who: ["astarabadi"], notes: { astarabadi: "In al-Fawa’id al-madaniyya (1622), al-Astarabadi rejected speculative legal reasoning and juristic consensus as an independent source of law. He recognized consensus as agreement about an Imam’s position established through transmitted reports. He held that Qur’anic rulings could be known only through the Imams’ explanations preserved in those reports." } },
      { name: "Ijtihad by qualified jurists (Usuli)", text: "During the Occultation of the Twelfth Imam, lay believers follow a living qualified jurist (mujtahid), who derives legal rulings from the sources by principled reasoning.", who: ["hilli", "bihbahani"], notes: { bihbahani: "In Karbala, al-Wahid al-Bihbahani answered al-Astarabadi in al-Fawa’id al-usuliyya and Risalat al-ijtihad wa’l-akhbar, arguing that probabilistic juristic reasoning is unavoidable and securing the triumph of the Usuli school." } },
      { name: "Ijtihad for a new age", text: "Reform requires fresh reasoning on questions of law and society.", who: ["abduh", "rida", "iqbal"], notes: { rida: "In Muhawarat al-muslih wa’l-muqallid, dialogues between a reformer and an imitator (muqallid) first printed in al-Manar and issued as a book in 1906–07, Rashid Rida argues against taqlid and for ijtihad as the way to Muslim unity." } }
    ],
    thread: [
      { y: 955, c: true, text: "At the Fatimid capital al-Mansuriyya, al-Qadi al-Nu’man writes Kitab ikhtilaf usul al-madhahib, rejecting Sunni legal theory and ijtihad in favour of the living Imam’s authority.", who: ["qadi-numan"], at: ["mansuriyya"] },
      { y: 1050, c: true, text: "Ibn Hazm condemns imitation in law.", who: ["ibn-hazm"], at: ["cordoba"] },
      { y: 1190, c: true, text: "Al-Marghinani writes al-Hidaya, which becomes one of the most influential statements of Hanafi doctrine.", who: ["marghinani"], at: ["samarkand"] },
      { y: 1275, c: true, text: "Al-Nawawi sets out the Shafi’i school’s settled positions.", who: ["nawawi"], at: ["damascus"] },
      { y: 1300, c: true, text: "Ibn Taymiyya claims the right to independent judgment.", who: ["ibn-taymiyya"], at: ["damascus"] },
      { y: 1310, c: true, text: "Al-Hilli formalises ijtihad in Twelver law.", who: ["hilli"], at: ["hilla"] },
      { y: 1490, c: true, text: "Al-Suyuti claims the rank of mujtahid.", who: ["suyuti"], at: ["cairo"] },
      { y: 1615, c: true, text: "Back in Timbuktu, Ahmad Baba issues Mi’raj al-su’ud (1024 AH / 1615), applying classical Maliki jurisprudence to forbid enslaving free Muslims and to reject ethnic justifications for slavery.", who: ["ahmad-baba"], at: ["timbuktu"] },
      { y: 1622, text: "In Mecca, Muhammad Amin al-Astarabadi completes al-Fawa’id al-madaniyya, attacking Usuli legal theory and launching the Akhbari revival.", who: ["astarabadi"], at: ["mecca"] },
      { y: 1740, c: true, text: "Shah Wali Allah urges wider ijtihad in Delhi.", who: ["shah-wali-allah"], at: ["delhi"] },
      { y: 1770, c: true, text: "In Karbala, al-Wahid al-Bihbahani leads the Usuli counter-offensive against the Akhbaris, training a generation of mujtahids and securing Usuli dominance in Twelver law.", who: ["bihbahani"], at: ["karbala"] },
      { y: 1810, c: true, text: "Al-Shawkani argues against fixed adherence to a school.", who: ["shawkani"], at: ["sanaa"] },
      { y: 1870, c: true, text: "In Kazan, Shihab al-Din Marjani publishes Nazurat al-haqq, defending ijtihad against Volga-Ural scholars who suspended the night prayer during short northern summer nights.", who: ["marjani"], at: ["kazan"] },
      { y: 1900, c: true, text: "Muhammad Abduh calls for renewed ijtihad.", who: ["abduh"], at: ["cairo"] },
      { y: 1930, text: "Iqbal calls ijtihad “the principle of movement” in Islam.", who: ["iqbal"], at: ["lahore"] }
    ],
    related: ["reason-law", "maqasid", "renewal"] },

  { id: "maqasid", title: "The objectives of the Law", term: "maqasid al-shari’a", ar: "مقاصد الشريعة",
    phases: [[1060, 1390], [1900, 1975]], lanes: ["law"],
    question: "What purposes does the Law serve, and may they guide new rulings?",
    text: "Jurists asked what the Law is for. Al-Juwayni sketched the purposes it serves, and al-Ghazali named five necessities it protects: religion, life, intellect, lineage and property. Ibn Qayyim argued that the Law is justice and mercy throughout. Al-Shatibi made the objectives the frame of legal theory, and modern scholars revived them to guide new questions.",
    positions: [
      { name: "Purposes ranked by necessity", text: "The purposes behind rulings can be ranked, from necessities to general needs and refinements, and public interest counts within them.", who: ["juwayni"] },
      { name: "Objectives as a test of public interest", text: "A public interest counts when it serves one of the five necessities the Law protects: religion, life, intellect, lineage and property.", who: ["ghazali"] },
      { name: "The Law is justice", text: "Any ruling that leads away from justice and mercy is not part of the Law.", who: ["ibn-qayyim"] },
      { name: "Objectives as the structure of the Law", text: "The purposes of the Law are certain and organise all of its rulings.", who: ["shatibi"] },
      { name: "Objectives for modern rulings", text: "The objectives can guide rulings on questions the classical texts did not foresee.", who: ["ibn-ashur"] }
    ],
    thread: [
      { y: 1078, c: true, text: "Al-Juwayni discusses the Law’s purposes in al-Burhan.", who: ["juwayni"], at: ["nishapur"] },
      { y: 1109, text: "Al-Ghazali names the five necessities in al-Mustasfa.", who: ["ghazali"], at: ["tus"] },
      { y: 1340, c: true, text: "Ibn Qayyim writes that the Law is justice and mercy throughout.", who: ["ibn-qayyim"], at: ["damascus"] },
      { y: 1380, c: true, text: "Al-Shatibi writes The Concordances in Granada.", who: ["shatibi"], at: ["granada"] },
      { y: 1946, text: "Ibn Ashur publishes his treatise on the objectives of the Law.", who: ["ibn-ashur"], at: ["tunis"] }
    ],
    related: ["ijtihad", "good-evil"] },

  { id: "unity-being", title: "The unity of being and its critics", term: "wahdat al-wujud", ar: "وحدة الوجود",
    phases: [[1230, 1500], [1600, 1765]], lanes: ["sufism", "theology", "philosophy"],
    question: "If God alone truly exists, what is the reality of the world?",
    text: "Ibn Arabi taught that God alone has true existence and that all things are His self-manifestations. Later followers and critics called this teaching the unity of being, a phrase he did not use as its name. Critics such as Ibn Taymiyya held that it erased the line between Creator and creation. Jami and Abd al-Ghani al-Nabulusi defended it, and Han Kitab authors in China expressed it in classical Chinese; in Aceh, Nur al-Din al-Raniri attacked what he called heretical wujudiyya while Abd al-Ra’uf al-Sinkili sought a reconciling middle way; in Mughal India Ahmad Sirhindi proposed a “unity of witnessing”, and Shah Wali Allah tried to reconcile the two.",
    positions: [
      { name: "Unity of being", text: "God alone truly exists; the world is His self-manifestation.", who: ["ibn-arabi", "jami", "wang-daiyu", "nabulusi", "liu-zhi"], notes: { "wang-daiyu": "In Zhengjiao zhenquan (1642), Wang Daiyu drew on Persian Sufi metaphysics in the Ibn Arabi tradition to explain the “Real One” (Zhenyi) and the world’s dependence on God in Neo-Confucian philosophical terms.", nabulusi: "In al-Wujud al-haqq and commentaries on Ibn Arabi, Abd al-Ghani al-Nabulusi defended wahdat al-wujud as strict monotheism rather than pantheism, arguing that attributing real existence to God alone safeguards divine transcendence.", "liu-zhi": "In Tianfang xingli (Nature and Principle in Islam, 1704), Liu Zhi adapted Jami’s Lawa’ih and Ibn Arabi’s cosmology of divine self-manifestation into classical Chinese, structuring the cosmos as descending levels of God’s disclosure." } },
      { name: "Creator and creation must stay distinct", text: "The doctrine confuses God with the world and contradicts scripture.", who: ["ibn-taymiyya"] },
      { name: "Orthodox versus heretical wujudiyya", text: "Distinguish a Sharia-bound form of the unity of being that preserves divine transcendence from monistic readings judged to confuse Creator and creation.", who: ["raniri"], notes: { raniri: "Serving as Shaykh al-Islam of Aceh (1637–1644), Nur al-Din al-Raniri did not reject wahdat al-wujud altogether: in Malay and Arabic polemics such as Hujjat al-siddiq he distinguished an orthodox, Sharia-bound wujudiyya from the doctrines of Hamzah Fansuri and Shamsuddin al-Sumatrani, which he condemned as heretical monism blurring Creator and creation." } },
      { name: "Unity of witnessing", text: "The mystic experiences unity, but in reality God and the world remain distinct.", who: ["sirhindi"] },
      { name: "Gradation of being", text: "Existence is one reality in degrees of intensity.", who: ["mulla-sadra"] },
      { name: "Reconciliation", text: "The two views differ in wording more than in substance.", who: ["sinkili", "shah-wali-allah"], notes: { sinkili: "Returning to Aceh from Medina, Abd al-Ra’uf al-Sinkili softened al-Raniri’s polarising campaign against wujudiyya, drawing on his teacher Ibrahim al-Kurani to interpret the unity of being in harmony with divine transcendence and Sunni law." } }
    ],
    thread: [
      { y: 1229, text: "Ibn Arabi writes The Bezels of Wisdom in Damascus.", who: ["ibn-arabi"], at: ["damascus"] },
      { y: 1300, c: true, text: "Ibn Taymiyya attacks the doctrine.", who: ["ibn-taymiyya"], at: ["damascus"] },
      { y: 1480, c: true, text: "Jami defends and explains Ibn Arabi in Herat.", who: ["jami"], at: ["herat"] },
      { y: 1610, c: true, text: "Sirhindi’s letters propose the unity of witnessing.", who: ["sirhindi"], at: ["sirhind"] },
      { y: 1630, c: true, text: "Mulla Sadra completes The Four Journeys.", who: ["mulla-sadra"], at: ["shiraz"] },
      { y: 1640, c: true, text: "As Shaykh al-Islam of Aceh (1637–1644), Nur al-Din al-Raniri campaigns against Malay wujudiyya mystics in treatises such as Hujjat al-siddiq.", who: ["raniri"], at: ["aceh"] },
      { y: 1642, text: "In Nanjing, Wang Daiyu publishes Zhengjiao zhenquan (A Real Commentary on the True Teaching), presenting Islamic monotheism and Sufi metaphysics of the Real One in Neo-Confucian Chinese prose.", who: ["wang-daiyu"], at: ["nanjing"] },
      { y: 1665, c: true, text: "In Aceh, Abd al-Ra’uf al-Sinkili mediates the controversy over wujudiyya, framing Sufi metaphysics within Shafi’i law and Shattari devotion.", who: ["sinkili"], at: ["aceh"] },
      { y: 1685, c: true, text: "In Ottoman Damascus, Abd al-Ghani al-Nabulusi writes treatises such as al-Wujud al-haqq defending Ibn Arabi’s unity of being against puritan critics.", who: ["nabulusi"], at: ["damascus"] },
      { y: 1704, text: "In Nanjing, Liu Zhi completes Tianfang xingli, rendering Ibn Arabi’s and Jami’s metaphysics of being into classical Chinese.", who: ["liu-zhi"], at: ["nanjing"] },
      { y: 1745, c: true, text: "Shah Wali Allah seeks to reconcile the two views.", who: ["shah-wali-allah"], at: ["delhi"] }
    ],
    related: ["sufism-law", "philosophy", "sama"] },

  { id: "renewal", title: "Renewal and reform", term: "al-tajdid wa’l-islah", ar: "التجديد والإصلاح",
    phases: [[1680, 1920]], lanes: ["theology", "law", "hadith"],
    question: "How should the faith be renewed, and which inherited practices are corruptions?",
    text: "From the late seventeenth to the early twentieth century, scholars across the Muslim world called for renewal: a return to the Qur’an and hadith and the correction of practices they judged to be innovations. The movements differed widely in method and aim. Many Sufis and school jurists defended inherited practice against them.",
    positions: [
      { name: "Renewal through synthesis", text: "Join hadith, law, theology and Sufism into a coherent whole.", who: ["shah-wali-allah"] },
      { name: "Purify worship", text: "Strict monotheism forbids seeking the intercession of saints and venerating tombs.", who: ["ibn-abd-al-wahhab"] },
      { name: "Reform of state and society", text: "Rulers who govern unjustly must be resisted and a just order built.", who: ["dan-fodio"] },
      { name: "Renewal through teaching", text: "Renewal spreads through teaching: women as well as men are to learn and teach the faith, in their own languages as well as in Arabic.", who: ["nana-asmau"] },
      { name: "Back to the sources", text: "Rulings should come from the Qur’an and hadith, not from one school.", who: ["shawkani"] },
      { name: "Defence of inherited practice", text: "Established Sufi and school practice rests on scholarly authority.", who: ["nabulusi", "zabidi", "barelwi"], notes: { nabulusi: "Against the puritan Kadızadeli movement in the Ottoman lands, Abd al-Ghani al-Nabulusi defended Sufi orders, visiting saints’ tombs, music and established scholarly customs as grounded in the Sharia.", zabidi: "In Cairo, Murtada al-Zabidi linked Indian, Yemeni and Ottoman ulama in a scholarly renewal that conserved classical Hanafi jurisprudence, hadith chains and al-Ghazali’s Sufi ethics rather than breaking with inherited practice.", barelwi: "Leading the Ahl-i Sunnat wa Jama’at movement from Bareilly, Ahmad Riza Khan Barelwi issued extensive Hanafi fatwas (Fatawa-yi Rizwiyya) defending the Prophet’s birthday celebration (mawlid), shrine visitation and intercession against Deobandi and Ahl-i Hadith critics, and in Husam al-Haramayn (1906) compiled Hijazi fatwas condemning leading Deobandi elders (including Thanawi) and Mirza Ghulam Ahmad over their statements regarding the Prophet." } }
    ],
    thread: [
      { y: 1690, c: true, text: "In Damascus, Abd al-Ghani al-Nabulusi defends Sufi devotion, tomb visitation and established Ottoman customs against Kadızadeli puritanism.", who: ["nabulusi"], at: ["damascus"] },
      { y: 1732, text: "Shah Wali Allah returns to Delhi from the Hijaz.", who: ["shah-wali-allah"], at: ["mecca", "delhi"] },
      { y: 1744, text: "Ibn Abd al-Wahhab allies with Muhammad ibn Saud at Diriyah; 1744 is the conventional date.", who: ["ibn-abd-al-wahhab"], at: ["diriyah"] },
      { y: 1787, text: "In Cairo, Murtada al-Zabidi completes his ten-volume commentary on al-Ghazali’s Ihya’ (5 Jumada II 1201 AH / March 1787), renewing inherited Sunni-Sufi learning across Ottoman, Yemeni and Indian networks.", who: ["zabidi"], at: ["cairo"] },
      { y: 1804, text: "Usman dan Fodio’s emigration and the start of the jihad in Hausaland.", who: ["dan-fodio"], at: ["degel"] },
      { y: 1809, text: "Sokoto becomes the capital of the new caliphate.", who: ["dan-fodio"], at: ["sokoto"] },
      { y: 1815, c: true, text: "Al-Shawkani writes against fixed adherence to a school.", who: ["shawkani"], at: ["sanaa"] },
      { y: 1840, c: true, text: "By the 1840s Nana Asma’u’s ’Yan Taru network of women teachers is carrying education from Sokoto across the caliphate.", who: ["nana-asmau"], at: ["sokoto"] },
      { y: 1906, text: "During his Hijaz pilgrimage in 1906 (1323–1324 AH), Ahmad Riza Khan Barelwi obtains fatwas from Meccan and Medinan ulama and compiles Husam al-Haramayn, condemning leading Deobandi elders (including Thanawi) and Mirza Ghulam Ahmad over their statements regarding the Prophet.", who: ["barelwi"], at: ["mecca", "medina"] }
    ],
    related: ["ijtihad", "reform"] },

  { id: "reform", title: "Reform, education and modern knowledge", term: "al-islah", ar: "الإصلاح",
    phases: [[1830, 1940]], lanes: ["theology", "letters", "philosophy"],
    question: "How should Muslims respond to European power and modern science, and what should be taught?",
    text: "European expansion led Muslim scholars to ask why their societies had fallen behind and what to learn. Reformers argued that Islam, rightly understood, welcomes reason and science, and they founded schools, presses and journals. Their aims differed: religious reform, modern education, political unity. Traditional scholars often resisted, and the debates over curriculum, language and authority continued.",
    positions: [
      { name: "Learn from Europe", text: "Adopt modern sciences and institutions while keeping the faith.", who: ["tahtawi", "sayyid-ahmad-khan"] },
      { name: "Revive reason within Islam", text: "Islam and reason agree; decline came from imitation and despotism.", who: ["afghani", "abduh", "iqbal"] },
      { name: "Against imitation", text: "Scholars should return to the sources and the early authorities instead of repeating later commentaries. Marjani is counted a forerunner of the Jadid reformers.", who: ["marjani"] },
      { name: "New method schools", text: "Reform begins with the schoolroom: phonetic reading, modern subjects, printed books.", who: ["gasprinski", "behbudi"] },
      { name: "Return to the early generations", text: "Renewal means following the first generations of Muslims directly.", who: ["rida"] },
      { name: "Faith for modern readers", text: "Explain the truths of faith in terms a modern reader can accept.", who: ["nursi"] },
      { name: "Defend traditional learning", text: "Preserve inherited madrasa curricula and scholarly authority against Europeanised schools and modernising reinterpretations, as argued by Qadimists in Central Asia and conservative ulama in Egypt and South Asia.", who: ["barelwi", "thanawi"], notes: { barelwi: "Ahmad Riza Khan Barelwi rejected colonial anglicisation and Aligarh modernism, backing traditional madrasas such as Manzar-i Islam in Bareilly (founded 1904) to transmit classical Hanafi jurisprudence and Sufi devotion.", thanawi: "A leading scholar of the Deobandi tradition, Ashraf Ali Thanawi defended traditional madrasa learning and Hanafi jurisprudence while harnessing Urdu print in works such as Bihishti zewar to educate Muslim households without Westernising the curriculum." } }
    ],
    thread: [
      { y: 1834, text: "Al-Tahtawi’s account of Paris is published in Cairo.", who: ["tahtawi"], at: ["cairo"] },
      { y: 1867, c: true, text: "Dar al-Ulum Deoband is founded in northern India (dated 1866 or 1867 in the sources), renewing traditional Hanafi madrasa learning outside British colonial oversight.", who: [], at: ["deoband"] },
      { y: 1870, c: true, text: "Marjani criticises blind imitation in Kazan.", who: ["marjani"], at: ["kazan"] },
      { y: 1875, text: "Sayyid Ahmad Khan opens a school at Aligarh; it becomes the Muhammadan Anglo-Oriental College in 1877.", who: ["sayyid-ahmad-khan"], at: ["aligarh"] },
      { y: 1883, text: "Gasprinski founds the newspaper Terjüman.", who: ["gasprinski"], at: ["bakhchysarai"] },
      { y: 1884, text: "Al-Afghani and Abduh publish al-Urwa al-wuthqa in Paris.", who: ["afghani", "abduh"], at: ["paris"] },
      { y: 1898, text: "Rashid Rida founds al-Manar in Cairo.", who: ["rida"], at: ["cairo"] },
      { y: 1904, text: "In Bareilly, Ahmad Riza Khan Barelwi supports the founding of Madrasa Manzar-i Islam to train traditional Sunni-Sufi ulama.", who: ["barelwi"], at: ["bareilly"] },
      { y: 1905, c: true, text: "At his khanqah in Thana Bhawan, Ashraf Ali Thanawi writes Bihishti zewar (Heavenly Ornaments, c. 1905), bringing Deobandi Hanafi law, ethics and piety into Urdu print for ordinary households.", who: ["thanawi"], at: ["thana-bhawan"] },
      { y: 1911, text: "Behbudi writes The Patricide in Samarkand, the first Uzbek play.", who: ["behbudi"], at: ["samarkand"] },
      { y: 1926, text: "Exiled to Barla, Said Nursi begins writing most of the Risale-i Nur.", who: ["nursi"], at: ["barla"] },
      { y: 1930, text: "Iqbal publishes his Six Lectures on the Reconstruction of Religious Thought in Islam.", who: ["iqbal"], at: ["lahore"] }
    ],
    related: ["renewal", "caliphate-modern", "tafsir"] },

  { id: "caliphate-modern", title: "The caliphate and the modern state", term: "al-khilafa wa usul al-hukm", ar: "الخلافة وأصول الحكم",
    phases: [[1920, 1955], [1970, 1985]], lanes: ["law", "letters"],
    question: "Does Islam require a particular form of government?",
    text: "The Turkish Grand National Assembly abolished the Ottoman caliphate in March 1924. Scholars debated whether a caliphate is a religious obligation and what form an Islamic political order should take. Rashid Rida argued for restoring the caliphate; Ali Abd al-Raziq argued that Islam prescribes no form of government; Iqbal suggested that authority could pass to an elected assembly. Meanwhile Hasan al-Banna and Abul A’la Mawdudi built modern Islamist movements calling for an Islamic state grounded in the Sharia. In 1970 Ruhollah Khomeini argued in Najaf for the guardianship of the jurist (wilayat al-faqih), and in 1979 Iran’s revolution brought his vision to power while Baqir al-Sadr wrote constitutional treatises in Najaf.",
    positions: [
      { name: "Restore the caliphate", text: "The caliphate is a religious duty and should be rebuilt on reformed lines.", who: ["rida"] },
      { name: "No prescribed form of government", text: "The Prophet’s mission was religious, not the founding of a state; government is left to human reason.", who: ["abd-al-raziq"] },
      { name: "Authority in an elected assembly", text: "The caliphate’s authority can pass to an elected assembly.", who: ["iqbal"] },
      { name: "Societal revival and Islamic governance", text: "Islam is an all-encompassing order of worship, society and state; rebuilding Islamic governance begins with grassroots religious education, social welfare and moral reform.", who: ["banna"] },
      { name: "Divine sovereignty in an Islamic state", text: "Sovereignty belongs to God alone; Muslims must establish an ideological Islamic state, a “theo-democracy”, to implement the Sharia across law and public life.", who: ["mawdudi"] },
      { name: "Guardianship of the jurist (wilayat al-faqih)", text: "During the Twelfth Imam’s Occultation, a qualified Twelver jurist holds political as well as religious authority to lead an Islamic government.", who: ["khomeini"] },
      { name: "An Islamic state with modern institutions", text: "Islamic government can take constitutional form, under the guidance of jurists.", who: ["baqir-sadr"] }
    ],
    thread: [
      { y: 1922, text: "Rashid Rida’s treatise on the caliphate begins appearing in al-Manar; it is published as a book in 1923.", who: ["rida"], at: ["cairo"] },
      { y: 1924, text: "The Turkish Grand National Assembly abolishes the caliphate.", who: [], at: ["ankara"] },
      { y: 1925, text: "Ali Abd al-Raziq publishes Islam and the Foundations of Governance; al-Azhar’s Council of Senior Scholars expels him from the ranks of the ulama, and he loses his judgeship.", who: ["abd-al-raziq"], at: ["cairo"] },
      { y: 1928, text: "In Ismailia, Hasan al-Banna founds the Muslim Brotherhood (al-Ikhwan al-Muslimun), calling for social, educational and political renewal grounded in Islam.", who: ["banna"], at: ["ismailia"] },
      { y: 1930, text: "Iqbal endorses the transfer of the caliphate’s authority to an assembly.", who: ["iqbal"], at: ["lahore"] },
      { y: 1941, text: "In Lahore, Abul A’la Mawdudi founds the Jama’at-i Islami to advance his vision of an Islamic state resting on divine sovereignty.", who: ["mawdudi"], at: ["lahore"] },
      { y: 1970, text: "In exile in Najaf, Ruhollah Khomeini delivers his lectures on Islamic government (Wilayat al-faqih), arguing that a leading jurist must govern during the Imam’s Occultation.", who: ["khomeini"], at: ["najaf"] },
      { y: 1979, text: "Following the Iranian Revolution, Ruhollah Khomeini establishes the Islamic Republic of Iran under the guardianship of the jurist, while Muhammad Baqir al-Sadr writes treatises in Najaf on the constitution of an Islamic state.", who: ["khomeini", "baqir-sadr"], at: ["tehran", "najaf"] }
    ],
    related: ["imamate", "reform"] }
];
