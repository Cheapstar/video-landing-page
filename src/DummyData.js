import CourseImg from "./assets/courseImg.png"


export const DUMMY_COURSES = [
    {
        id: 1,
        image: CourseImg,
        title: "Intro to Product Design",
        duration: "6 - 8 Week Course",
        price: 120,
        type: "paid",
        description: "Learn the fundamentals of product design including user research, wireframing, and prototyping.",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 2,
        image: CourseImg,
        title: "Advanced UI Design",
        duration: "6 - 8 Week Course",
        price: 78,
        type: "paid",
        description: "Master advanced UI design techniques and create stunning user interfaces.",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 3,
        image: CourseImg,
        title: "UX Research",
        duration: "6 - 8 Week Course",
        price: 158,
        type: "paid",
        description: "Deep dive into user experience research methods and best practices.",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 4,
        image: CourseImg,
        title: "Intro to Wireframing",
        duration: "6 - 8 Week Course",
        price: 0,
        type: "free",
        description: "Learn the basics of wireframing and create effective low-fidelity prototypes.",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 5,
        image: CourseImg,
        title: "Design Systems",
        duration: "8 - 10 Week Course",
        price: 199,
        type: "paid",
        description: "Create and maintain scalable design systems for enterprise applications.",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 6,
        image: CourseImg,
        title: "Motion Design Basics",
        duration: "4 - 6 Week Course",
        price: 0,
        type: "free",
        description: "Learn the fundamentals of motion design and animation principles.",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 7,
        image: CourseImg,
        title: "Design Psychology",
        duration: "6 - 8 Week Course",
        price: 145,
        type: "paid",
        description: "Understanding human psychology and its application in design.",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 8,
        image: CourseImg,
        title: "Figma Masterclass",
        duration: "8 Week Course",
        price: 89,
        type: "paid",
        description: "Master Figma tools and workflows for professional design projects.",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    }
];
export const WATCHED_LESSONS = [
    {
        id: 1,
        image: CourseImg,
        title: "Intro to Product Design",
        duration: "15",
        watched:"10",
        type: "paid",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 2,
        image: CourseImg,
        title: "Advanced UI Design",
        duration: "20",
        watched:"10",
        type: "paid",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 3,
        image: CourseImg,
        title: "UX Research",
        duration: "10",
        watched:"10",
        type: "paid",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 4,
        image: CourseImg,
        title: "Intro to Wireframing",
        duration: "19",
        watched:"10",
        type: "free",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 5,
        image: CourseImg,
        title: "Design Systems",
        duration: "20",
        watched:"10",
        type: "paid",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 6,
        image: CourseImg,
        title: "Go Go Power Ranger",
        watched:"10",
        duration: "58",
        type: "free",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 7,
        image: CourseImg,
        title: "Design Psychology",
        duration: "60",
        watched:"10",
        type: "paid",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    },
    {
        id: 8,
        image: CourseImg,
        title: "Figma Masterclass",
        duration: "50",
        watched:"10",
        type: "paid",
        tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
    }
];


export const video = {
    id: 1,
    image: "https://www.youtube.com/embed/Ll4S3Osgca8?si=tQ8XpyC9wJznPCih" ,
    title: "Intro to Product Design",
    duration: "6 - 8 Week Course",
    price: 120,
    type: "paid",
    description: "Learn the fundamentals of product design including user research, wireframing, and prototyping.",
    tags: ["UX", "Research", "User Testing", "UI Design", "Collaboration"],
}

export const mentalHealthVideos = [
    {
      id: 1,
      disorder: "Autism Spectrum Disorder (ASD)",
      videos: [
        {
          title: "Understanding Autism Spectrum Disorder",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
          videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
          thumbnail: "/thumbnails/understanding-asd.jpg"
        },
        {
          title: "Early Signs and Diagnosis of Autism",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
          videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
          thumbnail: "/thumbnails/early-signs-autism.jpg"
        },
        {
          title: "Causes and Risk Factors of ASD",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
          videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
          thumbnail: "/thumbnails/asd-causes.jpg"
        },
        {
          title: "Understanding Autism Spectrum Disorder",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
          videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
          thumbnail: "/thumbnails/understanding-asd.jpg"
        },
        {
          title: "Early Signs and Diagnosis of Autism",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
          videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
          thumbnail: "/thumbnails/early-signs-autism.jpg"
        },
        {
          title: "Causes and Risk Factors of ASD",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
          videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
          thumbnail: "/thumbnails/asd-causes.jpg"
        }
      ]
    },
    {
      id: 2,
      disorder: "Bipolar Disorder",
      videos: [
        {
            title: "Understanding Autism Spectrum Disorder",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/understanding-asd.jpg"
          },
          {
            title: "Early Signs and Diagnosis of Autism",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/early-signs-autism.jpg"
          },
          {
            title: "Causes and Risk Factors of ASD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/asd-causes.jpg"
          },
        {
            title: "Understanding Autism Spectrum Disorder",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/understanding-asd.jpg"
          },
          {
            title: "Early Signs and Diagnosis of Autism",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/early-signs-autism.jpg"
          },
          {
            title: "Causes and Risk Factors of ASD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/asd-causes.jpg"
          },
      ]
    },
    {
      id: 3,
      disorder: "Schizophrenia",
      videos: [
        {
            title: "Understanding Autism Spectrum Disorder",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/understanding-asd.jpg"
          },
          {
            title: "Early Signs and Diagnosis of Autism",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/early-signs-autism.jpg"
          },
          {
            title: "Causes and Risk Factors of ASD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/asd-causes.jpg"
          }
      ]
    },
    {
      id: 4,
      disorder: "Anxiety Disorders",
      videos: [
        {
            title: "Understanding Autism Spectrum Disorder",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/understanding-asd.jpg"
          },
          {
            title: "Early Signs and Diagnosis of Autism",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/early-signs-autism.jpg"
          },
          {
            title: "Causes and Risk Factors of ASD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/asd-causes.jpg"
          }
      ]
    },
    {
      id: 5,
      disorder: "Depression",
      videos: [
        {
            title: "Understanding Autism Spectrum Disorder",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/understanding-asd.jpg"
          },
          {
            title: "Early Signs and Diagnosis of Autism",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/early-signs-autism.jpg"
          },
          {
            title: "Causes and Risk Factors of ASD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/asd-causes.jpg"
          }
      ]
    },
    {
      id: 6,
      disorder: "Sleep Disorders",
      videos: [
        {
            title: "Understanding Autism Spectrum Disorder",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/understanding-asd.jpg"
          },
          {
            title: "Early Signs and Diagnosis of Autism",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/early-signs-autism.jpg"
          },
          {
            title: "Causes and Risk Factors of ASD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/asd-causes.jpg"
          }
      ]
    },
    {
      id: 7,
      disorder: "Oppositional Defiant",
      videos: [
        {
            title: "Understanding Autism Spectrum Disorder",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/understanding-asd.jpg"
          },
          {
            title: "Early Signs and Diagnosis of Autism",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/early-signs-autism.jpg"
          },
          {
            title: "Causes and Risk Factors of ASD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedpate velit esse cillum dolore eu fugiat nulla pariatur.",
            videoUrl: "https://www.youtube.com/embed/pGCOCWHtGu8?si=FY-tJ3eUUK58ERpd",
            thumbnail: "/thumbnails/asd-causes.jpg"
          }
      ]
    }
  ];
  

  