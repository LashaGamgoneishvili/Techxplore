import blogImage from "../public/Assets/mac.jpg";

export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: ["Madrid", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      answers: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      id: 3,
      question: "What is the smallest country in the world?",
      answers: ["Monaco", "Maldives", "Vatican City", "San Marino"],
      correctAnswer: "Vatican City",
    },
    {
      id: 4,
      question: "What is the most widely spoken language in the world?",
      answers: ["English", "Mandarin", "Spanish", "Hindi"],
      correctAnswer: "Mandarin",
    },
    {
      id: 5,
      question: "Who is the founder of Microsoft?",
      answers: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
      correctAnswer: "Bill Gates",
    },
  ],
};

export const blogData = [
  {
    blog_id: 1,
    title: "The Future of AI",
    description: "An overview of artificial intelligence advancements.",
    detailed_description:
      "Artificial intelligence (AI) has been rapidly evolving, offering numerous possibilities in various fields such as healthcare, finance, and transportation...",
    comment: [
      {
        user: "John Doe",
        message: "Great insights on AI!",
        time: "Jun 25",
      },
      {
        user: "Jane Smith",
        message: "I believe AI will revolutionize many industries.",
        time: "Jun 25",
      },
    ],
    image: blogImage,
    time: "Jun 25",
    created_at: "2024-07-01T08:00:00Z",
  },
  {
    blog_id: 2,
    title: "Sustainable Energy Solutions",
    description: "Exploring renewable energy sources.",
    detailed_description:
      "As the world faces the challenges of climate change, sustainable energy solutions are becoming increasingly important. Renewable energy sources such as solar, wind, and hydro power are at the forefront...",
    comment: [
      {
        user: "Alice Green",
        message: "Renewable energy is the future!",
        time: "Jun 25",
      },
      {
        user: "Bob Brown",
        message: "We need to invest more in these technologies.",
        time: "Jun 25",
      },
    ],
    image: blogImage,
    time: "Jun 25",
    created_at: "2024-07-02T08:00:00Z",
  },
  {
    blog_id: 3,
    title: "The Rise of Remote Work",
    description: "How remote work is reshaping the modern workplace.",
    detailed_description:
      "The COVID-19 pandemic has accelerated the adoption of remote work, leading to a significant shift in how businesses operate. Remote work offers flexibility and can improve work-life balance...",
    comment: [
      {
        user: "Chris White",
        message: "Remote work has changed my life for the better.",
        time: "Jun 25",
      },
      {
        user: "Dana Black",
        message: "I hope more companies embrace this trend.",
        time: "Jun 25",
      },
    ],
    image: blogImage,
    time: "Jun 25",
    created_at: "2024-07-03T08:00:00Z",
  },
];

export const currUser = [
  {
    user_id: 1,
    name: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    image: "/images/john-doe.jpg",
    created_at: "2024-06-15T08:00:00Z",
  },
];
export const userData = [
  {
    user_id: 1,
    name: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    image: "/images/john-doe.jpg",
    created_at: "2024-06-15T08:00:00Z",
  },
  {
    user_id: 2,
    name: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    image: "/images/jane-smith.jpg",
    created_at: "2024-06-20T09:00:00Z",
  },
  {
    user_id: 3,
    name: "Alice",
    lastname: "Green",
    email: "alice.green@example.com",
    image: "/images/alice-green.jpg",
    created_at: "2024-06-25T10:00:00Z",
  },
  {
    user_id: 4,
    name: "Bob",
    lastname: "Brown",
    email: "bob.brown@example.com",
    image: "/images/bob-brown.jpg",
    created_at: "2024-06-30T11:00:00Z",
  },
  {
    user_id: 5,
    name: "Chris",
    lastname: "White",
    email: "chris.white@example.com",
    image: "/images/chris-white.jpg",
    created_at: "2024-07-01T12:00:00Z",
  },
];
