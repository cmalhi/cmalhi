import registerServiceWorker from './registerServiceWorker';
import React from "react";
import ReactDOM from "react-dom";
import Resume from 'react-awesome-resume'
import 'semantic-ui-css/semantic.min.css';
const myJSONResume = {
  basics: {
    name: 'Chetanpreet Malhi',
    label: 'Software Engineer',
    picture: 'https://avatars2.githubusercontent.com/u/25763426?s=400&u=0d24d5ebb7adb76815c9008467b3d7798b4a9dc5&v=4',
    email: 'chemalhi@gmail.com',
    phone: '1 (929) 374-3122',
    // website: 'http://github.com/cmalhi',
    summary: '"Simplicity is prerequisite for reliability."',
    location: {
      address: '2712 Broadway St',
      postalCode: '94115',
      city: 'San Francisco',
      countryCode: 'USA',
      region: 'California',
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'cmalhi',
        url: 'https://www.github.com.com/cmalhi',
      },
      {
        network: 'Linkedin',
        username: 'cmalhi',
        url: 'https://linkedin.com/in/cmalhi',
      },
      {
        network: 'Facebook',
        username: 'erlichbachman',
        url: 'https://www.facebook.com/erlich.bachman.144181',
      },
    ],
  },
  // work: [
  //   {
  //     company: 'Pied Piper',
  //     position: 'CEO',
  //     website: 'http://piedpiper.com',
  //     startDate: '2013-01-01',
  //     endDate: '2014-01-01',
  //     summary: 'Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.',
  //     highlights: ['Started the company', 'killed it'],
  //   },
  //   {
  //     company: 'Pied Piper',
  //     position: 'CEO',
  //     website: 'http://piedpiper.com',
  //     startDate: '2013-01-01',
  //     endDate: '2014-01-01',
  //     summary: 'Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.',
  //     highlights: ['Started the company', 'killed it'],
  //   },
  //   {
  //     company: 'Pied Piper',
  //     position: 'CEO',
  //     website: 'http://piedpiper.com',
  //     startDate: '2013-01-01',
  //     endDate: '2014-01-01',
  //     summary: 'Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.',
  //     highlights: ['Started the company', 'killed it'],
  //   },
  // ],
  volunteer: [
    {
      organization: 'SEVA',
      position: 'Organizer',
      website: 'https://www.facebook.com/SEVA-NYC-1869132933305981/',
      startDate: '2012-03',
      endDate: '(active member)',
      summary: 'Helped organize events to empower immigrant communities in New York',
      highlights: ['Volunteer at Annual Sikh Day Parade', 'Organized Charity Events', 'Health Fair'],
    },
    {
      organization: 'CSTEP',
      position: 'Mentor',
      website: 'http://cmalhi.com/',
      startDate: '01/2017',
      endDate: '05/2017',
      summary: 'Aviatio (until its disbandment) was responsible for organizing a daily lunch for homeless employees',
      highlights: [
        'Organizer of the month (2008-05)',
        'Volunteer of the month (2008-05)',
        'Chef of the month (2008-05)',
        'Customer of the month (2008-06)',
      ],
    },
  ],
  education: [
    {
      institution: 'SUNY Farmingdale State College',
      area: 'Electrical and Computer Engineering Tech.',
      studyType: 'B.S. in Computer Science (Dual Major)',
      startDate: '08/2014',
      endDate: '05/2017',
      gpa: '3.7',
      courses: [
        'BCS 370 - Data Structures C++',
        'EET 441 - CISCO Networking',
        'EET 418 - Assembly Language',
      ],
    },
    {
      institution: 'Hack Reactor',
      area: 'Software Development',
      studyType: 'JavaScript Immersive',
      startDate: '06/2017',
      endDate: '09/2017',
      gpa: 'N/A',
      courses: [
        'DB1101 - Basic SQL',
        'JS 087 - Javascript Fundamentals',
        'CS 095 - Advanced HTML',
      ],
    },
  ],
  awards: [
    {
      title: "Dean's List",
      date: '8/2014 - 5/2017',
      awarder: 'Maharaja Shahrabi, Dean of Engineering',
      summary: "Dean's list every semester at Farmingdale",
    },
    {
      title: 'CSTEP Research Conference 2016',
      date: '4/2016',
      awarder: 'CSTEP',
      summary: 'First place at annual CSTEP Research Conference, presented \"Smart Car Seat\"',
    },
  ],
  // publications: [
  //   {
  //     name: 'Is Erlich Bachman the Dumbest Man in Tech',
  //     publisher: 'Coderag',
  //     releaseDate: '2016-06-22',
  //     website: 'http://www.coderag.com/is-erlich-bachman-the-dumbest-man-in-tech/',
  //     summary: 'CJ Cantwells feature of Erlich Bachman',
  //   },
  //   {
  //     name: 'How Will Silicon Valley Kill Off Erlich Bachman',
  //     publisher: 'Vulture',
  //     releaseDate: '2017-05-31',
  //     website: 'http://www.vulture.com/2017/05/silicon-valley-erlich-bachman-tj-miller.html',
  //     summary: '',
  //   },
  // ],
  skills: [
    {
      name: 'JavaScript',
      level: '90',
      keywords: ['knowledge of core JavaScript functionality'],
    },
    {
      name: 'Data Structures',
      level: '80',
      keywords: ['9 * F = fleventy-five'],
    },
    {
      name: 'HTML/CSS',
      level: '80',
      keywords: ['HTML', 'CSS'],
    },
    {
      name: 'React',
      level: '90',
      keywords: [
        'React', 'Redux', 'React Router V4', 'life cycle methods', 'webpack',
      ],
    },
    {
      name: 'Style',
      level: '85',
      keywords: [
        'Fashionable', 'Amazing beard', 'Unique CSS styling',
      ],
    },
    {
      name: 'Node',
      level: '65',
      keywords: [
        'Aggressive: Aggressive negotiation is they key to getting what you want',
      ],
    },
    {
      name: 'Making Mistakes',
      level: '30',
      keywords: ['1993: I made a mistake by thinking that I made a mistake'],
    },
    {
      name: 'Being Lame',
      level: '15',
      keywords: [
        'Jian Yang: This only happens when listening to his recipe for octupu',
      ],
    },
    {
      name: 'Losing',
      level: '5',
      keywords: ['Kickball: I lost a kickball game once in elementary school'],
    },
  ],
  languages: [
    {
      name: 'English',
      level: 'Native speaker',
    },
    {
      name: 'Punjabi',
      level: 'Veteran',
    },
    {
      name: 'Hindi',
      level: 'Spoken',
    },
    {
      name: 'Urdu',
      level: 'Spoken',
    },
    {
      name: 'Spanish',
      level: 'Intermediate',
    },
  ],
  interests: [
    {
      name: 'Wildlife',
      keywords: [
        'Ferrets: More of a hatred than an interest, ferrets are  detrimental to society and any neighbors who would dare to keep them among people are evil',
        'California Varmint Laws: California penal code says that is is illegal to keep ferrets',
      ],
    },
    {
      name: 'Bodybuilding',
      keywords: [
        'Focus: Mind muscle connection',
        'Dicipline: Must resist cheat day',
      ],
    },
  ],
  // references: [
  //   {
  //     name: 'Jian Yang',
  //     reference: "I do not respect you. You're not any kind of investor, you own nothing",
  //   },
  //   {
  //     name: 'Jian Yang',
  //     reference: "Erlich Bachman...This is you as and old man. I'm ugly and I'm dead. Alone",
  //   },
  //   {
  //     name: 'CJ Cantwell',
  //     reference: 'Bachman recently founded venture capital firm Bachmanity Capital with tech icon (soon to be legend, I’m sure) Nelson “Big Head” Bighetti, and the pair hosted a lavish launch event, aptly titled “Bachmanity Insanity.” The party, like Bachman, was loud, extravagant and a bit of a farce. It was a luau. At Alcatraz. One for which Bachman chose to pay for all liquor at retail cost, and one where he lost a giant fiberglass Tiki head at the bottom of the bay. The expenses for fire dancers, flair bartenders and exotic caterers totaled over $1 million. Bachman maintains these were “practical costs for any groundbreaking business.”',
  //   },
  //   {
  //     name: 'CJ Cantwell',
  //     reference: 'Bachmanity burned too bright, like the custom lighting at its luau and, like that lighting, the bulb burned out.',
  //   },
  // ],
};
 
ReactDOM.render(
  <Resume jsonResume={myJSONResume} theme="default" />,
  document.getElementById("root")
);
registerServiceWorker();

