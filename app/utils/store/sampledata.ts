const dataArray = [
  {
    title: 'Historical Events',
    prompt:
      'Explore the fascinating tapestry of historical events that have shaped the world we inhabit today. From ancient civilizations to modern revolutions, delve into the triumphs and tribulations that have defined human progress. Uncover the secrets of ancient empires, the echoes of momentous battles, and the sparks of revolutionary ideas that ignited social change. From the Renaissance to the Space Age, witness the emergence of great minds, remarkable discoveries, and the enduring legacy of visionary thinkers.',
    username: 'admin',
    postedOn: '2021-01-01',
    stars: 5,
    skills: ['pshycologistt', 'Politician'],
  },
  {
    title: 'Travel Recommendations',
    prompt:
      'Embark on a globetrotting adventure and discover the most captivating destinations that our world has to offer. From the pristine beaches of the Maldives to the mystical wonders of Machu Picchu, let your wanderlust guide you through awe-inspiring landscapes and cultural treasures. Immerse yourself in vibrant cities pulsating with life, where ancient traditions coexist with modern marvels. Indulge your senses with tantalizing culinary delights, from street food stalls to Michelin-starred restaurants. Whether you seek thrilling adventures, serene retreats, or immersive cultural experiences, this collection of travel recommendations will inspire your next unforgettable journey.',
  },
  {
    title: 'Book Reviews',
    prompt:
      'Step into the enchanting world of literature, where imagination knows no bounds. Dive into the realms crafted by talented authors, traversing genres and eras, from classic literary masterpieces to contemporary bestsellers. Delve into thought-provoking narratives that explore the human condition, challenge societal norms, and ignite the imagination. Discover compelling characters who breathe life into the pages, as their stories unfold with every turn. Uncover hidden gems and celebrated works, as this collection of book reviews offers a literary feast for avid readers and those seeking literary recommendations.',
  },
  {
    title: 'Art Appreciation',
    prompt:
      'Indulge in the realm of artistic expression and immerse yourself in the boundless beauty that art beholds. From awe-inspiring paintings to captivating sculptures, explore the vast tapestry of artistic movements that have shaped human creativity.',
  },
  {
    title: 'Environmental Awareness',
    prompt:
      'Take a journey of environmental consciousness and explore the pressing issues that impact our planet. From climate change to deforestation, delve into the intricate web of ecological challenges we face. Uncover the importance of sustainable practices, renewable energy, and conservation efforts that strive to protect our fragile ecosystems. Raise awareness about the urgent need for collective action, from individuals to governments, to safeguard our environment for future generations. Discover inspiring stories of environmental champions and innovative solutions that offer hope in the face of environmental adversity.',
  },
  {
    title: 'Technology Advancements',
    prompt:
      'Embark on an exhilarating exploration of technological advancements that are shaping our modern world.',
  },
  {
    title: 'Film Analysis',
    prompt:
      'Step into the magical world of cinema and delve into the art of film analysis. From timeless classics to contemporary masterpieces, explore the captivating narratives, visual storytelling techniques, and profound themes that define cinematic excellence. Unravel the layers of symbolism, character development, and directorial choices that breathe life into the silver screen. Analyze the impact of cinematography, sound design, and editing in crafting immersive cinematic experiences. Gain a deeper appreciation for the craft of filmmaking as you dissect the choices and intentions behind the lens, bringing to light the intricate tapestry of storytelling on celluloid.',
  },
  {
    title: 'Culinary Delights',
    prompt:
      'Embark on a gastronomic adventure and savor the rich tapestry of culinary delights from around the world. Explore the tantalizing flavors, exotic ingredients, and cultural traditions that define diverse cuisines.',
  },
  {
    title: 'Literary Classics',
    prompt:
      'Journey into the timeless realm of literary classics, where the power of words transcends time. From the works of Shakespeare to the novels of Jane Austen, immerse yourself in the exquisite prose, compelling characters, and profound themes that have captivated readers for centuries. Explore the social commentary, moral dilemmas, and existential questions that lie at the heart of these literary treasures. Delve into the pages of iconic novels, poems, and plays that continue to resonate with readers across generations. Experience the transformative power of literature as you embark on a literary journey through the ages.',
  },
  {
    title: 'Music Appreciation',
    prompt:
      'Embark on a melodic voyage through the diverse world of music and discover the captivating rhythms, harmonies, and lyrics that evoke emotions and transcend language barriers. From classical compositions to contemporary genres, explore the rich tapestry of musical expressions that have shaped cultures and touched souls. Uncover the stories behind iconic songs, the evolution of musical styles, and the impact of legendary musicians. Dive into the world of music theory, composition techniques, and the transformative power of live performances.',
  },
  {
    title: 'Environmental Awareness',
    prompt:
      'Take a journey of environmental consciousness and explore the pressing issues that impact our planet. From climate change to deforestation, delve into the intricate web of ecological challenges we face. Uncover the importance of sustainable practices, renewable energy, and conservation efforts that strive to protect our fragile ecosystems. Raise awareness about the urgent need for collective action, from individuals to governments, to safeguard our environment for future generations. Discover inspiring stories of environmental champions and innovative solutions that offer hope in the face of environmental adversity.',
  },
  {
    title: 'Technology Advancements',
    prompt:
      'Embark on an exhilarating exploration of technological advancements that are shaping our modern world.',
  },
  {
    title: 'Film Analysis',
    prompt:
      'Step into the magical world of cinema and delve into the art of film analysis. From timeless classics to contemporary masterpieces, explore the captivating narratives, visual storytelling techniques, and profound themes that define cinematic excellence. Unravel the layers of symbolism, character development, and directorial choices that breathe life into the silver screen. Analyze the impact of cinematography, sound design, and editing in crafting immersive cinematic experiences. Gain a deeper appreciation for the craft of filmmaking as you dissect the choices and intentions behind the lens, bringing to light the intricate tapestry of storytelling on celluloid.',
  },
  {
    title: 'Culinary Delights',
    prompt:
      'Embark on a gastronomic adventure and savor the rich tapestry of culinary delights from around the world. Explore the tantalizing flavors, exotic ingredients, and cultural traditions that define diverse cuisines.',
  },
  {
    title: 'Literary Classics',
    prompt:
      'Journey into the timeless realm of literary classics, where the power of words transcends time. From the works of Shakespeare to the novels of Jane Austen, immerse yourself in the exquisite prose, compelling characters, and profound themes that have captivated readers for centuries. Explore the social commentary, moral dilemmas, and existential questions that lie at the heart of these literary treasures. Delve into the pages of iconic novels, poems, and plays that continue to resonate with readers across generations. Experience the transformative power of literature as you embark on a literary journey through the ages.',
  },
  {
    title: 'Music Appreciation',
    prompt:
      'Embark on a melodic voyage through the diverse world of music and discover the captivating rhythms, harmonies, and lyrics that evoke emotions and transcend language barriers. From classical compositions to contemporary genres, explore the rich tapestry of musical expressions that have shaped cultures and touched souls. Uncover the stories behind iconic songs, the evolution of musical styles, and the impact of legendary musicians. Dive into the world of music theory, composition techniques, and the transformative power of live performances.',
  },
  {
    title: 'Culinary Delights',
    prompt:
      'Embark on a gastronomic adventure and savor the rich tapestry of culinary delights from around the world. Explore the tantalizing flavors, exotic ingredients, and cultural traditions that define diverse cuisines.',
  },
  {
    title: 'Literary Classics',
    prompt:
      'Journey into the timeless realm of literary classics, where the power of words transcends time. From the works of Shakespeare to the novels of Jane Austen, immerse yourself in the exquisite prose, compelling characters, and profound themes that have captivated readers for centuries. Explore the social commentary, moral dilemmas, and existential questions that lie at the heart of these literary treasures. Delve into the pages of iconic novels, poems, and plays that continue to resonate with readers across generations. Experience the transformative power of literature as you embark on a literary journey through the ages.',
  },
  {
    title: 'Music Appreciation',
    prompt:
      'Embark on a melodic voyage through the diverse world of music and discover the captivating rhythms, harmonies, and lyrics that evoke emotions and transcend language barriers. From classical compositions to contemporary genres, explore the rich tapestry of musical expressions that have shaped cultures and touched souls. Uncover the stories behind iconic songs, the evolution of musical styles, and the impact of legendary musicians. Dive into the world of music theory, composition techniques, and the transformative power of live performances.',
  },
  {
    title: 'Music Appreciation',
    prompt:
      'Embark on a melodic voyage through the diverse world of music and discover the captivating rhythms, harmonies, and lyrics that evoke emotions and transcend language barriers. From classical compositions to contemporary genres, explore the rich tapestry of musical expressions that have shaped cultures and touched souls. Uncover the stories behind iconic songs, the evolution of musical styles, and the impact of legendary musicians. Dive into the world of music theory, composition techniques, and the transformative power of live performances.',
  },
];

export default dataArray;
