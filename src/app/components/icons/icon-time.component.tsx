export const IconTime = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0001 13H16.0001V14H11.0001V7H12.0001V13ZM9.00007 2H15.0001V1H9.00007V2ZM22.6501 5.916L20.4741 8.093C22.9781 12.4196 21.8242 17.9374 17.7964 20.8981C13.7686 23.8588 8.15786 23.3134 4.7757 19.6323C1.39354 15.9513 1.32409 10.3145 4.61451 6.55123C7.90494 2.78795 13.5005 2.10443 17.6001 4.965L19.6491 2.916L22.6501 5.916ZM12.0001 4.2C7.13996 4.2 3.20007 8.13989 3.20007 13C3.20007 17.8601 7.13996 21.8 12.0001 21.8C16.8602 21.8 20.8001 17.8601 20.8001 13C20.7946 8.14218 16.8579 4.20551 12.0001 4.2ZM21.2361 5.916L19.6501 4.33L18.5641 5.416L20.1501 7.002L21.2361 5.916Z"
      fill={fill ? fill : "#bababa"}
    />
  </svg>
);
