// ===== EXAM SEASON CONFIG =====
const EXAM_SEASON = {
  start: new Date("2025-12-07T00:00:00"),
  end: new Date("2026-01-05T23:59:59")
};

// ===== STUDY DATA =====
// EXAMPLE SUBJECTS – replace with your real ones later.
const SUBJECTS = [
  // ----------------- PHY110 - ENGINEERING PHYSICS -----------------
  {
    id: "phy110",
    code: "PHY110",
    name: "ENGINEERING PHYSICS",
    credits: 3,
    examDate: "2026-01-05T00:00:00",
    lessons: [
      {
        id: "phy_u1",
        title: "Unit 1: Electromagnetic theory",
        weight: 1,
        formulas: [],
        summary:
          "Electromagnetic theory : scalar and vectors fields, concept of gradient, divergence and curl, Gauss theorem and Stokes theorem (qualitative), Poisson and Laplace equations, continuity equation, Maxwell electromagnetic equations (differential and integral forms), physical significance of Maxwell equations, Ampere Circuital Law, Maxwell displacement current and correction in Ampere Circuital Law",
        revision: ""
      },
      {
        id: "phy_u2",
        title: "Unit 2: Lasers and applications",
        weight: 1,
        formulas: [],
        summary:
          "Lasers and applications : fundamentals of laser- energy levels in atoms, Radiation matter interaction, Absorption of light, spontaneous emission of light, stimulated emission of light, population of energy levels, Einstein A and B coefficients, metastable state, population inversion, resonant cavity, excitation mechanisms, Nd - YAG, He-Ne Laser, Semiconductor Laser, lasing action, properties of laser, applications of laser: holography",
        revision: ""
      },
      {
        id: "phy_u3",
        title: "Unit 3: Fiber optics",
        weight: 1,
        formulas: [],
        summary:
          "Fiber optics : fiber optics introduction, optical fiber as a dielectric wave guide, total internal reflection, acceptance angle, numerical aperture, relative refractive index, V-number, step index and graded index fibers, losses associated with optical fibers",
        revision: ""
      },
      {
        id: "phy_u4",
        title: "Unit 4: Quantum mechanics",
        weight: 1,
        formulas: [],
        summary:
          "Quantum mechanics : need of quantum mechanics, photoelectric effect, concept of de Broglie matter waves, wavelength of matter waves in different forms, Heisenberg uncertainty principle, concept of phase velocity and group velocity (qualitative), wave function and its significance, Schrodinger time dependent and independent equation, particle in a box, tunneling effect (Qualitative idea)",
        revision: ""
      },
      {
        id: "phy_u5",
        title: "Unit 5: Solid state physics",
        weight: 1,
        formulas: [],
        summary:
          "Solid state physics : free electron theory (Introduction), diffusion and drift current (qualitative), fermi energy, fermi-dirac distribution function, and theory of solids -formation of allowed and forbidden energy bands, concept of effective mass - electrons and holes, Hall effect (with derivation), semiconductors and insulators, fermi level for intrinsic and extrinsic semiconductors, direct and indirect band gap semiconductors, solar cell basics",
        revision: ""
      },
      {
        id: "phy_u6",
        title: "Unit 6: Introduction to engineering materials",
        weight: 1,
        formulas: [],
        summary:
          "Introduction to engineering materials : dielectric materials definition, dielectric constant, magnetic materials: dia, para, ferromagnetic materials, magnetic data storage, piezoelectric materials: direct and inverse piezoelectric methods, superconducting materials: properties, Meissner effect, Type I & Type II superconductors, applications",
        revision: ""
      }
    ]
  },

  // ----------------- MTH165 - MATHEMATICS FOR ENGINEERS -----------------
  {
    id: "mth165",
    code: "MTH165",
    name: "MATHEMATICS FOR ENGINEERS",
    credits: 4,
    examDate: "2025-12-19T00:00:00",
    lessons: [
      {
        id: "mth_u1",
        title: "Unit 1: Linear Algebra",
        weight: 1,
        formulas: [],
        summary:
          "Linear Algebra : Review of matrices, Elementary operations of matrices, Rank of a matrix, Linear dependence and independence of vectors, Solution of Linear system of equations, Inverse of matrices, Eigen values and Eigen vectors, Properties of Eigen values, Cayley-Hamilton theorem",
        revision: ""
      },
      {
        id: "mth_u2",
        title: "Unit 2: Differential and integral calculus",
        weight: 1,
        formulas: [],
        summary:
          "Differentiatial and integral calculus : General rules of differentiation, Derivatives of standard functions, Derivatives of Parametric forms, Derivatives of implicit functions, Logarithmic differentiation,, properties of indefinite integral, Methods of integration-By Parts, Methods of integration-By Partial fractions, Properties of definite integral",
        revision: ""
      },
      {
        id: "mth_u3",
        title: "Unit 3: Application of derivatives",
        weight: 1,
        formulas: [],
        summary:
          "Application of derivatives : Rolle’s theorem, Mean value theorems, Taylor’s theorems with remainders, Maclaurin theorems with remainders, indeterminate forms, L' Hospital's rule, maxima and minima.",
        revision: ""
      },
      {
        id: "mth_u4",
        title: "Unit 4: Multivariate functions",
        weight: 1,
        formulas: [],
        summary:
          "Multivariate functions : Functions of two variables, Limits and Continuity, Partial derivatives, Total derivative and differentiability, Chain rule, Euler's theorem for Homogeneous functions, Maxima and Minima, Lagrange method of multiplier",
        revision: ""
      },
      {
        id: "mth_u5",
        title: "Unit 5: Multiple Integrals",
        weight: 1,
        formulas: [],
        summary:
          "Multiple Integrals : Double integrals, change of order of integration, Triple integrals, change of variables, Application of double integrals to calculate area and volume, Application of triple integrals to calculate volume.",
        revision: ""
      },
      {
        id: "mth_u6",
        title: "Unit 6: Fourier series",
        weight: 1,
        formulas: [],
        summary:
          "Fourier series : Introduction and Euler's formulae, Conditions for a Fourier Expansion and Functions having points of discontinuity, Change of interval, Even and odd functions, Half Range series, Perseval's Formula, Complex form of Fourier Series",
        revision: ""
      }
    ]
  },

  // ----------------- INT108 - PYTHON PROGRAMMING -----------------
  {
    id: "int108",
    code: "INT108",
    name: "PYTHON PROGRAMMING",
    credits: 4,
    examDate: "2025-12-16T00:00:00",
    lessons: [
      {
        id: "py_u1",
        title: "Unit 1: Setting up your Programming Environment",
        weight: 1,
        formulas: [],
        summary:
          "Setting up your Programming Environment : Python versions, Python on windows, running a ‘Hello World’ program Variables, Expression and Statements: : Naming and using variables, Avoiding Name Error when using variables, Values and types, variables, variables name and keywords, statements, operators and operand, order of operations, operations on string, composition and comments",
        revision: ""
      },
      {
        id: "py_u2",
        title: "Unit 2: Conditional and iterative statements",
        weight: 1,
        formulas: [],
        summary:
          "Conditional statements : modulus operator, Random numbers, Boolean expressions, logic operators, conditional, nested conditionals Iterative statements : while statements, for loop statement, Nested for, Nested while, Random numbers in loops, encapsulation and generalization",
        revision: ""
      },
      {
        id: "py_u3",
        title: "Unit 3: Functions and recursion",
        weight: 1,
        formulas: [],
        summary:
          "Functions and recursion : function calls, type conversion and coercion, math functions, adding new function, parameters and argument, recursion and its use",
        revision: ""
      },
      {
        id: "py_u4",
        title: "Unit 4: String, Lists, Tuples and Dictionaries",
        weight: 1,
        formulas: [],
        summary:
          "String : string a compound data type, length, string traversal, string slices, comparision, find function, looping and counting Lists : list values, length, membership, operations, slices, deletion, accessing elements, list and for loops, list parameters and nested list Tuples and Dictionaries : mutability and tuples, tuple assignment, tuple as return values, dictionaries operations and methods, sparse matrices, aliasing and coping",
        revision: ""
      },
      {
        id: "py_u5",
        title: "Unit 5: Classes, objects and OOP terminology",
        weight: 1,
        formulas: [],
        summary:
          "Classes and objects : Creating classes, creating instance objects, accessing attributes Object oriented programming terminology : Class Inheritance, Overriding Methods, Data Hiding, Function Overloading",
        revision: ""
      },
      {
        id: "py_u6",
        title: "Unit 6: Files, Exceptions and Regular Expressions",
        weight: 1,
        formulas: [],
        summary:
          "Files and Exceptions : text files, writing variables, Reading from a file, writing to a file, directories, pickling, handling the zero Division error exception, using try-except blocks, The else block, Handling the File Not found error exception Regular Expressions : Concept of regular expression, various types of regular expressions, using match function, Web Scraping by using Regular Expressions",
        revision: ""
      },
      {
        id: "py_practicals",
        title: "Practicals (List of Programs)",
        weight: 1,
        formulas: [],
        summary:
          "List of Practicals: 1. Program to enter two numbers and print the arithmetic operations like +,-,*, /, // and%. 2. Write a program to find whether an inputted number is perfect or not. 3. Write a Program to check if the entered number is Armstrong or not. 4. Write a Program to find factorial of the entered number. 5. Write a Program to enter the number of terms and to print the Fibonacci Series. 6. Write a Program to enter the string and to check if it’s palindrome or not using loop. 7. Recursively find the factorial of a natural number. 8. Read a file line by line and print it. 9. Remove all the lines that contain the character “a” in a file and write it into another file. 10. Read a text file and display the number of vowels/consonants/uppercase/lowercase characters in the file. 11. Create a binary file with name and roll no. Search for a given roll number and display the name, if not found display appropriate message. 12. Write a random number generator that generates random numbers between 1 and 6 (simulates a dice). 13. Write a python program to implement a stack using a list data structure. 14. Take a sample of ten phishing e-mails (any text file) and find most common. 15. Read a text file line by line and display each word separated by a #.",
        revision: ""
      }
    ]
  },

  // ----------------- MEC136 - ENGINEERING DRAWING WITH AUTOCAD -----------------
  {
    id: "mec136",
    code: "MEC136",
    name: "ENGINEERING DRAWING WITH AUTOCAD",
    credits: 4,
    examDate: "2025-12-29T00:00:00",
    lessons: [
      {
        id: "ed_u1",
        title: "Unit 1: Introduction to Engineering Drawing",
        weight: 1,
        formulas: [],
        summary:
          "Introduction to Engineering Drawing : Conceptual framework of drawing instruments, line types, dimensioning, single stroke vertical gothic letter writing, scales-plain and diagonal, introduction to AutoCAD interface- units, limits, navigation, OSNAP, ortho, UCS, F-keys",
        revision: ""
      },
      {
        id: "ed_u2",
        title: "Unit 2: Projection of Points and Lines",
        weight: 1,
        formulas: [],
        summary:
          "Projection of Points and Lines : Introduction, concept of traces, AutoCAD commands- line, circle, arc, polyline, and dimensioning style, hands-on-practice on AutoCAD, principles of quadrants and orthographic projections, orthographic projection of points and lines (parallel, perpendicular and inclined to one plane), rectangle, polygon, ellipse",
        revision: ""
      },
      {
        id: "ed_u3",
        title: "Unit 3: Orthographic Projections",
        weight: 1,
        formulas: [],
        summary:
          "Orthographic Projections : Introduction, principle, orthographic projections in both first and third angle projections systems, practice, AutoCAD commands- linetype and its properties, move, rotate, trim, copy, erase, mirror, scale, fillet, chamfer, array, hands-on-practice on 2D drawings",
        revision: ""
      },
      {
        id: "ed_u4",
        title: "Unit 4: Sectional Views",
        weight: 1,
        formulas: [],
        summary:
          "Sectional Views : Introduction, principle, sectional views (full, half, and offset) in first and third angle projection systems, practice, AutoCAD commands- stretch, explode, offset, extend, join, region, break, hatch, hatch-edit, hands-on-practice on 2D drawings",
        revision: ""
      },
      {
        id: "ed_u5",
        title: "Unit 5: Isometric Views",
        weight: 1,
        formulas: [],
        summary:
          "Isometric Views : Introduction, terminology, isometric scale, isometric views of prisms, pyramids, and one object on other, dimensioning, AutoCAD commands for 3D- 3P UCS rotation, standard shapes, extrude, revolve, presspull, hands-on-practice on 3D drawings",
        revision: ""
      },
      {
        id: "ed_u6",
        title: "Unit 6: Development of Surfaces",
        weight: 1,
        formulas: [],
        summary:
          "Development of Surfaces : Introduction, development methods, surface development of regular and truncated prisms and pyramids, AutoCAD commands for 3D- subtract, union, orbit, and visual styles, hands-on-practice on 3D drawings",
        revision: ""
      }
    ]
  },

  // ----------------- CSE326 - INTERNET PROGRAMMING LABORATORY -----------------
  {
    id: "cse326",
    code: "CSE326",
    name: "INTERNET PROGRAMMING LABORATORY",
    credits: 2,
    examDate: "2025-12-24T00:00:00",
    lessons: [
      {
        id: "ip_u1",
        title: "Unit 1: Fundamentals of HTML",
        weight: 1,
        formulas: [],
        summary:
          "Fundamentals of HTML : Introduction to Web Technologies and HTML, Structure of an HTML Document, Root and Metadata Elements, Basic Tags: Headings, Paragraphs, Line Breaks, Horizontal Rules, Text Formatting in HTML, strong, em, mark, small, abbr, cite, dfn, Quotations and Comments, Types of HTML Tags: Paired and Unpaired, Block-level vs Inline elements",
        revision: ""
      },
      {
        id: "ip_u2",
        title: "Unit 2: Expanding HTML Knowledge",
        weight: 1,
        formulas: [],
        summary:
          "Expanding HTML Knowledge : Working with Lists: Ordered, Unordered, Definition Lists, Hyperlinks, Inserting Images, Embedding Media, HTML Favicon, HTML Div, HTML Text Formatting, Working With Tables-Colspan and Rowspan, Working with Forms- action attribute, get and post methods, Form Elements and Controls Like Text Inputs,, TextArea, Buttons, CheckBoxes, Dropdown Boxes, Radio Buttons,, Select and File Select",
        revision: ""
      },
      {
        id: "ip_u3",
        title: "Unit 3: Introduction to Cascading Style Sheets",
        weight: 1,
        formulas: [],
        summary:
          "Introduction to Cascading Style Sheets : CSS rules like link and style, CSS properties like text controlling and text formatting, CSS selectors like type, id, class, Introduction To CSS and types of CSS, Inline CSS, Internal CSS, External CSS, CSS Box Model- Padding, Margin, Border, Div and Span Tag in CSS, Working with background Images, Fonts & Typography: font-family, font-size, lineheight, font-weight, text-align, applying css on tables, creating hoverable tables, applying css on all controls of forms",
        revision: ""
      },
      {
        id: "ip_u4",
        title: "Unit 4: JavaScript Application Development",
        weight: 1,
        formulas: [],
        summary:
          "JavaScript Application Development : Incorporating JavaScript in the HEAD and BODY element, Using an External JavaScript file, Using variables and operators, Using control statements such as if...else, switch, break and continue, Using looping statements such as while, do...while, for, Using Popup boxes such as Alert, Confirm, and Prompt, Working with JavaScript Objects,Properties and Methods, Variables: var, let, const",
        revision: ""
      },
      {
        id: "ip_u5",
        title: "Unit 5: JavaScript Functions, Events and Validation",
        weight: 1,
        formulas: [],
        summary:
          "JavaScript Functions,Events and Validation : Working with Functions-Using function arguments and return statement, Working with JavaScript Events like Form Based, Keyboard Based and Mouse Based, JavaScript Form Validation",
        revision: ""
      },
      {
        id: "ip_u6",
        title: "Unit 6: JavaScript DOM",
        weight: 1,
        formulas: [],
        summary:
          "Javascript DOM : DOM introduction, DOM methods, DOM document, DOM elements, DOM HTML, DOM CSS, DOM Events",
        revision: ""
      }
    ]
  },

  // ----------------- CSE111 - ORIENTATION TO COMPUTING-I -----------------
  {
    id: "cse111",
    code: "CSE111",
    name: "ORIENTATION TO COMPUTING-I",
    credits: 2,
    examDate: "2025-12-22T00:00:00",
    lessons: [
      {
        id: "oc_u1",
        title: "Unit 1: Computer System",
        weight: 1,
        formulas: [],
        summary:
          "Computer System : Basic structure of a computer and its components, Memories and its types- RAM, ROM, Secondary storage devices, SSD vs HDD, Processors and GPU, PC connection interface- USB, SATA, HDMI, NFC, Bluetooth, Introduction to RAID and RAID levels.",
        revision: ""
      },
      {
        id: "oc_u2",
        title: "Unit 2: Operating System and Computer Languages",
        weight: 1,
        formulas: [],
        summary:
          "Operating System : Operating System and its architecture, Types of Operating System, Functions of Operating System, Directory Hierarchy, Bootloader, Kernel and types of Kernels. Computer Languages : Machine language, Assembly language, High level language, Steps in development of a program, Compilation and Execution, Compiler, Interpreter, Assembler.",
        revision: ""
      },
      {
        id: "oc_u3",
        title: "Unit 3: Linux Operating System and File system management",
        weight: 1,
        formulas: [],
        summary:
          "Linux Operating System : Linux OS and its features, Distribution versions, Shell commands - ls, cat, man, cd, touch, cp, mv, rmdir, mkdir, rm, chmod, pwd, ps, kill, etc, Comparison of windows and Linux OS, Virtual Machine – introduction, VM software, creating and managing VMs. File system management : File system basics, Types of file system- FAT, GFT, HFS, NDFS, UDF, Extended file system.",
        revision: ""
      },
      {
        id: "oc_u4",
        title: "Unit 4: Cohorts, Pathways, MOOCs and Hackathons",
        weight: 1,
        formulas: [],
        summary:
          "Cohorts and Skill Sets : Introduction to Cohorts, Purpose of Cohorts, Companies, Skills required and skill sources for different Cohorts (Internal and External) Types of Cohorts : Cloud Computing, Data Science, Machine Learning, Software development (Product and Service based), Full Stack Web Development, Software Methodologies and Testing, Teaching and Research, Cyber Security Cohorts. Pathways : Introduction to Pathways, Purpose of Pathways, Job Roles for Different Pathways, Types of Pathways: Product Based, Service Based, Government Jobs, Higher studies, Entrepreneurship MOOCs and Hackathons : Introduction to MOOCs and Hackathons, Types of MOOCs, Various MOOCs Platforms, Benefits of MOOCs, Globally Recognized Hackathons and Competitions, MAANG Companies",
        revision: ""
      },
      {
        id: "oc_u5",
        title: "Unit 5: Computer Network, Communication and Security Essentials",
        weight: 1,
        formulas: [],
        summary:
          "Computer Network and Communication : Introduction to Computer Network and its types, Network topologies, Network communication devices- Routers, Switches, Modems, Hubs, access point, Client Server Model. Security Essentials : Basic security threats- Malwares and its types- Virus, Worm, Trojan horse, Spyware, Ransomware, Phishing, Password cracking, Multi Factor authentication, User Account Types and Privileges- Admin, User, Guest, Firewall basics.",
        revision: ""
      },
      {
        id: "oc_u6",
        title: "Unit 6: Version Control, Modern AI Trends and Profile Creation",
        weight: 1,
        formulas: [],
        summary:
          "Version Control : Overview of Git and GitHub, install git and create a GitHub account, create a local git repository, add a new file to the repository, Creating a commit, Creation of a new Branch Profile. Modern AI Trends and Tools : Introduction to AI, Real life application of AI, Introduction to Generative AI and its types, Generative AI tools– Text Generation Tools: ChatGPT, Gemini AI, Image Generation Tools, Video and animation tools, Research Tools: Perplexity AI, NotebookLM, JenniAI, Prompt Engineering – Good vs poor prompt, Ethical use of AI and AI tools. Profile Creation : Figma, GitHub, Stack overflow, HackerRank, HackerEarth, GeeksforGeeks, Leetcode.",
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

