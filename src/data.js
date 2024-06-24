import p1 from "./assets/Nextflix.png";
import p2 from "./assets/Nike.png";
import p3 from "./assets/Spotify.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/project-5.png";
import p6 from "./assets/project-6.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    {
        name: "Mobile App",
        id: "mobile-app",
    },
    {
        name: "Website",
        id: "website",
    },
];


export const projects = [
    {
        name: "Netflix Clone",
        image: p1,
        tags: ["dashboard", "mobile-app", "website"],
        
        
    },
    {
        name: "Nike Store",
        image: p2,
        tags: ["dashboard", "mobile-app", "website"],
    },
    {
        name: "Spotify Clone",
        image: p3,
        tags: ["mobile-app","website"],
    },
    // {
    //     name: "We Are Solving Global Problems",
    //     image: p4,
    //     tags: ["mobile-app"],
    // },
    // {
    //     name: "The English Tea Ceremony",
    //     image: p5,
    //     tags: ["website", "dashboard"],
    // },
    // {
    //     name: "Saving Photo Memories",
    //     image: p6,
    //     tags: ["website"],
    // },
];

export const achievements = [
    {
        id: 1,
        year: 5,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 1,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 10,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 5,
        description: "COMMUNITY<br />POSTS",
    },
];
