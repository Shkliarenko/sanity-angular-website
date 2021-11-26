export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'Shkliarenko/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a0c016422a82698636e6a6',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-fu28kexh',
                  apiId: 'f59ba41b-0e84-4a27-858d-9312087c508d'
                },
                {
                  buildHookId: '61a0c016254a8584950437ac',
                  title: 'Website',
                  name: 'sanity-angular-website-web-tpkqg5q5',
                  apiId: '2a3420ad-a712-4733-ae01-039363a10c16'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Shkliarenko/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-tpkqg5q5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
