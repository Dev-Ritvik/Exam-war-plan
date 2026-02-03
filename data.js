// ===== EXAM SEASON CONFIG =====
const EXAM_SEASON = {
  start: new Date("2025-12-07T00:00:00"),
  end: new Date("2026-01-05T23:59:59")
};

// ===== STUDY DATA =====
const SUBJECTS = [
  // ----------------- CHE110 - ENVIRONMENTAL STUDIES -----------------
  {
    id: "che110",
    code: "CHE110",
    name: "CHE110:ENVIRONMENTAL STUDIES",
    credits: 2,
    examDate: "2025-12-19T00:00:00",
    lessons: [
      {
        id: "che_u1",
        title: "Unit I: Introduction and sustainable development",
        weight: 1,
        formulas: [],
        summary: "Introduction to environment, components of environment, spheres of earth, multidisciplinary nature, scope and importance of environmental studies, concept of sustainability, sustainable development, carrying capacity, pillars of sustainability, sustainable development goals",
        revision: ""
      },
      {
        id: "che_u2",
        title: "Unit II: Natural resources and ecosystem",
        weight: 1,
        formulas: [],
        summary: "Introduction to natural resources, renewable and non renewable resources, land, water, forest and energy resources- their associated problems and remedial measures, role of individual in conservation of natural resources, ecosystem: structure and function of ecosystem, types of ecosystem, energy flow in an ecosystem: food chains and food webs, ecological pyramids, ecological succession",
        revision: ""
      },
      {
        id: "che_u3",
        title: "Unit III: Biodiversity and conservation",
        weight: 1,
        formulas: [],
        summary: "Definition, levels of biological diversity- genetic, species and ecosystem diversity, importance of biodiversity: ecosystem services, ecological, economic, social, aesthetic and informational value, hot spots of biodiversity, threats to biodiversity: habitat loss, poaching of wildlife, biological invasions, human wildlife conflicts, species of conservation concern: extinct species, endangered species, vulnerable species, rare species, EDGE species, conservation of biodiversity: in-situ and ex-situ conservation, biogeographic zones of India, India as a mega diversity nation",
        revision: ""
      },
      {
        id: "che_u4",
        title: "Unit IV: Environmental pollution",
        weight: 1,
        formulas: [],
        summary: "Definition, types and causes, effects and controls: air, water, soil, noise and radiation pollution, emerging pollutants, fireworks and their ill-effects, global warming, climate change, ozone layer depletion, acid rain and impacts on human communities and agriculture, case studies on pollution, solid waste management- control measures of urban and industrial waste",
        revision: ""
      },
      {
        id: "che_u5",
        title: "Unit V: Disaster management",
        weight: 1,
        formulas: [],
        summary: "Natural disasters: water related (floods and drought), air related (cyclone and storms), earth related (earthquakes, landslides, avalanches, volcanic eruptions), manmade disasters: nuclear disasters, chemical disasters, biological disasters, transport accidents, disaster management: national disaster management framework, role of governmental agencies, NGOs, community-based organizations and media for disaster response",
        revision: ""
      },
      {
        id: "che_u6",
        title: "Unit VI: Human communities and environment",
        weight: 1,
        formulas: [],
        summary: "Human population growth: impacts on environment, human health and welfare, environmental ethics, public awareness, cultural practices for environmental conservation, tribal populations and environmental conservation, environmental laws in India, environmental movements: Bishnois of Rajasthan, Chipko movement, Appiko movement, Jungle bachao andolan, Silent valley movement, Narmada Bachao Andolan, Tehri Dam conflict",
        revision: ""
      }
    ]
  },

  // ----------------- CSE101 - COMPUTER PROGRAMMING -----------------
  {
    id: "cse101",
    code: "CSE101",
    name: "CSE101:COMPUTER PROGRAMMING",
    credits: 4,
    examDate: "2025-12-19T00:00:00",
    lessons: [
      {
        id: "cse101_u1",
        title: "Unit I: Basics and introduction to C",
        weight: 1,
        formulas: [],
        summary: "The C character set, Identifiers and keywords, Data types, Constants and variables, Expressions, Arithmetic operators, Unary, Relational, Logical, Assignment and conditional operators, Bitwise operators",
        revision: ""
      },
      {
        id: "cse101_u2",
        title: "Unit II: Control structures and Input/Output functions",
        weight: 1,
        formulas: [],
        summary: "If, If else, Switch case statements, While, For, Do-while loops, Break and continue statements, Goto, Return, Type conversion and type modifiers, Designing structured programs in C, Formatted and unformatted Input/Output functions like printf(), Scanf(), Puts(), Gets() etc",
        revision: ""
      },
      {
        id: "cse101_u3",
        title: "Unit III: User defined functions and Storage classes",
        weight: 1,
        formulas: [],
        summary: "Function prototypes, Function definition, Function call including passing arguments by value and passing arguments by reference, Math library functions, Recursive functions, Scope rules (local and global scope), Storage classes in C namely auto, Extern, Register, Static storage classes",
        revision: ""
      },
      {
        id: "cse101_u4",
        title: "Unit IV: Arrays in C",
        weight: 1,
        formulas: [],
        summary: "Declaring and initializing arrays in C, Defining and processing 1D and 2D arrays, Array applications, Passing arrays to functions, inserting and deleting elements of an array, Searching including linear and binary search methods, Sorting of array using bubble sort",
        revision: ""
      },
      {
        id: "cse101_u5",
        title: "Unit V: Pointers, Dynamic memory allocation and Strings",
        weight: 1,
        formulas: [],
        summary: "Pointer declaration and initialization, Types of pointers - dangling, wild, null, generic (void), Pointer expressions and arithmetic, Pointer operators, Operations on pointers, Passing pointer to a function, Pointer and one dimensional array, Dynamic memory management functions (malloc, calloc, realloc and free), Defining and initializing strings, Reading and writing a string, Processing of string, Character arithmetic, String manipulation functions and library functions of string",
        revision: ""
      },
      {
        id: "cse101_u6",
        title: "Unit VI: Derived types including structures and unions",
        weight: 1,
        formulas: [],
        summary: "Declaration of a structure, Definition and initialization of structures, Accessing structures, Structures and pointers, Nested structures, Declaration of a union Concepts and Basics of C++ Programming: Reading and writing data using cin and cout, Creating classes, Class objects, Accessing class members, Inline and Non-inline member functions, Differences between Structures, Unions, Enumerations and Classes, Static data members and static member functions, Difference between procedural and object oriented programming paradigms",
        revision: ""
      }
    ]
  },

  // ----------------- CSE121 - ORIENTATION TO COMPUTING-II -----------------
  {
    id: "cse121",
    code: "CSE121",
    name: "CSE121:ORIENTATION TO COMPUTING-II",
    credits: 2,
    examDate: "2025-12-19T00:00:00",
    lessons: [
      {
        id: "cse121_u1",
        title: "Unit I: Data Science & Big Data",
        weight: 1,
        formulas: [],
        summary: "Data science and its need, Applications of data science/Big data, Data science Lifecycle with use case, Big data and its 3Vs, Challenges of Big data, Skill needed for Big data, Tools usage like Apache Hadoop, Tableau, R language, Excel, Big Data on the Cloud, Use of Big Data in different areas, Job roles and skillset for Data science and Big data",
        revision: ""
      },
      {
        id: "cse121_u2",
        title: "Unit II: Artificial Intelligence & Machine Learning",
        weight: 1,
        formulas: [],
        summary: "Introduction to Al, ML and Deep Learning, Expert systems, Fuzzy systems, Augmented Reality, Use of Al in different fields - NLP, Healthcare, Agriculture, Social media monitoring, Tools and techniques for implementing Al, Google Translator, Driverless Car, ALEXA, Siri, ChatGPT, Current trends and opportunities, Job roles and skillset for Al and ML",
        revision: ""
      },
      {
        id: "cse121_u3",
        title: "Unit III: Cybersecurity",
        weight: 1,
        formulas: [],
        summary: "Introduction to cybersecurity-definition, importance in digital era, CIA Triad (Confidentiality, Integrity, Availability), Cyber Threat Landscape: Insider vs External threats, Malwares, Common cyber-attacks- Phishing and Social Engineering attacks, Password and brute-force attacks Malware-based attacks, Denial of Service (DoS), Zero day attack, case study of recent cyber incidents, secure web browsing, social media and email security, personal data protection and digital footprints, Cybersecurity tools (Nmap, Wireshark, Al-based threat detection systems), cybersecurity compliance, Job roles and skill sets for cybersecurity",
        revision: ""
      },
      {
        id: "cse121_u4",
        title: "Unit IV: DevOps & Software Testing",
        weight: 1,
        formulas: [],
        summary: "Introduction to DevOps, DevOps Vs Traditional Software Development Models, DevOps Tools - Git, Docker, Selenium, Mavin, Puppet, Ansible, Kubernetes, Nagios, DevOps life cycle, role of automation in DevOps, CI/CD, fundamentals of testing, Objectives of Testing, Types of Testing, Levels of testing, Applications of software testing in IT companies, Manual Vs automation testing, Introduction to test case design (simple example), defect life cycle, Career opportunities in the field of DevOps and software testing with skillset",
        revision: ""
      },
      {
        id: "cse121_u5",
        title: "Unit V: Cloud Computing",
        weight: 1,
        formulas: [],
        summary: "Introduction to cloud computing, Uses of cloud computing in applications services, Platform deployments, Types of cloud model implementations, Types of cloud services, Data analytics, Virtualization, Tools and techniques for implementing cloud computing, Job roles and skillset for cloud computing",
        revision: ""
      },
      {
        id: "cse121_u6",
        title: "Unit VI: Full Stack Web Development & UI/UX",
        weight: 1,
        formulas: [],
        summary: "Introduction to Web Development, User Interface Design, frontend, backend, databases, CRUD applications, Responsive web design, mobile-first development, Single page applications (SPA), Languages such as HTML, CSS, PHP, Java Scripts, and frameworks by using VS code tool, Overview of AR/VR-significance, How does AR/VR work? Software/Hardware and devices, Applications, Job-roles and skillset for full stack and UI/UX",
        revision: ""
      }
    ]
  },

  // ----------------- CSE320 - SOFTWARE ENGINEERING -----------------
  {
    id: "cse320",
    code: "CSE320",
    name: "CSE320:SOFTWARE ENGINEERING",
    credits: 3,
    examDate: "2025-12-19T00:00:00",
    lessons: [
      {
        id: "cse320_u1",
        title: "Unit I: Software Engineering Foundations & SDLC",
        weight: 1,
        formulas: [],
        summary: "Evolution and impact of software engineering, Software development life cycle (SDLC), Life cycle models (Waterfall, Prototyping, Spiral, V-Model Agile & Scrum DevOps lifecycle), Functional & Non-functional requirements, Requirement gathering & analysis, Software Requirements Specification (IEEE standard, writing & validation)",
        revision: ""
      },
      {
        id: "cse320_u2",
        title: "Unit II: Software Design Principles & System Architecture",
        weight: 1,
        formulas: [],
        summary: "Basic principles of software design, Modularity, Cohesion, Coupling, Types of cohesion and coupling, Measuring module independence, Design trade-offs, Function-oriented design: Data Flow Diagrams (DFD) - symbols, notations and leveling, Context diagrams and decomposition and Rules for constructing DFDs, Structure Charts - components and notation, Module hierarchy and control flow and Transform and transaction analysis, Design documentation and design review techniques",
        revision: ""
      },
      {
        id: "cse320_u3",
        title: "Unit III: Object-Oriented Software Development and Modeling Techniques",
        weight: 1,
        formulas: [],
        summary: "Unified Process: Phases and core workflows, Iterative and incremental development, UML Modelling: Use Case Diagrams, Class Diagrams, Sequence Diagrams, Activity Diagrams, Object modelling process, Model validation: Consistency and completeness checking, Traceability from requirements, Coding standards and code review techniques",
        revision: ""
      },
      {
        id: "cse320_u4",
        title: "Unit IV: Software Testing Concepts, Techniques, and Automation",
        weight: 1,
        formulas: [],
        summary: "Fundamentals of software testing, Functional and Non-Functional Software Testing, Testing Techniques: Black box, White box, Boundary value, Equivalence partitioning, Levels of testing: Unit, Integration, System, UAT, Types of Software Testing: API Testing, Web Testing, Mobile Testing, Automation Testing: Selenium IDE: Installation, record & playback tests, Introduction to Selenium WebDriver (conceptual), Performance Testing basics, Security Testing basics, Introduction to Al-assisted testing tools (overview)",
        revision: ""
      },
      {
        id: "cse320_u5",
        title: "Unit V: Software Project Management & DevOps Practices",
        weight: 1,
        formulas: [],
        summary: "Project management basics, Project planning & monitoring, Cost estimation methods (Function Points, Use Case Points, COCOMO (intro), Software Configuration Management (SCM), Introduction to CI/CD tools (GitHub Actions, GitHub CI/CD workflows), Scheduling Techniques (CPM, PERT, Gantt Charts)",
        revision: ""
      },
      {
        id: "cse320_u6",
        title: "Unit VI: Quality Management, Maintenance & Emerging Technologies",
        weight: 1,
        formulas: [],
        summary: "Quality management & standards: ISO 9001, SEI CMMI, Six Sigma & PSP, Computer-Aided Software Engineering (CASE tools), Software maintenance: types & challenges, Software reuse & Component-Based Software Development (CBSD), Advanced and Future Techniques: Cloud-native software development, Al in software development (GitHub Copilot, Code Whisperer), Low-code / No-code platforms",
        revision: ""
      }
    ]
  },

  // ----------------- ECE249 - BASIC ELECTRICAL AND ELECTRONICS ENGINEERING -----------------
  {
    id: "ece249",
    code: "ECE249",
    name: "ECE249:BASIC ELECTRICAL AND ELECTRONICS ENGINEERING",
    credits: 3,
    examDate: "2025-12-19T00:00:00",
    lessons: [
      {
        id: "ece249_u1",
        title: "Unit I: Fundamentals of Electrical Laws, Semiconductor Devices and its Applications",
        weight: 1,
        formulas: [],
        summary: "Ohm's Law, Kirchhoff's Law, Voltage division rule, Current division rule, Basics of semiconductors (Intrinsic and Extrinsic), PN junction diode (working and characteristics) and its applications (rectifiers and switch), Bipolar junction transistor (types, modes, construction, and working CE configuration)",
        revision: ""
      },
      {
        id: "ece249_u2",
        title: "Unit II: Introduction of Arduino and Sensors",
        weight: 1,
        formulas: [],
        summary: "Analog and digital signals, Arduino board (pin configuration and description), IR sensor., LDR, basic principle of ultrasonic sensor, Temperature sensor (DHT11/DHT22)",
        revision: ""
      },
      {
        id: "ece249_u3",
        title: "Unit III: Introduction to number system and logic gates",
        weight: 1,
        formulas: [],
        summary: "Number system (conversion), codes (B-G,GB, Excess-3, BCD), Compliments, Binary Arithmetic (addition and subtraction using 2's complement), logic gates, boolean algebra, SOP and POS, K- Map (up to 4 variables)",
        revision: ""
      },
      {
        id: "ece249_u4",
        title: "Unit IV: Introduction to Combinational Logic Circuits",
        weight: 1,
        formulas: [],
        summary: "Combinational Logic Circuits: Adders, Subtractors, Multiplexers, De-multiplexers, Decoders, Encoders, Comparator upto 2 bit",
        revision: ""
      },
      {
        id: "ece249_u5",
        title: "Unit V: Introduction to Sequential Logic Circuits",
        weight: 1,
        formulas: [],
        summary: "Latch (SR and D), Flip-Flop (SR, JK, D and T), MasterSlave flip-flop, Conversion of basic flip-flop",
        revision: ""
      },
      {
        id: "ece249_u6",
        title: "Unit VI: Applications of Sequential Circuits",
        weight: 1,
        formulas: [],
        summary: "Registers: Operation of basic shift registers (SISO, SIPO, PISO, PIPO), Counters: Asynchronous counter (UP/DOWN/Mod-N), Synchronous counter (UP/DOWN/Mod-N), Ring counter and Johnson ring counter",
        revision: ""
      }
    ]
  },

  // ----------------- INT306 - DATABASE MANAGEMENT SYSTEMS -----------------
  {
    id: "int306",
    code: "INT306",
    name: "INT306: DATABASE MANAGEMENT SYSTEMS",
    credits: 4,
    examDate: "2025-12-19T00:00:00",
    lessons: [
      {
        id: "int306_u1",
        title: "Unit I: Introduction to database",
        weight: 1,
        formulas: [],
        summary: "Purpose of database systems, components of dbms, applications of dbms, three tier dbms architecture, data independence, database schema, instance, data modeling, entity relationship model, relational model, Comparison of relational and non-relational databases",
        revision: ""
      },
      {
        id: "int306_u2",
        title: "Unit II: Relational query language",
        weight: 1,
        formulas: [],
        summary: "Introduction to data definition language, data manipulation, data control and transaction control language, integrity constraints, database keys, SQL basic operations",
        revision: ""
      },
      {
        id: "int306_u3",
        title: "Unit III: Relational Operations",
        weight: 1,
        formulas: [],
        summary: "Aggregate functions, Sql joins, set operators, views, subqueries, relational algebra, Window functions, Hashing, Indexing and Query Optimization.",
        revision: ""
      },
      {
        id: "int306_u4",
        title: "Unit IV: Relational Database Design",
        weight: 1,
        formulas: [],
        summary: "Data integrity rules, functional dependency, need of normalization, first normal form, second normal form, third normal form, boyce codd normal form, multivalued dependencies, fourth normal form",
        revision: ""
      },
      {
        id: "int306_u5",
        title: "Unit V: Programming Constructs in Databases",
        weight: 1,
        formulas: [],
        summary: "Flow control statements, functions, stored procedures, cursors, triggers, exception handling Database Transaction Processing: transaction system concepts, desirable properties of transactions, schedules, serializability of schedules, concurrency control, recoverability",
        revision: ""
      },
      {
        id: "int306_u6",
        title: "Unit VI: NoSQLDatabases",
        weight: 1,
        formulas: [],
        summary: "Introduction of MongoDB, DynamoDB, Serverless cloud database, Structure of MongoDB, SQL vs NoSql, Working with MongoDB, JSON databases, JSON representation of part of the dataset, Index creation & performance comparison using EXPLAIN, Vector Databases",
        revision: ""
      }
    ]
  },

  // ----------------- MTH166 - DIFFERENTIAL EQUATIONS AND VECTOR CALCULUS -----------------
  {
    id: "mth166",
    code: "MTH166",
    name: "MTH166:DIFFERENTIAL EQUATIONS AND VECTOR CALCULUS",
    credits: 4,
    examDate: "2025-12-19T00:00:00",
    lessons: [
      {
        id: "mth166_u1",
        title: "Unit I: Ordinary differential equations",
        weight: 1,
        formulas: [],
        summary: "Exact equations, equations reducible to exact equations, equations of the first order and higher degree, Clairaut's equation",
        revision: ""
      },
      {
        id: "mth166_u2",
        title: "Unit II: Differential equations of higher order",
        weight: 1,
        formulas: [],
        summary: "Introduction to linear differential equation, Solution of linear differential equation, linear dependence and linear independence of solution, method of solution of linear differential equation- Differential operator, solution of second order homogeneous linear differential equation with constant coefficient, solution of higher order homogeneous linear differential equations with constant coefficient",
        revision: ""
      },
      {
        id: "mth166_u3",
        title: "Unit III: Linear differential equation",
        weight: 1,
        formulas: [],
        summary: "Solution of non-homogeneous linear differential equations with constant coefficients using operator method, method of variation of parameters, method of undetermined coefficient, solution of Euler-Cauchy equation, simultaneous differential equations by operator method",
        revision: ""
      },
      {
        id: "mth166_u4",
        title: "Unit IV: Partial differential equation",
        weight: 1,
        formulas: [],
        summary: "Introduction to partial differential equation, method of Separation of Variables, solution of wave equation, solution of heat equation, solution of Laplace equation",
        revision: ""
      },
      {
        id: "mth166_u5",
        title: "Unit V: Vector calculus 1",
        weight: 1,
        formulas: [],
        summary: "Limit, continuity and differentiability of vector functions, length of space curve, motion of a body or particle on a curve, gradient of a scalar field and directional derivatives, divergence and curl of vector field",
        revision: ""
      },
      {
        id: "mth166_u6",
        title: "Unit VI: Vector calculus II",
        weight: 1,
        formulas: [],
        summary: "Line integral, Greens' theorem, surface area and Surface integral, Stokes' theorem, Gauss's divergence theorem",
        revision: ""
      }
    ]
  },

  // ----------------- PEL121 - COMMUNICATION SKILLS-I -----------------
  {
    id: "pel121",
    code: "PEL121",
    name: "PEL121: COMMUNICATION SKILLS-I",
    credits: 3,
    examDate: "2025-12-19T00:00:00",
    lessons: [
      {
        id: "pel121_u1",
        title: "Unit I: Role of parts of speech in common errors and pronunciation",
        weight: 1,
        formulas: [],
        summary: "Types of nouns, usage of apostrophe 's' with nouns, order of adjectives and degrees of adjectives, prepositions",
        revision: ""
      },
      {
        id: "pel121_u2",
        title: "Unit II: Building sentences",
        weight: 1,
        formulas: [],
        summary: "Usage of and, but, both-and, either, because, in case, so, so that, since, as, for, although, while, however, despite, relative clauses",
        revision: ""
      },
      {
        id: "pel121_u3",
        title: "Unit III: Tenses",
        weight: 1,
        formulas: [],
        summary: "Rules, usage, formation, imperative negative, question tags of present, past, and future tenses",
        revision: ""
      },
      {
        id: "pel121_u4",
        title: "Unit IV: Articles and indefinites",
        weight: 1,
        formulas: [],
        summary: "Usage and comparison of definite and indefinite articles and no article, usage of the definite article with objects, usage of much, many, how, more, every, each, one, another, other, others",
        revision: ""
      },
      {
        id: "pel121_u5",
        title: "Unit V: Active Passive Voice",
        weight: 1,
        formulas: [],
        summary: "Rules and usage of active and passive voice",
        revision: ""
      },
      {
        id: "pel121_u6",
        title: "Unit VI: Phrasal Verbs",
        weight: 1,
        formulas: [],
        summary: "Commonly used phrasal verbs, phrasal verbs followed by prepositions, conjugating phrasal verbs and their use in day-to-day speaking, common words often confused",
        revision: ""
      }
    ]
  }
];

