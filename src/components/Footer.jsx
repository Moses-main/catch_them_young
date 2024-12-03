import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">BMI-CTY Academy</h3>
          <p>
            Empowering the next generation of entrepreneurs through innovative
            education and mentorship programs.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="/mentorship" className="hover:underline">
                Mentorship
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>© 2024 BMI-CTY Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <div>
//       <footer id="wp-footer" class="clearfix">
//         <div class="footer-main">
//           {" "}
//           <div
//             data-elementor-type="wp-post"
//             data-elementor-id="866"
//             class="elementor elementor-866"
//           >
//             <section
//               class="elementor-section elementor-top-section elementor-element elementor-element-5043f31 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
//               data-id="5043f31"
//               data-element_type="section"
//               data-settings='{"background_background":"classic"}'
//             >
//               <div class="elementor-background-overlay"></div>
//               <div class="elementor-container elementor-column-gap-default">
//                 <div
//                   class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-c46371a"
//                   data-id="c46371a"
//                   data-element_type="column"
//                 >
//                   <div class="elementor-widget-wrap elementor-element-populated">
//                     <div
//                       class="elementor-element elementor-element-e142967 elementor-widget elementor-widget-gva-logo"
//                       data-id="e142967"
//                       data-element_type="widget"
//                       data-widget_type="gva-logo.default"
//                     >
//                       <div class="elementor-widget-container">
//                         <div class="gva-element-gva-logo gva-element">
//                           <div class="gsc-logo text-left">
//                             <a
//                               class="site-branding-logo"
//                               href="https://catchthemyoung.ng"
//                               title="Home"
//                               rel="Home"
//                             >
//                               <img src="" alt="Home" />
//                             </a>
//                           </div>
//                         </div>{" "}
//                       </div>
//                     </div>
//                     <div
//                       class="elementor-element elementor-element-7d1c2c2 elementor-widget elementor-widget-text-editor"
//                       data-id="7d1c2c2"
//                       data-element_type="widget"
//                       data-widget_type="text-editor.default"
//                     >
//                       <div class="elementor-widget-container">
//                         <p>2, Lanre Olumide Street, Lekki Lagos Nigeria.</p>{" "}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-688c23f"
//                   data-id="688c23f"
//                   data-element_type="column"
//                 >
//                   <div class="elementor-widget-wrap elementor-element-populated">
//                     <div
//                       class="elementor-element elementor-element-b8a9ae8 elementor-widget elementor-widget-heading"
//                       data-id="b8a9ae8"
//                       data-element_type="widget"
//                       data-widget_type="heading.default"
//                     >
//                       <div class="elementor-widget-container">
//                         <h2 class="elementor-heading-title elementor-size-default">
//                           Links
//                         </h2>{" "}
//                       </div>
//                     </div>
//                     <div
//                       class="elementor-element elementor-element-61ca09e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
//                       data-id="61ca09e"
//                       data-element_type="widget"
//                       data-widget_type="icon-list.default"
//                     >
//                       <div class="elementor-widget-container">
//                         <ul class="elementor-icon-list-items">
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-text">
//                                 Recent News
//                               </span>
//                             </a>
//                           </li>
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-text">
//                                 About us
//                               </span>
//                             </a>
//                           </li>
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-text">
//                                 Contact Page
//                               </span>
//                             </a>
//                           </li>
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-text">
//                                 Gallery
//                               </span>
//                             </a>
//                           </li>
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-text">
//                                 Events
//                               </span>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-2d02239"
//                   data-id="2d02239"
//                   data-element_type="column"
//                 >
//                   <div class="elementor-widget-wrap elementor-element-populated">
//                     <div
//                       class="elementor-element elementor-element-28cfe05 elementor-widget elementor-widget-heading"
//                       data-id="28cfe05"
//                       data-element_type="widget"
//                       data-widget_type="heading.default"
//                     >
//                       <div class="elementor-widget-container">
//                         <h2 class="elementor-heading-title elementor-size-default">
//                           The Six Sense
//                         </h2>{" "}
//                       </div>
//                     </div>
//                     <div
//                       class="elementor-element elementor-element-e740363 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
//                       data-id="e740363"
//                       data-element_type="widget"
//                       data-widget_type="icon-list.default"
//                     >
//                       <div class="elementor-widget-container">
//                         <ul class="elementor-icon-list-items">
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-icon">
//                                 <i aria-hidden="true" class=" las la-video"></i>{" "}
//                               </span>
//                               <span class="elementor-icon-list-text">
//                                 Video Recorded Lessons
//                               </span>
//                             </a>
//                           </li>
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-icon">
//                                 <i aria-hidden="true" class=" las la-book"></i>{" "}
//                               </span>
//                               <span class="elementor-icon-list-text">
//                                 Textbook
//                               </span>
//                             </a>
//                           </li>
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-icon">
//                                 <i
//                                   aria-hidden="true"
//                                   class=" las la-book-open"
//                                 ></i>{" "}
//                               </span>
//                               <span class="elementor-icon-list-text">
//                                 Workbook
//                               </span>
//                             </a>
//                           </li>
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-icon">
//                                 <i
//                                   aria-hidden="true"
//                                   class=" flaticon-chat-1"
//                                 ></i>{" "}
//                               </span>
//                               <span class="elementor-icon-list-text">
//                                 Discussion Book
//                               </span>
//                             </a>
//                           </li>
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-icon">
//                                 <i
//                                   aria-hidden="true"
//                                   class=" la la-file-movie-o"
//                                 ></i>{" "}
//                               </span>
//                               <span class="elementor-icon-list-text">
//                                 Cartoon Series
//                               </span>
//                             </a>
//                           </li>
//                           <li class="elementor-icon-list-item">
//                             <a href="#">
//                               <span class="elementor-icon-list-icon">
//                                 <i aria-hidden="true" class="fas fa-check"></i>{" "}
//                               </span>
//                               <span class="elementor-icon-list-text">Quiz</span>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-ca0a23e"
//                   data-id="ca0a23e"
//                   data-element_type="column"
//                 >
//                   <div class="elementor-widget-wrap elementor-element-populated">
//                     <div
//                       class="elementor-element elementor-element-bffbad0 elementor-widget elementor-widget-heading"
//                       data-id="bffbad0"
//                       data-element_type="widget"
//                       data-widget_type="heading.default"
//                     >
//                       <div class="elementor-widget-container">
//                         <h2 class="elementor-heading-title elementor-size-default">
//                           Contact
//                         </h2>{" "}
//                       </div>
//                     </div>
//                     <div
//                       class="elementor-element elementor-element-351f148 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
//                       data-id="351f148"
//                       data-element_type="widget"
//                       data-widget_type="icon-list.default"
//                     >
//                       <div class="elementor-widget-container">
//                         <ul class="elementor-icon-list-items">
//                           <li class="elementor-icon-list-item">
//                             <span class="elementor-icon-list-icon">
//                               <i
//                                 aria-hidden="true"
//                                 class=" flaticon-email-1"
//                               ></i>{" "}
//                             </span>
//                             <span class="elementor-icon-list-text">
//                               hello@bmifinishingschool.com
//                             </span>
//                           </li>
//                           <li class="elementor-icon-list-item">
//                             <span class="elementor-icon-list-icon">
//                               <i
//                                 aria-hidden="true"
//                                 class="fas fa-phone-alt"
//                               ></i>{" "}
//                             </span>
//                             <span class="elementor-icon-list-text">
//                               +234 915 438 2636.
//                             </span>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-facc05a"
//                   data-id="facc05a"
//                   data-element_type="column"
//                 >
//                   <div class="elementor-widget-wrap elementor-element-populated">
//                     <div
//                       class="elementor-element elementor-element-8140007 elementor-widget elementor-widget-gva-heading-block"
//                       data-id="8140007"
//                       data-element_type="widget"
//                       data-widget_type="gva-heading-block.default"
//                     >
//                       <div class="elementor-widget-container">
//                         <div class="gva-element-gva-heading-block gva-element">
//                           {" "}
//                           <div class="align-left style-3 widget gsc-heading box-align-left auto-responsive">
//                             <div class="content-inner">
//                               <h2 class="title">
//                                 <span>Want to be a kidpreneur</span>
//                               </h2>
//                             </div>
//                           </div>
//                         </div>{" "}
//                       </div>
//                     </div>
//                     <div
//                       class="elementor-element elementor-element-47fe196 elementor-widget elementor-widget-html"
//                       data-id="47fe196"
//                       data-element_type="widget"
//                       data-widget_type="html.default"
//                     >
//                       <div class="elementor-widget-container">
//                         <a class="btn-donate" href="#">
//                           Join Now
//                         </a>{" "}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//             <section
//               class="elementor-section elementor-top-section elementor-element elementor-element-d01ae78 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
//               data-id="d01ae78"
//               data-element_type="section"
//               data-settings='{"background_background":"classic"}'
//             >
//               <div class="elementor-background-overlay"></div>
//               <div class="elementor-container elementor-column-gap-default">
//                 <div
//                   class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-13d26d1"
//                   data-id="13d26d1"
//                   data-element_type="column"
//                 >
//                   <div class="elementor-widget-wrap elementor-element-populated">
//                     <section
//                       class="elementor-section elementor-inner-section elementor-element elementor-element-606dad3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
//                       data-id="606dad3"
//                       data-element_type="section"
//                     >
//                       <div class="elementor-container elementor-column-gap-default">
//                         <div
//                           class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c051df9"
//                           data-id="c051df9"
//                           data-element_type="column"
//                         >
//                           <div class="elementor-widget-wrap elementor-element-populated">
//                             <div
//                               class="elementor-element elementor-element-33680e7 elementor-widget elementor-widget-text-editor"
//                               data-id="33680e7"
//                               data-element_type="widget"
//                               data-widget_type="text-editor.default"
//                             >
//                               <div class="elementor-widget-container">
//                                 <div>
//                                   © 2022 Copyrights by BMI-CTY. All Rights
//                                   Reserved
//                                 </div>{" "}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3392b07"
//                           data-id="3392b07"
//                           data-element_type="column"
//                         >
//                           <div class="elementor-widget-wrap elementor-element-populated">
//                             <div
//                               class="elementor-element elementor-element-716da3e e-grid-align-left e-grid-align-mobile-left elementor-widget__width-auto elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
//                               data-id="716da3e"
//                               data-element_type="widget"
//                               data-widget_type="social-icons.default"
//                             >
//                               <div class="elementor-widget-container">
//                                 <div class="elementor-social-icons-wrapper elementor-grid">
//                                   <span class="elementor-grid-item">
//                                     <a
//                                       class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-bb4b3ef"
//                                       href="#"
//                                       target="_blank"
//                                     >
//                                       <span class="elementor-screen-only">
//                                         Twitter
//                                       </span>
//                                       <i class="fab fa-twitter"></i>{" "}
//                                     </a>
//                                   </span>
//                                   <span class="elementor-grid-item">
//                                     <a
//                                       class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-b32881d"
//                                       href="#"
//                                       target="_blank"
//                                     >
//                                       <span class="elementor-screen-only">
//                                         Facebook
//                                       </span>
//                                       <i class="fab fa-facebook"></i>{" "}
//                                     </a>
//                                   </span>
//                                   <span class="elementor-grid-item">
//                                     <a
//                                       class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-e9775fc"
//                                       href="#"
//                                       target="_blank"
//                                     >
//                                       <span class="elementor-screen-only">
//                                         Instagram
//                                       </span>
//                                       <i class="fab fa-instagram"></i>{" "}
//                                     </a>
//                                   </span>
//                                   <span class="elementor-grid-item">
//                                     <a
//                                       class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-1450104"
//                                       href="/a"
//                                       target="_blank"
//                                     >
//                                       <span class="elementor-screen-only">
//                                         Linkedin
//                                       </span>
//                                       <i class="fab fa-linkedin"></i>{" "}
//                                     </a>
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </section>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
