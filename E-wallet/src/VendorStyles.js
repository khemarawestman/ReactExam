// src/utils/VendorStyles.js
import DefaultLogo from '../src/assets/vendor-blockchain.svg';
import Vendor1Logo from '../src/assets/vendor-bitcoin.svg';
import Vendor2Logo from '../src/assets/vendor-blockchain.svg';
// Import other vendor logos

const VendorStyles = {
  vendor1: {
    logo: Vendor1Logo,
    color: "#FF4500", // Example color for Vendor 1
  },
  vendor2: {
    logo: Vendor2Logo,
    color: "#1E90FF", // Example color for Vendor 2
  },
  // Add more vendors as needed
  default: {
    logo: DefaultLogo,
    color: "#FFFFFF", // Default color
  },
};

export default VendorStyles;
