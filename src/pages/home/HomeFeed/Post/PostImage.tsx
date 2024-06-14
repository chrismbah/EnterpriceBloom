const PostImage = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="post-image w-full">
      <img
        src={imgSrc}
        alt=""
        className="w-full h-[420px] object-cover rounded-[32px]"
      />
    </div>
  );
};

export default PostImage;
