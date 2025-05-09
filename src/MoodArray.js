const movieMood = {
    "Music": ["🎶","🎚️","🎼","🎤","📻","🎵","🎧","🎙️","🎛️","💃","🕺"],
    "Romance": ["💏", "❤️", "💞", "😍",'💌','💜','💘','💞','🤎','💓','🩵','💔','💟','💕','🩷','💖','🤍','💙','💝','❤️‍🩹','💗','❤️‍🔥','💚','💛','❤️','🩶','❣️','🧡'],
    "Comedy": ["😁", "😂", "🤣","🙂",'😉','😄','😊','🫠','😇','😃','😅','😁','😀','😆','😂','🙃','🤣','🦥','👯'],
    // "Romance": ["💏", "❤️", "💞", "😍",'💌','💜','💘','💞','🤎','💓','🩵','💔','💟','💕','🩷','💖','🤍','💙','💝','❤️‍🩹','💗','❤️‍🔥','💚','💛','❤️','🩶','❣️','🧡','💑','🧑🏻‍❤️‍🧑🏼','👩‍❤️‍👨','👩‍❤️‍💋‍👩','👨‍❤️‍👨'],
    //  "Comedy": ["😁", "😂", "🤣",'😉','😄','🫠','😇','😃','😅','😁','😀','😆','😂','🙃','🤣',
    //  '🦥','👯'],
    //"Biography": ["📝", "📜",'📖','📃','📕','📙','📘','🏷️','🔖','📒','📓','📔','📑','📗','📚','📄'],
    "Family": ["👪","🐈","🐕","🐕‍🦺","🦮","🐩",'👭🏼','👩🏻‍🤝‍👩🏼','👩‍❤️‍💋‍👩','👨🏽‍🤝‍👨🏾','👩‍❤️‍👨','👩‍👩‍👦','👩🏻‍🤝‍👨🏼','👫🏾','👭🏽','👨🏾‍🤝‍👨🏿','👩🏽‍🤝‍👨🏾','👩🏼‍🤝‍👨🏽','👭','👩‍👦','💑','🧑🏻‍❤️‍🧑🏼','👬','👩🏼‍🤝‍👩🏽','👫🏽','👬🏼',
  '👩🏽‍🤝‍👩🏾','👨‍❤️‍👨'],
    "War": ["💣", "🎖️",'🏴‍☠️','🎌','🏴','🏳️‍⚧️','🏹','🗡️','⚔️','🪝','🛡️'],
    "News": ["📰",'🧐','🗞️','🤓','🕴🏼','🕴️','🕴🏾','🕴🏽','🕴🏻','🕴🏿'],
    "Reality": ["💁", "📺","🥩",'📷','📸',"💆",
      "💇","🚶","🧍","🧎","🧑‍🦯","🧑‍🦼", "🏃",'👩‍🦯','🧑‍🦽','👨‍🦽','👩‍🦼','👩‍🦽','👨‍🦼'],
    "Talk Show": ["🗣️",'🏳️‍🌈','🚩','🏁','🏳️'],
    "Adventure": ["🚵", "🏕️", "🏜️", "🌍", "🌅", "🥾", "🏄", "🌴", "🌄","🏂",'⛹🏼‍♂️',
  "🏌🏽","🏌🏾‍♀️","🏋🏾"],
    // "Family": ["👪","🐈","🐕","🐕‍🦺","🦮","🐩",'👭🏼','👩🏻‍🤝‍👩🏼',,'👨🏽‍🤝‍👨🏾',,'👩‍👩‍👦','👩🏻‍🤝‍👨🏼','👫🏾','👭🏽','👨🏾‍🤝‍👨🏿','👩🏽‍🤝‍👨🏾','👩🏼‍🤝‍👨🏽','👭','👩‍👦',,'👬','👩🏼‍🤝‍👩🏽','👫🏽','👬🏼','👩🏽‍🤝‍👩🏾'],
    // "War": ["💣", "🎖️",'🏴‍☠️','🎌','🏳️','🏴','🏹','🗡️','⚔️','🪝','🛡️','🌍'],
//     "News": ["📰",'📄',
//   "📃",'🧐','🗞️','🤓','🕴🏼','🕴️','🕴🏾','🕴🏽','🕴🏻','🕴🏿'],
    // "Reality": ["💁", "📺","🥩",'📸',"💆",
    //   "💇","🚶","🧍","🧎","🧑‍🦯","🧑‍🦼", "🏃",'👩‍🦯','🧑‍🦽','👨‍🦽','👩‍🦼','👩‍🦽','👨‍🦼','🧖','🩹','💊','🩼',,'🏳️‍⚧️',,'🏳️‍🌈'],
    //"Talk Show": []],
    // "Adventure": ['🏕️',' 🏞️','🏝️','🗻','🏔️','⛰️',,'🏖️','🌋','🗾',
    //   '🌎','🗺️', '🌐','🌏','🧭','🌃','⛺','⛲','🎢','🎪','🌄','🏙️','🎡','🌇','♨️','🌁','🌉','🌆','🎠','💈', '🧗'],
    "Fantasy": ["🧙", "🏰", "🐉", "🧜", "🧚", "🧝","👼","🎅","🧞","🦹","🧌","🧛","🤶","🦸","🧟","🧑‍🎄",'🫏',"🦄"],
    "Animation": ["👀", "🐭","🐵","🐹","🐶","🦁","🐺",'🐯','🐻','🦊','🦫','🦡','🐑','🦏','🦘','🐁','🐫','🦦','🦧','🐽','🐐','🦨','🐅','🦫','🦍','🐪','🐀','🦙','🐇','🐘','🐿️','🦒','🦣','🦔','🐏','🦛','🐖', "🐱","🐮",'🐼','🐨','🖍️','🐰'],
    "Drama": ["🎭", "😢", "💔",'🧑‍🤝‍🧑','👨‍👩‍👦','👩‍❤️‍💋‍👨','👩🏾‍🤝‍👨🏿','👨🏼‍🤝‍👨🏽','💏','👩🏽‍🤝','‍👩🏾','👨‍❤️‍💋‍👨','👨🏻‍🤝‍👨🏼','👬🏾','👪','👬🏿','👭🏾','👬🏽','👭🏿','👩🏾‍🤝‍👩🏿','👫','👨‍👦','👫🏿','🧑🏻‍❤️‍💋‍🧑🏼','👩‍❤️‍👩','👫🏼'],
    // "Drama": ["🎭", "💔",'😲','😯','🫤','🙁','🥱','😓','😥','🥺','🥹','😩','😫','😱','😖','😣','😨','😢','😕','😞','😳','😧','😮','😦','😭','☹️','😰','😟'],
    //"Film Noir": ["🔍", "🚬", "🖤", "🌃"],
    "Horror": ["😱","🦇",'☠️','😤','😡','😠',
      '🤬','😈','👿','💀','🧿','🪬','⛓️'],
    "Action": ["🚁", "🏍️", "🔫",'🪂','🚠','💺','🛬','🚡','🛫','🛸','🚀','🛩️','✈️','🚟','🛰️','🚁','😎',
      '🤬','😈','👿','💀','🧿','🪬','⛓️','👻','🤡', '👹','💩','👺'],
    // "Action": ["🚁", "🏍️",'🪂','🚠','💺','🛬','🚡','🛫','🛸','🚀','🛩️','✈️','🚟','🛰️','🚁'
    //   ],
  //"Game Show":["🎰", "🤔",","🥉","🤹","🏆","🏅","🥇","🥈"],
    "History": ["👴", "🧐", "🎞️", "📽️", "🕰️","📼",'🪓','🫅',
      "👵"],
    "Western": ["🤠","🐴","🦌","🐄", '🫎','🐂','🐎'],
    //"Musical": ["💃"],
    // "History": ["👴",'👩‍🦳', '🧑‍🦳','👵',"🧐", "🕰️",'🫅','🔍','📒','📜','🖋️',"🗝️",'⚒️',"🧮",'🗿'],
      
    // "Western": ["🤠","🐴","🦌","🐄", '🫎','🐂','🐎','🦅','🏜️','🏜️',"🥾"],
  
    //"Sport": ["🤺", "🏇", "🏂", "🏋️", "🚴", "⛸️", "⛷️", "🏊", "🤾", "🧗","⛹🏾‍♂","🤼"],
    "Thriller": ["🩸", "💀",'🪪','🗿','🚬','⚱️','🧿','⚰️','🪧','🪬','🪦',"🥷"],
    // "Thriller": ["🩸", "💀",'🪪','🗿','🚬','⚱️','⚰️','🪧','🪦',"🥷",'💉',,'🏁','🚩'],
    // "Short": ["📏",'🦡','🐑','🦏','🦘','🐁','🐫','🦦','🦧','🐽','🐐',
    //    '🦨','🐅','🦫','🦍','🐪','🐀','🦙','🐇','🐘','🐿️','🦒','🦣','🦔','🐏','🦛','🐖'],
    "Crime": ["👮", "🚨", "🚓","💴",'💰',' 💵', '💷','💹','💳','🪙','🧾','💸','💶','⚗️','🧪','🔭','🧫','📡','🧬','🔬','⚖️'],
    "Science Fiction": ["🤓", "🧬", "🔭", "🧪","🕥","⌚","🕡","🕑","🦾", "🦿"],
    "Mystery": ["🕵️", "👤", "💼", "🧭", "🗝️", "🧩","🐾",
      '🛠️','🔧','🪚','🦯','⚙️','⚒️','🪛','🔗','⛏️','🪃','🧰','🧲','🗜️','🪜','🔨','🔩'],
    "Documentary": ["📹", "🎞️", "📑",'📷','📼','✒️','📝','✏️',
      '🖌️','🖋️','🖊️'],
    // "Science Fiction": ["🤓", "🧬", "🔭", "🧪","🕥","⌚","🕡","🕑","🦾", "🦿",'🤖','👽','👾', 
    //   "📡"],
    // "Mystery": ["🕵️", "👤", "💼", "🧩","🐾",
    //   '🛠️','🔧','🪚','🦯','⚙️','🪛','🔗','⛏️','🪃','🧰','🧲','🗜️','🪜','🔨','🔩',"🔎",'🩻','🩺',],
    // "Documentary": ["📹", "🎞️", "📑",'📷','📼',"🎬",'📽️','🎥','✒️','📝','✏️','🖌️','🖊️'],
      "extra":[]
  };
  
  
  
  // ,'🐛','🪲', '🪻','🌼', '🪰', '🌺','🐌','🌷','🦠','🦋','🪱','🕷','🌻','🌹','🏵','🐞','💮','🪳','🦓',
  //     '🦟', '🐝'
  
  
  
  export default movieMood;