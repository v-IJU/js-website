import { mealsImg, navLogo } from "../assets/images";
import footerLogo from "../assets/images/footer/omnifood-logo-today.png"
import insta from "../assets/svg/footer/instagram-brands-solid.svg"
import fb from "../assets/svg/footer/facebook-brands-solid.svg"
import twitter from "../assets/svg/footer/twitter-brands-solid.svg"
import galleryImg1 from '../assets/images/gallery/gallery-1.jpg'
import galleryImg2 from '../assets/images/gallery/gallery-2.jpg'
import galleryImg3 from '../assets/images/gallery/gallery-3.jpg'
import galleryImg4 from '../assets/images/gallery/gallery-4.jpg'
import galleryImg5 from '../assets/images/gallery/gallery-5.jpg'
import galleryImg6 from '../assets/images/gallery/gallery-6.jpg'


export const socialMedia = [insta, fb, twitter]

export const navLinks = [
    {
       id:1, 
       icon:
        {id:1,link:"#", img:navLogo ,place:"Kerala"}
    
    },
   {    
    id:2, 
    links :[
    {id:1, link: "#link",title: "How Works"},
    {id:2, link: "#meals",title: "Meals"},
    {id:3, link: "#gallery",title: "Gallery"},
    {id:4, link: "#pricing",title: "Pricing"},    
]}
]

export const mealsDetails = [
    {id:1,img:mealsImg[0],category1:"Vegeterian", name:"Japanese Gyozas",calories:"650 Calories",nutriscore:"NutriScore",score:"74",ratings:"4.9 Ratings(544)" },
    {id:2,img:mealsImg[1],category1:"Vegan", category2:"Paleo", name:"Avocado Salad",calories:"650 Calories",nutriscore:"NutriScore",score:"74",ratings:"4.9 Ratings(544)" },
    {id:3,img:mealsImg[1],category1:"Vegan", category2:"Paleo", name:"Avocado Salad",calories:"650 Calories",nutriscore:"NutriScore",score:"74",ratings:"4.9 Ratings(544)" }
]

export const gallery = [
    {id:1, img:galleryImg1, text:"Lorem dolor ispum sit amet consectetur adipisicing"},
    {id:2, img:galleryImg2, text:"Lorem dolor ispum sit amet consectetur adipisicing"},
    {id:3, img:galleryImg3, text:"Lorem dolor ispum sit amet consectetur adipisicing"},
    {id:4, img:galleryImg4, text:"Lorem dolor ispum sit amet consectetur adipisicing"},
    {id:5, img:galleryImg5, text:"Lorem dolor ispum sit amet consectetur adipisicing"},
    {id:6, img:galleryImg6, text:"Lorem dolor ispum sit amet consectetur adipisicing"}
]

export const pricing = [
    {id:1, title:"PRICING"},
    {id:2, subtitle: "We have 2 pricing plans"},
    {id:3, 
        pricingPlans:[
            {id:1, plan:"STARTER", price:399, taxText: "Price include all applicable taxes.", cancelMsg: "Users can cancel at any time.", meal:"1 meal per day", order:"Order from 11am to 9pm", delevery:"Delevery is free"},
            {id:2,tag:"BEST SALE", plan:"COMPLETE", price:599, taxText: "Price include all applicable taxes.", cancelMsg: "Users can cancel at any time.", meal:"2 meal per day", order:"Order 24/7", delevery:"Delevery is free", access:"Get access to latest recipes"}
        ]
    }
]

export const footer = [
    {id:1, logo:footerLogo, icons:[insta, fb, twitter], copyRights :"Copyright"},
    {id:2,  title:"Address", place:"623 Harisson st., 2nd Floor,", place2:"San Francisco, CA94107", phone:4152016370, mail:"hello@omnifood.com"},
    {id:3, title:"Navigation", Navigation:[
        {id:1, title:"Create Account", link:"#signUp",},
        {id:2, title:"Sign in", link:"#signIp",},
        {id:3, title:"iOS app", link:"#",},
        {id:4, title:"Android app", link:"#android",}
    ]},
    {id:4, title:"Navigation", Navigation:[
        {id:1, title:"Create Account", link:"#signUp",},
        {id:2, title:"Sign in", link:"#signIp",},
        {id:3, title:"iOS app", link:"#",},
        {id:4, title:"Android app", link:"#android",}
    ]},
    {id:5, title:"Navigation", Navigation:[
        {id:1, title:"Create Account", link:"#signUp",},
        {id:2, title:"Sign in", link:"#signIp",},
        {id:3, title:"iOS app", link:"#",},
        {id:4, title:"Android app", link:"#android",}
    ]}
]