import { useParams, useRouteLoaderData } from "react-router";

const BlogDetails = () => {
  const params = useParams();
  // const blogpost = useRouteLoaderData("blog-detail");
  return (
    <>
      <div>{params.blogId}</div>
      <p>blog detail page</p>
    </>
  );
};

export default BlogDetails;
