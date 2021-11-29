import * as CourseAction from "../Actions/courses";

const initialState = {
  activeId: "1",
  activeCourse: {
    name: "Graphic Design",
    img: "https://www.shawacademy.com/assets/course-cards/recordings/graphic-design.png",
    modules: [
      {
        title: "Module 1",
        started: true,
        desc: "Graphic Design and to the world of Visual Communication. Students will explore the concept of Visual Thinking, Elements & Principles of Design and the basics of Typography. The course also familiarises students with the essential software, Adobe Photoshop, Illustrator and InDesign and builds skills in this area with hands-on lessons.",
        lessons: [
          {
            title: "What is Graphic Design?",
            desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
            vidUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          },
          {
            title: "The Foundation of Good Design",
            desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
            vidUrl: "/udemy.mp4",
          },
        ],
      },
      {
        title: "Module 2",
        started: true,
        desc: "Graphic Design and to the world of Visual Communication. Students will explore the concept of Visual Thinking, Elements & Principles of Design and the basics of Typography. The course also familiarises students with the essential software, Adobe Photoshop, Illustrator and InDesign and builds skills in this area with hands-on lessons.",
        lessons: [
          {
            title: "What is Graphic Design?",
            desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
            vidUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          },
          {
            title: "The Foundation of Good Design",
            desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
            vidUrl: "/udemy.mp4",
          },
        ],
      },
      {
        title: "Module 3",
        started: false,
        desc: "Graphic Design and to the world of Visual Communication. Students will explore the concept of Visual Thinking, Elements & Principles of Design and the basics of Typography. The course also familiarises students with the essential software, Adobe Photoshop, Illustrator and InDesign and builds skills in this area with hands-on lessons.",
        lessons: [
          {
            title: "What is Graphic Design?",
            desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
            vidUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          },
          {
            title: "The Foundation of Good Design",
            desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
            vidUrl: "/udemy.mp4",
          },
        ],
      },
    ],
  },
  activeMod: "1",
  enrolled: [
    {
      id: "1",
      name: "Graphic Design",
      img: "https://www.shawacademy.com/assets/course-cards/recordings/graphic-design.png",
      modules: [
        {
          title: "Module 1",
          started: true,
          desc: "Graphic Design and to the world of Visual Communication. Students will explore the concept of Visual Thinking, Elements & Principles of Design and the basics of Typography. The course also familiarises students with the essential software, Adobe Photoshop, Illustrator and InDesign and builds skills in this area with hands-on lessons.",
          lessons: [
            {
              title: "What is Graphic Design?",
              desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
              vidUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
            },
            {
              title: "The Foundation of Good Design",
              desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
              vidUrl: "/udemy.mp4",
            },
          ],
        },
        {
          title: "Module 2",
          started: true,
          desc: "Graphic Design and to the world of Visual Communication. Students will explore the concept of Visual Thinking, Elements & Principles of Design and the basics of Typography. The course also familiarises students with the essential software, Adobe Photoshop, Illustrator and InDesign and builds skills in this area with hands-on lessons.",
          lessons: [
            {
              title: "What is Graphic Design?",
              desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
              vidUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
            },
            {
              title: "The Foundation of Good Design",
              desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
              vidUrl: "/udemy.mp4",
            },
          ],
        },
        {
          title: "Module 3",
          started: false,
          desc: "Graphic Design and to the world of Visual Communication. Students will explore the concept of Visual Thinking, Elements & Principles of Design and the basics of Typography. The course also familiarises students with the essential software, Adobe Photoshop, Illustrator and InDesign and builds skills in this area with hands-on lessons.",
          lessons: [
            {
              title: "What is Graphic Design?",
              desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
              vidUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
            },
            {
              title: "The Foundation of Good Design",
              desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
              vidUrl: "/udemy.mp4",
            },
          ],
        },
      ],
    },

    {
      id: "2",
      name: "Introduction to Web Development",
      img: "https://www.shawacademy.com/assets/course-cards/mycourse/web-development.png",
      modules: [
        {
          title: "Module 1",
          started: true,
          desc: "Graphic Design and to the world of Visual Communication. Students will explore the concept of Visual Thinking, Elements & Principles of Design and the basics of Typography. The course also familiarises students with the essential software, Adobe Photoshop, Illustrator and InDesign and builds skills in this area with hands-on lessons.",
          lessons: [
            {
              title: "What is Graphic Design?",
              desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
              vidUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
            },
            {
              title: "The Foundation of Good Design",
              desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
              vidUrl: "/udemy.mp4",
            },
          ],
        },
        {
          title: "Module 2",
          started: false,
          desc: "Graphic Design and to the world of Visual Communication. Students will explore the concept of Visual Thinking, Elements & Principles of Design and the basics of Typography. The course also familiarises students with the essential software, Adobe Photoshop, Illustrator and InDesign and builds skills in this area with hands-on lessons.",
          lessons: [
            {
              title: "What is Graphic Design?",
              desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
              vidUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
            },
            {
              title: "The Foundation of Good Design",
              desc: "Kickstart your course with getting an overview of the graphic design space. Get familiar with the idea of concepts, ideas and thoughts, an understanding of visual relationships that can help you communicate a direct and coherent message. Work your way through the holy trinity of graphic design applications - Adobe Photoshop, Illustrator & InDesign.",
              vidUrl: "/udemy.mp4",
            },
          ],
        },
      ],
    },
  ],
};

export const coursesReducer = (state = initialState, action) => {
  if (action.type == CourseAction.CHANGE_ACTIVE_COURSE) {
    const newActive = state.enrolled.filter((course) => course.id == action.payload)[0];
    return { ...state, activeCourse: newActive };
  }
  if (action.type == CourseAction.CHANGE_ACTIVE_MOD) {
    return { ...state, activeMod: action.payload };
  }
  return state;
};
