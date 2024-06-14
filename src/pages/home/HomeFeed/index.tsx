import FeaturedExperts from "./FeaturedExperts";
import Post from "./Post";
import userImg from "../../../assets/img/feed/user.png";
import postImg1 from "../../../assets/img/feed/884637f9d2ced867495656b15215f46a.png";
import postImg2 from "../../../assets/img/feed/post.png";
const HomeFeed = () => {
  const dummyData = [
    {
      userImg,
      username: "Leonard Victor",
      handle: "@Lheonard",
      role: "Marketer",
      engagementCount: "10K",
      timePosted: "10 mins",
      title:
        "A Bourbon Hall Of Famer Is Building A New Brand Around A Lost Legend",
      content:
        "These days it takes two things to build a successful whiskey brand from the ground up: exceptional liquid and a compelling story. It seems that the Mary Dowling Whiskey Company has both of those bases covered. Launched as a joint venture in late 2023 by global spirits behemoth Pernod Ricard and Kaveh Zamanian, the co-founder of Rabbit Hole Distillery in which Pernod Ricard acquired a majority stake in 2019, the brand could well become a player in the premium whiskey market.",
      imgSrc: postImg1,
      starCount: 200000,
      commentCount: 10000,
      ratings: [
        { star: 1, count: 9 },
        { star: 2, count: 42 },
        { star: 3, count: 20 },
        { star: 4, count: 18 },
        { star: 5, count: 151 },
      ],
    },
    {
      userImg,
      username: "Michael Angelo",
      handle: "@bigmike",
      role: "SEO Analyst",
      engagementCount: "5K",
      timePosted: "2 mins",
      title: "Why Your Business Should Be 'Marketing First'",
      content:
        "Most organizations understand that marketing is important, but few  adopt a holistic approach to recognize marketing as their top priority.According to the 2018 B2B Marketing Mix report  from Sagefrog, 67 percent of companies surveyed named lead generation  as their top marketing objective. Of course leads are important, but now  that customer experience is in the spotlight, too, marketing  departments must do much more than just enable sales teams to do their  job. see more",
      starCount: 30,
      commentCount: 22,
      ratings: [
        { star: 1, count: 0 },
        { star: 2, count: 7 },
        { star: 3, count: 4 },
        { star: 4, count: 9 },
        { star: 5, count: 10 },
      ],
    },
    {
      userImg,
      username: "Leonard Victor",
      handle: "@Lheonard",
      role: "Marketer",
      engagementCount: "10K",
      timePosted: "10 mins",
      title: "10 Ways Marketing Will Power Fintech Success",
      content:
        "The dynamic landscape of modern marketing has evolved within the realm  of fintech. Marketing is central to a company's mission, success,  profitability, and trajectory. Gone are the days when marketing played a  secondary role to sales functions. Instead, we're witnessing a shift in  the role of marketing. Reports show that fintech success will depend on  an alignment of factors  influenced by a strong marketing team. Marketing is set to amplify  product development, drive sales and build partnerships. It is set to  orchestrate PR initiatives, fortify brand identity, attract top-tier  talent, and nurture customer relationships. Read on to hear examples of  how modern marketing will power fintech.",
      imgSrc: postImg2,
      starCount: 798,
      commentCount: 981,
      ratings: [
        { star: 1, count: 92 },
        { star: 2, count: 420 },
        { star: 3, count: 200 },
        { star: 4, count: 198 },
        { star: 5, count: 1501 },
      ],
    },
    {
      userImg,
      username: "Samantha Doe",
      handle: "@samdoe",
      role: "Content Creator",
      engagementCount: "15K",
      timePosted: "5 mins",
      title: "The Evolution of Digital Content in the Age of AI",
      content:
        "Artificial Intelligence is revolutionizing the way digital content is created and consumed. With AI tools, content creators can now produce high-quality content more efficiently than ever before. This shift not only saves time but also opens up new creative possibilities, allowing creators to experiment with innovative formats and engage audiences in unprecedented ways. In this article, we explore the various AI technologies that are shaping the future of digital content and how creators can leverage these tools to stay ahead of the curve.",
      starCount: 1500,
      commentCount: 300,
      ratings: [
        { star: 1, count: 10 },
        { star: 2, count: 20 },
        { star: 3, count: 50 },
        { star: 4, count: 100 },
        { star: 5, count: 1320 },
      ],
    },
    {
      userImg,
      username: "John Smith",
      handle: "@johnsmith",
      role: "Tech Enthusiast",
      engagementCount: "8K",
      timePosted: "30 mins",
      title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
      content:
        "While blockchain technology is best known as the foundation of cryptocurrencies, its potential extends far beyond digital currencies. From supply chain management to healthcare, blockchain is being implemented in a variety of industries to enhance security, transparency, and efficiency. This article delves into the diverse applications of blockchain technology, showcasing real-world examples of how it is transforming business operations and creating new opportunities across different sectors.",
      starCount: 950,
      commentCount: 150,
      ratings: [
        { star: 1, count: 5 },
        { star: 2, count: 15 },
        { star: 3, count: 30 },
        { star: 4, count: 200 },
        { star: 5, count: 700 },
      ],
    },
  ];
  return (
    <div className="w-full flex flex-col gap-5">
      <FeaturedExperts />
      {dummyData.map((data) => (
        <Post {...data} />
      ))}
    </div>
  );
};

export default HomeFeed;
