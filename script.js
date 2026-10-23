// CDFiles: artifact descriptions, historical significance, and research connections are taken from RPH WEBSITE INPUTS (2).docx.
// Artifact photos use assets/images/artifacts/<artifact-slug>.jpg; matching sign photos use assets/images/signage/<artifact-slug>-sign.jpg. Add both files to enable the flip interaction.

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const destinations = [
  {
    "id": "fine-arts",
    "name": "National Museum of Fine Arts",
    "short": "Art as a historical record",
    "location": "Padre Burgos Avenue, Ermita, Manila",
    "category": "Museum",
    "image": "assets/images/destinations/fine-arts.jpg",
    "video": "assets/videos/fine-arts.mp4",
    "description": "Look closely at artworks and personal objects connected to Filipino artists, history, and national identity.",
    "map": "National Museum of Fine Arts Manila",
    "artifactSite": "National Museum of Fine Arts"
  },
  {
    "id": "anthropology",
    "name": "National Museum of Anthropology",
    "short": "Culture, communities, and heritage",
    "location": "Agrifina Circle, Rizal Park, Manila",
    "category": "Museum",
    "image": "assets/images/destinations/anthropology.jpg",
    "video": "assets/videos/anthropology.mp4",
    "description": "Explore cultural objects that show early Filipino writing, trade, beliefs, textiles, and community life.",
    "map": "National Museum of Anthropology Manila",
    "artifactSite": "National Museum of Anthropology"
  },
  {
    "id": "natural-history",
    "name": "National Museum of Natural History",
    "short": "The natural world of the Philippines",
    "location": "Agrifina Circle, Rizal Park, Manila",
    "category": "Museum",
    "image": "assets/images/destinations/natural-history.jpg",
    "video": "assets/videos/natural-history.mp4",
    "description": "Discover Philippine wildlife and consider the importance of understanding and protecting the country’s natural heritage.",
    "map": "National Museum of Natural History Manila",
    "artifactSite": "National Museum of Natural History"
  },
  {
    "id": "intramuros",
    "name": "Intramuros",
    "short": "The Walled City of Manila",
    "location": "Intramuros, Manila, Philippines",
    "category": "Historic District",
    "image": "assets/images/destinations/intramuros.jpg",
    "video": "assets/videos/intramuros.mp4",
    "description": "Explore historic streets, churches, defensive structures, and sites connected to colonial rule and the struggle for freedom.",
    "map": "Intramuros, Manila",
    "artifactSite": "Intramuros"
  },
  {
    "id": "fort",
    "name": "Fort Santiago",
    "short": "A fortress, shrine, and witness to the struggle for freedom",
    "location": "Intramuros, Manila, Philippines",
    "category": "Historic Site",
    "image": "assets/images/destinations/fort-santiago.jpg",
    "video": "assets/videos/fort-santiago.mp4",
    "description": "Explore the historic fortress connected to Rajah Sulayman’s Maynila, colonial rule, José Rizal’s imprisonment, and the victims of World War II.",
    "map": "Fort Santiago, Intramuros, Manila",
    "artifactSite": "Fort Santiago"
  }
];