// ===== TRAINING PLAN =====
// ===== TRAINING PLAN =====
const TRAINING_PLAN = {
  Monday: ["hook"],
  Tuesday: ["riser", "pronation", "cupping"],
  Wednesday: ["biceps", "triceps", "forearm"],
  Thursday: ["riser", "pronation", "cupping"],
  Friday: ["hook"],
  Saturday: ["biceps", "triceps", "forearm"],
  Sunday: []
};

const TRAINING_LABELS = {
  hook: "Train hook like Alizhan",
  riser: "Riser",
  pronation: "Pronation",
  cupping: "Cupping",
  biceps: "Biceps",
  triceps: "Triceps",
  forearm: "Forearm"
};

// EXACT EXERCISES FROM YOUR PLAN (NO ASSUMPTIONS)
const TRAINING_EXERCISES = {
  hook: [
    {
      id: "hook_pronation_lp",
      name: "3 × 15 pronation with loading pin"
    },
    {
      id: "hook_seated_db",
      name: "3 × 15 seated dumbbell curls"
    },
    {
      id: "hook_preacher",
      name: "3 × 15 preacher curls"
    },
    {
      id: "hook_static_20kg",
      name: "5 × 30s static holds with 20 kg dumbbells"
    }
  ],
  riser: [
    {
      id: "riser_5kg_3x50",
      name: "3 × 50 usual riser training with 5 kg"
    },
    {
      id: "riser_static_10kg",
      name: "5 × 1 min static holds with 10 kg dumbbells"
    },
    {
      id: "riser_one_sided",
      name: "5 × 1 min one-sided dumbbell holds"
    }
  ],
  pronation: [
    {
      id: "pro_thumb_20kg",
      name: "3 × 12 thumb pronation with 20 kg"
    },
    {
      id: "pro_strict_posting",
      name: "3 × 12 strict posting pronation"
    }
  ],
  cupping: [
    {
      id: "cup_warmup_10kg",
      name: "2 × 25 warm-up with 10 kg dumbbells"
    },
    {
      id: "cup_20kg_fatgrip",
      name: "3 × 12 with 20 kg dumbbell + fat grip"
    },
    {
      id: "cup_special_protocol",
      name: "3 × [10 reps → 30s hold → 10 reps → 30s hold → 10 reps] with fat grips"
    },
    {
      id: "cup_iso_10kg_fg",
      name: "30s isometric hold with 10 kg dumbbells + fat grip"
    }
  ],
  biceps: [
    {
      id: "bi_warmup_10kg",
      name: "2 × 20 curls with 10 kg dumbbells (warm-up)"
    },
    {
      id: "bi_special_curls",
      name: "3 × special curls with 10 kg: partial to 90° + 10s hold + 10 top reps + full curls"
    }
  ],
  triceps: [
    {
      id: "tri_oh_10kg",
      name: "3 × 15 overhead triceps extensions with 10 kg"
    }
  ],
  forearm: [
    {
      id: "fa_rev_bi_10kg",
      name: "3 × 12 reverse bicep curls with 10 kg"
    },
    {
      id: "fa_rev_wrist_10kg",
      name: "3 × 10 reverse wrist curls"
    },
    {
      id: "fa_curls_3x100",
      name: "3 × 100 forearm curls"
    }
  ]
};
// ===== FOOD MENU (EDIT NAMES TO MATCH YOUR MESS) =====
// You can freely rename/ add/ remove items here later.
// Tags: "clean", "junk", "protein", "paneer", "mushroom", "oil", "carb"
// ===== FOOD TARGET =====

