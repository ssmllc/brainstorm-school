export async function generateStaticParams() {
  const query = encodeURI(
    'https://y8rjsgga.api.sanity.io/v2024-04-09/data/query/production?query=*[_type=="courses"] {title, slug, start, instructor, mainImage {asset -> {url}}, courses[] -> {title, description}, body[0] { children[0] {text}}}'
  );
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result.map(({ slug }: { slug: { current: string } }) => {
    return {
      courseId: slug.current,
    };
  });
}

const fetchData = async () => {
  const query = encodeURI(
    'https://y8rjsgga.api.sanity.io/v2024-04-09/data/query/production?query=*[_type=="courses"] {title, slug, start, instructor, mainImage {asset -> {url}}, courses[] -> {title, description}, body[0] { children[0] {text}}}'
  );
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Page({
  params,
}: {
  params: { courseId: string };
}) {
  const result = await fetchData();
  console.log("data", result[0].slug);
  return <div>Hello I am dynamic {params.courseId}</div>;
}
