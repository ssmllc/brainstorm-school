interface Props {
  height: string;
  width: string;
  fill?: string;
}
export const IconCap = ({ height, width, fill }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill ? fill : "#bababa"}
    fillOpacity="0.5"
  >
    <g>
      <path d="M12,15.86a.75.75,0,0,1-.41-.12L.35,8.58a.78.78,0,0,1,0-1.3L11.59.12a.76.76,0,0,1,.82,0L23.65,7.28a.78.78,0,0,1,0,1.3L12.41,15.74A.75.75,0,0,1,12,15.86ZM2.19,7.93,12,14.18l9.81-6.25L12,1.68Z" />
      <path d="M12,22a.75.75,0,0,1-.41-.12L4.44,17.32a.76.76,0,0,1-.35-.65V10.53a.76.76,0,0,1,.76-.76.77.77,0,0,1,.77.76v5.72L12,20.32l6.38-4.07V10.53a.77.77,0,0,1,.77-.76.76.76,0,0,1,.76.76v6.14a.76.76,0,0,1-.35.65l-7.15,4.56A.75.75,0,0,1,12,22Z" />
      <path d="M23.23,14.84a.77.77,0,0,1-.76-.77V7.93a.77.77,0,1,1,1.53,0v6.14A.77.77,0,0,1,23.23,14.84Z" />
    </g>
  </svg>
);
