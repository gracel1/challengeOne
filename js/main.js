
const H1 = document.getElementById('greeting');
let userName = prompt("Do you know the Importance of UI/UX Development? Are you a decision maker at a law firm who is considering hiring a company to create your website? Type your name. (We hope that you know the movie, 'War Games'.)");
let favTopic = prompt("Kindly type the name of the topic which you would like to learn more about: ux, ui, ux/ui, business, clients, games.");

switch (favTopic) {
    case "ux":
        H1.innerHTML = `You typed ${favTopic}. User Experience Development is the procedure of improving the overall experience of the users when they interact with the application or website in order to achieve its objective to provide the maximum customer satisfaction. It keeps customers in mind and creates the basic skeleton of any application. It mainly focuses on wireframing an application and structuring all its components and elements appropriately to create the user flow.`;
        break;
    case "ui":
        H1.innerHTML = `You typed ${favTopic}. The User Interface is the process of improving the presentation and the interactivity of the web or mobile application. It focuses on the app’s look and interacts with the users. Each screen, page, buttons and other visual elements you see while using an application is the User Interface of that application.`;
        break;
    case "ux/ui":
        H1.innerHTML = `You typed ${favTopic}. What is the Importance of Using UI and UX Design? The primary goal of any business is to increase its sales and increase the growth of the business. UX/UI Design plays an essential role in achieving this goal. The UX/UI Design of the application improves the user experience and customer satisfaction that ultimately helps increase the number of users of the specific application.
        With users having lots of choices and alternatives for the products and/ or services you are offering them, the span of time you get to grab the attention of your users is quite less and you have to hit the bullseye in this short span of time.
        The UI and UX Design help to win the consumers’ confidence and make them use your application or website providing them what they are looking for. The number of consumers you are getting on your website / application can measure the success of the great UI and UX.
        For a start-up or a small venture, the importance of UI and UX Design becomes even more crucial as the first impression lasts long and using UI and UX designing can make or break the brand recognition.`;
        break;
    case "business":
        H1.innerHTML = `You typed ${favTopic}. Why is UI/UX Development Essential for Business Growth? Since UI and UX Development largely focus on the users’ satisfaction and pleasure, it plays an important role in the business’ success. From a business' point of view, it is essential to emphasize on the users’ satisfaction in order to build the brand value and reputation of the business. With IT being the competitive field, the need of UI UX design service to grab the consumers’ attention and revenue from the company’s products is quite crucial. If the users are surfing your websites or using your applications, it is yours and your UI UX Developers’ responsibility to navigate them to their predetermined target in the most efficient way. Hence, UI and UX Development have become a significant part of today’s web development.`;
        break;
    case "clients":
        H1.innerHTML = `You typed ${favTopic}. Our experience working with law firms span from the local Fresno area to large national enterprises. Satisfied clients include Dewey, Cheetham & Howe Law, who have represented car mechanics Click and Clack, the Tappet Brothers; and Just So & Why Not Law, who have represented the Ambivalent and Apathetic Arbiters Association of America (AAAAA).`;
        break;
    case "games":
        H1.innerHTML = `You typed ${favTopic}. You don’t play around when defending your clients.  What if your desktop and mobile sites were as complex to navigate for your clients as this site was for you?  
        Target and capture your audience and market-- Don’t play games. 
        Contact us to proceed.`;
        break;
    default:
        H1.innerHTML = `Sorry, but you did not enter a valid entry.`;
        break;
}

