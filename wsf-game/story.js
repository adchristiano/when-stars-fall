const STORY = {

  'prologue': {
    title: 'Before the Story Begins',
    location: 'New York City — October 12th, 1853',
    image: 'images/scene-00.jpeg',
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
      'Something moves across Blake\'s face when she says celestial terms. Recognition, quickly shut. \'Tell her,\' he says quietly. \'She needs to know.\' \'That\'s what I\'m doing,\' Maren says, and picks up her pen.',
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
      'Before we leave, Leo tells us to find the twins and gives the Capricorn clue: \'He went where power is oldest — centuries of accumulated authority, something that compounds. A banking family. Somewhere very old and very certain of itself.\'',
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
    text: [
      'We walk out together into the cold. The street is quiet in that particular way it gets after ten, when the restaurants have stopped seating and the bars haven\'t yet disgorged anyone. Blake walks beside me with his hands in his coat pockets and I don\'t quite know what to do with the fact that I\'m glad he\'s there.',
      'He says, after a while, \'You write everything down.\'',
      '\'Yes.\'',
      '\'Even things you already know?\'',
      '\'Especially those.\'',
      'He thinks about this. \'Why?\'',
      'I consider telling him about my mother, about the notebooks she kept and what happened when she stopped, but this isn\'t the moment for that. \'Because knowing and writing are different kinds of holding,\' I say instead. \'I want both.\'',
      'He nods as though this is a satisfying answer. Somewhere above us, barely visible through the haze, something that might be Regulus sits low on the horizon. I think about Pol\'s chart and Cas\'s hands and the fact that Capricorn has gone somewhere that compounds. I think about what it means that Blake knew which way to look.',
      'At the corner of Charles Street he says, \'Goodnight, Vee.\' I\'ve noticed he only uses that name when he means something by it. I notice I\'ve started watching for when he does.',
      '\'Goodnight,\' I say, and walk home alone.'
    ],
    choices: [{ label: 'Continue', next: 'scene-8' }]
  },

  'scene-8': {
    location: 'Maren\'s library, Gramercy Park — November 10th',
    image: 'images/scene-08.jpeg',
    text: [
      'Maren\'s library is not a room so much as a commitment. Floor to ceiling, three walls, a rolling ladder on a brass rail, and every book organized according to a system she refuses to explain on the grounds that it is, in her words, \'too obvious to require articulation.\' I have never once found anything on the first try.',
      'Today she has laid out three copies of the Compact manifesto on the reading table. The original typeset, 1909. A carbon copy in someone\'s looping handwriting. And one I\'ve never seen before — bound in faded blue cloth, no author name, the pages thicker than they should be as though something had been pressed between them a long time ago.',
      '\'Sagittarius kept records,\' Maren says, sitting across from me with a cup of tea she doesn\'t drink. \'Not notes — records. Receipts. Schedules. The kind of thing that seems mundane until you realize it is the only evidence that a meeting happened at all.\'',
      'She slides the blue-cloth copy toward me. Inside the front cover, in ink faded to the color of old tea, someone has written a single address: 116th and Broadway. Below it, a date: December 3rd, and a name I don\'t recognize — but Maren, watching my face, says, \'That\'s the celestial archive. Or it was, in 1941. We don\'t know if it survived the building\'s sale.\'',
      'I look at Blake across the table. He\'s been quiet through all of this, which is not unusual — but there is a particular quality to this quiet, the kind that means he already knows something about what she just said.',
      '\'Vesper wrote to me last week,\' Maren adds. \'She says Pisces kept a separate set of records. Personal ones. She thinks they may describe the celestial copy\'s last known location.\'',
      'I write all of this down. Then I close the notebook and look at Blake and wait.'
    ],
    choices: [
      { label: 'Press him. He recognized the address — you could see it in his face.', next: 'scene-8-choice-i' },
      { label: 'Let it rest for now. You\'ll get more out of him if you don\'t push.', next: 'scene-8-choice-ii' },
      { label: 'Tell Maren about your mother\'s connection to Pisces. You\'ve been sitting on it.', next: 'scene-8-choice-iii' }
    ]
  },

  'scene-8-choice-i': {
    location: 'Maren\'s library, Gramercy Park — continuous',
    image: 'images/scene-08.jpeg',
    text: [
      '\'You know that address,\' I say.',
      'He doesn\'t look away. \'I\'ve seen it before.\'',
      '\'Where?\'',
      'A pause. Not evasion — calibration. Blake always knows what he\'s going to say before he says it; what varies is whether he judges the moment right. \'My grandmother lived two blocks from there,\' he says finally. \'She took me to a building on 116th when I was eight. Said she was returning something she\'d borrowed. She wouldn\'t say what.\' He pauses again. \'I remember there was an elevator that didn\'t work and a very old woman at a desk who looked at me like she was deciding something.\'',
      'Maren sets down her cup very carefully.',
      '\'She was Pisces,\' Blake says. \'I didn\'t know that then. I don\'t know if my grandmother did either.\'',
      'We walk back through Gramercy Park in the cold, through the gate Maren holds a key to. The bare trees make geometry of the sky. I think about the building on 116th and the very old woman deciding something and whether any part of this was ever accidental.'
    ],
    choices: [{ label: 'Continue', next: 'scene-9' }]
  },

  'scene-8-choice-ii': {
    location: 'Maren\'s library, Gramercy Park — continuous',
    image: 'images/scene-08.jpeg',
    text: [
      'I don\'t push. I write down the address and the date and the name I don\'t recognize and I close the notebook. Blake says nothing for a long moment. Then he says, \'Thank you,\' and I think he means the not-pushing.',
      'Maren walks us out through the park. The light is going early, the way it does in November, and the trees are the color of iron. She says, \'Vesper\'s records may tell us more than any of us want to know. I want you to be prepared for that.\'',
      'I say I will be. Blake says nothing. Walking beside him in the early dark I think that there are things he knows about this that he is not ready to say yet, and that not-pushing may have been exactly wrong — but some information is only offered when the door is left open, not when it\'s pried.',
      'We part at the gate. I take the long way home.'
    ],
    choices: [{ label: 'Continue', next: 'scene-9' }]
  },

  'scene-8-choice-iii': {
    location: 'Maren\'s library, Gramercy Park — continuous',
    image: 'images/scene-08.jpeg',
    text: [
      '\'My mother knew someone in the Pisces line,\' I say. Both of them look at me. I\'ve been waiting for the right moment to say this and I\'m not sure this is it, but I\'m tired of sitting on it. \'When I was twelve she started leaving for weeks at a time. She said it was research. After she died I found notebooks — not in her handwriting, in someone else\'s. Names I didn\'t recognize. Dates. A set of star coordinates I\'ve never been able to place.\'',
      'Maren\'s expression does something careful. \'Do you still have them?\'',
      '\'Yes.\'',
      '\'May I see them?\'',
      'I say yes. Blake is looking at me the way he sometimes does — like he is adjusting something internally. Later, walking through Gramercy Park, he says quietly: \'You should have told me sooner.\'',
      '\'I know.\'',
      '\'I\'m not — \' He stops. \'I just mean I would have handled certain conversations differently.\'',
      'I don\'t ask which ones. The park is cold and bare and the gate clangs shut behind us and whatever he would have handled differently, I think we both already know.'
    ],
    choices: [{ label: 'Continue', next: 'scene-9' }]
  },

  'scene-9': {
    location: 'The apartment, West Village — November 11th–12th',
    image: 'images/scene-09.jpeg',
    text: [
      'Vesper\'s intelligence arrives in two parts. The first is a letter forwarded through three people, handwritten in her usual compressed script, outlining what she knows about Sagittarius\'s movements in the final years: a house in the Catskills, a post-office box in Rhinebeck, a series of withdrawals from a bank account that closed in 1959. The second is a photocopy of a carbon — barely legible — that she describes as \'Sagittarius writing to Pisces directly, in a register I\'ve only seen her use once before.\'',
      'The letter, once I\'ve read it twice, says this: the celestial copy of the manifesto was moved from 116th Street in 1943. It was given, temporarily, to someone called Leo. Vesper doesn\'t know who Leo was. But a Capricorn note, also enclosed — two lines on hotel stationery, undated — reads: *Leo keeps the original. The terrestrial copies are for our protection. Burn this.*',
      'Leo. I add the name to the page. Below it I write: *Capricorn knows. Or knew.*',
      'On November 12th Blake comes over in the afternoon. I\'m at the table with all of it spread out and one of my buttons has come off my coat and I\'ve been meaning to sew it back for a week and haven\'t. He comes in, looks at the table, sits down across from me, and without saying anything picks up the button and the coat and my sewing kit from where I\'d left it on the chair and begins to sew it back on.',
      'We don\'t speak for ten minutes. Outside it starts to rain.',
      'Then he says, without looking up from the button: \'Leo. That\'s what she called him. My grandmother. There was a man she mentioned sometimes — she said he kept things safe. She called him Leo.\'',
      'I write it down.',
      'He finishes the button. Pulls the thread. Sets the coat down.',
      '\'I don\'t know if he\'s still alive,\' he says.',
      '\'We can find out.\'',
      '\'Yes,\' he says. \'We can.\''
    ],
    choices: [{ label: 'Continue', next: 'scene-vdz' }]
  },

  'scene-vdz': {
    location: 'The Van der Zon reception, Upper East Side — November 14th',
    image: 'images/scene-10.jpeg',
    text: [
      'The Van der Zons hold their reception in a townhouse on East 70th that makes no architectural concessions to the century. Pale stone, iron railings, a doorman who does not smile. Inside: toile wallpaper, Flemish landscapes, a chandelier with what appears to be actual candles, and sixty people in dark clothes speaking to one another in the particular register of the very old rich, which is to say: quietly, with long pauses, and absolute certainty that the room will wait.',
      'I am here because Maren called in a favor and got us both on the list. Blake is here because he apparently knows the younger Van der Zon son, Frederik, from some earlier chapter of his life that he has not explained. They greet each other in the hallway with the handshake of two people who shared an experience they are both glad is over.',
      'The question of the evening is Arie Van der Zon himself: eighty-one, still in complete command of a room, white-haired, and — I can feel it from across the reception — Compact-adjacent in some way that hasn\'t yet declared itself. He speaks to each person for exactly as long as he has decided to speak to them, and no longer. When he reaches me, he says, \'You\'re the one looking into Sagittarius.\'',
      'It isn\'t a question. I say yes.',
      'He looks at me with the attention of someone who was told something about me once and is now checking it against the fact of my presence. Then he says, \'Come back tomorrow. Alone. There are things I can tell you that are better said without company.\'',
      'He moves on before I can answer. I look across the room at Blake, who has witnessed this from twelve feet away and whose expression says: *interesting.*'
    ],
    choices: [
      { label: 'Come back tomorrow alone, as he asked.', next: 'scene-vdz-c', setPathC: 'C' },
      { label: 'Bring Blake. What Van der Zon said might not be safe.', next: 'scene-vdz-d', setPathC: 'D' }
    ]
  },

  'scene-vdz-c': {
    location: 'Van der Zon townhouse — November 15th',
    image: 'images/scene-10.jpeg',
    text: [
      'I come back alone.',
      'The townhouse is quieter in the morning. Arie Van der Zon receives me in a study on the second floor, lined with maps rather than books. He gives me coffee and says, without preamble, \'My father was the archivist. Not a member — he always insisted on the distinction. He kept things, catalogued things, moved things when they needed moving.\'',
      'He pauses. Outside the window a ginkgo tree has gone entirely yellow.',
      '\'In 1943 he received a package from a woman he knew only as Sagittarius. Inside was a bound manuscript — not the printed manifesto, something handwritten. He called it the celestial copy. He held it for six months, then passed it to a man named Leo when it became clear that the family\'s position was becoming — \' He searches for the word. \'Scrutinized.\'',
      '\'Do you know where Leo took it?\'',
      '\'No. But my father wrote that Leo said it would go \'where it was always meant to be.\' \' He looks at me over his coffee cup. \'I\'ve thought about that sentence for thirty years. I believe it\'s a location, not a sentiment. I believe Leo knew exactly where that was.\'',
      'I write it all down. When I leave, Arie Van der Zon sees me to the door himself and says, \'Your mother would have found this sooner.\'',
      'I stop. \'You knew her?\'',
      '\'I knew of her,\' he says. \'The way people in this world know of one another. She asked the right questions.\'',
      'He closes the door.',
      '[IF_PATH_C]',
      'Walking home I think about the right questions and what it costs to ask them alone.',
      '[END_IF]'
    ],
    choices: [{ label: 'Continue', next: 'scene-11' }]
  },

  'scene-vdz-d': {
    location: 'Van der Zon townhouse — November 15th',
    image: 'images/scene-10.jpeg',
    text: [
      'I bring Blake.',
      'Arie Van der Zon opens the door himself, sees us both, and his expression shifts by one degree — not anger, something more measured. \'I said alone.\'',
      '\'I know. I decided otherwise.\'',
      'He looks at Blake for a long moment. Blake, to his credit, says nothing. Then Arie steps back and lets us in.',
      'In the study he tells us what he told his father: the celestial copy, Sagittarius, 1943, a man named Leo, a sentence about where it was always meant to be. The same information, but delivered differently — crisper, less personal. He does not mention my mother.',
      'On the way out, in the foyer, Blake says, \'Mr. Van der Zon. Did your father leave any written record of what Leo looked like?\'',
      'Arie pauses on the threshold of the study. \'Tall,\' he says. \'Careful. Always wore a hat indoors.\'',
      'Blake says, \'Thank you.\'',
      'Outside, I say: \'That description.\'',
      '\'I know,\' Blake says.',
      '\'Your grandmother\'s Leo.\'',
      '\'Possibly.\'',
      '[IF_PATH_D]',
      'We walk the whole way back without speaking much. Sometimes the company is the thing that tells you what you needed to know.',
      '[END_IF]'
    ],
    choices: [{ label: 'Continue', next: 'scene-11' }]
  },

  'scene-11': {
    location: 'The safehouse, Inwood — November 16th',
    image: 'images/scene-11.jpeg',
    text: [
      'The address Pol gave us is a walk-up above a hardware store at the top of Manhattan, the last neighborhood before the island gives out to the bridge and the Bronx. I take the A train with Blake and we don\'t talk much on the way up, just sit with the file between us and the city getting quieter the further north we go.',
      'The apartment is small and cold and belongs to no one — a place of transit, used when needed, emptied between uses. There\'s a cot, a table, a hotplate, and a window that looks out over a bakery roof where a pigeon is engaged in the Sisyphean project of carrying a piece of bread somewhere it keeps dropping.',
      'Pol is here already. And someone else: a man in his fifties, dark coat, steady hands, who stands when we come in and says his name is Alden. He doesn\'t offer a Compact name. He says, \'I was Leo\'s assistant. He died in 1998. I\'ve been carrying what he left me ever since and I have been waiting, frankly, for someone to come and take it off my hands.\'',
      'He puts a flat box on the table. Inside, wrapped in linen the color of old paper, is a handwritten manuscript in a fine, slanted script. The first page says only: *What the Stars Require: A Record of the First Compact.*',
      'The celestial copy.',
      'I put my hand on the table so I don\'t put it on the manuscript. Blake sits down very carefully, like he is placing himself in a room that might not hold everything.',
      'Pol says, quietly, \'Alden. The woman who found this. Her mother — \'',
      '\'I know who her mother was,\' Alden says. He looks at me. \'She came to Leo in 1987. He told her it wasn\'t time yet. He was wrong about that. I\'m sorry.\''
    ],
    choices: [
      { label: 'Ask Alden what else Leo told him. There\'s more — you can tell.', next: 'scene-11-choice-i' },
      { label: 'Ask about your mother. What did Leo mean that it wasn\'t time?', next: 'scene-11-choice-ii' },
      { label: 'Ask Pol why he brought Alden here now. The timing matters.', next: 'scene-11-choice-iii' }
    ]
  },

  'scene-11-choice-i': {
    location: 'The safehouse, Inwood — continuous',
    image: 'images/scene-11.jpeg',
    text: [
      '\'What else did he tell you?\'',
      'Alden sits. He folds his hands. He is the kind of man who does not waste words but who has clearly been waiting to speak these ones. \'He said the Compact\'s last gathering was in December of 1959. That twelve people came and four left before the end. That what the remaining eight agreed to — whatever it was — was written down and placed inside the celestial copy as a second document. He never told me what it said.\'',
      '\'Did he read it?\'',
      '\'Yes.\'',
      '\'And?\'',
      '\'And he carried it for forty years and died with the particular stillness of someone who has made peace with something large.\'',
      'I open the linen cloth. The manuscript is there and inside it, folded once, is another page. Different handwriting. Shorter.',
      'Blake says, \'Do you want me to step out?\'',
      'I say, \'No.\'',
      'I read it. Then I fold it again and put it back and sit with my hands flat on the table until my pulse settles.'
    ],
    choices: [{ label: 'Continue', next: 'interlude-bowery' }]
  },

  'scene-11-choice-ii': {
    location: 'The safehouse, Inwood — continuous',
    image: 'images/scene-11.jpeg',
    text: [
      '\'My mother came to Leo in 1987,\' I say. \'What did he mean it wasn\'t time?\'',
      'Alden is quiet for a moment. Then: \'Leo believed the Compact\'s record shouldn\'t be opened until someone arrived who had enough distance from it to read it without breaking under what it said. Your mother — \' He pauses. \'She was too close. She\'d lost someone inside the Compact\'s last year. Reading it might have made certain things impossible for her.\'',
      '\'What things?\'',
      '\'Living, possibly,\' he says, simply. \'Leo loved her well enough not to give it to her.\'',
      'I sit with this. Outside the pigeon drops its bread again.',
      'Blake, who has been very still, says carefully, \'What about her daughter?\'',
      'Alden looks at me. \'Leo said: the one who comes after will have enough of her mother\'s fire to read it and enough of her father\'s cold to survive it.\' He pauses. \'I take it you\'re that one.\'',
      'I say, \'I\'m the only one there is.\'',
      'He nods. He pushes the box toward me.'
    ],
    choices: [{ label: 'Continue', next: 'interlude-bowery' }]
  },

  'scene-11-choice-iii': {
    location: 'The safehouse, Inwood — continuous',
    image: 'images/scene-11.jpeg',
    text: [
      '\'Pol,\' I say. \'Why now?\'',
      'He doesn\'t look surprised. \'The Van der Zons reached out to Alden last week. Not to us — directly to him. They know what he carries. If Alden doesn\'t transfer it under the Compact\'s auspices, it goes into their custody, and what they\'ll do with it is what old families always do: preserve it, seal it, and make its meaning theirs.\'',
      'Alden says, \'I have been waiting for someone with a legitimate claim. The woman who came in 1987 had one. Her mother before her had one.\' He looks at me. \'You have one.\'',
      '\'What kind of claim?\'',
      '\'The kind that\'s written into the document itself,\' he says. \'You\'ll understand when you read it.\'',
      'I look at Blake. He gives me the smallest nod — the one that means: *I will still be here when you come out the other side.*',
      'I take the box.'
    ],
    choices: [{ label: 'Continue', next: 'interlude-bowery' }]
  },

  'interlude-bowery': {
    location: 'The Bowery, walking south — late afternoon',
    image: 'images/scene-11.jpeg',
    text: [
      'We take the train back and get off early, by unspoken agreement, and walk the last mile through the Bowery in the afternoon light that in November sits low and amber and makes even the scaffolding look intentional.',
      'Blake carries the box. I carry the notebook. I have not yet decided whether to tell him what the inner document said; I haven\'t decided how to carry it yet myself. He doesn\'t ask. He walks beside me with the box under his arm like it is simply the thing he is carrying today, and I think that this is one of the things I will remember about him when I am old: that he understood the difference between waiting and leaving.',
      'We stop for coffee at a place on Broome Street that has been there since before either of us was born. The owner knows Blake, or knows someone like him, and sets two cups down without asking.',
      'I say, \'My mother came to Leo in 1987 looking for the same thing.\'',
      '\'I know.\'',
      '\'Did you know before today?\'',
      'A pause. \'I suspected. There were things my grandmother said about \'the woman who almost got there.\' I didn\'t know it was your mother until Alden said her name.\'',
      'Outside the light is going. I drink my coffee. The box sits on the table between us like a settled question.',
      '\'What was in the second document?\' he asks. Not pressing — offering me the chance to say it out loud if that would help.',
      'I think about it. \'Later,\' I say. \'When I know how to say it.\'',
      '\'All right,\' he says. And we finish our coffee in the amber light, and that is enough for now.'
    ],
    choices: [{ label: 'Continue', next: 'scene-12' }]
  },

  'scene-12': {
    location: 'Columbia University, Rare Books & Manuscripts — November 18th',
    image: 'images/scene-12.jpeg',
    text: [
      'The Columbia archives hold what they hold and no more. I know this going in — Maren called ahead and confirmed that the papers from the 1959 gathering were donated by an anonymous family estate in 1971, that they are organized but not fully catalogued, and that I have three hours.',
      'I use all three.',
      'What I find: minutes from four Compact meetings, 1954 through 1959, written in a shorthand I have to decode against the Sagittarius letters Vesper sent. A photograph, unmounted, of seven people in a room I don\'t recognize — three women, four men, all looking at something to the left of the camera. On the back, in pencil: *The last good year.* A letter from Capricorn to Sagittarius, 1958, that begins: *I have been asked to stay. I have not yet decided whether staying is the same as remaining.* And a ledger page with a list of stars — common names, not coordinates — with small symbols next to each one I don\'t understand until the third hour, when I realize they are initials.',
      'Leo\'s initial is beside Regulus.',
      'Sagittarius\'s initial is beside the Archer\'s brightest star. Capricorn\'s is beside Algedi. And beside a star I\'ve been looking at in this story since the beginning — beside the one that is, I now understand, mine — is my mother\'s initial, in pencil, very faint, as though she pressed lightly because she wasn\'t sure she belonged.',
      'I take photographs of everything. I sit for a moment in the cold archive room with my hands in my lap and let the weight of it settle.',
      'Then I go meet Blake at the gates and tell him we need to talk about Capricorn.'
    ],
    choices: [{ label: 'Continue', next: 'quiz-sagittarius' }]
  },

  'quiz-sagittarius': {
    type: 'quiz',
    constellation: 'Sagittarius',
    correct: 1,
    feedbackCorrect: ['Blake leans over and looks at the star chart. \'Kaus Australis,\' he says. \'I should have known — she always moved toward the brightest thing.\' We sit with the photograph between us and the archive closing around us and I think: we\'re getting close to something now.'],
    feedbackWrong: ['Blake frowns at the chart. \'You\'re thinking of the wrong star,\' he says quietly. \'Sagittarius\'s brightest is Kaus Australis. The archer always aims at the center.\' I write it down. The archive closes around us.'],
    next: 'quiz-capricorn'
  },

  'quiz-capricorn': {
    type: 'quiz',
    constellation: 'Capricorn',
    correct: 1,
    feedbackCorrect: ['\'Algedi,\' I say, and Blake nods once, as though confirming something he already suspected. \'The sea-goat\'s front horn. Capricorn always did position himself at the point of things.\' I circle the initial on the photocopy. Two stars down. One to go.'],
    feedbackWrong: ['Blake shakes his head. \'Algedi — the first star. Alpha Capricorni. Capricorn always took the lead position.\' I cross out what I\'d written and correct it. The stakes of getting this wrong are becoming clear.'],
    next: 'quiz-pisces'
  },

  'quiz-pisces': {
    type: 'quiz',
    constellation: 'Pisces',
    correct: 1,
    feedbackCorrect: ['\'Eta Piscium,\' Blake says, and something in his voice has shifted — lower, careful. \'The brightest of the fish. Vesper always said Pisces moved between two worlds without ever being entirely in either one.\' He closes the folder. \'That\'s all of them.\' Outside the archive a bell is ringing somewhere and the afternoon is almost gone.'],
    feedbackWrong: ['\'Not that one,\' Blake says gently. \'Eta Piscium — it\'s the brightest, even if it\'s not the alpha. Pisces was always like that: most important star, not the obvious one.\' He hands the corrected chart back to me. Outside the archive a bell is ringing and the afternoon is almost gone.'],
    next: 'scene-13'
  },

  'scene-13': {
    location: 'The apartment, West Village — November 19th',
    image: 'images/scene-13.jpeg',
    text: [
      'I spread everything out on the floor. The photographs from the archive, the Vesper letters, the Sagittarius ledger page, the copy of the inner document from the celestial manuscript — which I have now read four times and which I have not shown anyone, including Blake.',
      'The picture I\'m building: the Compact gathered for the last time in December 1959. Twelve people. Four left before the end. The remaining eight agreed to something — and that something is written in the document in my hand. What they agreed to is this: that the Compact would not dissolve but disperse. That each member would carry their knowledge into a new shape, one that could survive outside the original structure. That the record would be kept by whoever came to claim it with the clearest right.',
      'The clearest right. My mother\'s initial, pressed lightly into a star chart as though she wasn\'t sure she belonged.',
      'I sit on the floor with it all around me and I think: she didn\'t know. She came to Leo in 1987 and she looked right at the thing and she didn\'t know she was already inside it.',
      'Blake arrives at seven with food from the Vietnamese place on Carmine Street. He sets it down, looks at the floor arrangement, and sits down carefully at the edge of it.',
      '\'Tell me,\' he says.',
      'And I do.'
    ],
    choices: [
      { label: 'Tell him everything — including what the inner document says about you.', next: 'scene-13-choice-i' },
      { label: 'Tell him the facts. Keep the personal part back for now.', next: 'scene-13-choice-ii' },
      { label: 'Ask him first what he already knows. You have a feeling it\'s more than he\'s said.', next: 'scene-13-choice-iii' }
    ]
  },

  'scene-13-choice-i': {
    location: 'The apartment, West Village — continuous',
    image: 'images/scene-13.jpeg',
    text: [
      'I tell him everything.',
      'The inner document names a successor. Not by name — by description. *The one who comes after the one who almost arrived. The daughter of the woman who pressed lightly. She will find this when she is ready, and when she does she will know the Compact is not a history but a living trust, and she will be the one it lives in.*',
      'Blake is very still when I finish.',
      '\'You\'ve known this since Inwood,\' he says.',
      '\'I\'ve known since Inwood.\'',
      '\'And you waited until you\'d read the archives.\'',
      '\'I needed to know it was real before I said it out loud.\'',
      'He looks at the floor arrangement — all the papers, the photographs, the thread I\'ve been pulling on for months — and then he looks at me. \'It\'s real,\' he says. Simply. Like a fact.',
      'I say, \'I know.\'',
      'We eat the Vietnamese food on the floor surrounded by seventy years of Compact history and the particular silence of two people who have both understood something irreversible.'
    ],
    choices: [{ label: 'Continue', next: 'scene-14' }]
  },

  'scene-13-choice-ii': {
    location: 'The apartment, West Village — continuous',
    image: 'images/scene-13.jpeg',
    text: [
      'I tell him the facts.',
      'The 1959 meeting, the dispersal agreement, the inner document, the ledger with the initials, the photograph labeled *the last good year.* The architecture of it all. I tell him clearly and in order and I watch him build the picture.',
      'What I don\'t tell him: what the inner document says about me specifically. Not yet. It\'s not ready to be spoken.',
      '\'There\'s more,\' he says, when I pause.',
      '\'Yes.\'',
      '\'You\'ll tell me when you\'re ready.\'',
      '\'Yes.\'',
      'He nods once and opens the food containers and hands me chopsticks and says, \'All right then. What do you need next?\'',
      'This is, I think, one of the finest things about him: that he asks what I need next rather than what I\'m hiding. I am going to need that quality in what\'s coming.'
    ],
    choices: [{ label: 'Continue', next: 'scene-14' }]
  },

  'scene-13-choice-iii': {
    location: 'The apartment, West Village — continuous',
    image: 'images/scene-13.jpeg',
    text: [
      '\'Before I tell you what I found,\' I say, \'I want to know what you already know. Because I think it\'s more than you\'ve said.\'',
      'He\'s quiet for a moment. Then: \'Yes.\'',
      '\'Tell me.\'',
      'He picks up a set of chopsticks, doesn\'t use them yet. \'My grandmother didn\'t just know Leo socially. She was his contact inside the Compact\'s second generation — not a member, a courier. She moved things between the dispersed members after 1959. Letters, documents, objects.\'',
      '\'You knew this.\'',
      '\'I suspected. I didn\'t know for certain until Alden used her name.\'',
      '\'Why didn\'t you say something?\'',
      '\'Because,\' he says carefully, \'I wanted to make sure I was right before I handed you something that changes the shape of what we\'re doing.\'',
      'I look at him for a moment. Then I start telling him what I found. And as I lay it out I watch him fill in the pieces he was carrying, and what emerges is something neither of us could have built alone.'
    ],
    choices: [{ label: 'Continue', next: 'scene-14' }]
  },

  'scene-14': {
    location: 'The apartment, West Village — November 20th',
    image: 'images/scene-14.jpeg',
    text: [
      'In the morning Pol calls. His voice is careful in the way it gets when something has shifted.',
      '\'Capricorn reached out,\' he says. \'Not through us. Through a family connected to the Van der Zons. He wants to meet — alone, without the full Compact structure, on his terms.\'',
      '\'What does he want?\'',
      '\'To discuss the celestial record\'s disposition.\'',
      'I understand what this means. Capricorn knows about the manuscript. He knows Alden transferred it. He is moving to establish a position — not against the Compact, but around it, the way he always has: not by defecting, but by positioning himself as indispensable.',
      '\'He said something else,\' Pol adds. \'He said: *Tell the woman who found it that there\'s a conversation to be had about whether the record is hers or whether it belongs to a living Compact structure. Those aren\'t the same thing.*\'',
      'I hang up and sit with this.',
      'Blake is in the kitchen. I can hear him making coffee. The manuscript is in its linen cloth on the table.',
      'This is the question: do I go to that meeting believing I already know what I\'m carrying and what it means? Or do I go knowing I might have to fight for it?'
    ],
    choices: [
      { label: 'Go to meet Capricorn ready to fight. The record is yours — you\'re not negotiating its meaning.', next: 'scene-14-path-e', setPathE: 'E' },
      { label: 'Go to meet Capricorn ready to reckon. He might have something true to say.', next: 'scene-14-path-f', setPathE: 'F' }
    ]
  },

  'scene-14-path-e': {
    location: 'The apartment, West Village — continuous',
    image: 'images/scene-14.jpeg',
    text: [
      'I tell Blake we\'re going to that meeting and I\'m not giving anything up.',
      'He doesn\'t argue. He sets down his coffee and says, \'Tell me what you need from me.\'',
      '\'I need you to be there. Not to speak — just there.\'',
      '\'All right.\'',
      'I pick up the manuscript. The linen is warm from the table, from the room, from the months of hands that have held it. I think about Alden carrying this for thirty years. I think about my mother pressing her initial lightly into a chart. I think about the eight people in a room in December 1959 who decided to trust that whoever came next would know what to do with what they left behind.',
      'They trusted forward. I\'m choosing to trust myself.',
      '\'The record is mine,\' I say, aloud, into the apartment. \'Not because I want it to be. Because I was built for it.\'',
      'Blake says, \'Yes.\'',
      'I put the manuscript in my bag.',
      'We go.'
    ],
    choices: [{ label: 'Continue', next: 'scene-15' }]
  },

  'scene-14-path-f': {
    location: 'The apartment, West Village — continuous',
    image: 'images/scene-14.jpeg',
    text: [
      'I tell Blake I want to hear what Capricorn has to say before I decide anything.',
      'He looks at me. \'Even if he\'s trying to take it from you?\'',
      '\'He can\'t take what I\'ve already read. The knowledge is mine. The question of where the manuscript lives — that I can think about.\'',
      'Blake is quiet. Then: \'That\'s a more complicated position than it sounds.\'',
      '\'I know. That\'s why I want to think about it before we walk in.\'',
      'I put the manuscript on the table and sit across from it. The Compact survived for fifty years by dispersing — not by holding on. Capricorn\'s argument, when it comes, will probably be about living structure, about continuation, about the difference between a document in one person\'s keeping and a document that belongs to a practice.',
      'He won\'t be entirely wrong.',
      'I pick up the manuscript. I put it in my bag.',
      '\'I\'m ready,\' I tell Blake.',
      '\'What are you ready for?\'',
      '\'To be changed by what he says,\' I tell him, \'without losing what I already know.\'',
      'He nods once, slowly. \'Then let\'s go.\''
    ],
    choices: [{ label: 'Continue', next: 'scene-15' }]
  },

  'scene-15': {
    location: 'Private dining room, Midtown — November 21st',
    image: 'images/scene-14.jpeg',
    text: [
      'Capricorn is seventy-three, silver-haired, and occupies his chair like a man who has never once sat at the wrong table. He rises when I come in, which is a courtesy and also, I think, a signal: he intends this to be a meeting between equals.',
      'He says, \'I owe you an apology. I positioned myself where I thought I was most useful without asking whether it was useful to you.\'',
      'I sit. Blake takes the chair along the wall, outside the table. Capricorn glances at him and says, \'Blake Solano. Your grandmother was a principled woman.\'',
      'Blake says, \'Thank you.\'',
      '\'She never told you about the courier work.\'',
      '\'No.\'',
      '\'She wouldn\'t. That was her way.\'',
      'He turns back to me. \'You have the manuscript. You\'ve read the inner document. You know what it says about succession.\'',
      '\'Yes.\'',
      '\'Then you know this was never just an archive. It\'s a living appointment.\'',
      'I lean forward slightly. \'Is that why you made contact? To tell me what I already know?\'',
      'He considers. Then, for the first time, he smiles. \'No. I made contact because I want to help. And because I\'ve been waiting fifty years for the right person to arrive, and you appear to be her, and I\'m running out of time to be useful.\'',
      'The room is very quiet.'
    ],
    choices: [
      { label: '\'What do you mean, living appointment? Explain what you believe the Compact requires of me.\'', next: 'scene-15-choice-a' },
      { label: '\'You said you want to help. What does that mean, specifically?\'', next: 'scene-15-choice-b' },
      { label: '\'Running out of time — are you ill?\'', next: 'scene-15-choice-c' }
    ]
  },

  'scene-15-choice-a': {
    location: 'Private dining room, Midtown — continuous',
    image: 'images/scene-14.jpeg',
    text: [
      '\'The Compact was never meant to be a record,\' he says. \'It was meant to be a practice. Eight people dispersed into the world carrying something they\'d agreed to hold. What they agreed to hold was not a set of ideas — it was a responsibility. The responsibility to remain in correspondence with what is true about the relationship between human beings and the things that outlast them.\'',
      'He pauses. Outside, somewhere, a car horn and then silence.',
      '\'The celestial copy is the instrument of re-gathering. When someone finds it with the right to claim it, the Compact reconvenes — not physically, not in the old form. But the work begins again.\'',
      'I say, \'What is the work?\'',
      '\'Bearing witness,\' he says. \'To things that happen in the dark, that don\'t get recorded by the people who do them. The Compact was always, at its heart, a record-keeping practice. You are a writer. You found this by writing. The appointment is not accidental.\'',
      '[IF_PATH_E]',
      'I came here ready to fight. I find I don\'t need to. I need something different: I need to understand what I\'m being trusted with.',
      '[END_IF]',
      '[IF_PATH_F]',
      'I came here ready to be changed. Here it is. The shape of the thing I\'ve been circling.',
      '[END_IF]'
    ],
    choices: [{ label: 'Continue', next: 'scene-16' }]
  },

  'scene-15-choice-b': {
    location: 'Private dining room, Midtown — continuous',
    image: 'images/scene-14.jpeg',
    text: [
      '\'Specifically,\' he says, \'I can tell you who the remaining Compact lines are. Three of the original twelve are still represented — Sagittarius through Maren, Pisces through Vesper\'s family, and myself. The others dispersed beyond tracing. But three is enough to reconvene a practice, if the person holding the celestial record is willing to serve as its steward.\'',
      '\'Steward.\'',
      '\'Not keeper. Not owner. Steward. The distinction matters.\'',
      'Blake, from the wall, says quietly: \'What does a steward do that a keeper doesn\'t?\'',
      'Capricorn looks at him with something like approval. \'A keeper holds and protects. A steward holds and continues. The Compact\'s work isn\'t finished — it was paused. A steward would resume it.\'',
      'I think about the eight people in a room in 1959 who agreed to trust forward. About my mother who came to Leo and was told it wasn\'t time. About whatever brought me to Pol\'s coffee shop three months ago looking for something I didn\'t yet know the shape of.',
      '[IF_PATH_E]',
      'I\'m not here to negotiate. I\'m here to understand what I already own.',
      '[END_IF]',
      '[IF_PATH_F]',
      'The word *steward* is the right word. I can feel it settling.',
      '[END_IF]'
    ],
    choices: [{ label: 'Continue', next: 'scene-16' }]
  },

  'scene-15-choice-c': {
    location: 'Private dining room, Midtown — continuous',
    image: 'images/scene-14.jpeg',
    text: [
      'He pauses. Then: \'Yes.\'',
      'Silence.',
      '\'I have perhaps a year,\' he says. \'I\'m not asking for sympathy. I\'m explaining my urgency. The Compact has been waiting for the right person to arrive since 1959. You\'re here. I have things to give you that no one else can give you, and I have a limited amount of time in which to give them. That\'s why I made contact through channels that were not ideal. I apologize for the pressure.\'',
      'Blake says, from the wall: \'What things?\'',
      '\'Names,\' Capricorn says. \'Locations. The identity of Leo\'s successor — yes, there is one. And \' — he reaches into his breast pocket and places a small envelope on the table — \'a letter from Sagittarius, written to the person who would eventually find the record. She gave it to Leo. Leo gave it to Alden. Alden gave it to me, because he didn\'t know where you were yet.\'',
      'He slides the envelope across the table.',
      'I look at my name on the front. In handwriting from 1959. From a woman who died before I was born.',
      'I pick it up.'
    ],
    choices: [{ label: 'Continue', next: 'scene-16' }]
  },

  'scene-16': {
    location: 'Private dining room, Midtown — later',
    image: 'images/scene-14.jpeg',
    text: [
      'The meeting goes another hour.',
      'What Capricorn gives me: the names of the three surviving Compact lines. A sealed letter from Sagittarius. The identity of Leo\'s successor — a woman in her sixties in Red Hook who has been keeping what Leo left her without knowing what to do with it, waiting for someone to come. And an account of the 1959 meeting from his own memory, the only living memory that remains.',
      '\'Four people left before the end,\' he says. \'They left because they didn\'t believe the dispersal would hold. They thought the Compact would dissolve and the record would be lost.\' He pauses. \'They were almost right. It took sixty years to find its way here.\'',
      '\'But it did find its way.\'',
      '\'Yes.\'',
      'Blake drives me home. In the car he says nothing for the first ten minutes, which means he is working through something. Then he says, \'The woman in Red Hook. She\'s been waiting without knowing what she\'s waiting for.\'',
      '\'Yes.\'',
      '\'That\'s a hard way to live.\'',
      '\'Yes.\'',
      'He drives. The city moves past the windows. I hold Sagittarius\'s letter in my hands and don\'t open it yet because some things should be read in the right room.',
      'I think about what Capricorn said: *bearing witness to things that happen in the dark.* I think about my mother\'s initial, pressed lightly. I think about whether she would be glad or sorry to know I\'m here.',
      'I think she would be glad. I choose to think that.'
    ],
    choices: [
      { label: 'Open Sagittarius\'s letter now. You need to know what she said.', next: 'scene-16-choice-a' },
      { label: 'Wait until you\'re home. You want to be alone when you read it.', next: 'scene-16-choice-b' },
      { label: 'Ask Blake to be there when you open it.', next: 'scene-16-choice-c' }
    ]
  },

  'scene-16-choice-a': {
    location: 'The car — continuous',
    image: 'images/scene-14.jpeg',
    text: [
      'I open it.',
      'The letter is two pages, both sides, in the same fine slanted script as the celestial manuscript. She writes to someone she has never met, someone she can only describe by what they will have done by the time they read this. *You found the record,* she writes. *You followed the thread. You are someone who could have stopped but didn\'t.*',
      'She tells me what the Compact was, from the inside: not a society, not a secret, but a commitment. A small group of people who agreed, in a particular year, to take seriously the proposition that the careful recording of what is true constitutes a form of love. That witness is not passive. That the person who writes the thing down is not separate from the thing.',
      '*I don\'t know your name,* she writes. *But I know you were taught by loss, the way all the best witnesses are. You lost someone whose absence made the world harder to read. And then you learned to read it anyway.*',
      'My hands are steady on the letter.',
      'Blake is watching the road. He doesn\'t ask. He waits.',
      'At the bottom she has written: *The work is yours now. Do it with your whole name.*',
      'I fold the letter and put it in the notebook.',
      '\'She knew,\' I say.',
      '\'Yes,\' Blake says.'
    ],
    choices: [{ label: 'Continue', next: 'scene-17' }]
  },

  'scene-16-choice-b': {
    location: 'The apartment, West Village — later',
    image: 'images/scene-14.jpeg',
    text: [
      'I wait.',
      'Blake drops me at the corner and I walk up alone and sit at the table with the letter in front of me for five minutes before I open it. This is, I think, how she would have wanted it — not in a car, not in motion, but still, with the city outside and the light on and the weight of the apartment around me.',
      'The letter is two pages. She writes to someone she has never met but can imagine — someone who came to the record through loss, through persistence, through the particular stubbornness of people who can\'t leave a thread unpulled.',
      '*I don\'t know how long it will take you to arrive,* she writes, *but I know you\'ll arrive quietly. The people who find things like this always do. They\'ve been practicing being quiet for years.*',
      'I read the whole letter. I sit with it after.',
      'My mother was here before me, pressing her initial lightly. She arrived quietly too. She just arrived when it wasn\'t ready for her yet.',
      '*Do it with your whole name,* Sagittarius writes, at the end.',
      'I say my name aloud into the apartment. Just once. To hear what it sounds like now that I know what it belongs to.'
    ],
    choices: [{ label: 'Continue', next: 'scene-17' }]
  },

  'scene-16-choice-c': {
    location: 'The apartment, West Village — later',
    image: 'images/scene-14.jpeg',
    text: [
      'I ask Blake to come up.',
      'He doesn\'t ask why. He parks and comes up and sits across the table from me while I open the letter. I don\'t ask him to read it — just to be there. Sometimes the being-there is the whole thing.',
      'The letter is two pages. She writes about the Compact as something that lives inside people rather than outside them — a practice of attention, she calls it, the choice to look directly at the things that are hard to look at and then write them down accurately. *You are the continuation of that practice,* she writes. *Not because you were chosen — because you chose. Every step that brought you here was a choice.*',
      'When I finish I fold the letter and look up.',
      'Blake is watching me with the expression I\'ve come to know as his version of wanting to say something. I say, \'You can say it.\'',
      '\'She would have liked you,\' he says. \'Sagittarius. She would have recognized you immediately.\'',
      '\'How do you know?\'',
      '\'Because she wrote that letter for exactly the person sitting across from me.\'',
      'I put the letter in the notebook.',
      'Outside the city does what it does. We sit in the light of it for a while.'
    ],
    choices: [{ label: 'Continue', next: 'scene-17' }]
  },

  'scene-17': {
    location: 'The apartment, West Village — November 22nd, the night before',
    image: 'images/scene-14.jpeg',
    text: [
      'The night before the gathering I can\'t sleep.',
      'This isn\'t unusual — I often can\'t sleep when something large is about to happen, and what\'s happening tomorrow is the largest thing I\'ve been part of. Maren has arranged the space: her library, the Gramercy Park townhouse, midnight. Capricorn will be there. Vesper\'s daughter, traveling from Philadelphia, who is the current Pisces line. The woman in Red Hook, who came when I called and said, simply, \'I\'ve been waiting.\' And Pol and Cas, who are not Compact members but who are, by now, part of whatever this is.',
      'And Blake, who will stand along the wall again, which is where he always is — present without being in the center, holding the room steady.',
      'I sit at my desk with the notebooks. All of them — the ones I\'ve filled over the past three months, the ones my mother left that I\'ve been reading and re-reading, and the one that arrived with Capricorn\'s envelope: a small blank book with a note in his handwriting that says only, *for what comes next.*',
      'I think about what it means to be a steward. Not keeper. Steward.',
      'I think about my mother pressing her initial lightly, as though she wasn\'t sure she belonged.',
      'I belong. I am sure of this now.',
      'I open the blank notebook.',
      'I write the date.',
      'I write: *This is what I know.*',
      'And then I write, for the first time, all of it — everything I\'ve learned and seen and understood over these months — in the present tense, in my own hand, in my whole name.',
      'It takes until almost four in the morning.',
      'When I\'m done I sit with what I\'ve written and I feel, for the first time in a very long time, completely located. I know exactly where I am.',
      'I close the notebook.',
      'Tomorrow.'
    ],
    choices: [{ label: 'Continue', next: 'scene-18' }]
  },

  'scene-18': {
    location: 'Maren\'s library, Gramercy Park — November 23rd, midnight',
    image: 'images/scene-14.jpeg',
    text: [
      'Five of us around the reading table. Blake against the wall. The celestial manuscript in the center, still in its linen cloth.',
      'Maren has made tea that no one drinks. The windows are dark. The park outside is still.',
      'Capricorn speaks first: a short acknowledgment of what the gathering is and what it isn\'t. It is not a reconstitution of the original Compact. It is a recognition that the practice continues. He says the names of the original twelve — all of them, including the four who left early — and we sit with the names in the air.',
      'Then Vesper\'s daughter reads a passage from the Pisces records her grandmother kept. Then the woman from Red Hook — I will call her by the name Leo gave her: Aquila, which is not a Compact constellation but which Leo chose for her because, as she says now, he told her she flew alone.',
      'Then it is my turn.',
      'I have the Sagittarius letter. I have the new notebook. I have three months of finding in my hands and in my chest.',
      'I look at Blake against the wall. He gives me the smallest nod.',
      'I speak.'
    ],
    choices: [
      { label: 'Speak about what the Compact means. About what bearing witness requires.', next: 'scene-18-choice-a' },
      { label: 'Speak about your mother. About what she almost found and what it cost her.', next: 'scene-18-choice-b' },
      { label: 'Read from the inner document. Let the original eight speak through what they left.', next: 'scene-18-choice-c' }
    ]
  },

  'scene-18-choice-a': {
    location: 'Maren\'s library, Gramercy Park — continuous',
    image: 'images/scene-14.jpeg',
    text: [
      'I speak about witness.',
      'About what it means to make a record — not for the record\'s sake, not for posterity, but because the act of writing something down changes your relationship to it. Because you cannot write accurately about something you are running from. Because witness requires stillness and the willingness to be changed.',
      'I say: the Compact was not founded on a belief that the stars have meaning. It was founded on the belief that people who look at the same sky and describe what they see will eventually, if they are honest, describe each other.',
      'The room is very quiet.',
      '\'My mother looked at this sky,\' I say. \'She found part of the thread and was told to put it down. She put it down and she never found her way back to it.\' I pause. \'I am picking it up. Not on her behalf — on my own. But I want her name said in this room, by this group, on this night. Because she almost arrived.\'',
      'I say her name.',
      'The room holds it.'
    ],
    choices: [{ label: 'Continue', next: 'scene-18-invocation' }]
  },

  'scene-18-choice-b': {
    location: 'Maren\'s library, Gramercy Park — continuous',
    image: 'images/scene-14.jpeg',
    text: [
      'I speak about my mother.',
      'I have never told this story to a room before. I have told pieces of it — to Blake, in fragments; to Maren, obliquely; to myself, in the notebooks I\'ve kept since I was seventeen. But I\'ve never told the whole shape of it: who she was, what she was looking for, what it cost her not to find it.',
      'I tell it now.',
      'She was a woman who asked the right questions, as Arie Van der Zon said. She was a woman who pressed her initial into a star chart lightly because she didn\'t know yet that she had a right to press hard. She was a woman who came to a door in 1987 and was told: *not yet.* And she accepted that, and she went home, and she spent the rest of her life in the space between almost-knowing and not-knowing, which is a very hard space to live in.',
      '\'I am here because she taught me to follow the thread,\' I say. \'I am here because she taught me that the following matters even if you don\'t arrive. But I arrived. And I am saying her name in this room so that the record knows she was part of how I found it.\'',
      'I say her name.',
      'The room holds it.'
    ],
    choices: [{ label: 'Continue', next: 'scene-18-invocation' }]
  },

  'scene-18-choice-c': {
    location: 'Maren\'s library, Gramercy Park — continuous',
    image: 'images/scene-14.jpeg',
    text: [
      'I open the inner document.',
      'I\'ve read it four times. I know every line. But reading it aloud is different — it puts it in the air between us, makes it a thing the room can hold.',
      'The eight who stayed in December 1959 wrote this: *We agree to hold what we have learned not as property but as responsibility. We agree that the record we leave will be tended by whoever finds it with the clearest right, and that the clearest right belongs to the person who arrived through attention rather than inheritance. We agree that the Compact is not a structure but a practice, and that the practice will outlast any gathering of us. We ask whoever comes after to do one thing: bear witness accurately. That is all. That has always been all.*',
      'I close the document.',
      'The room is very still.',
      'Then Capricorn says, in a voice that is lower than his usual voice: \'That is what we came to do.\'',
      'And we begin.'
    ],
    choices: [{ label: 'Continue', next: 'scene-18-invocation' }]
  },

  'scene-18-invocation': {
    location: 'Maren\'s library, Gramercy Park — later',
    image: 'images/scene-14.jpeg',
    text: [
      'The gathering takes three hours.',
      'We do not perform a ceremony. We do not take oaths. What we do is this: we take turns speaking about what we know, what we have been carrying, what we are placing into the shared record. Each person speaks and each person is heard, and Maren writes it all down in a long hand that will become the first document of the new practice.',
      'Aquila, the woman from Red Hook, opens a canvas bag and places six objects on the table. Small things: a watch, a letter, a key, a folded photograph, a child\'s drawing of a star, a button that she says Leo gave her and told her to keep until she knew what it was for. She doesn\'t know yet. She places them in the record anyway.',
      'Capricorn speaks last among the others. He speaks about what it felt like to position himself for fifty years at the edge of something he couldn\'t bring himself to fully rejoin. \'I was Capricorn,\' he says. \'I positioned myself. It was the most useful thing I knew how to do. I hope it was enough.\'',
      'The woman who is now Pisces-line says: \'It was.\'',
      'And then it is almost three in the morning and the tea is cold and the city outside is as quiet as it gets, and I place the celestial manuscript in the center of the table and I say: \'This belongs to the practice. Not to me — to the practice. I will be its steward. That\'s different.\'',
      'Capricorn nods once. His eyes are bright.',
      'Blake, from the wall, says nothing. But when I look at him he is looking back at me the way he has been looking at me for months, and I understand now what that look has always meant.',
      'We walk out into Gramercy Park in the cold at three a.m., and the sky above the city — barely visible, always barely visible — holds the stars in their old arrangements.',
      'I look up.',
      'I find mine.'
    ],
    choices: [{ label: 'Continue', next: '__ending__' }]
  },

  'ending-a': {
    location: 'Epilogue',
    image: 'images/scene-14.jpeg',
    text: [
      'The new practice takes shape slowly, the way careful things do.',
      'In January Maren hosts a second gathering: the same people, a new document begun. Aquila brings the objects Leo left her; we catalogue them together and begin to understand what they are — not relics, but evidence. A history made of small material things.',
      'In February I call Vesper, who is in her eighties and has a voice like someone who has been waiting to speak. She tells me about my mother. She tells me things I didn\'t know and things I suspected and one thing that makes me sit down on the kitchen floor and stay there for a while. Then she says, \'Your mother would be very glad. She was not a woman who needed to be there herself. She needed to know someone would arrive.\'',
      'I think that\'s true. I think she would be glad.',
      'Blake, in March, says: \'I want to tell you something I\'ve been working up to.\'',
      'I say: \'I know.\'',
      'He says: \'Do you want to hear it anyway?\'',
      'I say yes. And he tells me, and it is what I thought it was, and I tell him what I have been working up to in return, and the kitchen is warm, and outside it is beginning to be spring.',
      'The notebook I started the night before the gathering now has forty pages in it. The practice is: write what you know. Write it accurately. Write it in your whole name.',
      'I am doing that.',
      'The stars are in their old arrangements. They don\'t require anything from us except attention.',
      'I am paying attention.',
      'That is, finally, enough.'
    ],
    choices: []
  },

  'ending-b': {
    location: 'Epilogue',
    image: 'images/scene-14.jpeg',
    text: [
      'The practice begins quietly, the way I think it was always meant to.',
      'There are three of us in the first months who meet regularly: myself, Aquila from Red Hook, and the woman who is now Pisces-line and who has, I learn, been keeping a record of her own without knowing it was the Compact\'s tradition — she thought she was just someone who couldn\'t stop writing things down. I tell her that\'s exactly what the Compact is.',
      'Maren writes up the November gathering in her careful hand and binds it. Capricorn, by January, is in the hospital; I visit twice, and both times he says the same thing: \'You\'re doing it right.\' I take his word for it. He dies in February with his affairs in exceptional order.',
      'I go through phases with the celestial manuscript — phases of feeling its weight and phases of feeling its lightness. Some mornings it is simply a bound document in linen cloth. Some mornings it is the thing my mother almost found. I try to let it be both on the same morning.',
      'Blake says: \'How are you?\'',
      'I say: \'Becoming.\'',
      'He says: \'I know. I can see it.\'',
      'The notebooks accumulate. The practice continues. Outside the window the sky does what the sky does: holds the stars in arrangements that people have been naming and renaming for ten thousand years, none of the names permanent, all of them meaning: *I was here, I looked up, I tried to say what I saw.*',
      'I am trying.',
      'Some days I almost get it right.'
    ],
    choices: []
  },

  'ending-c': {
    location: 'Epilogue',
    image: 'images/scene-14.jpeg',
    text: [
      'What I know now that I didn\'t know in September:',
      'That some things take sixty years to find the right hands and that this is not a failure.',
      'That bearing witness is not the same as suffering. That you can look directly at the hard things and write them accurately without being destroyed by them, if you have learned — somewhere, from someone, through loss and through practice — how to hold the pen steadily.',
      'That my mother was here before me and that she pressed lightly because she hadn\'t yet learned that she had a right to press hard. I have learned that. I press hard. I am still here.',
      'That the Compact\'s work is not finished. That it may never be finished. That this is the nature of a practice: it ends only when no one is left to continue it, and someone is always left.',
      'The gathering in Gramercy Park was not an ending. It was a beginning of a different size.',
      'I have the blank notebook Capricorn gave me. I have the celestial manuscript in its linen cloth. I have three months of investigation in my notebooks and a name in a star chart pressed lightly by a woman who came before me.',
      'I have Blake, who comes by on Tuesdays and sometimes Thursdays and who fixed my button that November afternoon and has not, since then, been more than a phone call away.',
      'The sky above the city holds twelve constellations I now know by their names and their stories and their brightest stars.',
      'I know which one is mine.',
      'I look up at it sometimes, in the particular way that is not prayer and not science but the third thing — witness — and I write down what I see.',
      'I press hard.',
      'I am here.'
    ],
    choices: []
  },


};
