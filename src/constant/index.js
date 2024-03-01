const projects = [
  {
    url: "movieapp",
    name: "Movie App",
    description:
      "This movie application is a comprehensive platform designed to enhance the movie-watching experience for users. Built on the MERN stack, it leverages MongoDB for database management, Express.js for backend API construction, React for a dynamic frontend, and Node.js as the runtime environment. It integrates The MovieDB API for accessing a wide range of movie data. Key features include a landing page, home page, detailed movie information, a favorites system, and user comment functionality. The application ensures secure user authentication via JWT and employs Redux Toolkit for state management, making the user experience smooth and responsive.",
    tags: [
      {
        name: "React",
      },
      {
        name: "MERN",
      },
      {
        name: "Redux",
      },
    ],
    images: [
      "/images/movieapp/login.png",
      "/images/movieapp/register.png",
      "/images/movieapp/home.png",
      "/images/movieapp/details.png",
      "/images/movieapp/favorite.png",
      "/images/movieapp/comment.png",
    ],
    source_code_link: "https://github.com/synnielxy/Movie-App",
    year: 2023
  },
  {
    url: "weatherapp",
    name: "Weather App",
    description:
      "Responsive Weather Dashboard Application based on Next.js, leveraging its server-side rendering and static generation capabilities to enhance user experience. The application integrates third-party APIs from OpenWeather to dynamically retrieve and present weather data. It features a highly responsive and interactive user interface, achieved through the use of Tailwind CSS and React-icons. TypeScript was employed to enforce strong typing and efficient error handling, significantly improving the reliability and maintainability of the code. This approach ensured that the application delivered real-time weather updates in a user-friendly manner, with a focus on performance and usability.",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    images: [
      "/images/weatherapp/1.png",
      "/images/weatherapp/2.png",
      "/images/weatherapp/3.png",
    ],
    link: "https://weather-app-2-wine.vercel.app/",
    year: 2023
  },
  
  {
    url: "movieswiper",
    name: "Movie Swiper",
    description:
      "This interactive web application allows users to explore and select movies based on their preferences with a simple swipe gesture. It's designed using modern web technologies that likely ensure a seamless and engaging user experience. The application's interface is intuitive, allowing users to quickly browse through movie selections, view detailed descriptions, ratings, and trailers, and make decisions effortlessly. The use of cutting-edge frameworks and libraries suggests that the site is highly responsive and visually appealing, aiming to transform how users discover and interact with movie content online.",
    tags: [
      {
        name: "React",
      },
      {
        name: "Three.js",
      },
      {
        name: "RESTful API",
      },
    ],
    images: [
      "/images/movieswiper/1.png",
      "/images/movieswiper/2.png",
      "/images/movieswiper/3.png",
      "/images/movieswiper/4.png",
    ],
    source_code_link: "https://github.com/synnielxy/movie-swiper-r3f",
    link: "https://movie-swiper-r3f.vercel.app/",
    year: 2023
  }
];

export {projects};