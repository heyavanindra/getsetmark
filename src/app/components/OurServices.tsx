import { ThreeDCard } from "./ThreeDCard";


const OurServices = () => {
  return (
    <div className="bg-transparent ">
      {/* Add padding to account for the fixed navbar */}
      <div className="text-center text-4xl md:text-6xl lg:text-8xl h-[150px] py-5 pt-32 pb-16">
        Our Services
      </div>
      <div className="lg:flex justify-around mt-10">
        
          <ThreeDCard
            title="Web & App Development"
            description="We specialize in developing intuitive, cutting-edge websites and mobile applications that not only increase brand visibility, but also provide users with smooth, responsive experiences"
            link="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?"
            refs="/web-dev"
          />
        <ThreeDCard
          title="SEO & SMO Expertise"
          description="With our innovative SEO and SMO techniques, we ensure that your brand appears at the top of search results and receives relevant social engagement. Our data-driven approach increases organic traffic, visibility, and allows you to effectively interact with your target audience."
          link="https://img.freepik.com/free-vector/internet-business-seo-strategy_23-2147494779.jpg"
          refs="/seo"
        />
        <ThreeDCard
          title="Digital Promotions"
          description="We create creative, compelling digital marketing strategies that break through the clutter and connect with your target audience. From creative content to targeted ads, our tactics maximize reach and engagement, ensuring your brand's voice is heard across all digital channels."
          link="https://img.freepik.com/free-vector/hand-drawn-social-media-elements-cloud-shape_23-2147819322.jpg" 
          refs="/"
        />
      </div>
    </div>
  );
};

export default OurServices;