const artifacts = [
  {
    "n": 1,
    "name": "Manila Cathedral",
    "description": "The Manila Cathedral is a historic church in Intramuros, Manila, known for its large stone arches, statues of saints, and clock tower. Built in 1571 out of wood and bamboo, it became the main church of Manila in 1579. Over time, fires, earthquakes, and World War II destroyed it multiple times. The church standing today is the eighth version, built in the 1950s by architect Fernando Ocampo.",
    "significance": "As the main seat of the Catholic Church in Manila, this landmark was the center of religious power during Spanish rule. It played a big role in spreading Christianity across the Philippines. Today, it stands as a symbol of Filipino faith and ability to rebuild after disasters.",
    "research": "Historical records show that the cathedral survived eight rebuilds, with major earthquakes in 1600, 1645, and 1863 destroying parts of the church before bombs flattened it in 1945. It connects directly to the Cavite Mutiny of 1872 because two of the executed Gomburza priests, Fr. José Burgos and Fr. Jacinto Zamora, worked right at this cathedral. When they were executed, the Archbishop ordered the cathedral bells to ring for them, an event that inspired Jose Rizal and helped spark the First Cry of Revolution .",
    "site": "Fort Santiago",
    "category": "Historic Site",
    "id": 1,
    "image": "assets/images/artifacts/manila-cathedral.jpg",
    "signage": "assets/images/signage/manila-cathedral-sign.jpg",
    "summary": "The Manila Cathedral is a historic church in Intramuros, Manila, known for its large stone arches, statues of saints, and clock tower. Built in 1571 out of wood and bamboo, it…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.1 Manila Cathedral.",
    "official": "The Manila Cathedral is a historic church in Intramuros, Manila, known for its large stone arches, statues of saints, and clock tower. Built in 1571 out of wood and bamboo, it became the main church of Manila in 1579. Over time, fires, earthquakes, and World War II destroyed it multiple times. The church standing today is the eighth version, built in the 1950s by architect Fernando Ocampo.",
    "analysis": "As the main seat of the Catholic Church in Manila, this landmark was the center of religious power during Spanish rule. It played a big role in spreading Christianity across the Philippines. Today, it stands as a symbol of Filipino faith and ability to rebuild after disasters.",
    "reflection": "Historical records show that the cathedral survived eight rebuilds, with major earthquakes in 1600, 1645, and 1863 destroying parts of the church before bombs flattened it in 1945. It connects directly to the Cavite Mutiny of 1872 because two of the executed Gomburza priests, Fr. José Burgos and Fr. Jacinto Zamora, worked right at this cathedral. When they were executed, the Archbishop ordered the cathedral bells to ring for them, an event that inspired Jose Rizal and helped spark the First Cry of Revolution .",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "manila-cathedral",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image26.jpg",
    "sourceSignageFile": "image43.jpg"
  },
  {
    "n": 2,
    "name": "Palacio del Gobernador",
    "description": "The Palacio del Gobernador is a historic government building facing Plaza de Roma across from Manila Cathedral in Intramuros, Manila. During the Spanish period, it served as the official residence and office of the Governor-General of the Philippines starting in the late 16th century. The original palace was destroyed by a powerful earthquake in 1863, forcing the Governor-General to move to Malacañang Palace. The present modern building was built in the late 1970s on the same historic spot and currently houses government offices, including the Commission on Elections (COMELEC) and the Intramuros Administration.",
    "significance": "This location was the center of Spanish political authority and administrative power in the Philippines for nearly 300 years. Important decisions affecting the entire archipelago (including military orders, tax policies, and official decrees) were issued from this site. It represents the political hub of Spanish rule in Intramuros.",
    "research": "Historical research shows that after the devastating 1863 earthquake destroyed the original palace, the site sat in ruins for over a century until its reconstruction in 1978. In terms of Topic connections, this site is directly tied to the Cavite Mutiny of 1872 and Jose Rizal . Governor-General Rafael de Izquierdo ruled from Manila during the mutiny and signed the execution order for the three priests ( Gomburza ) . Additionally, when Jose Rizal was arrested in 1896, he was brought to this location to face Governor-General Camilo de Polavieja, who eventually signed Rizal's death sentence (an action that triggered the widespread escalation of the First Cry of Revolution ).",
    "site": "Intramuros",
    "category": "Historic Site",
    "id": 2,
    "image": "assets/images/artifacts/palacio-del-gobernador.jpg",
    "signage": "assets/images/signage/palacio-del-gobernador-sign.jpg",
    "summary": "The Palacio del Gobernador is a historic government building facing Plaza de Roma across from Manila Cathedral in Intramuros, Manila. During the Spanish period, it served as…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.2 Palacio del Gobernador.",
    "official": "The Palacio del Gobernador is a historic government building facing Plaza de Roma across from Manila Cathedral in Intramuros, Manila. During the Spanish period, it served as the official residence and office of the Governor-General of the Philippines starting in the late 16th century. The original palace was destroyed by a powerful earthquake in 1863, forcing the Governor-General to move to Malacañang Palace. The present modern building was built in the late 1970s on the same historic spot and currently houses government offices, including the Commission on Elections (COMELEC) and the Intramuros Administration.",
    "analysis": "This location was the center of Spanish political authority and administrative power in the Philippines for nearly 300 years. Important decisions affecting the entire archipelago (including military orders, tax policies, and official decrees) were issued from this site. It represents the political hub of Spanish rule in Intramuros.",
    "reflection": "Historical research shows that after the devastating 1863 earthquake destroyed the original palace, the site sat in ruins for over a century until its reconstruction in 1978. In terms of Topic connections, this site is directly tied to the Cavite Mutiny of 1872 and Jose Rizal . Governor-General Rafael de Izquierdo ruled from Manila during the mutiny and signed the execution order for the three priests ( Gomburza ) . Additionally, when Jose Rizal was arrested in 1896, he was brought to this location to face Governor-General Camilo de Polavieja, who eventually signed Rizal's death sentence (an action that triggered the widespread escalation of the First Cry of Revolution ).",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "palacio-del-gobernador",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image50.jpg",
    "sourceSignageFile": "image56.jpg"
  },
  {
    "n": 3,
    "name": "Baluartillo de San Francisco Javier",
    "description": "The Baluartillo de San Francisco Javier is a small stone fortification built to protect Fort Santiago against military attacks coming from Manila Bay. It was first constructed as a wall after an earthquake destroyed the original rampart in 1645. Over time, it served as the Manila Arsenal during the American period, was used as military barracks by Japanese forces during World War II, and was restored in the late 20th century to serve as the Intramuros Visitors Center. Today, it stands as part of the Intramuros fortifications, recognized as a National Cultural Treasure.",
    "significance": "This site highlights how Fort Santiago was continuously altered and fortified to protect Manila from external naval invasions across different colonial eras. Its changing uses (from a Spanish defense wall to an American arsenal and a Japanese military base) reflect the shifting foreign powers that ruled the Philippines.",
    "research": "Historical records show that this fortification was named after Saint Francis Xavier, the famous Jesuit missionary, reflecting the deep influence of religious orders on Spanish military and civilian architecture. In terms of Topic connections, this fortification directly connects to the First Cry of Revolution . Fort Santiago and its surrounding fortifications served as the central military stronghold where Spanish forces imprisoned Katipuneros and revolutionaries (most famously Jose Rizal before his execution) as the Spanish government tried to crush the rising revolution sparked by Andres Bonifacio and the Katipunan.",
    "site": "Fort Santiago",
    "category": "Historic Site",
    "id": 3,
    "image": "assets/images/artifacts/baluartillo-de-san-francisco-javier.jpg",
    "signage": "assets/images/signage/baluartillo-de-san-francisco-javier-sign.jpg",
    "summary": "The Baluartillo de San Francisco Javier is a small stone fortification built to protect Fort Santiago against military attacks coming from Manila Bay. It was first constructed…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.3 Baluartillo de San Francisco Javier.",
    "official": "The Baluartillo de San Francisco Javier is a small stone fortification built to protect Fort Santiago against military attacks coming from Manila Bay. It was first constructed as a wall after an earthquake destroyed the original rampart in 1645. Over time, it served as the Manila Arsenal during the American period, was used as military barracks by Japanese forces during World War II, and was restored in the late 20th century to serve as the Intramuros Visitors Center. Today, it stands as part of the Intramuros fortifications, recognized as a National Cultural Treasure.",
    "analysis": "This site highlights how Fort Santiago was continuously altered and fortified to protect Manila from external naval invasions across different colonial eras. Its changing uses (from a Spanish defense wall to an American arsenal and a Japanese military base) reflect the shifting foreign powers that ruled the Philippines.",
    "reflection": "Historical records show that this fortification was named after Saint Francis Xavier, the famous Jesuit missionary, reflecting the deep influence of religious orders on Spanish military and civilian architecture. In terms of Topic connections, this fortification directly connects to the First Cry of Revolution . Fort Santiago and its surrounding fortifications served as the central military stronghold where Spanish forces imprisoned Katipuneros and revolutionaries (most famously Jose Rizal before his execution) as the Spanish government tried to crush the rising revolution sparked by Andres Bonifacio and the Katipunan.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "baluartillo-de-san-francisco-javier",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image60.jpg",
    "sourceSignageFile": "image52.jpg"
  },
  {
    "n": 4,
    "name": "Fort Santiago",
    "description": "The main gate of Fort Santiago is the most iconic structure of the entire Intramuros fortress, featuring a relief carving of Saint James the Moor-Slayer ( Santiago Matamoros ) on horseback above the archway. Originally built in 1571 by Spanish conquistador Miguel López de Legazpi over the site of Rajah Sulayman's former wooden palisade, the site was burned during the attack of the Chinese pirate Limahong in 1574 and subsequently rebuilt using volcanic tuff ( adobe ) between 1590 and 1593. Serving as the main military citadel in Manila, it housed the military forces of four foreign powers: Spain, Great Britain, the United States, and Japan. Destroyed during World War II, the famous gate was meticulously restored and is now designated as a National Shrine, National Monument, and National Cultural Treasure.",
    "significance": "As the defensive core of Spanish colonial rule in Manila, Fort Santiago stood as the ultimate symbol of foreign power and military authority in the Philippines. Its main gate represents both the doorway to colonial oppression (where countless Filipino political prisoners were detained and executed) and the central landmark of the nation's long struggle for freedom.",
    "research": "Historical records show that before Spanish colonization, this site was the fortified kingdom of Rajah Sulayman, proving that native Filipinos already possessed defensive structures and governance models prior to European contact, as recorded in the Customs of the Tagalog . Fort Santiago is also the exact site where Jose Rizal was imprisoned in 1896 prior to his trial and execution, making it the central location where he spent his final days writing Mi Último Adiós and where debates surrounding the controversial Retraction of Rizal took place. Ultimately, the imprisonment and martyrdom of Rizal inside Fort Santiago served as the ultimate catalyst that united Filipinos and propelled the Katipunan to launch the First Cry of Revolution .",
    "site": "Intramuros",
    "category": "Historic Site",
    "id": 4,
    "image": "assets/images/artifacts/fort-santiago.jpg",
    "signage": "assets/images/signage/fort-santiago-sign.jpg",
    "summary": "The main gate of Fort Santiago is the most iconic structure of the entire Intramuros fortress, featuring a relief carving of Saint James the Moor-Slayer ( Santiago Matamoros )…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.4 Fort Santiago.",
    "official": "The main gate of Fort Santiago is the most iconic structure of the entire Intramuros fortress, featuring a relief carving of Saint James the Moor-Slayer ( Santiago Matamoros ) on horseback above the archway. Originally built in 1571 by Spanish conquistador Miguel López de Legazpi over the site of Rajah Sulayman's former wooden palisade, the site was burned during the attack of the Chinese pirate Limahong in 1574 and subsequently rebuilt using volcanic tuff ( adobe ) between 1590 and 1593. Serving as the main military citadel in Manila, it housed the military forces of four foreign powers: Spain, Great Britain, the United States, and Japan. Destroyed during World War II, the famous gate was meticulously restored and is now designated as a National Shrine, National Monument, and National Cultural Treasure.",
    "analysis": "As the defensive core of Spanish colonial rule in Manila, Fort Santiago stood as the ultimate symbol of foreign power and military authority in the Philippines. Its main gate represents both the doorway to colonial oppression (where countless Filipino political prisoners were detained and executed) and the central landmark of the nation's long struggle for freedom.",
    "reflection": "Historical records show that before Spanish colonization, this site was the fortified kingdom of Rajah Sulayman, proving that native Filipinos already possessed defensive structures and governance models prior to European contact, as recorded in the Customs of the Tagalog . Fort Santiago is also the exact site where Jose Rizal was imprisoned in 1896 prior to his trial and execution, making it the central location where he spent his final days writing Mi Último Adiós and where debates surrounding the controversial Retraction of Rizal took place. Ultimately, the imprisonment and martyrdom of Rizal inside Fort Santiago served as the ultimate catalyst that united Filipinos and propelled the Katipunan to launch the First Cry of Revolution .",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "fort-santiago",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image21.jpg",
    "sourceSignageFile": "image46.jpg"
  },
  {
    "n": 5,
    "name": "Shrine of Rizal",
    "description": "The Rizal Shrine at Fort Santiago consists of the brick ruins of the former Spanish military barracks ( Kuwartel ) originally built in 1593. It is famously known as the site where Dr. Jose Rizal was imprisoned from November 3 to December 30, 1896, prior to his execution at Bagumbayan (now Rizal Park). The area was officially declared a National Shrine in 1951, repromoted in 1973, and is maintained by the National Historical Commission of the Philippines (NHCP) to preserve Rizal's memorabilia, writings, and final moments.",
    "significance": "This site holds supreme national significance as the sacred ground where the Philippine national hero spent his final days under Spanish captivity. It was inside these brick walls that Rizal composed his farewell poem, Mi Último Adiós , reflecting his deep love for the motherland and solidifying his role as the spiritual voice of the Philippine national movement.",
    "research": "Historical records show that during his imprisonment here, Rizal was subjected to military trial by Spanish authorities who accused him of inciting rebellion. This location connects directly to the Topic topic on the Retraction of Rizal , as it was within these quarters that Spanish Jesuits allegedly presented Rizal with a document to retract his anti-clerical writings just hours before his execution (a document that remains one of the most debated topics in Philippine historiography) . Furthermore, Rizal’s imprisonment and eventual execution from this site served as the ultimate moral catalyst that validated the Katipunan's fight, fueling the fire behind the First Cry of Revolution .",
    "site": "Fort Santiago",
    "category": "Historic Site",
    "id": 5,
    "image": "assets/images/artifacts/shrine-of-rizal.jpg",
    "signage": "assets/images/signage/shrine-of-rizal-sign.jpg",
    "summary": "The Rizal Shrine at Fort Santiago consists of the brick ruins of the former Spanish military barracks ( Kuwartel ) originally built in 1593. It is famously known as the site…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.5 Shrine of Rizal.",
    "official": "The Rizal Shrine at Fort Santiago consists of the brick ruins of the former Spanish military barracks ( Kuwartel ) originally built in 1593. It is famously known as the site where Dr. Jose Rizal was imprisoned from November 3 to December 30, 1896, prior to his execution at Bagumbayan (now Rizal Park). The area was officially declared a National Shrine in 1951, repromoted in 1973, and is maintained by the National Historical Commission of the Philippines (NHCP) to preserve Rizal's memorabilia, writings, and final moments.",
    "analysis": "This site holds supreme national significance as the sacred ground where the Philippine national hero spent his final days under Spanish captivity. It was inside these brick walls that Rizal composed his farewell poem, Mi Último Adiós , reflecting his deep love for the motherland and solidifying his role as the spiritual voice of the Philippine national movement.",
    "reflection": "Historical records show that during his imprisonment here, Rizal was subjected to military trial by Spanish authorities who accused him of inciting rebellion. This location connects directly to the Topic topic on the Retraction of Rizal , as it was within these quarters that Spanish Jesuits allegedly presented Rizal with a document to retract his anti-clerical writings just hours before his execution (a document that remains one of the most debated topics in Philippine historiography) . Furthermore, Rizal’s imprisonment and eventual execution from this site served as the ultimate moral catalyst that validated the Katipunan's fight, fueling the fire behind the First Cry of Revolution .",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "shrine-of-rizal",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image25.jpg",
    "sourceSignageFile": "image40.jpg"
  },
  {
    "n": 6,
    "name": "The White Cross",
    "description": "The White Cross Memorial is a large marble cross erected over a mass grave within the grounds of Fort Santiago. Below this cross rest the remains of approximately 600 Filipino and American civilians and soldiers who were imprisoned, tortured, and starved or executed by the Japanese Imperial Army inside the subterranean dungeons of Fort Santiago during the final days of World War II in 1945. A marker displaying \"St. Gertrude's Prayer\" stands beside the fenced memorial as a dedicated site of remembrance and prayer for these victims.",
    "significance": "This memorial stands as a solemn reminder of the horrific atrocities committed during World War II, specifically during the Battle of Manila in 1945. It marks the grave of hundreds of unknown victims, symbolizing the price paid by Filipinos for freedom and the immense suffering endured under foreign military occupation.",
    "research": "Historical research shows that when American and Filipino liberating forces reached Fort Santiago in February 1945, they discovered the padlocked dungeons packed with decomposing bodies, as Japanese guards had abandoned the prisoners to die of suffocation and starvation during the heavy shelling of Manila. In terms of topic connections, this site highlights how Fort Santiago continuously served as a place of martyrdom across different colonial regimes from the Spanish authorities who executed revolutionaries following the First Cry of Revolution , to the Japanese military in WWII. Furthermore, the presence of religious prayer markers like \"St. Gertrude's Prayer\" at this tragedy site illustrates the enduring legacy of Christian faith, which was first introduced during the First Easter Sunday Mass in Limasawa and became deeply ingrained in Filipino traditions when facing grief and remembering the dead.",
    "site": "Fort Santiago",
    "category": "Historic Site",
    "id": 6,
    "image": "assets/images/artifacts/the-white-cross.jpg",
    "signage": "assets/images/signage/the-white-cross-sign.jpg",
    "summary": "The White Cross Memorial is a large marble cross erected over a mass grave within the grounds of Fort Santiago. Below this cross rest the remains of approximately 600 Filipino…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.6 The White Cross.",
    "official": "The White Cross Memorial is a large marble cross erected over a mass grave within the grounds of Fort Santiago. Below this cross rest the remains of approximately 600 Filipino and American civilians and soldiers who were imprisoned, tortured, and starved or executed by the Japanese Imperial Army inside the subterranean dungeons of Fort Santiago during the final days of World War II in 1945. A marker displaying \"St. Gertrude's Prayer\" stands beside the fenced memorial as a dedicated site of remembrance and prayer for these victims.",
    "analysis": "This memorial stands as a solemn reminder of the horrific atrocities committed during World War II, specifically during the Battle of Manila in 1945. It marks the grave of hundreds of unknown victims, symbolizing the price paid by Filipinos for freedom and the immense suffering endured under foreign military occupation.",
    "reflection": "Historical research shows that when American and Filipino liberating forces reached Fort Santiago in February 1945, they discovered the padlocked dungeons packed with decomposing bodies, as Japanese guards had abandoned the prisoners to die of suffocation and starvation during the heavy shelling of Manila. In terms of topic connections, this site highlights how Fort Santiago continuously served as a place of martyrdom across different colonial regimes from the Spanish authorities who executed revolutionaries following the First Cry of Revolution , to the Japanese military in WWII. Furthermore, the presence of religious prayer markers like \"St. Gertrude's Prayer\" at this tragedy site illustrates the enduring legacy of Christian faith, which was first introduced during the First Easter Sunday Mass in Limasawa and became deeply ingrained in Filipino traditions when facing grief and remembering the dead.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "the-white-cross",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image83.jpg",
    "sourceSignageFile": "image7.jpg"
  },
  {
    "n": 7,
    "name": "The Dungeons of Fort Santiago",
    "description": "The Dungeons of Fort Santiago consist of a subterranean network of dark, narrow stone chambers located underneath the Baluarte de Santa Barbara inside Fort Santiago. Constructed out of volcanic tuff ( adobe ) blocks and brick vaulted arches, these low-ceilinged chambers were originally built in the late 16th century as powder magazines and storage vaults for weapons and military supplies. The interior is characterized by extremely tight corridors, small iron-grated cells, thick stone walls, and little to no ventilation or natural sunlight. Because the structure sat below the water level of the nearby Pasig River, dampness and humidity were constant within the stone rooms.",
    "significance": "While built as storage spaces, Spanish and later Japanese forces repurposed these dark subterranean vaults into prison cells to confine political dissidents, freedom fighters, and prisoners of war. The dungeons serve as a stark physical monument to the extreme physical suffering endured by Filipinos under foreign occupation, representing the harsh realities of colonial imprisonment and human sacrifice in the nation's fight for independence.",
    "research": "Further historical research shows that the dampness of the dungeons ruined stored gunpowder, leading Spanish authorities to build a new powder magazine elsewhere and convert these underground chambers into prison cells. Though popular urban legends state that tide water directly flooded the cells to drown inmates, official historical records clarify that prisoners actually suffered from severe heat, overcrowding, and lack of oxygen, particularly during World War II when Japanese forces locked roughly 600 prisoners inside during the 1945 Battle of Manila. In terms of Topic connections, these dungeons are directly tied to the First Cry of Revolution , as hundreds of suspected Katipuneros and civilian sympathizers were rounded up and thrown into these airless cells by Spanish authorities in 1896 in an attempt to crush the revolutionary movement led by Andres Bonifacio.",
    "site": "Fort Santiago",
    "category": "Historic Site",
    "id": 7,
    "image": "assets/images/artifacts/the-dungeons-of-fort-santiago.jpg",
    "signage": "assets/images/signage/the-dungeons-of-fort-santiago-sign.jpg",
    "summary": "The Dungeons of Fort Santiago consist of a subterranean network of dark, narrow stone chambers located underneath the Baluarte de Santa Barbara inside Fort Santiago.…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.7 The Dungeons of Fort Santiago.",
    "official": "The Dungeons of Fort Santiago consist of a subterranean network of dark, narrow stone chambers located underneath the Baluarte de Santa Barbara inside Fort Santiago. Constructed out of volcanic tuff ( adobe ) blocks and brick vaulted arches, these low-ceilinged chambers were originally built in the late 16th century as powder magazines and storage vaults for weapons and military supplies. The interior is characterized by extremely tight corridors, small iron-grated cells, thick stone walls, and little to no ventilation or natural sunlight. Because the structure sat below the water level of the nearby Pasig River, dampness and humidity were constant within the stone rooms.",
    "analysis": "While built as storage spaces, Spanish and later Japanese forces repurposed these dark subterranean vaults into prison cells to confine political dissidents, freedom fighters, and prisoners of war. The dungeons serve as a stark physical monument to the extreme physical suffering endured by Filipinos under foreign occupation, representing the harsh realities of colonial imprisonment and human sacrifice in the nation's fight for independence.",
    "reflection": "Further historical research shows that the dampness of the dungeons ruined stored gunpowder, leading Spanish authorities to build a new powder magazine elsewhere and convert these underground chambers into prison cells. Though popular urban legends state that tide water directly flooded the cells to drown inmates, official historical records clarify that prisoners actually suffered from severe heat, overcrowding, and lack of oxygen, particularly during World War II when Japanese forces locked roughly 600 prisoners inside during the 1945 Battle of Manila. In terms of Topic connections, these dungeons are directly tied to the First Cry of Revolution , as hundreds of suspected Katipuneros and civilian sympathizers were rounded up and thrown into these airless cells by Spanish authorities in 1896 in an attempt to crush the revolutionary movement led by Andres Bonifacio.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "the-dungeons-of-fort-santiago",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image35.jpg",
    "sourceSignageFile": "image67.jpg"
  },
  {
    "n": 8,
    "name": "Rajah Sulayman Theatre",
    "description": "The Rajah Sulayman Theater consists of the stone ruins of the 18th-century Spanish military infantry barracks inside Fort Santiago. The structure originally served as housing for Spanish soldiers and later as barracks for American troops in the early 20th century. Destroyed during the 1945 Battle of Manila in World War II, the open-air stone ruins were repurposed in 1967 by Cecile Guidote-Alvarez, founder of the Philippine Educational Theater Association (PETA). Named after Rajah Sulayman (the last pre-colonial native ruler of Maynila) the site now functions as an iconic open-air theater and cultural venue.",
    "significance": "This site bridges pre-colonial native history, foreign military rule, and modern Filipino performing arts. It stands as a monument to how spaces of war and colonial control can be transformed into spaces of artistic expression, cultural rebirth, and national storytelling.",
    "research": "Historical research shows that at one end of these former barracks sat a small chapel-cell where Dr. Jose Rizal spent his final hours before his execution, and where he married Josephine Bracken on the morning of December 30, 1896. In terms of Topic connections, the naming of the theater directly honors the period of Customs of the Tagalog , reminding visitors that long before Spanish walls were built, Rajah Sulayman ruled a thriving, fortified native settlement at the mouth of the Pasig River. Additionally, because Rizal was held in this compound right before his march to Bagumbayan, these ruins are deeply connected to the final events surrounding the Retraction of Rizal and the spirit of national liberation that fueled the First Cry of Revolution . __________________________________",
    "site": "Fort Santiago",
    "category": "Historic Site",
    "id": 8,
    "image": "assets/images/artifacts/rajah-sulayman-theatre.jpg",
    "signage": "assets/images/signage/rajah-sulayman-theatre-sign.jpg",
    "summary": "The Rajah Sulayman Theater consists of the stone ruins of the 18th-century Spanish military infantry barracks inside Fort Santiago. The structure originally served as housing…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.8 Rajah Sulayman Theatre.",
    "official": "The Rajah Sulayman Theater consists of the stone ruins of the 18th-century Spanish military infantry barracks inside Fort Santiago. The structure originally served as housing for Spanish soldiers and later as barracks for American troops in the early 20th century. Destroyed during the 1945 Battle of Manila in World War II, the open-air stone ruins were repurposed in 1967 by Cecile Guidote-Alvarez, founder of the Philippine Educational Theater Association (PETA). Named after Rajah Sulayman (the last pre-colonial native ruler of Maynila) the site now functions as an iconic open-air theater and cultural venue.",
    "analysis": "This site bridges pre-colonial native history, foreign military rule, and modern Filipino performing arts. It stands as a monument to how spaces of war and colonial control can be transformed into spaces of artistic expression, cultural rebirth, and national storytelling.",
    "reflection": "Historical research shows that at one end of these former barracks sat a small chapel-cell where Dr. Jose Rizal spent his final hours before his execution, and where he married Josephine Bracken on the morning of December 30, 1896. In terms of Topic connections, the naming of the theater directly honors the period of Customs of the Tagalog , reminding visitors that long before Spanish walls were built, Rajah Sulayman ruled a thriving, fortified native settlement at the mouth of the Pasig River. Additionally, because Rizal was held in this compound right before his march to Bagumbayan, these ruins are deeply connected to the final events surrounding the Retraction of Rizal and the spirit of national liberation that fueled the First Cry of Revolution . __________________________________",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "rajah-sulayman-theatre",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image66.jpg",
    "sourceSignageFile": "image47.jpg"
  },
  {
    "n": 9,
    "name": "Maitum Burial Jar Covers",
    "description": "These are pottery lids shaped like human heads and faces. Found in 1991 inside a cave in Sarangani Province, they are around 2,000 years old. Early Filipinos made them out of clay, giving each face unique eyes, noses, mouth shapes, and hair designs to look like real people.",
    "significance": "These jar covers are special because they show that ancient Filipinos were skilled artists who cared deeply for their dead. Instead of using plain pots, they carved individual faces on the covers to remember and honor the specific family member buried inside.",
    "research": "Ancient Filipinos used these jars for \"secondary burial,\" which means after a body decayed, they collected the cleaned bones and placed them inside the jar so the person's spirit could move on safely. This connects directly to the Customs of the Tagalog because early Spanish writers recorded that pre-colonial Filipinos already had strong beliefs about the soul, afterlife, and spirit worship ( anito ) long before Spanish priests introduced Christianity.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 9,
    "image": "assets/images/artifacts/maitum-burial-jar-covers.jpg",
    "signage": "assets/images/signage/maitum-burial-jar-covers-sign.jpg",
    "summary": "These are pottery lids shaped like human heads and faces. Found in 1991 inside a cave in Sarangani Province, they are around 2,000 years old. Early Filipinos made them out of…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.9 Maitum Burial Jar Covers.",
    "official": "These are pottery lids shaped like human heads and faces. Found in 1991 inside a cave in Sarangani Province, they are around 2,000 years old. Early Filipinos made them out of clay, giving each face unique eyes, noses, mouth shapes, and hair designs to look like real people.",
    "analysis": "These jar covers are special because they show that ancient Filipinos were skilled artists who cared deeply for their dead. Instead of using plain pots, they carved individual faces on the covers to remember and honor the specific family member buried inside.",
    "reflection": "Ancient Filipinos used these jars for \"secondary burial,\" which means after a body decayed, they collected the cleaned bones and placed them inside the jar so the person's spirit could move on safely. This connects directly to the Customs of the Tagalog because early Spanish writers recorded that pre-colonial Filipinos already had strong beliefs about the soul, afterlife, and spirit worship ( anito ) long before Spanish priests introduced Christianity.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "maitum-burial-jar-covers",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image62.jpg",
    "sourceSignageFile": "image38.jpg"
  },
  {
    "n": 10,
    "name": "Tangkola / Tangkulo / Tunkulu (Warrior Headdress)",
    "description": "This is a sacred warrior headdress crafted by the Blaan people using cotton cloth dyed with natural plant extracts ( sakilig or karig ) and decorated with intricate beadwork. Made using a tie-dye process called plangi or pelangi , the cloth is bound and knotted before dyeing to create complex geometric patterns. Collected in 1914 by John M. Garvan, it forms part of the National Ethnographic Collection.",
    "significance": "This headdress served as a badge of honor exclusively worn by indigenous warriors ( bagani or magani ). The intensity of the red color and the complexity of the patterns directly indicated a warrior's status and the number of lives he had taken in battle. It represents the rich warrior culture, spiritual traditions, and social hierarchy of indigenous communities in Mindanao prior to widespread religious conversion.",
    "research": "The ritual significance of the tangkulo highlights how indigenous leadership and social standing were earned through bravery and spiritual protection rather than inherited title alone. This artifact connects directly to the Customs of the Tagalog course topic, as Spanish accounts like Plasencia's described similar social structures across the archipelago where warrior elites ( maharlika ) held distinct rights, symbols, and spiritual roles within their communities long before colonial rule changed traditional customs.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 10,
    "image": "assets/images/artifacts/tangkola-tangkulo-tunkulu-warrior-headdress.jpg",
    "signage": "assets/images/signage/tangkola-tangkulo-tunkulu-warrior-headdress-sign.jpg",
    "summary": "This is a sacred warrior headdress crafted by the Blaan people using cotton cloth dyed with natural plant extracts ( sakilig or karig ) and decorated with intricate beadwork.…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.10 Tangkola / Tangkulo / Tunkulu (Warrior Headdress).",
    "official": "This is a sacred warrior headdress crafted by the Blaan people using cotton cloth dyed with natural plant extracts ( sakilig or karig ) and decorated with intricate beadwork. Made using a tie-dye process called plangi or pelangi , the cloth is bound and knotted before dyeing to create complex geometric patterns. Collected in 1914 by John M. Garvan, it forms part of the National Ethnographic Collection.",
    "analysis": "This headdress served as a badge of honor exclusively worn by indigenous warriors ( bagani or magani ). The intensity of the red color and the complexity of the patterns directly indicated a warrior's status and the number of lives he had taken in battle. It represents the rich warrior culture, spiritual traditions, and social hierarchy of indigenous communities in Mindanao prior to widespread religious conversion.",
    "reflection": "The ritual significance of the tangkulo highlights how indigenous leadership and social standing were earned through bravery and spiritual protection rather than inherited title alone. This artifact connects directly to the Customs of the Tagalog course topic, as Spanish accounts like Plasencia's described similar social structures across the archipelago where warrior elites ( maharlika ) held distinct rights, symbols, and spiritual roles within their communities long before colonial rule changed traditional customs.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "tangkola-tangkulo-tunkulu-warrior-headdress",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image80.jpg",
    "sourceSignageFile": "image41.jpg"
  },
  {
    "n": 11,
    "name": "Tilar / Pang-abelan / Pang-ablan (Traditional Ilokano Foot Loom)",
    "description": "This wooden and bamboo structure is a traditional foot-operated loom used by Ilokano weavers in Bacnotan, La Union. Known locally as a tilar or pang-abelan , this large mechanism uses foot pedals, wooden frames, and cotton threads to manually weave raw yarn into abel cloth. It was gifted to the National Museum collection through Hon. Edmund H. Gavina and Hon. Victor F. Ortega.",
    "significance": "The foot loom represents the heart of Northern Luzon’s famous Inabel weaving tradition. For centuries, Ilokano households relied on these wooden looms to create durable textiles used for everyday clothing, blankets, and sails. Inabel cloth was so well-crafted and strong that during the Spanish colonial period, Spanish galleons used it for their ship sails, making weaving a major economic backbone for the Ilocos region.",
    "research": "The traditional foot loom highlights early Filipino industrial ingenuity and self-sufficiency before modern industrial factories replaced handmade goods. This connects directly to the topic Customs of the Tagalog and early colonial economic accounts, which recorded that pre-colonial and early colonial Philippine communities had highly organized local trades such as weaving, metalworking, and boat-building that sustained regional trade networks across the islands long before foreign manufactured goods dominated the market.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 11,
    "image": "assets/images/artifacts/tilar-pang-abelan-pang-ablan-traditional-ilokano-foot-loom.jpg",
    "signage": "assets/images/signage/tilar-pang-abelan-pang-ablan-traditional-ilokano-foot-loom-sign.jpg",
    "summary": "This wooden and bamboo structure is a traditional foot-operated loom used by Ilokano weavers in Bacnotan, La Union. Known locally as a tilar or pang-abelan , this large…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.11 Tilar / Pang-abelan / Pang-ablan (Traditional Ilokano Foot Loom).",
    "official": "This wooden and bamboo structure is a traditional foot-operated loom used by Ilokano weavers in Bacnotan, La Union. Known locally as a tilar or pang-abelan , this large mechanism uses foot pedals, wooden frames, and cotton threads to manually weave raw yarn into abel cloth. It was gifted to the National Museum collection through Hon. Edmund H. Gavina and Hon. Victor F. Ortega.",
    "analysis": "The foot loom represents the heart of Northern Luzon’s famous Inabel weaving tradition. For centuries, Ilokano households relied on these wooden looms to create durable textiles used for everyday clothing, blankets, and sails. Inabel cloth was so well-crafted and strong that during the Spanish colonial period, Spanish galleons used it for their ship sails, making weaving a major economic backbone for the Ilocos region.",
    "reflection": "The traditional foot loom highlights early Filipino industrial ingenuity and self-sufficiency before modern industrial factories replaced handmade goods. This connects directly to the topic Customs of the Tagalog and early colonial economic accounts, which recorded that pre-colonial and early colonial Philippine communities had highly organized local trades such as weaving, metalworking, and boat-building that sustained regional trade networks across the islands long before foreign manufactured goods dominated the market.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "tilar-pang-abelan-pang-ablan-traditional-ilokano-foot-loom",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image31.jpg",
    "sourceSignageFile": "image44.jpg"
  },
  {
    "n": 12,
    "name": "Ablon (Mandaya Backstrap Loom)",
    "description": "The Ablon is a traditional backstrap loom crafted out of wood, bamboo, nito , and rope, used by Mandaya women in Davao Oriental. Unlike floor looms, a backstrap loom relies on the weaver's own body weight and movement to control tension on natural-dyed abaca fibers ( dagmay ) as they weave intricate geometric patterns. This artifact forms part of the Senator Loren Legarda Collection.",
    "significance": "This loom is essential to preserving the sacred Mandaya weaving tradition. The resulting dagmay cloth is deeply tied to Mandaya identity, spiritual beliefs, and social life. Historically, Mandaya weavers received their pattern designs through dreams guided by spirits ( Langit ), making the Ablon not just a tool for clothing, but a link to the spiritual world.",
    "research": "The Ablon illustrates how indigenous communities utilized native raw materials such as abaca, bamboo, and natural plant dyes to develop distinct, complex weaving traditions. This connects directly to the topic Customs of the Tagalog and pre-colonial accounts, which document that long before Spanish contact, indigenous peoples across the Philippine islands maintained rich artisan skills, trade practices, and spiritual connections integrated into their daily work and material culture.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 12,
    "image": "assets/images/artifacts/ablon-mandaya-backstrap-loom.jpg",
    "signage": "assets/images/signage/ablon-mandaya-backstrap-loom-sign.jpg",
    "summary": "The Ablon is a traditional backstrap loom crafted out of wood, bamboo, nito , and rope, used by Mandaya women in Davao Oriental. Unlike floor looms, a backstrap loom relies on…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.12 Ablon (Mandaya Backstrap Loom).",
    "official": "The Ablon is a traditional backstrap loom crafted out of wood, bamboo, nito , and rope, used by Mandaya women in Davao Oriental. Unlike floor looms, a backstrap loom relies on the weaver's own body weight and movement to control tension on natural-dyed abaca fibers ( dagmay ) as they weave intricate geometric patterns. This artifact forms part of the Senator Loren Legarda Collection.",
    "analysis": "This loom is essential to preserving the sacred Mandaya weaving tradition. The resulting dagmay cloth is deeply tied to Mandaya identity, spiritual beliefs, and social life. Historically, Mandaya weavers received their pattern designs through dreams guided by spirits ( Langit ), making the Ablon not just a tool for clothing, but a link to the spiritual world.",
    "reflection": "The Ablon illustrates how indigenous communities utilized native raw materials such as abaca, bamboo, and natural plant dyes to develop distinct, complex weaving traditions. This connects directly to the topic Customs of the Tagalog and pre-colonial accounts, which document that long before Spanish contact, indigenous peoples across the Philippine islands maintained rich artisan skills, trade practices, and spiritual connections integrated into their daily work and material culture.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "ablon-mandaya-backstrap-loom",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image6.jpg",
    "sourceSignageFile": "image2.jpg"
  },
  {
    "n": 13,
    "name": "Butuan Ivory Seal",
    "description": "The Butuan Ivory Seal is a small cylindrical seal carved from elephant ivory, measuring 6 cm in length and 4 cm in diameter. Recovered in the 1970s from a shell midden site in Butuan, it dates back to between the 10th and 13th centuries A.D. The base of the seal features an carved inscription written in ancient Javanese or stylized Kawi script, which scholars (such as Postma and Dr. de Casparis) deciphered as reading \"But-ban\" or \"But-wan\" .",
    "significance": "This seal serves as solid physical evidence that pre-colonial Philippines ( specifically Butuan) was an active, sophisticated center of international maritime trade long before Spanish arrival. The use of an ivory seal indicates a formalized system of trade, administration, and branding for commercial goods, proving that ancient Filipinos engaged in organized economic relations with neighboring Southeast Asian kingdoms like Java.",
    "research": "The discovery of a Kawi-inscribed ivory seal highlights the early literacy and regional connectedness of pre-colonial Philippine polities. This connects directly to the topic Customs of the Tagalog and early historical accounts, which record that pre-colonial Filipinos had established systems of writing (such as Baybayin and Kawi), active sea-based commerce, and formal rules for trade and governance well before foreign colonization attempted to reshape local society.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 13,
    "image": "assets/images/artifacts/butuan-ivory-seal.jpg",
    "signage": "assets/images/signage/butuan-ivory-seal-sign.jpg",
    "summary": "The Butuan Ivory Seal is a small cylindrical seal carved from elephant ivory, measuring 6 cm in length and 4 cm in diameter. Recovered in the 1970s from a shell midden site in…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.13 Butuan Ivory Seal.",
    "official": "The Butuan Ivory Seal is a small cylindrical seal carved from elephant ivory, measuring 6 cm in length and 4 cm in diameter. Recovered in the 1970s from a shell midden site in Butuan, it dates back to between the 10th and 13th centuries A.D. The base of the seal features an carved inscription written in ancient Javanese or stylized Kawi script, which scholars (such as Postma and Dr. de Casparis) deciphered as reading \"But-ban\" or \"But-wan\" .",
    "analysis": "This seal serves as solid physical evidence that pre-colonial Philippines ( specifically Butuan) was an active, sophisticated center of international maritime trade long before Spanish arrival. The use of an ivory seal indicates a formalized system of trade, administration, and branding for commercial goods, proving that ancient Filipinos engaged in organized economic relations with neighboring Southeast Asian kingdoms like Java.",
    "reflection": "The discovery of a Kawi-inscribed ivory seal highlights the early literacy and regional connectedness of pre-colonial Philippine polities. This connects directly to the topic Customs of the Tagalog and early historical accounts, which record that pre-colonial Filipinos had established systems of writing (such as Baybayin and Kawi), active sea-based commerce, and formal rules for trade and governance well before foreign colonization attempted to reshape local society.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "butuan-ivory-seal",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image57.jpg",
    "sourceSignageFile": "image8.jpg"
  },
  {
    "n": 14,
    "name": "Batong Monreal (Monreal Stones)",
    "description": "The Monreal Stones consist of two limestone slabs (one large tablet and one smaller stone) engraved with ancient Baybayin script. Discovered inside a school compound in Ticao Island, Masbate, and turned over to the National Museum in October 2011, these are the first stone artifacts ever found in the Philippines featuring carved Baybayin characters. The larger stone has inscriptions carved on both sides (7 lines on Side A with 56 characters, and 10 lines on Side B with 84 characters), while the smaller stone bears 16 characters.",
    "significance": "These stones are significant because they provide rare archaeological evidence of written Baybayin script preserved on stone rather than perishable organic materials like bamboo, leaves, or wood. They offer researchers and linguists an invaluable physical look into pre-colonial literacy, stone-carving traditions, and early written communication in the central Philippines.",
    "research": "Scholarly studies such as 3D imaging tests by Soriano et al. (2011) and transcription research by Dr. Ramon Guillermo (2013) continue to analyze the incisions and translation possibilities of the text, while also evaluating debate regarding the exact age and authenticity of the stones. This artifact connects directly to the topic Customs of the Tagalog and early Philippine literacy, validating historical accounts by early chroniclers who noted that indigenous communities across the islands possessed organized writing systems used for recording native knowledge, messages, and cultural traditions before foreign scripts took over.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 14,
    "image": "assets/images/artifacts/batong-monreal-monreal-stones.jpg",
    "signage": "assets/images/signage/batong-monreal-monreal-stones-sign.jpg",
    "summary": "The Monreal Stones consist of two limestone slabs (one large tablet and one smaller stone) engraved with ancient Baybayin script. Discovered inside a school compound in Ticao…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.14 Batong Monreal (Monreal Stones).",
    "official": "The Monreal Stones consist of two limestone slabs (one large tablet and one smaller stone) engraved with ancient Baybayin script. Discovered inside a school compound in Ticao Island, Masbate, and turned over to the National Museum in October 2011, these are the first stone artifacts ever found in the Philippines featuring carved Baybayin characters. The larger stone has inscriptions carved on both sides (7 lines on Side A with 56 characters, and 10 lines on Side B with 84 characters), while the smaller stone bears 16 characters.",
    "analysis": "These stones are significant because they provide rare archaeological evidence of written Baybayin script preserved on stone rather than perishable organic materials like bamboo, leaves, or wood. They offer researchers and linguists an invaluable physical look into pre-colonial literacy, stone-carving traditions, and early written communication in the central Philippines.",
    "reflection": "Scholarly studies such as 3D imaging tests by Soriano et al. (2011) and transcription research by Dr. Ramon Guillermo (2013) continue to analyze the incisions and translation possibilities of the text, while also evaluating debate regarding the exact age and authenticity of the stones. This artifact connects directly to the topic Customs of the Tagalog and early Philippine literacy, validating historical accounts by early chroniclers who noted that indigenous communities across the islands possessed organized writing systems used for recording native knowledge, messages, and cultural traditions before foreign scripts took over.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "batong-monreal-monreal-stones",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image34.jpg",
    "sourceSignageFile": "image1.jpg"
  },
  {
    "n": 15,
    "name": "Manunggul Burial Jar",
    "description": "The Manunggul Jar is a prehistoric secondary burial jar dating back to 890–710 BCE discovered at Quezon, Palawan. Crafted out of clay, the jar features intricate incised wave patterns painted with natural red hematite on its lid and shoulders. Atop the jar's lid sits a carved boat carrying two human figures,one paddler holding an oar at the back and one passenger in front with arms crossed across their chest. Declared a National Cultural Treasure, it is widely considered one of the finest masterpieces of Philippine indigenous pottery.",
    "significance": "This jar serves as profound physical proof of ancient Filipinos' maritime culture and spiritual worldview. The two figures on the boat represent the journey of the soul traveling across the seas to the afterlife. It proves that long before foreign religious influences arrived, early inhabitants of the archipelago possessed deep spiritual beliefs regarding the soul, mortality, and the afterlife.",
    "research": "The depiction of the spirit boat highlights how early islanders viewed the sea not as a barrier, but as a bridge to life, trade, and the spiritual realm. This connects directly to the topic Customs of the Tagalog and early Philippine beliefs documented by Spanish chroniclers, who observed that ancestral worship ( anito ) and belief in an afterlife where souls crossed over to the spirit realm were deeply embedded in pre-colonial Filipino traditions.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 15,
    "image": "assets/images/artifacts/manunggul-burial-jar.jpg",
    "signage": "assets/images/signage/manunggul-burial-jar-sign.jpg",
    "summary": "The Manunggul Jar is a prehistoric secondary burial jar dating back to 890–710 BCE discovered at Quezon, Palawan. Crafted out of clay, the jar features intricate incised wave…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.15 Manunggul Burial Jar.",
    "official": "The Manunggul Jar is a prehistoric secondary burial jar dating back to 890–710 BCE discovered at Quezon, Palawan. Crafted out of clay, the jar features intricate incised wave patterns painted with natural red hematite on its lid and shoulders. Atop the jar's lid sits a carved boat carrying two human figures,one paddler holding an oar at the back and one passenger in front with arms crossed across their chest. Declared a National Cultural Treasure, it is widely considered one of the finest masterpieces of Philippine indigenous pottery.",
    "analysis": "This jar serves as profound physical proof of ancient Filipinos' maritime culture and spiritual worldview. The two figures on the boat represent the journey of the soul traveling across the seas to the afterlife. It proves that long before foreign religious influences arrived, early inhabitants of the archipelago possessed deep spiritual beliefs regarding the soul, mortality, and the afterlife.",
    "reflection": "The depiction of the spirit boat highlights how early islanders viewed the sea not as a barrier, but as a bridge to life, trade, and the spiritual realm. This connects directly to the topic Customs of the Tagalog and early Philippine beliefs documented by Spanish chroniclers, who observed that ancestral worship ( anito ) and belief in an afterlife where souls crossed over to the spirit realm were deeply embedded in pre-colonial Filipino traditions.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "manunggul-burial-jar",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image28.jpg",
    "sourceSignageFile": "image69.jpg"
  },
  {
    "n": 16,
    "name": "La Antigua Escritura Filipina (The Ancient Filipino Writing)",
    "description": "La Antigua Escritura Filipina is a landmark 1922 historical and paleographic volume written by Filipino scholar and jurist Don Ignacio Villamor. The exhibit displays printed charts, comparative tables, and opened books documenting various regional variations of indigenous Philippine scripts, primarily Baybayin . It systematically maps out characters, syllabic symbols, and historical samples of ancient Filipino writing gathered from early colonial documents.",
    "significance": "This volume represents an early 20th-century effort by a Filipino scholar to document, safeguard, and revive knowledge of our pre-colonial writing traditions. By proving that early Filipinos had widespread literacy and a functional writing system long before Spanish colonization, Villamor's work challenged colonial claims that native Filipinos were unlettered prior to Western contact.",
    "research": "This work directly connects to the topic Customs of the Tagalog and early historical accounts like those of Fray Juan de Plasencia and Pedro Chirino, who noted that nearly all Tagalogs (both men and women) knew how to read and write in Baybayin . The documentation shows how pre-colonial Filipinos used this script for personal letters, poetry, and agreements written on bamboo and palm leaves before European paper and Latin letters became standard.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 16,
    "image": "assets/images/artifacts/la-antigua-escritura-filipina-the-ancient-filipino-writing.jpg",
    "signage": "",
    "summary": "La Antigua Escritura Filipina is a landmark 1922 historical and paleographic volume written by Filipino scholar and jurist Don Ignacio Villamor. The exhibit displays printed…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.16 La Antigua Escritura Filipina (The Ancient Filipino Writing).",
    "official": "La Antigua Escritura Filipina is a landmark 1922 historical and paleographic volume written by Filipino scholar and jurist Don Ignacio Villamor. The exhibit displays printed charts, comparative tables, and opened books documenting various regional variations of indigenous Philippine scripts, primarily Baybayin . It systematically maps out characters, syllabic symbols, and historical samples of ancient Filipino writing gathered from early colonial documents.",
    "analysis": "This volume represents an early 20th-century effort by a Filipino scholar to document, safeguard, and revive knowledge of our pre-colonial writing traditions. By proving that early Filipinos had widespread literacy and a functional writing system long before Spanish colonization, Villamor's work challenged colonial claims that native Filipinos were unlettered prior to Western contact.",
    "reflection": "This work directly connects to the topic Customs of the Tagalog and early historical accounts like those of Fray Juan de Plasencia and Pedro Chirino, who noted that nearly all Tagalogs (both men and women) knew how to read and write in Baybayin . The documentation shows how pre-colonial Filipinos used this script for personal letters, poetry, and agreements written on bamboo and palm leaves before European paper and Latin letters became standard.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "la-antigua-escritura-filipina-the-ancient-filipino-writing",
    "hasSignage": false,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image18.jpg",
    "sourceSignageFile": ""
  },
  {
    "n": 17,
    "name": "Doctrina Christiana (Christian Doctrine)",
    "description": "Doctrina Christiana is widely recognized as the first book printed in the Philippines, published in Manila in 1593. Authored by the Franciscan missionary Fray Juan de Plasencia, this early catechetical text was produced using woodblock printing ( xylography ). The pages feature parallel texts written in three scripts: Spanish, Romanized Tagalog, and native Baybayin script.",
    "significance": "This artifact marks a monumental turning point in Philippine history as the initial bridge between indigenous oral/written traditions and Spanish colonial religious instruction. To convert the native population, Spanish friars like Plasencia had to learn and print in the local Tagalog language and Baybayin script, acknowledging the widespread literacy that already existed among early Filipinos.",
    "research": "This exact book directly connects to the foundational text of your course topic, Customs of the Tagalog , also written by Fray Juan de Plasencia. The Doctrina Christiana demonstrates how early Spanish chroniclers recorded native language, social customs, and writing systems to navigate pre-colonial Philippine society during the early years of colonization.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 17,
    "image": "assets/images/artifacts/doctrina-christiana-christian-doctrine.jpg",
    "signage": "",
    "summary": "Doctrina Christiana is widely recognized as the first book printed in the Philippines, published in Manila in 1593. Authored by the Franciscan missionary Fray Juan de…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.17 Doctrina Christiana (Christian Doctrine).",
    "official": "Doctrina Christiana is widely recognized as the first book printed in the Philippines, published in Manila in 1593. Authored by the Franciscan missionary Fray Juan de Plasencia, this early catechetical text was produced using woodblock printing ( xylography ). The pages feature parallel texts written in three scripts: Spanish, Romanized Tagalog, and native Baybayin script.",
    "analysis": "This artifact marks a monumental turning point in Philippine history as the initial bridge between indigenous oral/written traditions and Spanish colonial religious instruction. To convert the native population, Spanish friars like Plasencia had to learn and print in the local Tagalog language and Baybayin script, acknowledging the widespread literacy that already existed among early Filipinos.",
    "reflection": "This exact book directly connects to the foundational text of your course topic, Customs of the Tagalog , also written by Fray Juan de Plasencia. The Doctrina Christiana demonstrates how early Spanish chroniclers recorded native language, social customs, and writing systems to navigate pre-colonial Philippine society during the early years of colonization.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "doctrina-christiana-christian-doctrine",
    "hasSignage": false,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image77.jpg",
    "sourceSignageFile": ""
  },
  {
    "n": 18,
    "name": "Laguna Copper-Plate Inscription",
    "description": "The Laguna Copper-Plate Inscription is a thin copper sheet measuring approximately 20 cm by 30 cm, dating back to around 900 AD (10th century). Found along the Lumban River in Laguna, it features ten lines of finely hammered text written in Kawi script (an ancient Southeast Asian script). The document serves as an official legal pardon, recording that a man named Namwaran was acquitted of a financial debt by the Chief of Tondo and other local leaders.",
    "significance": "As the oldest known written legal document found in the Philippines, the LCI single-handedly pushed back recorded Philippine history by more than 600 years prior to European arrival. It provides incontrovertible proof that pre-colonial Philippine polities possessed a sophisticated legal system, documented trade practices, written contracts, and active maritime connections with neighboring kingdoms in Java and Sumatra.",
    "research": "The mentions of place names like Tundun (Tondo), Pailah (Pila), and Puliran (Pulilan) show that organized political structures already existed in early Tagalog regions. This connects directly to the topic Customs of the Tagalog , confirming Fray Juan de Plasencia's later observations that early Tagalog society operated under established laws regarding debts, social ranks ( datu , maharlika , alipin ), and community leadership long before colonial rule.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 18,
    "image": "assets/images/artifacts/laguna-copper-plate-inscription.jpg",
    "signage": "assets/images/signage/laguna-copper-plate-inscription-sign.jpg",
    "summary": "The Laguna Copper-Plate Inscription is a thin copper sheet measuring approximately 20 cm by 30 cm, dating back to around 900 AD (10th century). Found along the Lumban River in…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.18 Laguna Copper-Plate Inscription.",
    "official": "The Laguna Copper-Plate Inscription is a thin copper sheet measuring approximately 20 cm by 30 cm, dating back to around 900 AD (10th century). Found along the Lumban River in Laguna, it features ten lines of finely hammered text written in Kawi script (an ancient Southeast Asian script). The document serves as an official legal pardon, recording that a man named Namwaran was acquitted of a financial debt by the Chief of Tondo and other local leaders.",
    "analysis": "As the oldest known written legal document found in the Philippines, the LCI single-handedly pushed back recorded Philippine history by more than 600 years prior to European arrival. It provides incontrovertible proof that pre-colonial Philippine polities possessed a sophisticated legal system, documented trade practices, written contracts, and active maritime connections with neighboring kingdoms in Java and Sumatra.",
    "reflection": "The mentions of place names like Tundun (Tondo), Pailah (Pila), and Puliran (Pulilan) show that organized political structures already existed in early Tagalog regions. This connects directly to the topic Customs of the Tagalog , confirming Fray Juan de Plasencia's later observations that early Tagalog society operated under established laws regarding debts, social ranks ( datu , maharlika , alipin ), and community leadership long before colonial rule.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "laguna-copper-plate-inscription",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image4.jpg",
    "sourceSignageFile": "image61.jpg"
  },
  {
    "n": 19,
    "name": "Lansa (Coffin Pegs)",
    "description": "These carved wooden pegs, known locally as lansa , were crafted by the Bontok people of Mountain Province. Similar wooden pegs with anthropomorphic (human-like) figures carved at the top are also used by neighboring Cordilleran groups, such as the Ibaloy and Kankanaey. Functionally, these wooden stakes were driven into traditional wooden coffins to secure and keep the coffin lid firmly in place.",
    "significance": "Beyond their practical use in securing wooden coffins without metal nails, the human figures carved onto the top of the lansa carried deep ritual and spiritual meaning. These carved figures served as guardians for the deceased, reflecting the reverence indigenous Cordilleran communities held for ancestral spirits and sacred burial traditions.",
    "research": "The use of human figures on coffin pegs demonstrates how spiritual beliefs were incorporated directly into structural and functional everyday objects. This connects directly to the topic Customs of the Tagalog , as early chroniclers like Fray Juan de Plasencia documented that pre-colonial Filipinos across various island regions placed human-shaped figures ( anito or ancestral guardians) around burial grounds to protect the spirits of their deceased family members.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 19,
    "image": "assets/images/artifacts/lansa-coffin-pegs.jpg",
    "signage": "assets/images/signage/lansa-coffin-pegs-sign.jpg",
    "summary": "These carved wooden pegs, known locally as lansa , were crafted by the Bontok people of Mountain Province. Similar wooden pegs with anthropomorphic (human-like) figures carved…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.19 Lansa (Coffin Pegs).",
    "official": "These carved wooden pegs, known locally as lansa , were crafted by the Bontok people of Mountain Province. Similar wooden pegs with anthropomorphic (human-like) figures carved at the top are also used by neighboring Cordilleran groups, such as the Ibaloy and Kankanaey. Functionally, these wooden stakes were driven into traditional wooden coffins to secure and keep the coffin lid firmly in place.",
    "analysis": "Beyond their practical use in securing wooden coffins without metal nails, the human figures carved onto the top of the lansa carried deep ritual and spiritual meaning. These carved figures served as guardians for the deceased, reflecting the reverence indigenous Cordilleran communities held for ancestral spirits and sacred burial traditions.",
    "reflection": "The use of human figures on coffin pegs demonstrates how spiritual beliefs were incorporated directly into structural and functional everyday objects. This connects directly to the topic Customs of the Tagalog , as early chroniclers like Fray Juan de Plasencia documented that pre-colonial Filipinos across various island regions placed human-shaped figures ( anito or ancestral guardians) around burial grounds to protect the spirits of their deceased family members.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "lansa-coffin-pegs",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image39.jpg",
    "sourceSignageFile": "image45.jpg"
  },
  {
    "n": 20,
    "name": "Allongan / Aloang (Wooden Coffin with Carabao Motif)",
    "description": "This wooden coffin, known as an allongan or aloang , was carved by the Bontok people of Mountain Province. Coffins made for prominent or important individuals feature zoomorphic (animal-shaped) designs, such as a carved carabao head protruding from one end or a lizard carved in relief on the lid. These coffins were hollowed out from solid tree trunks using traditional tools to cremate or store human remains in sacred burial caves or cliffs.",
    "significance": "In Bontok culture, the carved carabao head was an explicit indicator of high social rank and wealth. Carving a carabao on a coffin signified that the deceased was a prominent community leader who had the wealth and capacity to butcher carabaos during their funeral feast ( chono ) to feed the village. It represents how status, wealth, and communal generosity were permanently commemorated in traditional burial practices.",
    "research": "The relationship between funerary symbols and social standing connects directly to the topic Customs of the Tagalog . Pre-colonial accounts by chroniclers like Fray Juan de Plasencia noted that burial rituals across early Philippine societies reflected a person's social class where chiefs ( datu ) and noble leaders ( maharlika ) were buried with distinct ceremonial markers, prized possessions, and sacrificial offerings to signify their exalted standing in both this life and the afterlife.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 20,
    "image": "assets/images/artifacts/allongan-aloang-wooden-coffin-with-carabao-motif.jpg",
    "signage": "assets/images/signage/allongan-aloang-wooden-coffin-with-carabao-motif-sign.jpg",
    "summary": "This wooden coffin, known as an allongan or aloang , was carved by the Bontok people of Mountain Province. Coffins made for prominent or important individuals feature…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.20 Allongan / Aloang (Wooden Coffin with Carabao Motif).",
    "official": "This wooden coffin, known as an allongan or aloang , was carved by the Bontok people of Mountain Province. Coffins made for prominent or important individuals feature zoomorphic (animal-shaped) designs, such as a carved carabao head protruding from one end or a lizard carved in relief on the lid. These coffins were hollowed out from solid tree trunks using traditional tools to cremate or store human remains in sacred burial caves or cliffs.",
    "analysis": "In Bontok culture, the carved carabao head was an explicit indicator of high social rank and wealth. Carving a carabao on a coffin signified that the deceased was a prominent community leader who had the wealth and capacity to butcher carabaos during their funeral feast ( chono ) to feed the village. It represents how status, wealth, and communal generosity were permanently commemorated in traditional burial practices.",
    "reflection": "The relationship between funerary symbols and social standing connects directly to the topic Customs of the Tagalog . Pre-colonial accounts by chroniclers like Fray Juan de Plasencia noted that burial rituals across early Philippine societies reflected a person's social class where chiefs ( datu ) and noble leaders ( maharlika ) were buried with distinct ceremonial markers, prized possessions, and sacrificial offerings to signify their exalted standing in both this life and the afterlife.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "allongan-aloang-wooden-coffin-with-carabao-motif",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image82.jpg",
    "sourceSignageFile": "image13.jpg"
  },
  {
    "n": 21,
    "name": "Butuan Metal Paleograph",
    "description": "The Butuan Metal Paleograph is a narrow metal strip measuring 17.8 cm in length and 1.3 cm in width, dating from the 14th to 15th centuries A.D. It was found inside a wooden coffin alongside 14th to 15th-century Ming Dynasty tradeware ceramics in Butuan during the 1970s and donated by Mr. Leony Benedicto. Studied by Indonesian paleographer Mr. Boechart, the strip presents 22 units of writing on one side in a script similar to Javanese, displaying clear Hindu-Buddhist influences. Writing on metal strips was a common practice in ancient Indonesia, where they were used as epitaphs in burials.",
    "significance": "This metal strip is crucial evidence of the pre-colonial Philippines' direct connections with neighboring Southeast Asian civilizations, specifically showing Javanese and Hindu-Buddhist cultural and linguistic influences. Its inclusion inside a local burial shows that early Filipinos in Butuan engaged in shared cultural, spiritual, and funerary practices with regional trading partners long before Spanish colonization.",
    "research": "The discovery of a metal epitaph inscribed with a foreign-influenced script in an ancient burial connects directly to the topic Customs of the Tagalog . Pre-colonial historical accounts note that early Philippine societies maintained active maritime networks, exchanging not just trade goods like Ming ceramics, but also scripts, burial customs, and religious influences across Southeast Asia.",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 21,
    "image": "assets/images/artifacts/butuan-metal-paleograph.jpg",
    "signage": "",
    "summary": "The Butuan Metal Paleograph is a narrow metal strip measuring 17.8 cm in length and 1.3 cm in width, dating from the 14th to 15th centuries A.D. It was found inside a wooden…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.21 Butuan Metal Paleograph.",
    "official": "The Butuan Metal Paleograph is a narrow metal strip measuring 17.8 cm in length and 1.3 cm in width, dating from the 14th to 15th centuries A.D. It was found inside a wooden coffin alongside 14th to 15th-century Ming Dynasty tradeware ceramics in Butuan during the 1970s and donated by Mr. Leony Benedicto. Studied by Indonesian paleographer Mr. Boechart, the strip presents 22 units of writing on one side in a script similar to Javanese, displaying clear Hindu-Buddhist influences. Writing on metal strips was a common practice in ancient Indonesia, where they were used as epitaphs in burials.",
    "analysis": "This metal strip is crucial evidence of the pre-colonial Philippines' direct connections with neighboring Southeast Asian civilizations, specifically showing Javanese and Hindu-Buddhist cultural and linguistic influences. Its inclusion inside a local burial shows that early Filipinos in Butuan engaged in shared cultural, spiritual, and funerary practices with regional trading partners long before Spanish colonization.",
    "reflection": "The discovery of a metal epitaph inscribed with a foreign-influenced script in an ancient burial connects directly to the topic Customs of the Tagalog . Pre-colonial historical accounts note that early Philippine societies maintained active maritime networks, exchanging not just trade goods like Ming ceramics, but also scripts, burial customs, and religious influences across Southeast Asia.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "butuan-metal-paleograph",
    "hasSignage": false,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image74.jpg",
    "sourceSignageFile": ""
  },
  {
    "n": 22,
    "name": "Pinagpagan (Ceremonial Blanket)",
    "description": "The Pinagpagan is a traditional ceremonial blanket woven by the Bontok people of Mountain Province. Crafted from cotton and synthetic dyes, it features intricate woven patterns, including distinct mortar designs incorporated directly into its middle panels. It forms part of the museum's National Ethnographic Collection.",
    "significance": "In Bontok society, the pinagpagan is considered the highest status blanket and is traditionally reserved for wealthy individuals, village leaders ( kadangyan ), and elders. It plays an essential role in social rites, rituals, and funerary customs, where it is used to drape prominent deceased leaders as a mark of supreme respect and honor.",
    "research": "The use of specific woven designs and ceremonial textiles to denote elite social standing connects directly to the topic Customs of the Tagalog . Fray Juan de Plasencia and other early chroniclers observed that across pre-colonial Philippine communities, prestige items such as specially colored garments, woven blankets, and gold ornaments served as clear visual indicators of social class ( datu , maharlika ) and ceremonial authority during sacred rituals and funerary rites. ______________________",
    "site": "National Museum of Anthropology",
    "category": "Cultural Artifact",
    "id": 22,
    "image": "assets/images/artifacts/pinagpagan-ceremonial-blanket.jpg",
    "signage": "assets/images/signage/pinagpagan-ceremonial-blanket-sign.jpg",
    "summary": "The Pinagpagan is a traditional ceremonial blanket woven by the Bontok people of Mountain Province. Crafted from cotton and synthetic dyes, it features intricate woven…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.22 Pinagpagan (Ceremonial Blanket).",
    "official": "The Pinagpagan is a traditional ceremonial blanket woven by the Bontok people of Mountain Province. Crafted from cotton and synthetic dyes, it features intricate woven patterns, including distinct mortar designs incorporated directly into its middle panels. It forms part of the museum's National Ethnographic Collection.",
    "analysis": "In Bontok society, the pinagpagan is considered the highest status blanket and is traditionally reserved for wealthy individuals, village leaders ( kadangyan ), and elders. It plays an essential role in social rites, rituals, and funerary customs, where it is used to drape prominent deceased leaders as a mark of supreme respect and honor.",
    "reflection": "The use of specific woven designs and ceremonial textiles to denote elite social standing connects directly to the topic Customs of the Tagalog . Fray Juan de Plasencia and other early chroniclers observed that across pre-colonial Philippine communities, prestige items such as specially colored garments, woven blankets, and gold ornaments served as clear visual indicators of social class ( datu , maharlika ) and ceremonial authority during sacred rituals and funerary rites. ______________________",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "pinagpagan-ceremonial-blanket",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image3.jpg",
    "sourceSignageFile": "image32.jpg"
  },
  {
    "n": 23,
    "name": "Josephine Sleeping",
    "description": "Josephine Sleeping is a small clay sculpture created by Dr. José Rizal during his exile in Dapitan around 1895–1896. The piece depicts his common-law wife, Josephine Bracken, peacefully reclining on a divan with her body partially covered under sheets and her arm modestly placed across her chest. Formed by hand in clay, it is recognized as one of Rizal's final artistic works before his execution in Bagumbayan.",
    "significance": "This sculpture offers a rare, deeply personal glimpse into Rizal’s human side, revealing tenderness, intimacy, and domestic life beyond his public image as a revolutionary writer, political thinker, and national hero. It stands as a physical testament to his deep affection for Josephine Bracken, honoring the companion who shared his final, quiet years in exile before his martyrdom.",
    "research": "This artwork connects directly to the Exile Phase of Dr. José Rizal and the Final Stage of the Propaganda Movement . When Rizal was exiled to Dapitan (1892–1896), he was deprived of his political platform in Europe. However, his artistic creations during this period prove that his creative mind and humanist spirit could not be suppressed by colonial authorities. It demonstrates how fine art served as a medium of personal resilience and emotional refuge amidst intense political persecution right before the outbreak of the 1896 Philippine Revolution.",
    "site": "National Museum of Fine Arts",
    "category": "Artwork",
    "id": 23,
    "image": "assets/images/artifacts/josephine-sleeping.jpg",
    "signage": "",
    "summary": "Josephine Sleeping is a small clay sculpture created by Dr. José Rizal during his exile in Dapitan around 1895–1896. The piece depicts his common-law wife, Josephine Bracken,…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.23 Josephine Sleeping.",
    "official": "Josephine Sleeping is a small clay sculpture created by Dr. José Rizal during his exile in Dapitan around 1895–1896. The piece depicts his common-law wife, Josephine Bracken, peacefully reclining on a divan with her body partially covered under sheets and her arm modestly placed across her chest. Formed by hand in clay, it is recognized as one of Rizal's final artistic works before his execution in Bagumbayan.",
    "analysis": "This sculpture offers a rare, deeply personal glimpse into Rizal’s human side, revealing tenderness, intimacy, and domestic life beyond his public image as a revolutionary writer, political thinker, and national hero. It stands as a physical testament to his deep affection for Josephine Bracken, honoring the companion who shared his final, quiet years in exile before his martyrdom.",
    "reflection": "This artwork connects directly to the Exile Phase of Dr. José Rizal and the Final Stage of the Propaganda Movement . When Rizal was exiled to Dapitan (1892–1896), he was deprived of his political platform in Europe. However, his artistic creations during this period prove that his creative mind and humanist spirit could not be suppressed by colonial authorities. It demonstrates how fine art served as a medium of personal resilience and emotional refuge amidst intense political persecution right before the outbreak of the 1896 Philippine Revolution.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "josephine-sleeping",
    "hasSignage": false,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image27.jpg",
    "sourceSignageFile": ""
  },
  {
    "n": 24,
    "name": "Portrait of Dr. Jose Rizal",
    "description": "This oil-on-canvas painting is a formal portrait of Dr. José Rizal, executed around 1923 by master painter Fabian de la Rosa y Cueto. The work portrays the national hero in a three-quarter view wearing a formal dark suit with a stiff high collar and tie. Rendered with realistic flesh tones, subtle highlights, and a muted background, it showcases De la Rosa's mastery of European classical academic realism.",
    "significance": "Painted during the American colonial period, this portrait reflects how early 20th-century Filipino master artists memorialized Dr. José Rizal as the intellectual symbol of Philippine nationalism and identity. Fabian de la Rosa, one of the most prominent masters of the era and mentor to Fernando Amorsolo, captured Rizal’s dignified demeanor, reinforcing his stature as an elite Ilustrado thinker whose literary and political work inspired the nation.",
    "research": "This portrait connects directly to the evolving historical narrative that began with accounts like Customs of the Tagalog . While Plasencia documented early Tagalog societal ranks ( datu , maharlika , alipin ), centuries of colonial rule transformed leadership models in the Philippines. By the late 19th century, leadership transitioned to the educated Ilustrado class represented by Rizal.",
    "site": "National Museum of Fine Arts",
    "category": "Artwork",
    "id": 24,
    "image": "assets/images/artifacts/portrait-of-dr-jose-rizal.jpg",
    "signage": "assets/images/signage/portrait-of-dr-jose-rizal-sign.jpg",
    "summary": "This oil-on-canvas painting is a formal portrait of Dr. José Rizal, executed around 1923 by master painter Fabian de la Rosa y Cueto. The work portrays the national hero in a…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.24 Portrait of Dr. Jose Rizal.",
    "official": "This oil-on-canvas painting is a formal portrait of Dr. José Rizal, executed around 1923 by master painter Fabian de la Rosa y Cueto. The work portrays the national hero in a three-quarter view wearing a formal dark suit with a stiff high collar and tie. Rendered with realistic flesh tones, subtle highlights, and a muted background, it showcases De la Rosa's mastery of European classical academic realism.",
    "analysis": "Painted during the American colonial period, this portrait reflects how early 20th-century Filipino master artists memorialized Dr. José Rizal as the intellectual symbol of Philippine nationalism and identity. Fabian de la Rosa, one of the most prominent masters of the era and mentor to Fernando Amorsolo, captured Rizal’s dignified demeanor, reinforcing his stature as an elite Ilustrado thinker whose literary and political work inspired the nation.",
    "reflection": "This portrait connects directly to the evolving historical narrative that began with accounts like Customs of the Tagalog . While Plasencia documented early Tagalog societal ranks ( datu , maharlika , alipin ), centuries of colonial rule transformed leadership models in the Philippines. By the late 19th century, leadership transitioned to the educated Ilustrado class represented by Rizal.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "portrait-of-dr-jose-rizal",
    "hasSignage": true,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image23.jpg",
    "sourceSignageFile": "image49.jpg"
  },
  {
    "n": 25,
    "name": "Academic Diplomas and Certificates of Dr. José Rizal",
    "description": "This exhibit features a collection of three historic framed documents and academic certificates from the late 19th century. Most notably, it includes the official diploma issued by the Royal and Pontifical University of Santo Tomas in Manila in March 1877, conferring the degree of Bachelor of Arts upon José Rizal. The documents are preserved with classic calligraphy, official seals, and institutional signatures characteristic of Spanish-era higher education in the Philippines.",
    "significance": "These diplomas offer concrete documentary evidence of Rizal’s rigorous academic training within the colonial educational system. Achieving a Bachelor of Arts degree at the Letras y Artes level during this period was a foundational milestone that paved the way for his advanced medical studies in Manila and subsequent scientific and literary pursuits in Europe. They reflect the intellectual ecosystem that molded the primary minds of the Ilustrado movement.",
    "research": "This display links directly to the topic of Colonial Education, the University of Santo Tomas, and the Propaganda Movement . Institutions like UST served as crucial meeting grounds where young Filipino reformists acquired higher education. The intellectual mastery reflected in these diplomas gave reformists like Rizal, Marcelo H. del Pilar, and Graciano López Jaena the scholarly tools necessary to write historical critiques, publish La Solidaridad , and challenge Spanish friarocracy and colonial governance.",
    "site": "National Museum of Fine Arts",
    "category": "Artwork",
    "id": 25,
    "image": "assets/images/artifacts/academic-diplomas-and-certificates-of-dr-jose-rizal.jpg",
    "signage": "",
    "summary": "This exhibit features a collection of three historic framed documents and academic certificates from the late 19th century. Most notably, it includes the official diploma…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.25 Academic Diplomas and Certificates of Dr. José Rizal.",
    "official": "This exhibit features a collection of three historic framed documents and academic certificates from the late 19th century. Most notably, it includes the official diploma issued by the Royal and Pontifical University of Santo Tomas in Manila in March 1877, conferring the degree of Bachelor of Arts upon José Rizal. The documents are preserved with classic calligraphy, official seals, and institutional signatures characteristic of Spanish-era higher education in the Philippines.",
    "analysis": "These diplomas offer concrete documentary evidence of Rizal’s rigorous academic training within the colonial educational system. Achieving a Bachelor of Arts degree at the Letras y Artes level during this period was a foundational milestone that paved the way for his advanced medical studies in Manila and subsequent scientific and literary pursuits in Europe. They reflect the intellectual ecosystem that molded the primary minds of the Ilustrado movement.",
    "reflection": "This display links directly to the topic of Colonial Education, the University of Santo Tomas, and the Propaganda Movement . Institutions like UST served as crucial meeting grounds where young Filipino reformists acquired higher education. The intellectual mastery reflected in these diplomas gave reformists like Rizal, Marcelo H. del Pilar, and Graciano López Jaena the scholarly tools necessary to write historical critiques, publish La Solidaridad , and challenge Spanish friarocracy and colonial governance.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "academic-diplomas-and-certificates-of-dr-jose-rizal",
    "hasSignage": false,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image17.jpg",
    "sourceSignageFile": ""
  },
  {
    "n": 26,
    "name": "Spoliarium (Juan Luna)",
    "description": "Spoliarium is a monumental oil-on-canvas painting measuring 4.22 meters by 7.67 meters, completed by Filipino master Juan Luna in Madrid in 1884. The masterpiece depicts a subterranean chamber beneath a Roman amphitheater where fallen gladiators are dragged across the stone floor, stripped of their armor and dignity. To the left, spectators and Roman officials watch callously, while to the right, a woman mourns over a fallen warrior in despair. The canvas won the First Gold Medal at the prestigious Exposición Nacional de Bellas Artes in Madrid in 1884.",
    "significance": "As the most iconic piece of Philippine visual art, Spoliarium served as a powerful allegory for the suffering and exploitation of the Filipino people under Spanish colonial rule. At a victory banquet honoring Juan Luna and Félix Resurrección Hidalgo in Madrid, Dr. José Rizal famously declared that Luna’s masterpiece reflected the social, moral, and political realities of the Philippines—a nation stripped of its rights and dignity. It galvanized the Propagandists and became a catalyst for 19th-century Philippine national consciousness.",
    "research": "Spoliarium forms a major bridge between The Execution of GOMBURZA (1872), the Propaganda Movement, and the 1896 Philippine Revolution . Luna's gold-medal triumph proved to the world that Filipino intellect and artistic genius were equal to those of Europeans. Furthermore, its imagery of dragged, lifeless gladiators served as a vivid political metaphor for the grief and oppression following the martyrdom of Fathers Gomez, Burgos, and Zamora in 1872. This masterpiece helped spark the nationalistic spirit that ultimately inspired Andres Bonifacio and the Katipunan to launch the armed revolution for independence in 1896. __________________________________",
    "site": "National Museum of Fine Arts",
    "category": "Artwork",
    "id": 26,
    "image": "assets/images/artifacts/spoliarium-juan-luna.jpg",
    "signage": "",
    "summary": "Spoliarium is a monumental oil-on-canvas painting measuring 4.22 meters by 7.67 meters, completed by Filipino master Juan Luna in Madrid in 1884. The masterpiece depicts a…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.26 Spoliarium (Juan Luna).",
    "official": "Spoliarium is a monumental oil-on-canvas painting measuring 4.22 meters by 7.67 meters, completed by Filipino master Juan Luna in Madrid in 1884. The masterpiece depicts a subterranean chamber beneath a Roman amphitheater where fallen gladiators are dragged across the stone floor, stripped of their armor and dignity. To the left, spectators and Roman officials watch callously, while to the right, a woman mourns over a fallen warrior in despair. The canvas won the First Gold Medal at the prestigious Exposición Nacional de Bellas Artes in Madrid in 1884.",
    "analysis": "As the most iconic piece of Philippine visual art, Spoliarium served as a powerful allegory for the suffering and exploitation of the Filipino people under Spanish colonial rule. At a victory banquet honoring Juan Luna and Félix Resurrección Hidalgo in Madrid, Dr. José Rizal famously declared that Luna’s masterpiece reflected the social, moral, and political realities of the Philippines—a nation stripped of its rights and dignity. It galvanized the Propagandists and became a catalyst for 19th-century Philippine national consciousness.",
    "reflection": "Spoliarium forms a major bridge between The Execution of GOMBURZA (1872), the Propaganda Movement, and the 1896 Philippine Revolution . Luna's gold-medal triumph proved to the world that Filipino intellect and artistic genius were equal to those of Europeans. Furthermore, its imagery of dragged, lifeless gladiators served as a vivid political metaphor for the grief and oppression following the martyrdom of Fathers Gomez, Burgos, and Zamora in 1872. This masterpiece helped spark the nationalistic spirit that ultimately inspired Andres Bonifacio and the Katipunan to launch the armed revolution for independence in 1896. __________________________________",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "spoliarium-juan-luna",
    "hasSignage": false,
    "descriptionLabel": "Description / Historical Background",
    "significanceLabel": "Historical Significance",
    "researchLabel": "Further Research & Topic Connections",
    "sourcePhotoFile": "image19.jpg",
    "sourceSignageFile": ""
  },
  {
    "n": 27,
    "name": "Philippine Serpent Eagle",
    "description": "The Philippine Serpent Eagle (Spilornis holospilus) is a medium-sized bird of prey that lives only in the Philippines. It has deep brown feathers with small white spots on its belly, bright yellow eyes and feet, and a small crest of feathers on the back of its head. It spends its time in forest clearings and woodlands, sitting quietly on high tree branches while scanning the ground for food.",
    "significance": "It connects deeply to Philippine history because early Filipinos viewed forest birds as sacred messengers or signs of good fortune long before the Spanish arrived. Seeing these powerful birds soar over the canopy reminded our ancestors of nature's strength and the rich, untouched forests that covered our islands during pre-colonial times.This eagle plays a vital role in balancing nature by keeping reptile and amphibian populations under control.",
    "research": "This eagle gets its name because its favorite food is snakes, which it hunts using the tough, thick scales on its legs as armor against venomous bites. It also eats frogs and lizards and is known for making a loud, ringing \"keee-keee-keee\" sound that can be heard long before you see the bird flying high above the trees.",
    "site": "National Museum of Natural History",
    "category": "Natural History",
    "id": 27,
    "image": "assets/images/artifacts/philippine-serpent-eagle.jpg",
    "signage": "assets/images/signage/philippine-serpent-eagle-sign.jpg",
    "summary": "The Philippine Serpent Eagle (Spilornis holospilus) is a medium-sized bird of prey that lives only in the Philippines. It has deep brown feathers with small white spots on its…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.27 Philippine Serpent Eagle.",
    "official": "The Philippine Serpent Eagle (Spilornis holospilus) is a medium-sized bird of prey that lives only in the Philippines. It has deep brown feathers with small white spots on its belly, bright yellow eyes and feet, and a small crest of feathers on the back of its head. It spends its time in forest clearings and woodlands, sitting quietly on high tree branches while scanning the ground for food.",
    "analysis": "It connects deeply to Philippine history because early Filipinos viewed forest birds as sacred messengers or signs of good fortune long before the Spanish arrived. Seeing these powerful birds soar over the canopy reminded our ancestors of nature's strength and the rich, untouched forests that covered our islands during pre-colonial times.This eagle plays a vital role in balancing nature by keeping reptile and amphibian populations under control.",
    "reflection": "This eagle gets its name because its favorite food is snakes, which it hunts using the tough, thick scales on its legs as armor against venomous bites. It also eats frogs and lizards and is known for making a loud, ringing \"keee-keee-keee\" sound that can be heard long before you see the bird flying high above the trees.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "philippine-serpent-eagle",
    "hasSignage": true,
    "descriptionLabel": "Description / Background",
    "researchLabel": "Further Research & Fun Facts",
    "significanceLabel": "Historical Significance",
    "sourcePhotoFile": "image5.jpg",
    "sourceSignageFile": "image14.jpg"
  },
  {
    "n": 28,
    "name": "Philippine Eagle Owl",
    "description": "The Philippine Eagle Owl (Bubo philippensis) is a rare nocturnal bird of prey endemic to the lowland forests of islands like Luzon, Catanduanes, Samar, Leyte, and Mindanao. Measuring 40 to 50 centimeters long, it is officially the largest owl species found in the Philippines among the sixteen native species. It features striking yellow eyes, ear tufts, and warm reddish-brown feathered plumage with dark streaks that help it blend seamlessly into dense forest edges and trees along river streams.",
    "significance": "Historically, nocturnal creatures like owls played a strong role in pre-colonial Filipino folklore and oral traditions. Early island communities often viewed night birds with deep respect and mystery, linking their calls to forest spirits ( anito ) or using their presence as a natural clock for night hunting and navigation before European settlement.Ecologically, as a top nocturnal predator, this owl keeps forest ecosystems balanced by hunting rodents, small mammals, and reptiles during the night.",
    "research": "Despite its impressive size, this giant owl is classified as vulnerable due to habitat loss from deforestation in Philippine lowland forests. A unique characteristic of this owl is its surprisingly soft and low-pitched hooting sound, which allows it to communicate across quiet forest streams without alerting its prey.",
    "site": "National Museum of Natural History",
    "category": "Natural History",
    "id": 28,
    "image": "assets/images/artifacts/philippine-eagle-owl.jpg",
    "signage": "assets/images/signage/philippine-eagle-owl-sign.jpg",
    "summary": "The Philippine Eagle Owl (Bubo philippensis) is a rare nocturnal bird of prey endemic to the lowland forests of islands like Luzon, Catanduanes, Samar, Leyte, and Mindanao.…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.28 Philippine Eagle Owl.",
    "official": "The Philippine Eagle Owl (Bubo philippensis) is a rare nocturnal bird of prey endemic to the lowland forests of islands like Luzon, Catanduanes, Samar, Leyte, and Mindanao. Measuring 40 to 50 centimeters long, it is officially the largest owl species found in the Philippines among the sixteen native species. It features striking yellow eyes, ear tufts, and warm reddish-brown feathered plumage with dark streaks that help it blend seamlessly into dense forest edges and trees along river streams.",
    "analysis": "Historically, nocturnal creatures like owls played a strong role in pre-colonial Filipino folklore and oral traditions. Early island communities often viewed night birds with deep respect and mystery, linking their calls to forest spirits ( anito ) or using their presence as a natural clock for night hunting and navigation before European settlement.Ecologically, as a top nocturnal predator, this owl keeps forest ecosystems balanced by hunting rodents, small mammals, and reptiles during the night.",
    "reflection": "Despite its impressive size, this giant owl is classified as vulnerable due to habitat loss from deforestation in Philippine lowland forests. A unique characteristic of this owl is its surprisingly soft and low-pitched hooting sound, which allows it to communicate across quiet forest streams without alerting its prey.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "philippine-eagle-owl",
    "hasSignage": true,
    "descriptionLabel": "Description / Background",
    "researchLabel": "Further Research & Fun Facts",
    "significanceLabel": "Historical Significance",
    "sourcePhotoFile": "image63.jpg",
    "sourceSignageFile": "image53.jpg"
  },
  {
    "n": 29,
    "name": "Rufous Night-Heron (Bakaw or Lapay)",
    "description": "The Rufous Night-Heron (Nycticorax caledonicus) is a large, stocky waterbird with a short neck, known locally as Bakaw in Tagalog and Lapay in the Visayas. It features reddish-brown (rufous) feathers on its back and wings, light underparts, and a sharp bill adapted for wetland foraging. During the daytime, these herons roost together in small groups among tree branches, emerging around dusk to fly out toward marshes, mangroves, and rice fields to feed.",
    "significance": "This species plays a critical ecological role in controlling small fish, crustaceans, and aquatic insect populations across coastal and freshwater wetlands. Historically, the Bakaw is deeply rooted in traditional Philippine life and folklore, giving its local name to coastal ecosystems like bakawan (mangrove forests). Pre-colonial communities relied on observing the flight and calls of the Bakaw at dusk as natural markers for changing tides, time of day, and ideal fishing conditions along rivers and shores.",
    "research": "Unlike many daytime herons, the Rufous Night-Heron is primarily nocturnal and crepuscular, meaning it is most active at twilight and during the night when it stalks prey in shallow water. Its distinct reddish-brown plumage also changes as it matures, with young birds displaying brown-and-white streaked feathers for camouflage before molting into their bright adult colors.",
    "site": "National Museum of Natural History",
    "category": "Natural History",
    "id": 29,
    "image": "assets/images/artifacts/rufous-night-heron-bakaw-or-lapay.jpg",
    "signage": "",
    "summary": "The Rufous Night-Heron (Nycticorax caledonicus) is a large, stocky waterbird with a short neck, known locally as Bakaw in Tagalog and Lapay in the Visayas. It features…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.29 Rufous Night-Heron (Bakaw or Lapay).",
    "official": "The Rufous Night-Heron (Nycticorax caledonicus) is a large, stocky waterbird with a short neck, known locally as Bakaw in Tagalog and Lapay in the Visayas. It features reddish-brown (rufous) feathers on its back and wings, light underparts, and a sharp bill adapted for wetland foraging. During the daytime, these herons roost together in small groups among tree branches, emerging around dusk to fly out toward marshes, mangroves, and rice fields to feed.",
    "analysis": "This species plays a critical ecological role in controlling small fish, crustaceans, and aquatic insect populations across coastal and freshwater wetlands. Historically, the Bakaw is deeply rooted in traditional Philippine life and folklore, giving its local name to coastal ecosystems like bakawan (mangrove forests). Pre-colonial communities relied on observing the flight and calls of the Bakaw at dusk as natural markers for changing tides, time of day, and ideal fishing conditions along rivers and shores.",
    "reflection": "Unlike many daytime herons, the Rufous Night-Heron is primarily nocturnal and crepuscular, meaning it is most active at twilight and during the night when it stalks prey in shallow water. Its distinct reddish-brown plumage also changes as it matures, with young birds displaying brown-and-white streaked feathers for camouflage before molting into their bright adult colors.",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "rufous-night-heron-bakaw-or-lapay",
    "hasSignage": false,
    "descriptionLabel": "Description / Background",
    "researchLabel": "Further Research & Fun Facts",
    "significanceLabel": "Historical & Ecological Significance",
    "sourcePhotoFile": "image81.jpg",
    "sourceSignageFile": ""
  },
  {
    "n": 30,
    "name": "Little Heron",
    "description": "The Little Heron ( Butorides striatus ) is officially the smallest species of heron found in the Philippines. It has a dark greyish-green back, a black cap, short legs, and a sharp dagger-like bill designed for spearing aquatic prey. It thrives across coastal environments, including mangrove forests, tidal mudflats, sandy beaches, and estuaries where it hunches quietly along the water's edge waiting for fish to swim nearby.",
    "significance": "Historically, small shorebirds like the Little Heron were familiar sights to early coastal and riverine settlements in Bulacan and across Luzon. Early indigenous fishermen observed the patience and camouflage techniques of these small herons along riverbanks, often using their presence as a sign of abundant shallow-water fish stock.This small bird is an essential ecological monitor for coastal health, regulating small fish, crabs, and insect populations in mangrove ecosystems.",
    "research": "The Philippines hosts two distinct populations of the Little Heron, one population that lives in the country year-round (resident) and another that flies in seasonally during winter months (migratory). These clever birds are also known globally as one of the few bird species that use \"tools\" for fishing; they sometimes drop leaves, twigs, or small insects onto the water surface as bait to lure curious fish within striking distance __________________________________",
    "site": "National Museum of Natural History",
    "category": "Natural History",
    "id": 30,
    "image": "assets/images/artifacts/little-heron.jpg",
    "signage": "",
    "summary": "The Little Heron ( Butorides striatus ) is officially the smallest species of heron found in the Philippines. It has a dark greyish-green back, a black cap, short legs, and a…",
    "source": "RPH WEBSITE INPUTS (2).docx; section 0.30 Little Heron.",
    "official": "The Little Heron ( Butorides striatus ) is officially the smallest species of heron found in the Philippines. It has a dark greyish-green back, a black cap, short legs, and a sharp dagger-like bill designed for spearing aquatic prey. It thrives across coastal environments, including mangrove forests, tidal mudflats, sandy beaches, and estuaries where it hunches quietly along the water's edge waiting for fish to swim nearby.",
    "analysis": "Historically, small shorebirds like the Little Heron were familiar sights to early coastal and riverine settlements in Bulacan and across Luzon. Early indigenous fishermen observed the patience and camouflage techniques of these small herons along riverbanks, often using their presence as a sign of abundant shallow-water fish stock.This small bird is an essential ecological monitor for coastal health, regulating small fish, crabs, and insect populations in mangrove ecosystems.",
    "reflection": "The Philippines hosts two distinct populations of the Little Heron, one population that lives in the country year-round (resident) and another that flies in seasonally during winter months (migratory). These clever birds are also known globally as one of the few bird species that use \"tools\" for fishing; they sometimes drop leaves, twigs, or small insects onto the water surface as bait to lure curious fish within striking distance __________________________________",
    "references": "Course connection and further research information are recorded in the group’s RPH WEBSITE INPUTS document. Verify any external historical claims against the cited museum label or source before publication.",
    "slug": "little-heron",
    "hasSignage": false,
    "descriptionLabel": "Description / Background",
    "researchLabel": "Further Research & Fun Facts",
    "significanceLabel": "Historical Significance",
    "sourcePhotoFile": "image20.jpg",
    "sourceSignageFile": ""
  }
];

