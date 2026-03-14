import headshotLynie from "@/assets/pages/team/headshots/lynie-bereso.webp";
import headshotDeborah from "@/assets/pages/team/headshots/deborah-bereso.webp";
import headshotBoboy from "@/assets/pages/team/headshots/boboy-bereso.webp";
import headshotPeter from "@/assets/pages/team/headshots/peter-nystrom.webp";
import headshotJedfrey from "@/assets/pages/team/headshots/jedfrey-tan.webp";
import headshotLani from "@/assets/pages/team/headshots/lani-de-leon.webp";
import headshotMabel from "@/assets/pages/team/headshots/mabel-de-leon.webp";
import headshotBelle from "@/assets/pages/team/headshots/belle-moore.webp";
import headshotAlain from "@/assets/pages/team/headshots/alain-de-leon.webp";
import headshotDavid from "@/assets/pages/team/headshots/david-moore.webp";
import headshotRyan from "@/assets/pages/team/headshots/ryan-catubig.webp";
import headshotJohn from "@/assets/pages/team/headshots/john-lopo.webp";
import headshotTorreon from "@/assets/pages/team/headshots/torreon.webp";

export type Person = {
  name: string;
  role: string;
  bio: string;
  fullBio?: string;
  accolades?: string[];
  leadershipSnapshot?: string[];
  impactFocus?: string[];
  website?: string;
  headshot?: string;
  slug?: string;
};

export type PeopleGroup = {
  title: string;
  description: string;
  people: Person[];
};

export type PartnerCompany = {
  name: string;
  role: string;
  description: string;
  website?: string;
};

export const getInitials = (name: string) => {
  const clean = name
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (clean.length === 0) return "PI";
  return clean
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
};

