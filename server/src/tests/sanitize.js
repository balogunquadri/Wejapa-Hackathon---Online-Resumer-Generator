/**
 * @flow
 */

import { sanitize } from '../middleware/sanitizer'

describe('sanitizer', () => {
  it('should remove excess whitespace', () => {
    const input = {
      basics: {
        name: '               balogun        Quadri',
        email: '    balogun@gmail.com.com         ',
        phone: '       555     ',
        location: {
          address: '            Metuchen,    NJ'
        },
        website: 'github.com/balogunquadri   '
      }
    }

    const expected = {
      basics: {
        name: 'balogun Quadri',
        email: 'balogun@gmail.com.com',
        phone: '555',
        location: {
          address: 'Metuchen, NJ'
        },
        website: 'github.com/balogunquadri'
      }
    }

    const actual = sanitize(input)

    expect(actual).toEqual(expected)
  })

  it('should normalize LaTeX symbols', () => {
    const input = {
      work: [
        {
          company: 'Johnson & Johnson'
        },
        {
          company: 'LaTeX Symbols: {\\^~_%$&#}'
        }
      ]
    }

    const expected = {
      work: [
        {
          company: 'Johnson \\& Johnson'
        },
        {
          company:
            'LaTeX Symbols: \\{\\textbackslash{}\\textasciicircum{}\\textasciitilde{}\\_\\%\\$\\&\\#\\}'
        }
      ]
    }

    const actual = sanitize(input)

    expect(actual).toEqual(expected)
  })

  it('should recursively sanitize the entire object by removing falsy/empty values', () => {
    const input = {
      selectedTemplate: NaN,
      headings: {
        work: '',
        education: '',
        skills: '',
        projects: '',
        awards: ''
      },
      basics: {
        name: 'balogun Quadri',
        email: 'balogun@gmail.com.com',
        phone: '',
        location: {
          address: 'Metuchen, NJ'
        },
        website: 'github.com/balogunquadri'
      },
      education: [
        {
          institution: 'Rutgers University',
          location: 'New Brunswick, NJ',
          studyType: null,
          area: 'Computer Science',
          startDate: 'Sep 2015',
          endDate: 'Jan 2019'
        }
      ],
      work: [
        {},
        null,
        {
          highlights: [
            'Wrote an API that allowed CRUD operations to be used for accessing and manipulating data involving current departments/groups/teams at IEEE.',
            'Created a UI for admins that used the aforementioned API to automate the process of syncing departments/groups/teams on the site to relevant databases.',
            'Improved the IEEE Innovate site by using cookies to display tailored web-content.'
          ],
          company: 'IEEE',
          position: 'Software Developer Intern',
          location: 'Piscataway, NJ',
          startDate: 'Jun 2015',
          endDate: 'Nov 2015'
        }
      ],
      skills: [
        {
          keywords: [null],
          name: ''
        },
        {
          keywords: [null, undefined, NaN],
          name: ''
        }
      ],
      projects: [
        {
          keywords: ['Node.js', 'Koa', 'React', 'Redux'],
          name: null,
          description: '',
          url: 'favresume.io'
        },
        {
          keywords: ['Node.js', 'Koa', 'React', 'Redux'],
          name: null,
          description:
            'A modern speedcubing app with a scrambler, timer, and analyzer for cubing statistics.',
          url: 'github.com/balogunquadri/zencuber'
        },
        {
          keywords: [undefined],
          name: 'Invoice Generator',
          description: null,
          url: 'goo.gl/7ZjqOT'
        },
        {
          keywords: ['Python'],
          name: 'Materialize',
          description:
            'A collection of custom themes for Sublime Text, inspired by Material design with 70k+ installations.',
          url: 'packagecontrol.io/packages/Materialize'
        }
      ],
      awards: [
        {
          title: null,
          date: 'May 2015',
          awarder: 'HackNY',
          summary: ''
        }
      ],
      sections: [
        'templates',
        'profile',
        'education',
        'work',
        'skills',
        'projects',
        'awards'
      ]
    }

    const expected = {
      basics: {
        name: 'balogun Quadri',
        email: 'balogun@gmail.com.com',
        location: {
          address: 'Metuchen, NJ'
        },
        website: 'github.com/balogunquadri'
      },
      education: [
        {
          institution: 'Rutgers University',
          location: 'New Brunswick, NJ',
          area: 'Computer Science',
          startDate: 'Sep 2015',
          endDate: 'Jan 2019'
        }
      ],
      work: [
        {
          highlights: [
            'Wrote an API that allowed CRUD operations to be used for accessing and manipulating data involving current departments/groups/teams at IEEE.',
            'Created a UI for admins that used the aforementioned API to automate the process of syncing departments/groups/teams on the site to relevant databases.',
            'Improved the IEEE Innovate site by using cookies to display tailored web-content.'
          ],
          company: 'IEEE',
          position: 'Software Developer Intern',
          location: 'Piscataway, NJ',
          startDate: 'Jun 2015',
          endDate: 'Nov 2015'
        }
      ],
      projects: [
        {
          keywords: ['Node.js', 'Koa', 'React', 'Redux'],
          url: 'favresume.io'
        },
        {
          keywords: ['Node.js', 'Koa', 'React', 'Redux'],
          description:
            'A modern speedcubing app with a scrambler, timer, and analyzer for cubing statistics.',
          url: 'github.com/balogunquadri/zencuber'
        },
        {
          name: 'Invoice Generator',
          url: 'goo.gl/7ZjqOT'
        },
        {
          keywords: ['Python'],
          name: 'Materialize',
          description:
            'A collection of custom themes for Sublime Text, inspired by Material design with 70k+ installations.',
          url: 'packagecontrol.io/packages/Materialize'
        }
      ],
      awards: [
        {
          date: 'May 2015',
          awarder: 'HackNY'
        }
      ],
      sections: [
        'templates',
        'profile',
        'education',
        'work',
        'skills',
        'projects',
        'awards'
      ]
    }

    const actual = sanitize(input)

    expect(actual).toEqual(expected)
  })
})
