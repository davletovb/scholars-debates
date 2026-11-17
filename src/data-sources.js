// Sources for each scholar, debate, debate entry and event, shown in their panels.
// Keys: a scholar id; "debate:<id>"; "thread:<debate>:<year>"; "event:<id>".
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
    ["Encyclopaedia Iranica: al-Ḥāwi", "https://www.iranicaonline.org/articles/hawi-medical-book/", "al-Hawi"]
  ],
  "abu-dawud": [
    ["Britannica: Abū Dāʾūd", "https://www.britannica.com/biography/Abu-Daud"],
    ["Islam Museum: Abu Dawud al-Sijistani", "https://www.islam.museum/en/person/abu-dawud-al-sijistani/"],
    ["TDV İslâm Ansiklopedisi: Ebû Dâvûd es-Sicistânî", "https://islamansiklopedisi.org.tr/ebu-davud-es-sicistani"]
  ],
  "abu-hafs-nasafi": [
    ["nasafi.org: al-ʿAqīda al-nasafiyya and its author", "https://nasafi.org/"],
    ["TDV İslâm Ansiklopedisi: Nesefî, Necmeddin", "https://islamansiklopedisi.org.tr/nesefi-necmeddin"]
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
  "aisha": [
    ["Britannica: ʿĀʾishah", "https://www.britannica.com/biography/Aishah"],
    ["Islam Museum: Battle of the Camel", "https://islam.museum/en/event/battle-of-the-camel/"],
    ["TDV İslâm Ansiklopedisi: Âişe", "https://islamansiklopedisi.org.tr/aise"]
  ],
  "aisha-bauniyya": [
    ["Mamluk Studies Review 17 (2013): Th. Emil Homerin on Aisha al-Baʿuniyya and dhikr", "https://knowledge.uchicago.edu/records/n0ry7-52x72"],
    ["NYU Press: ʿĀʾishah al-Bāʿūniyyah", "https://nyupress.org/author/aishah-al-bauniyyah/"],
    ["NYU Press: The Principles of Sufism (trans. Th. Emil Homerin)", "https://nyupress.org/9781479864683/the-principles-of-sufism/", "her treatise on the Sufi path"]
  ],
  "ali": [
    ["Oxford Academic: ʿAlī ibn Abī Ṭālib", "https://academic.oup.com/reference/62361/reference-article-abstract/554579518"],
    ["Britannica: ʿAlī", "https://www.britannica.com/biography/Ali-Muslim-caliph"]
  ],
  "ashari": [
    ["Encyclopaedia Iranica: Ašʿarī, Abu’l-Ḥasan", "https://www.iranicaonline.org/articles/asari-abul-hasan-ali-b/"],
    ["Britannica: Abū al-Ḥasan al-Ashʿarī", "https://www.britannica.com/biography/Abu-al-Hasan-al-Ashari"]
  ],
  "baqir-sadr": [
    ["Encyclopaedia Iranica: Iraq x. Shiʿites of Iraq", "https://www.iranicaonline.org/articles/iraq-x-shiites-of-iraq/"],
    ["Encyclopaedia Iranica: Iraq xi. Shiʿite seminaries", "https://www.iranicaonline.org/articles/iraq-xi-shiite-seminaries/"],
    ["Cambridge: On the origins of the Iranian constitution: Muhammad Baqer as-Sadr’s 1979 treatises", "https://www.cambridge.org/core/books/abs/renewal-of-islamic-law/on-the-origins-of-the-iranian-constitution-muhammad-baqer-assadrs-1979-treatises/14AAE2F71556206A90354B9AAC09A5A4"],
    ["TDV İslâm Ansiklopedisi: Sadr, Muhammed Bâkır", "https://islamansiklopedisi.org.tr/sadr-muhammed-bakir"]
  ],
  "behbudi": [
    ["Encyclopaedia Iranica: Behbudi", "https://www.iranicaonline.org/articles/behbudi-molla-mahmud-kaja/"]
  ],
  "biruni": [
    ["Britannica: al-Bīrūnī (summary)", "https://www.britannica.com/summary/al-Biruni"],
    ["Encyclopaedia Iranica: Bīrūnī, Abū Rayḥān i. Life", "https://www.iranicaonline.org/articles/biruni-abu-rayhan-index/biruni-abu-rayhan-i-life/"],
    ["ISMI (Max Planck Institute): Kitāb fī taḥqīq mā li’l-Hind", "https://ismi.mpiwg-berlin.mpg.de/bibcite/reference/15909", "Tahqiq ma li’l-Hind"]
  ],
  "bukhari": [
    ["Library of Congress: manuscript of al-Bukhari’s Sahih, vol. 4 (World Digital Library)", "https://www.loc.gov/resource/gdcwdl.wdl_17619/?sp=1&st=grid"],
    ["Britannica: al-Bukhārī", "https://www.britannica.com/biography/al-Bukhari"],
    ["TDV İslâm Ansiklopedisi: el-Câmiu’s-sahîh", "https://islamansiklopedisi.org.tr/el-camius-sahih--buhari", "the sixteen years of composition"]
  ],
  "dan-fodio": [
    ["Britannica: Usman dan Fodio", "https://www.britannica.com/biography/Usman-dan-Fodio"],
    ["Islam Museum: Usman dan Fodio", "https://www.islam.museum/en/person/usman-dan-fodio/"]
  ],
  "ebussuud": [
    ["Oxford Reference: Ebussuud Efendi (Biographical Encyclopaedia of Islamic Philosophy)", "https://oxfordreference.com/view/10.1093/oi/authority.20110810104817111"],
    ["TDV İslâm Ansiklopedisi: Ebüssuûd Efendi", "https://islamansiklopedisi.org.tr/ebussuud-efendi"]
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
  "ibn-arabi": [
    ["Stanford Encyclopedia of Philosophy: Ibn Arabi", "https://plato.stanford.edu/entries/ibn-arabi/"],
    ["TDV İslâm Ansiklopedisi: İbnü’l-Arabî", "https://islamansiklopedisi.org.tr/ibnul-arabi-muhyiddin"],
    ["Library of Congress: The Meccan Revelations", "https://www.loc.gov/item/2021666160/", "al-Futuhat al-Makkiyya"]
  ],
  "ibn-ashur": [
    ["IIIT: Ibn Ashur, Treatise on Maqasid al-Shariah, with a biographical introduction (sample PDF)", "https://iiit.org/wp-content/uploads/Ibn-Ashur-Treatise-on-Maqasid-Al-Shariah-Sample.pdf"],
    ["TDV İslâm Ansiklopedisi: İbn Âşûr, Muhammed Tâhir", "https://islamansiklopedisi.org.tr/ibn-asur-muhammed-tahir--1973"],
    ["TDV İslâm Ansiklopedisi: et-Tahrîr ve’t-Tenvîr", "https://islamansiklopedisi.org.tr/et-tahrir-vet-tenvir"],
    ["Tafsir Al-Qur’an (Indonesian): Mengenal Tafsir at-Tahrir wa at-Tanwir", "https://tafsiralquran.id/mengenal-tafsir-at-tahrir-wa-at-tanwir-karya-%e1%b9%adahir-ibn-ashur/", "the years 1341–1380 AH, citing al-Hamid"]
  ],
  "ibn-hajar": [
    ["Oxford Reference: Ahmad ibn Hajar al-Asqalani", "https://www.oxfordreference.com/view/10.1093/oi/authority.20110803095429356"],
    ["Islam Museum: Completion of Fath al-Bari, 842/1438", "https://www.islam.museum/en/event/fath-al-bari-complete-842/"],
    ["TDV İslâm Ansiklopedisi: İbn Hacer el-Askalânî", "https://islamansiklopedisi.org.tr/ibn-hacer-el-askalani"]
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
  "jafar": [
    ["Encyclopaedia Iranica: Jaʿfar al-Ṣādeq i. Life", "https://www.iranicaonline.org/articles/jafar-al-sadeq-i-life/"],
    ["Encyclopaedia Iranica: Jaʿfar al-Ṣādeq ii. Teachings", "https://www.iranicaonline.org/articles/jafar-al-sadeq-ii-teachings/"],
    ["Encyclopaedia Iranica: Jaʿfar al-Ṣādeq", "https://www.iranicaonline.org/articles/jafar-al-sadeq/"],
    ["Britannica: Jaʿfar al-Ṣādiq", "https://www.britannica.com/biography/Jafar-al-Sadiq"],
    ["Encyclopaedia Iranica: Ismailism xvii. The imamate in Ismailism", "https://www.iranicaonline.org/articles/ismailism-xvii-the-imamate-in-ismailism/", "his descent"]
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
  "kindi": [
    ["Biographical Encyclopedia of Astronomers (ISMI): Kindī", "https://ismi.mpiwg-berlin.mpg.de/biography/Kindi_BEA.htm"],
    ["Stanford Encyclopedia of Philosophy: al-Kindi", "https://plato.stanford.edu/entries/al-kindi/"],
    ["Oxford Academic: The rise of falsafa: al-Kindī, On First Philosophy", "https://academic.oup.com/edited-volume/38657/chapter-abstract/335767408", "Fi’l-falsafa al-ula"]
  ],
  "kubra": [
    ["TDV İslâm Ansiklopedisi: Necmeddîn-i Kübrâ", "https://islamansiklopedisi.org.tr/necmeddin-i-kubra"],
    ["Encyclopaedia Iranica: Khwarazmshahs iii", "https://www.iranicaonline.org/articles/khwarazmshah/iii-the-line-of-anustigin/", "Gurganj, 1221"],
    ["UNESCO World Heritage nomination: Kunya-Urgench", "https://whc.unesco.org/uploads/nominations/1199.pdf", "the fall of Gurganj"]
  ],
  "kulayni": [
    ["Encyclopaedia Iranica: Kolayni", "https://www.iranicaonline.org/articles/kolayni/"],
    ["TDV İslâm Ansiklopedisi: Küleynî", "https://islamansiklopedisi.org.tr/kuleyni"]
  ],
  "malik": [
    ["Britannica: Mālik ibn Anas", "https://www.britannica.com/biography/Malik-ibn-Anas"],
    ["Islam Museum: Muwaṭṭaʾ 952 (Malik transmits from Jaʿfar)", "https://www.islam.museum/en/passage/muwatta-6-952/", "the link with Jaʿfar al-Sadiq"],
    ["Routledge: Yasin Dutton, The Origins of Islamic Law (preview)", "https://api.pageplace.de/preview/DT0400.9781136110665_A23827084/preview-9781136110665_A23827084.pdf", "the birth year"]
  ],
  "marghinani": [
    ["Oxford Reference: al-Marghinani (Oxford Dictionary of Islam)", "https://www.oxfordreference.com/viewbydoi/10.1093/oi/authority.20110803100133763"],
    ["TDV İslâm Ansiklopedisi: Mergīnânî, Burhâneddin", "https://islamansiklopedisi.org.tr/merginani-burhaneddin"]
  ],
  "marjani": [
    ["Minbar. Islamic Studies 13 (2020): The works of Shihab al-Din al-Marjani on Islamic scholastic theology", "https://doi.org/10.31162/2618-9569-2020-13-1-103-116"],
    ["TDV İslâm Ansiklopedisi: Mercânî", "https://islamansiklopedisi.org.tr/mercani"]
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
  "nana-asmau": [
    ["African Studies Centre Leiden: Nana Asmaʾu", "https://www.ascleiden.nl/content/library-weekly/nana-asmau"],
    ["Oxford Academic: Asmaʾu, Nana", "https://academic.oup.com/edited-volume/61663/chapter-abstract/553437989"],
    ["Revue de la FM6OA: The life and contribution of Nana Asmaʾu", "https://www.fm6oa.org/revue/article/the-life-and-contribution-of-nana-asmau/"]
  ],
  "naqshband": [
    ["Encyclopaedia Iranica: Bahāʾ-al-Dīn Naqšband", "https://www.iranicaonline.org/articles/baha-al-din-naqsband-kaja-mohammad-b/"],
    ["Shahzad Bashir: Movement and Stillness, the Practice of Sufi Dhikr in Fourteenth-Century Central Asia (PDF)", "https://www.themathesontrust.org/papers/islam/Bashir-Movement_and_Stillness_Sufi_Dhikr.pdf", "his silent dhikr, as later biographies tell it"]
  ],
  "nasir-tusi": [
    ["Biographical Encyclopedia of Astronomers (ISMI): Ṭūsī", "https://ismi.mpiwg-berlin.mpg.de/biography/Tusi_BEA.htm"],
    ["TDV İslâm Ansiklopedisi: Tûsî, Nasîrüddin", "https://islamansiklopedisi.org.tr/tusi-nasiruddin"],
    ["Brill: al-Tadhkira fī ʿilm al-hayʾa", "https://www.degruyterbrill.com/document/isbn/9789004406476/html", "al-Tadhkira fi ilm al-hay’a"]
  ],
  "nawawi": [
    ["Islam Museum: Imam al-Nawawi", "https://www.islam.museum/en/person/al-nawawi/"],
    ["TDV İslâm Ansiklopedisi: Nevevî", "https://islamansiklopedisi.org.tr/nevevi"],
    ["Britannica: Hadith", "https://www.britannica.com/topic/Hadith", "Riyad al-salihin"]
  ],
  "nazzam": [
    ["Encyclopedia of Religion: Nazzam, al- (782–c. 840)", "https://encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/nazzam-al-782-c-840"],
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
  "qushayri": [
    ["TDV İslâm Ansiklopedisi: Kuşeyrî, Abdülkerîm b. Hevâzin", "https://islamansiklopedisi.org.tr/kuseyri-abdulkerim-b-hevazin"],
    ["Library of Congress: al-Qushayri’s Epistle on Sufism", "https://www.loc.gov/item/2021667378/", "al-Risala al-Qushayriyya"]
  ],
  "qushji": [
    ["TDV İslâm Ansiklopedisi: Ali Kuşçu", "https://www.nazariyat.org/en/issues/cilt-10-sayi-2/jamil-ragep-ali-kuscu"],
    ["TDV İslâm Ansiklopedisi: Ali Kuşçu", "https://islamansiklopedisi.org.tr/ali-kuscu"],
    ["Encyclopaedia Iranica: ʿAli Qušji", "https://www.iranicaonline.org/articles/ali-qusji-qusju-ala-al-din-ali-mohammad-theologian-and-scientist-d/", "the teacher link"],
    ["Biographical Encyclopedia of Astronomers (ISMI): Qūshjī", "https://ismi.mpiwg-berlin.mpg.de/biography/Qushji_BEA.htm", "the teacher link"]
  ],
  "rabia": [
    ["TDV İslâm Ansiklopedisi: Râbia el-Adeviyye", "https://islamansiklopedisi.org.tr/rabia-el-adeviyye"],
    ["Britannica: Sufism: history", "https://www.britannica.com/topic/Sufism/History", "Rabiʿa and the love of God"]
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
    ["Aligarh Muslim University: History", "https://www.amu.ac.in/about-us/history", "the 1875 school and the 1877 college"]
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
  "sibawayh": [
    ["TDV İslâm Ansiklopedisi: Sîbeveyhi (PDF)", "https://cdn2.islamansiklopedisi.org.tr/dosya/37/C37012166.pdf"],
    ["Cambridge University Press: Sibawayh on ʾimālah (inclination), introduction", "https://www.cambridge.org/core/books/abs/sibawayh-on-imalah-inclination/introduction/E4F1EEBAD490F2F81F178123E111A2AF", "the birth year"],
    ["Bulletin of SOAS: The Greek Death of Sībawayhi and the Origins of Arabic Grammar", "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/C8835A0E868FCC1CC496978766678CF2/S0041977X22000593a.pdf/the-greek-death-of-sibawayhi-and-the-origins-of-arabic-grammar.pdf", "the reports of his Baghdad debate and death in Persia"]
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
    ["Islam Museum: The Qur’an as the speech of God (in the Tahawi creed)", "https://www.islam.museum/en/concept/kalam-allah/"],
    ["TDV İslâm Ansiklopedisi: Tahâvî", "https://islamansiklopedisi.org.tr/tahavi"]
  ],
  "tahtawi": [
    ["Britannica: Rifāʿah Rāfiʿ al-Ṭahṭāwī", "https://www.britannica.com/biography/Rifaah-Rafi-al-Tahtawi"],
    ["TDV İslâm Ansiklopedisi: Rifâa et-Tahtâvî", "https://islamansiklopedisi.org.tr/rifaa-et-tahtavi"]
  ],
  "tirmidhi": [
    ["Britannica: al-Tirmidhī", "https://www.britannica.com/biography/al-Tirmidhi"],
    ["TDV İslâm Ansiklopedisi: Tirmizî", "https://islamansiklopedisi.org.tr/tirmizi"]
  ],
  "ulugh-beg": [
    ["Biographical Encyclopedia of Astronomers (ISMI): Ulugh Beg", "https://ismi.mpiwg-berlin.mpg.de/index.php/biography/Ulugh_Beg_BEA.htm"]
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
  "zamakhshari": [
    ["Britannica: al-Kashshāf ʿan ḥaqāʾiq al-tanzīl", "https://www.britannica.com/topic/Al-Kashshafan-Haqaiq-at-Tanzil"],
    ["TDV İslâm Ansiklopedisi: Zemahşerî", "https://islamansiklopedisi.org.tr/zemahseri"]
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
    ["Cambridge: On the origins of the Iranian constitution: Muhammad Baqer as-Sadr’s 1979 treatises", "https://www.cambridge.org/core/books/abs/renewal-of-islamic-law/on-the-origins-of-the-iranian-constitution-muhammad-baqer-assadrs-1979-treatises/14AAE2F71556206A90354B9AAC09A5A4"]
  ],
  "debate:created-quran": [
    ["Britannica: miḥnah", "https://www.britannica.com/topic/mihnah"],
    ["Islam Museum: The Qur’an as the speech of God (in the Tahawi creed)", "https://www.islam.museum/en/concept/kalam-allah/"],
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
    ["Oxford Academic: Coercion and Moral Agency in Ashʿarism", "https://academic.oup.com/book/10075/chapter-abstract/157534748"]
  ],
  "debate:good-evil": [
    ["Britannica: Muʿtazilah", "https://www.britannica.com/topic/Mutazilah"],
    ["TDV İslâm Ansiklopedisi: Hüsün ve kubuh", "https://islamansiklopedisi.org.tr/husun-ve-kubuh"],
    ["Kader: Moral obligation and natural law in al-Māturīdī", "https://dergipark.org.tr/en/pub/kaderdergi/article/1468241", "the Maturidi position"]
  ],
  "debate:hadith-criticism": [
    ["Britannica: ʿilm al-ḥadīth", "https://www.britannica.com/topic/ilm-al-hadith"],
    ["Britannica: isnād", "https://www.britannica.com/topic/isnad"],
    ["Islam Museum: Abu Dawud al-Sijistani", "https://www.islam.museum/en/person/abu-dawud-al-sijistani/"]
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
    ["Britannica: taqlīd", "https://www.britannica.com/topic/taqlid"]
  ],
  "debate:imamate": [
    ["Britannica: imamate", "https://www.britannica.com/topic/imamate"],
    ["Britannica: Khārijite", "https://www.britannica.com/topic/Kharijite"],
    ["Britannica: Caliphate", "https://www.britannica.com/place/Caliphate"]
  ],
  "debate:maqasid": [
    ["TDV İslâm Ansiklopedisi: Makāsıdü’ş-şerîa", "https://islamansiklopedisi.org.tr/makasidus-seria"],
    ["Stanford Encyclopedia of Philosophy: al-Ghazali", "https://plato.stanford.edu/entries/al-ghazali/", "al-Ghazali’s five necessities"]
  ],
  "debate:philosophy": [
    ["Stanford Encyclopedia of Philosophy: Arabic and Islamic philosophy of religion", "https://plato.stanford.edu/entries/arabic-islamic-religion/"],
    ["Stanford Encyclopedia of Philosophy: al-Ghazali", "https://plato.stanford.edu/entries/al-ghazali/"],
    ["Stanford Encyclopedia of Philosophy: Ibn Rushd", "https://plato.stanford.edu/entries/ibn-rushd/"]
  ],
  "debate:reason-law": [
    ["Britannica: qiyas", "https://www.britannica.com/topic/qiyas"],
    ["Britannica: sharia: development of the schools of law", "https://www.britannica.com/topic/sharia/Development-of-different-schools-of-law"]
  ],
  "debate:reform": [
    ["Britannica: Activities of the Jadid reformers", "https://www.britannica.com/topic/Activities-of-the-Jadid-reformers-1707518"],
    ["Britannica: Salafi movement", "https://www.britannica.com/topic/Salafi-movement"]
  ],
  "debate:renewal": [
    ["Britannica: Islamic world: reform from 1683", "https://www.britannica.com/topic/Islamic-world/Islamic-history-from-1683-to-the-present-reform-dependency-and-recovery"],
    ["Britannica: Wahhābī", "https://www.britannica.com/topic/Wahhabi"],
    ["Oxford Academic: Asmaʾu, Nana", "https://academic.oup.com/edited-volume/61663/chapter-abstract/553437989"]
  ],
  "debate:sama": [
    ["Britannica: samāʿ", "https://www.britannica.com/topic/sama-Sufi-religious-practice"],
    ["Institute of Ismaili Studies: Leonard Lewisohn, The Sacred Music of Islam, Samaʿ in the Persian Sufi Tradition (PDF)", "https://iis.ac.uk/wp-content/uploads/2024/10/the-sacred-music-of-islam_pdf-366408512.pdf"],
    ["Shahzad Bashir: Movement and Stillness, the Practice of Sufi Dhikr in Fourteenth-Century Central Asia (PDF)", "https://www.themathesontrust.org/papers/islam/Bashir-Movement_and_Stillness_Sufi_Dhikr.pdf"],
    ["Religions (2023): pre-modern Muslim treatments of listening to music (samāʿ)", "https://www2.mdpi.com/2077-1444/14/6/780"]
  ],
  "debate:sufism-law": [
    ["Britannica: Sufism: history", "https://www.britannica.com/topic/Sufism/History"],
    ["Encyclopaedia Iranica: Ḥallāj, Abu’l-Moḡiṯ Ḥosayn", "https://www.iranicaonline.org/articles/hallaj/"]
  ],
  "debate:tafsir": [
    ["Britannica: tafsīr", "https://www.britannica.com/topic/tafsir"],
    ["Britannica: Qurʾān: interpretation", "https://www.britannica.com/topic/Quran/Interpretation"]
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
    ["Britannica: Buyid dynasty", "https://www.britannica.com/topic/Buyid-dynasty"]
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
    ["Islam Museum: Battle of the Camel", "https://islam.museum/en/event/battle-of-the-camel/"],
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
    ["Britannica: Mongol empire", "https://www.britannica.com/place/Mongol-empire"]
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
    ["Islam Museum: The first revelation", "https://www.islam.museum/en/event/first-revelation/"],
    ["TDV İslâm Ansiklopedisi: Muhammed", "https://islamansiklopedisi.org.tr/muhammed"]
  ],
  "event:safavids": [
    ["Britannica: Safavid dynasty", "https://www.britannica.com/topic/Safavid-dynasty"],
    ["Britannica: Ismāʿīl I", "https://www.britannica.com/biography/Ismail-I-shah-of-Iran"]
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
  "thread:caliphate-modern:1930": [
    ["Iqbal, Reconstruction: Lecture VI (1934 edition, PDF at archipress.org)", "https://archipress.org/docs/pdf/iqbalreconstruction.pdf"]
  ],
  "thread:caliphate-modern:1979": [
    ["Cambridge: On the origins of the Iranian constitution: Muhammad Baqer as-Sadr’s 1979 treatises", "https://www.cambridge.org/core/books/abs/renewal-of-islamic-law/on-the-origins-of-the-iranian-constitution-muhammad-baqer-assadrs-1979-treatises/14AAE2F71556206A90354B9AAC09A5A4"]
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
  "thread:hadith-criticism:1438": [
    ["Islam Museum: Completion of Fath al-Bari, 842/1438", "https://www.islam.museum/en/event/fath-al-bari-complete-842/"]
  ],
  "thread:hadith-criticism:745": [
    ["Akram Nadwi: The Status of Muhammad ibn Ishaq, Authority in Maghazi", "https://akramnadwi.com/?p=3561"],
    ["Britannica: Ibn Isḥāq", "https://www.britannica.com/biography/Ibn-Ishaq"]
  ],
  "thread:hadith-criticism:846": [
    ["Britannica: al-Bukhārī", "https://www.britannica.com/biography/al-Bukhari"],
    ["TDV İslâm Ansiklopedisi: el-Câmiu’s-sahîh", "https://islamansiklopedisi.org.tr/el-camius-sahih--buhari"],
    ["Library of Congress: The Fourth Volume of al-Bukhari’s Collection of Authentic Hadiths", "https://www.loc.gov/item/2021667384/", "the date 846"]
  ],
  "thread:ijaz:1070": [
    ["JILSA (PDF): ʿAbd al-Qāhir al-Jurjānī on Qur’anic nazm and his criticism of ṣarfa", "https://jurnalfahum.uinsa.ac.id/index.php/jilsa/article/download/1432/584"]
  ],
  "thread:ijaz:1134": [
    ["Oxford Handbook of Qur’anic Studies: Muhammad Abdel Haleem, Rhetorical Devices and Stylistic Features of Qur’anic Grammar (PDF)", "https://soas-repository.worktribe.com/OutputFile/365441"]
  ],
  "thread:ijaz:850": [
    ["DergiPark (PDF): al-Naẓẓām’s ṣarfa and al-Jāḥiẓ on the inimitability of the Qur’an", "https://dergipark.org.tr/en/download/article-file/4746272"]
  ],
  "thread:ijaz:985": [
    ["McGill (MA thesis): Yusuf Rahman, The Miraculous Nature of Muslim Scripture, a Study of ʿAbd al-Jabbār’s Iʿjāz al-Qurʾān", "https://escholarship.mcgill.ca/downloads/6w924d79j"],
    ["Religions (2025): theories of Qur’anic inimitability after ʿAbd al-Jabbār", "https://www.mdpi.com/2077-1444/16/12/1584", "the volume of al-Mughni on iʿjāz"]
  ],
  "thread:imamate:632": [
    ["Britannica: Abū Bakr", "https://www.britannica.com/biography/Abu-Bakr"]
  ],
  "thread:imamate:680": [
    ["Britannica: Battle of Karbala", "https://www.britannica.com/event/Battle-of-Karbala"]
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
  "thread:philosophy:1377": [
    ["Britannica: Ibn Khaldūn, the Muqaddimah", "https://www.britannica.com/biography/Ibn-Khaldun/The-Muqaddimah-Ibn-Khalduns-philosophy-of-history"],
    ["CEEOL: Haris Dubravac, About Limitations of Intellect, Ibn Khaldūn’s Criticism of Philosophy", "https://ceeol.com/search/article-detail?id=1176198"],
    ["Encyclopedia.com: Ibn Khaldūn", "https://encyclopedia.com/topic/Ibn_Khaldun.aspx", "completion in 1377"]
  ],
  "thread:philosophy:838": [
    ["Oxford Academic: The rise of falsafa: al-Kindī, On First Philosophy", "https://academic.oup.com/edited-volume/38657/chapter-abstract/335767408"],
    ["Stanford Encyclopedia of Philosophy: al-Kindi", "https://plato.stanford.edu/entries/al-kindi/"]
  ],
  "thread:philosophy:920": [
    ["DergiPark (PDF): Abu Hatim al-Razi’s responses to Abu Bakr al-Razi on prophecy in Aʿlam al-nubuwwa", "https://dergipark.org.tr/tr/download/article-file/918787"],
    ["Stanford Encyclopedia of Philosophy: Abu Bakr al-Razi", "https://plato.stanford.edu/entries/abu-bakr-al-razi/", "Abu Hatim’s account of their debates and its reliability"]
  ],
  "thread:reason-law:815": [
    ["TDV İslâm Ansiklopedisi: Şâfiî", "https://islamansiklopedisi.org.tr/safii"]
  ],
  "thread:reform:1875": [
    ["Aligarh Muslim University: History", "https://www.amu.ac.in/about-us/history"]
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
  "thread:renewal:1840": [
    ["Revue de la FM6OA: The life and contribution of Nana Asmaʾu", "https://www.fm6oa.org/revue/article/the-life-and-contribution-of-nana-asmau/"],
    ["Brill: Sufi Feminism, Women Leaders in African Sufi Movements", "https://doi.org/10.1163/15700666-12340258"]
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
    ["EBSCO Research Starters: Sufi Order Mawlawiyah", "https://ebsco.com/research-starters/history/sufi-order-mawlawiyah", "Rumi beginning the ritual"]
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
  "thread:sufism-law:1127": [
    ["Encyclopedia of the Modern Middle East: Qadiriyya Order", "https://encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/qadiriyya-order"],
    ["Britannica: ʿAbd al-Qādir al-Jīlānī", "https://www.britannica.com/biography/Abd-al-Qadir-al-Jilani", "first preaching in 1127"]
  ],
  "thread:tafsir:1134": [
    ["Brill: Andrew Lane, A Traditional Muʿtazilite Qurʾān Commentary", "https://brill.com/display/book/9789047417767/front-4.pdf", "the completion date, 23 Rabiʿ II 528 (20 February 1134) at Mecca"]
  ],
  "thread:tafsir:1466": [
    ["Islam Museum: Al-Suyuti completes Tafsir al-Jalalayn, 870/1466", "https://www.islam.museum/en/event/al-suyuti-completes-tafsir-al-jalalayn-870/"]
  ],
  "thread:tafsir:1960": [
    ["Tafsir Al-Qur’an (Indonesian): Mengenal Tafsir at-Tahrir wa at-Tanwir", "https://tafsiralquran.id/mengenal-tafsir-at-tahrir-wa-at-tanwir-karya-%e1%b9%adahir-ibn-ashur/", "the years 1341–1380 AH, citing al-Hamid"],
    ["TDV İslâm Ansiklopedisi: et-Tahrîr ve’t-Tenvîr", "https://islamansiklopedisi.org.tr/et-tahrir-vet-tenvir", "the first complete printing in 1984"]
  ],
  "thread:tafsir:1972": [
    ["Encyclopaedia Iranica: Ṭabāṭabāʾi, Moḥammad-Ḥosayn", "https://www.iranicaonline.org/articles/tabatabai-mohammad-hosayn/", "its writing between 1955 and 1972"]
  ],
  "thread:unity-being:1229": [
    ["Stanford Encyclopedia of Philosophy: Ibn Arabi", "https://plato.stanford.edu/entries/ibn-arabi/"]
  ]
};