const essentialQuestions = [
  {
    "question": "What was the subject of the museum? What is the relevance of the museum you visited?",
    "answer": "During our visit to Intramuros and the three National Museums, we learned that Philippine history is not only about dates, famous people, or events written in our textbooks. It is also about the experiences of our ancestors, their beliefs and traditions, the struggles they faced, and the contributions they made to our country. Each place we visited gave us a different perspective on Philippine history. Intramuros helped us understand the effects of Spanish colonization, while the National Museum of Anthropology showed us that early Filipinos already had their own culture, writing systems, and traditions before the Spaniards arrived. The National Museum of Fine Arts showed us how Filipino artists used their talents to express emotions and communicate important messages, while the National Museum of Natural History helped us appreciate the Philippines' rich biodiversity. Seeing these places, artifacts, and artworks in person made the lessons more meaningful because we could observe them closely and discuss their significance with one another."
  },
  {
    "question": "What aspects of Philippine history and culture are highlighted in the museum?",
    "answer": "The museums help preserve Philippine history and culture by keeping important artifacts, artworks, and other objects that tell stories about our past. These exhibits allow us to learn about the lives of Filipinos from different periods and understand how our culture developed over time. For example, the Manunggul Jar showed us how early Filipinos viewed death and the afterlife, while the Maitum burial jar covers showed the creativity and care they gave to their burial practices. At the National Museum of Fine Arts, Juan Luna's Spoliarium caught our attention because it portrays suffering and can be understood as a representation of the oppression experienced by Filipinos during the colonial period. We also saw José Rizal's UST diploma and his clay sculpture Josephine Sleeping, which gave us a closer look at another side of his life and talents. Through these collections, museums help keep our history alive and allow future generations to appreciate the achievements, beliefs, and experiences of the people who came before us."
  },
  {
    "question": "What stories do the exhibits tell about our past and present?",
    "answer": "The exhibits helped us imagine how Filipinos lived, what they believed in, and what they experienced throughout different periods of history. The artifacts at the National Museum of Anthropology showed us that early Filipinos already had their own ways of writing, creating objects, honoring the dead, and organizing their communities. This helped us understand that our ancestors had established traditions and knowledge long before Spanish colonization. Meanwhile, our visit to Intramuros gave us a different perspective on the hardships Filipinos experienced under Spanish rule. Seeing Fort Santiago, its old walls, cannons, and dungeon made us think about the people who were imprisoned and suffered in those places. We also noticed that the dungeon area was damp, with pools of water on the floor, which made the place feel different from simply reading about it in a book. These experiences helped us connect historical information with actual places and objects, making it easier to imagine the lives and struggles of Filipinos in the past."
  },
  {
    "question": "What specific historical or cultural artifact struck you the most during your museum visit? Why?",
    "answer": "Several exhibits caught our attention because each one had something interesting to offer. At the National Museum of Natural History, we enjoyed seeing the taxidermy animals and learning more about the wildlife found in the Philippines. The Little Heron was particularly interesting because herons are also the animal symbol of the University of Makati, making the exhibit more familiar to us. We were also interested in the Philippine Eagle Owl because of its appearance and the fact that it is classified as vulnerable due to habitat loss. At the National Museum of Fine Arts, Spoliarium stood out because of its size, details, and deeper meaning. Learning how the painting could represent suffering and oppression made us appreciate it beyond its appearance. We also found Rizal's UST diploma and Josephine Sleeping interesting because they allowed us to see objects connected to his education and artistic side. Meanwhile, the Manunggul Jar at the National Museum of Anthropology caught our attention because its design represents early Filipino beliefs about death and the afterlife. These exhibits showed us that learning history can be interesting because even a single object can tell a meaningful story."
  },
  {
    "question": "What did you learn about your local or national identity through this experience?",
    "answer": "Our visit helped us appreciate Filipino identity by showing us that it was shaped by different experiences, including our ancestors' traditions, the struggles during colonization, and the achievements of Filipino artists and other individuals. Before visiting these places, we might have mostly associated Philippine history with the arrival of the Spaniards and the events that followed. However, the National Museum of Anthropology showed us that Filipinos already had their own beliefs, skills, and traditions before colonization. The historical sites in Intramuros reminded us of the hardships and sacrifices that became part of our country's journey toward freedom. Seeing Manila Cathedral also reminded us of GOMBURZA and their significance in Philippine history. At the National Museum of Fine Arts, we learned that Filipino artists could express important ideas through their works and use their talents to communicate the experiences of their people. These experiences helped us understand that Filipino identity is not defined by only one event or period. It is a combination of our cultural roots, struggles, achievements, and the values that continue to shape us today."
  },
  {
    "question": "How does the museum contribute to our understanding of local and national history? How did the museum visit change your perspective of Philippine history?",
    "answer": "We realized that historical sites are important because they allow us to see and experience parts of history that we usually only read about. During our visit to Intramuros, we were amazed by how large the area was and how much history it held. Walking around its old streets and structures made us imagine what life might have been like during the Spanish colonial period. Seeing Manila Cathedral reminded us of GOMBURZA and their sacrifices, while Fort Santiago made us think about the Filipinos who suffered under colonial rule. We were especially interested in the condition of some of the old structures because we noticed that certain parts were already crumbling, with moss and plants growing around them. Catbagan and I even discussed the condition of the buildings and wondered what Fort Santiago might look like in the future if nature continued to take over. Although the plants gave the structures a unique appearance, our conversation also made us realize that these places need proper care and maintenance. Historical sites are more than old buildings because they serve as physical reminders of what happened in the past and help future generations understand the experiences of those who came before them."
  },
  {
    "question": "Why is visiting historic sites, shrines, landmarks, and museums important in the study of history? How has your previous experience (if any) of visiting a specific historic landmark or museum helped you with the understanding of historical facts or events?",
    "answer": "Visiting Intramuros and the three museums helped us connect the lessons we learned in class to real places, objects, and experiences. Instead of simply reading about Spanish colonization, we were able to walk around Intramuros and see the structures that remain from that period. Seeing Fort Santiago, its cannons, and the dungeon made us think more deeply about the experiences of Filipinos during colonial rule. The damp conditions inside the dungeon, especially the pools of water on the floor, made the place feel more real to us than a description in a textbook. At the museums, seeing actual artifacts such as the Manunggul Jar and artworks like Spoliarium helped us understand their meanings and historical significance more clearly. We also had the opportunity to observe details that we might not have noticed if we had only seen pictures online. Since we visited these places together, we could share our observations and discuss what stood out to us. This experience showed us that learning does not have to happen only inside a classroom because exploring historical places ourselves can also help us understand and appreciate our lessons."
  },
  {
    "question": "Why is it important to promote and preserve our cultural heritage?",
    "answer": "Preserving historical sites, artifacts, and museums is important because they contain valuable reminders of our country's history, culture, and identity. These places allow us to learn from the experiences of previous generations and understand how past events helped shape the Philippines today. Without proper preservation, some historical structures may continue to deteriorate, and important artifacts may become damaged or lost. During our visit to Intramuros, we noticed that some old structures were already crumbling, with moss and plants growing around them. This observation made us think about how these places might change over time if they are not properly maintained. Although we found the appearance of the old structures interesting, we also understood that their condition could become a concern for their preservation. Museums also need proper care because the artifacts and artworks they contain cannot always be replaced once they are damaged or lost. Preserving these places and collections is not only about keeping old things in good condition. It is also about protecting the stories, knowledge, and experiences they represent so that future generations can learn from them and develop a stronger appreciation for their heritage."
  },
  {
    "question": "In what ways can the youth contribute to heritage preservation in their own communities? What actions can we take to promote and protect our national patrimony?",
    "answer": "Young people can help preserve Philippine history and culture by taking an active interest in learning about the past and encouraging others to appreciate it as well. We do not have to wait for our schools to organize activities before visiting historical sites or museums. We can make time to explore these places with our friends or families, read about the exhibits, and discuss what we learn from our experiences. We can also use social media to share interesting facts, photographs, and personal reflections about historical sites and cultural artifacts, as long as the information we share is accurate. When visiting these places, we should follow the rules, avoid littering or damaging structures, and respect the exhibits. We can also help raise awareness about the importance of maintaining historical landmarks, especially when we notice areas that need attention. Aside from cultural preservation, our visit to the National Museum of Natural History reminded us that we should also care for the environment and protect wildlife, especially species threatened by habitat loss. Through these simple actions, young people can help ensure that our history, culture, and natural heritage continue to be appreciated by future generations."
  },
  {
    "question": "How can educational institutions help further in the preservation of our history and culture?",
    "answer": "Schools and communities can encourage people to appreciate Philippine history and culture by providing opportunities to explore historical sites, visit museums, participate in cultural activities, and learn about local traditions. They can also make history more interesting by encouraging students to conduct research, share their observations, and discuss the significance of the places and objects they encounter. However, our experience also showed us that people can take the initiative to learn outside school. By visiting Intramuros and the three National Museums on our own, we were able to explore the exhibits at our own pace, notice details that interested us, and share our thoughts with one another. This made the experience feel more personal because we were not only receiving information but also forming our own observations and realizations. Communities can support these efforts by taking care of historical landmarks, organizing cultural programs, and sharing stories about their local heritage. Schools can encourage students to document their experiences and reflect on what they learned instead of treating visits to historical places as something to complete for an assignment. In this way, appreciating history becomes a personal responsibility and an ongoing interest rather than something we do only when required."
  }
];

