import { Headline } from "~/app/_components/src/headline";
import { Form } from "../_form";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-8 px-4 py-8">
      <Headline level={2} className="border-b border-border">
        新規作成
      </Headline>
      <Form />
    </div>
  );
}
