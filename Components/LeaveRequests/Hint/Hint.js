import React from "react";

const Hint = (props) => {
return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hint">
    
    <rect width="16" height="16" fill="#F0F0F0"/>
    <g clipPath="url(#clip0)">
    <rect width="1440" height="950" transform="translate(-494 -499)" fill="white"/>
    <rect x="-494" y="-499" width="1440" height="1000" fill="#334461"/>
    <rect x="-494" y="-499" width="1440" height="950" fill="#F6F8FD"/>
    <g filter="url(#filter0_d)">
    <rect x="-374" y="-286" width="470" height="550" rx="5" fill="white"/>
    </g>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z" stroke="#AFB7BF"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.41504 9.22953V8.84412C7.41504 8.51078 7.48622 8.22085 7.62858 7.97432C7.77094 7.7278 8.03136 7.46564 8.40983 7.18787C8.77442 6.92745 9.01486 6.71564 9.13118 6.55245C9.2475 6.38925 9.30566 6.20696 9.30566 6.00557C9.30566 5.77988 9.22233 5.60801 9.05566 5.48995C8.889 5.37189 8.65636 5.31287 8.35775 5.31287C7.83691 5.31287 7.24317 5.483 6.5765 5.82328L6.00879 4.68266C6.7831 4.24863 7.60427 4.03162 8.47233 4.03162C9.18761 4.03162 9.75618 4.20349 10.1781 4.54724C10.5999 4.89099 10.8109 5.34932 10.8109 5.92224C10.8109 6.30419 10.7241 6.63405 10.5505 6.91182C10.3768 7.1896 10.047 7.5021 9.56087 7.84932C9.22754 8.09585 9.0166 8.28335 8.92806 8.41182C8.83952 8.5403 8.79525 8.7087 8.79525 8.91703V9.22953H7.41504ZM7.24837 11.0108C7.24837 10.7191 7.3265 10.4986 7.48275 10.3493C7.639 10.2 7.86643 10.1254 8.16504 10.1254C8.45323 10.1254 8.67632 10.2018 8.83431 10.3545C8.9923 10.5073 9.07129 10.7261 9.07129 11.0108C9.07129 11.2851 8.99143 11.5012 8.83171 11.6592C8.67198 11.8172 8.44976 11.8962 8.16504 11.8962C7.87337 11.8962 7.64768 11.8189 7.48796 11.6644C7.32823 11.5099 7.24837 11.292 7.24837 11.0108Z" fill="#AFB7BF"/>
    </g>
    <defs>
    <filter id="filter0_d" x="-377" y="-288" width="476" height="556" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dy="1"/>
    <feGaussianBlur stdDeviation="1.5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.294118 0 0 0 0 0.572549 0 0 0 0.15 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <clipPath id="clip0">
    <rect width="1440" height="950" fill="white" transform="translate(-494 -499)"/>
    </clipPath>
    </defs>
    </svg>
    )
}

export default Hint;