import image1 from "./assets/images/image_p2_1.jpeg";
import image2 from "./assets/images/image_p2_2.jpeg";
import image3 from "./assets/images/image_p3_1.jpeg";
import image4 from "./assets/images/image_p4_1.jpeg";
import image5 from "./assets/images/image_p5_1.jpeg";
import image6 from "./assets/images/image_p6_1.jpeg";
import image7 from "./assets/images/image_p7_1.jpeg";
import image8 from "./assets/images/image_p8_1.jpeg";
import image9 from "./assets/images/image_p9_1.jpeg";
import jackPhoto from "./assets/images/DSC_2753.JPG";

export const CONTACT = {
  whatsapp: "254739704350",
  whatsappDisplay: "+254 739 704 350",
  email1: "vertexdeltagroup@gmail.com",
  email2: "vertexdeltagroup@gmail.com",
  location: "Nairobi, Kenya",
};

export const PROJECTS = [
  {
    id: 1,
    slug: "etago-4-bed-maisonette",
    title: "4-Bedroom Maisonette",
    location: "Etago, Kisii County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A generously proportioned four-bedroom maisonette embraced by the scenic beauty of Kisii County. Designed for growing families, the home blends comfort and sophistication with a 35° pitch roof, natural stone cladding, steel casement windows, and ceramic tile finishes throughout.",
    longDescription:
      "This four-bedroom maisonette showcases modern residential design principles applied to a scenic Kisii County setting. The project demonstrates excellent spatial planning with clearly defined functional zones. The maisonette features high-quality materials including natural stone cladding, steel casement windows for durability and thermal efficiency, and ceramic tiles throughout. Special attention was paid to ventilation and light, with the 35° pitch roof providing both weather protection and visual character. Each bedroom is generously proportioned, and the common areas feature open-plan living that extends to a well-landscaped exterior space.",
    image: image1,
    price: 1500000,
    currency: "KES",
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      plotSize: "0.5 acres",
      builtArea: "450 sqm",
      roofPitch: "35°",
      materials: ["Natural stone cladding", "Steel casement windows", "Ceramic tiles"],
    },
    amenities: ["Open-plan living", "Master suite", "Guest bedroom", "Landscaped grounds"],
    images: [image1],
  },
  {
    id: 2,
    slug: "joska-3-bed-bungalow",
    title: "3-Bedroom Bungalow",
    location: "Joska, Kangundo Road, Nairobi",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A meticulously designed three-bedroom bungalow nestled in the serene locality of Joska along Kangundo Road. The contemporary design features a carport, gazebo, open-plan living spaces, breakfast area, and lush landscaped surroundings — a peaceful retreat without compromising on style and functionality.",
    longDescription:
      "Located in the tranquil Joska neighborhood, this three-bedroom bungalow represents precision in contemporary residential design. The property features thoughtfully integrated outdoor spaces including a dedicated carport and decorative gazebo, enhancing both utility and aesthetic appeal. The open-plan living concept connects the lounge, dining, and kitchen areas seamlessly, promoting natural flow and social interaction. A dedicated breakfast area provides additional dining flexibility. Landscaping was carefully planned to create privacy while maintaining the home's visual connection to its natural surroundings.",
    image: image2,
    price: 1800000,
    currency: "KES",
    specifications: {
      bedrooms: 3,
      bathrooms: 2,
      plotSize: "0.75 acres",
      builtArea: "380 sqm",
      carport: "Yes",
      gazebo: "Yes",
    },
    amenities: ["Carport", "Gazebo", "Open-plan living", "Breakfast area", "Landscaped grounds"],
    images: [image2],
  },
  {
    id: 3,
    slug: "ruiru-apartments",
    title: "Ruiru Apartments",
    location: "Ruiru, Kiambu County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A multi-storey apartment complex fusing contemporary design with practical utility. The facade features clean lines and expansive windows for abundant natural light. One- and two-bedroom units are thoughtfully configured for spatial efficiency, with private balconies, designated parking, underground water tanks, and solar panels on the roof terrace.",
    longDescription:
      "This multi-storey apartments project exemplifies modern urban residential design. The complex accommodates a mix of one- and two-bedroom units, optimizing for both affordability and comfort. The contemporary facade with clean lines and expansive glazing creates a visually striking presence while maximizing natural illumination within units. Each unit includes private balconies for outdoor space and privacy. Building infrastructure includes underground water storage ensuring reliable supply, solar panels for energy efficiency, and designated parking spaces for residents. The rooftop terrace serves as a communal space with panoramic views.",
    image: image3,
    price: 950000,
    currency: "KES",
    specifications: {
      storeys: 5,
      totalUnits: 20,
      bedroomVariations: ["1-bed", "2-bed"],
      parkingSpaces: 25,
      waterTanks: "Underground 50,000L",
      solarCapacity: "10kWp",
    },
    amenities: ["Private balconies", "Parking", "Water tanks", "Solar panels", "Communal rooftop"],
    images: [image3],
  },
  {
    id: 4,
    slug: "kikuyu-modern-house",
    title: "Modern House in Kikuyu",
    location: "Kikuyu, Kiambu County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A five-bedroom modern-style maisonette with a focus on contemporary design and functionality. Clean lines, expansive glass windows, and a minimalist colour palette create a harmonious connection with the natural surroundings. The open floor plan promotes a communal atmosphere with a modern kitchen at its heart.",
    longDescription:
      "This modern five-bedroom maisonette in Kikuyu showcases minimalist architectural principles adapted to residential living. Every design element serves both aesthetic and functional purposes. The façade is characterized by clean lines and substantial glazing, flooding the interior with natural light. The open floor plan on the ground level creates fluid spaces for living, dining, and kitchen use, with the kitchen positioned as the functional and social hub. The modern kitchen incorporates contemporary appliances and efficient layouts. Upper floors house the sleeping quarters, including a luxurious master suite with ensuite facilities.",
    image: image4,
    price: 2200000,
    currency: "KES",
    specifications: {
      bedrooms: 5,
      bathrooms: 3,
      plotSize: "1.0 acre",
      builtArea: "520 sqm",
      storeys: 3,
    },
    amenities: ["Modern kitchen", "Open-plan living", "Master suite", "Multiple balconies"],
    images: [image4],
  },
  {
    id: 5,
    slug: "ruiru-4-bed-maisonette",
    title: "4-Bedroom Maisonette — Ruiru",
    location: "Ruiru, Kiambu County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A four-bedroom modern-style maisonette that seamlessly blends architectural innovation with comfort. Clean lines, expansive windows, and a sleek stone-clad façade welcome natural light into every corner. The open-plan ground floor connects lounge, dining, kitchen, and guest bedroom effortlessly, while the upper floor houses the master suite, theatre room, and office.",
    longDescription:
      "This Ruiru maisonette represents a thoughtful blend of modern aesthetics with practical residential requirements. The stone-clad façade provides both visual interest and durability. Expansive windows throughout maximize daylighting and create visual connection to outdoor spaces. The ground floor features an open-plan configuration connecting the main living areas, with a guest bedroom providing accommodation flexibility. The upper floor is dedicated to private sleeping and working spaces, including a dedicated theatre room and home office — ideal for contemporary work-from-home lifestyles. The master suite is a private retreat with luxurious ensuite facilities.",
    image: image5,
    price: 1950000,
    currency: "KES",
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      plotSize: "0.6 acres",
      builtArea: "480 sqm",
      storeys: 2,
      specialRooms: ["Theatre room", "Home office"],
    },
    amenities: ["Theatre room", "Home office", "Master suite", "Guest bedroom", "Open-plan living"],
    images: [image5],
  },
  {
    id: 6,
    slug: "lavington-landscaping",
    title: "Landscaping Project",
    location: "Lavington, Nairobi County",
    type: "Landscape",
    year: "2023",
    status: "Completed",
    description:
      "A comprehensive landscaping masterplan for a mixed-use compound in Lavington, blending natural beauty with functional outdoor spaces. The design integrates royal palms, marigold borders, Kikuyu grass lawns, golden duranta hedges, covered VIP parking, and a swimming pool — seamlessly connecting the site to the surrounding urban fabric.",
    longDescription:
      "This comprehensive landscaping project transformed a commercial compound into an integrated, aesthetically pleasing environment. The masterplan incorporated diverse planting schemes featuring tropical and temperate species carefully selected for the Nairobi climate. Royal palms create vertical accents and provide shade, while Kikuyu grass forms resilient lawn areas. Marigold borders add color and definition, while golden duranta hedges create natural screening and visual interest. Functional elements including a swimming pool, covered VIP parking, and circulation paths were seamlessly integrated. The overall design creates distinct zones within the compound while maintaining visual flow.",
    image: image6,
    price: 350000,
    currency: "KES",
    specifications: {
      siteArea: "2.5 acres",
      plantingSpecies: 15,
      swimmingPool: "Yes",
      parkingSpaces: "20 covered",
    },
    amenities: ["Swimming pool", "Covered parking", "Lawn areas", "Planting borders", "Irrigation system"],
    images: [image6],
  },
  {
    id: 7,
    slug: "karen-4-bed-duplexes",
    title: "4-Bedroom Duplexes",
    location: "Karen, Nairobi County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "Elegant four-bedroom duplexes in Karen featuring a sunken lounge, island kitchen with pantry and breakfast area, and a dedicated laundry wing on the ground floor. The upper level accommodates a master suite with walk-in closet and balcony, family room, girls' and boys' rooms — all under a signature 35° pitch red-tile roof.",
    longDescription:
      "These elegant Karen duplexes represent luxury residential design at its finest. Each unit is meticulously planned with distinct zones for different family activities. The ground floor features a sunken lounge creating spatial drama and intimacy, complemented by an island kitchen — the heart of the home — with dedicated pantry and breakfast area. A separate laundry wing maintains the pristine living spaces. The upper floor is dedicated to sleeping quarters with a luxurious master suite featuring walk-in closet and private balcony. Additional bedrooms for children are thoughtfully positioned with adequate privacy. The signature 35° pitch red-tile roof provides both heritage charm and weather protection.",
    image: image7,
    price: 2100000,
    currency: "KES",
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      plotSize: "0.8 acres",
      builtArea: "510 sqm",
      specialFeatures: ["Sunken lounge", "Island kitchen", "Laundry wing"],
    },
    amenities: ["Island kitchen", "Sunken lounge", "Master suite", "Walk-in closet", "Laundry wing"],
    images: [image7],
  },
  {
    id: 8,
    slug: "ngoigwa-thika-apartments",
    title: "Ngoigwa Thika Apartments",
    location: "Ngoigwa, Thika, Kiambu County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A five-storey residential development — 'Comfort Heights' — nestled in the heart of Thika. The layout maximises natural light and ventilation across bedsitter, one-, and two-bedroom units, promoting energy efficiency and a connection to the outdoors. Stone cladding, hanging lines, and a contemporary façade integrate modern living with the cultural context of its surroundings.",
    longDescription:
      "Comfort Heights represents a thoughtful approach to mid-rise residential development. The five-storey building accommodates diverse housing needs with bedsitter, one-bedroom, and two-bedroom units. Design prioritizes natural ventilation and daylighting, reducing reliance on artificial systems and promoting resident health and comfort. The stone-clad façade with hanging lines creates visual texture and ties to local architectural traditions while maintaining a contemporary aesthetic. Each unit type is optimized for efficient space use without sacrificing comfort. Ground-floor commercial spaces provide community amenities and revenue generation.",
    image: image8,
    price: 650000,
    currency: "KES",
    specifications: {
      storeys: 5,
      unitTypes: ["Bedsitter", "1-bed", "2-bed"],
      totalUnits: 35,
      groundFloor: "Commercial spaces",
    },
    amenities: ["Multiple unit types", "Natural ventilation", "Commercial spaces"],
    images: [image8],
  },
  {
    id: 9,
    slug: "wego-group-interiors",
    title: "WE-GO Group Interiors",
    location: "Kisii Town, Kisii County",
    type: "Interior",
    year: "2023",
    status: "Completed",
    description:
      "Corporate interior design for the WE-GO Group showroom and offices in Kisii Town. The scheme encapsulates a harmonious blend of functionality, aesthetics, and corporate identity — with a custom branded reception desk, MDF display shelving, thoughtful space planning for workflow efficiency, and a colour palette aligned to the brand's vision.",
    longDescription:
      "This corporate interior design project for WE-GO Group showcases professional interior architecture applied to commercial showroom and office spaces. The design strategy aligned with the corporate brand identity, creating spaces that communicate professionalism and quality. Custom-fabricated reception desk acts as a branded focal point and establishes first impressions. Strategic space planning optimizes workflow efficiency while maintaining client interaction areas. MDF display shelving is configured to showcase products while maintaining visual hierarchy. The color palette was carefully selected to reflect brand values and create a cohesive visual identity throughout the spaces.",
    image: image9,
    price: 250000,
    currency: "KES",
    specifications: {
      areaDesigned: "350 sqm",
      customFurnishings: "Yes",
      displayShelving: "Yes",
    },
    amenities: ["Reception desk", "Display areas", "Office spaces", "Showroom layout"],
    images: [image9],
  },
  {
    id: 10,
    slug: "homabay-4-bed-maisonette",
    title: "4-Bedroom Maisonette",
    location: "Homabay County, Kenya",
    type: "Residential",
    year: "2024",
    status: "Completed",
    description:
      "A contemporary four-bedroom maisonette featuring open-plan living spaces, natural ventilation strategy, and locally sourced finishes tailored to the lakeside climate.",
    longDescription:
      "This Homabay maisonette demonstrates climate-responsive design adapted to lakeside conditions. The architectural strategy prioritizes natural ventilation to manage the humid lakeside environment. Locally sourced materials were selected for both cultural appropriateness and supply chain efficiency. Open-plan spaces encourage air circulation and create flexible living arrangements. The design respects local building traditions while incorporating contemporary comfort standards.",
    image: "",
    price: 1400000,
    currency: "KES",
    specifications: {
      bedrooms: 4,
      bathrooms: 2,
      builtArea: "420 sqm",
      localMaterials: "Yes",
    },
    amenities: ["Open-plan living", "Natural ventilation", "Local finishes"],
    images: [],
  },
  {
    id: 11,
    slug: "value-addition-warehouses",
    title: "Value Addition Warehouses",
    location: "Kenya",
    type: "Industrial",
    year: "2025",
    status: "In Progress",
    description:
      "Multi-bay value addition warehouse complex with a 50m × 20m reinforced concrete ground floor slab, designed to EuroCode 2 standards for heavy agricultural load requirements.",
    longDescription:
      "This industrial warehouse complex is designed to support agricultural value addition operations. The structural system features multiple bays with reinforced concrete construction meeting EuroCode 2 standards. The 50m x 20m ground slab is engineered for heavy loading from agricultural processing equipment. The design accommodates material flow from receiving through processing to dispatch. The scale and layout allow for expansion as operations grow.",
    image: "",
    price: 2800000,
    currency: "KES",
    specifications: {
      groundSlabDimensions: "50m × 20m",
      standard: "EuroCode 2 (EC2)",
      material: "Reinforced concrete",
      baysCount: 3,
    },
    amenities: ["Multi-bay layout", "Heavy-duty flooring", "Loading areas"],
    images: [],
  },
  {
    id: 12,
    slug: "5-bed-luxury-maisonette",
    title: "5-Bedroom Maisonette",
    location: "Kenya",
    type: "Residential",
    year: "2024",
    status: "Completed",
    description:
      "Three-storey luxury maisonette with dramatic double-volume entrance, wrap-around balconies, and a refined exterior facade combining face brick and render finishes.",
    longDescription:
      "This luxury maisonette showcases high-end residential design with dramatic vertical spaces and refined finishes. The double-volume entrance creates an impressive arrival experience and floods the space with natural light. Three storeys provide separation between public and private zones. Wrap-around balconies provide multiple outdoor living opportunities with unique perspectives on each level. The facade skillfully combines face brick and render finishes, creating visual texture and warmth.",
    image: "",
    price: 3200000,
    currency: "KES",
    specifications: {
      bedrooms: 5,
      bathrooms: 4,
      storeys: 3,
      builtArea: "650 sqm",
    },
    amenities: ["Double-volume entrance", "Wrap-around balconies", "Multiple outdoor spaces"],
    images: [],
  },
  {
    id: 13,
    slug: "joska-steel-water-tower",
    title: "Steel Water Tower",
    location: "Machakos County, Joska",
    type: "Infrastructure",
    year: "2025",
    status: "In Progress",
    description:
      "30,000-litre elevated steel water tower designed to EC3/S275 steel standards, including full buckling checks and section sizing for a four-column support frame.",
    longDescription:
      "This infrastructure project provides elevated water storage for agricultural and community use. The 30,000-litre capacity meets significant demand requirements. The structure is designed to EC3 standards for steel construction using S275 grade material. The four-column support frame provides excellent structural efficiency and visibility. Comprehensive engineering analysis includes buckling verification to ensure stability under all load conditions.",
    image: "",
    price: 450000,
    currency: "KES",
    specifications: {
      capacity: "30,000 litres",
      steelStandard: "EC3/S275",
      supportColumns: 4,
      engineeringAnalysis: "Full buckling checks",
    },
    amenities: ["Elevated storage", "Efficient frame design"],
    images: [],
  },
];

