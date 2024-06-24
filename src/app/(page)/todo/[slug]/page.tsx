import { dummyData } from "~/app/_library/src/dummy-data";
import { Form } from "../_form";
import { Headline } from "~/app/_components/src/headline";

export async function generateStaticParams() {
  // TODO slugを取得
  return dummyData.map((post) => ({
    slug: post.slug,
  }));
}

export default function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // TODO slugに一致するデータを取得
  const data = dummyData.find((data) => data.slug === slug);
  return (
    <div className="mx-auto w-full max-w-xl space-y-8 px-4 py-8">
      <Headline level={2} className="border-b border-border">
        編集
      </Headline>
      <Form data={data} />
    </div>
  );
}
