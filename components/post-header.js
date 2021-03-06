import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  );
}
