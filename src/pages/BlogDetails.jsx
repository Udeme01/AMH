import { useParams, useRouteLoaderData } from "react-router";

const BlogDetails = () => {
  const { blogId } = useParams();
  const blogpost = useRouteLoaderData("blog-detail");
  return <div>{blogId}</div>;
};

export default BlogDetails;
