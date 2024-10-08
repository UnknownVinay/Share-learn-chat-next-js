import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsbyTopicSlug } from "@/db/queries/post";

interface TopicShowPageProp {
  params: {
    slug: string;
  };
}

export default async function TopicShowPage({
  params: { slug },
}: TopicShowPageProp) {
  return (
    <div className="grid grid-cols-4 gap-4 p-2">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsbyTopicSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
