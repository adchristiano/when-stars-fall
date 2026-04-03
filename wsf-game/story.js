const STORY = {

  'prologue': {
    title: 'Before the Story Begins',
    location: 'New York City — October 12th, 1853',
    image: 'images/scene-00.jpeg',
    showImage: true,
    text: [
      '*On the night of October 12th, 1853, eleven zodiacal constellations fell from the sky above the eastern seaboard. Sailors in New York Harbour lost their bearings before dawn. The Hudson ran strange.*',
      '*The newspapers called it atmospheric. The scientists convened a committee. The Fox Sisters called it exactly what it was, and were not believed.*',
      '*The Van der Zons and the Lunardis — the two families who had managed celestial affairs in New York since before it was called New York — understood within the hour. Both sent men to the impact sites before midnight. Both found craters, and ozone, and absence, and the beginning of a race they had been dreading for two hundred years.*',
      '*The stakes of that race are simple. If the Van der Zons win, the fallen constellations will be absorbed into their celestial order — not destroyed, but diminished, each one folded into a hierarchy that answers to a Dutch colonial family. They will answer to a name that isn\'t quite their own. If the Lunardis win, the constellations will be returned to the sky on the Lunardis\' terms, freely — except that every future celestial decision will require the family\'s sign-off. Freedom in name. Dependency in practice. And if neither family wins, if the real Compact holds, the constellations choose: sky, earth, or both. The human world and the celestial one in genuine relationship, not managed dependency. Second sight restored. The natural order working correctly, for the first time in two hundred years.*',
      '*The twelfth constellation did not fall with the others.*',
      '*Scorpio held on for eighteen days — watching from above, reading the pattern, looking for something specific in the configurations below. He found it on the twenty-eighth of October: a name, a clairvoyant, a woman in Greenwich Village whose gift had been going wrong since the night of the twelfth.*',
      '*He fell alone, at three in the morning on October thirtieth, into the Hudson River yards.*',
      '*He had been there four days when she found him.*',
    ],
    choices: [{ label: 'Continue', next: 'scene-1' }]
  },

  'scene-1': {
    title: 'Chapter One: The Client',
    location: 'Louisa\'s office, above Hartley\'s Books, Greenwich Village — November 3rd, morning',
    image: 'images/scene-01.jpeg',
    showImage: true,
    text: [
      'The woman who comes to see me on the third of November is frightened of something specific, which is different from being grief-stricken, though she is performing the second to conceal the first.',
      'Her name is Helena Carver. Her husband, Charles, died three weeks ago at a séance on Bleecker Street. Heart failure, officially. She has the death certificate with her, which she shows me without being asked.',
      '\'Charles was a journalist,\' she says. \'Freelance — he investigated things the newspapers wouldn\'t touch. He\'d been working on something since October, something about the night the sky changed. He said he\'d found something that changed the legal picture entirely. He wouldn\'t say more than that. He kept an address in his coat — a building on Mulberry Street — and a name he\'d written and then crossed out.\' Another pause, smaller. \'The fallen man.\'',
      'I write this down. I write everything down.',
      '\'What would you like me to find, Mrs. Carver?\'',
      '\'I want to know what killed my husband. And I want to know why the Lunardi family sent a carriage for me this morning and asked me, very politely, not to hire an investigator.\'',
      'I set my pen down.',
      'The Lunardis publicly fund séance parlours across lower Manhattan and call it philanthropy. I have been calling it a data point in search of a pattern.',
      'I tell her my rate. She agrees to twice it without blinking.',
      'She tells me, at the door, that her husband\'s body was found with a burn on his right palm. \'Like he\'d held something very cold,\' she says. \'Or very bright. The doctor couldn\'t account for it.\'',
      'After she\'s gone I sit with my notebook and the headache that has been living behind my left eye for three weeks — since the twelfth of October, the night the sky went wrong.',
      'My gift has been unreliable since then. Not absent — wrong. The visions come fractured, four possible futures insisting at once, none resolving. The street doctor in the Bowery told me last week: six weeks before the sight goes dark. Permanently.',
      'Six weeks covers November and most of December. It does not cover January, or my mother\'s room in the Bowery boarding house — the one with the south-facing window and the extra blanket I pay three dollars a month to keep on the bed.',
      'I think, briefly, about the arithmetic. Then I put on my coat.',
    ],
    choices: [
      { label: 'Go to the Mulberry Street address immediately. Every hour matters.', next: 'scene-1-open-i' },
      { label: 'Visit your Nightmarket contact first. Go prepared.', next: 'scene-1-open-ii' },
      { label: 'Call on the Lunardis before Mulberry Street. Find out what they\'re protecting.', next: 'scene-1-open-iii' }
    ]
  },

  'scene-1-open-i': {
    location: 'Mulberry Street, Five Points — November 3rd, afternoon',
    image: 'images/scene-02.jpeg',
    text: ['I go directly. The Five Points is twenty minutes on foot if you know which streets to take, which I do — I grew up six blocks from here. I arrive before noon with nothing but my notebook and the address.'],
    choices: [{ label: 'Continue', next: 'scene-2' }]
  },

  'scene-1-open-ii': {
    location: 'Mulberry Street, Five Points — November 3rd, afternoon',
    image: 'images/scene-02.jpeg',
    text: ['My Nightmarket contact confirms three celestial impact sites in the industrial districts near the river. He sells me a dampening charm — a brass washer on red cord — for fifty cents. I take it without ceremony. I arrive in the early afternoon, better informed and an hour slower.'],
    choices: [{ label: 'Continue', next: 'scene-2' }]
  },

  'scene-1-open-iii': {
    location: 'Mulberry Street, Five Points — November 3rd, afternoon',
    image: 'images/scene-02.jpeg',
    text: ['The Lunardi house receives me in a parlour designed to suggest their interest in the spiritual world is tasteful rather than tactical. The functionary who meets me tells me, with great courtesy, that Mrs. Carver is not in a condition to make sound decisions. I leave with confirmation that the Lunardis know exactly what is on Mulberry Street, and the distinct sense of being watched on the way out.'],
    choices: [{ label: 'Continue', next: 'scene-2' }]
  },

  'scene-2': {
    title: 'Chapter Two: Five Points',
    location: 'Mulberry Street, Five Points — November 3rd, afternoon',
    image: 'images/scene-02.jpeg',
    showImage: true,
    text: [
      'The building on Mulberry Street is a boarding house. The room on the third floor — where Charles Carver came to meet the fallen man — has been cleared out, not professionally. Whoever emptied it took only what they recognised.',
      'The door is unlocked. A pallet on the floor. A peg on the wall, empty. The smell of coal smoke and the river — and underneath, ozone. Something older. The smell makes the back of my teeth ache pleasantly, the way the real visions used to before they went wrong.',
      'The floorboards near the window have a faint luminescence that vanishes when I look at it directly.',
      'In the rubble: a torn page of a letter in Dutch, the letterhead visible — a sun device in the blue-grey ink the Van der Zon family uses. A brass compass with a needle that rotates between south and west and somewhere not on any map I own. I pocket it.',
      'Then the vision arrives, sideways, without my consent.',
      'A man in a crater — the industrial yards, near the river. Sitting on something overturned, watching his hands, light coming out of him between his fingers, slow as a tide. His face turned down. The expression on it is not pain. It is someone who has decided to solve a problem by outlasting it.',
      'I write down the location before it fades.',
      'On the landing, the neighbour tells me the room was used by Mr. Carver — a gentleman, odd hours, stopped coming three weeks ago. Downstairs, another tenant mentions a man who\'d had a room on the ground floor months ago. \'Left on the thirteenth — before dawn. Packed in ten minutes and laughed the whole time. Like going with nothing was the funniest thing that\'d happened to him.\'',
    ],
    choices: [{ label: 'Continue', next: 'scene-3' }]
  },

  'scene-3': {
    title: 'Chapter Three: The Yards',
    location: 'Hudson River yards, lower Manhattan — November 3rd, late afternoon',
    image: 'images/scene-03.jpeg',
    showImage: true,
    text: [
      'I almost don\'t go.',
      'I stand on West Street with the address in my notebook and think about my mother\'s room — the south window, the extra blanket — and what six weeks means in terms that are not abstract. The gift going dark doesn\'t just mean losing a skill. It means losing the income, and the income is the only thing standing between my mother and a worse room in a worse house. Then I step off the kerb and go, because the vision came without my consent and I have never managed to argue with the ones that arrive sideways.',
      'The impact site isn\'t difficult to find. The yard workers have chalked a boundary around the shattered cobblestones and attributed it to a gas explosion, which is a very New York solution to an inexplicable problem.',
      'I step over the chalk line and the headache stops.',
      'Not gradually. Between one step and the next: gone. I stand in the crater and breathe and look at the man in the centre of it and try not to think too hard about the connection.',
      'He\'s dark-haired, broad-shouldered, sitting on an overturned crate with his elbows on his knees, watching his hands. Carrying a naval officer\'s coat across his lap — good wool, recently purchased from someone who no longer needed it. The boots don\'t match. Nothing about him quite matches, but he carries himself as though weight and gravity are still under negotiation, and there is a quality to his stillness that I recognise without having a name for it yet.',
      'He doesn\'t look up when I approach.',
      '\'You took longer than I expected,\' he says.',
      'His voice does something to the air in the crater — settles it. I file this next to the headache.',
      '\'You were expecting me.\' \'Something was.\' He looks up. His eyes are very dark, the kind of dark that implies depth, and he looks at me with the focused unhurried attention of something that is accustomed to watching. I have the specific sensation of being read — not judged. Read. \'You\'re the clairvoyant.\'',
      '\'Louisa Dawson.\' \'I know your name.\' No performance in it. He stands, shrugs on the naval coat, buttons it — one button off the whole way down, which I notice and don\'t mention. \'I\'m called Blake. I fell four days ago. I was something else before.\'',
      'I tell him what I know: the Van der Zon letterhead, the Lunardis, Charles Carver and the burn on his palm, the two families and what their definitions of help involve. He listens completely.',
      '\'The others,\' he says when I\'m done. \'I can feel some of them — directions, distances. One fell near something volcanic, far south across water. Another went a long way west, toward something being pulled from the earth in large quantities. I don\'t know what to call these places. I fell into a world whose maps I don\'t have.\'',
      '\'I have maps,\' I say. \'Tell me what you feel. I\'ll find the names.\' He studies me. I am aware of his hands, the faint luminescence between his fingers flickering as he thinks. I look at my notebook.',
      '\'That\'s not sufficient reason to trust you,\' he says. \'No,\' I agree. \'It isn\'t.\'',
    ],
    choices: [
      { label: 'Tell him the rest of it. What the sight actually feels like. What six weeks actually costs.', next: 'scene-3-path-i', setPathI: 'I' },
      { label: 'Make the case on its merits. He doesn\'t need to trust you — he needs to find your argument non-defective.', next: 'scene-3-path-ii', setPathI: 'II' }
    ]
  },

  'scene-3-path-i': {
    location: 'Hudson River yards — continuous',
    image: 'images/scene-03.jpeg',
    text: [
      'I have told two people the whole truth about my gift. My mother, who settled on frightened and proud in equal measure. A priest when I was nineteen, which didn\'t help.',
      'I tell Blake.',
      'The real version — not the professional one. That it arrived in adolescence without warning and has never been absent since. That it comes as smell first, then pressure behind my left eye, then images that insist on themselves. That since the twelfth it has been arriving fractured. Four futures at once, none yielding.',
      'I tell him about my mother. The Bowery boarding house. The arithmetic of six weeks.',
      'I tell him about the vision in the Mulberry Street room: his hands, the light, his face — which I had never seen — at the centre of something vast my gift showed me before he existed here.',
      'He doesn\'t move. He listens completely. When I finish, the silence between us is different from what it was.',
      '\'Six weeks,\' he says. \'Yes.\' He nods at something internal. Then looks up, and the way he\'s looking at me has shifted — a door, fractionally further open. \'All right,\' he says.',
      'We walk out of the crater. At West Street he stops under a gas-lamp and looks up at the incomplete sky — the twelve gaps, the wrong pattern. I stop beside him. The cold comes off the river.',
      '\'Does it hurt?\' I ask. \'Being here instead of there.\' \'It\'s strange,\' he says, \'to be a thing instead of a place.\' He finds me already watching him and neither of us looks away for a beat too long. \'But no. It doesn\'t hurt.\'',
    ],
    choices: [{ label: 'Continue', next: 'scene-4' }]
  },

  'scene-3-path-ii': {
    location: 'Hudson River yards — continuous',
    image: 'images/scene-03.jpeg',
    text: [
      '\'I\'m not asking you to trust me. I\'m asking you to find my argument sufficiently non-defective to act on. Those are different things.\'',
      'He tilts his head slightly. An invitation.',
      'The Van der Zon connection. The Lunardis. Both families\' definitions of help — one wants to absorb, one wants to broker, neither wants the constellations to simply choose. My interest: the gift, the income, six weeks. Stated plainly, because people who know exactly what you need from them are harder to manipulate than people who don\'t.',
      '\'Your argument has a weakness,\' he says. \'Tell me.\' \'You need the fallen collectively, not me specifically. Your incentive to protect me individually is lower than your framing implies.\'',
      '\'You\'re right. What I can tell you is that the vision that brought me here showed me specifically — your face, your hands, this crater. My gift has been pointing at you for three weeks. I don\'t know what that means yet, but you should have it.\'',
      'He looks at me for a long moment. \'That\'s an honest answer.\' \'I try to be accurate.\' \'All right. Provisionally.\'',
      'We walk out of the yards. My left eye is quiet in a way it hasn\'t been in three weeks and I don\'t mention it.',
      'On West Street he stops under a gas-lamp and looks up at the incomplete sky. Something in his face in that moment is unguarded enough that I look away to give him the privacy of it. When he looks down his expression is closed again. I decide that both are true — the closed expression and the thing beneath it — and that I will have to earn the second one.',
    ],
    choices: [{ label: 'Continue', next: 'scene-4' }]
  },

  'scene-4': {
    title: 'Chapter Four: Miss Voss',
    location: 'The Voss private library, Gramercy Park — November 4th, past midnight',
    image: 'images/scene-04.jpeg',
    showImage: true,
    text: [
      'He finds me at half past midnight. I\'m awake — lying in the dark, not sleeping — when he knocks.',
      'He\'s standing in the hallway with his coat and a quality of controlled alarm, both palms glowing steadily gold in the lamplight.',
      '\'Something is happening,\' he says. \'Images. They overlap. They feel like they\'re coming from outside me.\'',
      '\'Sit down,\' I say, and light the lamp. He sits. The light pulses faintly with his heartbeat. \'Tell me exactly what you saw.\'',
      'He tells me: a room full of paper, a lamp, a brass plate by a door. Voss, Gramercy Park.',
      '\'It\'s a vision,\' I say. \'Your celestial energy resonates with the mechanism that produces second sight. You received something meant for me.\' I\'m already reaching for my coat. \'Does it feel like it\'s fading?\' \'Yes.\' \'Good. Let\'s go see what\'s there.\'',
      'He looks at his hands, dimming back to their usual flicker. \'Does it always feel like that?\' \'It usually feels worse,\' I say, and open the door.',
      '---',
      'The house on Gramercy Park: Mr. Heinrich Voss, Merchant, on the brass plate. Ground floor dark. Second floor — back room, curtained windows glowing at the edges — not.',
      'The housekeeper leads us to the library without comment.',
      'It is floor-to-ceiling on three walls, cedar and old paper and preservation solvent, a rolling brass ladder, and — at the buried centre of it — a woman of perhaps thirty-four who does not look up when we enter.',
      '\'The clairvoyant,\' she says, still annotating. \'And something else.\'',
      'She looks up. Takes me in, then Blake, then undergoes a rapid series of adjustments before arriving at something resembling composure. She has ink on her cheek. She has been here for at least eighteen hours and has no particular regrets about it.',
      '\'Miss Voss,\' I say. \'Miss Dawson.\' A pause containing the memory of two years ago — my assumption, from her initials on two well-regarded monographs, that M.E. Voss would be a man. I had been briefly wrong-footed. She had been briefly amused. \'I thought you might come. I didn\'t expect you to bring a primary source.\'',
      '\'He\'s called Blake. He fell four days ago.\' \'Which one?\' \'Scorpio,\' Blake says.',
      'She sets her pen down. Picks it up. Sets it down again. Then she looks at him with the focused, unsentimental interest of a scholar who has been pursuing a source for twenty years and has just been handed it.',
      '\'Sit down,\' she says. \'Both of you.\'',
      'She tells us: twenty years of celestial research; a theory about second sight and its dependence on the fallen constellations\' stability — which explains my gift\'s deterioration, with footnotes; and a gap in the record. A document, described only as the celestial terms, that arrived in New Amsterdam in 1624. The Lunardis currently hold it on Rector Street. \'If I can find the original,\' she says, \'I can prove that the document both families have been working from is a forgery. What the Van der Zons have been calling the Compact gives them permanent authority over every celestial decision. The real one gives the constellations the right to choose for themselves.\'',
      'Something moves across Blake\'s face when she says celestial terms. Recognition, quickly shut. \'Tell her,\' he says quietly. \'She needs to know.\'',
      '\'That\'s what I\'m doing,\' Maren says, and picks up her pen.',
    ],
    choices: [
      { label: 'Let her share everything now. Conditions can come after.', next: 'scene-4-open-i' },
      { label: 'Set terms before she continues. You need to know what access means before you agree to it.', next: 'scene-4-open-ii' },
      { label: 'Ask Blake privately what he recognised just now. He closed it too fast.', next: 'scene-4-open-iii' }
    ]
  },

  'scene-4-open-i': {
    location: 'A rooftop, West 27th Street — November 5th, night',
    image: 'images/scene-05.jpeg',
    text: ['Maren talks for nearly three hours. By the end I have eight pages of notes in her handwriting, a working theory about my gift\'s deterioration, and an address. She needs a thief. She knows one.'],
    choices: [{ label: 'Continue', next: 'scene-5' }]
  },

  'scene-4-open-ii': {
    location: 'A rooftop, West 27th Street — November 5th, night',
    image: 'images/scene-05.jpeg',
    text: ['The negotiation takes forty minutes. By the end I have six pages of notes, clear terms, and an address. She needs a thief.'],
    choices: [{ label: 'Continue', next: 'scene-5' }]
  },

  'scene-4-open-iii': {
    location: 'A rooftop, West 27th Street — November 5th, night',
    image: 'images/scene-05.jpeg',
    text: ['In the hallway, Blake is quiet for a moment. \'She knows more than she\'s saying about why we fell — something about the cause. She won\'t say it until she has documentary proof.\' A pause. \'Let her keep it for now.\' Back inside, Maren gives me six pages of notes and an address. She needs a thief.'],
    choices: [{ label: 'Continue', next: 'scene-5' }]
  },

  'scene-5': {
    title: 'Chapter Five: Vesper',
    location: 'A rooftop, West 27th Street — November 5th, night',
    image: 'images/scene-05.jpeg',
    showImage: true,
    text: [
      'The thief is not where Maren said she would be.',
      'The boarding house on Twenty-Third Street has a landlady who tells me her tenant left an hour ago on business. Blake locates the business — he describes it as a sense of purposeful recent movement through a space, a residue — across four streets and up a fire escape, to a rooftop where a small, sharp-featured woman is descending from a skylight on a rope, halfway between roof and third floor.',
      '\'Wait,\' I say. She stops. Calculates. Waits.',
      'I explain, concisely: Maren Voss sent me. Rector Street. Specific documents, nothing else, no damage. She listens from the rope, then climbs back to the roof in one efficient movement.',
      'She is perhaps twenty-eight — small, sharp, dressed for shadows. Her gaze moves between me and Blake and stops on Blake.',
      '\'What is he,\' she says. Not to me. \'Something that fell out of the sky,\' Blake says. \'Recently.\'',
      'She looks at him a moment longer. \'I\'ve been working séance parlours for two years. I\'ve seen things I couldn\'t explain and told myself they were someone else\'s tricks.\' A pause. \'They weren\'t, were they.\' \'No,\' Blake says.',
      'Something settles in her. The resolution of someone who has been right about something uncomfortable and is done pretending otherwise. She turns to me.',
      '\'Vesper. My conditions: no one manages me, and you tell me the truth about what this is. I\'ve spent two years enabling lies for people who needed to believe them. I won\'t do it again.\' \'Fair,\' I say. She names her rate. It\'s extortionate. I agree, because she\'s already mentally casing the building across the street.',
      'She and Blake look at each other. The silence has the quality of two people measuring the precise dimensions of their wariness. Neither looks away first.',
      '\'When do we start?\' \'Tonight, if you\'re free.\' She glances at the skylight. \'I\'m free,\' she says. Then, to Blake: \'Does it have a name, whatever it is?\' \'Blake,\' he says. Vesper looks at him for a moment. \'Maren\'s notes called you something else,\' she says. \'Noctis.\' A pause. \'And I heard the other one called you Scorpio.\' Blake says nothing. Vesper nods slowly. \'Right. Three names. That\'s going to be a whole thing, isn\'t it.\'',
    ],
    choices: [
      { label: 'Let Vesper run the Lunardi job her way. She\'s already planning it.', next: 'scene-5-choice-i' },
      { label: 'Go with her. You need to see those documents yourself.', next: 'scene-5-choice-ii' },
      { label: 'Send Blake. His presence makes her careful, which is what you want on a job that matters.', next: 'scene-5-choice-iii' }
    ]
  },

  'scene-5-choice-i': {
    location: 'Louisa\'s office — November 5th, late night',
    image: 'images/scene-05.jpeg',
    text: ['Vesper returns four hours later, job successful. She sets the documents on the table without ceremony. \'Clean in, clean out,\' she says. \'Lunardi archives are organised by date, not subject. Whoever catalogued them was either very principled or very bored.\''],
    choices: [{ label: 'Continue', next: 'scene-6' }]
  },

  'scene-5-choice-ii': {
    location: 'Rector Street, then Louisa\'s office — November 5th, late night',
    image: 'images/scene-05.jpeg',
    text: ['Four hours. Rector Street is exactly what Maren described — the documents exactly where she said. We come out into the cold with everything we came for. Vesper doesn\'t say much. Neither do I. There is a particular silence that comes after a job that went well and required complete attention, and we both know how to inhabit it.'],
    choices: [{ label: 'Continue', next: 'scene-6' }]
  },

  'scene-5-choice-iii': {
    location: 'Louisa\'s office — November 5th, late night',
    image: 'images/scene-05.jpeg',
    text: ['They return four hours later, job successful, not speaking. Vesper says only \'he knew which cabinet.\' Blake says only \'she\'s good.\' Neither elaborates, ever.'],
    choices: [{ label: 'Continue', next: 'scene-6' }]
  },

  'scene-6': {
    title: 'Chapter Six: Leo',
    location: 'The Astor Place Theatre, lower Manhattan — November 6th, evening',
    image: 'images/scene-06.jpeg',
    showImage: true,
    text: [
      'The Astor Place Theatre seats eight hundred people and appears tonight to contain considerably more. They are not here for the scheduled performance. They are here for the man who has taken up residence in the building — paid the stage manager in gold, the kind that makes people decide not to ask questions — and has been performing every evening since.',
      '\'The papers are calling him a gifted mesmerist,\' Maren says, in the carriage.',
      '\'The papers,\' Vesper says, \'are what happens when no one talks to the people who actually live near a thing.\' She has been doing intelligence runs in the Astor Place neighbourhood all week. \'His followers aren\'t just true believers — they\'re protective. Three of them stood outside the stage door last night keeping someone away. I didn\'t get close enough to see who.\'',
      'Blake says nothing. He is standing beside me in the lobby when we arrive, closer than he needs to be in the press of the crowd, and I am aware of the warmth of him at my shoulder.',
      '---',
      'We find Leo on stage.',
      'He is tall, broad through the chest, with the kind of face a crowd reads as important before it knows why. He sees us the moment we enter and finishes his current sentence without rushing — Leo does not rush — then steps off the stage as if descending a staircase in his own home.',
      'His gaze goes to Blake first. \'Scorpio.\' Recognition, and something more complicated underneath. \'You fell late.\'  \'I was watching,\' Blake says. \'Mmm.\' Leo shifts to me. \'Your gift is going wrong. I can feel it from here.\' Then, over my shoulder: \'And you brought a mortal.\' \'I\'m a professional mortal,\' Vesper says. \'There\'s a difference.\'',
      'Leo settles into a front-row seat and crosses one leg over the other. \'You want my help. You want me to come with you. What I want to know is what becomes of my people when this is done.\' He gestures at the theatre — eight hundred people who came not for a performance but for him. \'The Van der Zons would absorb me. My followers would become leverage — extraction points, like Carver. The Lunardis would return me to the sky and call it liberation, and the people who found me first would be left with nothing. What does the third option give them?\'',
      '\'A world where the celestial order works correctly,\' I say. \'Which means second sight functions, navigation is stable, and no family controls access to any of it. Your followers found a fallen constellation and helped keep him safe. Under the real Compact, that matters. I intend to make sure it\'s written into whatever we build.\'',
      'Leo considers this. Then: \'Charles Carver,\' Blake says quietly. \'He came to you. Before he died.\'',
      'The composure shifts. Just slightly. \'He was a journalist. He\'d worked out the shape of the Compact — that there was a document, something old and Dutch, that changed the legal standing of everything. The Van der Zons didn\'t care about me. What they wanted was what Carver had pieced together. And the names of anyone else looking.\' A pause. \'He refused. They used an extraction instrument. He didn\'t deserve it.\' He looks at me steadily. \'I will not have another Charles Carver.\' \'Neither will I,\' I say.',
    ],
    choices: [
      { label: 'Promise him. Tell him his followers will be protected — that whatever you build will have a place for the people who found the fallen first.', next: 'scene-6-choice-i' },
      { label: 'Negotiate. \'I\'ll try. Not guarantee. I won\'t make a promise I\'m not certain I can keep.\'', next: 'scene-6-choice-ii' },
      { label: 'Ask about Carver first. You need the full picture before you make any commitment.', next: 'scene-6-choice-iii' }
    ]
  },

  'scene-6-choice-i': {
    location: 'The Astor Place Theatre — continuous',
    image: 'images/scene-06.jpeg',
    text: [
      'Something releases in Leo\'s expression — not warmth exactly, but the specific relief of someone who has received the answer they came for. \'All right,\' he says. \'I\'ll come.\' Beside me, Blake is quiet, and I don\'t look at him, and I am aware of not looking at him in a way that is its own kind of looking.',
      'Before we leave, Leo tells us to find the twins. \'Cas and Pol have been in contact with more of the fallen than anyone. If you want to know where the others are, they\'re your best route.\' He pauses, turning his glass. \'Capricorn went where power is oldest. He always did — he finds entrenched human structures clarifying. Centuries of accumulated authority, something that compounds. A banking family, maybe. Somewhere very old and very certain of itself.\' \'Blake,\' he says then, as if testing it. \'Cas calls you something else entirely.\' \'I use Blake,\' Blake says. \'Of course you do,\' Leo says, and we go.',
    ],
    choices: [{ label: 'Continue', next: 'scene-7' }]
  },

  'scene-6-choice-ii': {
    location: 'The Astor Place Theatre — continuous',
    image: 'images/scene-06.jpeg',
    text: [
      '\'That\'s fair,\' Leo says. \'More fair than I expected.\' He agrees, with conditions he then outlines in considerable detail — most of them concerning what happens to his people if the plan fails rather than if it succeeds. I write all of them down. When I look up, Blake is watching me with an expression that is there and then gone.',
      'Before we leave, Leo tells us to find the twins. \'Cas and Pol have been in contact with more of the fallen than anyone,\' he says. \'If you want to know where the others are, they\'re your best route.\' He adds, at the door: \'Capricorn went where power is oldest — centuries of accumulated authority, something that compounds. A banking family. Somewhere very old and very certain of itself.\'',
    ],
    choices: [{ label: 'Continue', next: 'scene-7' }]
  },

  'scene-6-choice-iii': {
    location: 'The Astor Place Theatre — continuous',
    image: 'images/scene-06.jpeg',
    text: [
      'He tells us everything. The extraction, the burn, what it means that the Van der Zons now know someone is looking. When he\'s done the theatre feels smaller. Blake holds the door for me on the way out, a gesture so ordinary I almost walk through it without registering it, and then I do register it, and I walk through it anyway.',
      'Before we leave, Leo tells us to find the twins. \'Capricorn went where power is oldest — centuries of accumulated authority, something that compounds. A banking family. Somewhere very old and very certain of itself.\'',
    ],
    choices: [{ label: 'Continue', next: 'scene-7' }]
  },

  'scene-7': {
    title: 'Chapter Seven: Cas and Pol',
    location: 'The twins\' apartment, Bleecker Street — November 8th, morning',
    image: 'images/scene-07.jpeg',
    showImage: true,
    text: [
      'The apartment on Bleecker Street has become something between a post office and a celestial archive. Letters pinned to the walls in overlapping layers, sorted into piles by a system that is either sophisticated or entirely intuitive. Small objects too: pressed flowers, compass needles, foreign coins. Things sent by people who live near where the fallen landed and have been paying attention.',
      'Pol opens the door before we knock. \'We heard you on the stairs,\' Cas says from inside, which does not fully explain it. Vesper, behind me, says under her breath: \'That\'s not how stairs work.\'',
      'Cas is small, bright-eyed, always half a beat ahead. Pol is quieter — thinking several things at once, sharing none until he\'s certain. They are not identical in the way people expect twins to be identical. They are identical the way two halves of a sentence are identical.',
      'Cas looks at Blake and her face does what Leo\'s did — recognition, but warmer. The warmth of someone who knew him when he was a different kind of thing entirely. \'Scorpio,\' she says. Then: \'Noctis.\' Then, as if completing something: \'Blake.\'',
      '\'I use all three,\' Cas says cheerfully. \'Depending on context.\' \'There is no context,\' Vesper says, \'in which one person needs three names.\' \'He\'s the constellation of hidden things,\' Pol says, with the equanimity of someone who has thought about this. \'The names are consistent with the theme.\' Blake says nothing. He has the expression of someone who has accepted that this is simply what happens when constellations discuss him.',
      'Cas turns her searchlight attention to me. \'Your gift is quieter near him. You\'ve noticed.\'',
      'It lands like a hand pressed flat on a bruise. I have noticed. I have been filing it under things that require more information before I know what to do with them, and having it named aloud — simply, as fact — does something to the blood behind my face that the lamplight probably conceals.',
      '\'What have you learned about the others?\' I say.',
      'Pol lifts a notebook — dense handwriting in two hands, blue and black ink alternating. \'Seven of the eleven since October fourteenth. Some direct correspondence, some direct contact. Virgo among them — she found settled ground in the first week and confirmed herself immediately. She\'s been waiting since.\'',
      '\'The ones you haven\'t reached?\' \'Four. One moving too fast to fix a location. One embedded deliberately — he received our contact and chose not to respond. One we\'ve reached but she hasn\'t answered. And one we can\'t locate at all — Aquarius.\'',
      '\'Pisces,\' Blake says. \'Yes.\' Cas turns a page. \'Water in every direction. She\'s content. She doesn\'t know we\'re looking.\'',
      '\'The one who chose not to respond,\' I say. \'Capricorn.\' \'Yes,\' Pol says. \'He is very settled where he is.\'',
      'Cas turns another page and reads aloud, slowly: \'She feeds people. She says the food is the point — that feeding someone is the most honest conversation you can have with them. She smells, when we reach her, like the sea and something cooking. She is far south. Very warm. She is exactly where she means to be.\'',
      'She looks up. \'Does that mean something to you?\'',
    ],
    choices: [{ label: 'Continue', next: 'quiz-cancer' }]
  },

  'quiz-cancer': {
    type: 'quiz',
    constellation: 'Cancer',
    location: 'The twins\' apartment, Bleecker Street — November 8th, morning',
    image: 'images/scene-07.jpeg',
    setup: [
      'Three clues have accumulated: a New Orleans restaurant critic writing that eating there felt like being forgiven for something you had forgotten you had done; a Lunardi field report about a woman on Chartres Street who turned away three of their people before they spoke a word; and Cas\'s notebook reading — far south, very warm, near the sea, feeds people.',
      'Cas looks up. \'Does that mean something to you?\'',
    ],
    question: 'Where has Cancer settled?',
    options: [
      'The Outer Banks, North Carolina.',
      'The French Quarter, New Orleans.',
      'The Florida Keys.',
    ],
    correct: 1,
    feedbackCorrect: [
      'Cas looks up when I give her my answer. \'You\'ve been collecting clues,\' she says. \'That\'s the job.\'',
    ],
    feedbackWrong: [
      'Cas says only: \'I hope you\'re right.\' Her tone does not suggest confidence.',
    ],
    next: 'scene-7-after'
  },

  'scene-7-after': {
    location: 'The twins\' apartment, Bleecker Street — November 8th, morning',
    image: 'images/scene-07.jpeg',
    showImage: true,
    text: [
      'Blake is standing close enough that I can feel the faint warmth that comes off him even in cold rooms. He says, \'You\'re right,\' quietly, and I am momentarily unsure whether he means about the location or about the job, and I don\'t ask.',
      'Cas sends a letter in a cipher I don\'t ask about. Then Pol closes the notebook. \'We\'ll join you,\' he says. \'We\'ve been waiting for someone to ask.\'',
      'Vesper looks at the apartment walls — the letters, the objects, the density of it. \'How long has this been going on?\' \'Since we fell,\' Cas says. \'We\'re Gemini. Communication is the work.\' Vesper is quiet for a moment. \'I thought the séance parlours were odd,\' she says. \'This is much odder.\' Pol looks at her with something approaching respect. \'Thank you,\' he says. \'That is exactly right.\'',
    ],
    choices: [
      { label: 'Ask about Capricorn. He received the contact and didn\'t answer — that\'s itself information.', next: 'scene-7-choice-i' },
      { label: 'Ask Blake privately what Capricorn not responding means.', next: 'scene-7-choice-ii' },
      { label: 'Ask about the Van der Zons. You want to know if they\'ve already made contact.', next: 'scene-7-choice-iii' }
    ]
  },

  'scene-7-choice-i': {
    location: 'The twins\' apartment, Bleecker Street — continuous',
    image: 'images/scene-07.jpeg',
    text: ['\'He received our contact and didn\'t answer,\' Pol says. \'That is itself information. Capricorn doesn\'t ignore things carelessly. He went somewhere with old money and old structures, somewhere that compounds. Getting him out, if he\'s decided he\'s useful where he is, will require a different approach.\' I write this down. Beside me Blake says nothing, but the gold at his fingers flickers once.'],
    choices: [{ label: 'Continue', next: 'interlude-1' }]
  },

  'scene-7-choice-ii': {
    location: 'The twins\' apartment, Bleecker Street — continuous',
    image: 'images/scene-07.jpeg',
    text: ['In the hallway, I ask whether Capricorn not responding is a problem or just Capricorn. \'Both,\' he says. \'Capricorn has always decided the shape of his own involvement. He doesn\'t defect — he positions himself.\' We are in the narrow hallway and it is cold out here and he is close in the way he is often close without quite touching. \'We\'ll need to reach him through the right channel,\' he says. \'Someone he respects.\' I say, \'You.\' He looks at me. \'Maybe,\' he says, and I believe him.'],
    choices: [{ label: 'Continue', next: 'interlude-1' }]
  },

  'scene-7-choice-iii': {
    location: 'The twins\' apartment, Bleecker Street — continuous',
    image: 'images/scene-07.jpeg',
    text: ['\'They sent someone in the first week,\' Cas says. \'Very courteous, very certain. He said the family had been guardians of celestial beings for two hundred years.\' She pauses. \'We told him we\'d think about it.\' Pol adds, \'They haven\'t sent anyone since, which means they\'ve accepted the answer or they\'re waiting for a moment when we\'re more isolated.\' He says it with the calm of someone who has already prepared for both. I am going to like working with these two.'],
    choices: [{ label: 'Continue', next: 'interlude-1' }]
  },

  'interlude-1': {
    location: 'Bleecker Street to the West Village — November 9th',
    image: 'images/scene-07.jpeg',
    showImage: true,
    text: [
      'We walk out together into the cold. The street is quiet in that particular way it gets after ten, when the restaurants have stopped seating and the bars haven\'t yet disgorged anyone. Blake walks beside me with his hands in his coat pockets and I don\'t quite know what to do with the fact that I\'m glad he\'s there.',
      'He says, after a while, \'You write everything down.\'',
      '\'Yes.\'',
      '\'Even things you already know?\'',
      '\'Especially those.\'',
      'He thinks about this. \'Why?\'',
      'I consider telling him about my mother, about the notebooks she kept and what happened when she stopped, but this isn\'t the moment for that. \'Because knowing and writing are different kinds of holding,\' I say instead. \'I want both.\'',
      'He nods as though this is a satisfying answer. I think about Pol\'s chart and Cas\'s hands and the fact that Capricorn has gone somewhere that compounds. I think about what it means that Blake knew which way to look.',
      'At the corner of Charles Street he says goodnight. I\'ve noticed a quality to certain of his words — the ones that carry more than they say. I notice I\'ve started watching for when they come.',
      '\'Goodnight,\' I say, and walk home alone.'
    ],
    choices: [{ label: 'Continue', next: 'scene-8' }]
  },

  'scene-8': {
    title: 'Chapter Eight: The Shape of the Thing',
    location: 'The Voss private library, Gramercy Park \u2014 November 10th, late afternoon',
    image: 'images/scene-08.jpeg',
    showImage: true,
    text: [
      'Maren is standing when we arrive, which is how I know something has changed.',
      '\'The Compact isn\'t one document,\' she says, before we\'ve removed our coats. \'Three copies in 1624, sent to three different locations. I\'ve been looking for one document in one archive for three years.\'',
      'Blake goes still beside me.',
      '\'Where?\' I say.',
      'Maren holds up a manifest page. \'There\'s a notation in the margin.\' She reads it aloud: \'One who laughs has gone west without stopping \u2014 last reported moving through the interior, toward the place where they pull gold from the ground.\' She looks up. \'That\'s about Sagittarius, not the Compact \u2014 someone was tracking the fallen in the shipping records. But here \u2014\' She points to a second notation, in different ink. \'One copy to the celestial authority in New Amsterdam. One copy retained by the celestial party to the agreement. One copy to \u2014\' She stops. \'The third location is damaged. A city, a river, a legal institution. That\'s all.\'',
      'I write down the Sagittarius notation. Four clues now.',
      '\'Not necessarily a dead end,\' I say. \'Libra fell in Washington \u2014 the constellation of law and balance, the one Cas and Pol have reached but who hasn\'t responded. A river city, a legal institution. What if Libra found the third copy and has been sitting on it, waiting to understand what it is?\'',
      'Maren puts her pen down. Picks it back up. \'Washington. A constitutional city. A river. Law offices on every block.\' She is already writing \u2014 not notes, a letter. \'I have a contact at a law office on Pennsylvania Avenue. If the third copy is there, I want someone who understands treaty law to have documentation before the Van der Zons find out we have the original.\'',
      '\'Redundancy,\' Vesper says, from the corner.',
      '\'Exactly.\'',
      'Vesper is flipping through a folder of Maren\'s maritime correspondence. She holds one up. \'Here\'s an odd one. A Polynesian trader, interviewed by a New Bedford whaler captain in 1849. He mentions a woman living on one of the Society Islands \u2014 far Pacific \u2014 who predicts weather. Sits at the water\'s edge each morning, and by afternoon the fishermen know what\'s coming.\' She sets it down. \'The local chieftain appeared to be protecting her. Wouldn\'t let the trader get close.\'',
      'I write it down without knowing exactly why yet. A woman at the edge of the water. Protected. Content, from the sound of it.',
      'Blake crosses to the desk and picks up the manifest. He reads it and when he sets it down his face has the expression it had in the yards the first day: someone who has received confirmation of something they already knew.',
      '\'The copy retained by the celestial party,\' he says quietly. \'I know where that is.\'',
      'Maren goes very still.',
      '\'I need to go there before I can describe it,\' he says. \'It\'s not a location I can give in words \u2014 it\'s something I have to retrieve. But it\'s not in either family\'s hands. That much I can tell you now.\'',
    ],
    choices: [
      { label: 'Press him. He knows more than he\'s saying.', next: 'scene-8-choice-i' },
      { label: 'Let it rest. You\'ll get more when the moment is right.', next: 'scene-8-choice-ii' },
      { label: 'Tell him about your mother. There\'s something in what he said.', next: 'scene-8-choice-iii' },
    ]
  },

  'scene-8-choice-i': {
    location: 'The Voss private library, Gramercy Park \u2014 continuous',
    image: 'images/scene-08.jpeg',
    text: [
      '\'You have words for everything else,\' I say.',
      'He is quiet for half a block once we are outside. Then: \'It cost the twelve of us something we couldn\'t get back. Agreeing to terms that were supposed to protect us \u2014 and then being held to terms the other party never intended to honour.\' He stops. I stop with him. \'The Van der Zons\' version of the Compact is not the one we signed,\' he says quietly. His breath shows in the cold air.',
      '\'I\'m sorry,\' I say, for lack of anything better, and he looks at me in a way that makes the apology feel both inadequate and exactly right.',
    ],
    choices: [{ label: 'Continue', next: 'scene-9' }]
  },

  'scene-8-choice-ii': {
    location: 'The Voss private library, Gramercy Park \u2014 continuous',
    image: 'images/scene-08.jpeg',
    text: [
      'I don\'t push. Walking back through Gramercy Park afterward, in the cold, Blake falls into step beside me. We walk the rest of the block in the particular silence that has weight and texture \u2014 not absence but presence, the kind two people make together when they have stopped needing to fill it.',
      'At the corner he says goodnight. I walk the four blocks home alone and think about another time, which implies a future in which there is more time, which is not something either of us should be planning on, and yet.',
    ],
    choices: [{ label: 'Continue', next: 'scene-9' }]
  },

  'scene-8-choice-iii': {
    location: 'The Voss private library, Gramercy Park \u2014 continuous',
    image: 'images/scene-08.jpeg',
    text: [
      'I tell him about the Bowery boarding house, the south window, the three extra dollars a month. He listens completely. When I finish he says, \'She sounds like someone who raised a person who doesn\'t stop.\' It is not a compliment exactly. It is more than one.',
      'I look at the gas lamp ahead and say, \'She did,\' and we walk the rest of the way in a silence that has gone from cold to something else entirely.',
    ],
    choices: [{ label: 'Continue', next: 'scene-9' }]
  },

  'scene-9': {
    title: 'Chapter Nine: What Accumulates',
    location: 'Various \u2014 November 11th\u201312th',
    image: 'images/scene-09.jpeg',
    showImage: true,
    text: [
      'Two days.',
      'Vesper moves through the Tenderloin and comes back each evening with Lunardi intelligence in a cipher she hasn\'t offered to teach me. On the morning of the eleventh she sets a decoded summary on the desk. \'They\'re moving faster,\' she says. \'And they\'ve started describing the third option as a threat rather than an alternative, which means someone told them about the original Compact. They don\'t know we have it. But they know it exists.\' She pauses. \'Also, whoever is running their intelligence on us is good. Not better than me, but good.\'',
      'The Van der Zon reception invitation arrives the same morning. Two days.',
      'That afternoon, a note from Leo: a Lunardi man asking questions in the Financial District about a foreign financial advisor recently attached to a prominent London banking family. Uncanny instincts about capital movement. New in the city two months ago. Banking family won\'t name him.',
      'I read it twice. I think of what Leo said \u2014 centuries of accumulated authority, something that compounds \u2014 and write: Capricorn. London. I underline it.',
      'From Cas and Pol\'s network: a letter from a woman in their congregation corresponding with a sister in Sacramento. A man matching the description Cas circulated, heading east along the ridge road, away from the gold fields. Still laughing. Gave away most of what he\'d made before he left.',
      'Four clues. I know where he is.',
      'On the morning of the twelfth, Blake and I sit at Maren\'s table and cross-reference everything against her maps. Two hours of close work. He reads manifests, asks questions so precisely targeted that I find myself rethinking things I was certain of.',
      'I have started using his names differently without noticing it. In my head, he is Blake when I am thinking about the work. Noctis in the moments when the work recedes and I am simply aware of him in a room. And Scorpio in the moments when I remember what he was before he was any of this, and that the difference between what he was and what he is now is not as large as I expected, and that this is a problem I have not yet solved.',
      'I have not examined what any of this means. This is, strictly speaking, untrue.',
      'At some point, reaching across for the 1624 manifest, my hand goes to his collar without instruction. One button, still wrong, the same button that has been wrong since the yards. I fix it \u2014 two seconds, automatic \u2014 and then my hand is resting against the lapel of his coat and I become aware of this and let go.',
      'He goes very still.',
      'Not tense. Still \u2014 the particular stillness of his complete attention, and I am suddenly aware that I am the thing requiring it.',
      '\'The Capricorn contact in London,\' I say. My voice is even.',
      '\'Yes,\' he says. His voice is even.',
      'We go back to work. Neither of us mentions it.',
    ],
    choices: [{ label: 'Continue', next: 'scene-vdz' }]
  },

  'scene-vdz': {
    title: 'Chapter Ten: The Van der Zon Reception',
    location: 'The Van der Zon house, Fifth Avenue \u2014 November 13th, evening',
    image: 'images/scene-10.jpeg',
    showImage: true,
    text: [
      'The Van der Zon house has been in the same place on Fifth Avenue for two hundred years and has been designed, over those years, to make that fact legible from the street.',
      'Hendrik Van der Zon is perhaps sixty, white-haired, courteous in the way that has never had to be otherwise. He shakes my hand and tells me he has heard of my work. I smile and thank him.',
      'Blake is at my side throughout the introductions. I am aware of the inch of air between his arm and mine. Not touching. Close enough that when guests press against us in the crowded room, the inch disappears briefly and then returns.',
      'The reception room: celestial maps on two walls, old ones with Latin annotations that Maren moves toward immediately. Leo near the drinks, already working. Vesper in borrowed clothes that fit like they were made for her, which is unsettling.',
      'Hendrik talks. All of it pointing in the same direction: the constellations as disoriented beings who need guidance. Both families as necessary infrastructure. The Van der Zon absorption presented as shelter, not captivity.',
      'Blake listens. His face is composed and still. The gold between his fingers is there and then not there.',
      'I ask about the family\'s celestial archive. Hendrik smiles and offers the salon collection \u2014 not the archive, but an invitation up the stairs \u2014 and I accept.',
      'Twenty minutes in, Blake says quietly that he needs air. To me, not to Hendrik. He goes toward the back of the house.',
    ],
    choices: [
      { label: 'Follow him. Give him ninety seconds and excuse yourself.', next: 'scene-vdz-c', setPathC: 'C' },
      { label: 'Stay. He knows you\'re here. You\'ll learn something either way.', next: 'scene-vdz-d', setPathC: 'D' },
    ]
  },

  'scene-vdz-c': {
    location: 'The Van der Zon house, second floor \u2014 continuous',
    image: 'images/scene-10.jpeg',
    text: [
      'The back of the house is older \u2014 colonial structure, narrower corridors, lower ceilings. The smell changes: stone and old paper and something metallic. My gift stirs.',
      'He is in a room at the end of the corridor. Door open. The archive. And in the centre, in lamplight, Blake stands before an open cabinet with a document in his hands.',
      'He knows I\'m there. He doesn\'t turn. \'This is the Compact,\' he says.',
      'I cross the room. The document is old \u2014 Dutch, dense handwriting, a wax seal at the bottom. Around the seal: twelve signatures. Not names \u2014 patterns. The unique celestial configuration of each constellation, rendered in ink. I lean in to read and my shoulder comes close to his.',
      '\'You\'ve seen this before,\' I say. \'Not in this form.\' \'I knew it existed \u2014 the way I knew your name. I knew this document was here and that it was the reason the fall happened and that someone would have to come to this room.\'',
      '\'Someone,\' I say.',
      'He turns, and we are closer than I had calculated \u2014 close enough that I can see the faint gold at his fingertips and the specific quality of the dark in his eyes, which I have looked at a great many times and not yet enough. \'I knew it would be you,\' he says.',
      'For a moment we are simply in the room together. Then his eyes return to the document \u2014 to something at the bottom, near the twelve signatures. He reads it again. A stillness comes into him that is different from his usual stillness. He sets the Compact back in the cabinet and does not tell me what he found there.',
      '\'We should copy it,\' I say. \'Maren needs \u2014\' \'Yes,\' he says. He doesn\'t move immediately. We are looking at each other in the lamplight and neither of us moves for three seconds that are longer than three seconds, and then I reach past him for Maren\'s spare notebook, and we copy the relevant sections and go back downstairs.',
      'Hendrik notices we\'ve been gone. His courtesy doesn\'t change, which is more alarming than if it had.',
      'In the carriage going home, the copied pages in my coat pocket, Blake\'s arm rests against mine in the dark and neither of us moves away.',
    ],
    choices: [{ label: 'Continue', next: 'scene-11' }]
  },

  'scene-vdz-d': {
    location: 'The Van der Zon reception room \u2014 continuous',
    image: 'images/scene-10.jpeg',
    text: [
      'I stay. Hendrik fills twenty minutes with conversation that occupies all your attention and reveals very little. I pay attention and also track the signal he sends to a man near the far wall \u2014 a look, a tilt of the head \u2014 and the man leaves. I note the direction.',
      'Blake returns in twenty-two minutes. Nothing in his face has changed and everything in his face has changed. Something rearranged \u2014 not distress. The expression of a person who has received information that changes the shape of something they already believed, and is not yet certain what it means for everything that follows.',
      'Hendrik\'s warmth on his return is one degree too precise. Blake\'s courtesy in response is one degree too general. I file both.',
      'Leo fills the carriage ride with a story about Hendrik\'s daughter, which I am grateful for. When he stops, the carriage is dark. Blake is looking at his hands.',
      '\'You don\'t have to tell me tonight,\' I say. A long pause. \'I found something,\' he says. \'Something about \u2014 the terms. What was agreed and what was recorded. I need to understand the difference before I can explain it.\' \'All right.\' \'It\'s not about trust.\' \'I know,\' I say.',
      'He looks at me. In the dark his eyes are very dark and the light between his fingers pulses once, slow, and I am close enough to feel the warmth of him and I make a quiet decision not to move away from it.',
      'At the office he walks me to the door, which he hasn\'t done before. We stand in the doorway and he is close \u2014 close enough that if I turned, we would be \u2014 close. He says goodnight. I say goodnight. He goes down the stairs and I stand in the doorway listening to his footsteps until I can\'t hear them anymore, and then I go inside, and the room is colder than it was.',
    ],
    choices: [{ label: 'Continue', next: 'scene-11' }]
  },

  'scene-11': {
    title: 'Chapter Eleven: The Safehouse',
    location: 'A room above a Tenderloin chophouse \u2014 November 14th, night',
    image: 'images/scene-11.jpeg',
    showImage: true,
    text: [
      'The Lunardi surveillance broke open at four in the afternoon \u2014 two men working in rotation, patient and well-funded, and a third Vesper found watching the back of the building. She sent word: don\'t go home. The office is being watched.',
      'So: six of us in the safehouse above the chophouse on West Twenty-Eighth. One window, one lamp, a coal stove that works, and the ambient smell of the kitchen below, which Vesper says is an asset. \'If they\'re looking for us,\' she says, \'they\'ll expect somewhere grim. This smells like onion soup. No one hides in onion soup.\'',
      '\'That is either very wise or very stupid,\' Leo says.',
      '\'Story of my life,\' Vesper says, and takes up her position by the window.',
      'Cas and Pol fall asleep within twenty minutes. Leo writes something in the corner. Vesper watches the street with the focused patience of someone who has learned that waiting is a skill.',
      'Blake is beside me on the narrow bench.',
      'The stove has brought the room up to warmth. We are close in the way forced proximity makes people close \u2014 not touching, but near enough that I can feel the heat of him through my sleeve. I have been near him for two weeks. I know the specific quality of the warmth that comes off him, different from an ordinary person\'s warmth in a way I cannot precisely articulate but can no longer pretend I haven\'t noticed.',
      'I have been noticing for longer than I have been admitting.',
      '\'Your hands,\' I say. \'When does the luminescence increase?\'',
      'He looks at them \u2014 the faint gold between his fingers. \'When something matters,\' he says.',
      '\'What makes it matter?\'',
      'A pause. He turns his hand over on his knee, palm up.',
      'I take it.',
      'I tell myself I\'m examining it \u2014 the glow, the warmth, the quality of the light. This is partly true. It is also true that his hand is large and warm and I am holding it with both of mine, and the gold has brightened from the moment I touched him, and I am aware of my own pulse in a way that has nothing to do with clairvoyance.',
      'His thumb moves once across the back of my hand. Slow, deliberate.',
      'Every composure I have built over thirty-one years produces exactly nothing.',
      'I set his hand down carefully and look at the stove.',
      '\'Interesting,\' I say. My voice is even.',
      'The gold at his fingers stays bright.',
      'From the window, without turning: \'They\'ve gone,\' Vesper says. Then, a beat later, still to the street: \'Also, whatever that was, it\'s about time.\'',
    ],
    choices: [
      { label: 'Stay close. Don\'t move, don\'t speak. Just stay.', next: 'scene-11-choice-i' },
      { label: 'Ask him something. Did he know it would feel like this?', next: 'scene-11-choice-ii' },
      { label: 'Tell him you know he\'s still carrying something from the reception.', next: 'scene-11-choice-iii' },
    ]
  },

  'scene-11-choice-i': {
    location: 'Safehouse, West Twenty-Eighth \u2014 continuous',
    image: 'images/scene-11.jpeg',
    text: [
      'I don\'t move. Neither does he. We sit like that until Vesper calls the all-clear, and it is the most comfortable I have been in a month.',
    ],
    choices: [{ label: 'Continue', next: 'interlude-bowery' }]
  },

  'scene-11-choice-ii': {
    location: 'Safehouse, West Twenty-Eighth \u2014 continuous',
    image: 'images/scene-11.jpeg',
    text: [
      '\'Before you fell,\' I say, \'when you were watching. Did you know it would feel like this?\'',
      'A pause. \'No,\' he says. \'I knew your name. I didn\'t know \u2014\' He stops. The gold at his fingers is very bright. \'This,\' he finishes.',
    ],
    choices: [{ label: 'Continue', next: 'interlude-bowery' }]
  },

  'scene-11-choice-iii': {
    location: 'Safehouse, West Twenty-Eighth \u2014 continuous',
    image: 'images/scene-11.jpeg',
    text: [
      '\'I know you found something at the reception,\' I say. \'I\'m not asking tonight. I just want you to know I haven\'t stopped thinking about it.\'',
      'He looks at me. \'I know,\' he says. \'I haven\'t either.\' Not a resolution. A door left open.',
    ],
    choices: [{ label: 'Continue', next: 'interlude-bowery' }]
  },

  'interlude-bowery': {
    location: 'Mrs. Dawson\'s boarding house, the Bowery \u2014 November 15th, morning',
    image: 'images/scene-11.jpeg',
    showImage: true,
    text: [
      'After the safehouse, before Columbia, I go to the Bowery.',
      'The Van der Zons have been asking questions about me \u2014 my cases, my background. What I didn\'t ask, at the time, is whether they also asked about my mother.',
      'Mrs. Hannigan\'s boarding house on Baxter Street has fifteen rooms. My mother has lived in one of them for two years, the south-facing one on the second floor. She is at the window when I knock, as she usually is in the mornings. She takes one look at my face when I come through the door and says, \'Something\'s happened. Sit down.\'',
      'I sit. I tell her the shape of it \u2014 enough. That I\'m working a case that has made me powerful enemies. That I need to move her somewhere they won\'t think to look.',
      'She listens the way she always listens, which is completely and without interrupting. Then: \'Is it the case, or is it the man?\'',
      'I look at her. \'I didn\'t say anything about a man.\'',
      '\'You didn\'t have to.\' She closes her book. \'Louisa. I have been watching you not let people in for fifteen years. Whatever is happening, I\'m glad something finally got through.\' She stands with the effortful care of someone negotiating with a body that has opinions. \'Now. Where are you taking me?\'',
      'I take her to a cousin\'s house in Brooklyn. The cousin is not told why. My mother doesn\'t ask again about the man. When I leave she holds my face in both hands for a moment the way she did when I was small, and then she lets me go.',
      'On the bridge back to Manhattan I think about Leo saying I will not have another Charles Carver, and I decide that whatever I build at the end of this is going to have a protection clause in it. Not just for Leo\'s followers. For everyone the fallen have touched.',
    ],
    choices: [{ label: 'Continue', next: 'scene-12' }]
  },

  'scene-12': {
    title: 'Chapter Twelve: The Columbia Archives',
    location: 'Columbia College sub-basement \u2014 November 16th, morning',
    image: 'images/scene-12.jpeg',
    showImage: true,
    text: [
      'Maren is outside the college at seven, which means she was there before seven and has been waiting. She has not slept.',
      '\'They broke in,\' she says. \'Last night, after I left. Went straight for the celestial research files \u2014 didn\'t touch anything else. They know I have it.\' She turns toward the entrance. \'I\'d already moved everything. But we need to finish this today, before they send someone who knows what they\'re looking for.\'',
      '\'How are you upright,\' Vesper says, falling into step behind her.',
      '\'Spite,\' Maren says, without looking back. \'It\'s extremely sustaining.\'',
      'The Van der Zon family archive has been in a mislabelled box in the Columbia sub-basement for six years. Maren leads us directly to it.',
      'She opens it with the care of someone who has waited twenty years and intends to do it properly. The Compact is at the bottom, wrapped in oilcloth, sealed with the Van der Zon sun device. She breaks the seal. Two minutes of silence.',
      '\'They changed it,\' she says.',
      'Blake, across the table, says nothing.',
      '\'The original gave the constellations full autonomy \u2014 the right to remain on earth, to choose their own terms, without either family\'s mediation. The Van der Zons\' version places both families as permanent required intermediaries. It inverts everything.\' She looks at Blake. \'You knew.\'',
      '\'I knew the shape of it. From above, I could feel that the terms being enforced didn\'t match what was agreed. But the written forgery existed below the level of what I could read from the sky. I fell to be able to hold the paper.\'',
      'Maren pushes the document toward Blake. He reads it. I watch his face \u2014 composed, the tell at his hands steady and bright \u2014 and think about eighteen days of watching from above, understanding the trap, choosing to descend into it anyway.',
      'Maren photographs the original \u2014 a portable daguerreotype apparatus from her bag, which none of us knew she had. Vesper looks at it, looks at Maren, and says, \'I like how you operate.\' Maren says, \'Thank you,\' without looking up.',
      'Among the twelve patterns in the signatures, one catches my eye: Pisces\'s signature, the most intricate. Beside it, in the original notation: she who is of the deep water chose a place at the far edge of the world, where the water is warm and the sky is very close and the difference between them becomes, at certain hours, academic.',
      'I add it to what I know \u2014 Cas\'s impressions, the sailor\'s account Vesper found in Maren\'s files. Three clues converging on a single place.',
      '\'We need to reach Sagittarius, Pisces, and Capricorn today,\' I say to Blake. \'Cas and Pol\'s network, before the Lunardis get there first.\'',
    ],
    choices: [{ label: 'Continue', next: 'quiz-sagittarius' }]
  },

  'quiz-sagittarius': {
    type: 'quiz',
    constellation: 'Sagittarius',
    location: 'Columbia College sub-basement \u2014 November 16th, morning',
    setup: [
      'Four clues have accumulated across the investigation: a description of one who laughs heading west without stopping; a Lunardi field report about a man near the gold fields who gave directions with uncanny accuracy; Cas and Pol\'s network locating a letter from Sacramento; and the manifest notation \u2014 \'toward the place where they pull gold from the ground.\'',
      'Cas looks up from the letter. \'Does that mean something to you?\'',
    ],
    question: 'Where has Sagittarius gone?',
    options: [
      'The Oregon Territory, moving north.',
      'The California gold fields, Sierra Nevada.',
      'The New Mexico Territory, far south.',
    ],
    correct: 1,
    feedbackCorrect: [
      '\'The gold fields,\' Blake says quietly. He is already writing the letter for Cas and Pol\'s network. \'Four clues. You\'ve been collecting them since the beginning.\'',
    ],
    feedbackWrong: [
      'Cas says only: \'Send the letter anyway. We may still reach him in time.\' Her tone carries the weight of what may already be lost.',
    ],
    next: 'quiz-capricorn'
  },

  'quiz-capricorn': {
    type: 'quiz',
    constellation: 'Capricorn',
    location: 'Columbia College sub-basement \u2014 November 16th, morning',
    setup: [
      'Two clues confirm London: Cas and Pol\'s impression of centuries of accumulated authority, something that compounds; and Leo\'s note about a foreign financial advisor attached to a prominent London banking family, uncanny instincts about capital movement, arrived two months ago.',
      'The question is which institution he has embedded himself in.',
    ],
    question: 'Where has Capricorn placed himself in London?',
    options: [
      'A private banking house on Lombard Street \u2014 old Dutch colonial money, modest scale.',
      'The Rothschild family offices, New Court \u2014 a family dynasty, privately held, compounding across generations.',
      'The Bank of England, Threadneedle Street \u2014 a public institution, broad reach.',
    ],
    correct: 1,
    feedbackCorrect: [
      '\'The clues pointed to power that compounds within a family,\' I say. \'Privately held \u2014 not a public institution. Not a modest house.\' Maren nods once. \'Then we write to New Court.\'',
    ],
    feedbackWrong: [
      'Maren sets down her pen. \'It may still be possible to reach him,\' she says. \'If the letter arrives before the Lunardis.\' We write anyway, and hope.',
    ],
    next: 'quiz-pisces'
  },

  'quiz-pisces': {
    type: 'quiz',
    constellation: 'Pisces',
    location: 'Columbia College sub-basement \u2014 November 16th, morning',
    setup: [
      'Three clues converge: Cas and Pol\'s impression \u2014 water in every direction, warm, content, doesn\'t know she\'s being sought; the sailor\'s account from Maren\'s maritime files \u2014 a woman on one of the Society Islands who predicts weather, protected by the local chieftain; and the Compact notation \u2014 \'the far edge of the world, where the water is warm and the sky is very close.\'',
      'I look at the three clues and I know where she is.',
    ],
    question: 'Where has Pisces settled?',
    options: [
      'The Sandwich Islands \u2014 increasingly frequented by American traders, well-trafficked.',
      'The Kingdom of Tahiti, Society Islands \u2014 a sovereign Pacific kingdom with a royal structure, warm water, at the far edge of European reach.',
      'The Fiji Islands \u2014 known in 1853 as a place of active conflict.',
    ],
    correct: 1,
    feedbackCorrect: [
      '\'The royal structure,\' Blake says. \'Someone content and unaware of being sought would choose somewhere protected. And the warm water, at the world\'s edge \u2014 it matches.\' Letters go out through Cas and Pol\'s network within the hour.',
    ],
    feedbackWrong: [
      'Cas folds the letter carefully. \'Send it. She may still receive it.\' Her expression is the one she wears when she already knows the outcome and is choosing hope anyway.',
    ],
    next: 'scene-13'
  },

  'scene-13': {
    title: 'Chapter Thirteen: What He Carries',
    location: 'The street near Columbia, then Louisa\'s office \u2014 November 16th, afternoon',
    image: 'images/scene-13.jpeg',
    showImage: true,
    text: [
      'It happens on the way back from the college.',
      'We are crossing Amsterdam Avenue \u2014 Blake just ahead of me, Maren and Vesper half a block behind \u2014 when he stops walking.',
      'Not gradually. His hands come up, both of them, and the gold between his fingers goes bright and then brighter and then a colour I don\'t have a name for, and then he goes down.',
      'I catch him. He is heavy in the way of something accustomed to occupying a great deal more space than a human body, and I get him to the kerb before Maren and Vesper reach us.',
      'I put my hand against his face. \'Blake,\' I say. Nothing. \'Scorpio.\' His eyes move to me. \'Come back.\'',
      'It takes three minutes. I hold his face and keep talking \u2014 his name, both of them, and the specifics of where we are, the cold air, the sound of horses on Amsterdam Avenue \u2014 until the gold fades and his eyes focus and he says, \'I\'m here.\'',
      '\'Yes,\' I say. \'You are.\'',
      'We get him to the office. I make coffee on the stove and sit across from him and say, \'Tell me what you saw.\'',
      'He wraps both hands around the cup. \'Two of them,\' he says. \'Aries and Taurus. I could feel them choosing. Or being persuaded to choose. The Van der Zon pull is \u2014 it\'s not violent. It\'s more like being offered something that answers a question you didn\'t know you had.\' A pause. \'I couldn\'t stop it. I could only watch.\'',
      '\'How many have we got left?\'',
      '\'Ten. Including Cas and Pol and Leo and whoever the letters reach in time.\'',
      'I set my cup down. \'Tell me what you were,\' I say. \'Not the short version. The real one.\'',
      'He tells me.',
      '\'Scorpio is the constellation of hidden things. Of depth \u2014 the knowledge that lives below the surface, in the dark places where things are unseen but present. I catalogued everything that was kept. Every hidden thing in every life, for as long as there were lives to keep secrets.\' A pause. \'Not to expose them. To hold them. To be a witness to what couldn\'t be said.\'',
      '\'That must have been very lonely.\'',
      '\'I didn\'t know to call it that,\' he says. \'But yes.\'',
      '\'You knew my name,\' I say. \'Before you fell.\'',
      '\'Your gift has always been hidden \u2014 kept close, used carefully, never fully shown. It was in my records.\' Something shifts in his expression. \'And then it started going wrong. I kept watching because I needed to understand it, and the longer I watched, the more I understood. Your name was in the configuration of what was coming \u2014 a convergence point.\' A long pause. \'I didn\'t know what it would feel like to be found by you in person.\'',
      'The office is quiet. Outside, the city continues without us.',
      'I stand up, cross to the settee, and sit beside him. Close. He doesn\'t move away.',
      '\'I recognised you before I found you,\' I say. \'In the vision in Mulberry Street. I\'d never seen your face and I already knew that expression.\' I look at him directly. \'I don\'t know what the rules are for this. I\'m not sure there are rules. But I\'m done pretending I don\'t know what I want.\'',
      'He looks at me for a long moment. Then he lifts his hand and tucks a loose strand of hair from my face, his fingers warm against my temple, and says, \'I know.\'',
      'I put my hand over his where it rests against my face.',
      '\'What are the names?\' I ask. \'All of them. Scorpio, Blake, and \u2014 Cas and Pol called you something else.\'',
      'Something that is unmistakably almost a smile. \'Noctis. What the others called me, before we had human words for each other. It means \u2014\'',
      '\'Night,\' I say. \'Yes.\'',
      '\'Scorpio, Noctis, and Blake,\' I say. \'That\'s three names for one person.\'',
      '\'Cas says it\'s commitment issues,\' he says.',
      '\'What does Pol say?\'',
      '\'He says it\'s on-brand for the constellation of hidden things.\'',
      'I laugh \u2014 actually laugh, which I have not done at any point in this investigation \u2014 and his expression does something open and real, and I think: there is this too. Not just the want and the weight of what we\'re carrying. This as well.',
    ],
    choices: [
      { label: 'Stay. The moment doesn\'t need anything else.', next: 'scene-13-choice-i' },
      { label: 'Ask what comes after. If the Compact holds, what happens to him.', next: 'scene-13-choice-ii' },
      { label: 'Tell him about the first time you used your gift.', next: 'scene-13-choice-iii' },
    ]
  },

  'scene-13-choice-i': {
    location: 'Louisa\'s office \u2014 continuous',
    image: 'images/scene-13.jpeg',
    text: [
      'We stay on the settee until Maren comes back in with a list of things she needs and the moment becomes something else, and it is enough.',
    ],
    choices: [{ label: 'Continue', next: 'scene-14' }]
  },

  'scene-13-choice-ii': {
    location: 'Louisa\'s office \u2014 continuous',
    image: 'images/scene-13.jpeg',
    text: [
      '\'If the Compact holds,\' I say, \'what happens to you?\' He considers this. \'There may be a clause \u2014 Maren is still working through the original. Something about a dual existence, for a constellation that has formed a significant earthly bond.\' He says it carefully. \'Significant,\' I repeat. \'Yes,\' he says. And I decide that is enough to go on.',
    ],
    choices: [{ label: 'Continue', next: 'scene-14' }]
  },

  'scene-13-choice-iii': {
    location: 'Louisa\'s office \u2014 continuous',
    image: 'images/scene-13.jpeg',
    text: [
      'I tell him about the first real vision \u2014 I was eleven, my mother was ill, and I saw three days forward and understood she would be all right. He listens completely. When I finish he says, \'You\'ve been using it to take care of people since the beginning.\' It is not a question. \'Yes,\' I say. \'I suppose I have.\' He looks at me with the expression I am no longer cataloguing because I already know what it means.',
    ],
    choices: [{ label: 'Continue', next: 'scene-14' }]
  },

  'scene-14': {
    title: 'Chapter Fourteen: The Fracture',
    location: 'Louisa\'s office \u2014 November 20th, evening',
    image: 'images/scene-14.jpeg',
    showImage: true,
    text: [
      'Four days of momentum \u2014 Maren working through the original Compact line by line, Cas and Pol\'s network reaching the fallen we sent letters to, Vesper running interference on the Lunardi tail that keeps reappearing. Four days of thinking we might actually be doing this.',
      'On the morning of the twentieth, Cas and Pol go silent.',
      'Both of them, simultaneously, mid-sentence. When Cas comes back she says it flatly: \'Aries and Taurus. They chose it. Or were persuaded to.\' Her voice is steady. Her face is not. \'From the outside, those look the same.\'',
      'Two of the constellations we thought we might have. Gone.',
      'Vesper sets down the report she\'s been reading. \'How many does that leave?\'',
      '\'Ten,\' Blake says. \'Including all of us.\'',
      'The room is quiet for a moment. Then Vesper says, \'Right. So we move faster,\' and picks her report back up.',
      'By afternoon: a note from Leo. A Lunardi man on the westbound train from Sacramento, moving fast, with a description matching Sagittarius. If the letters reached him in time, this is a near miss.',
      'And then, at six, a knock.',
      'His name is Emilio Lunardi \u2014 thirty-five, youngest of the family\'s active line, with the easy charm of someone who has never had to try hard. He comes alone. He sits across from us and looks at Blake with the frank interest of someone seeing something extraordinary.',
      '\'The Van der Zons want to absorb you,\' he says. \'We don\'t. The Lunardis want the constellations returned to the sky \u2014 freely, on terms you agree to. We\'d facilitate the agreement, not control it.\'',
      '\'And if some of us choose to stay on earth,\' Blake says. \'What then?\'',
      'Emilio pauses. A genuine pause \u2014 he hasn\'t considered this. \'That\'s not a term the Compact provides for,\' he says.',
      '\'The Compact as your family knows it is a forgery,\' I say. \'We have the original. The real document provides for quite a lot that your version doesn\'t.\'',
      'Emilio looks at me, then at Blake, with the adaptability of someone who has been in difficult negotiations before. \'Then perhaps we should discuss the original,\' he says. He stands. \'I am not my family\'s worst instincts. I\'d like you to know that before this is over.\'',
      'Vesper shows him out. When she comes back: \'He\'s telling the truth about that last part.\' A pause. \'I went through his coat pockets while he was putting on his gloves. No weapons, no extraction instruments, one letter from his mother.\'',
      'After the room settles, I find Blake on the stairs.',
      'Same posture as the first day in the yards \u2014 elbows on his knees, looking at his hands. The familiarity of it catches me somewhere below my ribs.',
      '\'Tell me what you found at the Van der Zon house,\' I say. And then, because it is still sitting with me from the archive: \'You told me in that room that it would be you. I believed you. Tell me what you found.\'',
      'He looks up. \'My signature on the Compact. The one in the Van der Zon archive \u2014 it\'s been altered. They added a clause, specific to Scorpio: any earthly bond I form is automatically void under the Compact\'s terms.\' A pause. \'They knew, before the fall, that Scorpio would be the one most likely to stay. They planned for it.\'',
      'The stairs are quiet.',
      '\'You\'ve known since the reception,\' I say. \'Since the reception.\' \'And you didn\'t tell me.\' \'No.\'',
    ],
    choices: [
      { label: 'Fight. You\'re angry. Tell him why.', next: 'scene-14-path-e', setPathE: 'E' },
      { label: 'Reckon. There\'s something you\'ve been carrying too.', next: 'scene-14-path-f', setPathE: 'F' },
    ]
  },

  'scene-14-path-e': {
    location: 'Louisa\'s office stairs \u2014 continuous',
    image: 'images/scene-14.jpeg',
    text: [
      '\'What did you think would happen when I found out?\'',
      '\'I didn\'t know how to tell you.\'',
      '\'That is not an answer.\' I stand up. \'I have been operating on incomplete information because you decided to manage what I knew. I cannot fight a clause I don\'t know exists.\' I look at him. \'That is what the Van der Zons do. That is what the Lunardis do. I did not think it was what you did.\'',
      'He stands. \'I found it and I spent three days trying to understand what it meant \u2014\'',
      '\'Three days,\' I say, \'of whatever is happening between us, while you were carrying a piece of information that directly concerns whether it can happen at all.\'',
      'He is very still.',
      '\'I was trying to protect something,\' he says. \'I found a clause designed specifically to prevent this \u2014\' he gestures briefly between us \u2014 \'and I didn\'t want to be the one who told you it was built to fail before it started.\'',
      '\'It isn\'t built to fail,\' I say. \'It\'s built to be fought. There is a difference.\' I cross toward him. I am still angry and I am also done with the distance. \'I am very good at fighting things. Let me.\'',
      'He looks at me \u2014 the full reading look, the one I have never gotten used to \u2014 and then he closes what little space remains between us and his hand comes up to my face the same way it did in the office, and I don\'t let the moment pass.',
      'I kiss him.',
      'He kisses me back with the same focused, unhurried attention he brings to everything that matters, and his hands are in my hair and I am holding the front of his coat and the anger burns off entirely and what\'s underneath it is just this: his warmth, his mouth, the specific certainty that I have been moving toward this since the yards.',
      'When we pull apart he rests his forehead against mine. His eyes are closed. The gold at his hands is very bright.',
      '\'Don\'t protect me from information,\' I say, slightly breathless.',
      '\'No,\' he agrees.',
      '\'The clause \u2014 we tell Maren tonight.\'',
      '\'Yes.\'',
      'We stay like that a moment longer, and then I straighten my coat and he straightens his and we go to find Maren.',
    ],
    choices: [{ label: 'Continue', next: 'scene-15' }]
  },

  'scene-14-path-f': {
    location: 'Louisa\'s office stairs \u2014 continuous',
    image: 'images/scene-14.jpeg',
    text: [
      'I sit back down beside him.',
      '\'I\'ve been keeping things too,\' I say.',
      'He looks at me.',
      '\'I\'ve known something was wrong since the reception. I gave you space to hold it because I told myself that was respect. Some of it was also easier \u2014 not asking, maintaining the careful arrangement, because the alternative was admitting it stopped being careful some time ago and I didn\'t know what to do with that.\' I pause. \'I know what I want. I\'ve known since the safehouse. I didn\'t say it because I couldn\'t find the rules for it \u2014 a woman in my position, in this city, with someone who isn\'t precisely a person. I\'ve been waiting for a framework that doesn\'t exist.\'',
      'He is quiet for a moment. Then: \'The clause. My signature altered, a Van der Zon addition \u2014 any earthly bond I form is void under the forged Compact. They planned for it.\' He pauses. \'I didn\'t tell you because I didn\'t want to hand you a reason to step back before we\'d properly begun.\'',
      '\'Would you want to stay?\' I say. \'If the clause weren\'t there. If the real Compact held and you had the choice \u2014 would you want to stay?\'',
      'He looks at me for a long time. \'Yes,\' he says. \'I would want to stay.\'',
      'It is the most important thing anyone has ever said to me.',
      '\'Then that\'s what we\'re building toward,\' I say. \'The invocation, the real Compact, Maren dismantling the clause. We build toward you having the actual choice.\' I hold his gaze. \'And then you make it. Whatever you decide.\'',
      'He reaches over and takes my hand \u2014 not the careful, examined way from the safehouse, just takes it, the way you take the hand of someone you\'ve decided to stay near.',
      '\'Whatever I decide,\' he says, \'you\'ll know before I say it.\'',
      '\'I know,\' I say.',
      'We sit on the stairs until Maren calls us in, and we go together.',
    ],
    choices: [{ label: 'Continue', next: 'scene-15' }]
  },

  'scene-15': {
    title: 'Chapter Fifteen: The Plan Interrupted',
    location: 'Louisa\'s office \u2014 November 22nd, evening',
    image: 'images/scene-15.jpeg',
    showImage: true,
    text: [
      'Twenty minutes into the planning session, Vesper holds up one hand.',
      '\'Van der Zon man outside,\' she says, to the window. \'Delivering an envelope. Now leaving.\' She turns. \'He confirmed receipt and went. That\'s a family that knows what it\'s doing.\'',
      'The envelope contains a single card in Hendrik\'s copperplate: he is prepared to discuss terms. We have four nights. He knows this. The offer expires at midnight on the twenty-fourth.',
      'I set it on the table. The room reads it.',
      '\'He knows about the invocation window,\' Maren says. \'Not the location. Yet.\'',
      'Emilio arrives twenty minutes later. He reads the original Compact \u2014 actually reads it, the way you read something that is rewriting what you believed. When he finishes he is quiet. \'My family received this in 1751 from Cornelius Van der Zon,\' he says. \'We believed it was genuine. We were their instrument.\' He looks at me. \'What are you prepared to offer?\'',
    ],
    choices: [
      { label: 'The honest offer. Name what the Van der Zons did \u2014 and that his family can be on the right side of what comes next.', next: 'scene-15-choice-a' },
      { label: 'The pragmatic offer. Frame it as the Lunardis receiving a fraudulent document in good faith.', next: 'scene-15-choice-b' },
      { label: 'No offer. The truth is the truth. What he does with it is his choice.', next: 'scene-15-choice-c' },
    ]
  },

  'scene-15-choice-a': {
    location: 'Louisa\'s office \u2014 continuous',
    image: 'images/scene-15.jpeg',
    text: [
      '\'The Van der Zons forged this document,\' I say. \'Maren\'s case says so \u2014 clearly, on record. Your family received it fraudulently. That distinction matters.\' I hold his gaze. \'A hundred years of benefit happened. I\'m not pretending otherwise. But you can be on the right side of what comes next.\' He nods once. \'I\'ll be there,\' he says. \'With two men I trust.\'',
      'Blake\'s hand finds mine under the table, briefly, warm.',
      'After Emilio leaves, Maren explains what the invocation requires. Each constellation who answers commits their pattern to the Compact. Not ink. Presence. The celestial copy Blake retrieves tomorrow holds the active record. The quizzes determined who we can reach.',
      '\'And who doesn\'t answer,\' Vesper says.',
      '\'Isn\'t there,\' Maren says. \'Yes.\'',
      '\'So we find out when it happens.\'',
      '\'We find out when it happens,\' Maren agrees.',
    ],
    choices: [{ label: 'Continue', next: 'scene-16' }]
  },

  'scene-15-choice-b': {
    location: 'Louisa\'s office \u2014 continuous',
    image: 'images/scene-15.jpeg',
    text: [
      '\'The Lunardis received a fraudulent document in good faith,\' I say. \'Maren\'s case holds the Van der Zons responsible.\' He looks at me for a long moment and accepts a gift he knows is slightly larger than he deserves. \'I\'ll hold my family back on the night,\' he says. He doesn\'t say he\'ll come himself.',
      'Blake is very still beside me.',
      'After Emilio leaves, Maren explains what the invocation requires. Each constellation who answers commits their pattern to the Compact. Not ink. Presence. The celestial copy Blake retrieves tomorrow holds the active record. The quizzes determined who we can reach.',
      '\'And who doesn\'t answer,\' Vesper says.',
      '\'Isn\'t there,\' Maren says. \'Yes.\'',
      '\'We find out when it happens,\' Vesper says.',
      '\'Yes,\' Maren agrees.',
    ],
    choices: [{ label: 'Continue', next: 'scene-16' }]
  },

  'scene-15-choice-c': {
    location: 'Louisa\'s office \u2014 continuous',
    image: 'images/scene-15.jpeg',
    text: [
      '\'I\'m not negotiating the framing of the truth,\' I say. \'What happened happened. What you do with it is your choice.\' He picks up his coat and goes.',
      'After he leaves, Blake\'s shoulder presses against mine and stays there.',
      'After Emilio leaves, Maren explains what the invocation requires. Each constellation who answers commits their pattern to the Compact. Not ink. Presence. The celestial copy Blake retrieves tomorrow holds the active record. The quizzes determined who we can reach.',
      '\'And who doesn\'t answer,\' Vesper says.',
      '\'Isn\'t there,\' Maren says. \'Yes.\'',
      '\'We find out when it happens,\' Vesper says.',
      '\'Yes,\' Maren agrees. \'Vesper says she\'s worked with worse odds,\' and picks up her report.',
    ],
    choices: [{ label: 'Continue', next: 'scene-16' }]
  },

  'scene-16': {
    title: 'Chapter Sixteen: What Has to Be Done Alone',
    location: 'Vesper\'s safehouse, then Brooklyn \u2014 November 23rd',
    image: 'images/scene-16.jpeg',
    showImage: true,
    text: [
      'He tells me before anyone else is awake.',
      'We are in the kitchen \u2014 Vesper moved the crew here last night, office address compromised \u2014 and his hand is over mine on the table when he says: \'I need to retrieve the copy today. With Cas and Pol.\'',
      '\'Tell me what it is. Exactly.\'',
      'He is quiet for a moment, finding the words for something that resists them. \'The celestial copy of the Compact exists in the space where Scorpio\'s knowledge was kept \u2014 between the sky and the world, where we existed before we fell. Not physical. Not in any location you could find on a map. It can only be retrieved by a fallen constellation reaching back into what they were, briefly, with a Gemini channel to translate \u2014 because that bridge between realms is Cas and Pol\'s nature.\' He pauses. \'The Van der Zon and Lunardi instruments can detect that kind of reach. It\'s brief, but visible to anyone watching.\'',
      '\'So if they spot it \u2014\'',
      '\'We have less time than we thought.\' He looks at me. \'I\'ll come back.\'',
      'He lifts my hand and presses his mouth to the inside of my wrist. I experience this in my chest before anywhere else.',
      '\'All right,\' I say.',
      'He goes at eight with Cas and Pol. He comes back at noon. What he\'s carrying exists at the edge of visible light. The headache behind my left eye pulses once. Recognition.',
      'Maren takes it with both hands and says nothing for several minutes.',
      'Blake sits across from me. He looks tired in the way he looks tired after being, briefly, more than one thing at once. I pour him coffee and push it across the table. His foot finds mine underneath and stays there. That\'s the whole conversation. It\'s enough.',
      '---',
      'In the afternoon I go to Brooklyn.',
      'The cousin opens the door with the expression of someone asked to be neutral and finding it difficult. \'She left this morning. White-haired man, very polite. Mary said she knew him.\' She pauses. \'She asked me to tell you she left something in the room.\'',
      'Mary\'s room: bed made, window closed, the extra blanket folded at the foot. On the pillow: a Van der Zon calling card. On the back, in Mary\'s slanted cursive:',
      '*Don\'t stop. I\'m fine. Go.*',
      'I sit down on the bed.',
      'I let it happen \u2014 the grief, the fury, the fear I\'ve been compressing into tasks since October. I press my hands flat on my knees and breathe and think about Mary\'s handwriting, every letter counting, and about sixty-three years of watching powerful men overreach. She knew he would come. She left me the only instruction that matters.',
      'I trust her assessment. I stand up. I put the card in my pocket. I go.',
    ],
    choices: [
      { label: 'Trust her. Walk back to Manhattan. Honour her instruction by finishing what she told you to finish.', next: 'scene-16-choice-a' },
      { label: 'Try to find her first. Follow one lead.', next: 'scene-16-choice-b' },
      { label: 'Send Vesper. She\'ll find what you wouldn\'t.', next: 'scene-16-choice-c' },
    ]
  },

  'scene-16-choice-a': {
    location: 'The bridge to Manhattan \u2014 continuous',
    image: 'images/scene-16.jpeg',
    text: [
      'I walk the whole bridge in the cold and I don\'t think about where she is. She left me an instruction. Honouring it means finishing what she told me to finish.',
      'I arrive at the church at four. Blake takes one look at my face and puts his arm around me, and we stand like that in the cold for a minute, and then I straighten up and we go inside and I work.',
    ],
    choices: [{ label: 'Continue', next: 'scene-16-night' }]
  },

  'scene-16-choice-b': {
    location: 'Brooklyn, then Manhattan \u2014 continuous',
    image: 'images/scene-16.jpeg',
    text: [
      'I follow one lead for three hours \u2014 a carriage rental, a boarding house, a dead end. My mother is not where I can reach her.',
      'I arrive at the church late, in the dark, carrying the specific exhaustion of having done everything and found nothing. Blake meets me at the door. He takes my face in both hands and looks at me. \'She\'s all right,\' he says.',
      '\'You don\'t know that,\' I say.',
      '\'No,\' he says. \'But I know you.\' We go inside.',
    ],
    choices: [{ label: 'Continue', next: 'scene-16-night' }]
  },

  'scene-16-choice-c': {
    location: 'Brooklyn, then Manhattan \u2014 continuous',
    image: 'images/scene-16.jpeg',
    text: [
      'Vesper finds what I would not have \u2014 a routing address, a Van der Zon property on lower Broadway, confirmation that Mary is comfortable and has been asking Hendrik pointed questions about celestial mechanics, which three separate sources report he has been answering.',
      'Vesper returns to the church late, after the others, and misses the first part of what Hendrik says.',
    ],
    choices: [{ label: 'Continue', next: 'scene-16-night' }]
  },

  'scene-16-night': {
    location: 'Vesper\'s safehouse \u2014 November 23rd, night',
    image: 'images/scene-16.jpeg',
    text: [
      'I come back to the safehouse and find Blake in the kitchen and I tell him everything, including the name I haven\'t said until now. I say it once, plainly. He listens.',
      'Then: \'Tell me what you need.\'',
      '\'To finish this,\' I say. \'And tonight.\'',
      'He holds out his hand. I take it.',
      'What the night is, it is. The city outside is loud and we are not loud at all, and somewhere in the dark I press my face against his shoulder and think about after \u2014 the question I\'ve been refusing to ask directly, the one beneath every filing system I\'ve built. Whatever the invocation gives us, or doesn\'t. I am not doing arithmetic tonight. Tonight I am just here, and he is here, and that is what there is.',
      'The morning comes. We let it.',
    ],
    choices: [{ label: 'Continue', next: '__night_before__' }]
  },

  'scene-17a': {
    title: 'Chapter Seventeen: The Night Before',
    location: 'The Old Dutch Reformed Church, Fulton Street \u2014 November 24th, late',
    image: 'images/scene-17.jpeg',
    showImage: true,
    text: [
      'The church is the oldest continuously inhabited ground in Manhattan \u2014 foundations from 1628, over two hundred years of witnessing, a quality of patience built into the walls. It is past midnight. Maren and Vesper are working near the altar. Cas and Pol are in the east transept, eyes closed, hands open. Leo is not here. Nobody says so.',
      'Blake and I finish the last of the foundation markers. The work takes twenty minutes. Then it is done and we are in the oldest church in the city with nowhere to be until dawn.',
      'He leans against a pew. I lean against the one across. The candle between us throws amber light across his face and makes the gold at his fingers visible even at rest.',
      '\'Tell me what happens tomorrow,\' I say. \'All of it.\'',
      'He tells me \u2014 the invocation mechanism, the signatures, what the clause challenge requires. And then, quietly, what the constellation count means for his choice. Scorpio\'s signature is the Compact\'s keystone, he explains. With enough other signatures, the Compact can hold with his pattern split between earth and sky.',
      '\'What would you say,\' he asks, \'if you could tell me anything right now.\'',
      '\'I would say I\'m not ready to do this without you,\' I tell him. \'And I\'m aware that\'s not a useful thing to say twelve hours before the invocation.\'',
      '\'I may not be going anywhere,\' he says. He crosses to me and sits in the pew beside me, close, his arm along the back of it. \'Enough signatures means the Compact holds with my pattern split \u2014 part sky, part here. It\'s never been invoked. Maren believes it holds.\'',
      '\'Not gone,\' I say.',
      '\'Not gone.\' His hand comes up to my face \u2014 his thumb at my cheekbone. \'I fell because I found your name in the configuration of what was coming and I wanted to understand it. The understanding turned out to be \u2014 larger than I expected.\' He is very close. \'I am not going anywhere you can\'t find me.\'',
      'I kiss him. He kisses me back with the same focused, unhurried attention he brings to everything that matters, and the oldest church in Manhattan holds us the same way it holds everything \u2014 without judgment, as one more thing worth witnessing.',
      'Later, his arm around me, candles burning lower: \'What will you call it? If there\'s a new constellation.\'',
      '\'I\'m not telling Maren,\' I say.',
      '\'But you know.\'',
      '\'Yes,\' I say. \'I know.\'',
      'He doesn\'t ask what. He already knows I\'ll show him. That\'s better than telling.',
    ],
    choices: [{ label: 'Continue', next: 'scene-18' }]
  },

  'scene-17b': {
    title: 'Chapter Seventeen: The Night Before',
    location: 'The Old Dutch Reformed Church, Fulton Street \u2014 November 24th, late',
    image: 'images/scene-17.jpeg',
    showImage: true,
    text: [
      'The church is the oldest continuously inhabited ground in Manhattan \u2014 foundations from 1628, over two hundred years of witnessing, a quality of patience built into the walls. It is past midnight. Maren and Vesper are working near the altar. Cas and Pol are in the east transept, eyes closed, hands open. Leo is not here. Nobody says so.',
      'Blake and I finish the last of the foundation markers. The work takes twenty minutes. Then it is done and we are in the oldest church in the city with nowhere to be until dawn.',
      'He leans against a pew. I lean against the one across. The candle between us throws amber light across his face and makes the gold at his fingers visible even at rest.',
      '\'Tell me what happens tomorrow,\' I say. \'All of it.\'',
      'He tells me \u2014 the invocation mechanism, the signatures, what the clause challenge requires. And then, quietly, what the constellation count means for his choice. Scorpio\'s signature is the Compact\'s keystone. Enough signatures to hold the Compact, but not enough to fully restore the sky without his full commitment. If he stays, his signature is split. The sky heals more slowly.',
      '\'What would you say,\' he asks, \'if you could tell me anything right now.\'',
      '\'I would say stay,\' I tell him. \'And I need you to know I understand what I\'m asking.\'',
      'He moves to sit beside me in the pew. Takes my hands. In the candlelight the gold at his fingers is steady and warm. \'Enough signatures to hold the Compact,\' he says. \'But not enough to fully restore the sky without my full commitment. If I stay, my signature is split. The sky heals more slowly \u2014 months, Maren says.\' He pauses. \'I know what I\'m choosing.\'',
      '\'It costs something,\' I say.',
      '\'Some things are worth their cost.\' He squeezes my hands. \'I watched your world from above for a very long time and found it interesting. And then I fell into it and found you, and interesting became something else entirely.\' He meets my eyes. \'I know what I\'m choosing. I knew before tonight.\'',
      'I lean my head against his shoulder. He rests his chin on top of my head. Outside, the city is entirely unaware that anything is about to change.',
      'Later, when I\'m half-asleep against him, he says quietly: \'It was worth it.\'',
      '\'You don\'t have to say it yet,\' I tell him.',
      '\'I know,\' he says. \'I want to.\'',
    ],
    choices: [{ label: 'Continue', next: 'scene-18' }]
  },

  'scene-17c': {
    title: 'Chapter Seventeen: The Night Before',
    location: 'The Old Dutch Reformed Church, Fulton Street \u2014 November 24th, late',
    image: 'images/scene-17.jpeg',
    showImage: true,
    text: [
      'The church is the oldest continuously inhabited ground in Manhattan \u2014 foundations from 1628, over two hundred years of witnessing, a quality of patience built into the walls. It is past midnight. Maren and Vesper are working near the altar. Cas and Pol are in the east transept, eyes closed, hands open. Leo is not here. Nobody says so.',
      'Blake and I finish the last of the foundation markers. The work takes twenty minutes. Then it is done and we are in the oldest church in the city with nowhere to be until dawn.',
      'He leans against a pew. I lean against the one across. The candle between us throws amber light across his face and makes the gold at his fingers visible even at rest.',
      '\'Tell me what happens tomorrow,\' I say. \'All of it.\'',
      'He tells me before I can speak.',
      '\'There aren\'t enough,\' he says. \'Without my full signature in the sky, the Compact fractures over time. Mine is the keystone. The Van der Zons understood it two hundred years ago, which is why the clause was specific to me.\' He says it with the flatness of someone who has stripped every jagged edge off a fact by carrying it too long. \'I\'m not asking your permission. I\'m telling you now so you don\'t hear it in the middle of tomorrow.\'',
      '\'To what?\' My voice comes out smaller than I intend.',
      'He opens his arms and I go into them, which I have not let myself do in all the careful weeks since the yards. He holds me with his complete attention.',
      '\'Tell me something true,\' he says. \'Tell me what you want to say before tomorrow.\'',
      'I tell him. What it felt like when the headache stopped in the crater. His hands in the safehouse. The coat I\'ve fixed a dozen times. The way he says my name when it\'s just the two of us. What it is to have been found by someone who already knew you, and what the finding meant.',
      'When I finish, the church is very quiet.',
      'He pulls back enough to look at me. His hands come up to my face and I lean into them.',
      '\'I\'ll be in the sky,\' he says. \'You\'ll be able to see me.\'',
      '\'I know.\'',
      '\'It\'s not nothing.\'',
      '\'I know it\'s not nothing,\' I say. \'I\'m going to need some time before I can say it\'s enough.\'',
      '\'That\'s honest,\' he says.',
      '\'I\'m trying to be accurate.\'',
      'Then I kiss him, because neither of us has any use for pretending, and we have the rest of the night, and we use it.',
      'Maren calls us at four. We go.',
    ],
    choices: [{ label: 'Continue', next: 'scene-18' }]
  },

  'scene-18': {
    title: 'Chapter Eighteen: The Invocation',
    location: 'The Old Dutch Reformed Church, Fulton Street \u2014 November 25th, pre-dawn',
    image: 'images/scene-18.jpeg',
    showImage: true,
    text: [
      'Hendrik Van der Zon arrives at three in the morning with four men, my mother, and a small brass instrument in a leather case \u2014 the celestial extraction device, the thing that burned through Charles Carver.',
      'Mary is unharmed. She is standing slightly apart from the men, wearing her coat and the expression I have been reading since childhood: I\'m fine. Go.',
      'Blake is at the altar. His hand finds mine as Hendrik enters \u2014 briefly, warm, and then releases. We both have work to do.',
      'Hendrik surveys the church. His eyes settle on me. \'Miss Dawson. I gave you the option of discussion.\'',
      '\'You gave me your terms. That\'s different.\'',
      'He sets the leather case on a pew \u2014 not a threat yet, just present. \'Complete this invocation and I use this on you. Permanently. The celestial resonance that produces second sight, severed at the source. Your gift, gone. Not six weeks. Forever.\'',
      'The church is very quiet.',
      'Then Hendrik mentions a detail \u2014 the cousin\'s address in Brooklyn, said with the casual precision of a man establishing the reach of his intelligence \u2014 and there it is. The specific detail that could only have come from inside the crew. From someone who was in our planning session and left early.',
      'Leo is not here. He has not been here. And now I know why, with the cold certainty of having had the pieces for two days and finally having the last one placed.',
      'I look at the leather case. I look at Mary, who is looking at me. I look at Blake at the altar.',
      'I make my choice.',
    ],
    choices: [
      { label: 'Invoke anyway. Begin.', next: 'scene-18-choice-a' },
      { label: 'Negotiate. Cross toward him. Give him the original Compact to read.', next: 'scene-18-choice-b' },
      { label: 'Let someone else handle it. Step back. Mary is already moving.', next: 'scene-18-choice-c' },
    ]
  },

  'scene-18-choice-a': {
    location: 'The Old Dutch Reformed Church \u2014 continuous',
    image: 'images/scene-18.jpeg',
    text: [
      '\'Begin,\' I say to Maren.',
      'Her hands move. Cas and Pol open their eyes. Blake turns to the altar.',
      'Hendrik steps toward the leather case \u2014 and Emilio Lunardi steps from the shadow near the west door with two men, as promised. They move between Hendrik and the pew with quiet efficiency.',
      'Something passes between them \u2014 two men from families that have managed celestial affairs in this city for two centuries, and the moment one understands the other has changed sides.',
      '\'Emilio.\' \'Hendrik.\' It isn\'t enough to stop everything. It\'s enough to slow it \u2014 enough for Maren and Blake and Cas and Pol to do what they came to do.',
      'I look at Blake at the altar and I keep looking at him for the entirety of what follows.',
    ],
    choices: [{ label: 'Continue', next: 'scene-18-invocation' }]
  },

  'scene-18-choice-b': {
    location: 'The Old Dutch Reformed Church \u2014 continuous',
    image: 'images/scene-18.jpeg',
    text: [
      'I cross toward him \u2014 not retreat, toward. He watches me come, recalculating.',
      '\'What you want,\' I say, \'is the celestial order working. Navigation, agriculture, second sight \u2014 everything the fall has been corrupting. The real Compact gives you that. Not because you control it, because it functions as it was designed, and you live in that world like everyone else.\' He is still. Something moves behind his composed expression. \'Read it,\' I say. \'The original. Tell me whether what you want and what this gives you are different things.\'',
      'He doesn\'t reach for the leather case. He reaches for the Compact.',
      'While he reads, Maren begins.',
      'I look at Blake at the altar and I keep looking at him for the entirety of what follows.',
    ],
    choices: [{ label: 'Continue', next: 'scene-18-invocation' }]
  },

  'scene-18-choice-c': {
    location: 'The Old Dutch Reformed Church \u2014 continuous',
    image: 'images/scene-18.jpeg',
    text: [
      'Mary steps forward.',
      'She crosses the church floor with the unhurried authority of someone who has been waiting for this conversation for twelve hours. She stops in front of Hendrik and looks at him with my eyes \u2014 the same quality, which I apparently did not invent.',
      '\'You brought me here to make her stop,\' she says. Observationally. \'She is not going to stop. And you bringing me here is the proof that you knew that, and did it anyway, because you had nothing else.\'',
      'Hendrik looks at her. He does not reach for the leather case.',
      'In the silence Mary creates, Maren begins.',
      'I look at Blake at the altar and I keep looking at him for the entirety of what follows.',
    ],
    choices: [{ label: 'Continue', next: 'scene-18-invocation' }]
  },

  'scene-18-invocation': {
    location: 'The Old Dutch Reformed Church, Fulton Street \u2014 November 25th, dawn',
    image: 'images/scene-18.jpeg',
    text: [
      'I experience the invocation through my gift. The ozone smell first \u2014 sharp and clean, the way it smelled in the crater the first day. Then the pressure behind my left eye: the sense of something vast held at a wrong angle for two hundred years being slowly, correctly placed.',
      'Cas and Pol\'s voices: low, alternating, reaching across ocean and continent simultaneously. Each signature arrives as warmth, as weight, as a specific presence. I count them.',
      'Blake names the clause aloud. His voice settles the air. The clause named, challenged, submitted. Maren\'s argument, weeks of work, delivered in two sentences.',
      'The last signature arrives. I feel it before Maren speaks.',
      'The Compact invokes.',
      'The pressure behind my left eye releases.',
      'Outside the oldest windows in Manhattan, the sky is no longer wrong.',
      'In the months that follow, the Van der Zon celestial authority \u2014 two hundred years built on a forged document \u2014 is dissolved. The archive, the colonial deeds, the instruments: subject to the restitution claim Maren and Emilio\'s legal teams file jointly in December. Hendrik is not in prison. He is watching two hundred years of permanence being dismantled, methodically, by a woman he spent twenty years keeping out of a library. Maren considers it sufficient. I consider it a beginning.',
    ],
    choices: [{ label: 'Continue', next: '__ending__' }]
  },

  'ending-a': {
    endingLabel: 'Ending A',
    title: 'A New Sky',
    location: 'Greenwich Village \u2014 Spring 1854',
    image: 'images/scene-18.jpeg',
    showImage: true,
    text: [
      'The almond tree in the yard on Bleecker Street has been blooming for three days. I know this because I can see it from my new office window \u2014 I moved in February, two windows now, room for a secretary I haven\'t hired because I haven\'t found someone I trust sufficiently. Maren says I should lower my standards. Vesper says I should hire her. I am taking my time.',
      'My gift came back different. Sharper \u2014 the visions arrive whole now, already telling me what they mean. I asked Blake about this in January. He said: the mechanism repaired toward accuracy rather than toward what it was. I asked if that was good. He said: it\'s more you. I decided that was good.',
      'Maren published her paper \u2014 on the Compact, the forgery, the full history of the Van der Zon deception \u2014 in the Journal of Dutch Colonial History in March. Under her full name. The first paper by M. E. Voss that any reader knew immediately was written by a woman. She and Emilio are handling most of the subsequent correspondence together, which neither of them would describe as a partnership and which clearly is.',
      'Leo\'s followers are in the protection clause. Leo sent a letter in January. I haven\'t replied yet. The letter is on my desk.',
      'Vesper opened a security consulting practice. Her clients include Maren, Leo\'s theatre, and a woman on Washington Square who had been swindled by a fraudulent medium. Vesper retrieved every penny.',
      'Mary is back in the Bowery boarding house, south-facing room, extra blanket, her hip managed by the particular combination of stubbornness and a good landlady who understands what the three extra dollars a month are actually paying for. She had, she reports, a perfectly adequate time as Hendrik\'s guest. She thinks he may have heard some of what she said to him. I am less optimistic.',
      'Blake is both. Maren was right about the dual existence clause, and it is stranger and more ordinary than either of us expected. Some mornings he is simply here \u2014 coffee, the coat that finally fits because I took it to a tailor in January, arguing with Vesper about methodology. Some nights the gold at his hands brightens and he goes quieter and I understand that part of him is elsewhere. He comes back on his own.',
      '[IF_PATH_C]',
      'I was in the room the first time he read the altered clause \u2014 I watched his face settle into that different stillness and watched him close the cabinet without a word. He told me what he\'d found there in February. I said: you could have told me then. He said: I know. He said: I didn\'t want it to be true yet, in that room, with you. I have thought about this a great deal since and found I understand it completely.',
      '[END_IF]',
      '[IF_PATH_D]',
      'He came back through the Van der Zon doorway that night with the clause already inside him \u2014 carrying what he\'d found before he\'d decided how to hold it. I didn\'t know what he was carrying. I\'ve thought since about what I was learning in the waiting: that he comes back, and that what he comes back holding, he eventually tells me. I have found this reliable in all the ways that count.',
      '[END_IF]',
      '\'What are you thinking about,\' he said last week, in the early light.',
      '\'Everything that nearly didn\'t happen,\' I said.',
      'He put his hand flat on my sternum \u2014 over my heart. \'It happened,\' he said.',
      '\'Yes,\' I said. \'It did.\'',
      'My mother asked again what the new constellation is called. I told her Maren has three theories. She said: what do you call it. I said I wasn\'t telling. She made the sound she makes when something is good but she won\'t say so directly.',
      'He\'s at the door by morning. He always is. I have stopped being surprised by this and started being the thing that comes after surprise, which is better.',
    ],
    choices: []
  },

  'ending-b': {
    endingLabel: 'Ending B',
    title: 'Worth It',
    location: 'Greenwich Village \u2014 Winter 1854',
    image: 'images/scene-18.jpeg',
    showImage: true,
    text: [
      'The sky healed slowly. Maren tracks it in a notation system she shows me weekly \u2014 the constellation patterns restabilising into the new configuration. Almost right. Getting there.',
      'Blake\'s celestial connection fades gradually, as Maren predicted. He sleeps more. He has opinions about the cold he didn\'t previously have. The gold at his hands is quieter \u2014 some mornings I barely notice it, and then some mornings I press my fingers against his to feel the warmth and he looks at me and I look back and neither of us says anything, which is a conversation.',
      '[IF_PATH_C]',
      'He told me in November what he\'d found at the bottom of the Compact in that archive room \u2014 the thing he\'d read and closed the cabinet on without explanation, while the lamp was still lit and we were still close enough that I could feel the warmth off him. I said: you could have told me then. He said: I wanted ten more minutes before it was real. I understand that now better than I did. I understand most things about him better than I did.',
      '[END_IF]',
      '[IF_PATH_D]',
      'He came back through the Van der Zon doorway that night different \u2014 carrying the clause, the thing that nearly made the invocation impossible, before either of us had a name for it. He came back then. He comes back now, from wherever the fading takes him, every morning. The quality of the return is quieter. I have decided it counts.',
      '[END_IF]',
      'My gift came back. Not quite to what it was, but mine. Functional. I asked Blake what the repair felt like from the celestial side. He said: like a door that wouldn\'t quite close, closing. I said: is that good. He said: it means you\'re staying in the room.',
      'Maren published her paper on the Compact and the Van der Zon forgery in the Journal of Dutch Colonial History in March, under her full name. The paper made the forgery public record and set the Van der Zon restitution process in motion.',
      'Leo\'s followers are protected. Leo sent a letter in December. I replied in January: I understand why you made it. I am not ready to forgive it yet. I\'ll tell you when I am. He wrote back: I know. I\'ll wait.',
      'Mary is back in the Bowery, her hip managed, her window south-facing, herself entirely. She and Blake have a mutual respect based on the fact that she asked him very direct questions the first time they met properly and he answered all of them. She told me: he\'s honest. I said: yes. She said: so are you, when you\'re not being careful.',
      'Some nights we stand on the roof and look at the sky \u2014 the new pattern, the space where Scorpio was. Blake is quiet on those nights in a way I have learned to be with rather than fill. Once I asked if he missed it.',
      '\'I miss what it was to be certain,\' he said. \'From up there, things have shapes you can read. Down here they\'re more ambiguous.\' He looked at me sideways. \'I find I prefer ambiguous.\'',
      '\'That\'s very human of you,\' I said.',
      '\'Yes,\' he said. \'I\'m working on it.\'',
      'He says it was worth it. Not defensively, not like a reassurance \u2014 like a fact he\'s discovering the full truth of over time. I believe him a little more each time.',
    ],
    choices: []
  },

  'ending-c': {
    endingLabel: 'Ending C',
    title: 'The Cost',
    location: 'Greenwich Village \u2014 Autumn 1854',
    image: 'images/scene-18.jpeg',
    showImage: true,
    text: [
      'The sky is right.',
      'I know this the way I know things now \u2014 my gift tells me, with the quiet certainty it has had since the invocation. The celestial order is functioning as designed. Navigation holds. The tide tables are accurate. Second sight runs clearly across the city.',
      'Maren published her paper on the Compact and the Van der Zon forgery in the Journal of Dutch Colonial History in March, under her full name. The paper made the forgery public record. Hendrik Van der Zon is watching two hundred years of permanence dismantled by a woman he spent twenty years keeping out of a library. Maren considers this sufficient. I consider it a beginning.',
      'Leo\'s followers are protected. Leo wrote in December: I made a choice I believed was right. I understand if you cannot \u2014 the sentence stopping there, no period, as if he genuinely didn\'t know how to finish it. I replied in January: I understand why you made it. I am not ready to forgive it yet. I\'ll tell you when I am. He wrote back: I know. I\'ll wait.',
      'Mary is back in the Bowery, south-facing room, extra blanket, her hip managed, herself entirely. She thinks Hendrik is not a bad man. I think she is being generous. She says generosity is cheaper than bitterness, in the long run.',
      'I asked Cas about my gift in December \u2014 whether the repair was theirs, or Blake\'s, or the Compact\'s. She said: the Compact restored the celestial order. The celestial order restored your gift. He made the Compact hold. I keep that.',
      'There is a new constellation above Manhattan. Small, newly placed, in the space where Scorpio was. It doesn\'t behave like the others \u2014 present some nights, absent others, which Maren has written eighteen pages about without satisfaction. She asked me last week if I had any theories. I told her I was still developing them.',
      'The first night it appeared, standing on the roof in November cold, the headache behind my left eye pulsed once. Not pain. Recognition. The same thing it did in the crater the first day.',
      'The cost was real. I am not going to pretend it wasn\'t, or that I am finished with it, or that finished is a destination I expect to reach soon. What I have found is that I can carry it and work and laugh and mean it and still, sometimes, stand on the roof at night and feel the weight of what is not here.',
      'Both things are true. I have stopped expecting them not to be.',
      'I don\'t tell Maren what to call the constellation. Some things you hold \u2014 not to keep them from anyone, but because the holding is the point.',
      'It\'s not nothing. It is, in fact, everything.',
    ],
    choices: []
  },


};