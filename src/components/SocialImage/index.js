'use client';
import {useSelector} from 'react-redux';
import {colorBlue80Light, colorWhite70Dark} from '../../app/styles/variables.module.scss';

const SocialImage = ({name, color}) => {
  const {theme} = useSelector(state => state.themeStore);

  const tg = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_125_29)">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM29.27 13.6017C28.97 16.7633 27.6667 24.4383 27.005 27.98C26.725 29.48 26.1717 29.9817 25.6383 30.03C24.4767 30.1367 23.595 29.2617 22.47 28.525C20.71 27.3717 19.715 26.6533 18.0067 25.5267C16.0317 24.225 17.3117 23.51 18.4367 22.3417C18.7317 22.035 23.8483 17.38 23.9483 16.9583C23.96 16.905 23.9733 16.7083 23.855 16.605C23.7367 16.5017 23.565 16.5367 23.4417 16.565C23.265 16.605 20.4533 18.4633 15.005 22.14C14.2067 22.6883 13.4833 22.955 12.835 22.9417C12.1217 22.9267 10.7483 22.5383 9.72667 22.205C8.475 21.7983 7.47833 21.5817 7.565 20.8917C7.61 20.5317 8.105 20.1633 9.05167 19.7867C14.8817 17.2467 18.77 15.5717 20.715 14.7617C26.27 12.4517 27.4233 12.05 28.1767 12.0367C29.12 12.0233 29.3467 12.8017 29.27 13.6017Z"
            fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
    </g>
    <defs>
      <clipPath id="clip0_125_29">
        <rect width="40" height="40" fill="none"/>
      </clipPath>
    </defs>
  </svg>;

  const inst = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_125_32)">
      <path
        d="M20 3.60333C25.34 3.60333 25.9733 3.62333 28.0817 3.72C30.2617 3.82 32.5067 4.31667 34.095 5.905C35.6983 7.50833 36.18 9.73167 36.28 11.9183C36.3767 14.0267 36.3967 14.66 36.3967 20C36.3967 25.34 36.3767 25.9733 36.28 28.0817C36.1817 30.25 35.6733 32.5167 34.095 34.095C32.4917 35.6983 30.27 36.18 28.0817 36.28C25.9733 36.3767 25.34 36.3967 20 36.3967C14.66 36.3967 14.0267 36.3767 11.9183 36.28C9.76667 36.1817 7.47 35.6617 5.905 34.095C4.31 32.5 3.82 30.255 3.72 28.0817C3.62333 25.9733 3.60333 25.34 3.60333 20C3.60333 14.66 3.62333 14.0267 3.72 11.9183C3.81833 9.75833 4.33167 7.47833 5.905 5.905C7.505 4.305 9.73667 3.82 11.9183 3.72C14.0267 3.62333 14.66 3.60333 20 3.60333ZM20 0C14.5683 0 13.8867 0.0233333 11.7533 0.12C8.66167 0.261667 5.59167 1.12167 3.35667 3.35667C1.11333 5.6 0.261667 8.66333 0.12 11.7533C0.0233333 13.8867 0 14.5683 0 20C0 25.4317 0.0233333 26.1133 0.12 28.2467C0.261667 31.335 1.125 34.4133 3.35667 36.6433C5.59833 38.885 8.66667 39.7383 11.7533 39.88C13.8867 39.9767 14.5683 40 20 40C25.4317 40 26.1133 39.9767 28.2467 39.88C31.3367 39.7383 34.41 38.8767 36.6433 36.6433C38.8883 34.3983 39.7383 31.3367 39.88 28.2467C39.9767 26.1133 40 25.4317 40 20C40 14.5683 39.9767 13.8867 39.88 11.7533C39.7383 8.66167 38.8767 5.59 36.6433 3.35667C34.405 1.11833 31.3283 0.26 28.2467 0.12C26.1133 0.0233333 25.4317 0 20 0Z"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
      <path
        d="M20 9.72998C14.3283 9.72998 9.73001 14.3283 9.73001 20C9.73001 25.6716 14.3283 30.27 20 30.27C25.6717 30.27 30.27 25.6716 30.27 20C30.27 14.3283 25.6717 9.72998 20 9.72998ZM20 26.6666C16.3183 26.6666 13.3333 23.6816 13.3333 20C13.3333 16.3183 16.3183 13.3333 20 13.3333C23.6817 13.3333 26.6667 16.3183 26.6667 20C26.6667 23.6816 23.6817 26.6666 20 26.6666Z"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
      <path
        d="M30.6767 11.7233C32.0022 11.7233 33.0767 10.6488 33.0767 9.32334C33.0767 7.99786 32.0022 6.92334 30.6767 6.92334C29.3512 6.92334 28.2767 7.99786 28.2767 9.32334C28.2767 10.6488 29.3512 11.7233 30.6767 11.7233Z"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
    </g>
    <defs>
      <clipPath id="clip0_125_32">
        <rect width="40" height="40" fill="none"/>
      </clipPath>
    </defs>
  </svg>;

  const link = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_125_37)">
      <path
        d="M34.0827 34.0842H28.1555V24.8019C28.1555 22.5882 28.1161 19.7398 25.0727 19.7398C21.9859 19.7398 21.5128 22.1506 21.5128 24.6422V34.0842H15.5876V14.9952H21.2783V17.603H21.3571C22.5181 15.62 24.6745 14.4353 26.9709 14.5201C32.9789 14.5201 34.0847 18.4723 34.0847 23.6113L34.0827 34.0842ZM8.89962 12.3853C6.99946 12.3853 5.46001 10.8458 5.46001 8.94556C5.46001 7.04532 6.99946 5.50582 8.89962 5.50582C10.7998 5.50582 12.3392 7.04532 12.3392 8.94556C12.3392 10.8458 10.7998 12.3853 8.89962 12.3853ZM11.8622 34.0842H5.92914V14.9952H11.8622V34.0842ZM37.0374 0.00224045H2.95077C1.34036 -0.0155003 0.0197112 1.27563 0 2.8861V37.1139C0.0197112 38.7264 1.34036 40.0175 2.95077 39.9998H37.0374C38.6518 40.0195 39.9783 38.7284 40 37.1139V2.88413C39.9763 1.26972 38.6498 -0.021414 37.0374 0.000269158"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
    </g>
    <defs>
      <clipPath id="clip0_125_37">
        <rect width="40" height="40" fill="none"/>
      </clipPath>
    </defs>
  </svg>;

  const git = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_125_42)">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M20 0.493408C8.955 0.493408 0 9.44674 0 20.4934C0 29.3301 5.73 36.8267 13.6767 39.4717C14.6767 39.6567 15.0433 39.0384 15.0433 38.5101C15.0433 38.0334 15.025 36.4584 15.0167 34.7867C9.45333 35.9967 8.27833 32.4267 8.27833 32.4267C7.36833 30.1151 6.05833 29.5001 6.05833 29.5001C4.24333 28.2584 6.195 28.2851 6.195 28.2851C8.20333 28.4267 9.26 30.3467 9.26 30.3467C11.0433 33.4034 13.9383 32.5201 15.08 32.0084C15.26 30.7151 15.7783 29.8334 16.35 29.3334C11.9083 28.8284 7.23833 27.1134 7.23833 19.4501C7.23833 17.2667 8.02 15.4817 9.3 14.0817C9.09167 13.5767 8.40667 11.5434 9.49333 8.78841C9.49333 8.78841 11.1733 8.25174 14.995 10.8384C16.59 10.3951 18.3 10.1734 20 10.1651C21.7 10.1734 23.4117 10.3951 25.01 10.8384C28.8267 8.25007 30.505 8.78841 30.505 8.78841C31.5933 11.5434 30.9083 13.5767 30.7017 14.0817C31.9833 15.4817 32.76 17.2667 32.76 19.4501C32.76 27.1317 28.0817 28.8234 23.6283 29.3184C24.345 29.9384 24.985 31.1567 24.985 33.0217C24.985 35.6984 24.9617 37.8517 24.9617 38.5101C24.9617 39.0417 25.3217 39.6667 26.335 39.4701C34.2783 36.8217 40.0017 29.3284 40.0017 20.4951C40 9.44841 31.045 0.493408 20 0.493408Z"
            fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
      <path
        d="M7.57499 29.2101C7.53166 29.3101 7.37499 29.3401 7.23166 29.2718C7.08666 29.2068 7.00499 29.0701 7.05166 28.9718C7.09499 28.8701 7.25166 28.8418 7.39666 28.9101C7.54166 28.9735 7.62499 29.1101 7.57499 29.2101Z"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
      <path
        d="M8.385 30.1133C8.29 30.2016 8.10333 30.16 7.97667 30.0216C7.845 29.8816 7.82167 29.695 7.91833 29.6066C8.01667 29.5183 8.19667 29.56 8.32834 29.7C8.46 29.8383 8.485 30.0233 8.385 30.1133Z"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
      <path
        d="M9.17334 31.2651C9.05 31.3501 8.85 31.2701 8.72667 31.0934C8.60334 30.9151 8.60334 30.7018 8.73 30.6168C8.85334 30.5318 9.05167 30.6084 9.17667 30.7851C9.29834 30.9651 9.29834 31.1784 9.17334 31.2651Z"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
      <path
        d="M10.2533 32.3785C10.1433 32.5001 9.91 32.4668 9.74 32.3018C9.565 32.1401 9.51666 31.9118 9.62666 31.7901C9.73833 31.6685 9.97333 31.7035 10.145 31.8668C10.3183 32.0285 10.37 32.2585 10.2533 32.3785Z"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
      <path
        d="M11.745 33.0235C11.6967 33.1802 11.4717 33.2519 11.245 33.1852C11.0183 33.1169 10.87 32.9335 10.9167 32.7752C10.9633 32.6169 11.19 32.5435 11.4183 32.6152C11.6433 32.6819 11.7917 32.8652 11.745 33.0235Z"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
      <path
        d="M13.3817 33.1434C13.3867 33.3084 13.195 33.445 12.9567 33.4484C12.7183 33.4534 12.5233 33.32 12.5217 33.1584C12.5217 32.9917 12.71 32.8567 12.9483 32.8517C13.1867 32.8467 13.3817 32.98 13.3817 33.1434Z"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
      <path
        d="M14.905 32.8852C14.9333 33.0452 14.7683 33.2118 14.5317 33.2552C14.3 33.2985 14.085 33.1985 14.055 33.0385C14.0267 32.8735 14.195 32.7085 14.4267 32.6652C14.6617 32.6235 14.875 32.7202 14.905 32.8852Z"
        fill={color ? color : theme === 'light' ? colorBlue80Light : colorWhite70Dark}/>
    </g>
    <defs>
      <clipPath id="clip0_125_42">
        <rect width="40" height="40" fill="none"/>
      </clipPath>
    </defs>
  </svg>;


  let imageSvg;
  switch (name) {
  case 'telegram':
    imageSvg = tg;
    break;
  case 'instagram':
    imageSvg = inst;
    break;
  case 'linkedin':
    imageSvg = link;
    break;
  case 'github':
    imageSvg = git;
    break;
  }

  return (
    <div style={{display: 'flex'}}>
      {imageSvg}
    </div>
  );
};

export default SocialImage;