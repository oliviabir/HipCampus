'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Campuses', [
      {
        userId: 2,
        name: 'Stanford University',
        city: 'Stanford',
        state: 'California',
        description: 'Stanford University, officially Leland Stanford Junior University, is a private research university. The campus occupies 8,180 acres, among the largest in the United States, and enrolls over 17,000 students. Located 35 miles south of San Francisco and 20 miles north of San Jose, Stanford University is in the heart of Northern California\’s dynamic Silicon Valley, home to Yahoo, Google, Hewlett-Packard, and many other cutting-edge tech companies that were founded by and continue to be led by Stanford alumni and faculty. Nicknamed the “billionaire factory”, it is said that if Stanford graduates formed their own country it would boast one of the world\’s largest ten economies. Covering 8,180 acres, Stanford has one of the largest university campuses in the US, with 18 interdisciplinary research institutes and seven schools: the Graduate School of Business; School of Earth, Energy & Environmental Sciences; Graduate School of Education; School of Engineering; School of Humanities and Sciences; Law School; and School of Medicine.',
        tuition: 56169,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'Columbia University',
        city: 'New York',
        state: 'New York',
        description: 'Established in 1754, Columbia University is a private Ivy League research university in Upper Manhattan, New York City. It was established as King\'s College by royal charter of George II of Great Britain and renamed Columbia College in 1784 following the American Revolutionary War. With an undergraduate acceptance rate of 5.8 percent, Columbia is currently the third most selective college in the United States and the second most selective in the Ivy League after Harvard. Its first president was none other than the literary great Samuel Johnson, and over the years Columbia has produced numerous distinguished alumni, from Oscar winners and Nobel laureates to Supreme Court judges. Three US Presidents and the authors of the Declaration of Independence and American Constitution were also schooled at Columbia. It also runs the highly distinguished Pulitzer Prize, an annual award for achievements in journalism, literature and musical composition. The university is organized into 20 schools, including undergraduate schools such as Columbia College, the Fu Foundation School of Engineering and Applied Science, and the School of General Studies, as well as graduate schools such as Columbia Law School, Columbia College of Physicians and Surgeons, Columbia Journalism School and Columbia Business School. It also had global research outposts across the world. Its total student body numbers around 28,000 and is comprised mainly of postgraduates, with roughly 8,500 undergraduate students. Columbia\’s main campus is Morningside Heights, occupying around six city blocks in the Morningside Heights district of New York. It\’s home to the neo-classical Butler library, one of the largest buildings on campus, and almost two dozen undergraduate dormitories. The university also owns 7,800 apartments in the local area, which house faculty members, students, and staff',
        tuition: 63530,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Harvard University',
        city: 'Cambridge',
        state: 'Massachusetts',
        description: 'Only the academic elite can claim a place at Harvard, and the nominal cost of attendance is high \– though the university\’s hefty endowment is such that it can offer generous financial aid packages, which around 60 per cent of students take advantage of. As freshmen, students live in one of the dormitories in Harvard Yard, a prime location, and eat in the historic and picturesque Annenberg dining hall. Harvard students are active around and beyond campus, with over 400 official student societies including extracurricular, co-curricular and athletic opportunities. Whether playing on the field in Harvard Stadium, fostering entrepreneurial activities at the Harvard innovation lab or writing and editing at the daily newspaper the Harvard Crimson, student life is a rich and rewarding experience. Harvard\'s alumni include eight US presidents, several foreign heads of state, 62 living billionaires, 359 Rhodes Scholars, and 242 Marshall Scholars. Whether it be Pulitzer Prizes, Nobel Prizes, or Academy Awards, Harvard graduates have won them. Students and alumni have also won 108 Olympic medals between them. The university is regularly ranked number one in the world, and the consistency of its chart-topping performances shows that success is yet to breed complacency.',
        tuition: 55587,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'Massachusetts Institute of Technology (MIT)',
        city: 'Cambridge',
        state: 'Massachusetts',
        description: '“Mind and Hand” is the thought-provoking motto of the Massachusetts Institute of Technology, known also as MIT. This motto enigmatically encapsulates this famous institution\’s mission to advance knowledge in science, technology and areas of scholarship that can help to make the world a better place. At its founding in 1861, MIT was initially a small community of problem-solvers and science lovers eager to bring their knowledge to bear on the world. Today, MIT has evolved into an educational behemoth, with some 1,000 faculty members and more than 11,000 undergraduate and graduate students. MIT is now an independent, coeducational, privately endowed university organized into five schools (architecture and planning; engineering; humanities, arts, and social sciences; management; science). Yet the principle of educational innovation remains at the core of MIT\’s educational philosophy. MIT researchers are at the forefront of developments in artificial intelligence, climate adaptation, HIV, cancer, and poverty alleviation, while in the past MIT research has fueled scientific breakthroughs such as the development of radar, the invention of magnetic core memory and the concept of the expanding universe.',
        tuition: 53450,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Yale University',
        city: 'New Haven',
        state: 'Connecticut',
        description: 'Yale University is a private research university and a member of the prestigious Ivy League, a group of America\’s most celebrated higher education institutions. Situated in New Haven, Connecticut, the first planned city in America, Yale was founded by English Puritans in 1701, making it the third-oldest higher education institution in the United States. Today, the city, which is part of the New York metropolitan area, is very much dominated by Yale, though it\’s also billed as the “Cultural Capital of Connecticut”. According to the New York Times, New Haven is also extremely picturesque, with “art almost everywhere you look”. Yale University\’s central campus spans 260 acres and includes buildings from the mid-18th century. The university is organized into 14 schools: the original undergraduate college, the Yale Graduate School of Arts and Sciences and 12 professional schools. Undergraduates follow a liberal arts curriculum which allows you to think and learn across disciplines before deciding upon a major. Perhaps its most distinctive feature, Yale undergraduates are organized into a social system of residential colleges, which allows them to experience the cohesiveness and intimacy of a small school while still enjoying the cultural and scholarly resources of a large university.',
        tuition: 57700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'University of Chicago',
        city: 'Chicago',
        state: 'Illinois',
        description: 'Established in 1856, the University of Chicago is a private research university based in the urban center of Chicago, the third most populous city in the United States. Outside of the Ivy League, Chicago is one of America\’s top universities, and holds top-ten positions in various national and international rankings. Beyond the arts and sciences, Chicago has a glowing reputation for its professional schools, including the Pritzker School of Medicine, the Booth School of Business, and the Harris School of Public Policy Studies. University of Chicago alumni are responsible for the development of many academic disciplines, such as sociology, economics, law, and literary criticism. Today, the University of Chicago has approximately 16,000 students enrolled, with a male to female ratio of 56:44. A quarter of all students hail from overseas, a nod to the institution\’s progressive credentials. Students run more than 400 clubs and societies, which consist of a typical mix of sports teams, arts, cultural and religious groups, academic and political groupings, and societies that promote eclectic common interests. Among the more famous examples are the University of Chicago bowl team, which has won 118 tournaments and 15 national championships, while the university\'s competitive Model United Nations team was the top ranked team in North America in 2013\–14 and 2014\–2015.',
        tuition: 60552,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'University of Pennsylvania',
        city: 'Philadelphia',
        state: 'Pennsylvania',
        description: 'The University of Pennsylvania, located in Philadelphia, was founded by Benjamin Franklin. The Penn Quakers have more than 25 NCAA Division I sports that compete in the Ivy League, and are noted for successful basketball and lacrosse teams. Penn offers housing in more than 10 College Houses, but many students live in the numerous off-campus apartments and houses available. More than 25 percent of the student body is involved in Greek life, which encompasses nearly 50 fraternities and sororities. The school also offers a number of clubs and organizations, ranging from performance groups like the Latin & Ballroom Dance club to student publications such as the Penn Political Review. Penn works closely with the West Philadelphia area through community service and advocacy groups.',
        tuition: 60042,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Duke University',
        city: 'Durham',
        state: 'North Carolina',
        description: 'Duke University is a private institution that was founded in 1838. Durham, North Carolina, which surrounds Duke\'s campus, offers a variety of activities including shopping, dining and entertainment. Its "Bull City" nickname comes from the Blackwell Tobacco Company\'s Bull Durham Tobacco. Students at Duke are required to live on campus for their first three years, and freshmen live together on the East Campus. The Duke Blue Devils maintain a fierce rivalry with the University of North Carolina—Chapel Hill Tar Heels and are best known for their outstanding men\'s basketball program, which is one of the top five most wins all-time college basketball programs in the country. Approximately 30 percent of the student body is affiliated with Greek life, which encompasses almost 40 fraternities and sororities.',
        tuition: 57633,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'University of Arkansas',
        city: 'Fayetteville',
        state: 'Arkansas',
        description: 'Founded in 1871, the University of Arkansas, Fayetteville, is the flagship institution of the University of Arkansas System. Located in Fayetteville, the U of A is the state\’s foremost partner, resource and catalyst for education and economic development. The U of A is a flagship university for the integration of student engagement, scholarship, research and innovation that collectively transforms lives and inspires leadership for a global society. As Arkansas\’s land-grant university, the U of A has a mandate to teach, conduct research and perform outreach. The university offers 220 baccalaureate, master\’s, doctoral, professional and specialist degree programs through its 10 schools and colleges. The Carnegie Foundation for the Advancement of Teaching places the U of A in its highest research category, making it the state\’s only doctoral-granting, research university with a very high level of research activity and one of only 108 schools in the country with that distinction. Research expenditures at the university now exceed $123 million per year, making research activity a significant academic element at the university and an economic engine for the state.',
        tuition: 25872,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'University of Michigan',
        city: 'Ann Arbor',
        state: 'Michigan',
        description: 'One of the foremost research universities in the United States, the University of Michigan was founded in 1817, before Michigan had even become a state, and moved from Detroit to what is now its Central campus in Ann Arbor in 1837. Michigan spans 780 acres, which is made up of its Central and North campuses, two regional campuses, and a center in Detroit. It has a large student body of around 46,000, with undergraduates numbering two-thirds of that number. Michigan has been lauded for having high standards of research, and the university\’s comprehensive graduate program offers doctoral degrees in the humanities, social sciences, and STEM fields (science, technology, engineering and mathematics) as well as professional degrees in architecture, business, medicine, law, pharmacy, nursing, social work, public health, and dentistry. Michigan\'s body of living alumni comprises more than a half million people, which is one of the largest alumni bases of any university in the world and a valuable resource for current students when it comes to networking and building industry connections.',
        tuition: 52266,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'University of Washington',
        city: 'Seattle',
        state: 'Washington',
        description: 'Located north of downtown Seattle, the University of Washington is one of the oldest public universities on the West Coast. It is also a cutting-edge research institution, receiving significant yearly federal funding, and hosting an annual undergraduate research symposium for students to present their work to the community. The university has a highly ranked School of Medicine, College of Engineering and Michael G. Foster School of Business. Known as a commuter school, the university does not require freshmen to live on campus, but it encourages students who do to conserve energy and recycle. Students can join one of the 950-plus student organizations on campus, including about 70 sororities and fraternities. Nearly three-fourths of UW graduates remain in the state post-graduation.',
        tuition: 39114,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'Western Washington University',
        city: 'Bellingham',
        state: 'Washington',
        description: 'Western Washington University is a major public university located in Washington State. Located in the city of Bellingham, WWU is 90 miles north of Seattle, and 55 miles south east of Vancouver, the other side of the Canadian border. The campus is situated between the Sehome Hill Arboretum and Bellingham Bay, where locals can catch ferries to several nearby islands, and it is within easy reach of a number of outdoor activities. There are over 40 parks and trails within the 28 square miles that make up Bellingham\’s city limits. Its city center enjoys a buzzing café scene, and is full of markets, bookshops, boardwalks and theatres. The area also enjoys good access to volcano Mount Baker. WWU was founded as a female-only school in 1893. Known by its current title since 1977, its former names have included New Whatcom Normal School and Western Washington College of Education. Students at WWU can now choose from more than 150 different subjects. WWU has conferred master\’s degrees since 1947, the year it launched its first education MA.',
        tuition: 25266,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'The Evergreen State College',
        city: 'Olympia',
        state: 'Washington',
        description: 'The Evergreen State College is a public liberal arts college in Olympia, Washington. Founded in 1967, it offers a non-traditional undergraduate curriculum in which students have the option to design their own study towards a degree or follow a pre-determined path of study. Full-time students can enroll in interdisciplinary academic programs, in addition to stand-alone classes. Programs typically offer students the opportunity to study several disciplines in a coordinated manner. Faculty write substantive narrative evaluations of students\' work in place of issuing grades. Evergreen\'s main campus, which includes its own salt-water beach, spans 1,000 acres of forest close to the southern end of the Puget Sound. Evergreen also has a satellite campus in nearby Tacoma. The school offers a Bachelor of Arts in Liberal Arts and Bachelor of Science, Master of Environmental Studies, Master in Teaching, Master of Public Administration, and Master of Public Administration in Tribal Governance. Evergreen was one of many alternative colleges and programs launched in the 1960s and 1970s, often described as experiments. While the vast majority of these have either closed or adopted more mainstream approaches, Evergreen is one of a few in remaining steadfast in pursuing its original mission.',
        tuition: 28515,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'Boston College',
        city: 'Newton',
        state: 'Massachusetts',
        description: 'Boston College, located just outside downtown Boston, was founded by the Society of Jesus and has maintained its Roman Catholic Jesuit religious affiliation. The Carnegie Foundation for the Advancement of Teaching classifies it as a university with high research activity. BC has nine schools, which include such highly ranked graduate programs as the Lynch School of Education, Boston College Law School and Carroll School of Management. The school competes in nearly 30 NCAA Division I varsity sports in the Atlantic Coast Conference, and the BC Eagles have one of the highest graduation rates for student athletes in the country. Students can join more than 200 clubs and organizations, but there is no Greek system on campus. Freshmen are not required to live on campus, but the majority choose to do so. More than 1,000 students participate in study abroad each year.',
        tuition: 60202,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'University of California, Los Angeles',
        city: 'Los Angeles',
        state: 'California',
        description: 'Located in LA\’s Westwood neighborhood, five miles from the Pacific Ocean, UCLA encompasses the College of Letters and Sciences and a number of graduate schools and programs, including the highly ranked Anderson School of Management, Henry Samueli School of Engineering and Applied Science, School of Law and David Geffen School of Medicine. UCLA also has a prestigious School of Theater, Film and Television, and School of Dentistry. The Ronald Reagan UCLA Medical Center is one of the top-ranked hospitals in the country.',
        tuition: 43003,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'Rice University',
        city: 'Houston',
        state: 'Texas',
        description: 'Over 100 years, Rice University has been developing unconventional wisdom that transforms the lives of students and contributes to a better world. One of the top ranked research universities in the country, Rice has highly respected schools of Architecture, Business, Continuing Studies, Engineering, Humanities, Music, Natural Sciences and Social Sciences. Rice\’s residential college system builds close-knit communities and lifelong friendships. Located on a 300acre forested campus in the nation\’s fourth largest city, Rice is just minutes from downtown Houston, the Museum District and the world\’s largest medical center.',
        tuition: 51107,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'Georgetown University',
        city: 'Washington D.C',
        state: 'Washington D.C',
        description: 'Georgetown University is situated overlooking the Potomac River just a few minutes from downtown Washington. There are numerous traditional residence halls, and freshmen, sophomores and juniors are required to live on campus. Other students choose to live in the townhouses and apartments surrounding campus. Student organizations on campus include religious groups, media outlets and student government. The Georgetown Hoyas are part of the NCAA\’s Division I and are well known for their dominant men\’s basketball team, which maintains a fierce rivalry with Syracuse University and plays most home games at Capital One Arena, also home to the Washington Wizards. The popular chant "hoya saxa," a mix of ancient Greek and Latin that means "what rocks," gained prominence in 1920 and \– contrary to popular belief \– has nothing to do with Georgetown\’s mascot, Jack the Bulldog.',
        tuition: 57928,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'University of Louisville',
        city: 'Louisville',
        state: 'Kentucky',
        description: 'The university has roots dating back to 1798, and it was the first city-owned public university in the United States. The university consists of 12 schools and colleges, which include: College of Arts and Sciences, College of Business, J. B. Speed School of Engineering, School of Dentistry, and the School of Medicine. The university has three campuses in the Louisville area \– the Belknap, the Health Science, and the Shelby \– yet it also has an International Campus in Panama, as well as various satellite facilities in the state of Kentucky. On its main campus, there is an art museum, planetarium and Auguste Rodin\'s original sculpture of The Thinker for students to visit and enjoy. Moreover, in the city of Louisville, UofL students can go to the zoo, the Kentucky Shakespeare Festival or the famous Kentucky Derby horse race. The university has a strong media presence on campus with a student produced radio station called WLCV, which was founded back in 1968. There is also an independent student-run weekly newspaper \– The Louisville Cardinal \– that was founded in 1926, and has maintained financial and editorial independence since 1980. Athletic teams at the university are called the Louisville Cardinals or the Cards and participate in the Atlantic Coast Conference. Sports on offer for students to participate in include: baseball, basketball, rowing, cross country, football, track and field, soccer, tennis and golf.',
        tuition: 28508,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'University of South Florida',
        city: 'Tampa',
        state: 'Florida',
        description: 'The University of South Florida, or USF, as it\’s commonly known, is a research institution with multiple campuses throughout the state. The public university is based in Tampa and has regional campuses in Sarasota and St. Petersburg. First-year students are required to live on campus, unless they commute from one of several nearby counties, are older than 21 or are married, among other exemptions. For students who do not live on campus, the school organizes a Commuter Student Network and offers bus transportation for students who drive to school and park in remote lots. On campus, there are more than 400 student organizations to check out, as well as a large Greek community. Any activity that students get involved in may be added to their co-curricular transcripts \– official documents the school offers to help students showcase their extracurricular involvement and specialized skills to future employers. The USF Bulls athletic teams compete in the NCAA Division I American Athletic Conference.',
        tuition: 17324,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'University of Georgia',
        city: 'Athens',
        state: 'Georgia',
        description: 'At its founding, The University of Georgia made history as the first public, state-supported college in America. These days, the school is known for its vibrant student community. UGA\’s college town of Athens was rated among the best college towns in the country by U.S. News, and the competitive Bulldogs sports teams compete in the NCAA Division I Southeastern Conference. There are more than 700 student clubs and organizations, including more than 60 Greek chapters that involve around 25% of UGA students. Community service is a particularly big focus, with student-run philanthropies such as UGA Miracle, a yearlong fundraiser and 24-hour Dance Marathon for Children\’s Healthcare of Atlanta. First-year students must live on campus, but Atlanta is 60 miles away for those itching for a road trip.',
        tuition: 31120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Texas A&M University',
        city: 'College Station',
        state: 'Texas',
        description: 'The first public institution of higher education in Texas, the school opened for classes on October 4, 1876, as the Agricultural and Mechanical College of Texas (A.M.C.) under the provisions of the 1862 Morrill Land-Grant Act. It is classified by the Carnegie Classification of Institutions of Higher Education among "R1: Doctoral Universities \– Very high research activity" as of 2021. Over the following decades, the school increased in size and scope, expanding to its largest enrollment during WWII before its first significant stagnation in enrollment post-war. Enrollment expanded again in the 1960s under the leadership of President James Earl Rudder. During his tenure, the school desegregated, became coeducational, and dropped the requirement for participation in the Corps of Cadets. To reflect the institution\'s expanded roles and academic offerings, the Texas Legislature renamed the school to Texas A&M University in 1963. The letters "A&M", originally A.M.C. and short for "Agricultural and Mechanical College", are retained as a tribute to the university\'s former designation.',
        tuition: 39340,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Campuses', null, {});

  }
};
