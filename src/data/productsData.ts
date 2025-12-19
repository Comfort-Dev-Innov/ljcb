import { IconType } from 'react-icons';
import { GiArmoredPants } from 'react-icons/gi';
import { FaHospital, FaBook, FaTools, FaBox, FaPlug, FaExclamationTriangle, FaCog } from 'react-icons/fa';

export interface Product {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  title: string;
  icon: IconType;
  image: string;
  products: Product[];
}

export const categoriesData: Category[] = [
  {
    id: 1,
    title: "PPE (Personal Protective Equipment)",
    icon: GiArmoredPants,
    image: "/assets/images/ppe.png",
    products: [
      { id: 1, name: "EYEWEAR - GOGGLES PLASTIC WHITE" },
      { id: 2, name: "EYEWEAR - KINGATE ORANGE" },
      { id: 3, name: "EYEWEAR - ORDINARY PLASTIC BLACK" },
      { id: 4, name: "HARD HAT - BLUE" },
      { id: 5, name: "HARD HAT - WHITE" },
      { id: 6, name: "HARD HAT - YELLOW" },
      { id: 7, name: "GLOVES - LEATHER BROWN" },
      { id: 8, name: "GLOVES - RUBBER BLACK" },
      { id: 9, name: "SAFETY VEST - ORANGE" },
      { id: 10, name: "SAFETY VEST - YELLOW" },
      { id: 11, name: "FACE MASK - SURGICAL" },
      { id: 12, name: "FACE SHIELD - CLEAR" },
      { id: 13, name: "EAR PLUGS - FOAM" },
      { id: 14, name: "SAFETY BOOTS - STEEL TOE" },
      { id: 15, name: "COVERALLS - DISPOSABLE" },
    ]
  },
  {
    id: 2,
    title: "Medical Supplies",
    icon: FaHospital,
    image: "/assets/images/medical.png",
    products: [
      { id: 1, name: "SURGICAL MASK - 3 PLY" },
      { id: 2, name: "N95 RESPIRATOR MASK" },
      { id: 3, name: "DISPOSABLE GLOVES - LATEX" },
      { id: 4, name: "DISPOSABLE GLOVES - NITRILE" },
      { id: 5, name: "HAND SANITIZER - 500ML" },
      { id: 6, name: "ALCOHOL - 70% ISOPROPYL" },
      { id: 7, name: "THERMOMETER - DIGITAL" },
      { id: 8, name: "THERMOMETER - INFRARED" },
      { id: 9, name: "GAUZE BANDAGE - STERILE" },
      { id: 10, name: "COTTON BALLS" },
      { id: 11, name: "MEDICAL TAPE" },
      { id: 12, name: "FIRST AID KIT" },
      { id: 13, name: "SYRINGE - 5ML" },
      { id: 14, name: "BLOOD PRESSURE MONITOR" },
    ]
  },
  {
    id: 3,
    title: "Office & School Supplies",
    icon: FaBook,
    image: "/assets/images/school.png",
    products: [
      { id: 1, name: "BALLPEN - BLUE" },
      { id: 2, name: "BALLPEN - BLACK" },
      { id: 3, name: "BALLPEN - RED" },
      { id: 4, name: "PENCIL - HB" },
      { id: 5, name: "PENCIL - 2B" },
      { id: 6, name: "NOTEBOOK - SPIRAL A4" },
      { id: 7, name: "NOTEBOOK - COMPOSITION" },
      { id: 8, name: "FOLDER - PLASTIC" },
      { id: 9, name: "FOLDER - MANILA" },
      { id: 10, name: "STAPLER - STANDARD" },
      { id: 11, name: "STAPLE WIRE - 10mm" },
      { id: 12, name: "PAPER CLIPS - ASSORTED" },
      { id: 13, name: "BOND PAPER - A4" },
      { id: 14, name: "BOND PAPER - LEGAL" },
      { id: 15, name: "SCISSORS - 8 INCH" },
      { id: 16, name: "GLUE STICK" },
      { id: 17, name: "CORRECTION TAPE" },
      { id: 18, name: "HIGHLIGHTER - ASSORTED" },
    ]
  },
  {
    id: 4,
    title: "Hardware/Maintenance Supplies",
    icon: FaTools,
    image: "/assets/images/hardware.png",
    products: [
      { id: 1, name: "HAMMER - CLAW 16OZ" },
      { id: 2, name: "SCREWDRIVER SET" },
      { id: 3, name: "PLIERS - COMBINATION" },
      { id: 4, name: "WRENCH - ADJUSTABLE" },
      { id: 5, name: "TAPE MEASURE - 5M" },
      { id: 6, name: "UTILITY KNIFE" },
      { id: 7, name: "NAILS - ASSORTED" },
      { id: 8, name: "SCREWS - ASSORTED" },
      { id: 9, name: "BOLTS & NUTS - ASSORTED" },
      { id: 10, name: "DUCT TAPE" },
      { id: 11, name: "ELECTRICAL TAPE" },
      { id: 12, name: "LUBRICANT SPRAY" },
      { id: 13, name: "PAINT BRUSH - ASSORTED" },
      { id: 14, name: "SANDPAPER - ASSORTED GRIT" },
      { id: 15, name: "DRILL BITS SET" },
    ]
  },
  {
    id: 5,
    title: "Packaging Materials",
    icon: FaBox,
    image: "/assets/images/packaging.webp",
    products: [
      { id: 1, name: "CORRUGATED BOX - SMALL" },
      { id: 2, name: "CORRUGATED BOX - MEDIUM" },
      { id: 3, name: "CORRUGATED BOX - LARGE" },
      { id: 4, name: "BUBBLE WRAP - ROLL" },
      { id: 5, name: "PACKING TAPE - BROWN" },
      { id: 6, name: "PACKING TAPE - CLEAR" },
      { id: 7, name: "STRETCH FILM - ROLL" },
      { id: 8, name: "FOAM SHEETS" },
      { id: 9, name: "PLASTIC BAG - SMALL" },
      { id: 10, name: "PLASTIC BAG - MEDIUM" },
      { id: 11, name: "PLASTIC BAG - LARGE" },
      { id: 12, name: "ZIPLOCK BAGS - ASSORTED" },
      { id: 13, name: "CARTON SEALER" },
      { id: 14, name: "STRAPPING TAPE" },
    ]
  },
  {
    id: 6,
    title: "ELECTRONIC",
    icon: FaPlug,
    image: "/assets/images/electronic.png",
    products: [
      { id: 1, name: "EXTENSION CORD - 3M" },
      { id: 2, name: "EXTENSION CORD - 5M" },
      { id: 3, name: "POWER STRIP - 4 OUTLET" },
      { id: 4, name: "POWER STRIP - 6 OUTLET" },
      { id: 5, name: "USB CABLE - TYPE C" },
      { id: 6, name: "USB CABLE - MICRO USB" },
      { id: 7, name: "HDMI CABLE - 2M" },
      { id: 8, name: "LED BULB - 9W" },
      { id: 9, name: "LED BULB - 12W" },
      { id: 10, name: "FLASHLIGHT - LED" },
      { id: 11, name: "BATTERIES - AA" },
      { id: 12, name: "BATTERIES - AAA" },
      { id: 13, name: "MOUSE - WIRELESS" },
      { id: 14, name: "KEYBOARD - USB" },
    ]
  },
  {
    id: 7,
    title: "Safety Equipment",
    icon: FaExclamationTriangle,
    image: "/assets/images/safety.png",
    products: [
      { id: 1, name: "FIRE EXTINGUISHER - 5KG" },
      { id: 2, name: "FIRE EXTINGUISHER - 10KG" },
      { id: 3, name: "SMOKE DETECTOR" },
      { id: 4, name: "EMERGENCY LIGHT" },
      { id: 5, name: "EXIT SIGN - LED" },
      { id: 6, name: "SAFETY SIGNAGE - ASSORTED" },
      { id: 7, name: "TRAFFIC CONE" },
      { id: 8, name: "CAUTION TAPE" },
      { id: 9, name: "REFLECTIVE VEST" },
      { id: 10, name: "EMERGENCY KIT" },
      { id: 11, name: "SAFETY BARRIER" },
      { id: 12, name: "WARNING LIGHTS" },
    ]
  },
  {
    id: 8,
    title: "Services",
    icon: FaCog,
    image: "/assets/images/services.png",
    products: [
      { id: 1, name: "BUILDING MAINTENANCE" },
      { id: 2, name: "ELECTRICAL SERVICES" },
      { id: 3, name: "PLUMBING SERVICES" },
      { id: 4, name: "AIRCON CLEANING & MAINTENANCE" },
      { id: 5, name: "PEST CONTROL SERVICES" },
      { id: 6, name: "JANITORIAL SERVICES" },
      { id: 7, name: "SECURITY SERVICES" },
      { id: 8, name: "DELIVERY SERVICES" },
      { id: 9, name: "INSTALLATION SERVICES" },
      { id: 10, name: "CONSULTATION SERVICES" },
      { id: 11, name: "EQUIPMENT RENTAL" },
      { id: 12, name: "SUPPLY MANAGEMENT" },
    ]
  },
];

