import { HiMiniArrowPath } from "react-icons/hi2";
import { GiArrowCursor } from "react-icons/gi";
import { FaBullhorn, FaChartBar, FaCheck, FaEnvelope, FaUsers, FaWhatsapp } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";

let Cardsdata=[
    {
        icon:<HiMiniArrowPath />,
        title:"Automated Workflows",
        para1:'Create event-based workflows on WhatsApp to',
        para2:'guide your customers through various processes like appointment booking, new registrations, etc.'
    },
    {
        icon:<GiArrowCursor/>    ,
        title:"Ads that Click to WhatsApp",
        para1:'Connect with your target audience where they are',
        para2:'most active - - across Facebook and Instagram.'
    },
    {
        icon:<FaUsers/>        ,
        title:"Shared Team Inbox",
        para1:'Experience real-time collaboration among teams with Interakts Shared team Inbox,',
        para2:'one number, multiple users.'
    },
    {
        icon:<FaBullhorn /> ,
        title:"Bulk Campaigns",
        para1:'Set up one-time or recurring campaigns and share',
        para2:'personalized, automated alerts to customers.'
    },
    {
        icon:<FaChartBar/>        ,
        title:"Campaign Analytics",
        para1:'Track campaign performance and find out wha',
        para2:'worked for you & what did not'
    },
    {
        icon:<FaWhatsapp/>        ,
        title:"WhatsApp Commerce",
        para1:'Create your storefront on WhatsApp today and enable a seamless',
        para2:'end-to-end shopping experience.'
    }
]

let ReasonCards =[
    {
        logo:<FaEnvelope color="violet" size={30}/>        ,
        heading:'Collaborate using Team Inbox & Chat Widgets',
        data1:'Add WhatsApp widgets to your e-store &',
        data2:'collaborate with unlimited team members to offer',
        data3:'customer support at scale on WhatsApp'
    },
    {
        logo:<IoAnalyticsSharp color="blue"/>,
        heading:'Monitor Chat & Campaign Analytics',
        data1:'Monitor campaign performance, response &',
        data2:'esolution times of your agents to improve',
        data3:'your customer experience'
    },
    {
        logo:<FaCheck color="lightgreen"/>        ,
        heading:'Green Tick Verification',
        data1:'Interakt helps you apply for the Green tick on',
        data2:'WhatsApp alongside your brand name to',
        data3:'help you build credibility'
    }
   

]
export {Cardsdata,ReasonCards}