const museumReflections = [
  {
    "museum": "Intramuros",
    "section": "Overall Observations",
    "text": "Walking through Intramuros together, we immediately felt the heavy, imposing presence of colonial power preserved in stone. Standing in Plaza de Roma, we saw state authority (Palacio del Gobernador) and religious authority (Manila Cathedral) facing each other, surrounded by massive adobe walls, bastions, and dark subterranean dungeons designed to maintain total control. What struck us most, however, were the visible scars of survival like cracked stone arches, restored brickwork, and ruins left standing after centuries of earthquakes and the total destruction of World War II. For our group, it stood out as a place where layers of beauty, defense, and tragedy sit side by side in a remarkably small geographic footprint."
  },
  {
    "museum": "Intramuros",
    "section": "Overall Insights",
    "text": "Our main takeaway from exploring these specific grounds as a team is that Intramuros represents a powerful historical irony. The Spanish built these walls, palaces, and cells to entrench foreign rule, yet these exact physical spaces became the very cradle of Filipino nationhood. Tracing the footsteps of Gomburza near the cathedral and Jose Rizal through Fort Santiago showed us how places meant to suppress and imprison Filipinos ended up igniting their fight for freedom. We realized that Intramuros isn't just an old Spanish fortress, it is a sacred space where our ancestors endured hardship, reclaimed their dignity, and transformed symbols of colonial oppression into monuments of Filipino resilience and identity."
  },
  {
    "museum": "Intramuros",
    "section": "Overall Significance",
    "text": "Walking through the stone streets, passing through the grand old arches, and looking up at the high walls of Intramuros felt like stepping right inside a history book. This highlights the importance of Intramuros as a real, standing memory of the hundreds of years when Spain ruled the Philippines and built a walled city to keep themselves safe."
  },
  {
    "museum": "Intramuros",
    "section": "Overall Analysis",
    "text": "Analyzing this old stone city reveals how hard life was for early Filipinos who lived under foreign rulers for a very long time, often built the walls themselves, and were not allowed the same freedoms as the rulers. This demonstrates that even though large parts of Intramuros were completely destroyed by bombs during World War II, the way it was rebuilt piece by piece shows the strong spirit of the Filipino people, who always find a way to recover, rebuild, and stand back up after difficult times."
  },
  {
    "museum": "Intramuros",
    "section": "Overall Question",
    "text": "When we walk past these stone walls today, are we standing inside a preserved monument of Spanish power, or where the Filipino nation was born?"
  },
  {
    "museum": "National Museum of Anthropology",
    "section": "Overall Observations",
    "text": "Walking through the galleries of the National Museum of Anthropology together, we were deeply struck by the sheer antiquity and sophistication of early Philippine civilization. From the intricately carved anthropomorphic covers of the Maitum Burial Jars and the majestic Manunggul Jar to the physical proof of pre-colonial literacy in the Laguna Copper-Plate Inscription and Monreal Stones, we saw clear evidence that our ancestors possessed vibrant spiritual lives, complex laws, and active international trade networks long before foreign colonizers set foot on our shores."
  },
  {
    "museum": "National Museum of Anthropology",
    "section": "Overall Insights",
    "text": "Our main takeaway from exploring these artifacts as a group is that pre-colonial Philippine society was neither isolated nor primitive. The evidence of written scripts ( Baybayin and Kawi ), specialized industries (such as the Inabel foot loom and Mandaya backstrap loom), and regional trade (highlighted by the Butuan Ivory Seal and Metal Paleograph) proved to us that early Filipinos had a fully developed cultural identity. European contact did not invent Philippine culture or literacy; rather, colonial records like Plasencia's Doctrina Christiana merely documented and adapted writing and social structures that were already deeply rooted across our islands."
  },
  {
    "museum": "National Museum of Anthropology",
    "section": "Overall Significance",
    "text": "This museum serves as a vital connection to the daily lives of our ancestors before any foreign settlers arrived on our islands. It shows us very old clay burial pots like the Manunggul Jar, early wooden boats, farming and fishing tools, handmade woven clothes, and early Filipino writing scripts. All these items prove that our ancestors already had their own rich, peaceful, and organized way of life."
  },
  {
    "museum": "National Museum of Anthropology",
    "section": "Overall Analysis",
    "text": "Examining these old objects deeper indicates that Filipino culture and intelligence did not start with foreign visitors coming to our land in the 1500s. This leads us to understand that early Filipinos were already smart boat builders who traveled across open seas, traded goods with neighboring countries, made beautiful art, and took care of their communities, which gives us a deep sense of pride in our original roots."
  },
  {
    "museum": "National Museum of Anthropology",
    "section": "Overall Question",
    "text": "When we look at our ancient scripts, sacred burial jars, and woven textiles, are we looking at forgotten traditions of the past, or are we witnessing the living foundation of who we are as Filipinos today?"
  },
  {
    "museum": "National Museum of Fine Arts",
    "section": "Overall Observations",
    "text": "Walking through the halls of the National Museum of Fine Arts together, we felt a deep shift in how our story as Filipinos is told. Moving away from the ancient tools and jars of the Anthropology museum, we found ourselves standing in front of huge, breathtaking paintings like Juan Luna’s Spoliarium , detailed portraits, and even Rizal’s personal clay sculpture and real UST diplomas. It was amazing for us to see how our early artists mastered European art techniques and turned them into something entirely our own using paint and clay to show real human feelings, personal dignity, and the painful truths of life under colonial rule."
  },
  {
    "museum": "National Museum of Fine Arts",
    "section": "Overall Insights",
    "text": "What touched us the most as a group is realizing that art back then wasn't just made to look pretty on a wall, it was a real way to fight for our nation. The Ilustrados and artists of the late 1800s used their education, talent, and achievements in Europe to speak up for Filipinos. Masterpieces like the Spoliarium gave a visual voice to the pain felt after the execution of GOMBURZA and helped light the spark that led to the 1896 Revolution. Through their brushes and chisels, our ancestors stopped letting foreigners write our story and instead painted their own picture of who we truly are."
  },
  {
    "museum": "National Museum of Fine Arts",
    "section": "Overall Significance",
    "text": "Standing in front of giant, famous paintings like Juan Luna’s Spoliarium, along with Dr. José Rizal’s hand-carved clay statues, personal drawings, and school diplomas, underscores the immense value of art, storytelling, and hard work in school for building our identity as a nation."
  },
  {
    "museum": "National Museum of Fine Arts",
    "section": "Overall Analysis",
    "text": "A closer evaluation of these artworks shows that paintings, drawings, and statues back then were not made just to look pretty on a wall or to decorate expensive houses. This proves that early Filipino thinkers, heroes, and artists used their paintbrushes, statues, and education as peaceful weapons to speak up against bad treatment by colonizers, show that Filipinos are smart and equal to anyone else in the world, and awaken a desire for freedom in the hearts of our people."
  },
  {
    "museum": "National Museum of Fine Arts",
    "section": "Overall Question",
    "text": "If Filipinos from the past used classical art to fight colonial rule, what modern medium must our generation master today to defend our truth and national identity?"
  },
  {
    "museum": "National Museum of Natural History",
    "section": "Overall Observations",
    "text": "This was honestly the museum that our group enjoyed the most. We also enjoyed the transparent elevator where you can see the whole view of the museum from it. Walking around the rooms and seeing native birds like the Philippine Serpent Eagle, the Philippine Eagle Owl, the Rufous Night-Heron ( Bakaw ), and the Little Heron up close was such a fun experience for us. Looking at them up close helped us see how special each bird is, from their colorful feathers and different sizes to the unique ways they survive in our forests, rivers, and mangrove trees."
  },
  {
    "museum": "National Museum of Natural History",
    "section": "Overall Insights",
    "text": "What we learned and felt during this visit is that our nature and our history as Filipinos go hand in hand. Long ago, before there were cities and technology, our ancestors lived right beside these animals. They listened to their calls to tell the time of day, read the weather, and know when the ocean tides were changing. These birds are not just stuffed animals in glass boxes, they are a big part of who we are. Taking care of their forest and water homes today is so important so that future Filipino kids can see them flying free in the wild."
  },
  {
    "museum": "National Museum of Natural History",
    "section": "Overall Significance",
    "text": "As the museum our group enjoyed the most during our whole trip, this place holds great meaning for us because it showed us the amazing animals, plants, trees, and sea life that belong to the Philippines. Seeing native birds up close like giant Philippine eagles, nocturnal owls, and coastal herons showed us how special our island ecosystems really are."
  },
  {
    "museum": "National Museum of Natural History",
    "section": "Overall Analysis",
    "text": "Carefully observing these animal specimens illustrates that our history is closely tied to our natural land, forests, and oceans. This reveals how early Filipinos lived peacefully alongside nature by listening to bird calls to tell the time of day and observing ocean waves to know when to fish, which emphasizes our responsibility today as young people to protect these animals and keep their forest homes clean so that future Filipino children can see them flying free in the wild rather than only inside glass display boxes."
  },
  {
    "museum": "National Museum of Natural History",
    "section": "Overall Question",
    "text": "If these Philippine birds could talk to us today, what story would they tell us about its history?"
  }
];