// ====================== FOOD CONFIG ======================
const FOOD_TARGET_CALORIES = 4000;

const FOOD_RULES = {
  paneerPerWeek: 3,
  mushroomPerWeek: 1,
  eggDaysPerWeek: 3,
  eggMaxPerDay: 4,
  eggCalories: 70,
  eggProtein: 6,
  eggCarbs: 0,
  eggFats: 5
};

// NOTE: calories/macros are approximate – good enough for tracking and balance.
const FOOD_ITEMS = {
  // ---------- BREAKFAST : PARANTHA (2 pcs) ----------
  bf_aloo_parantha: {
    name: "Aloo Parantha (2)",
    calories: 450,
    protein: 10,
    carbs: 60,
    fats: 16,
    tags: ["breakfast", "parantha", "carb", "clean"]
  },
  bf_gobhi_parantha: {
    name: "Gobhi Parantha (2)",
    calories: 440,
    protein: 10,
    carbs: 58,
    fats: 16,
    tags: ["breakfast", "parantha", "carb", "clean"]
  },
  bf_onion_parantha: {
    name: "Onion Parantha (2)",
    calories: 440,
    protein: 10,
    carbs: 58,
    fats: 16,
    tags: ["breakfast", "parantha", "carb", "clean"]
  },
  bf_mix_parantha: {
    name: "Mix Parantha (2)",
    calories: 460,
    protein: 11,
    carbs: 60,
    fats: 17,
    tags: ["breakfast", "parantha", "carb", "clean"]
  },
  bf_soya_paneer_parantha: {
    name: "Soya Paneer Parantha (2)",
    calories: 580,
    protein: 22,
    carbs: 60,
    fats: 24,
    tags: ["breakfast", "parantha", "paneer", "protein"]
  },
  bf_plain_parantha: {
    name: "Plain Parantha (2)",
    calories: 420,
    protein: 8,
    carbs: 55,
    fats: 15,
    tags: ["breakfast", "parantha", "carb"]
  },

  // Accompaniments for parantha (you can treat these as included macros)
  bf_parantha_with_curd: {
    name: "Any Parantha + Curd",
    calories: 120,
    protein: 6,
    carbs: 8,
    fats: 6,
    tags: ["breakfast", "add-on", "protein"]
  },
  bf_parantha_with_butter: {
    name: "Any Parantha + Butter",
    calories: 90,
    protein: 0,
    carbs: 0,
    fats: 10,
    tags: ["breakfast", "add-on", "fat"]
  },

  // ---------- BREAKFAST : POORI / BHATURA ----------
  bf_poori_bhaji: {
    name: "Poori Bhaji (5 pc.)",
    calories: 650,
    protein: 12,
    carbs: 80,
    fats: 28,
    tags: ["breakfast", "poori", "oil", "carb"]
  },
  bf_bhatura_channa: {
    name: "Bhatura Channa (2 pc.)",
    calories: 720,
    protein: 16,
    carbs: 90,
    fats: 30,
    tags: ["breakfast", "bhatura", "oil", "carb"]
  },

  // ---------- BREAKFAST : SOUTH INDIAN ----------
  bf_plain_dosa: {
    name: "Plain Dosa + Sambhar + Chutney",
    calories: 420,
    protein: 10,
    carbs: 60,
    fats: 12,
    tags: ["breakfast", "south", "carb", "clean"]
  },
  bf_masala_dosa: {
    name: "Masala Dosa + Sambhar + Chutney",
    calories: 520,
    protein: 11,
    carbs: 70,
    fats: 16,
    tags: ["breakfast", "south", "carb", "fat"]
  },
  bf_onion_dosa: {
    name: "Onion Dosa + Sambhar + Chutney",
    calories: 480,
    protein: 10,
    carbs: 65,
    fats: 14,
    tags: ["breakfast", "south", "carb"]
  },
  bf_veg_upma: {
    name: "Veg Upma + Sambhar + Chutney",
    calories: 400,
    protein: 9,
    carbs: 60,
    fats: 10,
    tags: ["breakfast", "south", "carb", "clean"]
  },
  bf_onion_uttapam: {
    name: "Onion Uttapam + Sambhar + Chutney",
    calories: 460,
    protein: 9,
    carbs: 65,
    fats: 12,
    tags: ["breakfast", "south", "carb"]
  },
  bf_tomato_uttapam: {
    name: "Tomato Uttapam + Sambhar + Chutney",
    calories: 460,
    protein: 9,
    carbs: 65,
    fats: 12,
    tags: ["breakfast", "south", "carb"]
  },
  bf_veg_uttapam: {
    name: "Vegetable Uttapam + Sambhar + Chutney",
    calories: 480,
    protein: 10,
    carbs: 66,
    fats: 13,
    tags: ["breakfast", "south", "carb"]
  },
  bf_idli_sambhar: {
    name: "Idli Sambhar + Chutney (4 pc.)",
    calories: 380,
    protein: 11,
    carbs: 70,
    fats: 5,
    tags: ["breakfast", "south", "carb", "clean"]
  },
  bf_vada_sambhar: {
    name: "Vada Sambhar + Chutney (4 pc.)",
    calories: 520,
    protein: 10,
    carbs: 55,
    fats: 26,
    tags: ["breakfast", "south", "oil", "carb"]
  },

  // ---------- BREAKFAST : BREADS ----------
  bf_bread_butter: {
    name: "Bread Butter (4 slices)",
    calories: 360,
    protein: 8,
    carbs: 50,
    fats: 14,
    tags: ["breakfast", "bread", "carb", "fat"]
  },
  bf_bread_jam: {
    name: "Bread Jam (4 slices)",
    calories: 340,
    protein: 7,
    carbs: 60,
    fats: 4,
    tags: ["breakfast", "bread", "carb"]
  },
  bf_cold_sandwich_big: {
    name: "Cold Sandwich (2 jumbo triangles)",
    calories: 420,
    protein: 12,
    carbs: 50,
    fats: 16,
    tags: ["breakfast", "bread", "carb"]
  },
  bf_aloo_masala_sandwich: {
    name: "Aaloo Masala Sandwich (2 jumbo)",
    calories: 440,
    protein: 10,
    carbs: 55,
    fats: 16,
    tags: ["breakfast", "bread", "carb"]
  },
  bf_veg_grilled_sandwich: {
    name: "Veg Grilled Sandwich (1 jumbo)",
    calories: 380,
    protein: 12,
    carbs: 45,
    fats: 14,
    tags: ["breakfast", "bread", "carb"]
  },
  bf_cheese_grilled_sandwich: {
    name: "Cheese Grilled Sandwich (1 jumbo)",
    calories: 430,
    protein: 14,
    carbs: 45,
    fats: 18,
    tags: ["breakfast", "bread", "carb", "fat"]
  },
  bf_veg_poha_curd: {
    name: "Veg Poha + Aloo Sabji / Curd",
    calories: 380,
    protein: 9,
    carbs: 60,
    fats: 8,
    tags: ["breakfast", "carb", "clean"]
  },
  bf_bread_cutlet: {
    name: "Bread Cutlet (4 slices + 2 cutlet)",
    calories: 460,
    protein: 10,
    carbs: 60,
    fats: 18,
    tags: ["breakfast", "bread", "oil"]
  },

  // ---------- BREAKFAST : OTHERS ----------
  bf_plain_maggi: {
    name: "Plain Maggi (2 packs)",
    calories: 420,
    protein: 10,
    carbs: 60,
    fats: 16,
    tags: ["breakfast", "junk", "carb"]
  },
  bf_veg_maggi: {
    name: "Veg Maggi (2 packs)",
    calories: 440,
    protein: 11,
    carbs: 62,
    fats: 16,
    tags: ["breakfast", "junk", "carb"]
  },
  bf_aloo_kachori: {
    name: "Aaloo Kachori (2 pc.)",
    calories: 420,
    protein: 8,
    carbs: 50,
    fats: 18,
    tags: ["breakfast", "fried", "junk"]
  },
  bf_veg_cheese_burger: {
    name: "Veg Cheese Burger",
    calories: 520,
    protein: 15,
    carbs: 55,
    fats: 24,
    tags: ["breakfast", "junk", "burger"]
  },
  bf_milk_cornflakes_banana: {
    name: "Milk + Cornflakes + Banana",
    calories: 420,
    protein: 14,
    carbs: 70,
    fats: 8,
    tags: ["breakfast", "clean", "protein", "carb"]
  },
  bf_sprouts: {
    name: "Sprouts bowl",
    calories: 220,
    protein: 14,
    carbs: 30,
    fats: 3,
    tags: ["breakfast", "clean", "protein"]
  },

  // ---------- EVENING TEA (Snacks) ----------
  tea_samosa: {
    name: "Samosa (1 pc.)",
    calories: 180,
    protein: 4,
    carbs: 24,
    fats: 8,
    tags: ["tea", "fried", "junk"]
  },
  tea_bread_roll: {
    name: "Bread Roll (1 pc.)",
    calories: 210,
    protein: 5,
    carbs: 26,
    fats: 9,
    tags: ["tea", "fried", "junk"]
  },
  tea_bread_pakoda: {
    name: "Bread Pakoda (1 pc.)",
    calories: 230,
    protein: 6,
    carbs: 28,
    fats: 10,
    tags: ["tea", "fried", "junk"]
  },
  tea_cold_sandwich_small: {
    name: "Cold Sandwich (1 pc.)",
    calories: 220,
    protein: 7,
    carbs: 25,
    fats: 9,
    tags: ["tea", "carb"]
  },
  tea_besan_aloo_tikki: {
    name: "Besan Aaloo Tikki (1 pc.)",
    calories: 200,
    protein: 5,
    carbs: 24,
    fats: 9,
    tags: ["tea", "fried", "junk"]
  },
  tea_sprouts: {
    name: "Sprouts / chana bowl",
    calories: 220,
    protein: 14,
    carbs: 30,
    fats: 3,
    tags: ["tea", "clean", "protein"]
  },
  tea_fruit_bowl: {
    name: "Fruit bowl",
    calories: 150,
    protein: 2,
    carbs: 35,
    fats: 0,
    tags: ["tea", "clean", "carb"]
  },

  // ---------- LUNCH/DINNER : THALI BASES ----------
  fd_north_thali_plain: {
    name: "North Indian Thali (Plain Rice + 3 Veg + Raita)",
    calories: 900,
    protein: 22,
    carbs: 130,
    fats: 20,
    tags: ["lunch", "dinner", "thali", "clean", "carb", "protein"]
  },
  fd_north_thali_jeera: {
    name: "North Indian Thali (Jeera Rice + 3 Veg + Raita)",
    calories: 930,
    protein: 22,
    carbs: 135,
    fats: 20,
    tags: ["lunch", "dinner", "thali", "clean", "carb", "protein"]
  },
  fd_north_thali_fried: {
    name: "North Indian Thali (Fried Rice + 3 Veg + Raita)",
    calories: 1000,
    protein: 22,
    carbs: 140,
    fats: 26,
    tags: ["lunch", "dinner", "thali", "oil", "carb"]
  },
  fd_north_thali_pulao: {
    name: "North Indian Thali (Veg Pulao + 3 Veg + Raita)",
    calories: 960,
    protein: 22,
    carbs: 138,
    fats: 24,
    tags: ["lunch", "dinner", "thali", "carb"]
  },
  fd_north_thali_khichdi: {
    name: "North Indian Thali (Khichadi + Curd + 2 Veg)",
    calories: 820,
    protein: 20,
    carbs: 120,
    fats: 18,
    tags: ["lunch", "dinner", "thali", "clean"]
  },

  fd_south_thali_plain: {
    name: "South Indian Thali (Plain Rice + 3 Veg + Raita)",
    calories: 880,
    protein: 20,
    carbs: 135,
    fats: 18,
    tags: ["lunch", "dinner", "thali", "clean"]
  },
  fd_south_thali_lemon: {
    name: "South Indian Thali (Lemon Rice + 3 Veg + Raita)",
    calories: 900,
    protein: 20,
    carbs: 138,
    fats: 18,
    tags: ["lunch", "dinner", "thali", "clean"]
  },
  fd_south_thali_tomato: {
    name: "South Indian Thali (Tomato Rice + 3 Veg + Raita)",
    calories: 910,
    protein: 20,
    carbs: 140,
    fats: 18,
    tags: ["lunch", "dinner", "thali", "clean"]
  },
  fd_south_thali_tamarind: {
    name: "South Indian Thali (Tamarind Rice + 3 Veg + Raita)",
    calories: 920,
    protein: 20,
    carbs: 140,
    fats: 18,
    tags: ["lunch", "dinner", "thali", "clean"]
  },

  // ---------- LUNCH/DINNER : COMBOS ----------
  fd_combo_poori_bhaji: {
    name: "Combo: Poori Bhaji (5 pc.)",
    calories: 650,
    protein: 12,
    carbs: 80,
    fats: 28,
    tags: ["lunch", "dinner", "combo", "poori", "oil", "carb"]
  },
  fd_combo_bhatura_channa: {
    name: "Combo: Bhatura Channa (2 pc.)",
    calories: 720,
    protein: 16,
    carbs: 90,
    fats: 30,
    tags: ["lunch", "dinner", "combo", "bhatura", "oil", "carb"]
  },
  fd_combo_veg_biryani: {
    name: "Combo: Veg Biryani + Gravy / Raita",
    calories: 900,
    protein: 20,
    carbs: 130,
    fats: 22,
    tags: ["lunch", "dinner", "combo", "carb", "clean"]
  },
  fd_combo_paneer_rice_bowl: {
    name: "Combo: Paneer/Chaap/Veg Rice Bowl",
    calories: 900,
    protein: 26,
    carbs: 115,
    fats: 24,
    tags: ["lunch", "dinner", "combo", "paneer", "protein"]
  },
  fd_combo_paneer_bhurji_parantha: {
    name: "Paneer Bhurji + 3 Plain Parantha",
    calories: 950,
    protein: 30,
    carbs: 95,
    fats: 36,
    tags: ["lunch", "dinner", "combo", "paneer", "protein", "fat"]
  },
  fd_combo_paneer_gravy_parantha: {
    name: "Paneer Gravy + 3 Plain Parantha",
    calories: 980,
    protein: 28,
    carbs: 98,
    fats: 38,
    tags: ["lunch", "dinner", "combo", "paneer", "protein", "fat"]
  },
  fd_combo_curd_rice_set: {
    name: "Curd Rice + Sambhar + Coconut Chutney",
    calories: 700,
    protein: 16,
    carbs: 105,
    fats: 16,
    tags: ["lunch", "dinner", "combo", "south", "clean"]
  },
  fd_combo_plain_dosa_set: {
    name: "Plain Dosa + Sambhar + Coconut Chutney (meal combo)",
    calories: 420,
    protein: 10,
    carbs: 60,
    fats: 12,
    tags: ["lunch", "dinner", "combo", "south"]
  },
  fd_combo_masala_dosa_set: {
    name: "Masala Dosa + Sambhar + Coconut Chutney (meal combo)",
    calories: 520,
    protein: 11,
    carbs: 70,
    fats: 16,
    tags: ["lunch", "dinner", "combo", "south"]
  },
  fd_combo_onion_dosa_set: {
    name: "Onion Dosa + Sambhar + Coconut Chutney (meal combo)",
    calories: 480,
    protein: 10,
    carbs: 65,
    fats: 14,
    tags: ["lunch", "dinner", "combo", "south"]
  },
  fd_combo_veg_upma_set: {
    name: "Veg Upma + Sambhar + Coconut Chutney (meal combo)",
    calories: 400,
    protein: 9,
    carbs: 60,
    fats: 10,
    tags: ["lunch", "dinner", "combo", "south"]
  },
  fd_combo_onion_uttapam_set: {
    name: "Onion Uttapam + Sambhar + Coconut Chutney (meal combo)",
    calories: 460,
    protein: 9,
    carbs: 65,
    fats: 12,
    tags: ["lunch", "dinner", "combo", "south"]
  },
  fd_combo_tomato_uttapam_set: {
    name: "Tomato Uttapam + Sambhar + Coconut Chutney (meal combo)",
    calories: 460,
    protein: 9,
    carbs: 65,
    fats: 12,
    tags: ["lunch", "dinner", "combo", "south"]
  },
  fd_combo_veg_uttapam_set: {
    name: "Vegetable Uttapam + Sambhar + Coconut Chutney (meal combo)",
    calories: 480,
    protein: 10,
    carbs: 66,
    fats: 13,
    tags: ["lunch", "dinner", "combo", "south"]
  },
  fd_combo_idli_set: {
    name: "Idli Sambhar + Coconut Chutney (4 pc.) (meal combo)",
    calories: 380,
    protein: 11,
    carbs: 70,
    fats: 5,
    tags: ["lunch", "dinner", "combo", "south"]
  },
  fd_combo_vada_set: {
    name: "Sambhar Vada + Coconut Chutney (4 pc.) (meal combo)",
    calories: 520,
    protein: 10,
    carbs: 55,
    fats: 26,
    tags: ["lunch", "dinner", "combo", "south", "fried"]
  },
  fd_combo_chaap_roti: {
    name: "Malai/Achari/Tandoori Chaap + Roti",
    calories: 750,
    protein: 26,
    carbs: 70,
    fats: 28,
    tags: ["lunch", "dinner", "combo", "chaap", "protein"]
  },
  fd_combo_soya_rice_roti: {
    name: "Soyabean Masala/Chilli + Rice/Roti",
    calories: 780,
    protein: 28,
    carbs: 95,
    fats: 20,
    tags: ["lunch", "dinner", "combo", "protein"]
  },
  fd_combo_paneer_chaap_roll: {
    name: "Paneer/Chaap Roll",
    calories: 520,
    protein: 18,
    carbs: 55,
    fats: 20,
    tags: ["lunch", "dinner", "combo", "paneer", "wrap"]
  },

  // ---------- LUNCH/DINNER : CHINESE ----------
  fd_chinese_fried_rice_combo: {
    name: "Chinese: Fried Rice + Main Dish",
    calories: 900,
    protein: 20,
    carbs: 120,
    fats: 32,
    tags: ["lunch", "dinner", "chinese", "oil", "carb"]
  },
  fd_chinese_garlic_rice_combo: {
    name: "Chinese: Garlic Rice + Main Dish",
    calories: 920,
    protein: 20,
    carbs: 125,
    fats: 32,
    tags: ["lunch", "dinner", "chinese", "oil", "carb"]
  },
  fd_chinese_chilly_garlic_rice_combo: {
    name: "Chinese: Chilly Garlic Rice + Main Dish",
    calories: 930,
    protein: 20,
    carbs: 126,
    fats: 33,
    tags: ["lunch", "dinner", "chinese", "oil", "carb"]
  },
  fd_chinese_schezwan_rice_combo: {
    name: "Chinese: Schezwan Rice + Main Dish",
    calories: 950,
    protein: 20,
    carbs: 128,
    fats: 34,
    tags: ["lunch", "dinner", "chinese", "oil", "carb"]
  },
  fd_chinese_veg_noodles_combo: {
    name: "Chinese: Veg Noodles + Main Dish",
    calories: 880,
    protein: 18,
    carbs: 115,
    fats: 32,
    tags: ["lunch", "dinner", "chinese", "oil", "carb"]
  },
  fd_chinese_hakka_noodles_combo: {
    name: "Chinese: Hakka Noodles + Main Dish",
    calories: 900,
    protein: 18,
    carbs: 118,
    fats: 33,
    tags: ["lunch", "dinner", "chinese", "oil", "carb"]
  },
  fd_chinese_singapuri_noodles_combo: {
    name: "Chinese: Singapuri Noodles + Main Dish",
    calories: 920,
    protein: 18,
    carbs: 120,
    fats: 34,
    tags: ["lunch", "dinner", "chinese", "oil", "carb"]
  },
  fd_chinese_chilly_garlic_noodles_combo: {
    name: "Chinese: Chilly Garlic Noodles + Main Dish",
    calories: 930,
    protein: 18,
    carbs: 122,
    fats: 34,
    tags: ["lunch", "dinner", "chinese", "oil", "carb"]
  },

  // Chinese mains (these flavours are “inside” the combos above,
  // but we list them for completeness)
  fd_main_honey_chilly_potato: {
    name: "Main Dish: Honey Chilly Potato",
    calories: 280,
    protein: 4,
    carbs: 38,
    fats: 12,
    tags: ["lunch", "dinner", "chinese", "fried"]
  },
  fd_main_manchurian: {
    name: "Main Dish: Manchurian with Gravy (6 pc.)",
    calories: 260,
    protein: 6,
    carbs: 24,
    fats: 14,
    tags: ["lunch", "dinner", "chinese", "fried"]
  },
  fd_main_honey_chilly_cauliflower: {
    name: "Main Dish: Honey Chilly Cauliflower",
    calories: 260,
    protein: 6,
    carbs: 26,
    fats: 12,
    tags: ["lunch", "dinner", "chinese", "fried"]
  },
  fd_main_cheese_chilly: {
    name: "Main Dish: Cheese Chilly with Gravy",
    calories: 300,
    protein: 10,
    carbs: 16,
    fats: 20,
    tags: ["lunch", "dinner", "chinese", "paneer"]
  },
  fd_main_mushroom_chilly: {
    name: "Main Dish: Mushroom Chilly with Gravy",
    calories: 260,
    protein: 8,
    carbs: 16,
    fats: 18,
    tags: ["lunch", "dinner", "chinese", "mushroom"]
  },
  fd_main_honey_chilly_veg: {
    name: "Main Dish: Honey Chilly Veg",
    calories: 260,
    protein: 6,
    carbs: 26,
    fats: 12,
    tags: ["lunch", "dinner", "chinese", "fried"]
  }
};

