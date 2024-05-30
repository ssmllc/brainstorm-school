import type { Metadata } from "next";
import MediaBanner from "../../components/banner/media-banner.component";
import FAQs from "../../components/text-block/faqs.component";
import SimilarCourses from "../../components/similar-courses/similar-courses.component";
import FeaturedCard from "../../components/card/featured-card.component";
import CardImageDetail from "../../components/card/card-image-detail.component";
import Typography from "@/app/components/text-block/typography.component";

export const metadata: Metadata = {
  title: "Brainstorm Workshops",
  description: "Workshops",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27workshops%27%5D+%7B%0A++workshoptitle%2C%0A++content%2C%0A++future%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++workshopname%2C%0A++++slug%2C%0A++++instructor%2C%0A++++description%5B%5D-%3E%2C%0A++++date%2C%0A++++time%2C%0A++++location%2C%0A++++price%2C%0A++++registration%2C%0A++++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++++workexamples%5B%5D+-%3E%2C%0A++%7D%2C%0A++previous%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++workshopname%2C%0A++++slug%2C%0A++++instructor%2C%0A++++description%5B%5D-%3E%2C%0A++++date%2C%0A++++time%2C%0A++++location%2C%0A++++price%2C%0A++++registration%2C%0A++++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++++workexamples%5B%5D+-%3E%2C%0A++%7D%2C%0A++content%2C%0A++faqs%5B%5D-%3E+%7B%0A++++_id%2C%0A++++question%2C%0A++++answer%0A++%7D%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Workshops() {
  const result = await fetchData();

  console.log("workshops", result[0].faqs);

  return (
    <div>
      <MediaBanner
        header=""
        subHeader=""
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <Typography heading="Brainstorm Connection" />

      <FeaturedCard
        superheading="Upcoming Workshop"
        info="lorem ipsum dolor sit amet"
      />

      <SimilarCourses />

      <SimilarCourses />

      <div style={{ width: "75%", margin: "0 auto" }}>
        <FAQs results={result[0]} />
      </div>
    </div>
  );
}
