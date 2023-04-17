import { Footer, Header1, Hero2, Meta } from "../../components";

import React, { Component } from "react";

export default class Blogs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="blogs">
        <Meta
          title={"Hair Care Blog | Tips and Insights from MAX Hair Clinic"}
          desc={
            "Stay up-to-date with the latest Hair Care tips and trends from MAX Hair Clinic. Our experts share their knowledge to help you achieve your desired hair growth."
          }
        />
        <Header1 />
        <Hero2 title1="Our" title2="Blogs" />
        <div className="flex flex-wrap justify-center my-[8vw] w-[96vw] xl:w-[90vw] 2xl:w-[80vw] mx-auto">
          <BlogCard
            location="/blog/best-hair-transplant-clinic-in-chennai"
            image={clinic}
            title="Best Hair Transplant Clinic in Chennai"
            tags="Hair Care"
            date="March 21, 2023"
          />
          <BlogCard
            location="/blog/how-to-grow-hair-naturally"
            image={blogimg2}
            title="How to grow Hair naturally?"
            tags="Hair Care"
            date="March 21, 2023"
          />
          <BlogCard
            location="/blog/cost-of-hair-transplant-in-india"
            image={blogimg3}
            title="Cost of Hair Transplant in India"
            tags="Hair Care"
            date="March 21, 2023"
          />
          <BlogCard
            location="/blog/can-dandruff-cause-baldness?"
            image={blogimg4}
            title="Can Dandruff cause Baldness?"
            tags="Hair Care"
            date="March 23, 2023"
          />
          <BlogCard
            location="/blog/what-is-the-safest-hair-loss-treatment?"
            image={blogimg5}
            title="What is the safest Hair Loss Treatment?"
            tags="Hair Care"
            date="March 23, 2023"
          />
          <BlogCard
            location="/blog/what-is-ico-cell-sapphire-micro-fue?"
            image={blogimg6}
            title="What is ICE Cell Sapphire Micro FUE?"
            tags="Hair Care"
            date="March 23, 2023"
          />
          <BlogCard
            location="/blog/how-ice-cell-sapphire-micro-fue-works"
            image={blogimg7}
            title="How ICE Cell Sapphire Micro FUE works"
            tags="Hair Care"
            date="March 28, 2023"
          />
          <BlogCard
            location="/blog/hair-transplant-cost-in-hydrabad"
            image={blogimg8}
            title="Hair transplant cost in Hyderabad"
            tags="Hair Care"
            date="March 28, 2023"
          />
          <BlogCard
            location="/blog/can-prp-regrow-hair?"
            image={blogimg9}
            title="Can PRP regrow hair?"
            tags="Hair Care"
            date="March 28, 2023"
          />
          <BlogCard
            location="/blog/what-is-the-best-option-for-cosmetic-hair-replacement"
            image={blogimg10}
            title="What is the Best option for Cosmetic Hair Replacement?"
            tags="Hair Care"
            date="March 28, 2023"
          />
          <BlogCard
            location="/blog/best-hair-transplant-clinic-in-bangalore-and-cost-of-hair-transplant"
            image={blogimg11}
            title="Best Hair Transplant Clinic in Bangalore and Cost of Hair Transplant"
            tags="Hair Care"
            date="March 28, 2023"
          />
          <BlogCard
            location="/blog/best-hair-transplant-clinics-in-india"
            image={blogimg12}
            title="Best Hair transplant Clinics in India"
            tags="Hair Care"
            date="April 01, 2023"
          />
          <BlogCard
            location="/blog/which-is-the-safest-hair-transplant-method-in-india"
            image={blogimg13}
            title="Which is the safest hair transplant method in India"
            tags="Hair Care"
            date="April 01, 2023"
          />
          <BlogCard
            location="/blog/best-hair-transplant-clinic-in-hyderabad"
            image={blogimg14}
            title="Best hair transplant clinic in Hyderabad"
            tags="Hair Care"
            date="April 01, 2023"
          />
          <BlogCard
            location="/blog/best-hair-care-products-to-resolve-hair-loss"
            image={blogimg15}
            title="Best hair care products to resolve hair-loss"
            tags="Hair Care"
            date="April 10, 2023"
          />
        </div>
        <div className="py-[5vh]"></div>
        <Footer />
      </div>
    );
  }
}

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {
  clinic,
  blogimg2,
  blogimg3,
  blogimg4,
  blogimg5,
  blogimg6,
  blogimg7,
  blogimg8,
  blogimg9,
  blogimg10,
  blogimg11,
  blogimg14,
  blogimg13,
  blogimg12,
  blogimg15,
} from "../../assets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationPin } from "@fortawesome/free-solid-svg-icons";

function BlogCard(props: any) {
  return (
    <Card className="w-[350px] mx-auto lg:w-[320px] 2xl:w-[450px] xl:w-[350px] marker:overflow-hidden text-black BlogCard mb-[30px]">
      <Link
        to={props.location}
        className="mb-[30px] flex-[100%] md:flex-[50%] lg:flex-[30%]"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-b-none"
        >
          <img
            src={props.image}
            alt="ui/ux review check"
            className="w-[350px] 2xl:w-[450px] rounded-none hover:scale-125"
          />
        </CardHeader>
        <div className=" w-[320px] lg:w-[280px] xl:w-[320px] 2xl:w-[420px] mx-auto">
          <CardBody className="my-4">
            <Typography variant="h4" color="blue-gray">
              {props.title}
            </Typography>
            {/* <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              {props.caption}
            </Typography> */}
          </CardBody>
          <CardFooter className="flex items-center justify-between pt-[30px]">
            <Typography variant="small" className="mb-0">
              {props.tags}
            </Typography>

            <Typography
              variant="small"
              color="gray"
              className="flex items-center gap-1 mb-0"
            >
              <FontAwesomeIcon icon={faClock} />
              {props.date}
            </Typography>
          </CardFooter>
        </div>
      </Link>
    </Card>
  );
}