const members = [
  {
    "name": "Catbagan",
    "role": "Individual field reflection",
    "image": "assets/images/members/catbagan.jpg",
    "bio": "Our trip took us to the National Museum of Fine Arts, National Museum of Anthropology, National Museum of Natural History, and Intramuros. Every place felt different and had something new to teach me. But if I am being honest, I especially love Intramuros the most. Every corner felt like it held a piece of our country's story, and walking through those old streets made me feel more connected to our history than ever before.\n\nWhen we walked around Intramuros and Fort Santiago, I was really interested in the old walls and structures. I noticed the cannons on display, and it made me imagine what life must have been like back then and how important defense was during colonial times. I was also really moved by the white cross where it marks the place where around 600 Filipinos were buried. Just thinking about how many lives were lost there made my heart heavy. It made me think about how much our people have suffered throughout our history. But the part that really stuck with me was going down into the dungeon. The air felt so heavy and quiet down there. I could almost feel the pain and sadness of the people who were locked up in that long ago. Honestly, I could not stay there for long because it felt too overwhelming. I walked back up and sat on one of the stone seats. When I got up from the dungeon, I talked to Dasoc and said how in awe I am to imagine that the place where I am or we are right now witnessed all kinds of death. I even joked about ghosts. As I waited for others to go out, I looked around. Everything felt different. That is when it hit me that history is not just words in a textbook. It actually happened, right where I was standing. It felt like watching a movie that ends with \"based on a true story.\" Visiting these places gives you a feeling that you just cannot get from sitting in a classroom. It made me truly understand what our ancestors went through and why it is so important to keep these places safe and remembered. They connect us to our past in a way that nothing else can.\n\nAt the National Museum of Fine Arts, I enjoyed looking at the paintings and sculptures. One thing that really caught my eye was a small clay sculpture that Jose Rizal made of Josephine Bracken. It is called “Josephine Sleeping”. It felt so personal and gentle. We always talk about Rizal as our hero and writer, but seeing this reminded me that he was also just a person who loved and cared deeply. It showed me that our heroes had real feelings and quiet moments, too.\n\nThe National Museum of Anthropology was fascinating as well. I learned about the writing systems our ancestors used and saw objects that showed how our ancestors traded and connected with other communities long before the Spanish arrived. It made me feel proud to know that our people had their own culture, knowledge, and connections with the world from the very beginning. We were not just waiting for others to civilize us, because we already had our own story.\n\nThe most enjoyable for me was the National Museum of Natural History. I was so excited to learn about the Philippine Eagle Owl. I had no idea we had such a beautiful and unique owl right here in our country. It was bigger than I imagined, with striking yellow eyes and feathery tufts on its head. It looked so wise and special. But it also made me a little sad to learn that it is losing its home because our forests are disappearing. It made me realize that there are still so many treasures in our own land that we barely know about, and that we need to take care of them before they are gone.\n\nThis whole experience taught me that learning is not just about memorizing dates and names from books. Standing at Fort Santiago, walking through museums, and seeing these things with my own eyes made our history and culture feel real and alive. I realized that everything we have today, our freedom, our culture, our beautiful land was something people before us fought for, created and protected. My biggest takeaway is that we are the ones now responsible for keeping these stories, these places, and these treasures alive. We should value them, learn from them, and protect them, not just because they belong to the past but because they are part of who we are today."
  },
  {
    "name": "Dasoc",
    "role": "Individual field reflection",
    "image": "assets/images/members/dasoc.jpg",
    "bio": "Our field experiential learning brought us to the National Museum of Fine Arts, the National Museum of Anthropology, the National Museum of Natural History, and Intramuros. It was a memorable experience because we were able to explore places that we usually only learn about in school. Each destination offered something different, and I enjoyed discovering new things along the way. My favorite was the National Museum of Natural History because I have always found animals interesting, and seeing the different specimens up close made the experience even more exciting.\n\nDuring our visit to Intramuros, I was amazed by how large the place was and how much history it held. Walking around the area made me imagine what life was like during the Spanish colonial period. Seeing Manila Cathedral reminded me of GOMBURZA and their sacrifices, while visiting Fort Santiago made me think about the Filipinos who suffered under colonial rule. I was especially interested in the old structures and how they had survived for so many years. However, I also noticed that some parts were already crumbling, with moss and plants growing around them. Catbagan and I even talked about the condition of the structures and buildings. Our conversation made me wonder what Fort Santiago might look like in the future if nature continued to take over. Although the plants gave the old structures a unique appearance, I realized that these historical landmarks still need proper care and maintenance to preserve their history for future generations.\n\nAt the National Museum of Fine Arts, I appreciated how artworks could express emotions and tell stories about the past. One artwork that caught my attention was Juan Luna's Spoliarium. Seeing such a large painting in person made me appreciate the effort and skill behind it. Learning about its connection to the suffering of Filipinos during the Spanish colonial period also helped me understand that art can communicate messages beyond what we see on the canvas. At the National Museum of Anthropology, I was fascinated by the burial jars and other objects created by our ancestors. These artifacts showed me that early Filipinos had their own beliefs, traditions, and artistic skills long before the Spaniards arrived.\n\nThe National Museum of Natural History was the place I enjoyed the most. I was fascinated by almost all the taxidermy animals because they looked so realistic, as if they were only sleeping or frozen in time. I found myself looking closely at their bodies, feathers, and other features. I also enjoyed exploring the different floors and seeing the variety of animals displayed throughout the museum. It was amazing to see so many different species in one place. At the same time, I realized that these displays reminded us of the wildlife that exists in our country and the importance of protecting their natural habitats. It would be sad if future generations could only see some of these animals in museums because they had disappeared from the wild.\n\nThis experience taught me that learning can be more meaningful when we get to see things for ourselves. I enjoyed the trip not only because it was fun but also because it helped me appreciate our history, culture, and environment in a new way. I learned that historical landmarks, cultural artifacts, and wildlife all deserve our attention and care. As someone who especially enjoyed the animal exhibits, I hope to become more aware of how our actions affect the environment. I also realized that preserving our heritage is important because it allows future generations to learn about and appreciate the things that make our country unique."
  },
  {
    "name": "Falco",
    "role": "Individual field reflection",
    "image": "assets/images/members/falco.jpg",
    "bio": "Our field experiential learning gave us the chance to visit the National Museum of Fine Arts, the National Museum of Anthropology, the National Museum of Natural History, and Intramuros. I enjoyed the experience because we were able to see historical places and objects in person instead of just reading about them in our lessons. The moments that stood out to me were seeing the dungeons in Fort Santiago, discovering José Rizal's academic diploma, learning about the Little Heron, and noticing how historical places continue to be meaningful to people today.\n\nWhile exploring Intramuros, I was surprised by how large the area was and how its old structures preserved stories from the past. At Fort Santiago, seeing the damp dungeons with pools of water made me imagine the suffering of the Filipino prisoners who were held there, including José Rizal before his execution. However, I also noticed a couple having their wedding pictorial in the area. Similarly, learning that people still dream of getting married at Manila Cathedral made me realize that these historical places remain relevant today. Despite their connection to the past, they continue to be part of people's special memories and future plans. This showed me that history is not only about what happened before but also about how these places remain meaningful in our lives today.\n\nAt the National Museum of Fine Arts, one of the most interesting things for me was seeing the academic diplomas and certificates of José Rizal. The exhibit included his Bachelor of Arts diploma from the University of Santo Tomas, awarded in 1877. Seeing an actual document connected to our national hero made me think about how education helped shape his ideas and achievements. It reminded me that before he became known for his writings and contributions to Philippine history, he was also a student who worked hard to pursue his education. This made his story feel more personal and reminded me that education can help us contribute something meaningful to society.\n\nAt the National Museum of Anthropology, I enjoyed seeing the different artifacts that showed how our ancestors lived. The ancient burial jars and traditional objects made me curious about the beliefs and practices of early Filipino communities. I realized that our ancestors already had their own ways of expressing their beliefs, honoring the dead, and passing down traditions. These objects helped me understand their experiences and values despite the differences between their lives and ours.\n\nMy favorite museum was the National Museum of Natural History, especially when we saw the Little Heron. Since the heron is associated with the University of Makati, seeing it among the exhibits made the experience feel more connected to our school. I found it interesting to learn about its features and how they help it catch prey in shallow water. Seeing the bird made me appreciate the connection between our school's symbols and the natural world. It also reminded me of the importance of protecting the environments where these animals live. I also enjoyed the museum's exhibits and its transparent elevator.\n\nThis trip helped me realize that history becomes more meaningful when we connect it to real places, objects, and people. The dungeons made me reflect on the suffering of Filipino prisoners, while the wedding pictorials at Fort Santiago and the continued importance of Manila Cathedral showed me how historical places remain relevant today. Rizal's diploma reminded me of the value of education, while the Little Heron gave me a new appreciation for a symbol connected to our university. Overall, this experience helped me understand that history is not simply about the past because it continues to influence our culture, values, and lives today.\n\n"
  }
];



