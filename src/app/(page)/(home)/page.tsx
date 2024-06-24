import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Headline } from "../../_components/src/headline";
import { Form } from "./_form";

export const runtime = "edge";
async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className="flex  min-h-[calc(100svh-7rem-1.5625rem)] w-full flex-col items-center justify-center gap-8 px-4 md:min-h-[calc(100svh-4rem-1.5625rem)]">
      <Headline level={2}>ログイン</Headline>

      {/* form */}
      <Form />
    </div>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest();

  return <></>;
}
