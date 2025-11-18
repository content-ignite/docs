const Image = ({ src, alt = "" }) => {
  const imgParts = src.split(".");
  return (
    <>
      <img
        className="block dark:hidden"
        src={"/assets/images/" + imgParts[0] + "--light." + imgParts[1]}
        alt={alt}
      />
      <img
        className="hidden dark:block"
        src={"/assets/images/" + imgParts[0] + "--dark." + imgParts[1]}
        alt={alt}
      />
    </>
  );
};

export default Image;
