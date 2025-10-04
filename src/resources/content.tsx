import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mohsin Murtaza",
  lastName: "Siddiqui",
  name: `Mohsin Murtaza Siddiqui`,
  role: "Software Engineer", 
  avatar: "/images/avatar.jpg",
  email: "mohsinsiddiqui1905@gmail.com",
  location: "Australia/Sydney", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/msid8535",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mohsinsiddiqui10/",
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://x.com/semicolon404",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mohsin Murtaza Siddiqui</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Sono</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm Mohsin, a software engineer studying at the University of Sydney.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com/mohsin-siddiqui",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mohsin is a Sydney-based software engineer with a passion for building technological tools to help better the world.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "RDA Group",
        timeframe: "January 2025 - April 2025",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Developed and integrated RESTful APIs and backend services using Node.js, 
            with efficient data handling and storage powered by PostgreSQL (Supabase). 
          </>,
          <>
            Utilised TypeScript and JavaScript within the Next.js framework to enhance 
            performance and maintainability.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //{
          //  src: "/images/projects/project-01/siri_updated.jpg",
          //  alt: "Once UI Project",
          //  width: 16,
          //  height: 9,
          //},
        ],
      },
      {
        company: "Sydney Interplanetary Rover Initiative",
        timeframe: "July 2025 - Present",
        role: "Machine Learning Specialist",
        achievements: [
          <>
            Currently working on Deep Learning models to accelerate the detection of 
            water and ilmenite concentrations in lunar regolith samples.  
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //{
            //src: "/images/projects/project-01/siri_updated.jpg",
            //alt: "Once UI Project",
            //width: 16,
            //height: 9,
          //},
        ],
      },
      {
        company: "Sydney UAV Engineering",
        timeframe: "June 2024 - Present",
        role: "Full Stack Software Engineer",
        achievements: [
          <>
            Developed, designed and implemented the SUAVE website, accommodating for over 2,350 monthly users.
          </>,
          <>
            Iterated and refined the website through consistent feedback from the team lead, achieving a 17%
            improvement in accessibility metrics and delivering a user-centric experience.
          </>,
          <>
            Worked directly with a three person team of technical and non-technical members, eﬀectively bridging the
            gap between complex technical concepts and business needs to drive successful project outcomes.
          </>,
        ],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/suave_expanded.jpg",
        //     alt: "Once UI Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Sydney", 
        description: <>Bachelor of Engineering (Software) (Honours).</>,
        coursework: <>Coursework: Object Oriented Programming, Algorithm Design, Data Structures & Algorithms, Machine
                      Learning & AI, Data Science, Security Engineering, Data Management, Web Systems, Systems Programming.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full-stack development", 
        description: (
          <>Developed full-stack applications in TypeScript, JavaScript, Next.js, Node.js and PostgreSQL</>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          //{
          //  src: "/images/projects/project-01/cover-02.jpg",
          //  alt: "Project image",
          //  width: 16,
          //  height: 9,
          //},
        ],
      },
      {
        title: "Data Science",
        description: (
          <>Worked with SQL databases to deduce actionable insights tailored to building companies & home-buyers to make more informed decisions. </>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: []
      },  
      {
        title: "Machine Learning",
        description: (
          <>Developed Machine Learning and Deep Learning models, including Convolutional Neural Networks.</>
        ),
        tags: [
          {
            name: "Machine Learning",
            icon: "ai",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: []
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
