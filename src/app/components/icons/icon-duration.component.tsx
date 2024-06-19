interface Props {
  height: string;
  width: string;
}
export const IconDuration = ({ height, width }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="#bababa"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 2.19995C6.81142 2.19995 2.19995 6.81142 2.19995 12.5C2.19995 18.1885 6.81142 22.8 12.5 22.8C18.1885 22.8 22.8 18.1885 22.8 12.5C22.8002 9.76814 21.7151 7.14814 19.7834 5.21646C17.8518 3.28478 15.2318 2.19969 12.5 2.19995ZM12.5 21.8C7.3637 21.8 3.19995 17.6362 3.19995 12.5C3.19995 7.3637 7.3637 3.19995 12.5 3.19995C17.6362 3.19995 21.8 7.3637 21.8 12.5C21.7944 17.6339 17.6339 21.7944 12.5 21.8ZM13 12H17V13H12V5.99995H13V12Z"
      // fill-opacity="0.5"
    />
  </svg>
);
