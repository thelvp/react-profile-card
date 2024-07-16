export const Avatar = ({ filepath, alt }) => {
  return (
    <img
      className='avatar'
      src={filepath}
      alt={alt}
    ></img>
  );
};
