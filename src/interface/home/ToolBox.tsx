import NextJs_Logo from "../../../public/images/companies/nextjs.png";
import React_Logo from "../../../public/images/companies/react.png";
import Sanity_Logo from "../../../public/images/companies/sanity.png";
import Firebase_Logo from "../../../public/images/companies/firebase.png";
import Stripe_Logo from "../../../public/images/companies/stripe.png";
import HTML_Logo from "../../../public/images/companies/html.png";
import CSS_Logo from "../../../public/images/companies/css.png";
import JavaScript_Logo from "../../../public/images/companies/js.png";
import TypeScript_Logo from "../../../public/images/companies/ts.png";
import NodeJs_Logo from "../../../public/images/companies/nodejs.png";
import Mongodb_Logo from "../../../public/images/companies/mongodb.png";
import Mongoose_Logo from "../../../public/images/companies/mongoose.png";
import MUI_Logo from "../../../public/images/companies/mui.png";
import NextUI_Logo from "../../../public/images/companies/nextui.png";
import Tailwind_Logo from "../../../public/images/companies/tailwind.png";
import Zustand_Logo from "../../../public/images/companies/zustand.png";
import Clerk_Logo from "../../../public/images/companies/clerk.png";
import Express_Logo from "../../../public/images/companies/express.png";
import Redux_Logo from "../../../public/images/companies/redux.png";
import Stepzen_Logo from "../../../public/images/companies/stepzen.png";
import GraphQL_Logo from "../../../public/images/companies/graphql.png";
import Tremor_Logo from "../../../public/images/companies/tremor.png";
//
import ToolImage0 from "../../../public/images/tools/clerk.png";
import ToolImage1 from "../../../public/images/tools/firebase.png";
import ToolImage2 from "../../../public/images/tools/mongodb.png";
import ToolImage3 from "../../../public/images/tools/mui.png";
import ToolImage4 from "../../../public/images/tools/nextjs.png";
import ToolImage5 from "../../../public/images/tools/nextui.png";
import ToolImage6 from "../../../public/images/tools/react.png";
import ToolImage7 from "../../../public/images/tools/redux.png";
import ToolImage8 from "../../../public/images/tools/sanity.png";
import ToolImage9 from "../../../public/images/tools/stepzen.png";
import ToolImage10 from "../../../public/images/tools/stripe.png";
import ToolImage11 from "../../../public/images/tools/tailwindcss.png";
import ToolImage12 from "../../../public/images/tools/tremor.png";
import ToolImage13 from "../../../public/images/tools/typescript.png";
import ToolImage14 from "../../../public/images/tools/gsap.png";
import ToolImage15 from "../../../public/images/tools/framer.png";
import ToolImage16 from "../../../public/images/tools/swiperjs.png";
import ToolImage17 from "../../../public/images/tools/material.png";
//
import { StaticImageData } from "next/image";

type DataProps = {
  Image: StaticImageData;
  Technology_Name: string;
  Company_Name: string;
  Technology_Description: string;
}[];

