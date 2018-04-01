import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

console.log('inside the App.js');
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "85%");
console.log('inside the App.js - before Sticky');
var stickyHeader = new StickyHeader();
console.log('inside the App.js - after Sticky');