// --- Infinite destination carousel ---
const track = $("#destinationTrack");
const viewport = $("#carouselViewport");
let activeIndex = 0;
let currentPosition = 0;
let cardStep = 0;
let carouselTimer = null;
let pointerStartX = 0;
let pointerDeltaX = 0;
let isPointerDown = false;
let suppressClick = false;

function cardMarkup(place, index, isClone = false) {
  const label = `${String((index % destinations.length + destinations.length) % destinations.length + 1).padStart(2, "0")}`;
  return `
    <button class="destination-card${isClone ? " clone-card" : ""}" type="button" data-id="${place.id}" data-index="${index}" aria-label="Explore ${place.name}">
      <span class="destination-card-media">
        <img class="destination-poster" src="${place.image}" alt="" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('image-placeholder')">
        <video class="destination-video" muted loop playsinline preload="none" poster="${place.image}" aria-hidden="true">
          <source src="${place.video}" type="video/mp4">
        </video>
        <span class="placeholder-message">Add destination photo<br><small>${place.image}</small></span>
      </span>
      <span class="destination-card-top"><span class="destination-tag">${place.category}</span><span class="destination-arrow" aria-hidden="true">↗</span></span>
      <span class="destination-card-copy"><h3>${place.name}</h3><p>${place.short}</p></span>
      <span class="destination-card-number">${label} / 05</span>
    </button>`;
}

