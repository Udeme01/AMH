// Mock blog data for demonstration
export const BLOG_POSTS = [
  {
    id: 1,
    title: "Mastering Authentic Leadership in the Digital Age",
    excerpt:
      "Discover how to lead with authenticity while navigating modern workplace challenges and digital transformation.",
    category: "Leadership",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    featured: true,
    tags: [
      "leadership",
      "authenticity",
      "digital transformation",
      "workplace culture",
    ],
  },
  {
    id: 2,
    title: "Crisis Leadership: Making Decisions Under Pressure",
    excerpt:
      "Learn essential strategies for leading teams through uncertainty and making critical decisions when stakes are high.",
    category: "Crisis Leadership",
    author: "Michael Chen",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    featured: true,
    tags: ["crisis management", "decision making", "pressure", "leadership"],
  },
  {
    id: 3,
    title: "Effective Communication Strategies for Remote Teams",
    excerpt:
      "Build stronger connections and improve productivity with proven communication techniques for distributed teams.",
    category: "Communication",
    author: "Emma Rodriguez",
    date: "Dec 8, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop",
    featured: false,
    tags: ["communication", "remote work", "team building", "productivity"],
  },
  {
    id: 4,
    title: "The Psychology of High-Performance Teams",
    excerpt:
      "Understand the psychological factors that drive exceptional team performance and how to cultivate them.",
    category: "Psychology",
    author: "Dr. James Wilson",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    featured: false,
    tags: ["psychology", "team performance", "motivation", "leadership"],
  },
  {
    id: 5,
    title: "Mediation Techniques for Workplace Conflicts",
    excerpt:
      "Master the art of conflict resolution with proven mediation strategies that transform workplace disputes.",
    category: "Mediation",
    author: "Lisa Thompson",
    date: "Dec 3, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    featured: false,
    tags: ["mediation", "conflict resolution", "communication", "negotiation"],
  },
  {
    id: 6,
    title: "Building Trust in Virtual Team Environments",
    excerpt:
      "Explore strategies to build and maintain trust among team members who rarely meet face-to-face.",
    category: "Team Building",
    author: "Robert Davis",
    date: "Nov 28, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    featured: false,
    tags: ["trust building", "remote work", "leadership", "team building"],
  },
  {
    id: 7,
    title: "Digital Communication in the Modern Workplace",
    excerpt:
      "Navigate the complexities of digital communication tools and build stronger virtual relationships.",
    category: "Communication",
    author: "Alex Kim",
    date: "Nov 25, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "digital transformation",
      "communication",
      "workplace culture",
      "productivity",
    ],
  },
  {
    id: 8,
    title: "Leading Through Change: A Psychological Approach",
    excerpt:
      "Understand the psychology behind organizational change and how to lead teams through transitions.",
    category: "Psychology",
    author: "Dr. Maria Santos",
    date: "Nov 22, 2024",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    featured: false,
    tags: ["psychology", "change management", "leadership", "motivation"],
  },
  {
    id: 9,
    title: "Conflict Resolution in Remote Teams",
    excerpt:
      "Master the art of resolving conflicts when team members are distributed across different locations.",
    category: "Mediation",
    author: "Jennifer Walsh",
    date: "Nov 20, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    featured: false,
    tags: ["conflict resolution", "remote work", "mediation", "team building"],
  },
  {
    id: 10,
    title: "Building High-Performance Remote Teams",
    excerpt:
      "Create and maintain exceptional team performance in virtual environments with proven strategies.",
    category: "Team Building",
    author: "Marcus Johnson",
    date: "Nov 18, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    featured: false,
    tags: ["team performance", "remote work", "productivity", "leadership"],
  },
  {
    id: 11,
    title: "The Art of Authentic Communication",
    excerpt:
      "Develop genuine communication skills that build trust and foster meaningful workplace relationships.",
    category: "Communication",
    author: "Rachel Green",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "authenticity",
      "communication",
      "trust building",
      "workplace culture",
    ],
  },
  {
    id: 12,
    title: "Crisis Management: Lessons from Fortune 500 Leaders",
    excerpt:
      "Learn from real-world crisis management scenarios and how top leaders navigated through challenges.",
    category: "Crisis Leadership",
    author: "David Park",
    date: "Nov 12, 2024",
    readTime: "13 min read",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "crisis management",
      "leadership",
      "decision making",
      "case studies",
    ],
  },
  {
    id: 13,
    title: "Motivational Psychology in Team Leadership",
    excerpt:
      "Explore psychological principles that drive team motivation and how to apply them as a leader.",
    category: "Psychology",
    author: "Dr. Amanda Foster",
    date: "Nov 10, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    featured: false,
    tags: ["motivation", "psychology", "team performance", "leadership"],
  },
  {
    id: 14,
    title: "Negotiation Skills for Workplace Harmony",
    excerpt:
      "Develop advanced negotiation techniques to create win-win solutions in workplace conflicts.",
    category: "Mediation",
    author: "Carlos Rivera",
    date: "Nov 8, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "negotiation",
      "conflict resolution",
      "communication",
      "workplace culture",
    ],
  },
  {
    id: 15,
    title: "Digital Leadership in the Age of AI",
    excerpt:
      "Navigate leadership challenges in an AI-driven workplace and leverage technology for team success.",
    category: "Leadership",
    author: "Tech Thompson",
    date: "Nov 5, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "digital transformation",
      "leadership",
      "artificial intelligence",
      "innovation",
    ],
  },
  {
    id: 16,
    title: "Team Building Activities That Actually Work",
    excerpt:
      "Discover evidence-based team building strategies that create lasting bonds and improve collaboration.",
    category: "Team Building",
    author: "Sophie Martinez",
    date: "Nov 3, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "team building",
      "collaboration",
      "workplace culture",
      "productivity",
    ],
  },
  {
    id: 17,
    title: "The Science of Decision Making Under Pressure",
    excerpt:
      "Understand the cognitive processes behind high-stakes decision making and improve your judgment skills.",
    category: "Psychology",
    author: "Dr. Kevin Chen",
    date: "Oct 30, 2024",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    featured: false,
    tags: ["decision making", "psychology", "pressure", "cognitive science"],
  },
  {
    id: 18,
    title: "Virtual Mediation: Resolving Conflicts Online",
    excerpt:
      "Master the techniques of conducting effective mediation sessions in virtual environments.",
    category: "Mediation",
    author: "Laura Kim",
    date: "Oct 28, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "mediation",
      "remote work",
      "digital transformation",
      "conflict resolution",
    ],
  },
  {
    id: 19,
    title: "Authentic Leadership in Times of Crisis",
    excerpt:
      "How authentic leaders maintain credibility and guide organizations through unprecedented challenges.",
    category: "Crisis Leadership",
    author: "Ryan Walsh",
    date: "Oct 25, 2024",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    featured: false,
    tags: ["authenticity", "crisis management", "leadership", "credibility"],
  },
  {
    id: 20,
    title: "Cross-Cultural Communication Strategies",
    excerpt:
      "Navigate cultural differences in global teams and build inclusive communication practices.",
    category: "Communication",
    author: "Priya Patel",
    date: "Oct 22, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    featured: false,
    tags: ["communication", "diversity", "global teams", "inclusion"],
  },
  {
    id: 21,
    title: "The Psychology of Trust in Virtual Teams",
    excerpt:
      "Explore the psychological foundations of trust and how to build it in remote work environments.",
    category: "Psychology",
    author: "Dr. Elena Rodriguez",
    date: "Oct 20, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    featured: false,
    tags: ["trust building", "psychology", "remote work", "team dynamics"],
  },
  {
    id: 22,
    title: "Innovation Through Collaborative Leadership",
    excerpt:
      "Foster innovation by creating collaborative environments where creativity and leadership intersect.",
    category: "Leadership",
    author: "Innovation Jones",
    date: "Oct 18, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    featured: false,
    tags: ["innovation", "collaboration", "leadership", "creativity"],
  },
  {
    id: 23,
    title: "Workplace Wellness and Team Performance",
    excerpt:
      "Understand the connection between employee wellness initiatives and high-performing teams.",
    category: "Team Building",
    author: "Wellness Wilson",
    date: "Oct 15, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop",
    featured: false,
    tags: ["wellness", "team performance", "workplace culture", "productivity"],
  },
  {
    id: 24,
    title: "Advanced Conflict Resolution Techniques",
    excerpt:
      "Master sophisticated mediation strategies for complex workplace disputes and organizational conflicts.",
    category: "Mediation",
    author: "Master Mediator",
    date: "Oct 12, 2024",
    readTime: "14 min read",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "conflict resolution",
      "mediation",
      "negotiation",
      "dispute resolution",
    ],
  },
  {
    id: 25,
    title: "Digital Detox: Leading Balanced Teams",
    excerpt:
      "Help your team maintain work-life balance in an always-connected digital workplace environment.",
    category: "Leadership",
    author: "Balance Baker",
    date: "Oct 10, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "work-life balance",
      "digital transformation",
      "wellness",
      "leadership",
    ],
  },
  {
    id: 26,
    title: "Emotional Intelligence in Crisis Situations",
    excerpt:
      "Leverage emotional intelligence to navigate crisis situations and support your team through challenges.",
    category: "Crisis Leadership",
    author: "EQ Expert",
    date: "Oct 8, 2024",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "emotional intelligence",
      "crisis management",
      "leadership",
      "psychology",
    ],
  },
  {
    id: 27,
    title: "Inclusive Communication Practices",
    excerpt:
      "Create inclusive communication environments that welcome diverse perspectives and foster belonging.",
    category: "Communication",
    author: "Inclusive Speaker",
    date: "Oct 5, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    featured: false,
    tags: ["inclusion", "diversity", "communication", "belonging"],
  },
  {
    id: 28,
    title: "Performance Psychology for Leaders",
    excerpt:
      "Apply performance psychology principles to enhance your leadership effectiveness and team outcomes.",
    category: "Psychology",
    author: "Dr. Performance Pro",
    date: "Oct 3, 2024",
    readTime: "13 min read",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "performance psychology",
      "leadership",
      "team performance",
      "excellence",
    ],
  },
  {
    id: 29,
    title: "Sustainable Team Building Strategies",
    excerpt:
      "Build long-lasting team cohesion with sustainable practices that evolve with your organization.",
    category: "Team Building",
    author: "Sustainable Sam",
    date: "Sep 30, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    featured: false,
    tags: [
      "sustainability",
      "team building",
      "long-term strategy",
      "organizational development",
    ],
  },
  {
    id: 30,
    title: "The Future of Workplace Communication",
    excerpt:
      "Explore emerging trends in workplace communication and prepare your team for the future of work.",
    category: "Communication",
    author: "Future Communicator",
    date: "Sep 28, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    featured: false,
    tags: ["future of work", "communication", "innovation", "workplace trends"],
  },
];
