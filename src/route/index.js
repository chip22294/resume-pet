// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Eugene',
    lastname: 'Nechiporuk',
  },
  position: 'Junior Fullstack JS Developer',
  sallary: '600$ в місяц',
  address: 'Solomyanska sq. 7, Kyiv, Ukraine',
}

var footer = {
  social: {
    email: {
      text: 'chip@example.com',
      href: 'mailto:chip@example.com',
    },
    phone: {
      text: '+380977541536',
      href: 'tel:+380977541536',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chip22294/',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: { name: 'Summary', big: true },
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
          work on a new project I learn the domain and try to understand the idea of the project. Good team
          player, every colleague is a friend to me.`,
      },
      otherexp: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
            tournament position, goals etc), analyzing by simple mathematics models and preparing probability
            for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: { name: 'Skills', big: true },
    },

    header,

    main: {
      skills: [
        {
          name: 'IT Management',
          point: 9,
          isTop: true,
        },
        {
          name: 'Databases',
          point: 6,
        },
        {
          name: 'Web Development',
          point: 6,
        },
        {
          name: 'Customer Relationship Management (CRM)',
          point: 7,
        },
        {
          name: 'Technical Documentation',
          point: 9,
          isTop: true,
        },
        {
          name: 'IT Outsourcing',
          point: 10,
        },
        {
          name: 'Electrical Engineering',
          point: 8,
        },
        {
          name: 'Instalation',
          point: 10,
          isTop: true,
        },
        {
          name: 'PHP Applications',
          point: 10,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
        },
      ],
      hobbies: [
        { name: 'Programming', isMain: true },
        { name: 'Blogging', isMain: true },
        { name: 'Humor', isMain: false },
        { name: 'Macro photography', isMain: false },
        { name: 'Making electronics', isMain: false },
        { name: 'Watching movies', isMain: false },
        { name: 'Landscape photography', isMain: true },
        { name: 'Listening to music', isMain: false },
        { name: 'Reading', isMain: false },
      ],
    },

    footer,
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: { name: 'Education', big: true },
    },

    header,

    main: {
      educations: [
        { name: 'NPU im. Dragomanova', isEnd: true },
        { name: 'School #250', isEnd: true },
        { name: 'IT-Brains', isEnd: false },
      ],

      certificates: [
        {
          name: 'Secondary education certificate',
          id: 124535,
        },
        {
          name: 'Diploma of higher pedagogical education',
          id: 845743,
        },
        {
          name: '5th grade electricians license',
          id: 984375,
        },
      ],
    },

    footer,
  })
})
// ================================================================

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'bigpage',

    page: {
      title: { name: 'Work', big: true },
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: '22.03.2023',
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'http://localhost:3000/work',
              about: 'Some information about project',
              stackAmount: 3,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'My award 1',
                },
                {
                  name: 'My award 2',
                },
              ],
            },
          ],
        },
        {
          position: 'Installer',
          company: {
            name: 'Lanet',
          },
          duration: {
            from: '16.02.2020',
          },
          projectAmount: 0,
        },
      ],
    },

    footer,
  })
})

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