const DataSet: DataProps = [
  {
    Image: NextJs_Logo,
    Technology_Name: "NextJs",
    Company_Name: "Vercel Inc.",
    Technology_Description:
      "Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
  },
  {
    Image: React_Logo,
    Technology_Name: "React",
    Company_Name: "Meta Open Source",
    Technology_Description:
      "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
  },
  {
    Image: Sanity_Logo,
    Technology_Name: "Sanity",
    Company_Name: "Sanity",
    Technology_Description:
      "Sanity delivers content anywhere (just like a headless CMS) Beyond that, Sanity gives you total composability. A fully decoupled, real-time content back end. Entirely customizable content workspaces. Be ready for what's next.",
  },
  {
    Image: Firebase_Logo,
    Technology_Name: "Firebase",
    Company_Name: "Google LLC",
    Technology_Description:
      "Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.",
  },
  {
    Image: Mongodb_Logo,
    Technology_Name: "MongoDB",
    Company_Name: "MongoDB, Inc.",
    Technology_Description:
      "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License.",
  },
  {
    Image: Stripe_Logo,
    Technology_Name: "Stripe",
    Company_Name: "Stripe, Inc.",
    Technology_Description:
      "Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.",
  },
  {
    Image: HTML_Logo,
    Technology_Name: "HTML",
    Company_Name: "World Wide Web Consortium (W3C",
    Technology_Description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
  },
  {
    Image: CSS_Logo,
    Technology_Name: "CSS",
    Company_Name: "World Wide Web Consortium (W3C)",
    Technology_Description:
      "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
  },
  {
    Image: JavaScript_Logo,
    Technology_Name: "JavaScript",
    Company_Name: "ECMAScript ",
    Technology_Description:
      "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
  },
  {
    Image: TypeScript_Logo,
    Technology_Name: "TypeScript",
    Company_Name: "Microsoft",
    Technology_Description:
      "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
  },
  {
    Image: NodeJs_Logo,
    Technology_Name: "Node.js",
    Company_Name: "Node.js Foundation",
    Technology_Description:
      "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.",
  },
  {
    Image: MUI_Logo,
    Technology_Name: "MUI",
    Company_Name: "Material UI SAS",
    Technology_Description:
      "MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.",
  },
  {
    Image: NextUI_Logo,
    Technology_Name: "NextUI",
    Company_Name: "NextUI Inc.",
    Technology_Description:
      "NextUI provides a custom TailwindCSS plugin that allows you to customize the default themes or create your own.",
  },
  {
    Image: Mongoose_Logo,
    Technology_Name: "Mongoose",
    Company_Name: "Open-Source Project",
    Technology_Description:
      "Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.",
  },
  {
    Image: Zustand_Logo,
    Technology_Name: "Zustand",
    Company_Name: "Open-Source Project",
    Technology_Description:
      "A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.",
  },
  {
    Image: Tailwind_Logo,
    Technology_Name: "Tailwind",
    Company_Name: "Tailwind Labs Inc.",
    Technology_Description:
      "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
  },
  {
    Image: Clerk_Logo,
    Technology_Name: "Clerk",
    Company_Name: "Clerk Inc.",
    Technology_Description:
      "Clerk is more than a sign-in box. Integrate complete user management UIs and APIs, purpose-built for React, Next.js, and the Modern Web.",
  },
  {
    Image: Redux_Logo,
    Technology_Name: "Redux",
    Company_Name: "Open-Source Project",
    Technology_Description:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark",
  },
  {
    Image: Express_Logo,
    Technology_Name: "Express",
    Company_Name: "Node.js Foundation",
    Technology_Description:
      "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
  },
  {
    Image: GraphQL_Logo,
    Technology_Name: "GraphQL",
    Company_Name: "GraphQL Foundation",
    Technology_Description:
      "GraphQL is an open-source data query and manipulation language for APIs and a query runtime engine. GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API.",
  },
  {
    Image: Tremor_Logo,
    Technology_Name: "Tremor",
    Company_Name: "Open-Source Project",
    Technology_Description:
      "The react library to build dashboards fast. Built in Athens, Vienna, London, and San Francisco.",
  },
  {
    Image: Stepzen_Logo,
    Technology_Name: "StepZen",
    Company_Name: "IBM",
    Technology_Description:
      "The quickest way to get started is to autogenerate your schemas and resolvers. Specify an existing data source using the stepzen import command. StepZen introspects the endpoint and generates a GraphQL schema for you, including the @rest, @dbquery, and @graphql directives. Link types using @materializer.",
  },
];

const images = [
  ToolImage0,
  ToolImage1,
  ToolImage2,
  ToolImage3,
  ToolImage4,
  ToolImage5,
  ToolImage6,
  ToolImage7,
  ToolImage8,
  ToolImage9,
  ToolImage10,
  ToolImage11,
  ToolImage12,
  ToolImage13,
  ToolImage14,
  ToolImage15,
  ToolImage16,
  ToolImage17,
];

export default function ToolBox() {
  return (
    <section className="grid h-screen w-full place-content-center bg-white text-black">
      Tool Box
    </section>
  );
}