function renderCarousel() {
  // Clone both ends. The track can travel into the clones, then silently jump to the matching real card.
  track.innerHTML = destinations.map((place, i) => cardMarkup(place, i, true)).join("")
    + destinations.map((place, i) => cardMarkup(place, i)).join("")
    + destinations.map((place, i) => cardMarkup(place, i + destinations.length, true)).join("");
  requestAnimationFrame(() => {
    measureCarousel();
    currentPosition = destinations.length;
    setTrackPosition(false);
    updateCarousel();
  });
}

function measureCarousel() {
  const cards = $$(".destination-card", track);
  if (cards.length < 2) return;
  const style = getComputedStyle(track);
  const gap = parseFloat(style.columnGap || style.gap) || 0;
  cardStep = cards[0].getBoundingClientRect().width + gap;
}

function setTrackPosition(animate = true) {
  track.style.transition = animate ? "transform 520ms cubic-bezier(.2,.75,.25,1)" : "none";
  const centerOffset = (viewport.clientWidth - (cardStep ? cardStep - (parseFloat(getComputedStyle(track).gap) || 0) : 0)) / 2;
  track.style.transform = `translate3d(${centerOffset - currentPosition * cardStep}px,0,0)`;
}

function normalizePosition() {
  const n = destinations.length;
  if (currentPosition >= n * 2) {
    currentPosition -= n;
    setTrackPosition(false);
  } else if (currentPosition < n) {
    currentPosition += n;
    setTrackPosition(false);
  }
}

