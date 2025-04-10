//// This is the data for the hero section
import profilePicture from '@/assets/me.jpg'
export const heroBlurb = {
  profilePicture: profilePicture,
  paragraphs: [
    'I am a robotics researcher focused on representations to enable safety ' +
    'for robots in order to bring autonomous robots into daily human life.'
    ,
    'I received my MS in Robotics from the Robotics Institute at the University ' +
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

export const projectsLists: ProjectsList[] = [
  {
    title: 'Contributions',
    items: [
    {
      image: sevaImage,
      title: 'SEVA: Socio-Ecological Visual Analytics',
      info: 'Fall 2018 @ RPI CASE (Center for Architecture Science and Ecology)',
      description: 'Contributed to the data visualization and analysis code as part of the frontend team.',
      link: 'https://www.cea.yale.edu/research-frameworks/seva',
    },
  ]},
  {
    title: 'Select Projects',
    disabled: true,
    items: [
    {
      // image: sevaImage,
      title: 'SEVA: Socio-Ecological Visual Analytics',
      // info: 'Fall 2018 @ RPI CASE (Center for Architecture Science and Ecology)',
      description: 'Contributed to the data visualization and analysis code as part of the frontend team.',
      link: 'https://www.cea.yale.edu/research-frameworks/seva',
    },
  ]},
];
