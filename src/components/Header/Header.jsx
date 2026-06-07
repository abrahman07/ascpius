import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/useLanguage';
import { LANGUAGES } from '../../context/languages';
import './Header.css';

const OmniMedLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.9675 9.6C15.9675 13.1346 18.8329 16 22.3675 16H31.9675H28.7675C25.2329 16 22.3675 13.1346 22.3675 9.6V6.4C22.3675 2.86536 19.5022 0 15.9675 0V9.6Z" fill="url(#paint0_linear_13121_31626)"/>
    <path d="M16.6597 9.99128V2.60185C16.6597 1.18372 16.3552 0.000582715 15.9746 0.000152588H15.9675V9.60015C15.9675 12.1383 17.445 14.3311 19.5869 15.366C17.826 14.2256 16.6597 12.2453 16.6597 9.99128Z" fill="url(#paint1_linear_13121_31626)"/>
    <path d="M19.3592 6.4V9.6C19.3592 13.1346 22.2245 16 25.7592 16H27.4549H31.9678H28.7678C25.2331 16 22.3678 13.1346 22.3678 9.6V6.4C22.3678 2.86536 19.5024 0 15.9678 0C18.398 0.00989292 19.3592 3.95315 19.3592 6.4Z" fill="url(#paint2_linear_13121_31626)"/>
    <path d="M19.3592 6.4V9.6C19.3592 13.1346 22.2245 16 25.7592 16H27.4549H31.9678H28.7678C25.2331 16 22.3678 13.1346 22.3678 9.6V6.4C22.3678 2.86536 19.5024 0 15.9678 0C18.398 0.00989292 19.3592 3.95315 19.3592 6.4Z" fill="url(#paint3_linear_13121_31626)"/>
    <path opacity="0.5" d="M21.7356 5.768V8.968C21.7356 10.8961 22.5896 12.6238 23.9384 13.7972C22.9609 12.6734 22.3676 11.2064 22.3676 9.59986V6.39986C22.3676 4.47174 21.5137 2.74406 20.1648 1.57068C21.1423 2.6946 21.7356 4.16162 21.7356 5.768Z" fill="url(#paint4_linear_13121_31626)"/>
    <path d="M28.7674 16H31.9674C31.9674 12.4654 29.1021 9.60001 25.5674 9.60001H22.3674C22.3674 13.1346 25.2328 16 28.7674 16Z" fill="url(#paint5_linear_13121_31626)"/>
    <path opacity="0.5" d="M23.8178 9.62294C27.5291 9.62294 30.588 12.407 31.0255 16H31.9674C31.9674 12.4654 29.1021 9.60001 25.5674 9.60001H22.3674C22.3674 9.60761 22.368 9.6152 22.368 9.62294H23.8178Z" fill="url(#paint6_linear_13121_31626)"/>
    <path d="M23.3636 9.60001H22.3677C22.3677 13.1064 25.1879 15.9527 28.6837 15.9979C25.8027 15.1901 23.6264 12.6162 23.3636 9.60001Z" fill="url(#paint7_linear_13121_31626)"/>
    <path d="M28.7674 16H31.9674C31.9674 12.4654 29.1021 9.60001 25.5674 9.60001H22.3674C22.3674 13.1346 25.2328 16 28.7674 16Z" fill="url(#paint8_radial_13121_31626)"/>
    <path d="M9.6 16.0325C13.1346 16.0325 16 13.1672 16 9.63253V0.0325317V3.23253C16 6.76717 13.1346 9.63253 9.6 9.63253H6.4C2.86536 9.63253 0 12.4979 0 16.0325H9.6Z" fill="url(#paint9_linear_13121_31626)"/>
    <path d="M9.99137 15.3403H2.60194C1.18381 15.3403 0.000674267 15.645 0.000244141 16.0255V16.0325H9.60024C12.1384 16.0325 14.3312 14.555 15.3661 12.4131C14.2257 14.1741 12.2454 15.3403 9.99137 15.3403Z" fill="url(#paint10_linear_13121_31626)"/>
    <path d="M6.4 12.641H9.6C13.1346 12.641 16 9.77564 16 6.241V4.5453V0.0324097V3.23241C16 6.76705 13.1346 9.63241 9.6 9.63241H6.4C2.86536 9.63241 0 12.4978 0 16.0324C0.00989292 13.6022 3.95315 12.641 6.4 12.641Z" fill="url(#paint11_linear_13121_31626)"/>
    <path d="M6.4 12.641H9.6C13.1346 12.641 16 9.77564 16 6.241V4.5453V0.0324097V3.23241C16 6.76705 13.1346 9.63241 9.6 9.63241H6.4C2.86536 9.63241 0 12.4978 0 16.0324C0.00989292 13.6022 3.95315 12.641 6.4 12.641Z" fill="url(#paint12_linear_13121_31626)"/>
    <path opacity="0.5" d="M5.76798 10.2644H8.96798C10.8962 10.2644 12.6239 9.41043 13.7972 8.06155C12.6734 9.03909 11.2064 9.63238 9.59998 9.63238H6.39998C4.47186 9.63238 2.74419 10.4863 1.5708 11.8352C2.69458 10.8577 4.1616 10.2644 5.76798 10.2644Z" fill="url(#paint13_linear_13121_31626)"/>
    <path d="M16.0001 3.2325V0.0325012C12.4655 0.0325012 9.6001 2.89786 9.6001 6.4325V9.6325C13.1347 9.6325 16.0001 6.76714 16.0001 3.2325Z" fill="url(#paint14_linear_13121_31626)"/>
    <path opacity="0.5" d="M9.62304 8.18213C9.62304 4.47086 12.407 1.41194 16.0001 0.9745V0.0323792C12.4655 0.0323792 9.6001 2.89774 9.6001 6.43238V9.63238C9.6077 9.63238 9.6153 9.63181 9.62304 9.63181V8.18213Z" fill="url(#paint15_linear_13121_31626)"/>
    <path d="M9.6001 8.63648V9.63237C13.1065 9.63237 15.9528 6.81217 15.9979 3.31653C15.1902 6.19737 12.6163 8.37367 9.6001 8.63648Z" fill="url(#paint16_linear_13121_31626)"/>
    <path d="M16.0001 3.2325V0.0325012C12.4655 0.0325012 9.6001 2.89786 9.6001 6.4325V9.6325C13.1347 9.6325 16.0001 6.76714 16.0001 3.2325Z" fill="url(#paint17_radial_13121_31626)"/>
    <path d="M16.0327 22.4C16.0327 18.8654 13.1674 16 9.63271 16H0.0327148H3.23271C6.76735 16 9.63271 18.8654 9.63271 22.4V25.6C9.63271 29.1346 12.4981 32 16.0327 32V22.4Z" fill="url(#paint18_linear_13121_31626)"/>
    <path d="M15.3405 22.0089V29.3983C15.3405 30.8164 15.645 31.9996 16.0257 32H16.0327V22.4C16.0327 19.8618 14.5551 17.669 12.4133 16.6342C14.1743 17.7744 15.3405 19.7547 15.3405 22.0089Z" fill="url(#paint19_linear_13121_31626)"/>
    <path d="M12.6411 25.6V22.4C12.6411 18.8654 9.7757 16 6.24107 16H4.54536H0.0324707H3.23247C6.76711 16 9.63247 18.8654 9.63247 22.4V25.6C9.63247 29.1346 12.4978 32 16.0325 32C13.6023 31.9901 12.6411 28.047 12.6411 25.6Z" fill="url(#paint20_linear_13121_31626)"/>
    <path d="M12.6411 25.6V22.4C12.6411 18.8654 9.7757 16 6.24107 16H4.54536H0.0324707H3.23247C6.76711 16 9.63247 18.8654 9.63247 22.4V25.6C9.63247 29.1346 12.4978 32 16.0325 32C13.6023 31.9901 12.6411 28.047 12.6411 25.6Z" fill="url(#paint21_linear_13121_31626)"/>
    <path opacity="0.5" d="M10.2646 26.232V23.032C10.2646 21.1037 9.41065 19.3761 8.06177 18.2028C9.0393 19.3266 9.63259 20.7936 9.63259 22.4001V25.6001C9.63259 27.5283 10.4865 29.2559 11.8354 30.4293C10.8579 29.3054 10.2646 27.8384 10.2646 26.232Z" fill="url(#paint22_linear_13121_31626)"/>
    <path d="M3.23272 16H0.0327148C0.0327148 19.5346 2.89808 22.4 6.43272 22.4H9.63272C9.63272 18.8654 6.76735 16 3.23272 16Z" fill="url(#paint23_linear_13121_31626)"/>
    <path opacity="0.5" d="M8.18223 22.3771C4.47095 22.3771 1.41203 19.5931 0.974592 16H0.0324707C0.0324707 19.5346 2.89783 22.4 6.43247 22.4H9.63247C9.63247 22.3924 9.6319 22.3848 9.6319 22.3771H8.18223Z" fill="url(#paint24_linear_13121_31626)"/>
    <path d="M8.6366 22.4H9.63249C9.63249 18.8936 6.81229 16.0473 3.31665 16.0021C6.1975 16.8099 8.37379 19.3838 8.6366 22.4Z" fill="url(#paint25_linear_13121_31626)"/>
    <path d="M3.23272 16H0.0327148C0.0327148 19.5346 2.89808 22.4 6.43272 22.4H9.63272C9.63272 18.8654 6.76735 16 3.23272 16Z" fill="url(#paint26_radial_13121_31626)"/>
    <path d="M22.4 15.9676C18.8654 15.9676 16 18.833 16 22.3676V31.9676V28.7676C16 25.233 18.8654 22.3676 22.4 22.3676H25.6C29.1346 22.3676 32 19.5022 32 15.9676H22.4Z" fill="url(#paint27_linear_13121_31626)"/>
    <path d="M22.0088 16.6597H29.3982C30.8163 16.6597 31.9995 16.3552 31.9999 15.9745V15.9676H22.3999C19.8617 15.9676 17.6689 17.4451 16.634 19.587C17.7744 17.8259 19.7547 16.6597 22.0088 16.6597Z" fill="url(#paint28_linear_13121_31626)"/>
    <path d="M25.6 19.359H22.4C18.8654 19.359 16 22.2244 16 25.759V27.4547V31.9676V28.7676C16 25.233 18.8654 22.3676 22.4 22.3676H25.6C29.1346 22.3676 32 19.5022 32 15.9676C31.9901 18.3978 28.0468 19.359 25.6 19.359Z" fill="url(#paint29_linear_13121_31626)"/>
    <path d="M25.6 19.359H22.4C18.8654 19.359 16 22.2244 16 25.759V27.4547V31.9676V28.7676C16 25.233 18.8654 22.3676 22.4 22.3676H25.6C29.1346 22.3676 32 19.5022 32 15.9676C31.9901 18.3978 28.0468 19.359 25.6 19.359Z" fill="url(#paint30_linear_13121_31626)"/>
    <path opacity="0.5" d="M26.2321 21.7356H23.0321C21.1038 21.7356 19.3761 22.5896 18.2029 23.9384C19.3267 22.9609 20.7937 22.3676 22.4002 22.3676H25.6002C27.5283 22.3676 29.256 21.5137 30.4294 20.1648C29.3055 21.1423 27.8384 21.7356 26.2321 21.7356Z" fill="url(#paint31_linear_13121_31626)"/>
    <path d="M16 28.7676V31.9676C19.5346 31.9676 22.4 29.1023 22.4 25.5676V22.3676C18.8654 22.3676 16 25.2328 16 28.7676Z" fill="url(#paint32_linear_13121_31626)"/>
    <path opacity="0.5" d="M22.3771 23.8179C22.3771 27.5291 19.593 30.588 16 31.0255V31.9675C19.5346 31.9675 22.4 29.1021 22.4 25.5675V22.3675C22.3924 22.3675 22.3848 22.368 22.3771 22.368V23.8179Z" fill="url(#paint33_linear_13121_31626)"/>
    <path d="M22.4 23.3635V22.3676C18.8937 22.3676 16.0474 25.1878 16.0022 28.6835C16.81 25.8026 19.3839 23.6263 22.4 23.3635Z" fill="url(#paint34_linear_13121_31626)"/>
    <path d="M16 28.7676V31.9676C19.5346 31.9676 22.4 29.1023 22.4 25.5676V22.3676C18.8654 22.3676 16 25.2328 16 28.7676Z" fill="url(#paint35_radial_13121_31626)"/>
    <defs>
    <linearGradient id="paint0_linear_13121_31626" x1="23.9676" y1="-0.985913" x2="23.9676" y2="16.5269" gradientUnits="userSpaceOnUse">
    <stop offset="0.00057925" stop-color="#9535FC"/>
    <stop offset="0.0714" stop-color="#9244FC"/>
    <stop offset="0.2418" stop-color="#8B64FD"/>
    <stop offset="0.3852" stop-color="#8778FD"/>
    <stop offset="0.4832" stop-color="#857FFD"/>
    <stop offset="0.6694" stop-color="#6F99FE"/>
    <stop offset="0.9997" stop-color="#41CFFF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_13121_31626" x1="17.7772" y1="-0.946832" x2="17.7772" y2="15.8718" gradientUnits="userSpaceOnUse">
    <stop offset="0.00057925" stop-color="#8435FC"/>
    <stop offset="0.0749" stop-color="#7E3CFC"/>
    <stop offset="0.3172" stop-color="#6D50FD"/>
    <stop offset="0.4832" stop-color="#6757FD"/>
    <stop offset="0.6491" stop-color="#6E71FE"/>
    <stop offset="1" stop-color="#7FB2FF"/>
    </linearGradient>
    <linearGradient id="paint2_linear_13121_31626" x1="23.9677" y1="17.7799" x2="23.9677" y2="0.442453" gradientUnits="userSpaceOnUse">
    <stop offset="1.485e-05" stop-color="#16D1FF"/>
    <stop offset="0.1183" stop-color="#2AB2FE"/>
    <stop offset="0.3892" stop-color="#5671FD"/>
    <stop offset="0.5168" stop-color="#6757FD"/>
    <stop offset="0.6828" stop-color="#6D50FD"/>
    <stop offset="0.9251" stop-color="#7E3CFC"/>
    <stop offset="0.9994" stop-color="#8435FC"/>
    </linearGradient>
    <linearGradient id="paint3_linear_13121_31626" x1="23.9677" y1="17.7799" x2="23.9677" y2="0.442453" gradientUnits="userSpaceOnUse">
    <stop offset="1.485e-05" stop-color="#16D1FF"/>
    <stop offset="0.1183" stop-color="#2AB2FE"/>
    <stop offset="0.3892" stop-color="#5671FD"/>
    <stop offset="0.5168" stop-color="#6757FD"/>
    <stop offset="0.6828" stop-color="#6D50FD"/>
    <stop offset="0.9251" stop-color="#7E3CFC"/>
    <stop offset="0.9994" stop-color="#8435FC"/>
    </linearGradient>
    <linearGradient id="paint4_linear_13121_31626" x1="22.0515" y1="15.1574" x2="22.0516" y2="1.9089" gradientUnits="userSpaceOnUse">
    <stop stop-color="#605BFF"/>
    <stop offset="0.5656" stop-color="#5634EA"/>
    <stop offset="1" stop-color="#4F1ADC"/>
    </linearGradient>
    <linearGradient id="paint5_linear_13121_31626" x1="31.4483" y1="12.8" x2="23.334" y2="12.8" gradientUnits="userSpaceOnUse">
    <stop stop-color="#7E5BFF"/>
    <stop offset="0.2443" stop-color="#7753F6"/>
    <stop offset="0.9997" stop-color="#623EDC"/>
    </linearGradient>
    <linearGradient id="paint6_linear_13121_31626" x1="31.4483" y1="12.8" x2="23.334" y2="12.8" gradientUnits="userSpaceOnUse">
    <stop stop-color="#9C69FF"/>
    <stop offset="0.3143" stop-color="#8F61F3"/>
    <stop offset="0.9994" stop-color="#7553DC"/>
    </linearGradient>
    <linearGradient id="paint7_linear_13121_31626" x1="28.3419" y1="12.799" x2="23.0034" y2="12.799" gradientUnits="userSpaceOnUse">
    <stop stop-color="#605BFF"/>
    <stop offset="0.5656" stop-color="#5634EA"/>
    <stop offset="1" stop-color="#4F1ADC"/>
    </linearGradient>
    <radialGradient id="paint8_radial_13121_31626" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.0579 12.7192) rotate(-135) scale(13.5301 5.09171)">
    <stop offset="1.485e-05" stop-color="#34006A"/>
    <stop offset="0.1486" stop-color="#36036F" stop-opacity="0.8514"/>
    <stop offset="0.3149" stop-color="#3D0B7C" stop-opacity="0.6851"/>
    <stop offset="0.4897" stop-color="#481992" stop-opacity="0.5103"/>
    <stop offset="0.6705" stop-color="#582CB2" stop-opacity="0.3295"/>
    <stop offset="0.8539" stop-color="#6C44DA" stop-opacity="0.1461"/>
    <stop offset="1" stop-color="#7F5BFF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="paint9_linear_13121_31626" x1="-0.985935" y1="8.03249" x2="16.5269" y2="8.03249" gradientUnits="userSpaceOnUse">
    <stop offset="0.00057925" stop-color="#9535FC"/>
    <stop offset="0.0714" stop-color="#9244FC"/>
    <stop offset="0.2418" stop-color="#8B64FD"/>
    <stop offset="0.3852" stop-color="#8778FD"/>
    <stop offset="0.4832" stop-color="#857FFD"/>
    <stop offset="0.6694" stop-color="#6F99FE"/>
    <stop offset="0.9997" stop-color="#41CFFF"/>
    </linearGradient>
    <linearGradient id="paint10_linear_13121_31626" x1="-0.946752" y1="14.2228" x2="15.8719" y2="14.2228" gradientUnits="userSpaceOnUse">
    <stop offset="0.00057925" stop-color="#8435FC"/>
    <stop offset="0.0749" stop-color="#7E3CFC"/>
    <stop offset="0.3172" stop-color="#6D50FD"/>
    <stop offset="0.4832" stop-color="#6757FD"/>
    <stop offset="0.6491" stop-color="#6E71FE"/>
    <stop offset="1" stop-color="#7FB2FF"/>
    </linearGradient>
    <linearGradient id="paint11_linear_13121_31626" x1="17.7799" y1="8.03251" x2="0.44243" y2="8.0325" gradientUnits="userSpaceOnUse">
    <stop offset="1.485e-05" stop-color="#16D1FF"/>
    <stop offset="0.1183" stop-color="#2AB2FE"/>
    <stop offset="0.3892" stop-color="#5671FD"/>
    <stop offset="0.5168" stop-color="#6757FD"/>
    <stop offset="0.6828" stop-color="#6D50FD"/>
    <stop offset="0.9251" stop-color="#7E3CFC"/>
    <stop offset="0.9994" stop-color="#8435FC"/>
    </linearGradient>
    <linearGradient id="paint12_linear_13121_31626" x1="17.7799" y1="8.03251" x2="0.44243" y2="8.0325" gradientUnits="userSpaceOnUse">
    <stop offset="1.485e-05" stop-color="#16D1FF"/>
    <stop offset="0.1183" stop-color="#2AB2FE"/>
    <stop offset="0.3892" stop-color="#5671FD"/>
    <stop offset="0.5168" stop-color="#6757FD"/>
    <stop offset="0.6828" stop-color="#6D50FD"/>
    <stop offset="0.9251" stop-color="#7E3CFC"/>
    <stop offset="0.9994" stop-color="#8435FC"/>
    </linearGradient>
    <linearGradient id="paint13_linear_13121_31626" x1="15.1573" y1="9.94846" x2="1.90886" y2="9.94846" gradientUnits="userSpaceOnUse">
    <stop stop-color="#605BFF"/>
    <stop offset="0.5656" stop-color="#5634EA"/>
    <stop offset="1" stop-color="#4F1ADC"/>
    </linearGradient>
    <linearGradient id="paint14_linear_13121_31626" x1="12.8001" y1="0.551611" x2="12.8001" y2="8.66597" gradientUnits="userSpaceOnUse">
    <stop stop-color="#7E5BFF"/>
    <stop offset="0.2443" stop-color="#7753F6"/>
    <stop offset="0.9997" stop-color="#623EDC"/>
    </linearGradient>
    <linearGradient id="paint15_linear_13121_31626" x1="12.8001" y1="0.551622" x2="12.8001" y2="8.66601" gradientUnits="userSpaceOnUse">
    <stop stop-color="#9C69FF"/>
    <stop offset="0.3143" stop-color="#8F61F3"/>
    <stop offset="0.9994" stop-color="#7553DC"/>
    </linearGradient>
    <linearGradient id="paint16_linear_13121_31626" x1="12.799" y1="3.65812" x2="12.799" y2="8.99663" gradientUnits="userSpaceOnUse">
    <stop stop-color="#605BFF"/>
    <stop offset="0.5656" stop-color="#5634EA"/>
    <stop offset="1" stop-color="#4F1ADC"/>
    </linearGradient>
    <radialGradient id="paint17_radial_13121_31626" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.7193 10.9421) rotate(135) scale(13.5301 5.09171)">
    <stop offset="1.485e-05" stop-color="#34006A"/>
    <stop offset="0.1486" stop-color="#36036F" stop-opacity="0.8514"/>
    <stop offset="0.3149" stop-color="#3D0B7C" stop-opacity="0.6851"/>
    <stop offset="0.4897" stop-color="#481992" stop-opacity="0.5103"/>
    <stop offset="0.6705" stop-color="#582CB2" stop-opacity="0.3295"/>
    <stop offset="0.8539" stop-color="#6C44DA" stop-opacity="0.1461"/>
    <stop offset="1" stop-color="#7F5BFF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="paint18_linear_13121_31626" x1="8.03266" y1="32.986" x2="8.03265" y2="15.4731" gradientUnits="userSpaceOnUse">
    <stop offset="0.00057925" stop-color="#9535FC"/>
    <stop offset="0.0714" stop-color="#9244FC"/>
    <stop offset="0.2418" stop-color="#8B64FD"/>
    <stop offset="0.3852" stop-color="#8778FD"/>
    <stop offset="0.4832" stop-color="#857FFD"/>
    <stop offset="0.6694" stop-color="#6F99FE"/>
    <stop offset="0.9997" stop-color="#41CFFF"/>
    </linearGradient>
    <linearGradient id="paint19_linear_13121_31626" x1="14.223" y1="32.9469" x2="14.223" y2="16.1282" gradientUnits="userSpaceOnUse">
    <stop offset="0.00057925" stop-color="#8435FC"/>
    <stop offset="0.0749" stop-color="#7E3CFC"/>
    <stop offset="0.3172" stop-color="#6D50FD"/>
    <stop offset="0.4832" stop-color="#6757FD"/>
    <stop offset="0.6491" stop-color="#6E71FE"/>
    <stop offset="1" stop-color="#7FB2FF"/>
    </linearGradient>
    <linearGradient id="paint20_linear_13121_31626" x1="8.03255" y1="14.2201" x2="8.03255" y2="31.5576" gradientUnits="userSpaceOnUse">
    <stop offset="1.485e-05" stop-color="#16D1FF"/>
    <stop offset="0.1183" stop-color="#2AB2FE"/>
    <stop offset="0.3892" stop-color="#5671FD"/>
    <stop offset="0.5168" stop-color="#6757FD"/>
    <stop offset="0.6828" stop-color="#6D50FD"/>
    <stop offset="0.9251" stop-color="#7E3CFC"/>
    <stop offset="0.9994" stop-color="#8435FC"/>
    </linearGradient>
    <linearGradient id="paint21_linear_13121_31626" x1="8.03255" y1="14.2201" x2="8.03255" y2="31.5576" gradientUnits="userSpaceOnUse">
    <stop offset="1.485e-05" stop-color="#16D1FF"/>
    <stop offset="0.1183" stop-color="#2AB2FE"/>
    <stop offset="0.3892" stop-color="#5671FD"/>
    <stop offset="0.5168" stop-color="#6757FD"/>
    <stop offset="0.6828" stop-color="#6D50FD"/>
    <stop offset="0.9251" stop-color="#7E3CFC"/>
    <stop offset="0.9994" stop-color="#8435FC"/>
    </linearGradient>
    <linearGradient id="paint22_linear_13121_31626" x1="9.94866" y1="16.8427" x2="9.94866" y2="30.0911" gradientUnits="userSpaceOnUse">
    <stop stop-color="#605BFF"/>
    <stop offset="0.5656" stop-color="#5634EA"/>
    <stop offset="1" stop-color="#4F1ADC"/>
    </linearGradient>
    <linearGradient id="paint23_linear_13121_31626" x1="0.551813" y1="19.2" x2="8.66618" y2="19.2" gradientUnits="userSpaceOnUse">
    <stop stop-color="#7E5BFF"/>
    <stop offset="0.2443" stop-color="#7753F6"/>
    <stop offset="0.9997" stop-color="#623EDC"/>
    </linearGradient>
    <linearGradient id="paint24_linear_13121_31626" x1="0.551712" y1="19.2" x2="8.66609" y2="19.2" gradientUnits="userSpaceOnUse">
    <stop stop-color="#9C69FF"/>
    <stop offset="0.3143" stop-color="#8F61F3"/>
    <stop offset="0.9994" stop-color="#7553DC"/>
    </linearGradient>
    <linearGradient id="paint25_linear_13121_31626" x1="3.65823" y1="19.2011" x2="8.99673" y2="19.2011" gradientUnits="userSpaceOnUse">
    <stop stop-color="#605BFF"/>
    <stop offset="0.5656" stop-color="#5634EA"/>
    <stop offset="1" stop-color="#4F1ADC"/>
    </linearGradient>
    <radialGradient id="paint26_radial_13121_31626" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.9424 19.2806) rotate(45) scale(13.5301 5.09171)">
    <stop offset="1.485e-05" stop-color="#34006A"/>
    <stop offset="0.1486" stop-color="#36036F" stop-opacity="0.8514"/>
    <stop offset="0.3149" stop-color="#3D0B7C" stop-opacity="0.6851"/>
    <stop offset="0.4897" stop-color="#481992" stop-opacity="0.5103"/>
    <stop offset="0.6705" stop-color="#582CB2" stop-opacity="0.3295"/>
    <stop offset="0.8539" stop-color="#6C44DA" stop-opacity="0.1461"/>
    <stop offset="1" stop-color="#7F5BFF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="paint27_linear_13121_31626" x1="32.9859" y1="23.9675" x2="15.4731" y2="23.9675" gradientUnits="userSpaceOnUse">
    <stop offset="0.00057925" stop-color="#9535FC"/>
    <stop offset="0.0714" stop-color="#9244FC"/>
    <stop offset="0.2418" stop-color="#8B64FD"/>
    <stop offset="0.3852" stop-color="#8778FD"/>
    <stop offset="0.4832" stop-color="#857FFD"/>
    <stop offset="0.6694" stop-color="#6F99FE"/>
    <stop offset="0.9997" stop-color="#41CFFF"/>
    </linearGradient>
    <linearGradient id="paint28_linear_13121_31626" x1="32.9469" y1="17.7772" x2="16.1282" y2="17.7772" gradientUnits="userSpaceOnUse">
    <stop offset="0.00057925" stop-color="#8435FC"/>
    <stop offset="0.0749" stop-color="#7E3CFC"/>
    <stop offset="0.3172" stop-color="#6D50FD"/>
    <stop offset="0.4832" stop-color="#6757FD"/>
    <stop offset="0.6491" stop-color="#6E71FE"/>
    <stop offset="1" stop-color="#7FB2FF"/>
    </linearGradient>
    <linearGradient id="paint29_linear_13121_31626" x1="14.2201" y1="23.9675" x2="31.5576" y2="23.9675" gradientUnits="userSpaceOnUse">
    <stop offset="1.485e-05" stop-color="#16D1FF"/>
    <stop offset="0.1183" stop-color="#2AB2FE"/>
    <stop offset="0.3892" stop-color="#5671FD"/>
    <stop offset="0.5168" stop-color="#6757FD"/>
    <stop offset="0.6828" stop-color="#6D50FD"/>
    <stop offset="0.9251" stop-color="#7E3CFC"/>
    <stop offset="0.9994" stop-color="#8435FC"/>
    </linearGradient>
    <linearGradient id="paint30_linear_13121_31626" x1="14.2201" y1="23.9675" x2="31.5576" y2="23.9675" gradientUnits="userSpaceOnUse">
    <stop offset="1.485e-05" stop-color="#16D1FF"/>
    <stop offset="0.1183" stop-color="#2AB2FE"/>
    <stop offset="0.3892" stop-color="#5671FD"/>
    <stop offset="0.5168" stop-color="#6757FD"/>
    <stop offset="0.6828" stop-color="#6D50FD"/>
    <stop offset="0.9251" stop-color="#7E3CFC"/>
    <stop offset="0.9994" stop-color="#8435FC"/>
    </linearGradient>
    <linearGradient id="paint31_linear_13121_31626" x1="16.8427" y1="22.0516" x2="30.0912" y2="22.0515" gradientUnits="userSpaceOnUse">
    <stop stop-color="#605BFF"/>
    <stop offset="0.5656" stop-color="#5634EA"/>
    <stop offset="1" stop-color="#4F1ADC"/>
    </linearGradient>
    <linearGradient id="paint32_linear_13121_31626" x1="19.2" y1="31.4484" x2="19.2" y2="23.334" gradientUnits="userSpaceOnUse">
    <stop stop-color="#7E5BFF"/>
    <stop offset="0.2443" stop-color="#7753F6"/>
    <stop offset="0.9997" stop-color="#623EDC"/>
    </linearGradient>
    <linearGradient id="paint33_linear_13121_31626" x1="19.2" y1="31.4484" x2="19.2" y2="23.334" gradientUnits="userSpaceOnUse">
    <stop stop-color="#9C69FF"/>
    <stop offset="0.3143" stop-color="#8F61F3"/>
    <stop offset="0.9994" stop-color="#7553DC"/>
    </linearGradient>
    <linearGradient id="paint34_linear_13121_31626" x1="19.2011" y1="28.3419" x2="19.2011" y2="23.0034" gradientUnits="userSpaceOnUse">
    <stop stop-color="#605BFF"/>
    <stop offset="0.5656" stop-color="#5634EA"/>
    <stop offset="1" stop-color="#4F1ADC"/>
    </linearGradient>
    <radialGradient id="paint35_radial_13121_31626" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.2806 21.0578) rotate(-45) scale(13.53 5.0917)">
    <stop offset="1.485e-05" stop-color="#34006A"/>
    <stop offset="0.1486" stop-color="#36036F" stop-opacity="0.8514"/>
    <stop offset="0.3149" stop-color="#3D0B7C" stop-opacity="0.6851"/>
    <stop offset="0.4897" stop-color="#481992" stop-opacity="0.5103"/>
    <stop offset="0.6705" stop-color="#582CB2" stop-opacity="0.3295"/>
    <stop offset="0.8539" stop-color="#6C44DA" stop-opacity="0.1461"/>
    <stop offset="1" stop-color="#7F5BFF" stop-opacity="0"/>
    </radialGradient>
    </defs>
    </svg>

);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AvatarIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="17" cy="17" r="17" fill="#1e2a4a" />
    <circle cx="17" cy="13" r="5.5" fill="#4a5568" />
    <ellipse cx="17" cy="28" rx="10" ry="7" fill="#4a5568" />
  </svg>
);

