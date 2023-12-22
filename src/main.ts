import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

document.title = "Marin Călin | Public Profile"

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    duration: 500, // values from 0 to 3000, with step 50ms
    delay: 50, // values from 0 to 3000, with step 50ms
});