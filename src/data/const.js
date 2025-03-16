import { BiSolidBookmarkStar } from "react-icons/bi";
import {
  FaStar,
  FaHourglassStart,
  FaMobileAlt,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

export const title = "Ismail code";

export const heroSectionTitle = "Web Development from the Future";
export const aboutSectionTitle = "Explore the power of internet & more ";

export const aboutMeP1 =
  "I`m full-stack developer who has found his passion in coding, ";

export const aboutMep2 =
  "building various websites for different purposes. With 5 years of coding experience across diverse stacks and technologies, I`m adept at both front-end and back-end development, ensuring seamless functionality and user experience.";

export const myMail = "ismailabualmagd@gmail.com";

export const servsiceP =
  "From Vision to Reality: I Offer a Variety of Tailored Web Solutions!";

export const myNumber = "01508328238";
export const whatsMessage = "hi, ismail I want build my website";

export const mySkills = [
  "Next",
  "React",
  "Tailwind",
  "Nodejs",
  "scratch",
  "Laravel",
  "Postegres",
  "Cms",
  "Supabase",
  "Firebase",
];

export const whatsappLnk = `https://wa.me/${myNumber}?text=${encodeURIComponent(
  whatsMessage
)}`;

export const slides = [
  { description: "High performance", icon: FaStar },
  { description: "Responsive Design", icon: FaMobileAlt },
  { description: "Fast development", icon: FaHourglassStart },
  { description: "SEO Optimization", icon: FaSearch },
  { description: "Newest Technology", icon: BiSolidBookmarkStar },
  { description: "Fast Loading Speed ", icon: FaRocket },
];

export const myProjects = [
  {
    name: "speaksnaps",
    description:
      "Speaksnaps is a versatile text-to-speech software that converts written content " +
      "into natural-sounding speech. Ideal for individuals with visual impairments",
    link: "https:/speaksnaps.com",
    image: "src/assets/proj.jpg",
  },
  {
    name: "Codefray",
    description:
      "Codefray is a code learning platform, to master web development ",
    link: "https:/codefray.com",
    image: "src/assets/projj.jpg",
  },
  {
    name: "Yellow",
    description: "Restuarant website, with all ability. ",
    link: "https:/codefray.com",
    image: "src/assets/res.jpg",
  },
];

export const miniTestMonialdata = [
  {
    name: "Tony Adward",
    image: "./src/assets/hl.png",
    content:
      "What a brilliant developer! he build my desirable website in short time, would highly recommend!",
    url: "https://x.com/tony_syrup",
    platform: "twitter",
  },
  {
    name: "Abeer Ali",
    image:
      "https://user-images.trustpilot.com/66720004290ae621bb11f24c/73x73.png",
    content:
      "Great for text to speech conversion with AI ,has many options ,effects and easy.you can depend on for voiceovers.",
    url: "https://www.trustpilot.com/reviews/66720043f8f5b76c82d8c495",
    platform: "trustpilot",
  },
  {
    name: "Anon",
    image: "./src/assets/hl.png",
    content:
      "the best part about using Speaksnaps," +
      "Free to convert 10,000 charachters without paying any thing" +
      " More voices needed and more languages" +
      " but it is" +
      "Good and easy use tool to convert text to speech, easily customize the output voice",
    url: "https://www.crowdreviews.com/speaksnaps/reviews/good-easy-tool-125421",
    platform: "crowdreviews",
  },
];