// Which items appear in which meal dropdown
const MEAL_OPTIONS = {
  breakfast: [
    {
      label: "Parantha (2 pcs)",
      items: [
        "bf_aloo_parantha",
        "bf_gobhi_parantha",
        "bf_onion_parantha",
        "bf_mix_parantha",
        "bf_soya_paneer_parantha",
        "bf_plain_parantha"
      ]
    },
    {
      label: "Poori / Bhatura",
      items: ["bf_poori_bhaji", "bf_bhatura_channa"]
    },
    {
      label: "South Indian",
      items: [
        "bf_plain_dosa",
        "bf_masala_dosa",
        "bf_onion_dosa",
        "bf_veg_upma",
        "bf_onion_uttapam",
        "bf_tomato_uttapam",
        "bf_veg_uttapam",
        "bf_idli_sambhar",
        "bf_vada_sambhar"
      ]
    },
    {
      label: "Breads & Sandwiches",
      items: [
        "bf_bread_butter",
        "bf_bread_jam",
        "bf_cold_sandwich_big",
        "bf_aloo_masala_sandwich",
        "bf_veg_grilled_sandwich",
        "bf_cheese_grilled_sandwich",
        "bf_veg_poha_curd",
        "bf_bread_cutlet"
      ]
    },
    {
      label: "Others",
      items: [
        "bf_plain_maggi",
        "bf_veg_maggi",
        "bf_aloo_kachori",
        "bf_veg_cheese_burger",
        "bf_milk_cornflakes_banana",
        "bf_sprouts"
      ]
    }
  ],

  lunch: [
    {
      label: "North Indian Thali",
      items: [
        "fd_north_thali_plain",
        "fd_north_thali_jeera",
        "fd_north_thali_fried",
        "fd_north_thali_pulao",
        "fd_north_thali_khichdi"
      ]
    },
    {
      label: "South Indian Thali",
      items: [
        "fd_south_thali_plain",
        "fd_south_thali_lemon",
        "fd_south_thali_tomato",
        "fd_south_thali_tamarind"
      ]
    },
    {
      label: "Combos",
      items: [
        "fd_combo_poori_bhaji",
        "fd_combo_bhatura_channa",
        "fd_combo_veg_biryani",
        "fd_combo_paneer_rice_bowl",
        "fd_combo_paneer_bhurji_parantha",
        "fd_combo_paneer_gravy_parantha",
        "fd_combo_curd_rice_set",
        "fd_combo_plain_dosa_set",
        "fd_combo_masala_dosa_set",
        "fd_combo_onion_dosa_set",
        "fd_combo_veg_upma_set",
        "fd_combo_onion_uttapam_set",
        "fd_combo_tomato_uttapam_set",
        "fd_combo_veg_uttapam_set",
        "fd_combo_idli_set",
        "fd_combo_vada_set",
        "fd_combo_chaap_roti",
        "fd_combo_soya_rice_roti",
        "fd_combo_paneer_chaap_roll"
      ]
    },
    {
      label: "Chinese (Rice / Noodles + Main Dish)",
      items: [
        "fd_chinese_fried_rice_combo",
        "fd_chinese_garlic_rice_combo",
        "fd_chinese_chilly_garlic_rice_combo",
        "fd_chinese_schezwan_rice_combo",
        "fd_chinese_veg_noodles_combo",
        "fd_chinese_hakka_noodles_combo",
        "fd_chinese_singapuri_noodles_combo",
        "fd_chinese_chilly_garlic_noodles_combo"
      ]
    }
  ],

  tea: [
    {
      label: "Snacks",
      items: [
        "tea_samosa",
        "tea_bread_roll",
        "tea_bread_pakoda",
        "tea_cold_sandwich_small",
        "tea_besan_aloo_tikki",
        "tea_sprouts",
        "tea_fruit_bowl"
      ]
    }
  ],

  // Dinner has the exact same options as Lunch
  dinner: [
    {
      label: "North Indian Thali",
      items: [
        "fd_north_thali_plain",
        "fd_north_thali_jeera",
        "fd_north_thali_fried",
        "fd_north_thali_pulao",
        "fd_north_thali_khichdi"
      ]
    },
    {
      label: "South Indian Thali",
      items: [
        "fd_south_thali_plain",
        "fd_south_thali_lemon",
        "fd_south_thali_tomato",
        "fd_south_thali_tamarind"
      ]
    },
    {
      label: "Combos",
      items: [
        "fd_combo_poori_bhaji",
        "fd_combo_bhatura_channa",
        "fd_combo_veg_biryani",
        "fd_combo_paneer_rice_bowl",
        "fd_combo_paneer_bhurji_parantha",
        "fd_combo_paneer_gravy_parantha",
        "fd_combo_curd_rice_set",
        "fd_combo_plain_dosa_set",
        "fd_combo_masala_dosa_set",
        "fd_combo_onion_dosa_set",
        "fd_combo_veg_upma_set",
        "fd_combo_onion_uttapam_set",
        "fd_combo_tomato_uttapam_set",
        "fd_combo_veg_uttapam_set",
        "fd_combo_idli_set",
        "fd_combo_vada_set",
        "fd_combo_chaap_roti",
        "fd_combo_soya_rice_roti",
        "fd_combo_paneer_chaap_roll"
      ]
    },
    {
      label: "Chinese (Rice / Noodles + Main Dish)",
      items: [
        "fd_chinese_fried_rice_combo",
        "fd_chinese_garlic_rice_combo",
        "fd_chinese_chilly_garlic_rice_combo",
        "fd_chinese_schezwan_rice_combo",
        "fd_chinese_veg_noodles_combo",
        "fd_chinese_hakka_noodles_combo",
        "fd_chinese_singapuri_noodles_combo",
        "fd_chinese_chilly_garlic_noodles_combo"
      ]
    }
  ]
};

// Per-item nutrition (approximate, you can tweak later)
// calories, protein(g), carbs(g), fats(g)


// Grouped dropdowns for each meal


// RULES: from our earlier decisions
