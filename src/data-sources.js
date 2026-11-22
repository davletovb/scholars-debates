// Sources for each scholar, debate, debate entry and event, shown in their panels.
// Keys: a scholar id; "debate:<id>"; "thread:<debate>:<year>"; "note:<debate>:<scholar>"; "event:<id>".
// Each source is [label, url] or [label, url, what it supports].

const SOURCES = {
  "abd-al-jabbar": [
    ["Encyclopaedia Iranica: ʿAbd-al-Jabbār b. Aḥmad", "https://www.iranicaonline.org/articles/abd-al-jabbar-b-ahmad/"],
    ["Stanford Encyclopedia of Philosophy: Arabic and Islamic philosophy of religion", "https://plato.stanford.edu/entries/arabic-islamic-religion/index.html", "al-Mughni fi abwab al-tawhid wa’l-adl"],
    ["Core (thesis): The Epistemological Foundation of Knowing God", "https://files.core.ac.uk/download/429701525.pdf", "dating al-Mughni to about 970–990"]
  ],
  "abd-al-raziq": [
    ["Britannica: ʿAlī ʿAbd al-Rāziq", "https://www.britannica.com/biography/Abd-al-Raziq-Ali"],
    ["Encyclopedia of the Modern Middle East: ʿAbd al-Raziq, Ali", "https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/abd-al-raziq"],
    ["TDV İslâm Ansiklopedisi: Ali Abdürrâzık", "https://islamansiklopedisi.org.tr/ali-abdurrazik"]
  ],
  "abduh": [
    ["Oxford Academic: Muhammad ʿAbduh", "https://academic.oup.com/reference/62361/reference-article-abstract/554568546"],
    ["Encyclopaedia Iranica: Afḡānī, Jamāl-al-Dīn", "https://www.iranicaonline.org/articles/afgani-jamal-al-din/", "the link with al-Afghani"]
  ],
  "abu-bakr-razi": [
    ["Library of Congress: al-Razi, The Comprehensive Book on Medicine, part 2 (World Digital Library)", "https://www.loc.gov/resource/gdcwdl.wdl_07458/?st=gallery"],
    ["Cambridge: Al-Rāzī (Religion, Learning and Science in the ʿAbbasid Period)", "https://www.cambridge.org/core/books/abs/religion-learning-and-science-in-the-abbasid-period/alrazi/762B6225FF0F3508D6B7CD7CB494218C"],
    ["Stanford Encyclopedia of Philosophy: Abu Bakr al-Razi", "https://plato.stanford.edu/entries/abu-bakr-al-razi/"],
    ["Encyclopaedia Iranica: al-Ḥāwi", "https://www.iranicaonline.org/articles/hawi-medical-book/", "al-Hawi"],
    ["Britannica: al-Rāzī", "https://www.britannica.com/biography/al-Razi", "birth c. 854 and death c. 925 or 935"],
    ["TDV İslâm Ansiklopedisi: Râzî, Ebû Bekir", "https://islamansiklopedisi.org.tr/razi-ebu-bekir", "death in 313 AH (925 CE)"]
  ],
  "abu-dawud": [
    ["Britannica: Abū Dāʾūd", "https://www.britannica.com/biography/Abu-Daud"],
    ["TDV İslâm Ansiklopedisi: Ebû Dâvûd es-Sicistânî", "https://islamansiklopedisi.org.tr/ebu-davud-es-sicistani"],
    ["TDV İslâm Ansiklopedisi: es-Sünen (Ebû Dâvûd)", "https://islamansiklopedisi.org.tr/es-sunen--ebu-davud", "al-Sunan"]
  ],
  "abu-hafs-nasafi": [
    ["Internet Archive: E. E. Elder, A Commentary on the Creed of Islam (Columbia University Press, 1950)", "https://archive.org/details/commentaryonthec030491mbp", "al-Aqa’id and al-Taftazani’s commentary"],
    ["TDV İslâm Ansiklopedisi: Nesefî, Necmeddin", "https://islamansiklopedisi.org.tr/nesefi-necmeddin"],
    ["TDV İslâm Ansiklopedisi: Akāidü’n-Nesefî", "https://islamansiklopedisi.org.tr/akaidun-nesefi", "al-Aqa’id"]
  ],
  "abu-hanifa": [
    ["Encyclopaedia Iranica: Abū Ḥanīfa", "https://www.iranicaonline.org/articles/abu-hanifa-noman-b/"],
    ["Encyclopaedia Iranica: Jaʿfar al-Ṣādeq ii. Teachings", "https://www.iranicaonline.org/articles/jafar-al-sadeq-ii-teachings/", "the teacher link"],
    ["CEEOL: article on Jaʿfar al-Sadiq and Abu Hanifa as teacher and student", "https://www.ceeol.com/search/article-detail?id=819799", "the disputed link"]
  ],
  "afghani": [
    ["Encyclopaedia Iranica: Afḡānī, Jamāl-al-Dīn", "https://www.iranicaonline.org/articles/afgani-jamal-al-din/"],
    ["Oxford Academic: Sayyid Jamal al-Din al-Afghani", "https://academic.oup.com/reference/62361/reference-article-abstract/554570507"]
  ],
  "ahmad-baba": [
    ["Britannica: Ahmad Baba", "https://www.britannica.com/biography/Ahmad-Baba"],
    ["Oxford Reference: Aḥmad Bābā al-Tinbuktī", "https://www.oxfordreference.com/view/10.1093/acref/9780190077631.001.0001/acref-9780190077631-e-957"],
    ["Journal of North African Studies (Taylor & Francis, 2014): Timothy Cleaveland on Ahmad Baba’s 1615 fatwa", "https://www.tandfonline.com/doi/abs/10.1080/13629387.2014.983825", "his 1615 fatwa Mi’raj al-su’ud"]
  ],
  "aisha": [
    ["Britannica: ʿĀʾishah", "https://www.britannica.com/biography/Aishah"],
    ["Britannica: Battle of the Camel", "https://www.britannica.com/topic/Battle-of-the-Camel", "Battle of the Camel"],
    ["TDV İslâm Ansiklopedisi: Âişe", "https://islamansiklopedisi.org.tr/aise"]
  ],
  "aisha-bauniyya": [
    ["Mamluk Studies Review 17 (2013): Th. Emil Homerin on Aisha al-Baʿuniyya and dhikr", "https://knowledge.uchicago.edu/records/n0ry7-52x72"],
    ["NYU Press: ʿĀʾishah al-Bāʿūniyyah", "https://nyupress.org/author/aishah-al-bauniyyah/"],
    ["NYU Press: The Principles of Sufism (trans. Th. Emil Homerin)", "https://nyupress.org/9781479864683/the-principles-of-sufism/", "her treatise on the Sufi path"]
  ],
  "aisha-bint-abd-al-hadi": [
    ["Cambridge University Press: Asma Sayeed, Women and the Transmission of Religious Knowledge in Islam, ch. 4", "https://www.cambridge.org/core/books/women-and-the-transmission-of-religious-knowledge-in-islam/culmination-in-traditionalism/256C56689600D723FC428DFEA465B618"],
    ["TDV İslâm Ansiklopedisi: Âişe bint Muhammed", "https://islamansiklopedisi.org.tr/aise-bint-muhammed", "transmission of Sahih al-Bukhari from al-Hajjar and teaching Ibn Hajar"]
  ],
  "ali": [
    ["Oxford Academic: ʿAlī ibn Abī Ṭālib", "https://academic.oup.com/reference/62361/reference-article-abstract/554579518"],
    ["Britannica: ʿAlī", "https://www.britannica.com/biography/Ali-Muslim-caliph"]
  ],
  "ashari": [
    ["Encyclopaedia Iranica: Ašʿarī, Abu’l-Ḥasan", "https://www.iranicaonline.org/articles/asari-abul-hasan-ali-b/"],
    ["Britannica: Abū al-Ḥasan al-Ashʿarī", "https://www.britannica.com/biography/Abu-al-Hasan-al-Ashari"]
  ],
  "astarabadi": [
    ["Encyclopaedia Iranica: Astarābādī, Moḥammad Amīn", "https://www.iranicaonline.org/articles/astarabadi-molla-mohammad-amin-b/"],
    ["Encyclopaedia Iranica: Aḵbārīya", "https://www.iranicaonline.org/articles/akbariya/"],
    ["TDV İslâm Ansiklopedisi: Ahbâriyye", "https://islamansiklopedisi.org.tr/ahbariyye"]
  ],
  "banna": [
    ["Britannica: Hassan al-Banna", "https://www.britannica.com/biography/Hassan-al-Banna"],
    ["Britannica: Muslim Brotherhood", "https://www.britannica.com/topic/Muslim-Brotherhood"],
    ["Brill EI3O: Islamism", "https://referenceworks.brill.com/display/entries/EI3O/COM-32589.xml"],
    ["TDV İslâm Ansiklopedisi: Hasan el-Bennâ", "https://islamansiklopedisi.org.tr/hasan-el-benna"]
  ],
  "baqir-sadr": [
    ["Encyclopaedia Iranica: Iraq x. Shiʿites of Iraq", "https://www.iranicaonline.org/articles/iraq-x-shiites-of-iraq/"],
    ["Encyclopaedia Iranica: Iraq xi. Shiʿite seminaries", "https://www.iranicaonline.org/articles/iraq-xi-shiite-seminaries/"],
    ["Cambridge: On the origins of the Iranian constitution: Muhammad Baqer as-Sadr’s 1979 treatises", "https://www.cambridge.org/core/books/abs/renewal-of-islamic-law/on-the-origins-of-the-iranian-constitution-muhammad-baqer-assadrs-1979-treatises/14AAE2F71556206A90354B9AAC09A5A4"],
    ["TDV İslâm Ansiklopedisi: Sadr, Muhammed Bâkır", "https://islamansiklopedisi.org.tr/sadr-muhammed-bakir"]
  ],
  "barelwi": [
    ["Brill EI3O: Barelwīs (Usha Sanyal)", "https://referenceworks.brill.com/display/entries/EI3O/COM-23995.xml"],
    ["Brill EI3O: Madrasa in South Asia (Francis Robinson)", "https://referenceworks.brill.com/display/entries/EI3O/COM-35956.xml", "South Asian madrasa networks and the 1904 Bareilly madrasa"],
    ["Oxford Academic: Nile Green on South Asian Sunni devotion", "https://academic.oup.com/book/6150/chapter/149705917"],
    ["TDV İslâm Ansiklopedisi: Rızâ Han Birelvî", "https://islamansiklopedisi.org.tr/riza-han-birelvi"]
  ],
  "behbudi": [
    ["Encyclopaedia Iranica: Behbudi", "https://www.iranicaonline.org/articles/behbudi-molla-mahmud-kaja/"]
  ],
  "bihbahani": [
    ["Encyclopaedia Iranica: Behbahānī, Moḥammad-Bāqer", "https://www.iranicaonline.org/articles/behbahani-aqa-sayyed-mohmmad-baqer/"],
    ["Encyclopaedia Iranica: Ejtehād", "https://www.iranicaonline.org/articles/ejtehad/", "Risalat al-ijtihad wa’l-akhbar"],
    ["TDV İslâm Ansiklopedisi: Bihbehânî, Muhammed Bâkır", "https://islamansiklopedisi.org.tr/bihbehani-muhammed-bakir"]
  ],
  "bint-al-shati": [
    ["Journal of Qur’anic Studies (Edinburgh University Press, 2015): Shuruq Naguib on Bint al-Shati’s exegesis", "https://www.euppublishing.com/doi/10.3366/jqs.2015.0179"],
    ["International Journal of Middle East Studies (Cambridge, 2011): The Islamic Public Sphere and the Discipline of Adab", "https://www.cambridge.org/core/journals/international-journal-of-middle-east-studies/article/islamic-public-sphere-and-the-discipline-of-adab/08DF103CF06A52AF0600AB3D0EC32B1C"],
    ["Brill (2021): Women and Islamic Movements", "https://brill.com/display/book/9789004435544/BP000017.xml"],
    ["Brill (2025): Reading ʿĀʾiša ʿAbd ar-Raḥmān", "https://brill.com/view/book/9789004715431/BP000030.xml"]
  ],
  "biruni": [
    ["Britannica: al-Bīrūnī (summary)", "https://www.britannica.com/summary/al-Biruni"],
    ["Encyclopaedia Iranica: Bīrūnī, Abū Rayḥān i. Life", "https://www.iranicaonline.org/articles/biruni-abu-rayhan-index/biruni-abu-rayhan-i-life/"],
    ["Encyclopaedia Iranica: Bīrūnī, Abū Rayḥān iv. Geography", "https://www.iranicaonline.org/articles/biruni-abu-rayhan-index/biruni-abu-rayhan-iv/", "measuring the Earth’s radius at Nandana"],
    ["ISMI (Max Planck Institute): Kitāb fī taḥqīq mā li’l-Hind", "https://ismi.mpiwg-berlin.mpg.de/bibcite/reference/15909", "Tahqiq ma li’l-Hind"]
  ],
  "bukhari": [
    ["Library of Congress: manuscript of al-Bukhari’s Sahih, vol. 4 (World Digital Library)", "https://www.loc.gov/resource/gdcwdl.wdl_17619/?sp=1&st=grid"],
    ["Britannica: al-Bukhārī", "https://www.britannica.com/biography/al-Bukhari"],
    ["TDV İslâm Ansiklopedisi: Buhârî, Muhammed b. İsmâil", "https://islamansiklopedisi.org.tr/buhari-muhammed-b-ismail", "meetings and study with Ibn Hanbal in Baghdad"],
    ["Rize İlahiyat Dergisi 24 (2023): Recep Bilgin on al-Bukhari and Ibn Hanbal", "https://doi.org/10.32950/rid.1301430", "al-Bukhari’s visits to Ibn Hanbal’s circles and absence of direct narration in the Sahih"],
    ["TDV İslâm Ansiklopedisi: el-Câmiu’s-sahîh", "https://islamansiklopedisi.org.tr/el-camius-sahih--buhari", "the sixteen years of composition"]
  ],
  "dan-fodio": [
    ["Britannica: Usman dan Fodio", "https://www.britannica.com/biography/Usman-dan-Fodio"],
    ["Britannica: Western Africa, the jihad of Usman dan Fodio", "https://www.britannica.com/place/western-Africa/The-jihad-of-Usman-dan-Fodio", "the Sokoto Caliphate"],
    ["TDV İslâm Ansiklopedisi: Osman b. Fûdî", "https://islamansiklopedisi.org.tr/osman-b-fudi", "works including Ihya’ al-sunna and Bayan wujub al-hijra"]
  ],
  "ebussuud": [
    ["Oxford Reference: Ebussuud Efendi (Biographical Encyclopaedia of Islamic Philosophy)", "https://oxfordreference.com/view/10.1093/oi/authority.20110810104817111"],
    ["TDV İslâm Ansiklopedisi: Ebüssuûd Efendi", "https://islamansiklopedisi.org.tr/ebussuud-efendi"],
    ["TDV İslâm Ansiklopedisi: İrşâdü’l-akli’s-selîm", "https://islamansiklopedisi.org.tr/irsadul-aklis-selim", "Irshad al-aql al-salim"]
  ],
  "fakhr-razi": [
    ["University of Edinburgh Research Explorer: Fakhr al-Din al-Razi", "https://www.research.ed.ac.uk/en/publications/fakhr-al-din-al-razi/"],
    ["Stanford Encyclopedia of Philosophy: Fakhr al-Din al-Razi", "https://plato.stanford.edu/entries/al-din-al-razi/", "al-Matalib al-aliya"],
    ["Journal of Critical Studies on the Quranic Exegesis (2024): Fakhr al-Dīn al-Rāzī and the Concept of Ṣarfa (PDF)", "https://www.ensani.ir/fa/article/download/592643", "his Nihayat al-iʿjaz and its rejection of sarfa"]
  ],
  "farabi": [
    ["Stanford Encyclopedia of Philosophy: al-Farabi", "https://plato.stanford.edu/entries/al-farabi/"],
    ["Encyclopaedia Iranica: Fārābi i. Biography", "https://www.iranicaonline.org/articles/farabi-i/", "the disputed birthplace"]
  ],
  "fazlur-rahman": [
    ["Oxford Research Encyclopedia of Religion: “Rahman, Fazlur” by Ebrahim Moosa (author’s copy)", "https://ebrahimmoosa.com/wp-content/uploads/2024/01/Moosa-Entry-on-Rahman-Fazlur-ORE.pdf"],
    ["University of Chicago Press: Major Themes of the Qur’an", "https://press.uchicago.edu/ucp/books/book/chicago/M/bo6826294.html"]
  ],
  "gasprinski": [
    ["UvA-DARE: chapter on Gasprinskii in a Brill volume (open access PDF)", "https://pure.uva.nl/ws/files/252114356/Gasprinskii_9789004715936-71191-2.pdf"]
  ],
  "ghazali": [
    ["Stanford Encyclopedia of Philosophy: al-Ghazali", "https://plato.stanford.edu/entries/al-ghazali/"],
    ["Oxford Academic: al-Ghazālī’s Incoherence of the Philosophers", "https://academic.oup.com/edited-volume/38657/chapter-abstract/335768202", "Tahafut al-falasifa"],
    ["Institute of Ismaili Studies: Leonard Lewisohn, The Sacred Music of Islam, Samaʿ in the Persian Sufi Tradition (PDF)", "https://iis.ac.uk/wp-content/uploads/2024/10/the-sacred-music-of-islam_pdf-366408512.pdf", "his defence of listening"]
  ],
  "hallaj": [
    ["Encyclopaedia Iranica: Ḥallāj, Abu’l-Moḡiṯ Ḥosayn", "https://www.iranicaonline.org/articles/hallaj/"],
    ["Encyclopaedia Iranica: Ana’l-Ḥaqq", "https://www.iranicaonline.org/articles/anal-haqq-i-am-the-truth-the-most-famous-of-the-sufi-sathiyat-ecstatic-utterances-or-paradoxes/", "the teacher link"],
    ["Britannica: al-Ḥallāj", "https://www.britannica.com/biography/al-Hallaj", "the link with al-Junayd"]
  ],
  "hamadani": [
    ["Encyclopaedia Iranica: Hamadāni, Sayyed ʿAli", "https://iranicaonline.org/articles/hamadani-sayyedali"],
    ["Shahzad Bashir: Movement and Stillness, the Practice of Sufi Dhikr in Fourteenth-Century Central Asia (PDF)", "https://www.themathesontrust.org/papers/islam/Bashir-Movement_and_Stillness_Sufi_Dhikr.pdf", "his vocal dhikr and listening, as later biographies tell it"]
  ],
  "hasan-basri": [
    ["Encyclopaedia Iranica: Ḥasan Baṣri", "https://www.iranicaonline.org/articles/hasan-basri-abu-said-b-abil-hasan-yasar/"]
  ],
  "hilli": [
    ["Encyclopaedia Iranica: Ḥelli, Ḥasan b. Yusof", "https://www.iranicaonline.org/articles/helli-hasan-b-yusof-b-motahhar/"]
  ],
  "ibn-abbas": [
    ["Britannica: ʿAbd Allāh ibn al-ʿAbbās", "https://www.britannica.com/biography/Abd-Allah-ibn-al-Abbas"],
    ["TDV İslâm Ansiklopedisi: Abdullah b. Abbas", "https://islamansiklopedisi.org.tr/abdullah-b-abbas"]
  ],
  "ibn-abd-al-wahhab": [
    ["Britannica: Muḥammad ibn ʿAbd al-Wahhāb", "https://www.britannica.com/biography/Muhammad-ibn-Abd-al-Wahhab"]
  ],
  "ibn-al-jawzi": [
    ["Britannica: Ibn al-Jawzī", "https://www.britannica.com/biography/Ibn-al-Jawzi"],
    ["Cambridge University Press: Asma Sayeed, Women and the Transmission of Religious Knowledge in Islam, ch. 4", "https://www.cambridge.org/core/books/women-and-the-transmission-of-religious-knowledge-in-islam/culmination-in-traditionalism/256C56689600D723FC428DFEA465B618", "his study of hadith with Shuhda al-Katiba"],
    ["Journal of Oriental Studies (2026): Ibn al-Jawzī’s Critique of Sufi Dhikr, Samāʿ and Ritual Chanting in Talbīs Iblīs (PDF)", "https://journals.ysu.am/j-orient-stud/article/download/vol29_no1_2026_44/pdf/37134", "Talbis Iblis"],
    ["TDV İslâm Ansiklopedisi: İbnü’l-Cevzî, Ebü’l-Ferec", "https://islamansiklopedisi.org.tr/ibnul-cevzi-ebul-ferec"]
  ],
  "ibn-al-salah": [
    ["Oxford Bibliographies in Islamic Studies: Hadith", "https://www.oxfordbibliographies.com/abstract/document/obo-9780195390155/obo-9780195390155-0030.xml"],
    ["TDV İslâm Ansiklopedisi: İbnü’s-Salâh eş-Şehrezûrî", "https://islamansiklopedisi.org.tr/ibnus-salah-es-sehrezuri"],
    ["TDV İslâm Ansiklopedisi: Mukaddimetü İbni’s-Salâh", "https://islamansiklopedisi.org.tr/mukaddimetu-ibnis-salah", "Muqaddimat Ibn al-Salah"]
  ],
  "ibn-al-shatir": [
    ["Biographical Encyclopedia of Astronomers (McGill): David A. King on Ibn al-Shāṭir", "https://islamsci.mcgill.ca/RASI/BEA/Ibn_al-Shatir_BEA.htm"],
    ["Stanford Encyclopedia of Philosophy: Nicolaus Copernicus", "https://plato.stanford.edu/entries/copernicus/", "Ibn al-Shatir’s planetary models and Copernicus"],
    ["TDV İslâm Ansiklopedisi: İbnü’ş-Şâtır", "https://islamansiklopedisi.org.tr/ibnus-satir"]
  ],
  "ibn-arabi": [
    ["Stanford Encyclopedia of Philosophy: Ibn Arabi", "https://plato.stanford.edu/entries/ibn-arabi/"],
    ["TDV İslâm Ansiklopedisi: İbnü’l-Arabî", "https://islamansiklopedisi.org.tr/ibnul-arabi-muhyiddin"],
    ["Library of Congress: The Meccan Revelations", "https://www.loc.gov/item/2021666160/", "al-Futuhat al-Makkiyya"]
  ],
  "ibn-ashur": [
    ["IIIT: Ibn Ashur, Treatise on Maqasid al-Shariah, with a biographical introduction (sample PDF)", "https://iiit.org/wp-content/uploads/Ibn-Ashur-Treatise-on-Maqasid-Al-Shariah-Sample.pdf"],
    ["TDV İslâm Ansiklopedisi: İbn Âşûr, Muhammed Tâhir", "https://islamansiklopedisi.org.tr/ibn-asur-muhammed-tahir--1973"],
    ["TDV İslâm Ansiklopedisi: et-Tahrîr ve’t-Tenvîr", "https://islamansiklopedisi.org.tr/et-tahrir-vet-tenvir"],
    ["Journal of Qur’anic Studies (Edinburgh University Press, 2019): Tropology and Inimitability: Ibn ʿĀshūr’s Theory of tafsīr", "https://www.euppublishing.com/doi/abs/10.3366/jqs.2019.0368", "al-Tahrir wa’l-tanwir"]
  ],
  "ibn-hajar": [
    ["Oxford Reference: Ahmad ibn Hajar al-Asqalani", "https://www.oxfordreference.com/view/10.1093/oi/authority.20110803095429356"],
    ["TDV İslâm Ansiklopedisi: İbn Hacer el-Askalânî", "https://islamansiklopedisi.org.tr/ibn-hacer-el-askalani"],
    ["Journal of Near Eastern Studies 76 (2017): Joel Blecher, Revision in the Manuscript Age: New Evidence of Early Versions of Ibn Ḥajar’s Fatḥ al-bārī", "https://www.journals.uchicago.edu/doi/abs/10.1086/690766", "Fath al-Bari"],
    ["George Washington University: Early Drafts of a Classic Work of Islamic Thought Discovered (2017)", "https://mediarelations.gwu.edu/early-drafts-classic-work-islamic-thought-discovered", "completion of Fath al-Bari in 1438"],
    ["TDV İslâm Ansiklopedisi: Âişe bint Muhammed", "https://islamansiklopedisi.org.tr/aise-bint-muhammed", "his study of Sahih al-Bukhari with Aisha bint Abd al-Hadi"]
  ],
  "ibn-hanbal": [
    ["Britannica: Aḥmad ibn Ḥanbal", "https://www.britannica.com/biography/Ahmad-ibn-Hanbal"],
    ["TDV İslâm Ansiklopedisi: Ahmed b. Hanbel", "https://islamansiklopedisi.org.tr/ahmed-b-hanbel"]
  ],
  "ibn-haytham": [
    ["Biographical Encyclopedia of Astronomers (ISMI): Ibn al-Haytham", "https://ismi.mpiwg-berlin.mpg.de/biography/Ibn_al-Haytham_BEA.htm"],
    ["ISMI (Max Planck Institute): Kitāb al-manāẓir", "https://ismi.mpiwg-berlin.mpg.de/text/127841", "Kitab al-manazir"],
    ["ISMI (Max Planck Institute): Šukūk ʿalā Baṭlamyūs", "https://ismi.mpiwg-berlin.mpg.de/text/167879", "al-Shukuk ala Batlamyus"]
  ],
  "ibn-hazm": [
    ["Britannica: Ibn Ḥazm", "https://www.britannica.com/biography/Ibn-Hazm"],
    ["TDV İslâm Ansiklopedisi: İbn Hazm", "https://islamansiklopedisi.org.tr/ibn-hazm"]
  ],
  "ibn-ishaq": [
    ["Britannica: Sīrat Muḥammad rasūl Allāh", "https://www.britannica.com/topic/Sirat-Muhammad-rasul-Allah"],
    ["Britannica: Muhammad: biographical sources", "https://www.britannica.com/biography/Muhammad"],
    ["Britannica: Ibn Isḥāq", "https://www.britannica.com/biography/Ibn-Ishaq"],
    ["TDV İslâm Ansiklopedisi: İbn İshak", "https://islamansiklopedisi.org.tr/ibn-ishak"]
  ],
  "ibn-kathir": [
    ["TDV İslâm Ansiklopedisi: İbn Kesîr", "https://islamansiklopedisi.org.tr/ibn-kesir-ebul-fida"],
    ["“Was Ibn Kathīr the ‘Spokesperson’ for Ibn Taymiyya?” (article, academia.edu)", "https://www.academia.edu/6996715/Was_Ibn_Kathir_the_Spokesperson_for_Ibn_Taymiyya_Jonah_as_a_Prophet_of_Obedience", "the link with Ibn Taymiyya"]
  ],
  "ibn-khaldun": [
    ["Britannica: Ibn Khaldūn", "https://www.britannica.com/biography/Ibn-Khaldun"],
    ["Britannica: Ibn Khaldūn, the Muqaddimah", "https://www.britannica.com/biography/Ibn-Khaldun/The-Muqaddimah-Ibn-Khalduns-philosophy-of-history"],
    ["TDV İslâm Ansiklopedisi: İbn Haldûn", "https://islamansiklopedisi.org.tr/ibn-haldun"],
    ["PhilPapers: Ibn Khaldun and Philosophy", "https://philpapers.org/rec/ILKIKA", "his critique of philosophy"]
  ],
  "ibn-qayyim": [
    ["Oxford Reference: Ibn Qayyim al-Jawzīyah (Oxford Encyclopedia of the Islamic World)", "https://www.oxfordreference.com/display/10.1093/oi/authority.20110803095955635"],
    ["Oxford Reference: Ibn Qayyim al-Jawziyya (Oxford International Encyclopedia of Legal History)", "https://www.oxfordreference.com/display/10.1093/acref/9780195134056.001.0001/acref-9780195134056-e-387"],
    ["TDV İslâm Ansiklopedisi: İbn Kayyim el-Cevziyye", "https://islamansiklopedisi.org.tr/ibn-kayyim-el-cevziyye"]
  ],
  "ibn-rushd": [
    ["Britannica: Averroës", "https://www.britannica.com/biography/Averroes"],
    ["Stanford Encyclopedia of Philosophy: Ibn Rushd", "https://plato.stanford.edu/entries/ibn-rushd/"],
    ["Library of Congress: Bidāyat al-mujtahid", "https://www.loc.gov/item/74227920/", "Bidayat al-mujtahid"]
  ],
  "ibn-sina": [
    ["Encyclopaedia Iranica: Avicenna ii. Biography", "https://www.iranicaonline.org/articles/avicenna-ii/"],
    ["Internet Encyclopedia of Philosophy: Avicenna (Ibn Sina)", "https://iep.utm.edu/avicenna-ibn-sina/"]
  ],
  "ibn-taymiyya": [
    ["Oxford Academic: Ibn Taymiyya", "https://academic.oup.com/reference/62361/reference-article-abstract/554574605"],
    ["Library of Congress: Ibn Taymiyyah on reason and revelation", "https://www.loc.gov/item/2019033460/", "Dar’ ta’arud al-aql wa’l-naql"],
    ["Islamic Law and Society (2024): Ibn Taymiyya and his Circle on samāʿ (RelBib record)", "https://relbib.de/Record/1890306797", "his writing against Sufi listening"]
  ],
  "ibn-tufayl": [
    ["Oxford Academic: Ibn Ṭufayl", "https://academic.oup.com/reference/62361/reference-article-abstract/554573383"],
    ["TDV İslâm Ansiklopedisi: İbn Tufeyl", "https://islamansiklopedisi.org.tr/ibn-tufeyl"]
  ],
  "iqbal": [
    ["Britannica: Muhammad Iqbal", "https://www.britannica.com/biography/Muhammad-Iqbal"],
    ["International Iqbal Society: 1930 Presidential Address, Allahabad", "https://www.iqbal.com.pk/allama-iqbal-prose-works/stray-reflections-the-private-notebook-of-muham/991-prose-works/speeches-writings-and-statements-of-allama-iqba/1680-1930-presidential-address-allahabad-allama-iqbal"],
    ["Iqbal Cyber Library: Six Lectures on the Reconstruction of Religious Thought in Islam (Lahore, 1930)", "https://iqbalcyberlibrary.net/files/023/Iqbal-Six-Lectures-1930.pdf", "the 1930 title"]
  ],
  "jabir-ibn-zayd": [
    ["Cambridge University Press: Omer Awass, Fatwa and the Making and Renewal of Islamic Law (2023), ch. 2", "https://www.cambridge.org/core/books/fatwa-and-the-making-and-renewal-of-islamic-law/fatwa-in-the-classical-age/7DE13632B92F01C307F98C8CE400C792"],
    ["TDV İslâm Ansiklopedisi: Câbir b. Zeyd", "https://islamansiklopedisi.org.tr/cabir-b-zeyd"],
    ["TDV İslâm Ansiklopedisi: İbâzıyye", "https://islamansiklopedisi.org.tr/ibaziyye", "his foundational place in the Ibadi school"]
  ],
  "jafar": [
    ["Encyclopaedia Iranica: Jaʿfar al-Ṣādeq i. Life", "https://www.iranicaonline.org/articles/jafar-al-sadeq-i-life/"],
    ["Encyclopaedia Iranica: Jaʿfar al-Ṣādeq ii. Teachings", "https://www.iranicaonline.org/articles/jafar-al-sadeq-ii-teachings/"],
    ["Encyclopaedia Iranica: Jaʿfar al-Ṣādeq", "https://www.iranicaonline.org/articles/jafar-al-sadeq/"],
    ["Britannica: Jaʿfar al-Ṣādiq", "https://www.britannica.com/biography/Jafar-al-Sadiq"],
    ["Encyclopaedia Iranica: Ismailism xvii. The imamate in Ismailism", "https://www.iranicaonline.org/articles/ismailism-xvii-the-imamate-in-ismailism/", "his descent and Isma’ili numbering"]
  ],
  "jahiz": [
    ["Oxford Academic: al-Jāḥiẓ", "https://academic.oup.com/reference/62361/reference-article-abstract/554570021"],
    ["Encyclopaedia Iranica: Jāḥeẓ", "https://www.iranicaonline.org/articles/jahez/"]
  ],
  "jami": [
    ["Encyclopaedia Iranica: Jāmi i. Life and works", "https://www.iranicaonline.org/articles/jami-i/"],
    ["Encyclopaedia Iranica: Jām (in Ghur)", "https://www.iranicaonline.org/articles/jam-1/", "Jam in Ghur, a different place from Jami’s birthplace"]
  ],
  "jilani": [
    ["Encyclopaedia Iranica: ʿAbd-al-Qāder Jīlānī", "https://www.iranicaonline.org/articles/abd-al-qader-jilani/"],
    ["Oxford Academic: ʿAbd al-Qadir al-Jilani", "https://academic.oup.com/reference/62361/reference-article-abstract/554575952"],
    ["Encyclopedia of the Modern Middle East: Qadiriyya Order", "https://encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/qadiriyya-order", "the joining of Hanbali and Sufi thought"]
  ],
  "junayd": [
    ["Britannica: Sufism: thought and practice", "https://www.britannica.com/topic/Sufism/Sufi-thought-and-practice"],
    ["TDV İslâm Ansiklopedisi: Cüneyd-i Bağdâdî", "https://islamansiklopedisi.org.tr/cuneyd-i-bagdadi"],
    ["Britannica: al-Ḥallāj", "https://www.britannica.com/biography/al-Hallaj", "his teaching of al-Hallaj"]
  ],
  "jurjani": [
    ["JILSA (PDF): ʿAbd al-Qāhir al-Jurjānī on Qur’anic nazm and his criticism of ṣarfa", "https://jurnalfahum.uinsa.ac.id/index.php/jilsa/article/download/1432/584"],
    ["TDV İslâm Ansiklopedisi: Abdülkāhir el-Cürcânî", "https://islamansiklopedisi.org.tr/abdulkahir-el-curcani"],
    ["Durham E-Theses (PDF)", "https://etheses.durham.ac.uk/id/eprint/238/1/Thesis.pdf", "the estimated birth year"]
  ],
  "juwayni": [
    ["TDV İslâm Ansiklopedisi: Cüveynî, İmâmü’l-Haremeyn", "https://islamansiklopedisi.org.tr/cuveyni-imamul-haremeyn"],
    ["Library of Congress: Kitāb al-Burhān fī uṣūl al-fiqh", "https://www.loc.gov/item/2017481502/", "al-Burhan fi usul al-fiqh"],
    ["Oxford Academic: Coercion and Moral Agency in Ashʿarism", "https://academic.oup.com/book/10075/chapter-abstract/157534748", "his later view of human power"]
  ],
  "karima": [
    ["Cambridge University Press: Karīma al-Marwaziyya and the transmission of al-Bukhārī’s Ṣaḥīḥ", "https://www.cambridge.org/core/books/abs/oriental-languages-and-civilizations/karima-bint-ahmad-almarwaziyya-and-thetransmission-of-muhammad-b-ismail-albukharisaljami-alsahih/6C1A98CD93F80E957B40ACFD6C427178"],
    ["TDV İslâm Ansiklopedisi: el-Câmiu’s-sahîh", "https://islamansiklopedisi.org.tr/el-camius-sahih--buhari", "her teaching of the Sahih in Mecca"]
  ],
  "katib-celebi": [
    ["Britannica: Kâtip Çelebi", "https://www.britannica.com/biography/Katip-Celebi"],
    ["TDV İslâm Ansiklopedisi: Kâtib Çelebi", "https://islamansiklopedisi.org.tr/katib-celebi"],
    ["TDV İslâm Ansiklopedisi: Mîzânü’l-hak", "https://islamansiklopedisi.org.tr/mizanul-hak", "Mizan al-haqq"]
  ],
  "khomeini": [
    ["Britannica: Ruhollah Khomeini", "https://www.britannica.com/biography/Ruhollah-Khomeini"],
    ["Britannica: velāyat-e faqīh", "https://www.britannica.com/topic/velayat-e-faqih"],
    ["Encyclopaedia Iranica: Khomeini i. Life", "https://www.iranicaonline.org/articles/khomeini-i-life/"],
    ["Cambridge (Iranian Studies, 2022): Ayatollah Khomeini: From Islamic Government to Sovereign State", "https://www.cambridge.org/core/journals/iranian-studies/article/ayatollah-khomeini-from-islamic-government-to-sovereign-state/E2AD85CE370DAE835C45707F301AD3F1"],
    ["TDV İslâm Ansiklopedisi: Humeynî", "https://islamansiklopedisi.org.tr/humeyni"]
  ],
  "kindi": [
    ["Biographical Encyclopedia of Astronomers (ISMI): Kindī", "https://ismi.mpiwg-berlin.mpg.de/biography/Kindi_BEA.htm"],
    ["Stanford Encyclopedia of Philosophy: al-Kindi", "https://plato.stanford.edu/entries/al-kindi/"],
    ["Oxford Academic: The rise of falsafa: al-Kindī, On First Philosophy", "https://academic.oup.com/edited-volume/38657/chapter-abstract/335767408", "Fi’l-falsafa al-ula"]
  ],
  "kubra": [
    ["Encyclopaedia Iranica: Kobrawiya i. The Eponym", "https://www.iranicaonline.org/articles/kobrawiya-i-the-eponym/", "life and works"],
    ["TDV İslâm Ansiklopedisi: Necmeddîn-i Kübrâ", "https://islamansiklopedisi.org.tr/necmeddin-i-kubra"],
    ["Encyclopaedia Iranica: Khwarazmshahs iii", "https://www.iranicaonline.org/articles/khwarazmshah/iii-the-line-of-anustigin/", "Gurganj, 1221"],
    ["UNESCO World Heritage nomination: Kunya-Urgench", "https://whc.unesco.org/uploads/nominations/1199.pdf", "the fall of Gurganj"]
  ],
  "kulayni": [
    ["Encyclopaedia Iranica: Kolayni", "https://www.iranicaonline.org/articles/kolayni/"],
    ["TDV İslâm Ansiklopedisi: Küleynî", "https://islamansiklopedisi.org.tr/kuleyni"]
  ],
  "liu-zhi": [
    ["Harvard University Press: Sachiko Murata, William C. Chittick & Tu Weiming, The Sage Learning of Liu Zhi", "https://www.hup.harvard.edu/books/9780674033252"],
    ["Brill (PDF): Tianfang Dianli: Norms and Rites of Islam in Imperial China", "https://brill.com/display/book/9789004319257/B9789004319257_003.pdf", "Tianfang dianli"],
    ["Cambridge (Iranian Studies): Jāmī: A Legend in China", "https://www.cambridge.org/core/journals/iranian-studies/article/jami-a-legend-in-china-a-study-of-the-transmission-and-transformation-of-jamis-texts-in-china/DC351E4C8B3750D4E0B757BB162557F4", "his use of Jami’s Lawa’ih"],
    ["TDV İslâm Ansiklopedisi: Liu Zhi", "https://islamansiklopedisi.org.tr/liu-zhi"]
  ],
  "malik": [
    ["Britannica: Mālik ibn Anas", "https://www.britannica.com/biography/Malik-ibn-Anas"],
    ["TDV İslâm Ansiklopedisi: Ca’fer es-Sâdık", "https://islamansiklopedisi.org.tr/cafer-es-sadik", "the link with Jaʿfar al-Sadiq"],
    ["Routledge: Yasin Dutton, The Origins of Islamic Law (preview)", "https://api.pageplace.de/preview/DT0400.9781136110665_A23827084/preview-9781136110665_A23827084.pdf", "the birth year"]
  ],
  "marghinani": [
    ["Oxford Reference: al-Marghinani (Oxford Dictionary of Islam)", "https://www.oxfordreference.com/viewbydoi/10.1093/oi/authority.20110803100133763"],
    ["TDV İslâm Ansiklopedisi: Mergīnânî, Burhâneddin", "https://islamansiklopedisi.org.tr/merginani-burhaneddin"]
  ],
  "marjani": [
    ["Minbar. Islamic Studies 13 (2020): The works of Shihab al-Din al-Marjani on Islamic scholastic theology", "https://doi.org/10.31162/2618-9569-2020-13-1-103-116"],
    ["TDV İslâm Ansiklopedisi: Mercânî", "https://islamansiklopedisi.org.tr/mercani"],
    ["UvA-DARE: Michael Kemper, Imperial Russia as Dar al-Islam? (PDF)", "https://dare.uva.nl/document/2/167407", "Nazurat al-haqq"]
  ],
  "maturidi": [
    ["Britannica: Māturīdiyyah", "https://www.britannica.com/topic/Maturidiyah"],
    ["TDV İslâm Ansiklopedisi: Mâtürîdî", "https://islamansiklopedisi.org.tr/maturidi"],
    ["TDV İslâm Ansiklopedisi: Teʾvîlâtü’l-Kurʾân", "https://islamansiklopedisi.org.tr/tevilatul-kuran", "Ta’wilat al-Qur’an"]
  ],
  "mawardi": [
    ["Britannica: al-Māwardī", "https://www.britannica.com/biography/al-Mawardi"],
    ["TDV İslâm Ansiklopedisi: Mâverdî", "https://islamansiklopedisi.org.tr/maverdi"]
  ],
  "mawdudi": [
    ["Britannica: Abul Ala Mawdudi", "https://www.britannica.com/biography/Abul-Ala-Mawdudi"],
    ["TDV İslâm Ansiklopedisi: Mevdûdî", "https://islamansiklopedisi.org.tr/mevdudi"]
  ],
  "mir-damad": [
    ["Encyclopaedia Iranica: Dāmād, Mīr(-e), Sayyed Moḥammad Bāqer", "https://www.iranicaonline.org/articles/damad-mir-e-sayyed-mohammad-baqer-b/"],
    ["Encyclopaedia Iranica: Isfahan School of Philosophy", "https://www.iranicaonline.org/articles/isfahan-school-of-philosophy/"],
    ["Cambridge History of Iran, vol. 6 (PDF): S. H. Nasr, Spiritual Movements, Philosophy and Theology in the Safavid Period", "https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/202233EE8B21BC12FD75CE239228F01A/9781139054980c13_p656-697_CBO.pdf/spiritual_movements_philosophy_and_theology_in_the_safavid_period.pdf"],
    ["TDV İslâm Ansiklopedisi: Dâmâd, Muhammed Bâkır", "https://islamansiklopedisi.org.tr/damad-muhammed-bakir"]
  ],
  "mufid": [
    ["Encyclopaedia Iranica: Hadith ii. In Shiʿism", "https://www.iranicaonline.org/articles/hadith-ii/"],
    ["TDV İslâm Ansiklopedisi: Müfîd, Şeyh", "https://islamansiklopedisi.org.tr/mufid-seyh"],
    ["Encyclopaedia Iranica: Bibliographies and catalogues ii. In Iran", "https://www.iranicaonline.org/articles/bibliographies-iia/", "the dates 338–413 AH"]
  ],
  "mulla-sadra": [
    ["Stanford Encyclopedia of Philosophy: Mulla Sadra", "https://plato.stanford.edu/entries/mulla-sadra/"],
    ["Encyclopaedia Iranica: Asfār al-arbaʿa", "https://www.iranicaonline.org/articles/asfar-al-arbaa/", "al-Asfar al-arba’a"]
  ],
  "muslim": [
    ["Britannica: Muslim ibn al-Ḥajjāj", "https://www.britannica.com/biography/Muslim-ibn-al-Hajjaj"],
    ["TDV İslâm Ansiklopedisi: Müslim b. Haccâc", "https://islamansiklopedisi.org.tr/muslim-b-haccac"]
  ],
  "nabulusi": [
    ["Britannica: ʿAbd al-Ghanī al-Nābulusī", "https://www.britannica.com/biography/Abd-al-Ghani-al-Nabulusi"],
    ["Brill: Samer Akkach, Letters of a Sufi Scholar", "https://brill.com/display/title/14508"],
    ["Cambridge (JRAS review, PDF): Letters of a Sufi Scholar: The Correspondence of ʿAbd al-Ghanī al-Nābulusī", "https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/DDE7A12AEC42C0DB53EB58805A450174/S1356186310000118a.pdf/letters-of-a-sufi-scholar-the-correspondence-of-abd-al-ghani-al-nabulusi-1641-1731-by-samer-akkach-pp-512-leiden-and-boston-brill-2010.pdf"],
    ["TDV İslâm Ansiklopedisi: Nablusî, Abdülganî b. İsmâil", "https://islamansiklopedisi.org.tr/nablusi-abdulgani-b-ismail"]
  ],
  "nana-asmau": [
    ["African Studies Centre Leiden: Nana Asmaʾu", "https://www.ascleiden.nl/content/library-weekly/nana-asmau"],
    ["Oxford Academic: Asmaʾu, Nana", "https://academic.oup.com/edited-volume/61663/chapter-abstract/553437989"],
    ["Revue de la FM6OA: The life and contribution of Nana Asmaʾu", "https://www.fm6oa.org/revue/article/the-life-and-contribution-of-nana-asmau/"],
    ["Cambridge Companion to Sufism (ch. 8): Nana Asma’u, Nineteenth-Century West African Sufi", "https://www.cambridge.org/core/books/cambridge-companion-to-sufism/nana-asmau-nineteenthcentury-west-african-sufi1/C257E81964C37834C93FE9A7E03C638D", "education in Usman dan Fodio’s circle and Sufi works"]
  ],
  "naqshband": [
    ["Encyclopaedia Iranica: Bahāʾ-al-Dīn Naqšband", "https://www.iranicaonline.org/articles/baha-al-din-naqsband-kaja-mohammad-b/"],
    ["Shahzad Bashir: Movement and Stillness, the Practice of Sufi Dhikr in Fourteenth-Century Central Asia (PDF)", "https://www.themathesontrust.org/papers/islam/Bashir-Movement_and_Stillness_Sufi_Dhikr.pdf", "his silent dhikr, as later biographies tell it"]
  ],
  "nasir-khusraw": [
    ["Internet Encyclopedia of Philosophy: Nasir Khusraw", "https://iep.utm.edu/khusraw/"],
    ["Institute of Ismaili Studies: Farhad Daftary, The Mediaeval Ismailis of the Iranian Lands", "https://www.iis.ac.uk/scholarly-contributions/the-mediaeval-ismailis-of-the-iranian-lands/"],
    ["Institute of Ismaili Studies (PDF): Kutub Kassam, Nasir Khusraw: A Living Tradition", "https://www.iis.ac.uk/wp-content/uploads/2024/10/nasir-khusraw-a-living-tradition-kutub-kassam-28-10-10-1078353117.pdf"],
    ["Encyclopaedia Iranica: Ismailism xiii. Ismaili Literature in Persian and Arabic", "https://www.iranicaonline.org/articles/ismailism-xiii-ismaili-literature-in-persian-and-arabic/"]
  ],
  "nasir-tusi": [
    ["Biographical Encyclopedia of Astronomers (ISMI): Ṭūsī", "https://ismi.mpiwg-berlin.mpg.de/biography/Tusi_BEA.htm"],
    ["TDV İslâm Ansiklopedisi: Tûsî, Nasîrüddin", "https://islamansiklopedisi.org.tr/tusi-nasiruddin"],
    ["Brill: al-Tadhkira fī ʿilm al-hayʾa", "https://www.degruyterbrill.com/document/isbn/9789004406476/html", "al-Tadhkira fi ilm al-hay’a"]
  ],
  "nawawi": [
    ["TDV İslâm Ansiklopedisi: Nevevî", "https://islamansiklopedisi.org.tr/nevevi"],
    ["TDV İslâm Ansiklopedisi: Minhâcü’t-tâlibîn", "https://islamansiklopedisi.org.tr/minhacut-talibin", "Minhaj al-talibin"],
    ["Britannica: Hadith", "https://www.britannica.com/topic/Hadith", "Riyad al-salihin"]
  ],
  "nazzam": [
    ["Encyclopedia of Islam and the Muslim World: Nazzam, al- (782–c. 840)", "https://encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/nazzam-al-782-c-840"],
    ["Encyclopaedia Iranica: Abū Esḥāq Naẓẓām", "https://www.iranicaonline.org/articles/abu-eshaq-ebrahim-b-3/", "dates c. 165–221 AH (c. 782–836 CE)"],
    ["DergiPark (PDF): al-Naẓẓām’s ṣarfa and al-Jāḥiẓ on the inimitability of the Qur’an", "https://dergipark.org.tr/en/download/article-file/4746272", "his view of sarfa"]
  ],
  "nursi": [
    ["Oxford Reference: Said Nursi (Oxford Encyclopedia of the Islamic World)", "https://www.oxfordreference.com/view/10.1093/oi/authority.20110803100242365"],
    ["TDV İslâm Ansiklopedisi: Said Nursî", "https://islamansiklopedisi.org.tr/said-nursi"]
  ],
  "omar-khayyam": [
    ["Encyclopaedia Iranica: Khayyam, Omar", "https://www.iranicaonline.org/articles/khayyam-omar/"],
    ["ISMI (Max Planck Institute): Risāla fī al-barāhīn ʿalā masāʾil al-jabr wa-al-muqābala", "https://ismi.mpiwg-berlin.mpg.de/index.php/node/3903823", "Risala fi’l-barahin ala masa’il al-jabr wa’l-muqabala"],
    ["MacTutor History of Mathematics: Omar Khayyam", "https://mathshistory.st-andrews.ac.uk/Biographies/Khayyam/", "death in 1131"],
    ["Biographical Encyclopedia of Astronomers: Khayyām (PDF)", "https://islamsci.mcgill.ca/RASI/BEA/Khayyam_BEA.pdf", "death c. 1123"]
  ],
  "qadi-numan": [
    ["Institute of Ismaili Studies: al-Nuʿman, al-Qadi (d. 363 AH / 974 CE)", "https://www.iis.ac.uk/scholarly-contributions/al-numan-al-qadi-d-363-ah-974-ce/"],
    ["Encyclopaedia Iranica: Ejtehād", "https://www.iranicaonline.org/articles/ejtehad/", "Kitab ikhtilaf usul al-madhahib"],
    ["TDV İslâm Ansiklopedisi: Nu‘mân b. Muhammed", "https://islamansiklopedisi.org.tr/numan-b-muhammed", "court service at al-Mahdiyya and al-Mansuriyya, Da’a’im al-Islam"]
  ],
  "qasim-rassi": [
    ["Cambridge University Press: Patricia Crone, God’s Rule, ch. 9 “The Zaydis” (PDF)", "https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/6B69E868DD32C812D5D39ECF705285A8/9780748646500c9_p99-109_CBO.pdf/the-zaydis.pdf"],
    ["TDV İslâm Ansiklopedisi: Ressî", "https://islamansiklopedisi.org.tr/ressi"],
    ["TDV İslâm Ansiklopedisi: Zeydiyye", "https://islamansiklopedisi.org.tr/zeydiyye"]
  ],
  "qushayri": [
    ["TDV İslâm Ansiklopedisi: Kuşeyrî, Abdülkerîm b. Hevâzin", "https://islamansiklopedisi.org.tr/kuseyri-abdulkerim-b-hevazin"],
    ["Library of Congress: al-Qushayri’s Epistle on Sufism", "https://www.loc.gov/item/2021667378/", "al-Risala al-Qushayriyya"],
    ["Oxford University Press: Martin Nguyen, Sufi Master and Qur’an Scholar (Abū’l-Qāsim al-Qushayrī and the Laṭāʾif al-ishārāt)", "https://global.oup.com/academic/product/sufi-master-and-quran-scholar-9780197265130", "Lata’if al-isharat"]
  ],
  "qushji": [
    ["Nazariyat (2024): F. Jamil Ragep, ʿAlī Qūshjī on the Earth’s Motion and Bīrjandī’s Critique", "https://www.nazariyat.org/en/issues/cilt-10-sayi-2/jamil-ragep-ali-kuscu"],
    ["TDV İslâm Ansiklopedisi: Ali Kuşçu", "https://islamansiklopedisi.org.tr/ali-kuscu"],
    ["Encyclopaedia Iranica: ʿAli Qušji", "https://www.iranicaonline.org/articles/ali-qusji-qusju-ala-al-din-ali-mohammad-theologian-and-scientist-d/", "the teacher link"],
    ["Biographical Encyclopedia of Astronomers (ISMI): Qūshjī", "https://ismi.mpiwg-berlin.mpg.de/biography/Qushji_BEA.htm", "the teacher link"]
  ],
  "rabia": [
    ["TDV İslâm Ansiklopedisi: Râbia el-Adeviyye", "https://islamansiklopedisi.org.tr/rabia-el-adeviyye"],
    ["Britannica: Sufism: history", "https://www.britannica.com/topic/Sufism/History", "Rabiʿa and the love of God"]
  ],
  "raniri": [
    ["Cambridge University Press: Islamic Connections (Shari’a-mindedness in the Malay World and the contributions of Nur al-Din al-Raniri)", "https://www.cambridge.org/core/books/islamic-connections/shariamindedness-in-the-malay-world-and-the-indian-connection-the-contributions-of-nur-aldin-alraniri-and-nik-abdul-aziz-bin-haji-nik-mat/3E31F6C8CB33F7DFCBAF74ADB5CCDE9D"],
    ["Brill (PDF): G. W. J. Drewes on Nur al-Din al-Raniri", "https://brill.com/display/book/9789004454170/B9789004454170_s008.pdf"],
    ["TDV İslâm Ansiklopedisi: Nûreddin er-Rânîrî", "https://islamansiklopedisi.org.tr/nureddin-er-raniri"]
  ],
  "rida": [
    ["Britannica: Rashīd Riḍā", "https://www.britannica.com/biography/Rashid-Rida"],
    ["Yale University Press: The Caliphate or Supreme Imamate", "https://yalebooks.yale.edu/book/9780300190274/the-caliphate-or-supreme-imamate/", "the caliphate treatise"],
    ["Oxford Academic: Muḥammad Rashīd Riḍā’s reform vision", "https://academic.oup.com/edited-volume/62861/chapter-abstract/563281412", "the link with Abduh"]
  ],
  "rumi": [
    ["Britannica: Rūmī", "https://www.britannica.com/biography/Rumi"],
    ["Britannica: Mawlawīyah", "https://www.britannica.com/topic/Mawlawiyah"],
    ["Foundation for Iranian Studies: Franklin Lewis on Rumi", "https://fis-iran.org/our-programs/noruz-lectures/rumi-icon-man/", "the family’s move west"]
  ],
  "sayyid-ahmad-khan": [
    ["Britannica: Sir Sayyid Ahmad Khan", "https://www.britannica.com/biography/Sayyid-Ahmad-Khan"],
    ["TDV İslâm Ansiklopedisi: Ahmed Han, Seyyid", "https://islamansiklopedisi.org.tr/ahmed-han-seyyid", "death on 27 March 1898 (4 Dhu al-Qa’da 1315 AH)"],
    ["Aligarh Muslim University: History", "https://www.amu.ac.in/about-us/history", "the 1875 school and the 1877 college"],
    ["Internet Archive: Syed Ahmed Khan, The Causes of the Indian Revolt (English translation of Asbab-i baghawat-i Hind)", "https://archive.org/details/in.ernet.dli.2015.200833", "Asbab-i baghawat-i Hind"]
  ],
  "shafii": [
    ["Britannica: Shāfiʿī (school of law)", "https://www.britannica.com/topic/Shafiiyah"],
    ["Britannica: Islamic world: Sharīʿah, al-Shāfiʿī", "https://www.britannica.com/topic/Islamic-world/Sunnis-and-Shiites"],
    ["TDV İslâm Ansiklopedisi: Şâfiî", "https://islamansiklopedisi.org.tr/safii"],
    ["IJMES: Wael Hallaq, Was al-Shafiʿi the Master Architect of Islamic Jurisprudence?", "https://www.cambridge.org/core/journals/international-journal-of-middle-east-studies/article/was-alshafii-the-master-architect-of-islamic-jurisprudence/71A7752678E37309173ABA27AB12710E", "the debate over his role in legal theory"]
  ],
  "shah-wali-allah": [
    ["Encyclopaedia Iranica: Dehlavī, Šāh Walī-Allāh", "https://www.iranicaonline.org/articles/dehlavi/"],
    ["Brill: The Conclusive Argument from God (Ḥujjat Allāh al-bāligha)", "https://www.degruyterbrill.com/document/isbn/9789004444768/html", "Hujjat Allah al-baligha"]
  ],
  "shammakhi": [
    ["Cambridge University Press: Paul M. Love Jr., Ibadi Muslims of North Africa (2018), ch. 7", "https://www.cambridge.org/core/books/ibadi-muslims-of-north-africa/end-of-a-tradition/656A6A9B8E73B8B2D779AB9FE9A15D67"],
    ["TDV İslâm Ansiklopedisi: Kitâbü’s-Siyer", "https://islamansiklopedisi.org.tr/kitabus-siyer"]
  ],
  "shatibi": [
    ["Oxford Reference: Abu Ishaq Ibrahim al-Shatibi", "https://oxfordreference.com/view/10.1093/oi/authority.20110810105832366"],
    ["TDV İslâm Ansiklopedisi: Şâtıbî, İbrâhim b. Mûsâ", "https://islamansiklopedisi.org.tr/satibi-ibrahim-b-musa"],
    ["TDV İslâm Ansiklopedisi: el-İʿtisâm", "https://islamansiklopedisi.org.tr/el-itisam", "al-I’tisam"]
  ],
  "shawkani": [
    ["Oxford Reference: Muhammad al-Shawkani", "https://www.oxfordreference.com/display/10.1093/oi/authority.20110803100500203"],
    ["TDV İslâm Ansiklopedisi: Şevkânî", "https://islamansiklopedisi.org.tr/sevkani"]
  ],
  "shaykh-tusi": [
    ["Encyclopaedia Iranica: Hadith ii. In Shiʿism", "https://www.iranicaonline.org/articles/hadith-ii/"],
    ["TDV İslâm Ansiklopedisi: Tûsî, Ebû Caʿfer", "https://islamansiklopedisi.org.tr/tusi-ebu-cafer"]
  ],
  "shuhda": [
    ["Cambridge University Press: Asma Sayeed, Women and the Transmission of Religious Knowledge in Islam, ch. 4", "https://www.cambridge.org/core/books/women-and-the-transmission-of-religious-knowledge-in-islam/culmination-in-traditionalism/256C56689600D723FC428DFEA465B618"],
    ["TDV İslâm Ansiklopedisi: Şühde el-Kâtibe", "https://islamansiklopedisi.org.tr/suhde-el-katibe"]
  ],
  "sibawayh": [
    ["TDV İslâm Ansiklopedisi: Sîbeveyhi (PDF)", "https://cdn2.islamansiklopedisi.org.tr/dosya/37/C37012166.pdf"],
    ["Cambridge University Press: Sibawayh on ʾimālah (inclination), introduction", "https://www.cambridge.org/core/books/abs/sibawayh-on-imalah-inclination/introduction/E4F1EEBAD490F2F81F178123E111A2AF", "the birth year"],
    ["Bulletin of SOAS: The Greek Death of Sībawayhi and the Origins of Arabic Grammar", "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/C8835A0E868FCC1CC496978766678CF2/S0041977X22000593a.pdf/the-greek-death-of-sibawayhi-and-the-origins-of-arabic-grammar.pdf", "the reports of his Baghdad debate and death in Persia"]
  ],
  "sinkili": [
    ["Brill EI3O: ʿAbd al-Raʾūf al-Sinkilī (Peter G. Riddell)", "https://referenceworks.brill.com/display/entries/EI3O/COM-0149.xml"],
    ["TDV İslâm Ansiklopedisi: Abdurraûf es-Sinkilî", "https://islamansiklopedisi.org.tr/abdurrauf-es-sinkili"]
  ],
  "sirhindi": [
    ["Britannica: Shaykh Aḥmad Sirhindī", "https://www.britannica.com/biography/Shaykh-Ahmad-Sirhindi"]
  ],
  "suhrawardi": [
    ["Stanford Encyclopedia of Philosophy: Suhrawardi", "https://plato.stanford.edu/entries/suhrawardi/"]
  ],
  "suyuti": [
    ["Britannica: al-Suyūṭī", "https://www.britannica.com/biography/al-Suyuti"],
    ["Library of Congress: Kitāb al-itqān fī ʿulūm al-Qurʾān", "https://www.loc.gov/item/2015377135/", "al-Itqan fi ulum al-Qur’an"]
  ],
  "tabari": [
    ["Encyclopaedia Iranica: Ṭabari, Abu Jaʿfar Moḥammad b. Jarir", "https://www.iranicaonline.org/articles/tabari-abu-jafar/"],
    ["Britannica: al-Ṭabarī", "https://www.britannica.com/biography/al-Tabari"]
  ],
  "tabatabai": [
    ["Encyclopaedia Iranica: Ṭabāṭabāʾi, Moḥammad-Ḥosayn", "https://www.iranicaonline.org/articles/tabatabai-mohammad-hosayn/"],
    ["Oxford Reference: Muhammad Husayn Tabatabai (Oxford Dictionary of Islam)", "https://www.oxfordreference.com/display/10.1093/oi/authority.20110803101820828"],
    ["TDV İslâm Ansiklopedisi: Tabâtabâî, Muhammed Hüseyin", "https://islamansiklopedisi.org.tr/tabatabai-muhammed-huseyin"]
  ],
  "taftazani": [
    ["ISMI (Max Planck Institute): Saʿd al-Dīn al-Taftāzānī", "https://ismi.mpiwg-berlin.mpg.de/person/8727"],
    ["TDV İslâm Ansiklopedisi: Teftâzânî", "https://islamansiklopedisi.org.tr/teftazani"],
    ["Encyclopedia of Religion: Taftāzānī, al-", "https://encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/taftazani-al", "his view of takwin in the 1367 commentary"]
  ],
  "tahawi": [
    ["Oxford Reference: al-Tahawi (Biographical Encyclopaedia of Islamic Philosophy)", "https://oxfordreference.com/view/10.1093/oi/authority.20110803095405786"],
    ["TDV İslâm Ansiklopedisi: el-Akîdetü’t-Tahâviyye", "https://islamansiklopedisi.org.tr/el-akidetut-tahaviyye", "the Tahawi creed"],
    ["TDV İslâm Ansiklopedisi: Tahâvî", "https://islamansiklopedisi.org.tr/tahavi"]
  ],
  "tahtawi": [
    ["Britannica: Rifāʿah Rāfiʿ al-Ṭahṭāwī", "https://www.britannica.com/biography/Rifaah-Rafi-al-Tahtawi"],
    ["TDV İslâm Ansiklopedisi: Rifâa et-Tahtâvî", "https://islamansiklopedisi.org.tr/rifaa-et-tahtavi"]
  ],
  "thanawi": [
    ["Brill EI3O: Madrasa in South Asia (Francis Robinson)", "https://referenceworks.brill.com/display/entries/EI3O/COM-35956.xml"],
    ["Brill EWIO: Marriage Practices: India: 19th and early 20th century (Asiya Alam)", "https://referenceworks.brill.com/display/entries/EWIO/COM-002098.xml", "Ashraf Ali Thanawi’s Bihishti zewar and taqlid"],
    ["Max Planck / Journal of Religious History (2021, PDF): Margrit Pernau & Max Stille on Bihishti zewar", "https://pure.mpg.de/rest/items/item_3231501_8/component/file_3293688/content", "Bihishti zewar"],
    ["TDV İslâm Ansiklopedisi: Eşref Ali", "https://islamansiklopedisi.org.tr/esref-ali"],
    ["University of California Press: Barbara Daly Metcalf, Perfecting Women: Maulana Ashraf ʿAli Thanawi’s Bihishti Zewar", "https://www.ucpress.edu/books/perfecting-women/paper"],
    ["Cambridge (CSSH, 2022): Sovereign and Virtuous Body: The Competent Muslim Woman’s Guide to Health in Thanawi’s Bihishti Zewar (1905)", "https://www.cambridge.org/core/journals/comparative-studies-in-society-and-history/article/sovereign-and-virtuous-body-the-competent-muslim-womans-guide-to-health-in-thanawis-bihishti-zewar-1905/889725055B23F6D4098313D2C5192269"]
  ],
  "tirmidhi": [
    ["Britannica: al-Tirmidhī", "https://www.britannica.com/biography/al-Tirmidhi"],
    ["TDV İslâm Ansiklopedisi: Tirmizî", "https://islamansiklopedisi.org.tr/tirmizi"]
  ],
  "ulugh-beg": [
    ["Biographical Encyclopedia of Astronomers (ISMI): Ulugh Beg", "https://ismi.mpiwg-berlin.mpg.de/index.php/biography/Ulugh_Beg_BEA.htm"]
  ],
  "umm-salama": [
    ["Cambridge University Press: Asma Sayeed, Women and the Transmission of Religious Knowledge in Islam, ch. 1", "https://www.cambridge.org/core/books/women-and-the-transmission-of-religious-knowledge-in-islam/tradition-invented-the-female-companions/B585FE7CE3E5C082A00D88A1464DBC3B"],
    ["Oxford Reference: Wives of the Prophet", "https://www.oxfordreference.com/display/10.1093/oi/authority.20110803124319680"],
    ["TDV İslâm Ansiklopedisi: Ümmü Seleme", "https://islamansiklopedisi.org.tr/ummu-seleme"]
  ],
  "wang-daiyu": [
    ["Matheson Trust / Journal of Sufi Studies 2 (2013, PDF): Kristian Petersen on Wang Daiyu", "https://www.themathesontrust.org/papers/fareasternreligions/petersen-heartofwangdaiyus.pdf"],
    ["Cambridge University Press: Islamic Thought in China", "https://www.cambridge.org/core/books/islamic-thought-in-china/multiple-meanings-of-pilgrimage-in-sinoislamic-thought/DFE5B03CA526CC212558AE4613585184"],
    ["Religions (MDPI, 2026): Recasting Islamic Thought in China: Conceptual Reconfiguration in Wang Daiyu’s Han Kitab", "https://www.mdpi.com/2077-1444/17/10/1118"]
  ],
  "wasil": [
    ["Britannica: Muʿtazilah", "https://www.britannica.com/topic/Mutazilah"],
    ["TDV İslâm Ansiklopedisi: Vâsıl b. Atâ", "https://islamansiklopedisi.org.tr/vasil-b-ata"]
  ],
  "yasawi": [
    ["Britannica: Uzbek literature", "https://www.britannica.com/art/Uzbek-literature", "his place in early Turkic literature"],
    ["Shahzad Bashir: Movement and Stillness, the Practice of Sufi Dhikr in Fourteenth-Century Central Asia (PDF)", "https://www.themathesontrust.org/papers/islam/Bashir-Movement_and_Stillness_Sufi_Dhikr.pdf", "the Yasawi order’s dhikr with movement"],
    ["TDV İslâm Ansiklopedisi: Dîvân-ı Hikmet", "https://islamansiklopedisi.org.tr/divan-i-hikmet", "Divan-i hikmat"],
    ["TDV İslâm Ansiklopedisi: Ahmed Yesevî", "https://islamansiklopedisi.org.tr/ahmed-yesevi", "the unknown birth year"],
    ["ISAM: “Ahmad Yasawi” (encyclopedia entry, PDF)", "https://isamveri.org/pdfdkm/01/DKM011071.pdf", "the reported birth years"]
  ],
  "zabidi": [
    ["Brill (PDF): Stefan Reichmuth on Murtaḍā al-Zabīdī", "https://brill.com/display/book/edcoll/9789047413349/B9789047413349_s011.pdf"],
    ["Cambridge University Press: Arabic Thought beyond the Liberal Age", "https://www.cambridge.org/core/books/arabic-thought-beyond-the-liberal-age/expansion-of-the-political-imagination/F69D5156F757A1E7FD43C6724EA40700"],
    ["TDV İslâm Ansiklopedisi: Zebîdî, Muhammed Murtazâ", "https://islamansiklopedisi.org.tr/zebidi-muhammed-murtaza"]
  ],
  "zamakhshari": [
    ["Britannica: al-Kashshāf ʿan ḥaqāʾiq al-tanzīl", "https://www.britannica.com/topic/Al-Kashshafan-Haqaiq-at-Tanzil"],
    ["TDV İslâm Ansiklopedisi: Zemahşerî", "https://islamansiklopedisi.org.tr/zemahseri"]
  ],
  "zaynab-bint-kamal": [
    ["Cambridge University Press: Asma Sayeed, Women and the Transmission of Religious Knowledge in Islam, ch. 4", "https://www.cambridge.org/core/books/women-and-the-transmission-of-religious-knowledge-in-islam/culmination-in-traditionalism/256C56689600D723FC428DFEA465B618"],
    ["Cambridge University Press: Asma Sayeed, Women and the Transmission of Religious Knowledge in Islam, Introduction", "https://www.cambridge.org/core/books/women-and-the-transmission-of-religious-knowledge-in-islam/introduction/2B348C191D5417BDD4A054BC222DD70E"],
    ["Cambridge University Press (PDF): The Formative Years (al-Maqrizi on Zaynab bint al-Kamal)", "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/F41731C5F78783C1FD2440F0091BC0E9/stamped-9781399502832c1_p11-59_CBO.pdf/the-formative-years.pdf"]
  ],
  "debate:attributes": [
    ["Britannica: kalām", "https://www.britannica.com/topic/kalam-Islam"],
    ["Britannica: taʾwīl", "https://www.britannica.com/topic/tawil"],
    ["Quranic Arabic Corpus: Q. 20:5 with translations", "https://corpus.quran.com/translation.jsp?chapter=20&verse=5", "the wording of Q. 20:5"],
    ["Encyclopedia of Religion: Taftāzānī, al-", "https://encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/taftazani-al", "al-Taftazani on takwin"]
  ],
  "debate:caliphate-modern": [
    ["Britannica: Islamic world: reform and revival in the colonial period", "https://www.britannica.com/topic/Islamic-world/The-rise-of-British-colonialism-to-the-end-of-the-Ottoman-Empire"],
    ["Britannica: Caliphate: the caliphate in the modern era", "https://www.britannica.com/place/Caliphate/The-Abbasid-caliphate"],
    ["Cambridge: On the origins of the Iranian constitution: Muhammad Baqer as-Sadr’s 1979 treatises", "https://www.cambridge.org/core/books/abs/renewal-of-islamic-law/on-the-origins-of-the-iranian-constitution-muhammad-baqer-assadrs-1979-treatises/14AAE2F71556206A90354B9AAC09A5A4"],
    ["Britannica: Muslim Brotherhood", "https://www.britannica.com/topic/Muslim-Brotherhood", "Hasan al-Banna and the Muslim Brotherhood"],
    ["Britannica: Abul Ala Mawdudi", "https://www.britannica.com/biography/Abul-Ala-Mawdudi", "Mawdudi and divine sovereignty"],
    ["Britannica: velāyat-e faqīh", "https://www.britannica.com/topic/velayat-e-faqih", "Khomeini and the guardianship of the jurist"]
  ],
  "debate:created-quran": [
    ["Britannica: miḥnah", "https://www.britannica.com/topic/mihnah"],
    ["TDV İslâm Ansiklopedisi: Halku’l-Kur’ân", "https://islamansiklopedisi.org.tr/halkul-kuran"],
    ["Oxford Academic: Mihna (John Nawas)", "https://academic.oup.com/reference/62361/reference-article-abstract/554577879"]
  ],
  "debate:faith": [
    ["Britannica: Khārijite", "https://www.britannica.com/topic/Kharijite"],
    ["Britannica: Islam: the Muʿtazilah (faith and works)", "https://www.britannica.com/topic/Islam/Theology-and-sectarianism"],
    ["Oxford Academic: The Kharijites and Contemporary Scholarship", "https://academic.oup.com/reference/62361/reference-article-abstract/554573165"]
  ],
  "debate:free-will": [
    ["Britannica: Qadariyyah", "https://www.britannica.com/topic/Qadariyyah"],
    ["Britannica: Muʿtazilah", "https://www.britannica.com/topic/Mutazilah"],
    ["Britannica: Māturīdiyyah", "https://www.britannica.com/topic/Maturidiyah"],
    ["Oxford Academic: Coercion and Moral Agency in Ashʿarism", "https://academic.oup.com/book/10075/chapter-abstract/157534748"],
    ["TDV İslâm Ansiklopedisi: Cebriyye", "https://islamansiklopedisi.org.tr/cebriyye", "the doctrine of compulsion"],
    ["Livnat Holtzman: Debating the Doctrine of jabr (Compulsion) (PDF)", "https://arabic.biu.ac.il/files/arabic/shared/islamic_theology_holtzman.pdf", "Jabriyya as a polemical label"]
  ],
  "debate:good-evil": [
    ["Britannica: Muʿtazilah", "https://www.britannica.com/topic/Mutazilah"],
    ["TDV İslâm Ansiklopedisi: Hüsün ve kubuh", "https://islamansiklopedisi.org.tr/husun-ve-kubuh"],
    ["Kader: Moral obligation and natural law in al-Māturīdī", "https://dergipark.org.tr/en/pub/kaderdergi/article/1468241", "the Maturidi position"]
  ],
  "debate:hadith-criticism": [
    ["Britannica: ʿilm al-ḥadīth", "https://www.britannica.com/topic/ilm-al-hadith"],
    ["Britannica: isnād", "https://www.britannica.com/topic/isnad"],
    ["Britannica: Abū Dāʾūd", "https://www.britannica.com/biography/Abu-Daud", "Abu Dawud’s Sunan"],
    ["TDV İslâm Ansiklopedisi: es-Sünen (Ebû Dâvûd)", "https://islamansiklopedisi.org.tr/es-sunen--ebu-davud"]
  ],
  "debate:heavens": [
    ["Stanford Encyclopedia of Philosophy: Arabic and Islamic natural philosophy and natural science", "https://plato.stanford.edu/entries/arabic-islamic-natural/"]
  ],
  "debate:ijaz": [
    ["Oxford Handbook of Qur’anic Studies: Muhammad Abdel Haleem, Rhetorical Devices and Stylistic Features of Qur’anic Grammar (PDF)", "https://soas-repository.worktribe.com/OutputFile/365441"],
    ["JILSA (PDF): ʿAbd al-Qāhir al-Jurjānī on Qur’anic nazm and his criticism of ṣarfa", "https://jurnalfahum.uinsa.ac.id/index.php/jilsa/article/download/1432/584"],
    ["McGill (MA thesis): Yusuf Rahman, The Miraculous Nature of Muslim Scripture, a Study of ʿAbd al-Jabbār’s Iʿjāz al-Qurʾān", "https://escholarship.mcgill.ca/downloads/6w924d79j"],
    ["DergiPark (PDF): al-Naẓẓām’s ṣarfa and al-Jāḥiẓ on the inimitability of the Qur’an", "https://dergipark.org.tr/en/download/article-file/4746272"]
  ],
  "debate:ijtihad": [
    ["Britannica: ijtihād", "https://www.britannica.com/topic/ijtihad"],
    ["Britannica: taqlīd", "https://www.britannica.com/topic/taqlid"],
    ["Encyclopaedia Iranica: Ejtehād", "https://www.iranicaonline.org/articles/ejtehad/", "ijtihad and the Akhbari–Usuli dispute in Twelver Shi’ism"],
    ["Encyclopaedia Iranica: Aḵbārīya", "https://www.iranicaonline.org/articles/akbariya/", "the Akhbari–Usuli controversy"],
    ["Oxford Academic: Liyakat Takim, Usul al-Fiqh and Ijtihad in Shi’ism (2021)", "https://academic.oup.com/book/41130/chapter/350641282"]
  ],
  "debate:imamate": [
    ["Britannica: imamate", "https://www.britannica.com/topic/imamate"],
    ["Britannica: Khārijite", "https://www.britannica.com/topic/Kharijite"],
    ["Britannica: Caliphate", "https://www.britannica.com/place/Caliphate"],
    ["Encyclopaedia Iranica: Ḡayba", "https://www.iranicaonline.org/articles/gayba/", "the Twelver Occultation"],
    ["Encyclopaedia Iranica: Fatimids", "https://www.iranicaonline.org/articles/fatimids/", "the Fatimid Isma’ili caliphate"],
    ["Cambridge University Press: Patricia Crone, God’s Rule, ch. 9 “The Zaydis” (PDF)", "https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/6B69E868DD32C812D5D39ECF705285A8/9780748646500c9_p99-109_CBO.pdf/the-zaydis.pdf", "Zaydi doctrine of the imamate"],
    ["TDV İslâm Ansiklopedisi: İbâzıyye", "https://islamansiklopedisi.org.tr/ibaziyye", "Ibadi doctrine of the imamate"]
  ],
  "debate:maqasid": [
    ["TDV İslâm Ansiklopedisi: Makāsıdü’ş-şerîa", "https://islamansiklopedisi.org.tr/makasidus-seria"],
    ["Stanford Encyclopedia of Philosophy: al-Ghazali", "https://plato.stanford.edu/entries/al-ghazali/", "al-Ghazali’s five necessities"]
  ],
  "debate:philosophy": [
    ["Stanford Encyclopedia of Philosophy: Arabic and Islamic philosophy of religion", "https://plato.stanford.edu/entries/arabic-islamic-religion/"],
    ["Stanford Encyclopedia of Philosophy: al-Ghazali", "https://plato.stanford.edu/entries/al-ghazali/"],
    ["Stanford Encyclopedia of Philosophy: Ibn Rushd", "https://plato.stanford.edu/entries/ibn-rushd/"],
    ["Stanford Encyclopedia of Philosophy: Ibn Taymiyya", "https://plato.stanford.edu/entries/ibn-taymiyya/", "Ibn Taymiyya on logic, reason and revelation"]
  ],
  "debate:reason-law": [
    ["Britannica: qiyas", "https://www.britannica.com/topic/qiyas"],
    ["Britannica: sharia: development of the schools of law", "https://www.britannica.com/topic/sharia/Development-of-different-schools-of-law"],
    ["TDV İslâm Ansiklopedisi: Ahmed b. Hanbel", "https://islamansiklopedisi.org.tr/ahmed-b-hanbel", "Ibn Hanbal’s use of “weak” for reports later classed as fair (hasan)"]
  ],
  "debate:reform": [
    ["Britannica: Activities of the Jadid reformers", "https://www.britannica.com/topic/Activities-of-the-Jadid-reformers-1707518"],
    ["Britannica: Salafi movement", "https://www.britannica.com/topic/Salafi-movement"],
    ["Encyclopaedia Iranica: Jadidism", "https://www.iranicaonline.org/articles/jadidism/", "Jadid reformers and Qadimist opposition"],
    ["Britannica: Muḥammad ʿAbduh", "https://www.britannica.com/biography/Muhammad-Abduh", "conservative opposition at al-Azhar"],
    ["Britannica: Sir Sayyid Ahmad Khan", "https://www.britannica.com/biography/Sayyid-Ahmad-Khan", "conservative opposition in India"],
    ["Britannica: Deoband school", "https://www.britannica.com/topic/Deoband-school", "Deoband and traditional madrasa learning"],
    ["Brill EI3O: Barelwīs (Usha Sanyal)", "https://referenceworks.brill.com/display/entries/EI3O/COM-23995.xml", "Barelwi traditionalist education"]
  ],
  "debate:renewal": [
    ["Britannica: Islamic world: reform from 1683", "https://www.britannica.com/topic/Islamic-world/Islamic-history-from-1683-to-the-present-reform-dependency-and-recovery"],
    ["Britannica: Wahhābī", "https://www.britannica.com/topic/Wahhabi"],
    ["Oxford Academic: Asmaʾu, Nana", "https://academic.oup.com/edited-volume/61663/chapter-abstract/553437989"],
    ["Britannica: ʿAbd al-Ghanī al-Nābulusī", "https://www.britannica.com/biography/Abd-al-Ghani-al-Nabulusi", "al-Nabulusi’s defence of Sufi and Ottoman practice"],
    ["Brill EI3O: Barelwīs (Usha Sanyal)", "https://referenceworks.brill.com/display/entries/EI3O/COM-23995.xml", "Barelwi defence of inherited devotional practice"]
  ],
  "debate:sama": [
    ["Britannica: samāʿ", "https://www.britannica.com/topic/sama-Sufi-religious-practice"],
    ["Institute of Ismaili Studies: Leonard Lewisohn, The Sacred Music of Islam, Samaʿ in the Persian Sufi Tradition (PDF)", "https://iis.ac.uk/wp-content/uploads/2024/10/the-sacred-music-of-islam_pdf-366408512.pdf"],
    ["Shahzad Bashir: Movement and Stillness, the Practice of Sufi Dhikr in Fourteenth-Century Central Asia (PDF)", "https://www.themathesontrust.org/papers/islam/Bashir-Movement_and_Stillness_Sufi_Dhikr.pdf"],
    ["Religions (2023): pre-modern Muslim treatments of listening to music (samāʿ)", "https://www2.mdpi.com/2077-1444/14/6/780"],
    ["TDV İslâm Ansiklopedisi: Devran", "https://islamansiklopedisi.org.tr/devran", "Ottoman disputes over whirling dhikr"]
  ],
  "debate:sufism-law": [
    ["Britannica: Sufism: history", "https://www.britannica.com/topic/Sufism/History"],
    ["Encyclopaedia Iranica: Ḥallāj, Abu’l-Moḡiṯ Ḥosayn", "https://www.iranicaonline.org/articles/hallaj/"]
  ],
  "debate:tafsir": [
    ["Britannica: tafsīr", "https://www.britannica.com/topic/tafsir"],
    ["Britannica: Qurʾān: interpretation", "https://www.britannica.com/topic/Quran/Interpretation"],
    ["TDV İslâm Ansiklopedisi: İşârî Tefsir", "https://islamansiklopedisi.org.tr/isari-tefsir", "Sufi (ishari) exegesis"],
    ["Oxford University Press: Martin Nguyen, Sufi Master and Qur’an Scholar (Abū’l-Qāsim al-Qushayrī and the Laṭāʾif al-ishārāt)", "https://global.oup.com/academic/product/sufi-master-and-quran-scholar-9780197265130", "al-Qushayri’s Sufi commentary"]
  ],
  "debate:unity-being": [
    ["TDV İslâm Ansiklopedisi: Vahdet-i vücûd", "https://islamansiklopedisi.org.tr/vahdet-i-vucud"],
    ["Stanford Encyclopedia of Philosophy: Ibn Arabi", "https://plato.stanford.edu/entries/ibn-arabi/", "the later label"]
  ],
  "event:abbasid-rev": [
    ["Britannica: ʿAbbasid caliphate", "https://www.britannica.com/topic/Abbasid-caliphate"],
    ["Britannica: Iraq: the Abbasid caliphate", "https://www.britannica.com/place/Iraq/The-Abbasid-Caliphate"]
  ],
  "event:azhar": [
    ["Egyptian Ministry of Tourism and Antiquities: Historical Cairo", "https://egymonuments.gov.eg/collections/historical-cairo/"],
    ["Britannica: al-Azhar Mosque", "https://www.britannica.com/place/al-Azhar-Mosque"]
  ],
  "event:baghdad-falls": [
    ["Britannica: al-Mustaʿṣim", "https://www.britannica.com/biography/al-Mustasim"],
    ["Britannica: Mongol empire: the period of relative unity", "https://www.britannica.com/place/Mongol-empire/The-period-of-relative-unity-1227-60"]
  ],
  "event:baghdad-founded": [
    ["Britannica: al-Manṣūr", "https://www.britannica.com/biography/al-Mansur-Abbasid-caliph"],
    ["Britannica: Iraq: the Abbasid caliphate", "https://www.britannica.com/place/Iraq/The-Abbasid-Caliphate"]
  ],
  "event:buyids": [
    ["Britannica: Buyid dynasty", "https://www.britannica.com/topic/Buyid-dynasty"],
    ["Encyclopaedia Iranica: Buyids", "https://www.iranicaonline.org/articles/buyids/", "entry into Baghdad on 11 Jumada I 334 AH (19 December 945 CE)"]
  ],
  "event:caliphate-abolished": [
    ["Britannica: Abdülmecid II", "https://www.britannica.com/biography/Abdulmecid-II"],
    ["Britannica: Caliphate: the caliphate in the modern era", "https://www.britannica.com/place/Caliphate/The-Abbasid-caliphate"]
  ],
  "event:codex": [
    ["Nicolai Sinai, Bulletin of SOAS: When did the consonantal skeleton of the Quran reach closure? Part II", "https://www.cambridge.org/core/journals/bulletin-of-the-school-of-oriental-and-african-studies/article/abs/when-did-the-consonantal-skeleton-of-the-quran-reach-closure-part-ii1/022A637F114CD329041BA679B28CABDE"]
  ],
  "event:constantinople": [
    ["Britannica: Fall of Constantinople", "https://www.britannica.com/event/Fall-of-Constantinople-1453"],
    ["V&A: Constantinople to Istanbul, One City, Two Empires (large print guide)", "https://www.vam.ac.uk/info/constantinople-to-istanbul-one-city-two-empires-large-print-guide"]
  ],
  "event:death-prophet": [
    ["Britannica: Muhammad: biography according to the Islamic tradition", "https://www.britannica.com/biography/Muhammad/Biography-according-to-the-Islamic-tradition"],
    ["TDV İslâm Ansiklopedisi: Muhammed", "https://islamansiklopedisi.org.tr/muhammed"]
  ],
  "event:egypt-invasion": [
    ["Britannica: Egypt: the French occupation (1798–1805)", "https://www.britannica.com/place/Egypt/From-the-French-to-the-British-occupation-1798-1882"],
    ["Britannica: Battle of the Pyramids", "https://www.britannica.com/event/Battle-of-the-Pyramids-Egyptian-history"]
  ],
  "event:expansion": [
    ["Britannica: Ṭāriq ibn Ziyād", "https://www.britannica.com/biography/Tariq-ibn-Ziyad"],
    ["Britannica: Pakistan: the arrival of Islam (Sindh, 711)", "https://www.britannica.com/place/Pakistan/History"]
  ],
  "event:fitna": [
    ["Britannica: Khārijite", "https://www.britannica.com/topic/Kharijite"],
    ["Britannica: ʿAlī", "https://www.britannica.com/biography/Ali-Muslim-caliph"],
    ["Britannica: Battle of the Camel", "https://www.britannica.com/topic/Battle-of-the-Camel", "Battle of the Camel"],
    ["Stefan Heidemann, Raqqa II (2003): Die Geschichte von ar-Raqqa/ar-Rafiqa (PDF)", "https://www.aai.uni-hamburg.de/voror/personen/heidemann/medien/heidemann-raqqa-ii-2003-geschichte-von-al-raqqa.pdf", "the site of Siffin"]
  ],
  "event:granada": [
    ["Britannica: Crusades: the later Crusades (surrender of Granada, 1492)", "https://www.britannica.com/event/Crusades/The-later-Crusades"]
  ],
  "event:gurganj": [
    ["UNESCO World Heritage nomination: Kunya-Urgench", "https://whc.unesco.org/uploads/nominations/1199.pdf"],
    ["Encyclopaedia Iranica: Khwarazmshahs iii", "https://www.iranicaonline.org/articles/khwarazmshah/iii-the-line-of-anustigin/"],
    ["Britannica: Mongol empire", "https://www.britannica.com/place/Mongol-empire"]
  ],
  "event:hijra": [
    ["Britannica: Islamic world (the Hijrah and the Islamic era)", "https://www.britannica.com/topic/Islamic-world"],
    ["TDV İslâm Ansiklopedisi: Muhammed", "https://islamansiklopedisi.org.tr/muhammed"]
  ],
  "event:karbala": [
    ["Britannica: Battle of Karbala", "https://www.britannica.com/event/Battle-of-Karbala"]
  ],
  "event:maragha": [
    ["Britannica: Islamic world: the Mongols", "https://www.britannica.com/topic/Islamic-world/Mongols"],
    ["TDV İslâm Ansiklopedisi: Tûsî, Nasîrüddin", "https://islamansiklopedisi.org.tr/tusi-nasiruddin"]
  ],
  "event:mihna": [
    ["Britannica: miḥnah", "https://www.britannica.com/topic/mihnah"]
  ],
  "event:mongols-transoxiana": [
    ["Britannica: Bukhara", "https://www.britannica.com/place/Bukhara"],
    ["Britannica: Mongol empire", "https://www.britannica.com/place/Mongol-empire"],
    ["Encyclopaedia Iranica: Bukhara iii. After the Mongol Invasion", "https://www.iranicaonline.org/articles/bukhara-iii/", "Bukhara taken 4 Dhu al-Hijja 616 AH (10 February 1220 CE)"],
    ["Oxford Research Encyclopedia of Asian History: Bukhara under the Mongols", "https://doi.org/10.1093/acrefore/9780190277727.013.8", "move on Bukhara in Muharram 617 AH (March 1220 CE)"]
  ],
  "event:mughals": [
    ["Britannica: Battles of Panipat", "https://www.britannica.com/event/Battles-of-Panipat"]
  ],
  "event:nizamiyya": [
    ["Britannica: Niẓāmiyyah", "https://www.britannica.com/place/Nizamiyyah"],
    ["Britannica: Niẓām al-Mulk (summary)", "https://www.britannica.com/summary/Nizam-al-Mulk-Seljuq-vizier"],
    ["Bulletin of SOAS: Muslim institutions of learning in eleventh-century Baghdad", "https://www.cambridge.org/core/journals/bulletin-of-the-school-of-oriental-and-african-studies/article/abs/muslim-institutions-of-learning-in-eleventhcentury-baghdad/829B6875FD50B18C745D989D976E7365"]
  ],
  "event:printing": [
    ["University of Reading: thesis on the Ottoman-Muslim printing venture (PDF)", "https://centaur.reading.ac.uk/80437/1/16021166_Conidi_redacted.pdf"],
    ["ISAM: “Müteferrika and the age of the printed manuscript” (PDF)", "https://isamveri.org/pdfdkm/09/DKM091120.pdf"]
  ],
  "event:revelation": [
    ["Britannica: Muhammad", "https://www.britannica.com/biography/Muhammad"],
    ["TDV İslâm Ansiklopedisi: Muhammed", "https://islamansiklopedisi.org.tr/muhammed"]
  ],
  "event:safavids": [
    ["Britannica: Safavid dynasty", "https://www.britannica.com/topic/Safavid-dynasty"],
    ["Britannica: Ismāʿīl I", "https://www.britannica.com/biography/Ismail-I-shah-of-Iran"],
    ["Encyclopaedia Iranica: Esmāʿīl I Ṣafawī i. Biography", "https://www.iranicaonline.org/articles/esmail-i-safawi/esmail-i-safawi-i-biography/", "accession in 907 AH (1501 CE)"]
  ],
  "event:seljuqs": [
    ["Britannica: Iraq from 1055 to 1534", "https://www.britannica.com/place/Iraq/Iraq-from-1055-to-1534"],
    ["Britannica: Seljuq", "https://www.britannica.com/topic/Seljuq"]
  ],
  "event:tashkent": [
    ["Alexander Morrison, The Russian Conquest of Central Asia (Cambridge)", "https://www.cambridge.org/core/books/abs/russian-conquest-of-central-asia/russian-conquest-of-central-asia/3F8BA205A8FAF0FA17DB487D02243244"]
  ],
  "event:timur": [
    ["Britannica: Samarkand (summary)", "https://www.britannica.com/summary/Samarkand-Uzbekistan"]
  ],
  "event:translation": [
    ["Britannica: al-Maʾmūn", "https://www.britannica.com/biography/al-Mamun"],
    ["Stanford Encyclopedia of Philosophy: Arabic and Islamic natural philosophy", "https://plato.stanford.edu/entries/arabic-islamic-natural/"],
    ["Stemma: The Graeco-Arabic translation movement in Baghdad", "https://stemmascience.org/en/node/house_of_wisdom/"]
  ],
  "event:uprising-1857": [
    ["Britannica: Indian Rebellion of 1857", "https://www.britannica.com/event/Indian-Rebellion-of-1857"],
    ["Britannica: Indian Independence Movement (the end of the Mughal dynasty)", "https://www.britannica.com/topic/Indian-Independence-Movement"]
  ],
  "note:attributes:abd-al-jabbar": [
    ["CORE (PDF): J. R. T. M. Peters, God’s Created Speech", "https://core.ac.uk/download/43595204.pdf"]
  ],
  "note:attributes:ibn-taymiyya": [
    ["Brill (2020): Jon Hoover, Early Mamlūk Ashʿarism against Ibn Taymiyya on the Nonliteral Reinterpretation of God’s Attributes", "https://brill.com/display/book/edcoll/9789004426610/BP000014.xml"],
    ["Brill (2022): Carl Sharif El-Tobgui, Ibn Taymiyya on Reason and Revelation, ch. 4", "https://brill.com/display/book/9789004412866/BP000006.xml"]
  ],
  "note:attributes:maturidi": [
    ["TDV İslâm Ansiklopedisi: Kitâbü’t-Tevhîd (Mâtürîdî)", "https://islamansiklopedisi.org.tr/kitabut-tevhid--maturidi"],
    ["TDV İslâm Ansiklopedisi: Tekvin", "https://islamansiklopedisi.org.tr/tekvin", "takwin as an eternal attribute"],
    ["TDV İslâm Ansiklopedisi: İstivâ", "https://islamansiklopedisi.org.tr/istiva", "reading “rising over the Throne” without place or direction"],
    ["Encyclopedia of Religion: Māturīdī, al-", "https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/maturidi-al"]
  ],
  "note:attributes:taftazani": [
    ["Encyclopedia of Religion: Taftāzānī, al-", "https://encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/taftazani-al"]
  ],
  "note:created-quran:abd-al-jabbar": [
    ["CORE (PDF): J. R. T. M. Peters, God’s Created Speech", "https://core.ac.uk/download/43595204.pdf"],
    ["Ulumuna: Ibnu Rusydi, al-Qāḍī ʿAbd al-Jabbār’s View on Khalq al-Qurʾān (2015)", "https://doi.org/10.20414/ujis.v19i2.347"]
  ],
  "note:created-quran:bukhari": [
    ["TDV İslâm Ansiklopedisi: Halku Efʿâli’l-İbâd", "https://islamansiklopedisi.org.tr/halku-efalil-ibad"],
    ["TDV İslâm Ansiklopedisi: Buhârî, Muhammed b. İsmâil", "https://islamansiklopedisi.org.tr/buhari-muhammed-b-ismail", "the Nishapur dispute over recitation"]
  ],
  "note:created-quran:jahiz": [
    ["Al-Qanṭara 22 (CSIC, 2001): Nimrod Hurvitz, Who is the Accused? The Interrogation of Aḥmad Ibn Ḥanbal", "https://doi.org/10.3989/alqantara.2001.v22.i2.217", "al-Jahiz’s account of Ibn Hanbal’s interrogation and flogging in Khalq al-Qur’an"],
    ["Encyclopaedia Iranica: Jāḥeẓ", "https://www.iranicaonline.org/articles/jahez/", "Ibn Abi Du’ad’s patronage and anti-anthropomorphist writings"]
  ],
  "note:created-quran:maturidi": [
    ["DergiPark (PDF): Harun Kılıçaslan, The Transmission of the Divine Speech to the Prophet according to the Māturīdīs (2025)", "https://dergipark.org.tr/tr/download/article-file/5223695"],
    ["TDV İslâm Ansiklopedisi: Akāidü’n-Nesefî", "https://islamansiklopedisi.org.tr/akaidun-nesefi"],
    ["TDV İslâm Ansiklopedisi: Halku’l-Kur’ân", "https://islamansiklopedisi.org.tr/halkul-kuran"]
  ],
  "note:created-quran:tahawi": [
    ["TDV İslâm Ansiklopedisi: el-Akîdetü’t-Tahâviyye", "https://islamansiklopedisi.org.tr/el-akidetut-tahaviyye"],
    ["TDV İslâm Ansiklopedisi: Halku’l-Kur’ân", "https://islamansiklopedisi.org.tr/halkul-kuran"],
    ["Internet Archive: al-Tahawi, al-Aqida al-Tahawiyya (Arabic text and English translation)", "https://archive.org/details/al-aqida-al-tahawiyya-by-imam-abu-jafar-ahmed-ibn-muhammad-ibn-salama-al-azdi-al"]
  ],
  "note:faith:abd-al-jabbar": [
    ["DergiPark (PDF): Selim Gülverdi, Kādî Abdülcebbâr ve Ebü’l-Muîn en-Nesefî’nin büyük günah hakkındaki görüşleri (2021)", "https://dergipark.org.tr/en/download/article-file/1527456"]
  ],
  "note:faith:ashari": [
    ["Internet Archive: Duncan B. Macdonald, Development of Muslim Theology, Jurisprudence and Constitutional Theory (1903)", "https://archive.org/details/developmentofmux00macduoft", "al-Ash’ari’s short creed: faith as word and deed, increasing and decreasing"],
    ["DOAJ: Baghbanzade, Abu-l-Hassan al-Ashʿarī on Faith", "https://doaj.org/article/263a1a8049644584a2dd21b27d5e2ee2", "faith as the heart’s assent (tasdiq) and its relation to deeds"],
    ["Encyclopaedia Iranica: Ašʿarī, Abu’l-Ḥasan", "https://www.iranicaonline.org/articles/asari-abul-hasan-ali-b/"]
  ],
  "note:faith:ibn-hanbal": [
    ["Oxford University Research Archive: Christopher Melchert, Early Ḥanbalī Creeds (translation, PDF)", "https://ora.ox.ac.uk/objects/uuid:3f641916-8c75-4114-8e90-db25de3fa7be/files/m0192642159d0745d1d6a247c249d9a88"]
  ],
  "note:faith:jabir-ibn-zayd": [
    ["TDV İslâm Ansiklopedisi: İbâzıyye", "https://islamansiklopedisi.org.tr/ibaziyye"],
    ["TDV İslâm Ansiklopedisi: Câbir b. Zeyd", "https://islamansiklopedisi.org.tr/cabir-b-zeyd"]
  ],
  "note:faith:maturidi": [
    ["Encyclopedia of Religion: Māturīdī, al-", "https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/maturidi-al"],
    ["TDV İslâm Ansiklopedisi: Mâtürîdî", "https://islamansiklopedisi.org.tr/maturidi"],
    ["Brill: Ulrich Rudolph, Al-Māturīdī and the Development of Sunnī Theology in Samarqand (trans. Rodrigo Adem, 2015)", "https://brill.com/display/title/17168"]
  ],
  "note:free-will:abu-hafs-nasafi": [
    ["Internet Archive: E. E. Elder, A Commentary on the Creed of Islam (Columbia University Press, 1950)", "https://archive.org/details/commentaryonthec030491mbp"],
    ["TDV İslâm Ansiklopedisi: Akāidü’n-Nesefî", "https://islamansiklopedisi.org.tr/akaidun-nesefi"]
  ],
  "note:free-will:ghazali": [
    ["Stanford Encyclopedia of Philosophy: al-Ghazali", "https://plato.stanford.edu/entries/al-ghazali/"],
    ["Ganjoor: al-Ghazālī, Kīmiyā-yi saʿādat, on man being compelled in his very choice (Persian text)", "https://ganjoor.net/ghazzali/kimia/arkan/a4/sh80"]
  ],
  "note:free-will:juwayni": [
    ["Oxford Academic: Coercion and Moral Agency in Ashʿarism", "https://academic.oup.com/book/10075/chapter-abstract/157534748"]
  ],
  "note:free-will:qasim-rassi": [
    ["TDV İslâm Ansiklopedisi: Ressî", "https://islamansiklopedisi.org.tr/ressi"],
    ["TDV İslâm Ansiklopedisi: Zeydiyye", "https://islamansiklopedisi.org.tr/zeydiyye"]
  ],
  "note:hadith-criticism:ibn-al-salah": [
    ["Oxford Bibliographies in Islamic Studies: Hadith", "https://www.oxfordbibliographies.com/abstract/document/obo-9780195390155/obo-9780195390155-0030.xml"],
    ["TDV İslâm Ansiklopedisi: Mukaddimetü İbni’s-Salâh", "https://islamansiklopedisi.org.tr/mukaddimetu-ibnis-salah"]
  ],
  "note:hadith-criticism:shaykh-tusi": [
    ["Magiran: How Shaykh Ṭūsī Encountered the Discourse of Mufīd and Murtaḍā on the Validity of an Isolated Tradition", "https://www.magiran.com/paper/1805418/?lang=en"],
    ["American Journal of Islam and Society (PDF): Liyakat Takim on the evaluation of hadith transmitters in Shiʿi biographical works", "https://ajis.org/index.php/ajiss/article/download/428/2159/4888"]
  ],
  "note:heavens:ibn-al-shatir": [
    ["Biographical Encyclopedia of Astronomers (McGill): David A. King on Ibn al-Shāṭir", "https://islamsci.mcgill.ca/RASI/BEA/Ibn_al-Shatir_BEA.htm"],
    ["Stanford Encyclopedia of Philosophy: Nicolaus Copernicus", "https://plato.stanford.edu/entries/copernicus/"]
  ],
  "note:heavens:omar-khayyam": [
    ["Encyclopaedia Iranica: Khayyam, Omar xv. As Astronomer", "https://www.iranicaonline.org/articles/khayyam-omar/khayyam-omar-xv-as-astronomer/"],
    ["Biographical Encyclopedia of Astronomers: Khayyām (PDF)", "https://islamsci.mcgill.ca/RASI/BEA/Khayyam_BEA.pdf"]
  ],
  "note:ijaz:bint-al-shati": [
    ["Journal of Qur’anic Studies (Edinburgh University Press, 2015): Shuruq Naguib on Bint al-Shati’s exegesis", "https://www.euppublishing.com/doi/10.3366/jqs.2015.0179"],
    ["Brill (2025): Reading ʿĀʾiša ʿAbd ar-Raḥmān", "https://brill.com/view/book/9789004715431/BP000030.xml"]
  ],
  "note:ijaz:fakhr-razi": [
    ["Journal of Critical Studies on the Quranic Exegesis (2024): Fakhr al-Dīn al-Rāzī and the Concept of Ṣarfa (PDF)", "https://www.ensani.ir/fa/article/download/592643"]
  ],
  "note:ijtihad:ahmad-baba": [
    ["Oxford Reference: Aḥmad Bābā al-Tinbuktī", "https://www.oxfordreference.com/view/10.1093/acref/9780190077631.001.0001/acref-9780190077631-e-957"],
    ["Journal of North African Studies (Taylor & Francis, 2014): Timothy Cleaveland on Ahmad Baba’s 1615 fatwa", "https://www.tandfonline.com/doi/abs/10.1080/13629387.2014.983825"]
  ],
  "note:ijtihad:astarabadi": [
    ["Encyclopaedia Iranica: Astarābādī, Moḥammad Amīn", "https://www.iranicaonline.org/articles/astarabadi-molla-mohammad-amin-b/"],
    ["Encyclopaedia Iranica: Aḵbārīya", "https://www.iranicaonline.org/articles/akbariya/"]
  ],
  "note:ijtihad:bihbahani": [
    ["Encyclopaedia Iranica: Behbahānī, Moḥammad-Bāqer", "https://www.iranicaonline.org/articles/behbahani-aqa-sayyed-mohmmad-baqer/"],
    ["Encyclopaedia Iranica: Ejtehād", "https://www.iranicaonline.org/articles/ejtehad/", "Risalat al-ijtihad wa’l-akhbar"],
    ["Brill: Robert Gleave, Inevitable Doubt: Two Theories of Shīʿī Jurisprudence (PDF)", "https://brill.com/display/book/9789004491960/back-1.pdf", "probabilistic reasoning and the mujtahid’s authority"]
  ],
  "note:ijtihad:ibn-qayyim": [
    ["Oxford University Press: Abdul-Rahman Mustafa, On Taqlid: Ibn al Qayyim’s Critique of Authority in Islamic Law", "https://global.oup.com/academic/product/on-taqlid-9780199937516"],
    ["TDV İslâm Ansiklopedisi: İ’lâmü’l-muvakkiîn", "https://islamansiklopedisi.org.tr/ilamul-muvakkiin"]
  ],
  "note:ijtihad:ibn-rushd": [
    ["TDV İslâm Ansiklopedisi: Bidâyetü’l-müctehid", "https://islamansiklopedisi.org.tr/bidayetul-muctehid"],
    ["Library of Congress: Bidāyat al-mujtahid", "https://www.loc.gov/item/74227920/"]
  ],
  "note:ijtihad:marjani": [
    ["UvA-DARE: Michael Kemper, Imperial Russia as Dar al-Islam? (PDF)", "https://dare.uva.nl/document/2/167407"],
    ["Islamology: Dinara Mardanova, Debates around Ibādah between Shihab ad-Din Marjani and his Opponents", "https://islamology.in/journal/article/view/153"]
  ],
  "note:ijtihad:qadi-numan": [
    ["Encyclopaedia Iranica: Ejtehād", "https://www.iranicaonline.org/articles/ejtehad/"],
    ["Institute of Ismaili Studies: al-Nuʿman, al-Qadi (d. 363 AH / 974 CE)", "https://www.iis.ac.uk/scholarly-contributions/al-numan-al-qadi-d-363-ah-974-ce/"],
    ["TDV İslâm Ansiklopedisi: Nu‘mân b. Muhammed", "https://islamansiklopedisi.org.tr/numan-b-muhammed"]
  ],
  "note:ijtihad:rida": [
    ["NYU Arabic Collections Online: Rashid Rida, Muḥāwarāt al-muṣliḥ wa’l-muqallid (Cairo, 1906–07)", "https://sites.dlib.nyu.edu/viewer/node/24960"]
  ],
  "note:ijtihad:thanawi": [
    ["Brill EWIO: Marriage Practices: India: 19th and early 20th century (Asiya Alam)", "https://referenceworks.brill.com/display/entries/EWIO/COM-002098.xml", "Thanawi’s defence of taqlid and Maliki legal borrowing"],
    ["Brill EI3O: Madrasa in South Asia (Francis Robinson)", "https://referenceworks.brill.com/display/entries/EI3O/COM-35956.xml"]
  ],
  "note:imamate:jabir-ibn-zayd": [
    ["TDV İslâm Ansiklopedisi: Câbir b. Zeyd", "https://islamansiklopedisi.org.tr/cabir-b-zeyd"],
    ["TDV İslâm Ansiklopedisi: İbâzıyye", "https://islamansiklopedisi.org.tr/ibaziyye"]
  ],
  "note:imamate:nasir-khusraw": [
    ["Institute of Ismaili Studies: Farhad Daftary, The Mediaeval Ismailis of the Iranian Lands", "https://www.iis.ac.uk/scholarly-contributions/the-mediaeval-ismailis-of-the-iranian-lands/"],
    ["Internet Encyclopedia of Philosophy: Nasir Khusraw", "https://iep.utm.edu/khusraw/"]
  ],
  "note:imamate:qadi-numan": [
    ["Institute of Ismaili Studies: al-Nuʿman, al-Qadi (d. 363 AH / 974 CE)", "https://www.iis.ac.uk/scholarly-contributions/al-numan-al-qadi-d-363-ah-974-ce/"],
    ["TDV İslâm Ansiklopedisi: Nu‘mân b. Muhammed", "https://islamansiklopedisi.org.tr/numan-b-muhammed"]
  ],
  "note:imamate:shammakhi": [
    ["Cambridge University Press: Paul M. Love Jr., Ibadi Muslims of North Africa (2018), ch. 7", "https://www.cambridge.org/core/books/ibadi-muslims-of-north-africa/end-of-a-tradition/656A6A9B8E73B8B2D779AB9FE9A15D67"],
    ["TDV İslâm Ansiklopedisi: Kitâbü’s-Siyer", "https://islamansiklopedisi.org.tr/kitabus-siyer"]
  ],
  "note:philosophy:ibn-taymiyya": [
    ["Stanford Encyclopedia of Philosophy: Ibn Taymiyya", "https://plato.stanford.edu/entries/ibn-taymiyya/"],
    ["TDV İslâm Ansiklopedisi: İbn Teymiyye, Takıyyüddin", "https://islamansiklopedisi.org.tr/ibn-teymiyye-takiyyuddin"]
  ],
  "note:philosophy:kindi": [
    ["Stanford Encyclopedia of Philosophy: al-Kindi", "https://plato.stanford.edu/entries/al-kindi/"],
    ["Stanford Encyclopedia of Philosophy: Arabic and Islamic Metaphysics", "https://plato.stanford.edu/entries/arabic-islamic-metaphysics/", "creation ex nihilo"]
  ],
  "note:philosophy:mir-damad": [
    ["Encyclopaedia Iranica: Dāmād, Mīr(-e), Sayyed Moḥammad Bāqer", "https://www.iranicaonline.org/articles/damad-mir-e-sayyed-mohammad-baqer-b/"],
    ["Encyclopaedia Iranica: Isfahan School of Philosophy", "https://www.iranicaonline.org/articles/isfahan-school-of-philosophy/"]
  ],
  "note:philosophy:nasir-khusraw": [
    ["Internet Encyclopedia of Philosophy: Nasir Khusraw", "https://iep.utm.edu/khusraw/"],
    ["Institute of Ismaili Studies (PDF): Kutub Kassam, Nasir Khusraw: A Living Tradition", "https://www.iis.ac.uk/wp-content/uploads/2024/10/nasir-khusraw-a-living-tradition-kutub-kassam-28-10-10-1078353117.pdf"]
  ],
  "note:philosophy:nasir-tusi": [
    ["Routledge Encyclopedia of Philosophy: al-Razi, Fakhr al-Din (Theology and Philosophy)", "https://www.rep.routledge.com/articles/biographical/al-razi-fakhr-al-din-1149-1209/v-1/sections/theology-and-philosophy"],
    ["TDV İslâm Ansiklopedisi: Tûsî, Nasîrüddin", "https://islamansiklopedisi.org.tr/tusi-nasiruddin"]
  ],
  "note:reason-law:jabir-ibn-zayd": [
    ["Cambridge University Press: Omer Awass, Fatwa and the Making and Renewal of Islamic Law (2023), ch. 2", "https://www.cambridge.org/core/books/fatwa-and-the-making-and-renewal-of-islamic-law/fatwa-in-the-classical-age/7DE13632B92F01C307F98C8CE400C792"],
    ["TDV İslâm Ansiklopedisi: Câbir b. Zeyd", "https://islamansiklopedisi.org.tr/cabir-b-zeyd"]
  ],
  "note:reform:barelwi": [
    ["Brill EI3O: Barelwīs (Usha Sanyal)", "https://referenceworks.brill.com/display/entries/EI3O/COM-23995.xml"],
    ["Brill EI3O: Madrasa in South Asia (Francis Robinson)", "https://referenceworks.brill.com/display/entries/EI3O/COM-35956.xml"]
  ],
  "note:reform:thanawi": [
    ["Brill EI3O: Madrasa in South Asia (Francis Robinson)", "https://referenceworks.brill.com/display/entries/EI3O/COM-35956.xml"],
    ["Max Planck / Journal of Religious History (2021, PDF): Margrit Pernau & Max Stille on Bihishti zewar", "https://pure.mpg.de/rest/items/item_3231501_8/component/file_3293688/content"]
  ],
  "note:renewal:barelwi": [
    ["Brill EI3O: Barelwīs (Usha Sanyal)", "https://referenceworks.brill.com/display/entries/EI3O/COM-23995.xml"],
    ["TDV İslâm Ansiklopedisi: Rızâ Han Birelvî", "https://islamansiklopedisi.org.tr/riza-han-birelvi"]
  ],
  "note:renewal:nabulusi": [
    ["Britannica: ʿAbd al-Ghanī al-Nābulusī", "https://www.britannica.com/biography/Abd-al-Ghani-al-Nabulusi"],
    ["Brill: Samer Akkach, Letters of a Sufi Scholar", "https://brill.com/display/title/14508"]
  ],
  "note:renewal:zabidi": [
    ["Brill (PDF): Stefan Reichmuth on Murtaḍā al-Zabīdī", "https://brill.com/display/book/edcoll/9789047413349/B9789047413349_s011.pdf"],
    ["TDV İslâm Ansiklopedisi: Zebîdî, Muhammed Murtazâ", "https://islamansiklopedisi.org.tr/zebidi-muhammed-murtaza"]
  ],
  "note:sama:ebussuud": [
    ["TDV İslâm Ansiklopedisi: Devran", "https://islamansiklopedisi.org.tr/devran"],
    ["TDV İslâm Ansiklopedisi: Ebüssuûd Efendi", "https://islamansiklopedisi.org.tr/ebussuud-efendi"]
  ],
  "note:sama:ibn-al-jawzi": [
    ["Journal of Oriental Studies (2026): Ibn al-Jawzī’s Critique of Sufi Dhikr, Samāʿ and Ritual Chanting in Talbīs Iblīs (PDF)", "https://journals.ysu.am/j-orient-stud/article/download/vol29_no1_2026_44/pdf/37134"],
    ["Britannica: Ibn al-Jawzī", "https://www.britannica.com/biography/Ibn-al-Jawzi"]
  ],
  "note:sama:katib-celebi": [
    ["TDV İslâm Ansiklopedisi: Mîzânü’l-hak", "https://islamansiklopedisi.org.tr/mizanul-hak"],
    ["Bozok Üniversitesi İlahiyat Fakültesi Dergisi (2019): Tacetdin Bıyık on Katib Çelebi’s views on music in Mizan al-haqq", "https://dergipark.org.tr/tr/pub/bozifder/article/632827"],
    ["Internet Archive: Katib Çelebi, The Balance of Truth (trans. G. L. Lewis, 1957)", "https://archive.org/details/balanceoftruth0000ktip"]
  ],
  "note:sama:kubra": [
    ["Iran (Taylor & Francis, 2019): Eyad Abuali, Words Clothed in Light: Dhikr, Colour and Synaesthesia in Early Kubrawi Sufism", "https://www.tandfonline.com/doi/full/10.1080/05786967.2019.1583046"],
    ["Journal of the Institute for Sufi Studies (DergiPark, 2024): Sepideh Afrashteh, Dhikr in Islamic Sufism: the Order of Kubrawiyya", "https://dergipark.org.tr/en/pub/taed/article/1455266"],
    ["Encyclopaedia Iranica: Kobrawiya i. The Eponym", "https://www.iranicaonline.org/articles/kobrawiya-i-the-eponym/"]
  ],
  "note:sama:nabulusi": [
    ["Britannica: ʿAbd al-Ghanī al-Nābulusī", "https://www.britannica.com/biography/Abd-al-Ghani-al-Nabulusi"],
    ["TDV İslâm Ansiklopedisi: Nablusî, Abdülganî b. İsmâil", "https://islamansiklopedisi.org.tr/nablusi-abdulgani-b-ismail"]
  ],
  "note:sama:qushayri": [
    ["Arabic Wikisource: Ibn Taymiyya, al-Istiqama, quoting al-Qushayri’s chapter on samaʿ", "https://ar.wikisource.org/wiki/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%A7%D9%85%D8%A9/6"],
    ["Ganjoor: Persian translation of al-Qushayri’s Risala, chapter 52, on samaʿ", "https://ganjoor.net/osmani/qushayriyya/bab452/sh49"]
  ],
  "note:sufism-law:aisha-bauniyya": [
    ["NYU Press: The Principles of Sufism (trans. Th. Emil Homerin)", "https://nyupress.org/9781479864683/the-principles-of-sufism/"],
    ["Mamluk Studies Review 7.1 (2003): Th. Emil Homerin, Living Love: The Mystical Writings of ʿĀʾishah al-Bāʿūnīyah", "https://knowledge.uchicago.edu/records/ec50p-6bg66"]
  ],
  "note:sufism-law:ibn-al-jawzi": [
    ["Journal of Oriental Studies (2026): Ibn al-Jawzī’s Critique of Sufi Dhikr, Samāʿ and Ritual Chanting in Talbīs Iblīs (PDF)", "https://journals.ysu.am/j-orient-stud/article/download/vol29_no1_2026_44/pdf/37134"],
    ["TDV İslâm Ansiklopedisi: İbnü’l-Cevzî, Ebü’l-Ferec", "https://islamansiklopedisi.org.tr/ibnul-cevzi-ebul-ferec"]
  ],
  "note:sufism-law:ibn-taymiyya": [
    ["Islamic Law and Society 31 (Brill, 2024): Ibn Taymiyya and his Circle on samāʿ: a means to Purify Sufism?", "https://brill.com/view/journals/ils/31/1-2/article-p30_002.xml"],
    ["TDV İslâm Ansiklopedisi: İbn Teymiyye, Takıyyüddin", "https://islamansiklopedisi.org.tr/ibn-teymiyye-takiyyuddin"]
  ],
  "note:sufism-law:liu-zhi": [
    ["Harvard University Press: Sachiko Murata, William C. Chittick & Tu Weiming, The Sage Learning of Liu Zhi", "https://www.hup.harvard.edu/books/9780674033252"],
    ["Brill (PDF): Tianfang Dianli: Norms and Rites of Islam in Imperial China", "https://brill.com/display/book/9789004319257/B9789004319257_003.pdf"]
  ],
  "note:sufism-law:raniri": [
    ["Cambridge University Press: Islamic Connections (Shari’a-mindedness in the Malay World and the contributions of Nur al-Din al-Raniri)", "https://www.cambridge.org/core/books/islamic-connections/shariamindedness-in-the-malay-world-and-the-indian-connection-the-contributions-of-nur-aldin-alraniri-and-nik-abdul-aziz-bin-haji-nik-mat/3E31F6C8CB33F7DFCBAF74ADB5CCDE9D"],
    ["TDV İslâm Ansiklopedisi: Nûreddin er-Rânîrî", "https://islamansiklopedisi.org.tr/nureddin-er-raniri"]
  ],
  "note:sufism-law:zabidi": [
    ["Brill (PDF): Stefan Reichmuth on Murtaḍā al-Zabīdī", "https://brill.com/display/book/edcoll/9789047413349/B9789047413349_s011.pdf"],
    ["TDV İslâm Ansiklopedisi: Zebîdî, Muhammed Murtazâ", "https://islamansiklopedisi.org.tr/zebidi-muhammed-murtaza"]
  ],
  "note:tafsir:bint-al-shati": [
    ["Journal of Qur’anic Studies (Edinburgh University Press, 2015): Shuruq Naguib on Bint al-Shati’s exegesis", "https://www.euppublishing.com/doi/10.3366/jqs.2015.0179"],
    ["Brill (2025): Reading ʿĀʾiša ʿAbd ar-Raḥmān", "https://brill.com/view/book/9789004715431/BP000030.xml"]
  ],
  "note:tafsir:ebussuud": [
    ["TDV İslâm Ansiklopedisi: İrşâdü’l-akli’s-selîm", "https://islamansiklopedisi.org.tr/irsadul-aklis-selim"],
    ["Oxford Reference: Ebussuud Efendi (Biographical Encyclopaedia of Islamic Philosophy)", "https://oxfordreference.com/view/10.1093/oi/authority.20110810104817111"]
  ],
  "note:tafsir:maturidi": [
    ["TDV İslâm Ansiklopedisi: Teʾvîlâtü’l-Kurʾân", "https://islamansiklopedisi.org.tr/tevilatul-kuran"],
    ["TDV İslâm Ansiklopedisi: Mâtürîdî", "https://islamansiklopedisi.org.tr/maturidi"],
    ["Cogent Arts & Humanities (Taylor & Francis, 2026): Maturidi school’s scientific and polemical methodology", "https://www.tandfonline.com/doi/full/10.1080/23311983.2026.2646779"]
  ],
  "note:tafsir:mawdudi": [
    ["Britannica: Abul Ala Mawdudi", "https://www.britannica.com/biography/Abul-Ala-Mawdudi"],
    ["TDV İslâm Ansiklopedisi: Mevdûdî", "https://islamansiklopedisi.org.tr/mevdudi"]
  ],
  "note:tafsir:qushayri": [
    ["TDV İslâm Ansiklopedisi: Kuşeyrî, Abdülkerîm b. Hevâzin", "https://islamansiklopedisi.org.tr/kuseyri-abdulkerim-b-hevazin"],
    ["TDV İslâm Ansiklopedisi: İşârî Tefsir", "https://islamansiklopedisi.org.tr/isari-tefsir"],
    ["Oxford University Press: Martin Nguyen, Sufi Master and Qur’an Scholar (Abū’l-Qāsim al-Qushayrī and the Laṭāʾif al-ishārāt)", "https://global.oup.com/academic/product/sufi-master-and-quran-scholar-9780197265130"]
  ],
  "note:tafsir:sayyid-ahmad-khan": [
    ["Modern Asian Studies (Cambridge, 2024): The theological foundations of Muslim modernism and traditionalism in South Asia", "https://www.cambridge.org/core/journals/modern-asian-studies/article/theological-foundations-of-muslim-modernism-and-traditionalism-in-south-asia/CF73849C02B3C3C5B8C4142B48BC21C8"],
    ["Cambridge University Press: Naicari Nature: Sir Sayyid Ahmad Khan and the Reconciliation of Science, Technology and Religion (PDF)", "https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/CCAB5EB1FD5A473BC831D93E6D9BF0D6/9781108594196c4_p69-86_CBO.pdf/naicari_nature_sir_sayyid_ahmad_khan_and_the_reconciliation_of_science_technology_and_religion.pdf"]
  ],
  "note:tafsir:sinkili": [
    ["Brill EI3O: ʿAbd al-Raʾūf al-Sinkilī (Peter G. Riddell)", "https://referenceworks.brill.com/display/entries/EI3O/COM-0149.xml"],
    ["TDV İslâm Ansiklopedisi: Abdurraûf es-Sinkilî", "https://islamansiklopedisi.org.tr/abdurrauf-es-sinkili"]
  ],
  "note:unity-being:liu-zhi": [
    ["Harvard University Press: Sachiko Murata, William C. Chittick & Tu Weiming, The Sage Learning of Liu Zhi", "https://www.hup.harvard.edu/books/9780674033252"],
    ["Cambridge (Iranian Studies): Jāmī: A Legend in China", "https://www.cambridge.org/core/journals/iranian-studies/article/jami-a-legend-in-china-a-study-of-the-transmission-and-transformation-of-jamis-texts-in-china/DC351E4C8B3750D4E0B757BB162557F4"]
  ],
  "note:unity-being:nabulusi": [
    ["Britannica: ʿAbd al-Ghanī al-Nābulusī", "https://www.britannica.com/biography/Abd-al-Ghani-al-Nabulusi"],
    ["TDV İslâm Ansiklopedisi: Nablusî, Abdülganî b. İsmâil", "https://islamansiklopedisi.org.tr/nablusi-abdulgani-b-ismail"]
  ],
  "note:unity-being:raniri": [
    ["Cambridge University Press: Islamic Connections (Shari’a-mindedness in the Malay World and the contributions of Nur al-Din al-Raniri)", "https://www.cambridge.org/core/books/islamic-connections/shariamindedness-in-the-malay-world-and-the-indian-connection-the-contributions-of-nur-aldin-alraniri-and-nik-abdul-aziz-bin-haji-nik-mat/3E31F6C8CB33F7DFCBAF74ADB5CCDE9D"],
    ["Brill (PDF): G. W. J. Drewes on Nur al-Din al-Raniri", "https://brill.com/display/book/9789004454170/B9789004454170_s008.pdf"],
    ["TDV İslâm Ansiklopedisi: Nûreddin er-Rânîrî", "https://islamansiklopedisi.org.tr/nureddin-er-raniri", "1637–1644 tenure in Aceh and distinction between orthodox and heretical wujudiyya"]
  ],
  "note:unity-being:sinkili": [
    ["Brill EI3O: ʿAbd al-Raʾūf al-Sinkilī (Peter G. Riddell)", "https://referenceworks.brill.com/display/entries/EI3O/COM-0149.xml"],
    ["TDV İslâm Ansiklopedisi: Abdurraûf es-Sinkilî", "https://islamansiklopedisi.org.tr/abdurrauf-es-sinkili"]
  ],
  "note:unity-being:wang-daiyu": [
    ["Matheson Trust / Journal of Sufi Studies 2 (2013, PDF): Kristian Petersen on Wang Daiyu", "https://www.themathesontrust.org/papers/fareasternreligions/petersen-heartofwangdaiyus.pdf"],
    ["Religions (MDPI, 2026): Recasting Islamic Thought in China: Conceptual Reconfiguration in Wang Daiyu’s Han Kitab", "https://www.mdpi.com/2077-1444/17/10/1118"]
  ],
  "thread:caliphate-modern:1922": [
    ["Yale University Press: The Caliphate or Supreme Imamate", "https://yalebooks.yale.edu/book/9780300190274/the-caliphate-or-supreme-imamate/"]
  ],
  "thread:caliphate-modern:1924": [
    ["Britannica: Abdülmecid II", "https://www.britannica.com/biography/Abdulmecid-II"]
  ],
  "thread:caliphate-modern:1925": [
    ["Britannica: Islamic world, reform and revival in the colonial period", "https://www.britannica.com/topic/Islamic-world/The-rise-of-British-colonialism-to-the-end-of-the-Ottoman-Empire"],
    ["Encyclopedia of the Modern Middle East: ʿAbd al-Raziq, Ali", "https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/abd-al-raziq", "the condemnation and dismissal"]
  ],
  "thread:caliphate-modern:1928": [
    ["Britannica: Muslim Brotherhood", "https://www.britannica.com/topic/Muslim-Brotherhood"],
    ["Britannica: Hassan al-Banna", "https://www.britannica.com/biography/Hassan-al-Banna"]
  ],
  "thread:caliphate-modern:1930": [
    ["Iqbal, Reconstruction: Lecture VI (1934 edition, PDF at archipress.org)", "https://archipress.org/docs/pdf/iqbalreconstruction.pdf"]
  ],
  "thread:caliphate-modern:1941": [
    ["Britannica: Abul Ala Mawdudi", "https://www.britannica.com/biography/Abul-Ala-Mawdudi"],
    ["TDV İslâm Ansiklopedisi: Mevdûdî", "https://islamansiklopedisi.org.tr/mevdudi"]
  ],
  "thread:caliphate-modern:1970": [
    ["Britannica: velāyat-e faqīh", "https://www.britannica.com/topic/velayat-e-faqih"],
    ["Encyclopaedia Iranica: Khomeini i. Life", "https://www.iranicaonline.org/articles/khomeini-i-life/"]
  ],
  "thread:caliphate-modern:1979": [
    ["Cambridge: On the origins of the Iranian constitution: Muhammad Baqer as-Sadr’s 1979 treatises", "https://www.cambridge.org/core/books/abs/renewal-of-islamic-law/on-the-origins-of-the-iranian-constitution-muhammad-baqer-assadrs-1979-treatises/14AAE2F71556206A90354B9AAC09A5A4"],
    ["Britannica: Ruhollah Khomeini", "https://www.britannica.com/biography/Ruhollah-Khomeini", "establishment of the Islamic Republic of Iran in 1979"],
    ["Cambridge (Iranian Studies, 2022): Ayatollah Khomeini: From Islamic Government to Sovereign State", "https://www.cambridge.org/core/journals/iranian-studies/article/ayatollah-khomeini-from-islamic-government-to-sovereign-state/E2AD85CE370DAE835C45707F301AD3F1", "wilayat al-faqih in the 1979 constitution"]
  ],
  "thread:created-quran:827": [
    ["IJMES: A Reexamination of Three Current Explanations for al-Maʾmun’s Introduction of the Miḥna", "https://www.cambridge.org/core/journals/international-journal-of-middle-east-studies/article/abs/reexamination-of-three-current-explanations-for-almamuns-introduction-of-the-mihna/7DC51FB0E209B4FBEB7F5EF16B4CA230", "the declaration of 827"]
  ],
  "thread:created-quran:833": [
    ["Britannica: miḥnah", "https://www.britannica.com/topic/mihnah"]
  ],
  "thread:created-quran:848": [
    ["Britannica: miḥnah", "https://www.britannica.com/topic/mihnah"],
    ["Encyclopedia of Islam and the Muslim World: Mihna", "https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/mihna", "al-Mutawakkil’s ban of 849"],
    ["Oxford Academic: Mihna (John Nawas)", "https://academic.oup.com/reference/62361/reference-article-abstract/554577879", "the end dates of 849 and 851–852"]
  ],
  "thread:faith:728": [
    ["Britannica: Muʿtazilah", "https://www.britannica.com/topic/Mutazilah"],
    ["TDV İslâm Ansiklopedisi: Vâsıl b. Atâ", "https://islamansiklopedisi.org.tr/vasil-b-ata"]
  ],
  "thread:faith:846": [
    ["Library of Congress: The Fourth Volume of al-Bukhari’s Collection of Authentic Hadiths", "https://www.loc.gov/item/2021667384/", "the date 846"]
  ],
  "thread:free-will:690": [
    ["Encyclopedia of Religion: Free Will and Predestination, Islamic Concepts", "https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/free-will-and-predestination-islamic-concepts", "Maʿbad al-Juhani as the first Qadari"]
  ],
  "thread:free-will:980": [
    ["Core (thesis): The Epistemological Foundation of Knowing God", "https://files.core.ac.uk/download/429701525.pdf", "dating al-Mughni to about 970–990"]
  ],
  "thread:hadith-criticism:1160": [
    ["Cambridge University Press: Asma Sayeed, Women and the Transmission of Religious Knowledge in Islam, ch. 4", "https://www.cambridge.org/core/books/women-and-the-transmission-of-religious-knowledge-in-islam/culmination-in-traditionalism/256C56689600D723FC428DFEA465B618"],
    ["TDV İslâm Ansiklopedisi: Şühde el-Kâtibe", "https://islamansiklopedisi.org.tr/suhde-el-katibe"]
  ],
  "thread:hadith-criticism:1235": [
    ["Oxford Bibliographies in Islamic Studies: Hadith", "https://www.oxfordbibliographies.com/abstract/document/obo-9780195390155/obo-9780195390155-0030.xml"],
    ["TDV İslâm Ansiklopedisi: Mukaddimetü İbni’s-Salâh", "https://islamansiklopedisi.org.tr/mukaddimetu-ibnis-salah"]
  ],
  "thread:hadith-criticism:1330": [
    ["Cambridge University Press: Asma Sayeed, Women and the Transmission of Religious Knowledge in Islam, ch. 4", "https://www.cambridge.org/core/books/women-and-the-transmission-of-religious-knowledge-in-islam/culmination-in-traditionalism/256C56689600D723FC428DFEA465B618"],
    ["Cambridge University Press (PDF): The Formative Years (al-Maqrizi on Zaynab bint al-Kamal)", "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/F41731C5F78783C1FD2440F0091BC0E9/stamped-9781399502832c1_p11-59_CBO.pdf/the-formative-years.pdf"]
  ],
  "thread:hadith-criticism:1400": [
    ["Cambridge University Press: Asma Sayeed, Women and the Transmission of Religious Knowledge in Islam, ch. 4", "https://www.cambridge.org/core/books/women-and-the-transmission-of-religious-knowledge-in-islam/culmination-in-traditionalism/256C56689600D723FC428DFEA465B618"],
    ["TDV İslâm Ansiklopedisi: Âişe bint Muhammed", "https://islamansiklopedisi.org.tr/aise-bint-muhammed"]
  ],
  "thread:hadith-criticism:1438": [
    ["Journal of Near Eastern Studies 76 (2017): Joel Blecher, Revision in the Manuscript Age: New Evidence of Early Versions of Ibn Ḥajar’s Fatḥ al-bārī", "https://www.journals.uchicago.edu/doi/abs/10.1086/690766"],
    ["George Washington University: Early Drafts of a Classic Work of Islamic Thought Discovered (2017)", "https://mediarelations.gwu.edu/early-drafts-classic-work-islamic-thought-discovered", "completion of Fath al-Bari in 1438"],
    ["Oxford Reference: Ahmad ibn Hajar al-Asqalani", "https://www.oxfordreference.com/view/10.1093/oi/authority.20110803095429356"]
  ],
  "thread:hadith-criticism:665": [
    ["Cambridge University Press: Asma Sayeed, Women and the Transmission of Religious Knowledge in Islam, ch. 1", "https://www.cambridge.org/core/books/women-and-the-transmission-of-religious-knowledge-in-islam/tradition-invented-the-female-companions/B585FE7CE3E5C082A00D88A1464DBC3B"],
    ["TDV İslâm Ansiklopedisi: Ümmü Seleme", "https://islamansiklopedisi.org.tr/ummu-seleme"]
  ],
  "thread:hadith-criticism:745": [
    ["Britannica: Ibn Isḥāq", "https://www.britannica.com/biography/Ibn-Ishaq"],
    ["TDV İslâm Ansiklopedisi: İbn İshak", "https://islamansiklopedisi.org.tr/ibn-ishak", "Malik’s criticism of Ibn Ishaq"],
    ["Internet Archive: Alfred Guillaume, The Life of Muhammad (Oxford University Press, 1955), introduction", "https://archive.org/details/GuillaumeATheLifeOfMuhammad", "Malik’s hostility and Ibn Hanbal’s distinction between campaigns (maghazi) and legal rulings"]
  ],
  "thread:hadith-criticism:846": [
    ["Britannica: al-Bukhārī", "https://www.britannica.com/biography/al-Bukhari"],
    ["TDV İslâm Ansiklopedisi: el-Câmiu’s-sahîh", "https://islamansiklopedisi.org.tr/el-camius-sahih--buhari"],
    ["Library of Congress: The Fourth Volume of al-Bukhari’s Collection of Authentic Hadiths", "https://www.loc.gov/item/2021667384/", "the date 846"]
  ],
  "thread:heavens:1031": [
    ["Encyclopaedia Iranica: Bīrūnī, Abū Rayḥān i. Life", "https://www.iranicaonline.org/articles/biruni-abu-rayhan-index/biruni-abu-rayhan-i-life/", "al-Qanun al-Mas’udi still listed as unfinished in 427 AH (1036 CE)"]
  ],
  "thread:heavens:1079": [
    ["Encyclopaedia Iranica: Khayyam, Omar xv. As Astronomer", "https://www.iranicaonline.org/articles/khayyam-omar/khayyam-omar-xv-as-astronomer/"],
    ["Biographical Encyclopedia of Astronomers: Khayyām (PDF)", "https://islamsci.mcgill.ca/RASI/BEA/Khayyam_BEA.pdf"]
  ],
  "thread:heavens:1360": [
    ["Biographical Encyclopedia of Astronomers (McGill): David A. King on Ibn al-Shāṭir", "https://islamsci.mcgill.ca/RASI/BEA/Ibn_al-Shatir_BEA.htm"],
    ["Stanford Encyclopedia of Philosophy: Nicolaus Copernicus", "https://plato.stanford.edu/entries/copernicus/"]
  ],
  "thread:heavens:1437": [
    ["University of Michigan: Early Astronomy, Ulugh Beg", "https://www.early-astronomy-um.org/islamic_ulugh-beg.php", "star catalogue dated early 841 AH (1437 CE)"],
    ["Biographical Encyclopedia of Astronomers (ISMI): Ulugh Beg", "https://ismi.mpiwg-berlin.mpg.de/index.php/biography/Ulugh_Beg_BEA.htm", "observing programme to about 1440"]
  ],
  "thread:ijaz:1070": [
    ["JILSA (PDF): ʿAbd al-Qāhir al-Jurjānī on Qur’anic nazm and his criticism of ṣarfa", "https://jurnalfahum.uinsa.ac.id/index.php/jilsa/article/download/1432/584"]
  ],
  "thread:ijaz:1134": [
    ["Oxford Handbook of Qur’anic Studies: Muhammad Abdel Haleem, Rhetorical Devices and Stylistic Features of Qur’anic Grammar (PDF)", "https://soas-repository.worktribe.com/OutputFile/365441"]
  ],
  "thread:ijaz:1969": [
    ["Journal of Qur’anic Studies (Edinburgh University Press, 2015): Shuruq Naguib on Bint al-Shati’s exegesis", "https://www.euppublishing.com/doi/10.3366/jqs.2015.0179"],
    ["Brill (2025): Reading ʿĀʾiša ʿAbd ar-Raḥmān", "https://brill.com/view/book/9789004715431/BP000030.xml"]
  ],
  "thread:ijaz:850": [
    ["DergiPark (PDF): al-Naẓẓām’s ṣarfa and al-Jāḥiẓ on the inimitability of the Qur’an", "https://dergipark.org.tr/en/download/article-file/4746272"]
  ],
  "thread:ijaz:985": [
    ["McGill (MA thesis): Yusuf Rahman, The Miraculous Nature of Muslim Scripture, a Study of ʿAbd al-Jabbār’s Iʿjāz al-Qurʾān", "https://escholarship.mcgill.ca/downloads/6w924d79j"],
    ["Religions (2025): theories of Qur’anic inimitability after ʿAbd al-Jabbār", "https://www.mdpi.com/2077-1444/16/12/1584", "the volume of al-Mughni on iʿjāz"]
  ],
  "thread:ijtihad:1615": [
    ["Journal of North African Studies (Taylor & Francis, 2014): Timothy Cleaveland on Ahmad Baba’s 1615 fatwa", "https://www.tandfonline.com/doi/abs/10.1080/13629387.2014.983825"],
    ["Britannica: Ahmad Baba", "https://www.britannica.com/biography/Ahmad-Baba"]
  ],
  "thread:ijtihad:1622": [
    ["Encyclopaedia Iranica: Astarābādī, Moḥammad Amīn", "https://www.iranicaonline.org/articles/astarabadi-molla-mohammad-amin-b/", "completion of al-Fawa’id al-madaniyya in Mecca in Rabi’ I 1031 AH (January–February 1622 CE)"]
  ],
  "thread:ijtihad:1770": [
    ["Encyclopaedia Iranica: Behbahānī, Moḥammad-Bāqer", "https://www.iranicaonline.org/articles/behbahani-aqa-sayyed-mohmmad-baqer/"],
    ["Encyclopaedia Iranica: Aḵbārīya", "https://www.iranicaonline.org/articles/akbariya/"],
    ["Oxford Academic: Liyakat Takim, Usul al-Fiqh and Ijtihad in Shi’ism (2021)", "https://academic.oup.com/book/41130/chapter/350641282"]
  ],
  "thread:ijtihad:1870": [
    ["UvA-DARE: Michael Kemper, Imperial Russia as Dar al-Islam? (PDF)", "https://dare.uva.nl/document/2/167407"],
    ["Islamology: Dinara Mardanova, Debates around Ibādah between Shihab ad-Din Marjani and his Opponents", "https://islamology.in/journal/article/view/153"]
  ],
  "thread:ijtihad:955": [
    ["Encyclopaedia Iranica: Ejtehād", "https://www.iranicaonline.org/articles/ejtehad/"],
    ["Institute of Ismaili Studies: al-Nuʿman, al-Qadi (d. 363 AH / 974 CE)", "https://www.iis.ac.uk/scholarly-contributions/al-numan-al-qadi-d-363-ah-974-ce/"],
    ["TDV İslâm Ansiklopedisi: Nu‘mân b. Muhammed", "https://islamansiklopedisi.org.tr/numan-b-muhammed", "al-Mansuriyya and Kitab ikhtilaf usul al-madhahib"]
  ],
  "thread:imamate:1515": [
    ["Cambridge University Press: Paul M. Love Jr., Ibadi Muslims of North Africa (2018), ch. 7", "https://www.cambridge.org/core/books/ibadi-muslims-of-north-africa/end-of-a-tradition/656A6A9B8E73B8B2D779AB9FE9A15D67"],
    ["TDV İslâm Ansiklopedisi: Kitâbü’s-Siyer", "https://islamansiklopedisi.org.tr/kitabus-siyer"]
  ],
  "thread:imamate:632": [
    ["Britannica: Abū Bakr", "https://www.britannica.com/biography/Abu-Bakr"]
  ],
  "thread:imamate:680": [
    ["Britannica: Battle of Karbala", "https://www.britannica.com/event/Battle-of-Karbala"]
  ],
  "thread:imamate:690": [
    ["TDV İslâm Ansiklopedisi: Câbir b. Zeyd", "https://islamansiklopedisi.org.tr/cabir-b-zeyd"],
    ["TDV İslâm Ansiklopedisi: İbâzıyye", "https://islamansiklopedisi.org.tr/ibaziyye"]
  ],
  "thread:imamate:840": [
    ["Cambridge University Press: Patricia Crone, God’s Rule, ch. 9 “The Zaydis” (PDF)", "https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/6B69E868DD32C812D5D39ECF705285A8/9780748646500c9_p99-109_CBO.pdf/the-zaydis.pdf"],
    ["TDV İslâm Ansiklopedisi: Ressî", "https://islamansiklopedisi.org.tr/ressi"]
  ],
  "thread:imamate:874": [
    ["Encyclopaedia Iranica: Ḡayba", "https://www.iranicaonline.org/articles/gayba/"],
    ["Encyclopaedia Iranica: Islam in Iran ix. The Deputies of Mahdi", "https://www.iranicaonline.org/articles/islam-in-iran-ix-the-deputies-of-mahdi/"]
  ],
  "thread:imamate:910": [
    ["Britannica: ʿUbayd Allāh al-Mahdī", "https://www.britannica.com/biography/Ubayd-Allah-al-Mahdi"],
    ["Encyclopaedia Iranica: Fatimids", "https://www.iranicaonline.org/articles/fatimids/"],
    ["Encyclopaedia Iranica: Isma’ilism iii. Isma’ili History (Farhad Daftary)", "https://www.iranicaonline.org/articles/ismailism/iii-ismaili-history/", "entry into Raqqada and proclamation as caliph in January 910"]
  ],
  "thread:imamate:941": [
    ["Encyclopaedia Iranica: Ḡayba", "https://www.iranicaonline.org/articles/gayba/"],
    ["Encyclopaedia Iranica: Islam in Iran ix. The Deputies of Mahdi", "https://www.iranicaonline.org/articles/islam-in-iran-ix-the-deputies-of-mahdi/"]
  ],
  "thread:imamate:960": [
    ["Institute of Ismaili Studies: al-Nuʿman, al-Qadi (d. 363 AH / 974 CE)", "https://www.iis.ac.uk/scholarly-contributions/al-numan-al-qadi-d-363-ah-974-ce/"],
    ["TDV İslâm Ansiklopedisi: Nu‘mân b. Muhammed", "https://islamansiklopedisi.org.tr/numan-b-muhammed", "al-Mansuriyya and Da’a’im al-Islam (c. 349/960)"]
  ],
  "thread:maqasid:1078": [
    ["TDV İslâm Ansiklopedisi: Cüveynî, İmâmü’l-Haremeyn", "https://islamansiklopedisi.org.tr/cuveyni-imamul-haremeyn"]
  ],
  "thread:maqasid:1109": [
    ["Stanford Encyclopedia of Philosophy: al-Ghazali", "https://plato.stanford.edu/entries/al-ghazali/"]
  ],
  "thread:maqasid:1946": [
    ["TDV İslâm Ansiklopedisi: Makāsıdü’ş-şerîa", "https://islamansiklopedisi.org.tr/makasidus-seria"]
  ],
  "thread:philosophy:1070": [
    ["Internet Encyclopedia of Philosophy: Nasir Khusraw", "https://iep.utm.edu/khusraw/"],
    ["Institute of Ismaili Studies (PDF): Kutub Kassam, Nasir Khusraw: A Living Tradition", "https://www.iis.ac.uk/wp-content/uploads/2024/10/nasir-khusraw-a-living-tradition-kutub-kassam-28-10-10-1078353117.pdf"]
  ],
  "thread:philosophy:1315": [
    ["Stanford Encyclopedia of Philosophy: Ibn Taymiyya", "https://plato.stanford.edu/entries/ibn-taymiyya/"]
  ],
  "thread:philosophy:1377": [
    ["Britannica: Ibn Khaldūn, the Muqaddimah", "https://www.britannica.com/biography/Ibn-Khaldun/The-Muqaddimah-Ibn-Khalduns-philosophy-of-history"],
    ["CEEOL: Haris Dubravac, About Limitations of Intellect, Ibn Khaldūn’s Criticism of Philosophy", "https://ceeol.com/search/article-detail?id=1176198"],
    ["Encyclopedia of Religion: Ibn Khaldūn", "https://www.encyclopedia.com/people/history/historians-miscellaneous-biographies/ibn-khaldun", "completion in 1377"]
  ],
  "thread:philosophy:1625": [
    ["Encyclopaedia Iranica: Dāmād, Mīr(-e), Sayyed Moḥammad Bāqer", "https://www.iranicaonline.org/articles/damad-mir-e-sayyed-mohammad-baqer-b/"],
    ["TDV İslâm Ansiklopedisi: Dâmâd, Muhammed Bâkır", "https://islamansiklopedisi.org.tr/damad-muhammed-bakir"]
  ],
  "thread:philosophy:838": [
    ["Oxford Academic: The rise of falsafa: al-Kindī, On First Philosophy", "https://academic.oup.com/edited-volume/38657/chapter-abstract/335767408"],
    ["Stanford Encyclopedia of Philosophy: al-Kindi", "https://plato.stanford.edu/entries/al-kindi/"]
  ],
  "thread:philosophy:920": [
    ["DergiPark (PDF): Abu Hatim al-Razi’s responses to Abu Bakr al-Razi on prophecy in Aʿlam al-nubuwwa", "https://dergipark.org.tr/tr/download/article-file/918787"],
    ["Stanford Encyclopedia of Philosophy: Abu Bakr al-Razi", "https://plato.stanford.edu/entries/abu-bakr-al-razi/", "Abu Hatim’s account of their debates and its reliability"]
  ],
  "thread:reason-law:690": [
    ["Cambridge University Press: Omer Awass, Fatwa and the Making and Renewal of Islamic Law (2023), ch. 2", "https://www.cambridge.org/core/books/fatwa-and-the-making-and-renewal-of-islamic-law/fatwa-in-the-classical-age/7DE13632B92F01C307F98C8CE400C792"],
    ["TDV İslâm Ansiklopedisi: Câbir b. Zeyd", "https://islamansiklopedisi.org.tr/cabir-b-zeyd"]
  ],
  "thread:reason-law:815": [
    ["TDV İslâm Ansiklopedisi: Şâfiî", "https://islamansiklopedisi.org.tr/safii"]
  ],
  "thread:reform:1867": [
    ["Britannica: Deoband school", "https://www.britannica.com/topic/Deoband-school"],
    ["Brill EI3O: Madrasa in South Asia (Francis Robinson)", "https://referenceworks.brill.com/display/entries/EI3O/COM-35956.xml"]
  ],
  "thread:reform:1875": [
    ["Aligarh Muslim University: History", "https://www.amu.ac.in/about-us/history"]
  ],
  "thread:reform:1904": [
    ["Brill EI3O: Barelwīs (Usha Sanyal)", "https://referenceworks.brill.com/display/entries/EI3O/COM-23995.xml"],
    ["Brill EI3O: Madrasa in South Asia (Francis Robinson)", "https://referenceworks.brill.com/display/entries/EI3O/COM-35956.xml"]
  ],
  "thread:reform:1905": [
    ["Max Planck / Journal of Religious History (2021, PDF): Margrit Pernau & Max Stille on Bihishti zewar", "https://pure.mpg.de/rest/items/item_3231501_8/component/file_3293688/content"],
    ["TDV İslâm Ansiklopedisi: Eşref Ali", "https://islamansiklopedisi.org.tr/esref-ali"],
    ["University of California Press: Barbara Daly Metcalf, Perfecting Women: Maulana Ashraf ʿAli Thanawi’s Bihishti Zewar", "https://www.ucpress.edu/books/perfecting-women/paper"],
    ["Cambridge (CSSH, 2022): Sovereign and Virtuous Body: The Competent Muslim Woman’s Guide to Health in Thanawi’s Bihishti Zewar (1905)", "https://www.cambridge.org/core/journals/comparative-studies-in-society-and-history/article/sovereign-and-virtuous-body-the-competent-muslim-womans-guide-to-health-in-thanawis-bihishti-zewar-1905/889725055B23F6D4098313D2C5192269"]
  ],
  "thread:reform:1911": [
    ["Encyclopaedia Iranica: Behbudi", "https://www.iranicaonline.org/articles/behbudi-molla-mahmud-kaja/"]
  ],
  "thread:reform:1926": [
    ["TDV İslâm Ansiklopedisi: Said Nursî", "https://islamansiklopedisi.org.tr/said-nursi"]
  ],
  "thread:reform:1930": [
    ["Iqbal Cyber Library: Six Lectures on the Reconstruction of Religious Thought in Islam (Lahore, 1930)", "https://iqbalcyberlibrary.net/files/023/Iqbal-Six-Lectures-1930.pdf"]
  ],
  "thread:renewal:1690": [
    ["Britannica: ʿAbd al-Ghanī al-Nābulusī", "https://www.britannica.com/biography/Abd-al-Ghani-al-Nabulusi"],
    ["Brill: Samer Akkach, Letters of a Sufi Scholar", "https://brill.com/display/title/14508"]
  ],
  "thread:renewal:1787": [
    ["Brill (PDF): Stefan Reichmuth on Murtaḍā al-Zabīdī", "https://brill.com/display/book/edcoll/9789047413349/B9789047413349_s011.pdf"],
    ["TDV İslâm Ansiklopedisi: Zebîdî, Muhammed Murtazâ", "https://islamansiklopedisi.org.tr/zebidi-muhammed-murtaza"],
    ["ghazali.org: Itḥāf al-sadāh al-muttaqīn (colophon, 5 Jumada II 1201 AH / 1787 CE)", "https://www.ghazali.org/ithaf/", "completion in Jumada II 1201 AH (1787 CE)"]
  ],
  "thread:renewal:1840": [
    ["Revue de la FM6OA: The life and contribution of Nana Asmaʾu", "https://www.fm6oa.org/revue/article/the-life-and-contribution-of-nana-asmau/"],
    ["Brill: Sufi Feminism, Women Leaders in African Sufi Movements", "https://doi.org/10.1163/15700666-12340258"]
  ],
  "thread:renewal:1906": [
    ["Brill EI3O: Barelwīs (Usha Sanyal)", "https://referenceworks.brill.com/display/entries/EI3O/COM-23995.xml"],
    ["TDV İslâm Ansiklopedisi: Rızâ Han Birelvî", "https://islamansiklopedisi.org.tr/riza-han-birelvi"]
  ],
  "thread:sama:1045": [
    ["TDV İslâm Ansiklopedisi: Kuşeyrî, Abdülkerîm b. Hevâzin", "https://islamansiklopedisi.org.tr/kuseyri-abdulkerim-b-hevazin"],
    ["Library of Congress: al-Qushayri’s Epistle on Sufism", "https://www.loc.gov/item/2021667378/"]
  ],
  "thread:sama:1100": [
    ["Institute of Ismaili Studies: Leonard Lewisohn, The Sacred Music of Islam, Samaʿ in the Persian Sufi Tradition (PDF)", "https://iis.ac.uk/wp-content/uploads/2024/10/the-sacred-music-of-islam_pdf-366408512.pdf", "al-Ghazali’s book on listening and its conditions"]
  ],
  "thread:sama:1160": [
    ["Shahzad Bashir: Movement and Stillness, the Practice of Sufi Dhikr in Fourteenth-Century Central Asia (PDF)", "https://www.themathesontrust.org/papers/islam/Bashir-Movement_and_Stillness_Sufi_Dhikr.pdf", "the Yasawi order’s dhikr with movement"]
  ],
  "thread:sama:1190": [
    ["Journal of Oriental Studies (2026): Ibn al-Jawzī’s Critique of Sufi Dhikr, Samāʿ and Ritual Chanting in Talbīs Iblīs (PDF)", "https://journals.ysu.am/j-orient-stud/article/download/vol29_no1_2026_44/pdf/37134"]
  ],
  "thread:sama:1250": [
    ["Britannica: Mawlawīyah", "https://www.britannica.com/topic/Mawlawiyah", "Rumi and the turning ritual"],
    ["Britannica: Rūmī", "https://www.britannica.com/biography/Rumi"]
  ],
  "thread:sama:1290": [
    ["Britannica: Rūmī, death and legacy", "https://britannica.com/biography/Rumi/Death-and-legacy"]
  ],
  "thread:sama:1310": [
    ["Islamic Law and Society (2024): Ibn Taymiyya and his Circle on samāʿ (RelBib record)", "https://relbib.de/Record/1890306797"]
  ],
  "thread:sama:1380": [
    ["Shahzad Bashir: Movement and Stillness, the Practice of Sufi Dhikr in Fourteenth-Century Central Asia (PDF)", "https://www.themathesontrust.org/papers/islam/Bashir-Movement_and_Stillness_Sufi_Dhikr.pdf"]
  ],
  "thread:sama:1550": [
    ["TDV İslâm Ansiklopedisi: Devran", "https://islamansiklopedisi.org.tr/devran"],
    ["TDV İslâm Ansiklopedisi: Ebüssuûd Efendi", "https://islamansiklopedisi.org.tr/ebussuud-efendi"]
  ],
  "thread:sama:1656": [
    ["TDV İslâm Ansiklopedisi: Mîzânü’l-hak", "https://islamansiklopedisi.org.tr/mizanul-hak"],
    ["Bozok Üniversitesi İlahiyat Fakültesi Dergisi (2019): Tacetdin Bıyık on Katib Çelebi’s views on music in Mizan al-haqq", "https://dergipark.org.tr/tr/pub/bozifder/article/632827"],
    ["Internet Archive: Katib Çelebi, The Balance of Truth (trans. G. L. Lewis, 1957)", "https://archive.org/details/balanceoftruth0000ktip"]
  ],
  "thread:sama:1680": [
    ["Britannica: ʿAbd al-Ghanī al-Nābulusī", "https://www.britannica.com/biography/Abd-al-Ghani-al-Nabulusi"],
    ["TDV İslâm Ansiklopedisi: Nablusî, Abdülganî b. İsmâil", "https://islamansiklopedisi.org.tr/nablusi-abdulgani-b-ismail"]
  ],
  "thread:sufism-law:1127": [
    ["Encyclopedia of the Modern Middle East: Qadiriyya Order", "https://encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/qadiriyya-order"],
    ["Britannica: ʿAbd al-Qādir al-Jīlānī", "https://www.britannica.com/biography/Abd-al-Qadir-al-Jilani", "first preaching in 1127"]
  ],
  "thread:sufism-law:1190": [
    ["Journal of Oriental Studies (2026): Ibn al-Jawzī’s Critique of Sufi Dhikr, Samāʿ and Ritual Chanting in Talbīs Iblīs (PDF)", "https://journals.ysu.am/j-orient-stud/article/download/vol29_no1_2026_44/pdf/37134"],
    ["Britannica: Ibn al-Jawzī", "https://www.britannica.com/biography/Ibn-al-Jawzi"]
  ],
  "thread:sufism-law:1315": [
    ["Islamic Law and Society 31 (Brill, 2024): Ibn Taymiyya and his Circle on samāʿ: a means to Purify Sufism?", "https://brill.com/view/journals/ils/31/1-2/article-p30_002.xml"],
    ["Stanford Encyclopedia of Philosophy: Ibn Taymiyya", "https://plato.stanford.edu/entries/ibn-taymiyya/", "return to Damascus in 1313"],
    ["TDV İslâm Ansiklopedisi: İbn Teymiyye, Takıyyüddin", "https://islamansiklopedisi.org.tr/ibn-teymiyye-takiyyuddin"]
  ],
  "thread:sufism-law:1513": [
    ["Mamluk Studies Review 7.1 (2003): Th. Emil Homerin, Living Love: The Mystical Writings of ʿĀʾishah al-Bāʿūnīyah", "https://knowledge.uchicago.edu/records/ec50p-6bg66", "her move to Cairo in 919 AH (1513–1514 CE) and licences to teach law and issue fatwas"],
    ["NYU Press: The Principles of Sufism (trans. Th. Emil Homerin)", "https://nyupress.org/9781479864683/the-principles-of-sufism/", "al-Muntakhab fi usul al-rutab"]
  ],
  "thread:sufism-law:1787": [
    ["Brill (PDF): Stefan Reichmuth on Murtaḍā al-Zabīdī", "https://brill.com/display/book/edcoll/9789047413349/B9789047413349_s011.pdf"],
    ["TDV İslâm Ansiklopedisi: Zebîdî, Muhammed Murtazâ", "https://islamansiklopedisi.org.tr/zebidi-muhammed-murtaza"],
    ["ghazali.org: Itḥāf al-sadāh al-muttaqīn (colophon, 5 Jumada II 1201 AH / 1787 CE)", "https://www.ghazali.org/ithaf/", "completion in Jumada II 1201 AH (1787 CE)"]
  ],
  "thread:tafsir:1045": [
    ["Journal of Sufi Studies (2013): Martin Nguyen on al-Qushayrī’s commentaries", "https://doi.org/10.1163/22105956-12341244", "manuscript evidence for 437 AH (1045–1046 CE), p. 19 n. 6"],
    ["Oxford University Press: Martin Nguyen, Sufi Master and Qur’an Scholar (Abū’l-Qāsim al-Qushayrī and the Laṭāʾif al-ishārāt)", "https://global.oup.com/academic/product/sufi-master-and-quran-scholar-9780197265130"]
  ],
  "thread:tafsir:1134": [
    ["Brill: Andrew Lane, A Traditional Muʿtazilite Qurʾān Commentary", "https://brill.com/display/book/9789047417767/front-4.pdf", "the completion date, 23 Rabiʿ II 528 (20 February 1134) at Mecca"]
  ],
  "thread:tafsir:1466": [
    ["TDV İslâm Ansiklopedisi: Tefsîrü’l-Celâleyn", "https://islamansiklopedisi.org.tr/tefsirul-celaleyn", "completion in 870 AH (1466 CE)"]
  ],
  "thread:tafsir:1566": [
    ["TDV İslâm Ansiklopedisi: İrşâdü’l-akli’s-selîm", "https://islamansiklopedisi.org.tr/irsadul-aklis-selim"],
    ["TDV İslâm Ansiklopedisi: Ebüssuûd Efendi", "https://islamansiklopedisi.org.tr/ebussuud-efendi", "completed c. 973 AH / 1566 CE"]
  ],
  "thread:tafsir:1675": [
    ["Brill EI3O: ʿAbd al-Raʾūf al-Sinkilī (Peter G. Riddell)", "https://referenceworks.brill.com/display/entries/EI3O/COM-0149.xml"],
    ["TDV İslâm Ansiklopedisi: Abdurraûf es-Sinkilî", "https://islamansiklopedisi.org.tr/abdurrauf-es-sinkili"]
  ],
  "thread:tafsir:1892": [
    ["Modern Asian Studies (Cambridge, 2024): The theological foundations of Muslim modernism and traditionalism in South Asia", "https://www.cambridge.org/core/journals/modern-asian-studies/article/theological-foundations-of-muslim-modernism-and-traditionalism-in-south-asia/CF73849C02B3C3C5B8C4142B48BC21C8"],
    ["Cambridge University Press: Naicari Nature: Sir Sayyid Ahmad Khan and the Reconciliation of Science, Technology and Religion (PDF)", "https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/CCAB5EB1FD5A473BC831D93E6D9BF0D6/9781108594196c4_p69-86_CBO.pdf/naicari_nature_sir_sayyid_ahmad_khan_and_the_reconciliation_of_science_technology_and_religion.pdf"]
  ],
  "thread:tafsir:1956": [
    ["TDV İslâm Ansiklopedisi: et-Tahrîr ve’t-Tenvîr", "https://islamansiklopedisi.org.tr/et-tahrir-vet-tenvir", "first volume printed in Tunis in 1956 and complete printing in 1984"],
    ["Journal of Qur’anic Studies (Edinburgh University Press, 2019): Tropology and Inimitability: Ibn ʿĀshūr’s Theory of tafsīr", "https://www.euppublishing.com/doi/abs/10.3366/jqs.2019.0368"]
  ],
  "thread:tafsir:1962": [
    ["Journal of Qur’anic Studies (Edinburgh University Press, 2015): Shuruq Naguib on Bint al-Shati’s exegesis", "https://www.euppublishing.com/doi/10.3366/jqs.2015.0179"],
    ["Brill (2025): Reading ʿĀʾiša ʿAbd ar-Raḥmān", "https://brill.com/view/book/9789004715431/BP000030.xml"]
  ],
  "thread:tafsir:1972": [
    ["Encyclopaedia Iranica: Ṭabāṭabāʾi, Moḥammad-Ḥosayn", "https://www.iranicaonline.org/articles/tabatabai-mohammad-hosayn/", "its writing between 1955 and 1972"]
  ],
  "thread:unity-being:1229": [
    ["Stanford Encyclopedia of Philosophy: Ibn Arabi", "https://plato.stanford.edu/entries/ibn-arabi/"]
  ],
  "thread:unity-being:1640": [
    ["Cambridge University Press: Islamic Connections (Shari’a-mindedness in the Malay World and the contributions of Nur al-Din al-Raniri)", "https://www.cambridge.org/core/books/islamic-connections/shariamindedness-in-the-malay-world-and-the-indian-connection-the-contributions-of-nur-aldin-alraniri-and-nik-abdul-aziz-bin-haji-nik-mat/3E31F6C8CB33F7DFCBAF74ADB5CCDE9D"],
    ["Brill (PDF): G. W. J. Drewes on Nur al-Din al-Raniri", "https://brill.com/display/book/9789004454170/B9789004454170_s008.pdf"],
    ["TDV İslâm Ansiklopedisi: Nûreddin er-Rânîrî", "https://islamansiklopedisi.org.tr/nureddin-er-raniri", "1637–1644 tenure in Aceh and distinction between orthodox and heretical wujudiyya"]
  ],
  "thread:unity-being:1642": [
    ["Matheson Trust / Journal of Sufi Studies 2 (2013, PDF): Kristian Petersen on Wang Daiyu", "https://www.themathesontrust.org/papers/fareasternreligions/petersen-heartofwangdaiyus.pdf"],
    ["Religions (MDPI, 2026): Recasting Islamic Thought in China: Conceptual Reconfiguration in Wang Daiyu’s Han Kitab", "https://www.mdpi.com/2077-1444/17/10/1118"]
  ],
  "thread:unity-being:1665": [
    ["Brill EI3O: ʿAbd al-Raʾūf al-Sinkilī (Peter G. Riddell)", "https://referenceworks.brill.com/display/entries/EI3O/COM-0149.xml"],
    ["TDV İslâm Ansiklopedisi: Abdurraûf es-Sinkilî", "https://islamansiklopedisi.org.tr/abdurrauf-es-sinkili"]
  ],
  "thread:unity-being:1685": [
    ["Britannica: ʿAbd al-Ghanī al-Nābulusī", "https://www.britannica.com/biography/Abd-al-Ghani-al-Nabulusi"],
    ["TDV İslâm Ansiklopedisi: Nablusî, Abdülganî b. İsmâil", "https://islamansiklopedisi.org.tr/nablusi-abdulgani-b-ismail"]
  ],
  "thread:unity-being:1704": [
    ["Harvard University Press: Sachiko Murata, William C. Chittick & Tu Weiming, The Sage Learning of Liu Zhi", "https://www.hup.harvard.edu/books/9780674033252"],
    ["Cambridge (Iranian Studies): Jāmī: A Legend in China", "https://www.cambridge.org/core/journals/iranian-studies/article/jami-a-legend-in-china-a-study-of-the-transmission-and-transformation-of-jamis-texts-in-china/DC351E4C8B3750D4E0B757BB162557F4"]
  ]
};