function updateCarousel() {
  const cards = $$(".destination-card", track);
  cards.forEach((card, i) => {
    const realIndex = ((Number(card.dataset.index) % destinations.length) + destinations.length) % destinations.length;
    const isActive = i === currentPosition;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", isActive ? "true" : "false");
    card.dataset.realIndex = realIndex;
  });
  activeIndex = ((currentPosition - destinations.length) % destinations.length + destinations.length) % destinations.length;
  syncCarouselVideos(cards);
  const place = destinations[activeIndex];
  $("#carouselCounter").textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(destinations.length).padStart(2, "0")}`;
  $("#carouselProgress").style.width = `${((activeIndex + 1) / destinations.length) * 100}%`;
  updateSelectedDestination(place);
}

function syncCarouselVideos(cards) {
  cards.forEach((card, index) => {
    const video = $(".destination-video", card);
    if (!video) return;
    const nearActiveCard = Math.abs(index - currentPosition) <= 2;
    if (nearActiveCard && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
    } else {
      video.pause();
    }
    video.addEventListener("playing", () => {
      const poster = $(".destination-poster", card);
      if (poster) poster.style.opacity = "0";
      video.style.opacity = ".8";
    }, { once: true });
    video.addEventListener("error", () => {
      video.style.display = "none";
    }, { once: true });
  });
}

function moveCarousel(direction) {
  currentPosition += direction;
  setTrackPosition(true);
  updateCarousel();
  restartAutoPlay();
}
function goToRealIndex(index) {
  const n = destinations.length;
  // The real set is in the middle. This preserves seamless wrap in either direction.
  currentPosition = n + ((index % n) + n) % n;
  setTrackPosition(true);
  updateCarousel();
  restartAutoPlay();
}

track.addEventListener("transitionend", () => {
  normalizePosition();
  updateCarousel();
});
track.addEventListener("click", (event) => {
  if (suppressClick) { event.preventDefault(); return; }
  const card = event.target.closest(".destination-card");
  if (!card) return;
  const realIndex = Number(card.dataset.realIndex);
  if (realIndex !== activeIndex) goToRealIndex(realIndex);
  updateSelectedDestination(destinations[realIndex]);
  setArtifactFilter(destinations[realIndex].artifactSite || destinations[realIndex].name);
  window.setTimeout(() => $("#artifacts").scrollIntoView({ behavior: "smooth", block: "start" }), 220);
});
$("#carouselPrev").addEventListener("click", () => moveCarousel(-1));
$("#carouselNext").addEventListener("click", () => moveCarousel(1));
viewport.addEventListener("pointerdown", (event) => {
  isPointerDown = true; pointerStartX = event.clientX; pointerDeltaX = 0;
  viewport.classList.add("is-dragging"); track.style.transition = "none"; stopAutoPlay();
  viewport.setPointerCapture?.(event.pointerId);
});
viewport.addEventListener("pointermove", (event) => {
  if (!isPointerDown) return;
  pointerDeltaX = event.clientX - pointerStartX;
  const centerOffset = (viewport.clientWidth - (cardStep ? cardStep - (parseFloat(getComputedStyle(track).gap) || 0) : 0)) / 2;
  track.style.transform = `translate3d(${centerOffset - currentPosition * cardStep + pointerDeltaX}px,0,0)`;
});
function finishDrag() {
  if (!isPointerDown) return;
  isPointerDown = false; viewport.classList.remove("is-dragging");
  if (Math.abs(pointerDeltaX) > 35) {
    suppressClick = true;
    moveCarousel(pointerDeltaX < 0 ? 1 : -1);
    setTimeout(() => { suppressClick = false; }, 80);
  } else {
    setTrackPosition(true); restartAutoPlay();
  }
  pointerDeltaX = 0;
}
viewport.addEventListener("pointerup", finishDrag);
viewport.addEventListener("pointercancel", finishDrag);
viewport.addEventListener("pointerleave", (event) => { if (event.buttons === 0) finishDrag(); });
viewport.addEventListener("mouseenter", () => {});
viewport.addEventListener("mouseleave", restartAutoPlay);
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && document.activeElement.closest?.("#carouselViewport")) moveCarousel(-1);
  if (event.key === "ArrowRight" && document.activeElement.closest?.("#carouselViewport")) moveCarousel(1);
});
function startAutoPlay() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  stopAutoPlay();
  carouselTimer = setInterval(() => moveCarousel(1), 1450);
}
function stopAutoPlay() { if (carouselTimer) clearInterval(carouselTimer); carouselTimer = null; }
function restartAutoPlay() { stopAutoPlay(); startAutoPlay(); }

function updateSelectedDestination(place) {
  $("#selectedEyebrow").textContent = `SELECTED DESTINATION / ${place.category.toUpperCase()}`;
  $("#selectedTitle").textContent = place.name;
  $("#selectedDescription").textContent = place.description;
  $("#selectedLocation").textContent = place.location;
  $("#selectedMap").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.map)}`;
  updateLocationMap(place);
  $("#selectedExplore").onclick = (event) => {
    event.preventDefault();
    setArtifactFilter(place.artifactSite || place.name);
    $("#artifacts").scrollIntoView({ behavior: "smooth" });
  };
}

// --- Artifact collection ---
function digitalLabelMarkup(item) {
  const text = (item.summary || item.official || "Explore this entry in the CDFiles collection.").replace(/<[^>]*>/g, "");
  return `<div class="digital-label-content"><span class="label-kicker">CDFILES · DIGITAL LABEL</span><strong>${item.name}</strong><small>${item.site}</small><p>${text}</p><span class="label-footer">FIELD COLLECTION / RPH</span></div>`;
}
let currentArtifactFilter = "all";
let currentSearch = "";
let favoriteIds = new Set();
try { favoriteIds = new Set(JSON.parse(localStorage.getItem("cdfiles-favorites") || "[]")); } catch (_) {}
function renderArtifacts() {
  const normalizedSearch = currentSearch.trim().toLowerCase();
  const filtered = artifacts.filter(item => {
    const matchesFilter = currentArtifactFilter === "all" || item.site === currentArtifactFilter;
    const text = [item.name, item.site, item.category, item.summary, item.official, item.significance, item.research].join(" ").toLowerCase();
    return matchesFilter && (!normalizedSearch || text.includes(normalizedSearch));
  }).sort((a, b) => a.name.localeCompare(b.name));
  const cardImage = item => `
    <span class="artifact-card-image flip-scene"><span class="flip-inner"><span class="flip-face flip-front"><img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('image-placeholder')"><span class="placeholder-message">Artifact photo unavailable</span></span><span class="flip-face flip-back ${item.hasSignage ? 'photo-signage' : 'digital-label'}">${item.hasSignage ? `<img src="${item.signage}" alt="${item.name} museum signage" loading="lazy" onerror="this.parentElement.classList.remove('photo-signage');this.parentElement.classList.add('digital-label');this.parentElement.innerHTML='&lt;div class=&quot;digital-label-content&quot;&gt;&lt;strong&gt;Museum label unavailable&lt;/strong&gt;&lt;p&gt;See the details panel for the source text.&lt;/p&gt;&lt;/div&gt;'">` : digitalLabelMarkup(item)}</span></span></span>`;
  $("#artifactGrid").innerHTML = filtered.length ? filtered.map(item => `
    <article class="artifact-card${favoriteIds.has(item.id) ? " is-favorite" : ""}" data-artifact-id="${item.id}">
      <button class="favorite-toggle${favoriteIds.has(item.id) ? " is-favorite" : ""}" type="button" data-favorite-id="${item.id}" aria-label="${favoriteIds.has(item.id) ? "Remove" : "Add"} ${item.name} ${favoriteIds.has(item.id) ? "from" : "to"} favorites" aria-pressed="${favoriteIds.has(item.id)}">${favoriteIds.has(item.id) ? "♥" : "♡"}</button>
      <button class="artifact-card-main" type="button" data-artifact-id="${item.id}">
        ${cardImage(item)}
        <span class="artifact-card-copy"><small>${item.site}</small><h3>${item.name}</h3><p>${item.summary}</p><span class="flip-hint">Tap photo to view signage / digital label ↻</span></span>
      </button>
    </article>`).join("") : `<div class="empty-state">No matching entries. Try another search or select “All entries.”</div>`;
  $$(".artifact-card-main", $("#artifactGrid")).forEach(card => {
    card.addEventListener("click", (event) => {
      const id = Number(card.dataset.artifactId);
      const scene = card.querySelector(".flip-scene");
      const back = card.querySelector(".flip-back img");
      if (event.target.closest(".flip-scene") && scene) scene.classList.toggle("is-flipped");
      selectArtifact(id);
    });
  });
  $$(".favorite-toggle", $("#artifactGrid")).forEach(button => button.addEventListener("click", event => {
    event.preventDefault(); event.stopPropagation();
    const id = Number(button.dataset.favoriteId);
    if (favoriteIds.has(id)) favoriteIds.delete(id); else favoriteIds.add(id);
    try { localStorage.setItem("cdfiles-favorites", JSON.stringify([...favoriteIds])); } catch (_) {}
    renderArtifacts();
  }));
  if (filtered.length && !filtered.some(item => item.id === Number($("#artifactDetail").dataset.activeId))) selectArtifact(filtered[0].id);
}
function selectArtifact(id) {
  const item = artifacts.find(entry => entry.id === id);
  if (!item) return;
  $("#artifactDetail").dataset.activeId = String(id);
  const detailImage = $("#detailImage");
  detailImage.src = item.image;
  detailImage.style.display = "";
  detailImage.alt = item.name;
  detailImage.dataset.frontSrc = item.image;
  detailImage.dataset.backSrc = item.hasSignage ? item.signage : "";
  detailImage.dataset.showingBack = "false";
  detailImage.classList.remove("showing-signage");
  const detailImageFrame = detailImage.closest(".detail-image");
  if (detailImageFrame) {
    detailImageFrame.classList.add("has-signage-flip");
    let digitalLabel = detailImageFrame.querySelector(".digital-signage-card");
    if (!digitalLabel) {
      digitalLabel = document.createElement("div");
      digitalLabel.className = "digital-signage-card";
      digitalLabel.setAttribute("aria-hidden", "true");
      detailImageFrame.appendChild(digitalLabel);
    }
    digitalLabel.innerHTML = `<span class="digital-signage-kicker">MUSEUM DIGITAL LABEL</span><strong>${item.name}</strong><span class="digital-signage-rule"></span><p>${item.official || item.description || item.summary || "Artifact information"}</p><small>CDFiles · Digital exhibit label</small>`;
    digitalLabel.hidden = true;
    let hint = detailImageFrame.querySelector(".detail-flip-hint");
    if (!hint) {
      hint = document.createElement("span");
      hint.className = "detail-flip-hint";
      detailImageFrame.appendChild(hint);
    }
    hint.textContent = item.hasSignage ? "Tap photo to view signage ↻" : "Tap photo to view digital label ↻";
    detailImage.style.cursor = "pointer";
  }
  $("#detailCategory").textContent = `${item.category} / ${item.site}`;
  $("#detailTitle").textContent = item.name;
  $("#detailDescriptionLabel").textContent = item.descriptionLabel;
  $("#detailSignificanceLabel").textContent = item.significanceLabel;
  $("#detailResearchLabel").textContent = item.researchLabel;
  $("#detailOfficial").textContent = item.official;
  $("#detailSource").textContent = item.source;
  $("#detailAnalysis").textContent = item.analysis;
  $("#detailReflection").textContent = item.reflection;
  $("#detailReferences").textContent = item.hasSignage ? "The card back uses the matching signage photograph included in the supplied Word document." : "No matching signage photograph was present in the supplied Word document, so the card back uses a clearly marked digital label based on this entry instead of pretending it is a photographed museum sign.";
  $$(".artifact-card").forEach(card => card.classList.toggle("selected", Number(card.dataset.artifactId) === id));
}
// Flip selected artifact to its real signage photo when available, otherwise to a designed digital label.
$("#artifactDetail").addEventListener("click", event => {
  const frame = event.target.closest(".detail-image");
  const image = frame?.querySelector("#detailImage");
  const digitalLabel = frame?.querySelector(".digital-signage-card");
  if (!image || (event.target !== image && !event.target.closest(".digital-signage-card"))) return;
  const showingBack = image.dataset.showingBack === "true";
  image.dataset.showingBack = showingBack ? "false" : "true";
  if (image.dataset.backSrc) {
    image.src = showingBack ? image.dataset.frontSrc : image.dataset.backSrc;
    image.style.display = "";
    if (digitalLabel) digitalLabel.hidden = true;
    image.alt = showingBack ? $("#detailTitle").textContent : `${$("#detailTitle").textContent} museum signage`;
  } else {
    image.style.display = showingBack ? "" : "none";
    if (digitalLabel) digitalLabel.hidden = showingBack;
    image.alt = $("#detailTitle").textContent;
  }
  image.classList.toggle("showing-signage", !showingBack);
  const hint = frame?.querySelector(".detail-flip-hint");
  if (hint) hint.textContent = showingBack ? (image.dataset.backSrc ? "Tap photo to view signage ↻" : "Tap photo to view digital label ↻") : "Tap label to return to artifact ↻";
});

function setArtifactFilter(site) {
  currentArtifactFilter = artifacts.some(item => item.site === site) ? site : "all";
  $$(".filter-chip").forEach(button => button.classList.toggle("active", button.dataset.filter === currentArtifactFilter));
  renderArtifacts();
}
$("#artifactFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (button) setArtifactFilter(button.dataset.filter);
});
$("#siteSearch").addEventListener("input", event => {
  currentSearch = event.target.value;
  renderArtifacts();
  const match = destinations.find(place => `${place.name} ${place.short} ${place.location}`.toLowerCase().includes(currentSearch.trim().toLowerCase()));
  if (currentSearch.trim() && match) {
    $("#selectedTitle").textContent = match.name;
    $("#selectedDescription").textContent = match.description;
    $("#selectedLocation").textContent = match.location;
    $("#selectedMap").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(match.map)}`;
  }
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault(); $("#siteSearch").focus();
  }
});

// --- Location directory ---
function renderLocations() {
  $("#locationList").innerHTML = destinations.map((place, index) => `
    <article class="location-row" data-location-id="${place.id}">
      <span class="location-index">${String(index + 1).padStart(2, "0")}</span>
      <div class="location-name"><h3>${place.name}</h3><p>${place.location}</p><button class="location-artifacts-link" type="button" data-artifact-site="${place.artifactSite || place.name}">VIEW ARTIFACTS ↓</button></div>
      <p class="location-note">${place.short}</p>
      <a class="location-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.map)}" target="_blank" rel="noopener">OPEN MAP <span aria-hidden="true">↗</span></a>
    </article>`).join("");
  $$(".location-artifacts-link", $("#locationList")).forEach(button => button.addEventListener("click", () => {
    setArtifactFilter(button.dataset.artifactSite);
    $("#artifacts").scrollIntoView({behavior:"smooth"});
  }));
  $$(".location-row", $("#locationList")).forEach(row => row.addEventListener("click", event => {
    if (event.target.closest("a,button")) return;
    const place = destinations.find(item => item.id === row.dataset.locationId);
    if (place) updateLocationMap(place);
  }));
}
function updateLocationMap(place) {
  const query = encodeURIComponent(place.map);
  const frame = $("#directoryMap");
  const link = $("#directoryMapLink");
  if (frame) frame.src = `https://maps.google.com/maps?q=${query}&output=embed`;
  if (link) link.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
  $$(".location-row").forEach(row => row.classList.toggle("is-map-selected", row.dataset.locationId === place.id));
}

// --- About Us ---

function renderEssentialQuestions() {
  const host = $("#essentialQuestions");
  if (!host) return;
  host.innerHTML = essentialQuestions.map((item, index) => `
    <details class="question-item">
      <summary><span>${String(index + 1).padStart(2, "0")}</span>${item.question}</summary>
      <p>${item.answer}</p>
    </details>`).join("");
}
function renderMuseumReflections() {
  const host = $("#museumReflections");
  if (!host) return;
  const groups = [...new Set(museumReflections.map(item => item.museum))];
  host.innerHTML = groups.map(museum => {
    const entries = museumReflections.filter(item => item.museum === museum);
    return `<details class="museum-reflection"><summary>${museum}</summary><div class="museum-reflection-content">${entries.map(item => `<section><h4>${item.section}</h4><p>${item.text}</p></section>`).join("")}</div></details>`;
  }).join("");
}

function renderMembers() {
  $("#memberGrid").innerHTML = members.map(member => {
    const paragraphs = member.bio.split(/\n\s*\n/).filter(Boolean);
    const preview = paragraphs[0] || member.bio;
    const remaining = paragraphs.slice(1).map(p => `<p>${p}</p>`).join("");
    return `<article class="member-card">
      <div class="member-photo"><img src="${member.image}" alt="Photo of ${member.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('image-placeholder')"><span class="placeholder-message">Add member photo<br><small>${member.image}</small></span></div>
      <div class="member-copy"><span class="role">${member.role}</span><h3><span class="member-initial">${member.name.charAt(0)}</span>${member.name.slice(1)}</h3><p>${preview}</p><details class="reflection-more"><summary>Read full reflection <span>＋</span></summary><div class="reflection-full">${remaining}</div></details></div>
    </article>`;
  }).join("");
}

// --- Motion and navigation ---
function initReveal() {
  const elements = $$(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  elements.forEach(el => observer.observe(el));
}
function initNavigation() {
  const menuToggle = $("#menuToggle");
  const nav = $("#mainNav");
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  $$(".nav-link").forEach(link => link.addEventListener("click", () => {
    $$(".nav-link").forEach(item => item.classList.toggle("active", item === link));
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
  const sections = $$("main section[id]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$(".nav-link").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => observer.observe(section));
  }
}
function initProgress() {
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    $("#scrollProgress").style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}
function initVideoFallback() {
  const video = $("#montageVideo");
  const container = video.closest(".montage-video");
  const source = video.querySelector("source");
  video.addEventListener("loadeddata", () => container.classList.add("has-video"));
  video.addEventListener("error", () => container.classList.remove("has-video"));
  if (source) {
    // If the file does not exist, keep the decorative placeholder visible.
    video.load();
  }
}

// Star rating is feedback only; it is not a quiz.
const ratingStars = $$(".rating-star");
ratingStars.forEach(star => star.addEventListener("click", () => {
  const rating = Number(star.dataset.rating);
  ratingStars.forEach(item => {
    const selected = Number(item.dataset.rating) <= rating;
    item.classList.toggle("is-selected", selected);
    item.setAttribute("aria-checked", String(Number(item.dataset.rating) === rating));
  });
  const message = $("#ratingMessage");
  if (message) message.textContent = `You rated CDFiles ${rating} out of 5 stars. Thank you for your feedback!`;
}));

// Local background music. Browsers require a visitor click before audio can play.
const musicToggle = $("#musicToggle");
const backgroundMusic = $("#backgroundMusic");
let musicIsOn = false;
if (musicToggle && backgroundMusic) {
  musicToggle.addEventListener("click", async () => {
    if (!musicIsOn) {
      try {
        await backgroundMusic.play();
        musicIsOn = true;
        musicToggle.textContent = "♫ Music on · click to stop";
        musicToggle.setAttribute("aria-pressed", "true");
      } catch (error) {
        musicToggle.textContent = "♫ Tap to play music";
      }
    } else {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
      musicIsOn = false;
      musicToggle.textContent = "♫ Music off";
      musicToggle.setAttribute("aria-pressed", "false");
    }
  });
}


$("#year").textContent = new Date().getFullYear();
renderCarousel();
renderArtifacts();
renderLocations();
renderMembers();
renderEssentialQuestions();
renderMuseumReflections();
initReveal();
initNavigation();
initProgress();
initVideoFallback();
startAutoPlay();

window.addEventListener("resize", () => {
  measureCarousel();
  setTrackPosition(false);
});

// Local bundled videos: attempt muted autoplay; controls remain available when autoplay is blocked.
["montageVideo", "aboutVlogVideo"].forEach(id => { const video = document.getElementById(id); if (video) { video.muted = true; const play = video.play(); if (play && play.catch) play.catch(() => {}); } });
