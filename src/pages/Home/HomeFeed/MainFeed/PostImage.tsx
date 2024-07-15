interface PostImageProps {
  imgSrc: string;
  onClick: () => void;
}
const PostImage = ({ imgSrc, onClick }: PostImageProps) => {
  return (
    <div className="post-image w-full">
      <img
        src={imgSrc}
        onClick={onClick}
        alt=""
        className="cursor-pointer w-full h-full max-h-[450px] object-cover rounded-[32px]"
      />
    </div>
  );
};

export default PostImage;