export default function Header() {
  const { currentLang, switchLanguage, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const handleLangSelect = (code) => {
    switchLanguage(code);
    setDropdownOpen(false);
  };

  return (
    <header className="omni-header">
      {/* Brand */}
      <div className="omni-header__brand">
        <OmniMedLogo />
        <span className="omni-header__brand-name">{t.brandName}</span>
      </div>

      {/* Actions */}
      <div className="omni-header__actions">
        {/* Notification bell */}
        <button className="omni-header__icon-btn" aria-label={t.notifications}>
          <BellIcon />
        </button>

        {/* Language selector */}
        <div className="omni-header__lang-wrapper" ref={dropdownRef}>
          <button
            className="omni-header__lang-btn"
            onClick={() => setDropdownOpen((prev) => !prev)}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            <GlobeIcon />
            <span>{t.langLabel}</span>
            <span className={`omni-header__chevron${dropdownOpen ? ' open' : ''}`}>
              <ChevronDown />
            </span>
          </button>

          {dropdownOpen && (
            <ul className="omni-header__lang-dropdown" role="listbox">
              {LANGUAGES.map((lang) => (
                <li key={lang.code} role="option" aria-selected={currentLang === lang.code}>
                  <button
                    className={`omni-header__lang-option${currentLang === lang.code ? ' active' : ''}`}
                    onClick={() => handleLangSelect(lang.code)}
                  >
                    <span className="omni-header__lang-option-label">{lang.nativeLabel}</span>
                    {currentLang === lang.code && <CheckIcon />}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* User avatar */}
        <button className="omni-header__avatar-btn" aria-label={t.userProfile}>
          <AvatarIcon />
        </button>
      </div>
    </header>
  );
}
