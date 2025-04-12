export interface CoreSettings {
  // Site settings
  site: string,
  basepath: string,
  // Personal settings
  name: string,
  username: string,
  // Theme settings
  lightModeTheme: string,
  darkModeTheme: string,
  defaultTheme: string,
  // SEO settings
  title: string,
  description?: string,
  image?: string,
}

export interface ResearchInfo {
  image: ImageMetadata;
  dontOptimizeImage?: boolean,
  title: string,
  journal: string,
  time: string,
  link: string,
  authors: string[],
  review?: boolean,
  disabled?: boolean,
};

export interface ProjectInfo {
  image?: ImageMetadata,
  dontOptimizeImage?: boolean,
  title: string,
  info?: string,
  description: string,
  link: string,
  disabled?: boolean,
};

export interface ProjectsList {
  title: string,
  disabled?: boolean,
  items: ProjectInfo[],
};

export interface Socials {
  label: string,
  href: string,
  icon: string,
};