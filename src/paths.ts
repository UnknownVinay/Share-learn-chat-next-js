const paths = {
  homePath() {
    return "/";
  },
  topicShowPath(slug: string) {
    return `/topics/${slug}`;
  },
  postCreatePath(slug: string) {
    return `/topics/${slug}/posts/new`;
  },
  postShowPath(slug: string, postId: string) {
    return `/topics/${slug}/posts/${postId}`;
  },
};

export default paths;
