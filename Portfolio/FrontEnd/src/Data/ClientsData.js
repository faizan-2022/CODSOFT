export const clients = [
    {
        name : "John Michel",
        stars : 3,
        disc : `Working with Faizan was an absolute pleasure! Their dedication to our project as a Full Stack Developer was remarkable.`
    },
    {
        name : "Johnson",
        stars : 4,
        disc : `From designing an intuitive user interface to optimizing our server-side infrastructure, Faizan demonstrated expertise in every aspect of web development.`
    },
    {
        name : "Nouman",
        stars : 5,
        disc : `Our project's success is undoubtedly attributed to their technical proficiency and commitment to excellence. We look forward to collaborating with Faizan on future projects!`
    },
    {
        name : "Mubashar",
        stars : 5,
        disc : `Faizan's attention to detail and problem-solving skills were invaluable. We couldn't have asked for a better partner, and we're excited to continue working with them on future endeavors.`
    },
]

export const settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}