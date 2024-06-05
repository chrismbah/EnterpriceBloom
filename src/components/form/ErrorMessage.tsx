export const ErrorMessage = ({
  message,
  className,
}: {
  message: string;
  className?: string;
}) => {
  return (
    <p
      className={`${
        !className ? "text-primary-600 " : className
      } text-sm px-4 py-0.5 font-medium`}
    >
      {message}
    </p>
  );
};
