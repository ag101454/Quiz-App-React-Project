// src/data/questions.js
// Complete questions for each department
const questions = {
  cs: [
    {
      id: 1,
      text: "What is the time complexity of a binary search algorithm?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "Which data structure uses LIFO principle?",
      options: [
        "Queue",
        "Stack",
        "Linked List",
        "Tree"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      text: "Which programming language is known as the 'mother of all languages'?",
      options: [
        "C",
        "Java",
        "ALGOL",
        "Fortran"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      text: "What is the default port for HTTP?",
      options: [
        "80",
        "443",
        "21",
        "25"
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      text: "Which of these is not a programming paradigm?",
      options: [
        "Object-Oriented",
        "Functional",
        "Procedural",
        "Algorithmic"
      ],
      correctAnswer: 3
    },
    {
      id: 7,
      text: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Question Language",
        "Standard Query Logic",
        "System Query Language"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      text: "Which data structure is used for implementing recursion?",
      options: [
        "Queue",
        "Stack",
        "Tree",
        "Graph"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      text: "What is the time complexity of bubble sort in worst case?",
      options: [
        "O(n)",
        "O(n log n)",
        "O(n²)",
        "O(log n)"
      ],
      correctAnswer: 2
    },
    {
      id: 10,
      text: "Which language is used for Android development?",
      options: [
        "Swift",
        "Java",
        "C#",
        "Python"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      text: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Advanced Programming Interface",
        "Application Process Integration",
        "Automated Programming Interface"
      ],
      correctAnswer: 0
    },
    {
      id: 12,
      text: "Which protocol is used for sending emails?",
      options: [
        "SMTP",
        "HTTP",
        "FTP",
        "SSH"
      ],
      correctAnswer: 0
    },
    {
      id: 13,
      text: "What is the main purpose of an operating system?",
      options: [
        "To manage hardware resources",
        "To provide user interface",
        "To run applications",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      id: 14,
      text: "Which of these is not a JavaScript framework?",
      options: [
        "React",
        "Angular",
        "Vue",
        "JavaSpring"
      ],
      correctAnswer: 3
    },
    {
      id: 15,
      text: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: 1
    }
  ],
  se: [
    {
      id: 1,
      text: "Which phase of SDLC involves gathering requirements?",
      options: [
        "Design",
        "Testing",
        "Requirements Analysis",
        "Implementation"
      ],
      correctAnswer: 2
    },
    {
      id: 2,
      text: "What does Agile methodology emphasize?",
      options: [
        "Comprehensive documentation",
        "Following a strict plan",
        "Individual interactions over processes",
        "Contract negotiation"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      text: "What is the main goal of software testing?",
      options: [
        "To prove that the software works",
        "To find defects",
        "To satisfy quality standards",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      id: 4,
      text: "Which model is known as the 'waterfall model'?",
      options: [
        "Iterative model",
        "Linear sequential model",
        "Incremental model",
        "Spiral model"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      text: "What is version control used for?",
      options: [
        "Tracking changes in source code",
        "Managing project documentation",
        "Controlling software versions",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      id: 6,
      text: "Which of these is not a software development methodology?",
      options: [
        "Scrum",
        "Kanban",
        "Waterfall",
        "Java"
      ],
      correctAnswer: 3
    },
    {
      id: 7,
      text: "What is the purpose of UML diagrams?",
      options: [
        "To visualize system design",
        "To document requirements",
        "To model business processes",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      id: 8,
      text: "Which testing is done by the development team?",
      options: [
        "Alpha testing",
        "Beta testing",
        "Unit testing",
        "Acceptance testing"
      ],
      correctAnswer: 2
    },
    {
      id: 9,
      text: "What is refactoring?",
      options: [
        "Rewriting code from scratch",
        "Improving code without changing functionality",
        "Fixing bugs",
        "Adding new features"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      text: "Which principle suggests that a class should have only one reason to change?",
      options: [
        "DRY (Don't Repeat Yourself)",
        "Single Responsibility Principle",
        "Open-Closed Principle",
        "Liskov Substitution Principle"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      text: "What is continuous integration?",
      options: [
        "Merging code changes frequently",
        "Automated testing",
        "Both A and B",
        "None of the above"
      ],
      correctAnswer: 2
    },
    {
      id: 12,
      text: "Which of these is not a software design pattern?",
      options: [
        "Singleton",
        "Factory",
        "Observer",
        "Compiler"
      ],
      correctAnswer: 3
    },
    {
      id: 13,
      text: "What is the main purpose of software documentation?",
      options: [
        "To help users understand the software",
        "To assist developers in maintenance",
        "To meet regulatory requirements",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      id: 14,
      text: "Which metric measures the complexity of code?",
      options: [
        "Cyclomatic complexity",
        "Code coverage",
        "Lines of code",
        "Function points"
      ],
      correctAnswer: 0
    },
    {
      id: 15,
      text: "What is pair programming?",
      options: [
        "Two programmers working on the same code",
        "Programming in teams",
        "Mentoring junior developers",
        "Code review process"
      ],
      correctAnswer: 0
    }
  ],
  cyber: [
    {
      id: 1,
      text: "What is the primary goal of cryptography?",
      options: [
        "To prevent hardware failure",
        "To secure communication",
        "To speed up network traffic",
        "To manage user identities"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "Which attack involves sending fraudulent emails?",
      options: [
        "Phishing",
        "DDoS",
        "Man-in-the-middle",
        "SQL Injection"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      text: "What does VPN stand for?",
      options: [
        "Virtual Private Network",
        "Verified Private Network",
        "Virtual Public Network",
        "Verified Public Network"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      text: "Which protocol provides secure communication over internet?",
      options: [
        "HTTP",
        "HTTPS",
        "FTP",
        "SMTP"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      text: "What is two-factor authentication?",
      options: [
        "Using two passwords",
        "Verifying identity with two different methods",
        "Having two security questions",
        "Using two different devices"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      text: "Which of these is a type of malware?",
      options: [
        "Firewall",
        "Encryption",
        "Ransomware",
        "VPN"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      text: "What is the purpose of a firewall?",
      options: [
        "To prevent unauthorized access",
        "To encrypt data",
        "To store backups",
        "To manage passwords"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      text: "Which encryption algorithm is asymmetric?",
      options: [
        "AES",
        "DES",
        "RSA",
        "MD5"
      ],
      correctAnswer: 2
    },
    {
      id: 9,
      text: "What is social engineering?",
      options: [
        "Manipulating people to reveal information",
        "Engineering social media platforms",
        "Designing user interfaces",
        "Developing social networks"
      ],
      correctAnswer: 0
    },
    {
      id: 10,
      text: "Which of these is not a cybersecurity best practice?",
      options: [
        "Regular software updates",
        "Using strong passwords",
        "Sharing passwords with trusted friends",
        "Backing up data regularly"
      ],
      correctAnswer: 2
    },
    {
      id: 11,
      text: "What does DDoS stand for?",
      options: [
        "Distributed Denial of Service",
        "Direct Denial of Service",
        "Digital Denial of Service",
        "Data Denial of Service"
      ],
      correctAnswer: 0
    },
    {
      id: 12,
      text: "Which law protects digital privacy in many countries?",
      options: [
        "GDPR",
        "HTTP",
        "TCP/IP",
        "HTML"
      ],
      correctAnswer: 0
    },
    {
      id: 13,
      text: "What is penetration testing?",
      options: [
        "Testing pen functionality",
        "Authorized simulated cyber attack",
        "Testing network speed",
        "Testing software usability"
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      text: "Which of these is a hashing algorithm?",
      options: [
        "RSA",
        "AES",
        "SHA-256",
        "SSL"
      ],
      correctAnswer: 2
    },
    {
      id: 15,
      text: "What is the purpose of intrusion detection systems?",
      options: [
        "To prevent attacks",
        "To detect suspicious activities",
        "To encrypt data",
        "To manage user access"
      ],
      correctAnswer: 1
    }
  ]
}

export const getQuestionsByDepartment = (department) => {
  const deptMap = {
    'Computer Science': 'cs',
    'Software Engineering': 'se',
    'Cyber Security': 'cyber'
  }
  
  return questions[deptMap[department]] || questions.cs
}

export default questions