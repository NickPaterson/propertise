interface props {
    height: number;
    width: number;
    color: string;
    fill: string;
}
export const FloorPlanIcon = ({ height, width, color, fill }: props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
    >
        <path
        fill={color}
        d="M.5 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 8 9a.5.5 0 0 0 .5-.5v-1A.5.5 0 0 0 8 7H6a.5.5 0 0 0-.5.5v1A.5.5 0 0 0 6 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h2.819a.5.5 0 0 1 .32.116l2.04 1.7a.5.5 0 0 0 .821-.384V3.23a.5.5 0 0 0-.175-.38L5.942.81a.46.46 0 0 1-.16-.35.46.46 0 0 0-.46-.46H.5Z"
        />
    </svg>
);