export const DIRECTORS = [
  {
    id: 1,
    name: "ENG. Jack Olang'",
    role: "Director — Construction Management & Structural Design",
    initials: "JO",
    bio: "Jack is an experienced Building Technician and Construction Professional with over 9 years of hands-on experience across residential, commercial, and infrastructure projects in Kenya. He has served in senior roles spanning Clerk of Works, Projects Engineer, and Site Engineer — delivering projects from feasibility through to completion. Currently providing senior-level site supervision on the Nakuru County Aggregation and Industrial Parks (CAIP) Project at Egerton University, Jack brings rigorous quality control, HSE compliance, and technical reporting to every engagement.",
    skills: [
      "Construction Supervision & QA/QC",
      "Clerk of Works",
      "Structural Analysis & Design",
      "AutoCAD · Revit · ArchiCAD",
      "ETABS · STAAD.Pro · ProtaStructure · Tekla Tedds",
      "Project Planning & Scheduling",
      "Contract Administration",
      "HSE Compliance (OSHA Certified)",
      "Technical Reporting & Documentation",
      "Advanced Excel · Power BI · Python (basic)",
      "Stakeholder & Contractor Liaison",
      "Team Leadership",
    ],
    image: jackPhoto,
    qualifications: [
      "BTech Civil Engineering — Technical University of Kenya (2017)",
      "OSHA 30-Hour Construction Industry Outreach Training",
      "Technical Tutor — Structural Analysis & Design Softwares",
    ],
  },
  {
    id: 2,
    name: "ENG. Desmond Ojala Abwao",
    role: "Director — Civil Engineering & Project Delivery",
    initials: "DO",
    bio: "Desmond is a results-driven civil engineer with hands-on experience in construction supervision, site coordination, and low-cost building technologies. He has delivered technical oversight across projects for government and infrastructure clients, including Kenya Wildlife Service, KeNHA APEC Consortium, NCA, and the Ministry of Transport. At Vertex-Delta, he brings practical expertise in quality assurance, contractor management, and site compliance to help keep projects on schedule and on budget.",
    skills: [
      "Construction Supervision & Coordination",
      "Architectural & Structural Drafting",
      "Site Inspection & Quality Compliance",
      "Project Planning & Management",
      "Bills of Quantities & Cost Estimating",
      "Technical Reporting & Documentation",
      "Contractor & Stakeholder Coordination",
      "AutoCAD · ArchiCAD · Civil 3D · Prokon",
    ],
    qualifications: [
      "BSc Civil and Structural Engineering — Multimedia University of Kenya",
      "Graduate Engineer — Engineers Board of Kenya (B26219)",
      "AutoCAD Structural Drafting for Civil Engineers",
      "AutoCAD Civil 3D for Civil Engineers",
      "MS Excel for Civil Engineers",
    ],
  },
  {
    id: 3,
    name: "Arch. Abuya Zacharia Nyapeni",
    role: "Director — Architecture & Design",
    initials: "AZ",
    bio: "Abuya is a registered architect with a strong foundation in sustainable architectural design and creative building solutions. He holds degrees in Architecture and Architectural Studies from the University of Nairobi and is registered with BORAQS as a professional architect. Abuya brings experience in residential, institutional, and landscape design, supported by digital design proficiency and a disciplined approach to project delivery.",
    skills: [
      "Architectural Design & Detailing",
      "ArchiCAD · SketchUp · Adobe Photoshop · Lumion",
      "Design Documentation & Presentation",
      "Working Drawings & Site Planning",
      "Sustainable Building Solutions",
      "Microsoft Office",
      "Revit · AutoCAD · 3ds Max (beginner)",
    ],
    qualifications: [
      "Bachelor of Architecture — University of Nairobi",
      "Bachelor of Architectural Studies — University of Nairobi",
      "Registered Architect — BORAQS (A2154)",
      "Member, Architectural Association of Kenya (AAK)",
      "Computer Design Training — Moscom Computer College / Emmanuel Computer College",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Vertex-Delta Group LTD delivered our maisonette project on time and to a standard that exceeded our expectations. Their attention to detail — from structural drawings to on-site supervision — was exceptional.",
    client: "Duncan Nyaranga",
    project: "4-Bedroom Maisonette, Homabay County",
    initials: "DN",
  },
  {
    id: 2,
    quote:
      "Professional, knowledgeable, and easy to work with. They understood our brief from day one and translated it into a design that perfectly suits our family's needs. We highly recommend them.",
    client: "John Ochola",
    project: "4-Bedroom Duplexes, Karen, Nairobi County",
    initials: "JO",
  },
  {
    id: 3,
    quote:
      "The quality of their structural calculations and compliance documentation gave us full confidence throughout the approvals process. A team that truly understands both design and engineering.",
    client: "Edna Sharon",
    project: "Residential Appartments, Ngoigwa, Thika",
    initials: "ES",
  },
  {
    id: 4,
    quote:
      "The quality of their structural calculations and compliance documentation gave us full confidence throughout the approvals process. A team that truly understands both design and engineering.",
    client: "Louis Shitandi",
    project: "Steel Water tower-Joska",
    initials: "LS",
  },
];

export const typeIcons = {
  Residential: "🏠",
  Industrial: "🏭",
  Infrastructure: "🏗️",
  Commercial: "🏢",
  Landscape: "🌿",
  Interior: "🪑",
};

export const statusColors = {
  Completed: { backgroundColor: "#e8f5e9", color: "#2e7d32" },
  "In Progress": { backgroundColor: "#fff8e1", color: "#f57f17" },
  Design: { backgroundColor: "#e3f2fd", color: "#1565c0" },
};