export const peopleGroups: PeopleGroup[] = [
  {
    title: "WELLBUILD Incorporators",
    description:
      "Core leadership guiding PALMYRA Siargao across strategy, governance, safety, sales, and administration.",
    people: [
      {
        name: "Lynie Espiel-Bereso, MiM",
        role: "Chairman & Chief Executive Officer (CEO)",
        bio: "Visionary entrepreneur and transformational leader driving WELLBUILD and PALMYRA Siargao with faith-led, community-centered growth.",
        fullBio: "Lynie Espiel-Bereso is a visionary entrepreneur, transformational leader, and faith-driven philanthropist whose life story reflects resilience, purpose, and extraordinary leadership. As the Chairman of the Espiel-Bereso Group of Companies and Chairman, President, and CEO of WELLife Network Marketing Corporation, she has built a dynamic ecosystem of businesses committed to empowering people, strengthening communities, and creating sustainable opportunities for growth.\n\nUnder her leadership, WELLife Network Marketing Corporation experienced remarkable expansion, achieving nearly 200% growth during the global pandemic. Through WELLife, thousands of Filipino families have gained access to eco-friendly wellness products and meaningful livelihood opportunities that promote both health and financial empowerment.\n\nRooted in a deep sense of faith and service, Lynie has dedicated much of her life to humanitarian and community initiatives. Her passion for sharing hope and compassion has led to impactful programs such as Tabang May Buhay, Help Rebuild Homes, and Tabang Kabataan, initiatives that provide assistance to disaster-affected families, rebuild communities, and support disadvantaged children throughout the Philippines.\n\nDriven by a vision to contribute to the country's economic and tourism growth, Lynie founded WELLBUILD Development Corporation in 2025, a real estate development company dedicated to building world-class communities that combine luxury, sustainability, and global standards of design. Its flagship development, PALMYRA Siargao Resort and Residences, is poised to redefine island living as the first luxury mid-rise condominium development in Siargao.\n\nFrom humble beginnings to becoming a respected multi-awarded business leader, Lynie's journey is captured in her book, The Unqualified Leader: Discover the Single Most Important Trait That Can Make Anyone the Best Leader, where she shares how faith and purpose can transform limitations into opportunities and empower others to lead with impact.\n\nToday, Lynie Espiel-Bereso continues to lead with vision, compassion, and unwavering faith, committed to building businesses that not only succeed economically but also uplift communities and transform lives.",
        accolades: [
          "Direct Selling Association of the Philippines - Sales Achiever Award (2012)",
          "Global Women Who Rule (2021–2022)",
          "World-Class Excellence Japan Awards (2022)",
          "Crystal International Women's Award (2022)",
          "Asia's Golden Icon Award - Prominent Women of Leadership (2023)",
          "ASEAN Outstanding Business Leader for Social Change (2024)",
        ],
        leadershipSnapshot: [
          "Chairman of the Espiel-Bereso Group of Companies",
          "Chairman, President, and CEO of WELLife Network Marketing Corporation",
          "Founder of WELLBUILD Development Corporation (2025)",
        ],
        impactFocus: [
          "Led WELLife to nearly 200% growth during the global pandemic",
          "Expanded access to eco-friendly wellness products and livelihood opportunities for thousands of Filipino families",
          "Champions humanitarian programs including Tabang May Buhay, Help Rebuild Homes, and Tabang Kabataan",
          "Drives PALMYRA Siargao as the first luxury mid-rise condominium development in Siargao",
        ],
        headshot: headshotLynie,
        slug: "lynie",
      },
      {
        name: "Dr. Deborah Micah Espiel Bereso",
        role: "Vice-Chairman",
        bio: "Physician and emerging business leader integrating healthcare insight with strategic leadership for PALMYRA Siargao.",
        fullBio: "Dr. Deborah Micah Espiel Bereso is a Physician, Registered Medical Technologist, and emerging business leader representing the next generation of leadership within the Espiel-Bereso Group of Companies. Combining her medical expertise with strategic business insight, she contributes to the group's vision of integrating wellness, sustainable development, and world-class hospitality.\n\nAfter passing the Medical Technologist Licensure Examination, Dr. Bereso became actively involved in the family's business operations and was appointed Chief Financial Officer of TC Chemical & Engineering Services and WELLife Corp, subsidiaries of the Espiel-Bereso Group of Companies. In this role, she has helped support financial strategy and operational growth, particularly in initiatives focused on health, wellness, and community impact.\n\nDriven by her passion for healthcare, she pursued her Doctor of Medicine degree and later successfully passed the Physician Licensure Examination. She currently serves as a General Practitioner at OSPA Hospital, where she continues to provide compassionate medical care while maintaining her involvement in the group's business ventures.\n\nAs part of the leadership supporting WDC and PALMYRA Siargao Resort and Residences, Dr. Bereso contributes to shaping a vision that blends luxury island living with wellness, sustainability, and responsible tourism. Her dual commitment to medicine and enterprise reflects a forward-thinking approach to development, one that prioritizes both human well-being and long-term community growth.",
        leadershipSnapshot: [
          "Physician and Registered Medical Technologist",
          "Chief Financial Officer of TC Chemical & Engineering Services and WELLife Corp",
          "Next-generation leader within the Espiel-Bereso Group of Companies",
        ],
        impactFocus: [
          "Supports financial strategy and operational growth in health, wellness, and community-impact initiatives",
          "Provides compassionate medical care as a General Practitioner at OSPA Hospital",
          "Helps shape PALMYRA's wellness- and sustainability-led approach to responsible tourism",
        ],
        headshot: headshotDeborah,
        slug: "deborah",
      },
      {
        name: 'Engr. Eglesciano "Boboy" S. Bereso',
        role: "Chief Safety & Compliance Officer (CSCO) | Senior Technical Advisor",
        bio: "Highly respected engineering leader ensuring PALMYRA developments meet rigorous safety, compliance, and sustainability standards.",
        fullBio: "Engr. Eglesciano S. Bereso is a highly respected engineering professional whose career spans decades of technical leadership in industrial engineering, offshore operations, and infrastructure development. At WELLBUILD, he serves as Chief Safety & Compliance Officer (CSCO) and Senior Technical Advisor, providing strategic leadership to ensure that all developments uphold the highest standards of safety, regulatory compliance, and sustainable construction practices.\n\nA former engineer of the Philippine National Oil Company (PNOC), Engr. Bereso gained extensive experience in complex offshore and industrial operations, equipping him with deep technical insight into large-scale engineering systems and project management. His expertise continues to strengthen WELLBUILD's commitment to building resilient, environmentally responsible, and future-ready infrastructure.\n\nHe is also the founder and principal of TC Chemical & Engineering Services, a firm that delivers specialized engineering solutions, technical consultancy, and industrial maintenance services to a diverse range of sectors.\n\nBeyond engineering and construction, Engr. Bereso plays an important role in advancing financial empowerment and cooperative development. He currently serves as Chairman of WELLServe Credit Cooperative and as a Board Member of WELLife Corporation, contributing his leadership to initiatives that promote financial inclusion, economic stability, and community growth.\n\nRecognized for his technical discipline, strategic leadership, and unwavering integrity, Engr. Bereso remains a cornerstone of WELLBUILD's leadership, helping shape projects that combine engineering excellence, safety, sustainability, and social responsibility.",
        leadershipSnapshot: [
          "Chief Safety & Compliance Officer (CSCO) and Senior Technical Advisor at WELLBUILD",
          "Former engineer of the Philippine National Oil Company (PNOC) with offshore and industrial operations expertise",
          "Founder and principal of TC Chemical & Engineering Services",
        ],
        impactFocus: [
          "Provides strategic leadership to keep developments aligned with strict safety, regulatory, and sustainability standards",
          "Strengthens WELLBUILD's delivery of resilient, environmentally responsible, and future-ready infrastructure",
          "Advances financial empowerment and cooperative development through WELLServe and WELLife leadership roles",
        ],
        headshot: headshotBoboy,
        slug: "boboy",
      },
      {
        name: "Peter L. Nystrom",
        role: "Chief Corporate Social Responsibility Officer (CCSRO)",
        bio: "Leads international partnerships and global market positioning for PALMYRA Siargao.",
        fullBio: "With over 25 years of leadership in the nonprofit sector across Southern California and beyond, Peter Nystrom has built a lifelong career centered on community building, cross-sector partnerships, and strategic development.\n\nHis track record includes success in fundraising, facility oversight, program expansion, and operational excellence—always with a heart for meaningful, people-first impact.\n\nNow stepping into the private sector, Peter brings his unique relational capital and global perspective to WELLBUILD Development Corporation as the Global Director of Business Development. In this role, he leads investor engagement and partnership strategy across the U.S. and Asia, supporting WELLBUILD's mission to create immersive, sustainable, and socially rooted developments—beginning with its flagship project, PALMYRA Siargao.\n\nPeter is deeply passionate about cultivating trust-driven relationships that fuel long-term growth. An Eagle Scout and lifelong outdoorsman, he believes that business—like nature—thrives on stewardship, adaptability, and intention.\n\nHe holds a B.A. in Fine Arts with a minor in Architectural Design from Lafayette College. Peter resides in Long Beach, California with his wife Lani, and is a proud father of five sons.",
        leadershipSnapshot: [
          "25+ years of nonprofit leadership across Southern California and beyond",
          "Chief Corporate Social Responsibility Officer driving people-first partnerships",
          "B.A. in Fine Arts with a minor in Architectural Design from Lafayette College",
        ],
        impactFocus: [
          "Leads investor engagement and partnership strategy across the U.S. and Asia",
          "Brings fundraising, facility oversight, and program expansion experience",
          "Aligns growth with stewardship, sustainability, and community impact",
        ],
        headshot: headshotPeter,
        slug: "peter",
      },
      {
        name: "Jedfrey Tan",
        role: "Chief Revenue (Sales) Officer (CRO)",
        bio: "Oversees sales operations and ensures full regulatory compliance.",
        fullBio: "With a career shaped by academic excellence, global exposure, and entrepreneurial experience, Jedfrey Tan brings a multidimensional edge to business development and organizational strategy. From graduating with First Class Honours in Business Information Technology in the UK—becoming the first Filipino to earn such distinction at the University of Portsmouth—to earning top awards across his academic life, Jedfrey has consistently combined analytical rigor with a passion for systems thinking.\n\nJedfrey's professional journey spans finance, operations, and international hospitality, including his time with Deutsche Knowledge Services and entrepreneurial ventures since 2009. His leadership is marked by discipline, cross-cultural fluency, and a sharp ability to simplify complexity—skills that serve him well in navigating high-stakes business environments and strategic partnerships.\n\nCurrently contributing to WELLBUILD Development Corporation and its flagship project PALMYRA Siargao, Jedfrey helps shape field strategy, communications, and stakeholder relations. He is passionate about sustainable development, cultural pride, and helping visionary ideas take flight with structure and soul.",
        accolades: [
          "District Evaluation Champion (2024)",
          "Toastmaster of the Year",
          "Area Director of the Year",
        ],
        leadershipSnapshot: [
          "First Filipino First Class Honours graduate in Business Information Technology at the University of Portsmouth",
          "Entrepreneurial and operations leadership since 2009",
          "Chief Revenue (Sales) Officer supporting PALMYRA's commercial execution",
        ],
        impactFocus: [
          "Shapes field strategy, communications, and stakeholder relations for PALMYRA Siargao",
          "Applies systems thinking to sales execution and organizational strategy",
          "Supports sustainable development and culturally grounded growth",
        ],
        headshot: headshotJedfrey,
        slug: "jedfrey",
      },
      {
        name: 'Laarni "Lani" De Leon',
        role: "Chief Administrative Officer (CAO)",
        bio: "Manages organizational operations and administrative excellence.",
        fullBio: "Laarni \"Lani\" De Leon is the quiet force of structure, compassion, and grit behind WELLBUILD's operational core. A mother of three biological children and two stepchildren, Lani's life has been a testament to love, sacrifice, and resilience—from the chaos of Metro Manila to the rebuilding of her life in the U.S. with nothing but a suitcase and determination.\n\nA graduate of the College of the Holy Spirit Manila with a degree in Fine Arts (Illustration and Advertising), she began her career as an event photographer and visual storyteller.\n\nIn 2014, she migrated to Alaska and later California, where she mastered medical billing, accounts administration, HR, and office operations for fast-growing construction firms—skills that would prepare her for her current leadership in WELLBUILD.\n\nNow serving as Director of Administration, Lani brings both emotional intelligence and operational discipline to the company. She ensures that processes run smoothly, people feel valued, and the vision behind WELLBUILD is implemented with care, structure, and heart.\n\nHer story is one of relentless faith and reinvention—and it continues to shape the very soul of the company.",
        leadershipSnapshot: [
          "Chief Administrative Officer guiding WELLBUILD's operational core",
          "Operations and administration leadership across U.S. and Philippine teams",
          "Fine Arts background in illustration and advertising",
        ],
        impactFocus: [
          "Leads administration workflows across billing, accounts, HR, and office operations",
          "Brings hands-on operational experience from Alaska and California construction environments",
          "Builds people-centered systems that support delivery quality and consistency",
        ],
        headshot: headshotLani,
        slug: "lani",
      },
      {
        name: "Mabel De Leon",
        role: "Chief Brokerage Relations Officer (CBRO)",
        bio: "Seasoned real estate professional and investor with over 25 years of experience guiding clients and broker partnerships.",
        fullBio: "With over 25 years of experience, Mabel De Leon is a dedicated real estate professional and seasoned investor who has successfully guided clients through the buying and selling of homes. Whether advising clients on purchasing investment properties or finding their dream homes, she believes that real estate transcends mere transactions; it is about fostering relationships and helping individuals achieve their goals. Renowned for her integrity, extensive market knowledge, and personalized service, she has earned a strong reputation for making the real estate process seamless and rewarding.\n\nA proud graduate of the University of California, Los Angeles, Mabel holds a degree in Psychobiology. This unique academic background equips her with valuable insights into human behavior, communication, and decision-making, essential skills for real estate negotiations and building lasting client relationships.\n\nThroughout her career, she has actively strengthened industry relationships, collaborating with brokerage firms, agents, and real estate networks. She works closely with marketing and sales teams to facilitate broker-driven transactions, ensuring smooth communication among all parties. Her contributions to developing effective broker relations strategies have expanded professional networks and driven successful outcomes in real estate.\n\nOutside of work, she enjoys traveling, spending quality time with family, exploring local neighborhoods, and volunteering at community events, always staying connected to the communities she serves.\n\nLicensed Realtor - California DRE #01306457",
        leadershipSnapshot: [
          "25+ years in real estate sales, investing, and client advisory",
          "UCLA Psychobiology graduate with insight into decision-making and communication",
          "Chief Brokerage Relations Officer building broker and agent networks",
        ],
        impactFocus: [
          "Guides clients through home and investment transactions with high-touch service",
          "Strengthens broker-driven transactions through close sales and marketing collaboration",
          "Advances communication and contract discipline across real estate deals",
        ],
        headshot: headshotMabel,
        slug: "mabel",
      },
      {
        name: "Alain De Leon",
        role: "Chief Security Officer (CSO)",
        bio: "Business strategist with 31 years of experience transforming mission-critical enterprises across the U.S. Department of Defense.",
        fullBio:
          "Alain is a business strategist with 31 years of experience in strengthening and transforming mission-critical enterprises across the U.S. Department of Defense. He specializes in aligning innovative strategy with business objectives, enabling organizations to anticipate emerging risks, modernize operations, and build resilient high-performing environments.\n\nHe is recognized for designing forward-leaning solutions that integrate technology, data, and operational environment to address complex security challenges. His career reflects a rare blend of operational expertise, strategic leadership, and business-minded decision-making, whether driving secure acquisitions, leading organizational integrations, shaping mergers that protect assets, and accelerating growth that enhance enterprise values.\n\nAlain brings a results-driven approach grounded in analytics, collaboration, and entrepreneurial problem-solving skills. His leadership has consistently strengthened organizational agility, optimized resources, and advanced enterprise posture amid rapid technological, regulatory, and geopolitical changes.\n\nHe holds a Bachelor of Science in Electrical Engineering from Cal Poly, San Luis Obispo, and a Master of Science in Systems Engineering from the Naval Postgraduate School in Monterey.",
        leadershipSnapshot: [
          "31 years of strategy and transformation experience across the U.S. Department of Defense",
          "Electrical and systems engineering background from Cal Poly and Naval Postgraduate School",
          "Leads secure, mission-aligned enterprise modernization in complex environments",
        ],
        impactFocus: [
          "Aligns technology, data, and operations to manage evolving security risks",
          "Guides acquisitions, integrations, and merger decisions that protect assets and enterprise value",
          "Strengthens organizational agility amid rapid technological and geopolitical change",
        ],
        headshot: headshotAlain,
        slug: "alain",
      },
      {
        name: "David Moore",
        role: "Chief Security Officer (CSO)",
        bio: "U.S. Army combat veteran with leadership experience across special operations, pharmaceutical institutions, and private-sector business operations.",
        fullBio:
          "A U.S. Army Captain and combat veteran, he served in combat arms and then transitioned to Civil Affairs with assignments under the United States Army Special Operations Command. His military experience includes security operations, reconnaissance, and overwatch missions in high-risk operational environments. He also worked closely with many indigenous peoples developing everything from security training to potable water. During his service, he held leadership roles responsible for operational planning, team coordination, and mission execution, and was entrusted with special weapons qualification and employment, reflecting exceptional levels of responsibility, precision, and security.\n\nAfter completing his military service, he transitioned into the pharmaceutical industry, serving as a Senior Institutional Representative with Pfizer. In this role, he led institutional sales initiatives while collaborating with healthcare providers and research teams, helping coordinate Phase II and Phase III clinical research programs. His work supported the development and evaluation of innovative therapies while strengthening partnerships across medical institutions.\n\nIn the private sector, he was the CEO and owner of a communications company, where he oversaw business strategy, operations, and client partnerships. His professional journey reflects a unique blend of military leadership, pharmaceutical industry expertise, and entrepreneurial experience.",
        leadershipSnapshot: [
          "U.S. Army Captain and combat veteran with Special Operations Civil Affairs assignments",
          "Led high-risk mission planning, reconnaissance, and overwatch operations",
          "Former CEO and owner of a communications company",
        ],
        impactFocus: [
          "Developed security training and essential water initiatives with indigenous communities",
          "Supported Pfizer institutional sales and Phase II/III clinical research coordination",
          "Brings disciplined execution across military, healthcare, and private-sector operations",
        ],
        headshot: headshotDavid,
        slug: "david",
      },
      {
        name: "Marilou “Belle” Moore",
        role: "Chief Human Resources Officer (CHRO)",
        bio: "Entrepreneur and business leader bringing practical operations and growth insight from years of hands-on leadership.",
        fullBio: "Belle Moore is an entrepreneur and business leader with extensive experience in building and managing service-based enterprises. Originally from the Philippines, she relocated to the United States in 2010, where she established herself through determination, resilience, and a strong entrepreneurial drive.\n\nShe is the founder and owner of Belle & Co. Beauty Salon in El Paso, Texas, where she has built a successful and respected business known for its commitment to quality service, professionalism, and client experience.\n\nBelle brings practical business insight and hands-on leadership experience to the organizations she supports. Her background as a business owner allows her to contribute a grounded perspective on operations, growth, and long-term sustainability.\n\nRecognized for her strong work ethic and forward-looking mindset, Belle is committed to supporting initiatives that foster innovation, opportunity, and responsible development.\n\nOutside of her professional endeavors, she values family, travel, music, and cultural exploration.",
        leadershipSnapshot: [
          "Entrepreneur and owner of Belle & Co. Beauty Salon in El Paso, Texas",
          "Chief Human Resources Officer with practical people-and-operations leadership",
          "Business builder with service-industry growth and management experience",
        ],
        impactFocus: [
          "Brings hands-on operational insight from building a successful service enterprise",
          "Supports innovation, opportunity, and responsible organizational development",
          "Contributes resilience-driven leadership shaped by her Philippines-to-U.S. journey",
        ],
        headshot: headshotBelle,
        slug: "belle",
      },
    ],
  },
  {
    title: "Design & Architecture",
    description:
      "Design partners shaping architecture, planning, and the lived character of the project.",
    people: [
      {
        name: "Architect Ryan Catubig",
        role: "Founder & CEO, RBCatubig Architects",
        bio: "Leads architecture, interior design, and planning direction for high-impact built environments.",
        fullBio: "RBCatubig Architects is an innovative firm providing exceptional architecture, interior design, and planning services in Cebu City since 2015. The team collaborates with clients to create unique, functional, and aesthetically pleasing spaces that enhance human experience.\n\nThe firm prides itself on its attention to detail and commitment to excellence, delivering outstanding results that exceed clients' expectations.\n\nAt RBCatubig Architects, every project is treated as unique. The team works closely with clients to develop tailored solutions that meet their specific needs and aspirations.\n\nWith their expertise and experience, the firm believes that good design can make a significant difference in people's lives, and they remain committed to creating exceptional spaces that are both functional and beautiful.",
        leadershipSnapshot: [
          "Founder & CEO of RBCatubig Architects in Cebu City since 2015",
          "Leads multidisciplinary teams across architecture, interiors, and planning",
          "Design strategy balances function, aesthetics, and human experience",
        ],
        impactFocus: [
          "Delivers tailored solutions aligned to client goals and site context",
          "Drives quality through detail-oriented design and execution standards",
          "Advances PALMYRA's built environment with tropical-modern, people-centered architecture",
        ],
        headshot: headshotRyan,
        slug: "ryan",
      },
    ],
  },
  // {
  //   title: "Engineering & Technical",
  //   description:
  //     "Technical specialists supporting structural integrity, systems reliability, and delivery quality.",
  //   people: [
  //     {
  //       name: "Lead Civil Engineer",
  //       role: "Project Civil Works",
  //       bio: "Oversees civil engineering standards and execution controls. Profile to be announced.",
  //     },
  //     {
  //       name: "Lead Structural Engineer",
  //       role: "Structural Engineering",
  //       bio: "Responsible for structural strategy and compliance coordination. Profile to be announced.",
  //     },
  //     {
  //       name: "MEPF Engineering Team",
  //       role: "Mechanical, Electrical, Plumbing, Fire",
  //       bio: "Aligns building systems for safety, efficiency, and long-term operability.",
  //     },
  //   ],
  // },
  {
    title: "Finance, Legal & Compliance",
    description:
      "Financial stewardship and legal oversight supporting disciplined project governance.",
    people: [
      {
        name: "CPA John Michael Angelo Z. Lopo",
        role: "Managing Partner & CEO, Lopo, Ortega and Co., CPA",
        bio: "Provides financial and accounting leadership across audit, reporting, and fiscal controls.",
        fullBio: "John Michael Angelo Z. Lopo is a Certified Public Accountant (CPA) and Registered Cost Accountant – Australia (RCA), holding a Master of Business Administration (MBA). With over a decade of professional experience, he specializes in Auditing, Accounting, Financial Management, and Financial Statement Analysis. Jman earned his MBA from the Ateneo de Manila University Graduate School of Business (AGSB) and Regis University. He also completed programs in Strategic Disaster Risk Management and Leadership at the Asian Institute of Management (AIM) and in Collaborative Teaching through the COIL Model at Universidad La Salle – Mexico City. He obtained his Bachelor of Science in Accountancy from Ateneo de Naga University.\n\nAs a seasoned executive, Jman serves as Managing Partner, Co-Founder, CEO, and Executive Director of Lopo, Asuzano, Ortega and Co. CPA, Strived Executive Asia, Strived Consultancy Group, Strived Accounting Services, and Advanced Review Solution CPA Review Center. He is also the Chief Financial Officer (CFO) of Mega Land Real Estate Inc. and Megasoft Hygienic Products Inc., a leading manufacturer and distributor of personal hygiene products such as Sisters and Lampein. In addition, he is a Director of LeadImpact Singapore Pte Ltd, and serves as an International Consultant Expert at both Gerson Lehrman Group (GLG) and NwB.\n\nPreviously, he was COO & CFO of Best Choice Group of Companies, a conglomerate engaged in the trade, manufacturing, and distribution of disposable items, cleaning tools and solutions, baking supplies, and medical supplies. He also co-founded FASTAX Accounting Solutions Inc., and held roles as Comptroller and Financial Planning and Analysis Manager at JA Farms Asia Pacific Inc. and Santa Fe Moving and Relocation Services. His career also includes significant experience in the food and beverage sector, having worked as Senior Finance Analyst at San Miguel Brewery Inc. and San Miguel Purefoods Inc., both subsidiaries of San Miguel Corporation.\n\nBeyond his corporate roles, Jman is deeply committed to education. He is the CPA Review and Refresher Director at the Philippine School of Business Administration – Manila (PSBA) and a part-time accounting professor at several top institutions, including Ateneo de Manila University – John Gokongwei School of Management (JGSOM), Ateneo Graduate School of Business (AGSB), De La Salle University – Manila (DLSU), University of Asia and the Pacific (UA&P), San Beda University – Manila, and PSBA. He also contributes as a Book Reviewer for University Press of First Asia and Diwa Publishing, and began his career as an Internal Auditor at Allied Banking Corporation.",
        leadershipSnapshot: [
          "Certified Public Accountant (CPA) and Registered Cost Accountant - Australia (RCA)",
          "Managing Partner & CEO of Lopo, Asuzano, Ortega and Co. CPA and related firms",
          "MBA credentials from AGSB and Regis University",
        ],
        impactFocus: [
          "Provides CFO-level finance leadership across real estate and manufacturing organizations",
          "Leads multi-entity operations in accounting, consultancy, and executive education",
          "Supports WELLBUILD with disciplined reporting, controls, and fiscal governance",
        ],
        headshot: headshotJohn,
        slug: "john",
      },
      {
        name: "Atty. Israelito P. Torreon",
        role: "Founder, Torreon & Partners | Legal Counsel for WELLBUILD Development Corporation",
        bio: "Provides legal counsel guiding compliance, risk management, and smooth project execution for WELLBUILD.",
        fullBio:
          "The Law Firm of Torreon & Partners, led by its founder Atty. Israelito P. Torreon, serves as the legal counsel for WELLBUILD Development Corporation. Recognized as a prominent and highly respected lawyer in the Philippines, Atty. Torreon provides expert legal guidance to ensure the project's compliance, risk management, and smooth execution from inception to completion.",
        leadershipSnapshot: [
          "Founder of The Law Firm of Torreon & Partners",
          "Legal counsel for WELLBUILD Development Corporation",
          "Prominent and highly respected lawyer in the Philippines",
        ],
        impactFocus: [
          "Guides project compliance from inception to completion",
          "Strengthens legal risk management across WELLBUILD initiatives",
          "Supports smooth execution through disciplined legal oversight",
        ],
        headshot: headshotTorreon,
        slug: "torreon",
      },
    ],
  },
  // {
  //   title: "Project Delivery & Operations",
  //   description:
  //     "Execution teams coordinating schedule, site operations, and readiness across delivery phases.",
  //   people: [
  //     {
  //       name: "Site Operations Team",
  //       role: "Construction & Field Operations",
  //       bio: "Coordinates daily project execution, safety workflows, and contractor interfaces.",
  //     },
  //     {
  //       name: "Project Controls Team",
  //       role: "Scheduling & Delivery Controls",
  //       bio: "Tracks milestone execution, reporting cadence, and implementation discipline.",
  //     },
  //   ],
  // },
];

export const partnerCompanies: PartnerCompany[] = [
  {
    name: "WELLBUILD Development Corporation",
    role: "Developer",
    description:
      "Purpose-driven developer bringing PALMYRA Siargao to life through stewardship, quality, and long-term value creation.",
    website: "https://wellbuild.netlify.app/",
  },
  {
    name: "RBCatubig Architects",
    role: "Architecture & Planning Partner",
    description:
      "Architecture, interior design, and planning partner supporting project design direction.",
    website: "https://www.rbcatubig.com/",
  },
  {
    name: "Lopo, Ortega and Co., CPA",
    role: "Finance & Accounting Partner",
    description:
      "Supports financial, accounting, and audit-aligned project disciplines.",
    website: "https://www.facebook.com/ConversationsbyStrivedExecutiveAsia/",
  },
];
