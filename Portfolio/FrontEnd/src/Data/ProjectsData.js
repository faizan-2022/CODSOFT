export const data = [
    {
        img : "images/1.webp",
        disc : "A simple coding platform where you can learn how to code in different programming languages like js, c++ etc",
        link: "https://coderbs.netlify.app/"
    },
    {
        img : "images/2.webp",
        disc : "This is simple blog website, where you can add, edit, update, delete blogs for your users. It is very easy to use",
        link: "https://bloggerinfo.netlify.app/"
    },
    {
        img : "images/3.webp",
        disc : "A simple quiz app where you give quiz and knows your knowledge of react. It is good for interviews and learning",
        link: "https://quizapppro.netlify.app/"
    },
    {
        img : "images/4.webp",
        disc : "A video library where you can watch your favourite movies, series etc. You also able to add videos to watch later",
        link: "https://fast-streaming.netlify.app/"
    },
];

export const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };