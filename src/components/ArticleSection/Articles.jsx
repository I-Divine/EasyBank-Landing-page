import confettiThumbnail from "../../assets/images/image-confetti.jpg";
import currencyThumbnail from "../../assets/images/image-currency.jpg";
import planeThumbnail from "../../assets/images/image-plane.jpg";
import restaurantThumbnail from "../../assets/images/image-restaurant.jpg";
const LatestArticles = () => {
  return (
    <>
      <section className="px-10 md:px-20 py-10 bg-light-grayish-blue">
        <h2 className="text-5xl text-dark-blue md:text-left text-center">
          Latest Articles
        </h2>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start my-10">
          <Article
            thumbnail={currencyThumbnail}
            author={"By Claire Robinson"}
            header={"Receive money in any currency with no fees"}
            content={
              "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single"
            }
          />
          <Article
            thumbnail={restaurantThumbnail}
            author={" By Wilson Hutton"}
            header={"Treat yourself without worrying about money"}
            content={
              "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you"
            }
          />
          <Article
            thumbnail={planeThumbnail}
            author={"By Wilson Hutton"}
            header={"Take your Easybank card wherever you go"}
            content={
              "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you"
            }
          />
          <Article
            thumbnail={confettiThumbnail}
            author={"By Claire Robinson"}
            header={"Our invite-only Beta accounts are now live!"}
            content={
              "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site"
            }
          />
        </div>
      </section>
    </>
  );
};
export default LatestArticles;

const Article = ({ thumbnail, author, header, content }) => {
  return (
    <div className="w-full md:max-w-64 bg-white rounded-xl">
      <img
        src={thumbnail}
        className=" aspect-video rounded-t-xl md:h-40"
        alt={header}
      />
      <div className="m-4">
        <h4 className=" text-grayish-blue text-sm my-4">By {author}</h4>
        <h3 className=" text-dark-blue text-xl my-4">{header}</h3>
        <p className=" text-grayish-blue text-lg my-4">{content}</p>
      </div>
    </div>
  );
};
