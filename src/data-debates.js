// Discussions. phases = spans when the debate was most active (approximate).
// Each position is stated as its holders stated it. thread entries: y = year CE,
// c = approximate, who = figure ids, at = place ids where it happened.

const DEBATES = [
  { id: "imamate", title: "Caliphate and imamate", term: "al-khilafa wa’l-imama", ar: "الخلافة والإمامة",
    phases: [[632, 765], [1000, 1100]], lanes: ["theology", "law"],
    question: "Who should lead the community after the Prophet, and on what basis?",
    text: "When the Prophet died in 632, Muslims disagreed over who should lead them and why. The dispute ran through the civil wars of the first century and divided the Sunni, Shi’i and Khariji traditions. In the eleventh century jurists wrote theories of the caliphate at a time when real power had passed to Buyid and Seljuq rulers.",
    positions: [
      { name: "Leadership by the community’s choice", text: "The leader is chosen by the community’s qualified electors or nominated by his predecessor, and must meet conditions of knowledge, justice and descent from Quraysh.", who: ["mawardi", "ghazali"] },
      { name: "Leadership by designation", text: "In Imami doctrine, the Prophet designated Ali, and leadership passes to Imams of his line, chosen by God and protected from error.", who: ["jafar", "mufid"] },
      { name: "Leadership by merit alone", text: "Any upright Muslim may lead, and a ruler who sins gravely may be removed. This was the Khariji view; no Khariji scholar is yet in the dataset.", who: [] }
    ],
    thread: [
      { y: 632, text: "The Prophet dies. Abu Bakr is acknowledged as caliph at the hall of the Banu Sa’ida in Medina.", who: [], at: ["medina"] },
      { y: 656, text: "Ali becomes caliph after Uthman is killed, and civil war follows.", who: ["ali"], at: ["medina", "kufa"] },
      { y: 680, text: "Ali’s son Husayn is killed at Karbala, a defining moment for Shi’i tradition.", who: [], at: ["karbala"] },
      { y: 750, c: true, text: "Ja’far al-Sadiq teaches in Medina; Shi’i tradition traces the doctrine of the Imam by designation to him.", who: ["jafar"], at: ["medina"] },
      { y: 1000, c: true, text: "Al-Mufid defends the Imami doctrine of leadership with rational argument in Buyid Baghdad.", who: ["mufid"], at: ["baghdad"] },
      { y: 1045, c: true, text: "Al-Mawardi writes The Ordinances of Government, defining the caliph’s powers and those he may delegate.", who: ["mawardi"], at: ["baghdad"] },
      { y: 1094, c: true, text: "Al-Ghazali defends the Abbasid caliph against the Isma’ili claim to an infallible Imam.", who: ["ghazali"], at: ["baghdad"] }
    ],
    related: ["caliphate-modern", "faith"] },

  { id: "faith", title: "Faith, works and the grave sinner", term: "al-iman wa murtakib al-kabira", ar: "الإيمان ومرتكب الكبيرة",
    phases: [[657, 860]], lanes: ["theology"],
    question: "Is a Muslim who commits a grave sin still a believer?",
    text: "The first civil war pushed Muslims to ask whether those who sinned gravely, rulers included, remained believers. The answers defined the earliest theological groups and, later, how each school understood faith itself.",
    positions: [
      { name: "The sinner has left Islam", text: "A grave sinner is an unbeliever. This was the view of radical Khariji groups such as the Azariqa; the Ibadis called the sinner ungrateful to God (kafir ni’ma) but not an apostate, and lived alongside other Muslims.", who: [] },
      { name: "Faith is belief and affirmation", text: "Faith is assent of the heart and affirmation of the tongue; deeds do not enter its definition, and the sinner’s fate is left to God.", who: ["abu-hanifa", "maturidi"] },
      { name: "The intermediate position", text: "The grave sinner is neither believer nor unbeliever but in a position between the two.", who: ["wasil", "abd-al-jabbar"] },
      { name: "Faith is belief, word and deed", text: "Faith includes deeds and rises and falls with them; the sinner remains a believer with deficient faith.", who: ["ibn-hanbal", "bukhari", "ashari"] }
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
    phases: [[690, 1025]], lanes: ["theology"],
    question: "If God determines all things, how are people responsible for what they do?",
    text: "The Qur’an speaks both of God’s all-encompassing will and of human accountability. Early Muslims argued over whether people create their own acts, and each theological school framed its answer around God’s justice and power.",
    positions: [
      { name: "Humans create their own acts", text: "God’s justice requires that people be the authors of their deeds, or reward and punishment would be unjust.", who: ["wasil", "abd-al-jabbar"] },
      { name: "God compels all acts", text: "People have no real power over their acts. This was the view of the Jabriyya.", who: [] },
      { name: "God creates, humans acquire", text: "God creates every act, and the human being “acquires” it, which grounds responsibility. This is al-Ash’ari’s doctrine and that of al-Juwayni’s al-Irshad; in his later al-Aqida al-Nizamiyya al-Juwayni gives human power a real effect on acts.", who: ["ashari", "juwayni", "ghazali"] },
      { name: "God creates, humans choose", text: "God creates acts, but the human power of choice is real and is what responsibility rests on. Maturidi authors also speak of acquisition, but tie it to this power of choice.", who: ["maturidi", "abu-hafs-nasafi"] }
    ],
    thread: [
      { y: 690, c: true, text: "Ma’bad al-Juhani teaches in Basra that people determine their own acts.", who: [], at: ["basra"] },
      { y: 700, c: true, text: "A letter attributed to al-Hasan al-Basri argues for human responsibility.", who: ["hasan-basri"], at: ["basra"] },
      { y: 740, c: true, text: "Wasil ibn Ata and the early Mu’tazila make God’s justice a founding principle.", who: ["wasil"], at: ["basra"] },
      { y: 915, c: true, text: "Al-Ash’ari leaves the Mu’tazila and develops the doctrine of acquisition.", who: ["ashari"], at: ["basra", "baghdad"] },
      { y: 930, c: true, text: "Al-Maturidi in Samarkand gives the human power of choice a larger role.", who: ["maturidi"], at: ["samarkand"] },
      { y: 980, c: true, text: "Qadi Abd al-Jabbar dictates al-Mughni (c. 970–990), the fullest statement of the Mu’tazili case.", who: ["abd-al-jabbar"], at: ["rayy"] }
    ],
    related: ["faith", "good-evil"] },

  { id: "hadith-criticism", title: "Collecting and testing hadith", term: "ulum al-hadith", ar: "علوم الحديث",
    phases: [[700, 1070], [1250, 1450]], lanes: ["hadith", "law"],
    question: "How can reports about the Prophet be gathered, tested and used?",
    text: "As reports about the Prophet multiplied, scholars judged each chain of narrators by their reliability and by whether they could have met. The ninth century produced the great collections; later scholars wrote commentaries and refined the criticism. Twelver scholars compiled reports from the Imams by their own standards.",
    positions: [
      { name: "Collect broadly, arranged by narrator", text: "Gather what is transmitted, arranged by Companion, with weaker reports kept and judged.", who: ["ibn-hanbal"] },
      { name: "Only the sound", text: "Include only reports whose chains meet strict conditions of reliability and contact.", who: ["bukhari", "muslim"] },
      { name: "Reports arranged for law", text: "Arrange reports by legal topic. Abu Dawud says he flags reports with serious weakness and leaves the rest without comment; al-Tirmidhi often comments on a report’s reliability and on how jurists used it.", who: ["abu-dawud", "tirmidhi"] },
      { name: "Reports from the Imams", text: "The sayings of the Imams are authoritative alongside the Prophet’s, transmitted through Shi’i chains.", who: ["kulayni", "shaykh-tusi"] }
    ],
    thread: [
      { y: 670, c: true, text: "Aisha teaches and corrects reports in Medina.", who: ["aisha"], at: ["medina"] },
      { y: 770, c: true, text: "Malik compiles the Muwatta’, joining hadith to Medinan practice.", who: ["malik"], at: ["medina"] },
      { y: 830, c: true, text: "Ibn Hanbal assembles his Musnad in Baghdad.", who: ["ibn-hanbal"], at: ["baghdad"] },
      { y: 846, c: true, text: "Al-Bukhari completes his Sahih, which he said took sixteen years. Reports place its writing in Mecca, Medina and Bukhara.", who: ["bukhari"], at: ["mecca", "medina", "bukhara"] },
      { y: 860, c: true, text: "Muslim compiles his Sahih in Nishapur.", who: ["muslim"], at: ["nishapur"] },
      { y: 875, c: true, text: "Abu Dawud and al-Tirmidhi compile collections arranged for law.", who: ["abu-dawud", "tirmidhi"], at: ["basra", "termez"] },
      { y: 930, c: true, text: "Al-Kulayni compiles al-Kafi.", who: ["kulayni"], at: ["baghdad"] },
      { y: 1060, c: true, text: "Karima al-Marwaziyya teaches the Sahih in Mecca.", who: ["karima"], at: ["mecca"] },
      { y: 1270, c: true, text: "Al-Nawawi writes his commentary on Muslim’s Sahih.", who: ["nawawi"], at: ["damascus"] },
      { y: 1438, text: "Ibn Hajar completes Fath al-Bari, his commentary on al-Bukhari.", who: ["ibn-hajar"], at: ["cairo"] }
    ],
    related: ["reason-law"] },

  { id: "reason-law", title: "Reason and text in the law", term: "al-ra’y wa’l-athar", ar: "الرأي والأثر",
    phases: [[720, 900]], lanes: ["law"],
    question: "When the texts are silent, how far may a jurist reason, and by what rules?",
    text: "Early jurists differed on how to reach rulings. The circle of Kufa used reasoned opinion and analogy freely; the scholars of hadith preferred a report, even a weak one, over opinion. Al-Shafi’i proposed a method that ranked the sources and limited reasoning to analogy.",
    positions: [
      { name: "Reasoned opinion and analogy", text: "Where the texts are silent, the jurist reasons from their purposes and from similar cases.", who: ["abu-hanifa"] },
      { name: "The practice of Medina", text: "The living practice of the Prophet’s city is itself evidence of his sunna.", who: ["malik"] },
      { name: "Ranked sources", text: "Qur’an, sunna known through hadith, consensus and analogy, in that order.", who: ["shafii"] },
      { name: "Hadith before reasoning", text: "A report from the Prophet or the Companions outweighs any opinion.", who: ["ibn-hanbal"] },
      { name: "The plain sense only", text: "Analogy is rejected; rulings come from the plain meaning of the texts.", who: ["ibn-hazm"] }
    ],
    thread: [
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
      { name: "No attributes distinct from the essence", text: "To protect God’s unity, His knowledge and power are not things added to His essence.", who: ["wasil", "abd-al-jabbar"] },
      { name: "Affirm without asking how", text: "Accept the texts as they come, without likening God to creatures and without explaining them away.", who: ["ibn-hanbal", "ibn-taymiyya"] },
      { name: "Eternal attributes affirmed by argument", text: "God has eternal attributes such as knowledge, power and speech, and reason can argue for them.", who: ["ashari", "maturidi"] },
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
      { y: 800, c: true, text: "The Basran Mu’tazila make God’s justice and rational ethics central.", who: ["jahiz"], at: ["basra"] },
      { y: 925, c: true, text: "Al-Ash’ari argues that God’s command defines the good.", who: ["ashari"], at: ["baghdad"] },
      { y: 935, c: true, text: "Al-Maturidi in Samarkand holds that reason can know good and evil, and the duty to know God, before revelation.", who: ["maturidi"], at: ["samarkand"] },
      { y: 1000, c: true, text: "Al-Mufid and Qadi Abd al-Jabbar defend rational ethics.", who: ["mufid", "abd-al-jabbar"], at: ["baghdad", "rayy"] },
      { y: 1080, c: true, text: "Al-Juwayni restates the Ash’ari view.", who: ["juwayni"], at: ["nishapur"] },
      { y: 1109, text: "Al-Ghazali’s al-Mustasfa treats the question at the start of legal theory.", who: ["ghazali"], at: ["tus"] }
    ],
    related: ["free-will", "maqasid"] },

  { id: "sufism-law", title: "Sufism and the Law", term: "al-tasawwuf wa’l-shari’a", ar: "التصوف والشريعة",
    phases: [[780, 1110]], lanes: ["sufism", "law"],
    question: "What is the place of inner experience beside the outward Law?",
    text: "As ascetics became Sufis, they described states of the heart and a knowledge beyond outward rules. Some jurists feared this would loosen obedience to the Law; Sufi authors replied that the inner path fulfils it. Al-Hallaj’s execution sharpened the debate, and al-Qushayri and al-Ghazali gave Sufism a lasting place within Sunni learning.",
    positions: [
      { name: "Love beyond reward", text: "God is to be loved for Himself, not for paradise or out of fear of hell.", who: ["rabia"] },
      { name: "The path within the Law", text: "Mystical experience is valid only within the bounds of the Law; sobriety is higher than ecstasy.", who: ["junayd", "qushayri", "ghazali"] },
      { name: "Speech from the state of union", text: "Ecstatic sayings attributed to al-Hallaj, such as “I am the Truth”, were read as the mystic speaking from union with God; their meaning and his intent remain disputed.", who: ["hallaj"] },
      { name: "Suspicion of new practices", text: "Some jurists and hadith scholars opposed Sufi claims to special knowledge and practices such as listening to music.", who: [] }
    ],
    thread: [
      { y: 780, c: true, text: "Rabi’a teaches the love of God for His own sake in Basra.", who: ["rabia"], at: ["basra"] },
      { y: 880, c: true, text: "Al-Junayd teaches sober Sufism in Baghdad.", who: ["junayd"], at: ["baghdad"] },
      { y: 922, text: "Al-Hallaj is executed in Baghdad after a long trial.", who: ["hallaj"], at: ["baghdad"] },
      { y: 1045, text: "Al-Qushayri writes his Epistle in Nishapur.", who: ["qushayri"], at: ["nishapur"] },
      { y: 1100, c: true, text: "Al-Ghazali writes The Revival of the Religious Sciences after leaving Baghdad.", who: ["ghazali"], at: ["damascus", "tus"] }
    ],
    related: ["unity-being"] },

  { id: "created-quran", title: "The createdness of the Qur’an and the Mihna", term: "khalq al-Qur’an", ar: "خلق القرآن",
    phases: [[800, 855]], lanes: ["theology"],
    question: "Is the Qur’an, as God’s speech, created or eternal?",
    text: "The Mu’tazila held that the Qur’an was created in time, since only God is eternal. In 833 Caliph al-Ma’mun required judges and scholars to affirm this, an inquisition known as the Mihna. Ahmad ibn Hanbal refused and was flogged. The Mihna ended under al-Mutawakkil, and the uncreated Qur’an became the Sunni position.",
    positions: [
      { name: "Created", text: "Only God is eternal, so His speech as revealed and recited is created.", who: ["jahiz", "abd-al-jabbar"] },
      { name: "Uncreated", text: "The Qur’an is God’s speech and is not created.", who: ["ibn-hanbal", "bukhari", "tahawi"] },
      { name: "Eternal speech, created recitation", text: "God’s speech is an eternal attribute; the letters, sounds and copies are created.", who: ["ashari", "maturidi"] }
    ],
    thread: [
      { y: 827, text: "Al-Ma’mun proclaims that the Qur’an is created.", who: [], at: ["baghdad"] },
      { y: 833, text: "The Mihna begins: judges and scholars must affirm the doctrine.", who: [], at: ["baghdad"] },
      { y: 834, c: true, text: "Ibn Hanbal refuses, and is imprisoned and flogged under al-Mu’tasim.", who: ["ibn-hanbal"], at: ["baghdad"] },
      { y: 848, c: true, text: "Al-Mutawakkil abandons the Mihna in 234 AH (848–849) and forbids debate over whether the Qur’an is created; some historians date its full end to 851–852.", who: [], at: ["samarra"] },
      { y: 864, c: true, text: "In Nishapur al-Bukhari is accused over whether the recitation of the Qur’an is created.", who: ["bukhari"], at: ["nishapur"] },
      { y: 915, c: true, text: "Al-Ash’ari separates God’s eternal speech from its created expression.", who: ["ashari"], at: ["baghdad"] }
    ],
    related: ["attributes"] },

  { id: "philosophy", title: "Philosophy and revelation", term: "al-falsafa wa’l-shar’", ar: "الفلسفة والشرع",
    phases: [[830, 1040], [1090, 1200]], lanes: ["philosophy", "theology"],
    question: "Can Greek philosophy and revelation both be true, and who decides when they seem to clash?",
    text: "The translation of Greek works raised the question of whether philosophy and revelation agree. Al-Kindi and al-Farabi argued that they reach the same truth by different paths; Ibn Sina built a complete system. Al-Ghazali judged three of its doctrines to be unbelief. Ibn Rushd replied that the Law commands philosophical study of those capable of demonstration, and that al-Ghazali misread the philosophers.",
    positions: [
      { name: "One truth, two paths", text: "Philosophy and revelation express the same truth, one by demonstration and the other by images for all people.", who: ["kindi", "farabi", "ibn-sina", "ibn-tufayl"] },
      { name: "Philosophy errs on key points", text: "Logic and mathematics are sound, but three of the philosophers’ teachings contradict revelation, as al-Ghazali reads them: the eternity of the world, that God knows particulars only in a universal way, and the denial of bodily resurrection.", who: ["ghazali"] },
      { name: "The Law commands philosophy", text: "In the Decisive Treatise, scripture obliges those able to reason by demonstration to study philosophy, and where demonstration and the text seem to clash, the text is to be interpreted. The Incoherence of the Incoherence answers al-Ghazali point by point.", who: ["ibn-rushd"] },
      { name: "Wisdom by illumination", text: "True philosophy joins reasoning with direct experience of light.", who: ["suhrawardi"] }
    ],
    thread: [
      { y: 838, c: true, text: "Al-Kindi dedicates On First Philosophy to the caliph al-Mu’tasim (r. 833–842).", who: ["kindi"], at: ["baghdad"] },
      { y: 940, c: true, text: "Al-Farabi writes on the virtuous city.", who: ["farabi"], at: ["baghdad", "aleppo"] },
      { y: 1020, c: true, text: "Ibn Sina writes The Book of Healing.", who: ["ibn-sina"], at: ["hamadan", "isfahan"] },
      { y: 1095, text: "Al-Ghazali writes The Incoherence of the Philosophers.", who: ["ghazali"], at: ["baghdad"] },
      { y: 1170, c: true, text: "Ibn Tufayl writes Hayy ibn Yaqzan in Marrakesh.", who: ["ibn-tufayl"], at: ["marrakesh"] },
      { y: 1180, c: true, text: "Ibn Rushd answers al-Ghazali in The Incoherence of the Incoherence.", who: ["ibn-rushd"], at: ["cordoba"] },
      { y: 1186, c: true, text: "Suhrawardi writes The Philosophy of Illumination.", who: ["suhrawardi"], at: ["aleppo"] },
      { y: 1205, c: true, text: "Fakhr al-Din al-Razi draws philosophy into theology.", who: ["fakhr-razi"], at: ["herat"] }
    ],
    related: ["heavens", "unity-being"] },

  { id: "tafsir", title: "How to interpret the Qur’an", term: "manahij al-tafsir", ar: "مناهج التفسير",
    phases: [[870, 1375], [1880, 1985]], lanes: ["quran"],
    question: "Should the Qur’an be read through transmitted reports, through language and reason, or through inner insight?",
    text: "Commentators differed on the sources of interpretation. Some built on reports from the Prophet and early authorities; others drew on grammar, rhetoric and theology; Sufis read inner meanings. Modern scholars asked how the Qur’an speaks to new societies, and some proposed reading it through itself or through its purposes.",
    positions: [
      { name: "By transmitted reports", text: "Explain verses by the reports of the Prophet, the Companions and their successors.", who: ["ibn-abbas", "tabari", "ibn-kathir", "suyuti"] },
      { name: "By language and reason", text: "Explain verses through grammar, rhetoric and reasoned argument.", who: ["zamakhshari", "fakhr-razi"] },
      { name: "By the Qur’an itself", text: "Verses are best explained by other verses.", who: ["tabatabai", "ibn-kathir"] },
      { name: "By its purposes for today", text: "Read the Qur’an as moral guidance whose purposes speak to present societies.", who: ["abduh", "rida", "ibn-ashur", "fazlur-rahman"] }
    ],
    thread: [
      { y: 680, c: true, text: "Ibn Abbas explains the Qur’an to students in Mecca.", who: ["ibn-abbas"], at: ["mecca"] },
      { y: 903, c: true, text: "Al-Tabari completes his commentary.", who: ["tabari"], at: ["baghdad"] },
      { y: 1134, text: "Al-Zamakhshari completes al-Kashshaf in Mecca.", who: ["zamakhshari"], at: ["mecca"] },
      { y: 1205, c: true, text: "Fakhr al-Din al-Razi writes The Keys to the Unseen.", who: ["fakhr-razi"], at: ["herat"] },
      { y: 1360, c: true, text: "Ibn Kathir writes his commentary in Damascus.", who: ["ibn-kathir"], at: ["damascus"] },
      { y: 1466, text: "Al-Suyuti completes his part of the Tafsir al-Jalalayn, begun by al-Mahalli, on 10 Shawwal 870 AH.", who: ["suyuti"], at: ["cairo"] },
      { y: 1900, c: true, text: "Abduh lectures on the Qur’an at al-Azhar; Rida publishes the lectures in al-Manar.", who: ["abduh", "rida"], at: ["cairo"] },
      { y: 1960, c: true, text: "Ibn Ashur completes al-Tahrir wa’l-tanwir in 1380 AH, some thirty-nine years after he began it; the complete work is first printed in 1984.", who: ["ibn-ashur"], at: ["tunis"] },
      { y: 1972, c: true, text: "Tabataba’i completes al-Mizan in Qom.", who: ["tabatabai"], at: ["qom"] },
      { y: 1980, text: "Fazlur Rahman publishes Major Themes of the Qur’an.", who: ["fazlur-rahman"], at: ["chicago"] }
    ],
    related: ["reform"] },

  { id: "heavens", title: "Rethinking the heavens", term: "al-shukuk ala Batlamyus", ar: "الشكوك على بطلميوس",
    phases: [[1025, 1475]], lanes: ["sciences", "philosophy"],
    question: "Do Ptolemy’s models describe the real heavens?",
    text: "Astronomers accepted Ptolemy’s observations but objected that his models broke the principle of uniform circular motion. Ibn al-Haytham’s Doubts on Ptolemy opened a long effort to build better models. At Maragha, al-Tusi and his colleagues designed new ones; Ulugh Beg’s observatory refined the numbers; Ali Qushji argued that astronomy need not depend on Aristotle’s physics.",
    positions: [
      { name: "Ptolemy’s models are physically impossible", text: "A model must be built from uniform circular motions that could really exist.", who: ["ibn-haytham"] },
      { name: "New models from uniform motions", text: "Combinations of circles, such as the Tusi couple, can reproduce the observed motions.", who: ["nasir-tusi"] },
      { name: "Better observations", text: "Large instruments and long observation give more exact parameters.", who: ["ulugh-beg", "biruni"] },
      { name: "Astronomy free of Aristotle", text: "Astronomy can rest on observation and mathematics rather than on natural philosophy.", who: ["qushji"] }
    ],
    thread: [
      { y: 1025, c: true, text: "Ibn al-Haytham writes Doubts on Ptolemy in Cairo.", who: ["ibn-haytham"], at: ["cairo"] },
      { y: 1031, c: true, text: "Al-Biruni writes The Mas’udic Canon in Ghazna.", who: ["biruni"], at: ["ghazna"] },
      { y: 1259, text: "The Maragha observatory is founded under al-Tusi’s direction, with Hulagu’s patronage.", who: ["nasir-tusi"], at: ["maragha"] },
      { y: 1261, text: "Al-Tusi presents his new planetary models in al-Tadhkira.", who: ["nasir-tusi"], at: ["maragha"] },
      { y: 1424, c: true, text: "Ulugh Beg’s observatory begins work in Samarkand.", who: ["ulugh-beg"], at: ["samarkand"] },
      { y: 1437, c: true, text: "The Zij-i Sultani star tables are completed.", who: ["ulugh-beg", "qushji"], at: ["samarkand"] },
      { y: 1472, c: true, text: "Ali Qushji teaches in Istanbul.", who: ["qushji"], at: ["istanbul"] }
    ],
    related: ["philosophy"] },

  { id: "ijtihad", title: "Ijtihad and taqlid", term: "al-ijtihad wa’l-taqlid", ar: "الاجتهاد والتقليد",
    phases: [[1050, 1330], [1700, 1935]], lanes: ["law"],
    question: "Must later Muslims follow the established schools, or may scholars reason afresh from the sources?",
    text: "By the eleventh century the legal schools had settled their doctrine, and many jurists held that later scholars should follow it. Whether the “gate of ijtihad” was ever closed is itself debated by historians. Others insisted that qualified scholars must still reason from the sources. The question returned with force in the eighteenth and nineteenth centuries.",
    positions: [
      { name: "Follow the school’s settled doctrine", text: "Later jurists rule within their school, refining its established positions.", who: ["marghinani", "nawawi"] },
      { name: "Ijtihad remains open", text: "Qualified scholars must reason from the Qur’an and hadith, and blind imitation is not allowed to them.", who: ["ibn-hazm", "ibn-taymiyya", "suyuti", "shah-wali-allah", "shawkani"] },
      { name: "Ijtihad by qualified jurists", text: "Believers follow a living qualified jurist, who reasons from the sources.", who: ["hilli"] },
      { name: "Ijtihad for a new age", text: "Reform requires fresh reasoning on questions of law and society.", who: ["abduh", "rida", "iqbal"] }
    ],
    thread: [
      { y: 1050, c: true, text: "Ibn Hazm condemns imitation in law.", who: ["ibn-hazm"], at: ["cordoba"] },
      { y: 1190, c: true, text: "Al-Marghinani writes al-Hidaya, which becomes one of the most influential statements of Hanafi doctrine.", who: ["marghinani"], at: ["samarkand"] },
      { y: 1275, c: true, text: "Al-Nawawi sets out the Shafi’i school’s settled positions.", who: ["nawawi"], at: ["damascus"] },
      { y: 1300, c: true, text: "Ibn Taymiyya claims the right to independent judgment.", who: ["ibn-taymiyya"], at: ["damascus"] },
      { y: 1310, c: true, text: "Al-Hilli formalises ijtihad in Twelver law.", who: ["hilli"], at: ["hilla"] },
      { y: 1490, c: true, text: "Al-Suyuti claims the rank of mujtahid.", who: ["suyuti"], at: ["cairo"] },
      { y: 1740, c: true, text: "Shah Wali Allah urges wider ijtihad in Delhi.", who: ["shah-wali-allah"], at: ["delhi"] },
      { y: 1810, c: true, text: "Al-Shawkani argues against fixed adherence to a school.", who: ["shawkani"], at: ["sanaa"] },
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
    text: "Ibn Arabi taught that God alone has true existence and that all things are His self-manifestations. Later followers and critics called this teaching the unity of being, a phrase he did not use as its name. Critics such as Ibn Taymiyya held that it erased the line between Creator and creation. Jami and others defended it; in Mughal India Ahmad Sirhindi proposed a “unity of witnessing”, and Shah Wali Allah tried to reconcile the two.",
    positions: [
      { name: "Unity of being", text: "God alone truly exists; the world is His self-manifestation.", who: ["ibn-arabi", "jami"] },
      { name: "Creator and creation must stay distinct", text: "The doctrine confuses God with the world and contradicts scripture.", who: ["ibn-taymiyya"] },
      { name: "Unity of witnessing", text: "The mystic experiences unity, but in reality God and the world remain distinct.", who: ["sirhindi"] },
      { name: "Gradation of being", text: "Existence is one reality in degrees of intensity.", who: ["mulla-sadra"] },
      { name: "Reconciliation", text: "The two views differ in wording more than in substance.", who: ["shah-wali-allah"] }
    ],
    thread: [
      { y: 1229, text: "Ibn Arabi writes The Bezels of Wisdom in Damascus.", who: ["ibn-arabi"], at: ["damascus"] },
      { y: 1300, c: true, text: "Ibn Taymiyya attacks the doctrine.", who: ["ibn-taymiyya"], at: ["damascus"] },
      { y: 1480, c: true, text: "Jami defends and explains Ibn Arabi in Herat.", who: ["jami"], at: ["herat"] },
      { y: 1610, c: true, text: "Sirhindi’s letters propose the unity of witnessing.", who: ["sirhindi"], at: ["sirhind"] },
      { y: 1630, c: true, text: "Mulla Sadra completes The Four Journeys.", who: ["mulla-sadra"], at: ["shiraz"] },
      { y: 1745, c: true, text: "Shah Wali Allah seeks to reconcile the two views.", who: ["shah-wali-allah"], at: ["delhi"] }
    ],
    related: ["sufism-law", "philosophy"] },

  { id: "renewal", title: "Renewal and reform in the 18th century", term: "al-tajdid wa’l-islah", ar: "التجديد والإصلاح",
    phases: [[1700, 1830]], lanes: ["theology", "law", "hadith"],
    question: "How should the faith be renewed, and which inherited practices are corruptions?",
    text: "In the eighteenth century scholars across the Muslim world called for renewal: a return to the Qur’an and hadith and the correction of practices they judged to be innovations. The movements differed widely in method and aim. Many Sufis and school jurists defended inherited practice against them.",
    positions: [
      { name: "Renewal through synthesis", text: "Join hadith, law, theology and Sufism into a coherent whole.", who: ["shah-wali-allah"] },
      { name: "Purify worship", text: "Strict monotheism forbids seeking the intercession of saints and venerating tombs.", who: ["ibn-abd-al-wahhab"] },
      { name: "Reform of state and society", text: "Rulers who govern unjustly must be resisted and a just order built.", who: ["dan-fodio"] },
      { name: "Renewal through teaching", text: "Renewal spreads through teaching: women as well as men are to learn and teach the faith, in their own languages as well as in Arabic.", who: ["nana-asmau"] },
      { name: "Back to the sources", text: "Rulings should come from the Qur’an and hadith, not from one school.", who: ["shawkani"] },
      { name: "Defence of inherited practice", text: "Established Sufi and school practice rests on scholarly authority. No such scholar is yet in the dataset.", who: [] }
    ],
    thread: [
      { y: 1732, text: "Shah Wali Allah returns to Delhi from the Hijaz.", who: ["shah-wali-allah"], at: ["mecca", "delhi"] },
      { y: 1744, text: "Ibn Abd al-Wahhab allies with Muhammad ibn Saud at Diriyah; 1744 is the conventional date.", who: ["ibn-abd-al-wahhab"], at: ["diriyah"] },
      { y: 1804, text: "Usman dan Fodio’s emigration and the start of the jihad in Hausaland.", who: ["dan-fodio"], at: ["degel"] },
      { y: 1809, text: "Sokoto becomes the capital of the new caliphate.", who: ["dan-fodio"], at: ["sokoto"] },
      { y: 1815, c: true, text: "Al-Shawkani writes against fixed adherence to a school.", who: ["shawkani"], at: ["sanaa"] },
      { y: 1840, c: true, text: "By the 1840s Nana Asma’u’s ’Yan Taru network of women teachers is carrying education from Sokoto across the caliphate.", who: ["nana-asmau"], at: ["sokoto"] }
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
      { name: "Faith for modern readers", text: "Explain the truths of faith in terms a modern reader can accept.", who: ["nursi"] }
    ],
    thread: [
      { y: 1834, text: "Al-Tahtawi’s account of Paris is published in Cairo.", who: ["tahtawi"], at: ["cairo"] },
      { y: 1870, c: true, text: "Marjani criticises blind imitation in Kazan.", who: ["marjani"], at: ["kazan"] },
      { y: 1875, text: "Sayyid Ahmad Khan opens a school at Aligarh; it becomes the Muhammadan Anglo-Oriental College in 1877.", who: ["sayyid-ahmad-khan"], at: ["aligarh"] },
      { y: 1883, text: "Gasprinski founds the newspaper Terjüman.", who: ["gasprinski"], at: ["bakhchysarai"] },
      { y: 1884, text: "Al-Afghani and Abduh publish al-Urwa al-wuthqa in Paris.", who: ["afghani", "abduh"], at: ["paris"] },
      { y: 1898, text: "Rashid Rida founds al-Manar in Cairo.", who: ["rida"], at: ["cairo"] },
      { y: 1911, text: "Behbudi writes The Patricide in Samarkand, the first Uzbek play.", who: ["behbudi"], at: ["samarkand"] },
      { y: 1926, text: "Exiled to Barla, Said Nursi begins writing most of the Risale-i Nur.", who: ["nursi"], at: ["barla"] },
      { y: 1930, text: "Iqbal publishes his Six Lectures on the Reconstruction of Religious Thought in Islam.", who: ["iqbal"], at: ["lahore"] }
    ],
    related: ["renewal", "caliphate-modern", "tafsir"] },

  { id: "caliphate-modern", title: "The caliphate and the modern state", term: "al-khilafa wa usul al-hukm", ar: "الخلافة وأصول الحكم",
    phases: [[1920, 1950], [1978, 1980]], lanes: ["law", "letters"],
    question: "Does Islam require a particular form of government?",
    text: "The Turkish Grand National Assembly abolished the Ottoman caliphate in March 1924. Scholars debated whether a caliphate is a religious obligation. Rashid Rida argued for restoring it; Ali Abd al-Raziq argued that Islam prescribes no form of government; Iqbal suggested that authority could pass to an elected assembly. In 1979, as Iran wrote a new constitution, Baqir al-Sadr took up the question again.",
    positions: [
      { name: "Restore the caliphate", text: "The caliphate is a religious duty and should be rebuilt on reformed lines.", who: ["rida"] },
      { name: "No prescribed form of government", text: "The Prophet’s mission was religious, not the founding of a state; government is left to human reason.", who: ["abd-al-raziq"] },
      { name: "Authority in an elected assembly", text: "The caliphate’s authority can pass to an elected assembly.", who: ["iqbal"] },
      { name: "An Islamic state with modern institutions", text: "Islamic government can take constitutional form, under the guidance of jurists.", who: ["baqir-sadr"] }
    ],
    thread: [
      { y: 1922, text: "Rashid Rida’s treatise on the caliphate begins appearing in al-Manar; it is published as a book in 1923.", who: ["rida"], at: ["cairo"] },
      { y: 1924, text: "The Turkish Grand National Assembly abolishes the caliphate.", who: [], at: ["ankara"] },
      { y: 1925, text: "Ali Abd al-Raziq publishes Islam and the Foundations of Governance; al-Azhar’s Council of Senior Scholars expels him from the ranks of the ulama, and he loses his judgeship.", who: ["abd-al-raziq"], at: ["cairo"] },
      { y: 1930, text: "Iqbal endorses the transfer of the caliphate’s authority to an assembly.", who: ["iqbal"], at: ["lahore"] },
      { y: 1979, text: "Baqir al-Sadr writes treatises on the constitution of an Islamic state, as Iran drafts its new constitution.", who: ["baqir-sadr"], at: ["najaf"] }
    ],
    related: ["imamate", "reform"] }
];
