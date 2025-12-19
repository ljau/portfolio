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
      stack: ['React Native', 'Firebase', 'Expo'],
      github: 'https://github.com/youruser/inventory-app',
    },
    {
      id: '2',
      title: 'Personal Finance Tracker',
      description:
        'Web application to track incomes and expenses with authentication and charts.',
      stack: ['Next.js', 'TypeScript', 'Styled Components'],
      demo: 'https://your-demo.vercel.app',
    },
  ];
  