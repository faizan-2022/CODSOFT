import React from 'react'
import { MdDesignServices, MdBuild,  } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineApi } from "react-icons/ai";
import {BsFillBugFill} from "react-icons/bs";

export const services = [
    {
        id: 1,
        Icon: <MdDesignServices />,
        title: "Front End Development",
        disc: "Using my front-end development skills, I create visually appealing and interactive designs that work seamlessly across all devices",
        direction: "left"
    },
    {
        id: 2,
        Icon: <FiCodesandbox />,
        title: "Back End Development",
        disc: "I'll make your website dynamic with back-end development and add an easy-to-use & user-friendly admin panel for future changes.",
        direction: "up"
    },
    {
        id: 3,
        Icon: <CgWebsite />,
        title: "Web Hosting",
        disc: "When your website is fully ready I host your website on web. Which allows the website reachable to users 24/7 also protects your site",
        direction: "right"
    },
    {
        id: 4,
        Icon: <MdBuild />,
        title: "Custom Development",
        disc: "I'll turn your ideas into code and create custom solutions to meet your unique needs. If you have an idea, let us turn it into reality",
        direction: "left"
    },
    {
        id: 5,
        Icon: <AiOutlineApi />,
        title: "API Development",
        disc: "I create custom APIs to streamline your data transfer needs and enhance the functionality of your website. Let's revolutionize!",
        direction: "up"
    },
    {
        id: 6,
        Icon: <BsFillBugFill />,
        title: "Bug Fixes",
        disc: "If you encounter any kind of error with your website, I am here to help. Please describe your bug, so that i am able to fix it for you",
        direction: "right"
    }
]