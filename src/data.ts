//// This is the data for the hero section
import profilePicture from '@/assets/me.jpg'
export const heroBlurb = {
  profilePicture: profilePicture,
  paragraphs: [
    'I am a robotics researcher focused on representations to enable safety ' +
    'for robots in order to bring autonomous robots into everyday life.'
    ,
    'I received my MS in Robotics from the Department of Robotics at the University ' +
    'of Michigan, where I was a member of ROAHM Lab supervised by Prof. Ram Vasudevan. ' +
    'I also hold a BS in Electrical Engineering and Mechanical Engineering from ' +
    'Rensselaer Polytechnic Institute.'
    ,
    // 'Separetely, I am interested in the emerging technologies that are likely to define ' +
    // 'our lives in the future, which I believe exist in some intersection between robotics, ' +
    // 'deep learning / AI, and XR.' +
    // 'This belief informs my greater professional interests.'
    // ,
  ]
}

//// This is the data for any social links
import { type Socials } from '@/types'

export const socials: Socials[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/BuildingAtom/',
    icon: '<i class="bi bi-github"></i>', // Find this from Bootstrap Icons or Academic Icons
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/buildingatom/',
    icon: '<i class="bi bi-linkedin"></i>',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=u4C26fsAAAAJ',
    icon: '<i class="ai ai-google-scholar ai-lg"></i>', // Always use the ai-lg class for Academic Icons
  },
];

//// This is the data for the research works
import { type ResearchInfo } from '@/types';
import splanningImage from '@/assets/splanning.png'
import sparrowsImage from '@/assets/sparrows.jpg'
import selmapImage from '@/assets/sel_map.png'

export const research: ResearchInfo[] = [
  {
    image: splanningImage,
    title: 'Let\'s Make a Splan: Risk-Aware Trajectory Optimization in a Normalized Gaussian Splat',
    authors: [
      'Jonathan Michaux*',
      'Seth Isaacson*',
      'Challen Enninful Adu',
      'Adam Li',
      'Rahul Kashyap Swayampakula',
      'Parker Ewen',
      'Sean Rice',
      'Katherine A. Skinner',
      'Ram Vasudevan',
    ],
    journal: 'IEEE Transactions on Robotics (IEEE T-RO)',
    time: '2025',
    link: 'https://roahmlab.github.io/splanning/',
    review: true,
  },
  {
    image: sparrowsImage,
    title: 'Safe Planning for Articulated Robots Using Reachability-based Obstacle Avoidance With Spheres',
    authors: [
      'Jonathan Michaux',
      'Adam Li',
      'Qingyi Chen',
      'Che Chen',
      'Ram Vasudevan',
    ],
    journal: 'Proceedings of Robotics: Science and Systems (RSS)',
    time: '2024',
    link: 'https://roahmlab.github.io/sparrows/',
  },
  {
    image: selmapImage,
    title: 'These Maps are Made for Walking: Real-Time Terrain Property Estimation for Mobile Robots',
    authors: [
      'Parker Ewen',
      'Adam Li',
      'Yuxin Chen',
      'Steven Hong',
      'Ram Vasudevan',
    ],
    journal: 'IEEE Robotics and Automation Letters (IEEE RA-L)',
    time: '2022',
    link: 'https://roahmlab.github.io/sel_map/',
  },
];

//// This is the data for the projects
import { type ProjectsList } from '@/types';
import sevaImage from '@/assets/seva.jpeg'
import zonopyImage from '@/assets/zonopy.webp'
import marlImage from '@/assets/marl.webp'
import ddpgFetchImage from '@/assets/ddpg_fetch.webp'

export const projectsLists: ProjectsList[] = [
  {
    title: 'Contributor',
    items: [
    {
      image: zonopyImage,
      dontOptimizeImage: true,
      title: 'Zonopy and zonopy-robots',
      info: 'A Python library for reachable set computation',
      description:
        'Zonopy enables the computation of continuous sets (intervals, zonotops, and polynomial zonotopes), and '+
        'zonopy-robots introduces method extensions and algorithms for robotics. As one of the primary contributors, I\'ve ' +
        'continued to expand on and improve these libraries for usability and performance.',
      link: 'https://roahmlab.github.io/zonopy-robots/',
    },
    {
      image: sevaImage,
      title: 'SEVA: Socio-Ecological Visual Analytics',
      info: 'A data and knowledge management framework with a dynamic dashboard for big data analysis.',
      description: 'I was part of the frontend team at the Center for Architecture Science and Ecology (CASE) at Rensselaer in 2018, where I implemented UI and UX elements and helped migrate data visualization and analysis code away from unmaintained libraries.',
      link: 'https://www.cea.yale.edu/research-frameworks/seva',
    },
  ]},
  {
    title: 'Select Projects',
    items: [
    {
      image: marlImage,
      dontOptimizeImage: true,
      title: 'Multi-Agent Reinforcement Learning to Solve Collaborative Escape-Room Style Tasks',
      info: 'Will agents learn to communicate and escape from a simplified escape-room style game?',
      description: 'For our final project for EECS692 Advanced AI at Michigan, we developed a simplified model for escape-room style tasks, ' +
        'and implemented it as an environment to perform multi-agent reinforcement learning. Puzzle rooms are chained together to create a larger escape-room style task. ',
      link: 'https://github.com/lattimer7/EECS692Final',
    },
    {
      image: ddpgFetchImage,
      dontOptimizeImage: true,
      title: 'Reinforcement Learning using DDPG for Robotic Grasping',
      info: 'Exploring reward shaping, DDPG, and RL for manipulation',
      description: 'For our final project for EECS545 Machine Learning, we implemented Lilicrap et al.\'s Deep Deterministic Policy Gradient algorithm' +
        'to train a robotic manipulator to grasp in a custom OpenAI Gym environment. The goal was to grasp a block on the table without moving it and reward shaping was ' +
        'employed to learn this. Through the inclusion of regularization, we demonstrated superior results over the baseline implementation. ',
      link: 'https://github.com/lattimer7/EECS692Final',
    },
    {
      title: 'CleanTwrpTar',
      info: 'Basic C program written to recover my corrupted phone backups',
      description: 'Back in 2017, I was restoring my phone from a TWRP nandroid backup, and discovered that all of my backups were corrupted. '+
        'After inspection, it turned out that one of the other standard streams used for verbose logging occasionally output to the tarfile. ' +
        'This program was written to remove strings inserted between the 512 byte data blocks boundaries where these logging strings were inserted. ' +
        'A friend and I wrote separate solutions to this problem, and we have saved countless others\' backups as as result.',
      link: 'https://github.com/BuildingAtom/CleanTwrpTar',
    },
  ]},
];
