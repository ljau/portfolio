export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Inventory Management App',
    description:
      'Mobile application built with React Native and Firebase for managing inventory in real time.',
    stack: ['React Native', 'Firebase', 'Expo', 'TypeScript'],
    github: 'https://github.com/youruser/inventory-app',
  },
  {
    id: '2',
    title: 'Personal Finance Tracker',
    description:
      'Mobile application to track incomes and expenses with authentication and charts.',
    stack: ['React Native', 'Firebase', 'Expo', 'TypeScript'],
    demo: 'https://your-demo.vercel.app',
  },
  {
    id: '3',
    title: 'Interestelar',
    description:
      'Mobile application for Interestelar coffee shop with authentication and loyverse integration.',
    stack: ['React Native', 'Firebase', 'Expo', 'TypeScript', 'Loyverse'],
    demo: 'https://your-demo.vercel.app',
  },
];
