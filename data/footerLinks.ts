export interface FooterLink {
  name: string;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterColumn[] = [
  {
    title: 'title 1',
    links: [
      {
        name: 'name 1',
        url: '/articles/url1',
      },
      {
        name: 'name 2',
        url: '/articles/url2',
      },
      {
        name: 'name 3',
        url: '/articles/url3',
      },
    ],
  },
  {
    title: 'title 2',
    links: [
      { name: 'name 1', url: '/#' },
      { name: 'name 2', url: '/#' },
    ],
  },
];
