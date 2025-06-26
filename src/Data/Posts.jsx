export const Posts = [
  {
    id: crypto.randomUUID(),
    userId: 'user-1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: `${process.env.PUBLIC_URL}/Assets/Posts/post5.jpg`,
    likes: ['user-2', 'user-3'],
    comments: [
      {
        id: crypto.randomUUID(),
        userId: 'user-2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2025-06-25T18:20:00Z',
      },
    ],
    createdAt: '2025-06-25T16:45:00Z',
  },
  {
    id: crypto.randomUUID(),
    userId: 'user-2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: '',
    likes: [],
    comments: [],
    createdAt: '2025-06-24T10:30:00Z',
  },
   {
    id: crypto.randomUUID(),
    userId: 'user-8',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: `${process.env.PUBLIC_URL}/Assets/Posts/post4.jpg`,
    likes: ['user-5', 'user-6', 'user-7'],
    comments: [
      {
        id: crypto.randomUUID(),
        userId: 'user-4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2025-06-25T19:20:00Z',
      },
      {
        id: crypto.randomUUID(),
        userId: 'user-5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2025-06-25T18:55:00Z',
      },
    ],
    createdAt: '2025-06-25T16:45:00Z',
  },
  {
    id: crypto.randomUUID(),
    userId: 'user-5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: `${process.env.PUBLIC_URL}/Assets/Posts/post6.jpg`,
    likes: ['user-3', 'user-2', 'user-8'],
    comments: [
      {
        id: crypto.randomUUID(),
        userId: 'user-2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2025-06-25T21:23:00Z',
      },
      {
        id: crypto.randomUUID(),
        userId: 'user-5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2025-06-25T18:15:00Z',
      },
    ],
    createdAt: '2025-06-25T17:45:00Z',
  },
];
