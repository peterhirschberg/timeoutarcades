<template>
  <article class="content-page">
    <h1 class="heading">GUESTBOOK</h1><br>

    <v-btn color="primary" @click="$router.push('SignGuestbook').catch(err => {})">SIGN THE GUESTBOOK</v-btn><br><br>

    <!-- <v-btn color="primary" @click="foo">IMPORT</v-btn><br><br> -->

    <div v-for="(entry, index) in entries" :key="index">
      <hr>
      <div class="message"><strong>{{entry.message}}</strong></div>
      <div>{{entry.name}}</div>
      <div>{{entry.location}}</div>
      <div>- {{getDate(entry.timestamp)}}</div>
    </div>
  </article>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Guestbook',
  data() {
    return {
      entries: []
    }
  },
  async mounted() {
    try {
      const response = await axios.get('https://ol6wo1dv47.execute-api.us-east-2.amazonaws.com/prod/guestbook/list',  { crossDomain: true })
      this.entries = response.data.sort((a,b) => {
        if (a.timestamp > b.timestamp) return -1
        else if (a.timestamp < b.timestamp) return 1
        else return 0
      })
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    getDate(timestamp) {
      var a = new Date(timestamp * 1);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      if (hour === 0 && min === 0 && sec === 0) {
        return month + ' ' + date + ', ' + year
      }
      return month + ' ' + date + ', ' + year + ' ' + hour + ':' + min + ':' + sec ;
    },
//     async foo() {
//       const entries = [
//         {
//           name: 'chris carlson',
//           location: 'melbourne, australia',
//           time: 'Thursday, February 25, 2010',
//           message: 'hi great set up have you got killer shark yes a gun game but its for sharks'
//         },
//         {
//           name: 'Jango Davis',
//           location: 'Albany, NY USA',
//           time: 'Wednesday, February 24, 2010',
//           message: 'The original Time-Out Tunnel in Northway Mall in Colonie was one of the very first stores to rent space at the mall when it opened in 1970 and remained there right up until the entire mall was closed and demolished in 1999. Its rare that the same store would be in oepration at a mall throughout the entire three decades of its life! Thought your readers might appriecate knowing that!'
//         },
//         {
//           name: 'chris armes',
//           location: 'San Diego, CA USA',
//           time: 'Friday, February 12, 2010',
//           message: 'TIME OUT!@ yes! Frontier Mall, Cheyenne WYO. So many great memories! Jungle King! Dig Dug! Zaxxon! I became a man there. Thank u for honoring the memory of Time out!!!'
//         },
//         {
//           name: 'Steve Pleate',
//           location: 'Clifton Heights, PA USA',
//           time: 'Sunday, January 24, 2010',
//           message: 'Always went to the ALADDINS CASTLE in the Granit Run mall in Media, PA... I also went to the king of prussia SPACE PORT in king of prussia PA... Great times in the 80,s..Now i own my own arcade in the basement of my home... Will never forget the days!! I still have a PUTT-PUTT golf and games right round the corner of me ....'
//         },
//         {
//           name: 'Andy',
//           location: 'Raleigh, NC USA',
//           time: 'Friday, July 31, 2009',
//           message: 'Thanks for the site. Great memories of Time Out in Springfield Mall. Spent countless hours there from \'77 to \'83 (same age as you, Peter). Got hooked on Asteroids, Tail Gunner, Berserk, Galaga, etc. This was a down period in my life but TO made for a nice escape. PC and home games are great, but my kids will never understand the TO experience. You felt like you were plowing new territory along with a lot of other people just like you - the atmosphere was unique.'
//         },
//         {
//           name: 'James Bruso',
//           location: 'Corbin, KY USA',
//           time: 'Monday, April 27, 2009',
//           message: 'I grew up at the first Time Out at Northway Mall in Colonie. I was two years old in 1970; from the beginning (literally), I remember everything: bumper cars, Pong, Dragon\'s Lair, and weekly high scores. The blue uniforms, metal badges, and belt-mounted coin changers remain vivid in my mind. Even the staff left a firm imprint on my memories. The managers (Scott, Charlie), employees (Mike, Christy Kelly), technicians (Wayne, Charles) and the district manager (Alex Yates) were all good friends of mine. It was located near a McDonald\'s and two anchor stores: Corvette\'s and All-Marts. This eventually became a Montgomery Ward. Some people played in the arcade, but I LIVED it. Because of Time Out, I now own a chain of video game stores in southeastern Kentucky. If anyone recognizes any of these names and places or is interested in the extensive history of Time Out, please feel free to contact me via email at gamingjim@aol.com. Thanks for everything, but especially the fond memories.'
//         },
//         {
//           name: 'ABR',
//           location: 'Springfield, VA USA',
//           time: 'Wednesday, April 08, 2009',
//           message: "I actually contacted you a while back and priased your site. I wanted to let you know that the remaining Springfield Mall Time-Out WILL be closing this Spring (if it hasn't already) due to [much needed] mall renovations."
//         },
//         {
//           name: 'Scott Pflieger',
//           location: 'Cedarburg, WI USA',
//           time: 'Thursday, April 02, 2009',
//           message: 'I love the site. I was going through some old things and found a box of old Time Out tickets. If I only would have used the tickets back then. I wish there was one in my area. I spent a lot of time in the one in Northridge mall in Milwaukee WI.'
//         },
//         {
//           name: 'Scott Woodard',
//           location: 'Los Angeles, CA USA',
//           time: 'Tuesday, March 17, 2009',
//           message: "Amazing site! I spent so much time and money in the Time Out located in the Greece Town Mall in Rochester, NY (well, Greece, NY, to be precise). That photo gallery really brought back a lot of fond memories and the High Score tickets in the download section are amazing! I know I had a few of those posted on various machines!!! Thanks for the site and the wonderful memories."
//         },
//         {
//           name: 'Marc',
//           location: 'Manassas, VA USA',
//           time: 'Tuesday, February 17, 2009',
//           message: "Fond memmories of Time Out - Exton Mall, PA, class of 89 :)"
//         },
//         {
//           name: 'John Dondzila',
//           location: 'Brick, NJ USA',
//           time: 'Wednesday, January 28, 2009',
//           message: "I worked for Spaceport back around 1989. I was in several locations including Quakerbridge Mall(NJ), Burlington Mall(NJ), Neshaminy Mall(PA), Oxford Valley Mall (PA) plus a couple others that don't come to mind. I spent most of my time in Oxford Valley Mall which eventually became a Time Out after Edison Brothers bought Spaceport but this happened after I left the company. Lots of stories to be told including a rash of robberies. The Oxford Valley location was hit about a month after I left. The GM and his asst. were duct taped and locked in the rest room (so I heard, never confirmed this 100%). I always wondered if they caught the robber but everyone I knew hated the Spaceport mgmt. and had either been fired or quit for better jobs. I also worked for Fun 'n Games back in the early 80's. Anyway, fantastic site ! The pictures bring back some great memories. JD"
//         },
//         {
//           name: 'Don',
//           location: 'USA',
//           time: 'Monday, January 12, 2009',
//           message: "I don't know if you keep track of the locations (or if anyone is interested), but under the Vintage Photos section the photo named '24815659_7b0a1f9a06_o.jpg' is the Time-Out in Golden Ring Mall in the early or mid 80's. There was a Farrell's ice cream store next door to it on the left (which you can see the edge of the lights on the sign). It was remodeled in the late 80's or early 90's and recoined Sega's (or Namco's?) Time-Out, which you have photos of under the TIME-OUT AT GOLDEN RING MALL section. It's a shame they remodeled it because it was way nicer before the remodel... They widened the entrance which I felt made it too open and the Farrell's next door had closed and the store that replaced it built a big facade on the front of the store. In the late 90's Golden Ring became a ghost mall and it was eventually demolished."
//         },
//         {
//           name: 'Dan Malone',
//           location: 'Los Angeles, CA USA',
//           time: 'Tuesday, December 30, 2008',
//           message: "So many fond memories of the Sega Time-Out in the Anaheim Plaza (Anaheim CA, not too far from Disneyland.) I don't recall the word 'Tunnel', perhaps that was an east coast thing? Or maybe my memory just sucks. =P Pretty sure my first visit would have been in 1976, because it was my friend's mother took us, and I know they moved away months before Star Wars came out, which was May 1977. After that first visit, I made damn sure to tag along with my mom whenever she went to that mall. My one biggest Time-Out memory was the first time I saw Space Invaders. It was a big deal, I remember being very weirded out that so many people were standing around just to watch someone else play it, with no intention of playing it themselves. Good times!"
//         },
//         {
//           name: 'Andy Schindler',
//           location: 'Clearfield, UT USA',
//           time: 'Sunday, October 05, 2008',
//           message: "I grew up in Springfield, Virginia. 70's & 80's. As a kid, went to Time Out & Time Out 2 in the Springfield Mall. I remember waiting in line for hours to play pacman..!! My favorites were Asteroids, Galaga, Pacman, & pinball. I remember the amazement when Dragons Lair came to Time Out.... that game seemed so ahead of its time. I dont think any game was a bigger hit than pacman when it came out though. There'd always be some kid who played for what seemed an eternity on one quarter... lol. Good friend of mine from then & now, sent me the link to this site... thanks Brad..! Man what a cool trip down memory lane. There was nothin like losing yourself & a pocketfull of quarters in Time Out back then... well, other than a Caramel pretzel from Hot Sams if you had any money left. Cool site man"
//         },
//         {
//           name: 'Randall Christie',
//           location: 'Baltimore, MD USA',
//           time: 'Friday, September 05, 2008',
//           message: "Very cool site here for sure. My TimeOut memories come from the TimeOut arcade in GoldenRingMall just north of Baltimore. That mall also had like 15 movie theaters in it, so that was the place to go to have fun. The 1st few games I ever beat in an arcade was @ that TimeOut."
//         },
//         {
//           name: 'Richard Barton',
//           location: 'Houston, Tx USA',
//           time: 'Thursday, September 04, 2008',
//           message: "Wow dude, that is awesome. I worked for Time Out and ended up as a district manager in the Houston area before we were sold to Namco. I loved those days, I still run into Time Out folks all the time, bottom line we miss those days. Eventhough I have an awesome job as Director of Operations for the arcade company I am with I would love to go back to the time out days. I love your site and thanks for the memories."
//         },
//         {
//           name: 'Tom',
//           location: 'Industry, West Covina, CA USA',
//           time: 'Wednesday, August 06, 2008',
//           message: "Thank you for refreshing my memories of the late 70s & 80s and my time at the Time-Out Arcades in the Puente Hills Mall and West Covina Fashion Plaza."
//         },
//         {
//           name: 'Jeffrey Lyons',
//           location: 'Toledo, OH USA',
//           time: 'Friday, June 27, 2008',
//           message: "I worked for Time-Out in the early 80's in Chatt. TN. My Regional Mgr. was Mike Johnson. Initially I had a contract to repair games, 1st in Chattanooga, at The Eastgate Mall, then, additionally, The Walnut Square Mall in Dalton, GA. Eventually, I took over as store Mgr at the Chatt location. How I would love to relive those days !!! I still feel indebted to those who allowed me to serve them, what a fantastic time it was !! By the way, I have a 'new-in-the-box' RCA home video game system, which pre-dates Atari. Complete with multiple game cartrides, etc. Any takers or suggestions ??"
//         },
//         {
//           name: 'Jay',
//           location: 'Tampa, FL USA',
//           time: 'Friday, June 20, 2008',
//           message: "WOW...I can't think of anything to say that has not been said already by my fellow gamers. You photos of Springfield Mall bring back a TON of memories! I'm a grad from Lee High. Class of 82! For those of you who don't know the area, Lee is right across the street from the Springfield Mall. Countless hours of classes missed...spent in the Timeout arcades. Gorgon & Black Knight pinball machines. Lunar Lander, Spy Hunter, Qix, Defender, Robotron, Space Invaders...I could go on forever. Peter, Thank you SO much for making me smile. God Bless."
//         },
//         {
//           name: 'Todd Rogers',
//           location: 'Brooksville, Fl USA',
//           time: 'Monday, May 26, 2008',
//           message: 'I have been to so many arcades through the years too many to mention, and it is a shame to see that most of them are no more. But through here I can relive my past memories as they were years ago, when I was there for real in the 80s. This really gives the new generation of gamers a chance to see what it was like back then to play when gaming was at its highest point. Thank you for giving us the chance to smile again. -Todd The King of Video Games Rogers'
//         },
//         {
//           name: 'Ben Keezer',
//           location: 'Ravena, NY USA',
//           time: 'Thursday, May 15, 2008',
//           message: 'Love the site. Brings back lots of memories. I grew up in Delmar, NY just outside of Albany. I used to ride the bus with my friend Dave for over an hour to get to Northway Mall to play games at Time Out. It was across from McDonald\'s and next to Woolworth\'s. The mall is gone now and replaced by a big box mall. There is an arcade at Crossgates Mall but it\'s not nearly as cool!'
//         },
//         {
//           name: 'John M',
//           location: 'USA',
//           time: 'Saturday, May 03, 2008',
//           message: "I remember TimeOut in the Smithaven Mall in Lake Grove N.Y. Back in the late 1970's I remember the extremely long waiting line practicly going out the door to play Space Invaders the arcade game. Very popular place to go to, great times, great games and they had the classics."
//         },
//         {
//           name: 'John M',
//           location: 'USA',
//           time: 'Sunday, April 27, 2008',
//           message: "Your site just made me cry with happiness, as it brought about so many fond memories. I remember the Time Out arcade at the Smithaven Mall in Lake Grove (L.I) New York. (Nearby Sears, and you could take a shortcut through McCorry's to get there quicker) They had some of the collest games I can remember. They used to have a coupon to cut out of the newspaper that entitled you to a free game at Time out. My sister and I fought over it alot. They used to have special deals like Good Grades Earned Free Games. Bring in your report card. and depending on what your grades were, you got free game tokens and tickets. Then they had the summer fun club, where it was free to join, but only valid for the summer. For each day of the summer you were granted only one free token, and it was marked on the card. Problem was that we didn't go to the mall that much, so at times I even forgot to bring my card. Although my bad times was when I went there in excitement when my mom broght me to the mall. I went straight to the arcade but didn't realize that I didn't have any money to play the games untill I got there. Money was tight for me as a kid back then, and I guess my mom couldn't find a good punishment for me after I fought with my sister, since I didn't go anywhere of did anything. So when we got to the mall she told me 'I'm not giving you any money, or I don't have any extra money to give you.' I also remember getting bullied at this arcade and I did tell the arcade owner about it and the kids that bullied me were playing Defender, taken away from the machine, and then escorted out. It was also a common meeting place when my mom and my sister finished their shopping. Althogh if my mom told me to meet her by timeout by 7:45 p.m., they didn't come back until close to 8:30 p.m. and I just sat down on the bench waiting and waiting for them. After I asked her why she was so late, she simply told me that there was very long lines at the cash register. Yeah Right. I sadly say that my final memories of Timeout at this mall was back in the 1990's when they moved it, and suddenly one day, the place was empty and I just starred into the room from the security gate or the window just in disbelief that it's all gone. I start reminising all the good times I had at Time out, and now it's all over. I have to admit that when they had Dragon's Lair, it was a big hit at 50 cents per play. The crowd in front of the machine was so big, that the arcade owners had installed a color tv on top of the machine, so everyone could watch the action. Back then I had suggested that they should hook up a VCR to that tv and for a few bucks, you could have your gameplay videotaped and then you could watch it at home as a momentum of the game. Natually they told me they can't becuase of copyright issues. But hey with the tv ontop of the game, the idea seemed great to me at the time."
//         },
//         {
//           name: 'multifix',
//           location: 'elvisbirthplace, MS USA',
//           time: 'Thursday, March 20, 2008',
//           message: "I work for Time Out for a number of years opened a few stores in Huntsville Alabama, Lenox Square, Memphis Tenn, and a few more. My store was closed due to the building of a new mall in the area and the chain did not want to spend the money to open a new store up in the new mall. An Alladin\'s Castle opened up and make lots of money. But it has become a Time Out now but it just is not like the Time Out of old. Anybody remember the Red Quarters thats what I\'m talking about. I still have some of the old news letters is you would like them with stor openings. Just a blast from the past. Anybody remember the Afterburner sitdown simulator that made about 2500 to 3000 dollars a week thats a lot of quarters in the 1980 and early 1990. P.S. dont forget about the Dragons Lair, Space Ace, Cliff Hangers tour. You see I am a Time Out old school."
//         },
//         {
//           name: 'Ricardo',
//           location: 'Guaynabo, PR Puerto Rico',
//           time: 'Tuesday, March 18, 2008',
//           message: "We had from what I can remember 5 time-outs in the San Juan Metro Area, here in Puerto Rico. There were 2 in Plaza las Americas, 1 in San Patricio, 1 in Plaza Carolina, and 1 in Plaza Guaynabo. I am unsure if there were any more on the island as I was pretty young when they were at their height of their popularity. As many have stated these were pretty dark and had the classics. Pac-Man, Donkey Kong, Galaga, Tempest, Tron and many more."
//         },
//         {
//           name: 'JSB',
//           location: 'Riverdale, NY USA',
//           time: 'Saturday, February 23, 2008',
//           message: "Time-Out tunnel, next to Nathan's famous in Sunrise Mall, Massapequa, NY...my office for many years."
//         },
//         {
//           name: 'Jeff Ryan',
//           location: 'Yardley, PA USA',
//           time: 'Monday, February 18, 2008',
//           message: "Very cool site! Honestly, I've never heard of Time Out Tunnel, but I'm very familiar with Spaceport. Does anyone know where I can find a similar site or at least a history of Spaceport? Thanks!"
//         },
//         {
//           name: 'George Gomez',
//           location: 'Chicago, IL USA',
//           time: 'Monday, February 04, 2008',
//           message: "Wow! Dude! you are insane! Great job on the TRON. I designed that thing back in the day. You picked up all the subleties of the textures, etc. Fantastic. How long did it take and what did you use to model it? GG"
//         },
//         {
//           name: 'David Frye',
//           location: 'Manassas, VA USA',
//           time: 'Sunday, February 03, 2008',
//           message: "Boy do I remember Time Out. I used to visit one in Laurel MD, and Frederick MD. The one in Frederick Towne Mall became so large, it actually had 2 entrances down 2 different corridors! I love the 70's/80's!!"
//         },
//         {
//           name: 'Mark Salas',
//           location: 'Westlake, Ohio USA',
//           time: 'Wednesday, January 30, 2008',
//           message: "I am 43 years old and have been hooked on pinball since I was 12 or 13. At this time arcades were abound with pinball. I grew up in the Maryland suburbs of Washington D.C. and can remember countless arcades, bowling alleys, sub shops, and 7-Elevens all with pinball machines. Literally 200 machines in a 20 mile radius. These were the Royal Flushs', Captain Fantastics, Old Chicagos, OXO s, and Buccaneers of the world. I spent a lot of time at a chain of arcades called Time Out Amusements. Our local Time-Out was in Forestville, Maryland at the Forest Village Park Mall. My brother and I would get dropped off numerous times a week (after homework) and play Pinball. We were not into video games as much but tried to win the token prize for the week. Each week the high score winner on each machine in the arcade would win a certain number of tokens. I seem to think it was 10. We also spent a lot of time at the Time Outs in Springfield, Virginia. They had two arcades in the mall. The downstairs Time-Out had tons of pinball machines. Such classics as Stern Nine-Ball, Bally Centaur, Bally Fathom etc. etc. In high school I played all of the time and entered a the Time-Out Pinball tournament (circa 1981) at Forest Village Park Mall. I Won the grand prize which was a Stern Magic pinball machine. I still play and collect pinball even to this day."
//         },
//         {
//           name: 'Leon Petrossian',
//           location: 'charlottesville, va USA',
//           time: 'Sunday, January 27, 2008',
//           message: "I use to live in Franconia,Va in the 70's and mid 80's. I remember Time-Out very well. Use to go to Springfield Mall all the time and there are so many great memories."
//         },
//         {
//           name: 'Steve',
//           location: 'Scottsdale, AZ USA',
//           time: 'Wednesday, December 12, 2007',
//           message: "I made several visits back in the late 70's and early 80's to the Time Out Tunnel arcade located at Springfield Mall in Springfield Virginia! It really is shocking to find a website that mentions that SPECIFIC Time Out location with vintage pictures of it to boot! I am 39 years old and can remember seeing the Cinematronics game, Star Castle, for the first time in this very same arcade. This had to have been in the early summer of 1980. It was one of the FEW machines in the arcade at the time that appeared to have a color monitor (as a 12 year old kid, I thought it was a color monitor, not realizing at the time it used a color overlay with a B&;W vector monitor underneath). Your 3D modeling and rendering work are EXCELLENT! Again when I read the name Springfield Mall, on this site, I just about fell out of my chair! I thought could he possibly be talking about Springfield VA.....and sure enough, unbelieveable!"
//         },
//         {
//           name: 'Busy Byz',
//           location: 'Brussels, Belgium',
//           time: 'Thursday, December 06, 2007',
//           message: "Big up from Brussels You're in my favorite website's list now the aesthetic is just PERFECT... Game Over"
//         },
//         {
//           name: 'Sonic 1992',
//           location: 'Dayton, TX USA',
//           time: 'Friday, November 30, 2007',
//           message: "Wonderful Site!! I'm glad to know that i'm not the only one who tearfully misses their local arcade! For those of you who wish somehow,someway you could have a piece of your old arcade... Give it a chance, Do your homework.. ASK ASK ASK..... I was able to find the original sign from my arcade!! Luckily, the same people still owned my local arcade, and the sign was under a pile of junk. They were happy to let me have it, and after restoration, It now happily hangs in my gameroom forever!!!!!!!!!!! I still can't believe I was able to get it after 16 Years!"
//         },
//         {
//           name: 'Russ',
//           location: 'Orlando, FL USA',
//           time: 'Saturday, November 10, 2007',
//           message: "I found Arcade84 a few days ago - it sparked an interest in MAME gaming and now I found The Tunnel museum! Absolutely gifted art with your rendering skills. I can draw cartoons, but you are CREATING. I wish I had the money it would take to commission people like you to render ALL of those old game units and put it together as a huge arcade you could tour in 3D, step-up to any machine, learn all about it and then PLAY the game - not some cheesy clone. I wish for quite a bit, I know. Still, thank you - especially for using your talent to create something positive in this too-gloomy world. Never lose that!"
//         },
//         {
//           name: 'Ray Rose',
//           location: 'Oviedo, FL USA',
//           time: 'Sunday, October 07, 2007',
//           message: "My sister used to work in the lower Time-Out in Springfield Mall....and me and my friends frequented 'the mall' and played many hours in Time-Out! Great site... we need a Time-Out Tunnel here in Oviedo FL."
//         },
//         {
//           name: 'Billy S',
//           location: 'NY USA',
//           time: 'Monday, October 01, 2007',
//           message: "Hi. great website. I worked for Time Out in New York for awhile as an employee and my favorite part was that you could easily bypass the coin counter on all pinball and video games. Then you click the coinmech as many times as you wanted to play. Management never figured it out why all the new games had so little coins... thats because we played it for hrs with no money. Didnt even need to use the red or yellow quarters! I played Scramble, Missle Command, Defender, Tempest and Beserk for hours and hours for free. Regional manager was a real jerk too so it was even better. Made friends in a few other towns with Time Outs and I showed them the coin counter trick as well. Ahhh. those were the good ol' days."
//         },
//         {
//           name: 'Brent',
//           location: 'Las Vegas, NV USA',
//           time: 'Thursday, September 13, 2007',
//           message: "Here's a video I put together of the TimeOut Tunnel pics with Eddie Money's song 'I Wanna Go Back'. Feel free to copy it and use it on your site. Brent http://www.brentradio.com/Videos/IWannaGoBack.wmv"
//         },
//         {
//           name: 'arthur',
//           location: 'las vegas, nv USA',
//           time: 'Tuesday, July 31, 2007',
//           message: "dear mr. kyle your paper arcade games is awesome i would like to ask you if you could send to my email a copy of your paper arcades and the pinball machine because i myself make paper arcades and your arcades would be kick ass to my collection of paper arcades. i would like to also trade paper arcades i have lot that you don't have lets make a trade kyle email me please a soon as possible"
//         },
//         {
//           name: 'Jeff Perlin',
//           location: 'Memphis, TN USA',
//           time: 'Wednesday, June 27, 2007',
//           message: "I used to manage several locations in Maryland and Washington DC from 1982 - 1994, including the one in Laurel. I remember Chuck, James, Tony & Carmen as well. It was a great time in my life. We had lots of fun, except when new equipment came in and we had to lug these huge pieces from the lower level of the mall to the upper level. I learned how to repair all the equipment, got to buy games cheap, and met and worked with some really great people."
//         },
//         {
//           name: 'Chuck B',
//           location: 'Sterling, VA USA',
//           time: 'Saturday, June 16, 2007',
//           message: "I used to work for the Time Out location in Laurel Md, from 1987 to 1989. There I learned to repair minor breaks to video games and pinball machines (repair joysticks, replace parts). As Golden Ring Mall and Georetown (Washington DC) locations were both in our 'region' I spent a few days working in those locations when staffing problems occurred. The chain was founded by the Bonomo family formerly of 'Tico's Turkish Taffy' or 'Bonomo's Turkish Taffy'. I believe Time Out actually purchased the Space Port chain before the Sega aquisition. If Jeff, James, Tony or Carmen read this (also former coworkers from Laurel store #32) I hope you're all having great lives and God Bless."
//         },
//         {
//           name: 'Clinton Howard Sr.',
//           location: 'Baltimore, MD USA',
//           time: 'Tuesday, June 12, 2007',
//           message: "Wow, this ia a wonderful site. It brings back many memories. I used to play in championship tourneys at Time Out in Golden Ring Mall in MD. Both the arcade and mall have been demolished. After time out closed I got hired and took over sister arcade Aladin's Castle and ran with them till the end. No more arcades in MD now. :-( Good times."
//         },
//         {
//           name: 'Thorsten',
//           location: 'Germany',
//           time: 'Wednesday, June 06, 2007',
//           message: "Hi Peter. I love your collection of arcade games and of course your gameroom :-) (Thanks for your help with the Asteroids Deluxe CPO-Pictures) I love the Arcade'84-Movie and therefore I cannot wait until you finish your movie. The pictures are _AWESOME_ and they give an idea how the movie will look like. What about some little movie examples in the download section?? Arcade-Greetings Thorsten from Germany"
//         },
//         {
//           name: 'Sean',
//           location: 'Glasgow, Scotland',
//           time: 'Tuesday, May 29, 2007',
//           message: "Hey My band wanted to put a picture of a galaga arcade game on our demo back cover but we couldn't take a real picture of one over here cause we couldnt find any. We were wondering if it would be ok to use this picture? http://timeouttunnel.com/images/movie/galaga_testrender003.jpg Please get back to us as soon as you can via email or MySpace. Cheers, SeAN"
//         },
//         {
//           name: 'Richard Roth',
//           location: 'USA',
//           time: 'Saturday, April 21, 2007',
//           message: "From 1992-4, whenever we took our kids to Florida to see grandparents, we stayed at Hollywood Beach Resort which had a Time-Out arcade. I still have the tokens as a reminder of all the quarters dropped into those wonderful machines."
//         },
//         {
//           name: 'Wahid P.',
//           location: 'Springfield, VA USA',
//           time: 'Wednesday, April 04, 2007',
//           message: "I live about 10 minutes away from Springfield Mall, I am usually their every Saturday."
//         },
//         {
//           name: 'Danny S',
//           location: 'USA',
//           time: 'Monday, March 26, 2007',
//           message: "WOW! What a blast from the past! My name is Danny. I managed Time-Out Family Amusement Center (store #51) in the Terrace Mall, Robbinsdale, MN. I was there November 1981 to November 1983. I believe the 3rd to last photo in your gallery was #51. If you look at the sign on the dark blue wall you ll see a Record Giveaway with a local record store called the Wax Museum. If you kept high score on a selected Game you would win the sleeve and a coupon. You would bring it the store and get the record. Anyway thanks for the site. I sure that I still have some tokens, business cards, photos? and company newsletters (The Sound Board). I ll take a look and get back to you. The company also had stores called station break , intermission , and The Great Foodini. Ruben L. if you re out there I d like to hear from you. Saturdaymorningtv@yahoo.com"
//         },
//         {
//           name: 'John Albarelli',
//           location: 'Rensselaer, NY USA',
//           time: 'Friday, March 09, 2007',
//           message: "Peter, those renders are AWESOME! Your attention to detail is second to none. When KI saw your Tron joystick complete with wires and parts modelled inside, I was floored. May I ask what program(s) you use for modeling and rendering?"
//         },
//         {
//           name: 'Wayne Steeves',
//           location: 'Alexandria, Va USA',
//           time: 'Wednesday, March 07, 2007',
//           message: "I have a lot of memories of Time-Out. I used too work at both Springfield stores, and 3 others in an eleven year span. I started at Time Out 2(#35) in 1983, Jessie Mainster was the manager. I later went to station break in Quantico,Va(87). it closed, so I then went back to Springfield Mall(88), to the original store upstairs(#8). Leonard Wicker was the manager there. Then I went to L'Enfant Plaza(90) in Washington DC. and finally to Forest Village Park Mall(92) in Forestville,Md. I left the company in 1994. I remember a lot of names: George McAulliff, Mike Chinoransky, Wayne Bonomo. I met Tico Bonomo several times, before he sold the company. Lots of memories."
//         },
//         {
//           name: 'Dave',
//           location: 'montreal, qc Canada',
//           time: 'Monday, March 05, 2007',
//           message: "Love the site. I think we've all got that special arcade we remember going to as kids. You captured this wonderfully with your tribute to Time out Tunnel. Keep up the good work"
//         },
//         {
//           name: 'Patrick de Albuquerque',
//           location: 'GA, 30102 USA',
//           time: 'Sunday, March 04, 2007',
//           message: "Enjoyed your site!"
//         },
//         {
//           name: 'arthur',
//           location: 'san diego, ca USA',
//           time: 'Friday, March 02, 2007',
//           message: "to Kyle Snyder please i my self make paper arcades and i would like to ask and request if you could send me a copy of all your paper pinball and arcade models please there quite a few models speacialy de pinball that i don't have and i would like to ask to send them to my email art_jupiter@yahoo.com please thanks kyle snyder"
//         },
//         {
//           name: 'Marvin',
//           location: 'UK',
//           time: 'Saturday, February 24, 2007',
//           message: "Wow, your Tron machine has gotta be one of the sweetest things I've ever seen! Absolutely stunning! I cannot wait to see the finished product of all your efforts."
//         },
//         {
//           name: 'Banes',
//           location: 'El Paso, TX USA',
//           time: 'Wednesday, January 31, 2007',
//           message: 'Nice site. Nice collection of classic gaming. Hmmm, note to self, "Must extend garage 20 more feet and buy more arcade games." Anyone around El Paso whom loves Arcades as much as I do, email me. I have a small converted garage that is a host of arcade games and pinball machines. Bane'
//         },
//         {
//           name: 'Mitch Gardiner - pixelhugger',
//           location: 'CA USA',
//           time: 'Sunday, December 10, 2006',
//           message: "Wow! WOWWOOWOWOWOOWOW!!! I've been trolling classic gaming sites since.... probably '97- so a decade or so. This is one of the most inspiring I've seen. Can't believe I'm only stumbling across it now! Your lighting and texturing skills are godlike.THANKS for putting this together. I can hardly wait for more!!!!"
//         },
//         {
//           name: 'Fred',
//           location: 'USA',
//           time: 'Thursday, November 16, 2006',
//           message: "What a great site! ;-)"
//         },
//         {
//           name: 'Dave Mitchell',
//           location: 'Richmond, VA USA',
//           time: 'Thursday, August 10, 2006',
//           message: "Recently discovered the site and love the memories it brought back. I used to visit the Time Out at Tanglewood Mall in Roanoke, VA. I remember when it first got a batch of laser disc games it featured in an elevated area at the back of the arcade. This was the first Dragon's Lair, Space Ace, and some spaceship game I don't remember featured in Roanoke and trying to get on that platform top see the games was next to impossible. I moved away from Roanoke in '84 and went back for a visit for the first time in '03. Sadly the Time Out was no longer there it had become a discount shoe store. I still have fond memories of many a Saturday afternoon spent there."
//         },
//         {
//           name: 'Jordan Simmons',
//           location: 'springfield, VA USA',
//           time: 'Thursday, July 13, 2006',
//           message: "My gosh...I am totally speechless. The flood of memories. I have lived within 4 miles of Springfield Mall since the mid-80s when my father got stationed at Ft. Belvoir. I was a total 'Mall Rat'. I loved video games and Time-Out so much, I actually aspired to work there when I got old enough to do so. In the summer of 1989, I got a job from Leonard Wicker and started working at the downstairs Time-Out 2. I remember ol' John who had been there so long, he remember when Time Out started. I left briefly to go into the National Guard and came back and continued working at Time Out, but at the upstairs one beside Orange Julius. The place was doing very good business back then, but in late '91 or early '92, Street Fighter 2 came out and pretty much revitalized arcades (briefly) and video game business to the levels that you see today. I stayed there for almost 3 years total before getting a professional job, but I remember working with Dee, Tony, Harvey, John, Jim, Don, and so many others. I noticed a Rob Smith posting, but sorry man...I can't picture your face right now. :/ Things started changing in the mid-90s though. When Edison Brothers took over from Sega, they ran that place into the ground. They owned several clothing stores in Springfield Mall like J. Riggins and pretty much used Time Out as a cash cow to support their failing clothing stores. Edison Bros. jacked the prices of many of the games to .50 cents a play, which at the time was a LOT of money to drop. They stopped putting new games into the joint and when the home game consoles started getting powerful, people stopped going to Time Out. When Street Fighter 2 came out on the Super NES, I knew then that mall arcades were circling the drain. Unfortunately, the place has turned into a nostolgic icon of yesteryear. I still live right down the street and I have not played a game in Time Out in over 10 years. It also looks like the place is endangered of getting shut down due to the new owners of Springfield Mall. http://www.washingtonpost.com/wp-dyn/content/article/2006/05/27/AR2006052700930.html ...and time moves on. Thank you for the trip down memory lane. If I could live that entire portion of my life over again, I would do it in a heartbeat. - J"
//         },
//         {
//           name: 'Steve Warnek',
//           location: 'Wayne, NJ USA',
//           time: 'Friday, July 07, 2006',
//           message: "I remember going to the TIME-OUT inside the Willowbrook Mall (now the Staten Island Mall) on Staten Island, NY... right across from the Farrell's Ice Cream Parlor ! I was around nine years old at the time... Wonder if it's still around?"
//         },
//         {
//           name: 'Barry',
//           location: 'Fort Valley, VA USA',
//           time: 'Thursday, June 22, 2006',
//           message: "Found my way here via the Wash Post story on your home arcade. I spent a LOT of time at the Time Out Tunnel in Springfield Mall in the late 70's - early 80's. Probably saw you there on occasion! Thanks for the memories."
//         },
//         {
//           name: 'Mike',
//           location: 'West Covina, CA USA',
//           time: 'Saturday, May 20, 2006',
//           message: "WOW. Thanks for taking me back to the 1980's!!! I also remember Puente Hills Mall, City of Industry, California, where Time Out was located in the upper floor right over looking the old hexagon fountain. I can still picture myself wearing an Ocean Pacific shirt, Levi's cords, and a pair of checkered Vans. Time Out was always the place where Mom used to drop me off and pick me up after she did her shopping. This was usually before we hit up the old AMC 6 theaters for a matinee showing."
//         },
//         {
//           name: 'RYan',
//           location: 'alexandria, va USA',
//           time: 'Thursday, May 18, 2006',
//           message: "Yea ive spent thounds od dollers at Springfiels mall on those mechanins.Have to say this site brings back all kids of memoies"
//         },
//         {
//           name: 'TJ Beyer',
//           location: 'Sunnyvale, ca USA',
//           time: 'Saturday, May 13, 2006',
//           message: "My first memory of Time Out was around 1988 in Del Monte Shopping Center in Monterey, CA. Williams Cyclone pinball was 'the new game' then, they also had a Gottlieb TX-Sector, Gold Wings and another pinball. The games in the arcade had the high score cards on them that were 'reset' weekly (as someone else mentioned). They'd give out tokens for promotions, but some games only accepted quarters (while others would take quarters AND tokens). They had the 'red' quarters also (spray-painted, both sides) -- but the employee had to put them in the game for you. Other games I remember were the sit-down sega Afterburner (I remember bringing headphones from home to use the headphone jack near the controller on the game); Bionic Commando, Strider, Rastan, and 1943. They had some basketball games, skee ball, and other ticket-games. There was a fair amount of space between each game (1-2 feet) and they were at an angle so you could see the monitors as you walked into the arcade, and the side-art on your way out. The lighting was very welcoming for a family, and 'late 80's' decor. The shopping center is still there (last visit was 7/05) but the arcade is long gone. Somewhere I have some of the rulers that are pictured on this site, as well as one of the rubber coin holders (that you squeeze to open it), a coffee mug, pencils, tokens, and a brightly colored cotton-ball with googley eyes and a ribbon that had the time-out logo. I also remember the tokens having ridges on the edge (like a US quarter), a trait that I've only ever seen on Time Out tokens. There are currently a couple Namco-owned Time Out centers near me, but they were both formerly Alladin's Castle centers in the 80's Enough rambling. Cool site."
//         },
//         {
//           name: 'Gregory Erway',
//           location: 'Farmington, NY USA',
//           time: 'Friday, April 28, 2006',
//           message: "Great site and fantastic pics. I grew up a Time-Out brat myself. Ours was located in the Arnot Mall in Big Flats, NY. It is still there and operating as Time-Out. I've been trying to get copies of pictures from the 80's of the place for a few years now. Hopefully I'll get them someday. I believe it was late 1979 or early 1980 when our location opened. I was also familiar with a non-mall location in Ithaca, NY (downtown commons just below Cornell University) which I believe is long gone. Also the Eastview Mall location in Victor, NY has been gone for a few years now (I now live near this area). And the Marketplace Mall in Henrietta did exist but I believe is now gone. Some Time-Out stories: There was a time when Time-Out got into the laser game arena very heavily. We started with just Dragon's Lair and later M.A.C.H. 3. But then Time-Out (at least all the locations in my area) started passing around every laser disc game known at the time (all at once). The display would stay at one location for a month then be moved to the next location. I was the first person to complete Dragon's Lair in our area and was asked to help promote the display of laser disc games when the Big Flats store got their month of glory. I was given a Time-Out t-shirt to wear (on weekends when I didn't have school) and as many tokens/quarters as I wanted. My job was to play the game, get people watching, describe the game to the watcher, then give that person a free game to get them hooked and then move on to the next game. I was paid no money for this only the t-shirt and all the games I could play. I remember almost every laser disc game being there like Space Ace, Cliff Hanger, Cobra Command, Firefox, etc. Around late 1985 or very early 1986, our Time-Out location joined a 'High Score' database. The name of the company was Hi-Tech International Scoreboard. I was told by the manager of our location (Rich Greene) that the location paid a one time fee of $150 (I might be remembering the amount wrong but it was between this and $250) and they would then be members of the scoreboard. In exchange, the location could turn in high score preformances (the scores) to Hi-Tech. Hi-Tech would publish a monthly listing of top scores for all the games. A new world record holder would receive a certificate (I have a couple of these still in my collection to this day) and be listed in future listings. The location also put your name and score up on the wall for all to see. Hi-Tech was formed by a few guys that used to be part of Twin Galaxies back in the early 80's. When Twin Galaxies stopped operations around 1985 they started Hi-Tech. I blieve they were based out of the Carolinas. A few years later Hi-Tech disappeared. A few years after that Twin Galaxies started back up and is going strong to this day (http://www.twingalaxies.com). Time-Out used to (at every location I ever saw) have weekly high score contests. There was an index card (usually yellow, orange, blue, or green) hung from the top corner of the machine. It listed a place for Player Name, Score, Game, and Date. The top have stars across it smaller on the outsides and getting large in the middle. And I think it said 'HIGH SCORE'. Each week Monday the games would have new cards put up with a base score (player name listed as Time-Out). If you beat that minimum score, you told an attendant that would then fill out a new card for you and put it up. Most games had these but not always all of them. On Sunday night the cards were taken down. If you thought you had the high score for the previous week you would ask if you won or not. If you did you were given 5 free play coupons. These were yellow dollar bill shaped (bue slightly smaller). When they started this most games were $.25. A little while later $.50 games stared to become more common (our first was Donkey Kong followed by Joust). We obviously would use these coupons for the $.50 games as they were good for 'one free game'. Later, Time-Out changed the award to a sheet of 5 $.25 coupons. The size was about the size of an index card. The coupons were blue. And the 5 coupons that made up the sheet were perforated so you could seperate them. I might be able to search and find some of these but I don't think I have any yellows around anymore. Time-Out was my motivation to collect arcade games. I now own more games than I can remember our Time-Out had back in the early 80's. (see my webpage for pictures of my home arade)."
//         },
//         {
//           name: 'Matt Rossiter',
//           location: 'Rancho Santa Margarita, CA USA',
//           time: 'Thursday, March 30, 2006',
//           message: "Peter somehow manages to nail just about everything I thought was cool about being a kid back in the 70's and 80's. Everything from Verti-Birds to Big-Traks to Sizzlers. I remember Time-Out arcades very well. I grew up in Rochester, NY and we had a few of them at the Malls. Those were sort of bitter-sweet memories. Sweet because I loved the excitement of going there and hearing all the rumbling arcade noises. Bitter because my $5 would disappear in about 20 minutes. I used to spend a few bucks at time-out, buy a 2600 cartridge at some toy store, then buy a new LP such as the latest Rush album. By that time all of my Paper-Route money was gone. My favorite memories were of old Smokey Bowling alleys and Comic Shops (Empire Comics on Titus Avenue). I was never good at video games, but boy did I love playing them. I now have 30 in my house. When it comes to food, however, I have a really hard time trying to be nostalgic. SpaghettiO's with Meatballs and Sprite, cheap pizza and root beer - YUCK! Anyway - Good Job Peter! I hope to see more cool and obscure stuff in the future."
//         },
//         {
//           name: 'David Foster',
//           location: 'Chatsworth, CA USA',
//           time: 'Sunday, March 19, 2006',
//           message: "Peter, I'm speechless..............You have taken me back to 1980, playing for hours at the Puente Hills Mall in California. You have created a beautiful tribute to perhaps my favorite memory of those years. Man, I wish I could turn back time, and spin away into another Arcade Dimension......* Thanks Man!"
//         },
//         {
//           name: 'Andrew',
//           location: 'Fort Worth, TX USA',
//           time: 'Thursday, March 02, 2006',
//           message: "Man - this is cool. We never had Time Out Tunnels in Texas. We had 'Tilt' and 'Alladin's' and a ton of pop-up mom and pop arcades in strip malls. The scenese are all the same though! The paper arcade is really cool. The detail is amazing (and scary at the same time!)"
//         },
//         {
//           name: 'Steve',
//           location: 'Jacksonville, FL USA',
//           time: 'Monday, February 20, 2006',
//           message: "Just wanted to throw a quick KUDOS your way for the excellent photos and information on your site. Growing up in the Chicago area, we did not have a Time Out (that I am aware of), but I did spend A LOT of time in the arcades that we did have. The photos of the grown men in business suits playing the video games is priceless. If we still had arcades around today, I would surely spend a lunch hour or two there playing the vids and pins. The Time Out Tunnel reminds me of a place in the Cherry Vale Mall that had a yellow brick road leading down a long, dark tunnel. There was no arcade at the end, though. I think it was DJ booth for a local radio station or something strange like that. It was still cool to run down the dark hallway as a kid, though. Anyway, I ramble .... great site!"
//         },
//         {
//           name: 'Rob Smith',
//           location: 'USA',
//           time: 'Thursday, December 08, 2005',
//           message: "Myself, back in the late 80's I worked at the upper level TIME OUT for Leonard Wicker for 1-2 years when I was stationed at Ft Belvoir VA. Those were some of my most memiorable moments in my life. Working with Dee, John, Tony and all the rest. Now 15 years later I havent got the chance to get back there and see how things have changed. Yes I did manage a TIME OUT in Cincinnati Ohio for a while things unfortunately didnt pan out as I had planned. But life is funny that way. I never did get the chance to thank him for giving me a break and working for him. Now if anyone remembers a woman that was close to John back then Id like to inquire about her. Her name is DANA thats all I remember. She used to bring her kids in all the time. I know 1 of her sons nane was Travis. Also if anyone knows the Tech that used to work there Jim tell hime that Rob fro the army said hello."
//         },
//         {
//           name: 'Tree Ghost',
//           location: 'NF, NY USA',
//           time: 'Monday, December 05, 2005',
//           message: "Cool site. I worked at a Time-Out at Rainbow Centre Mall in downtown Niagara Falls from 91-92. It was one of the original Time-Outs that was later sold to Edison Brothers Mall Entertainment. I have one photo on my site here: http://www.jumpthefalls.com/index_files/Page484.htm. I have more photos of this arcade, plus tokens, pencil cases, pencils, token bags and more. Let me know if you want scans of any of this stuff."
//         },
//         {
//           name: 'The Hooligan',
//           location: 'Pembroke Pines, Fl USA',
//           time: 'Tuesday, November 29, 2005',
//           message: "great site. nver hard of the place due to many mall copycats. however it good to see some people passionately adore the beauty of classic arcade and video games. like a 33 year old metal head still listen to classic rock every now and then. some gose to gamers who lived dirong the 70's and 80's. still playing video games and still plays tge classics every once in awhile."
//         },
//         {
//           name: 'Sven',
//           location: 'Belgium',
//           time: 'Monday, November 28, 2005',
//           message: "Great website! I never had the luck to visit one of these 'time-out' arcades but I recognise many of the games I grew up with. It's good to see these pictures,it brings back some great memories.Vintage arcade forever!!!"
//         },
//         {
//           name: 'Mitch "MameMaster!" Gerson',
//           location: 'New York, NY USA',
//           time: 'Thursday, November 10, 2005',
//           message: "HOLY COW!....you are truly one of the most devoted gamers I have ever seen. I absolutely cannot wait for Time Tunnel to be completed! Your attention to detail is absolutely stunning....and brings back so many great memories. I only wish I knew where you lived so I could visit! Your website is now truly one of favorites to come back and visit! Mitch"
//         },
//         {
//           name: 'Bill Beckett',
//           location: 'BOULDER, CO USA',
//           time: 'Friday, November 04, 2005',
//           message: "TIME-OUT Springfield Mall, VA, I sure pumped alot of quarters in GORF and M.A.C.H. 3! Those were the days man, when a new game would come out and they would have a 'Bank' of new games! I remember when they got a Haunted House pinball....they cranked up the volume and a crowd of ten or fifteen people were watching! I actually got to the very end of M.A.C.H. 3! 1981-1982 were my days. I now have twenty or so games and I don't remember sucking so bad at GORF! Thanks for the site!"
//         },
//         {
//           name: 'Mike Moore',
//           location: 'Abilene, TX USA',
//           time: 'Monday, October 31, 2005',
//           message: "I used to hang out at the Time-Out in the Sunrise Mall in Massapequa,NY back in the early eighties. Upstairs they had another game room called the 'Galaxy Game Room' both were awesome and full of great memories. I haven't been back to NY since 86', I wonder if either are still there? -Mike"
//         },
//         {
//           name: 'Edgar',
//           location: 'Cerritos, CA USA',
//           time: 'Friday, October 21, 2005',
//           message: "There used to be one here, in Cerritos, CA at the Los Cerritos Center. Closed down probably in the late 80's or early 90's. I still know exactly where it was located."
//         },
//         {
//           name: 'The Pinny Parlour',
//           location: 'Australia',
//           time: 'Friday, October 20, 2005',
//           message: "Nice work on the site, well done. Looking forward to you uploading more content in the near future"
//         },
//       ]
// //      entries.forEach(entry => {

//         for (let i=0; i< entries.length; i++)
//         {
//           const entry = entries[i]
//           const timestamp = new Date(entry.time).getTime()
//           await axios.post('https://ol6wo1dv47.execute-api.us-east-2.amazonaws.com/prod/guestbook?guestid=' + timestamp, {
//             message: entry.message.replace(/"/g, '').replace(/'/g, ''),
//             name: entry.name.replace(/"/g, '').replace(/'/g, ''),
//             location: entry.location.replace(/"/g, '').replace(/'/g, ''),
//             timestamp
//           })
//         }

//       //})
//     }
  }
}
</script>

<style scoped lang="scss">
</style>

