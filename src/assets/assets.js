
import closeIcon from "./closeIcon.svg"
import profile from "./profile1.png"
import moon_icon from './moon_icon.png'
import menu_black from './menu-black.png'
import close_black from './close-black.png'
import download_icon from './download-icon.png'
import linkedin from './linkedin.png'
import github from './github.png'
import email from './email.png'
import twitter from './twitter.png'
import close_white from './close-white.png'
import hotel_site from './hotel-site.png'
import whatsapp from './whatsapp.png'
import copyright from './copyright.png'
import up_arrow from './up-arrow.png'
import sun_icon from './sun_icon.svg'
import nike_shoe from './nike-shoe3.jpg'
import solar_img from './hero.jpg'






export const assets = {
    closeIcon, profile,
    moon_icon,
    menu_black,
    close_black,
    profile,
    download_icon,
    linkedin, email, github, twitter, close_white, hotel_site, whatsapp, copyright, up_arrow, sun_icon, nike_shoe
}


export const projects = [
    {
        index: "01",
        role: "Personal project",
        title: "Solar Ecommerce Site",
        desc: "A full-stack solar energy platform that helps Nigerian homeowners calculate electricity savings, explore solar systems, and manage their energy journey.",
        tags: ["Next js", "TypeScript", "Supabase", "Tailwind CSS"],
        href: "https://solara-energy-34sy.vercel.app/",
        image: solar_img,
    },
    {
        index: "02",
        role: "Personal project",
        title: "Hotel Booking Site",
        desc: "A booking interface with destination search, date selection, and guest management.",
        tags: ["React js", "Tailwind CSS"],
        href: "https://hotel-booking-site-beta.vercel.app/",
        image: hotel_site,
    },
    {
        index: "03",
        role: "Personal project",
        title: "Sneak Lovers — Multi-Brand Footwear E-commerce Platform",
        desc: "An ecommerce platform built for a retail shoes sales store, which deals with sales of different shoe brands",
        tags: ["React js", "Tailwind CSS"],
        href: "https://foot-wares.vercel.app/",
        image: nike_shoe,
    }

];
