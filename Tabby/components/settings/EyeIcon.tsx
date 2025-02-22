import React from 'react';
import { Svg, Path } from 'react-native-svg';

type EyeIconProps = {
    width?: number;  // Optional width prop
    height?: number; // Optional height prop
};

const EyeIcon: React.FC<EyeIconProps> = ({width = 55, height = 55}) => {

    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 55 55"
            fill="none">

            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.9054 27.5C47.9054 27.164 47.7175 26.916 47.3417 26.4199C44.8852 23.1774 36.932 13.75 27.5 13.75C18.0681 13.75 10.1148 23.1774 7.6583 26.4199C7.2825 26.916 7.0946 27.164 7.0946 27.5C7.0946 27.836 7.2825 28.084 7.6583 28.5801C10.1148 31.8226 18.0681 41.25 27.5 41.25C36.932 41.25 44.8852 31.8226 47.3417 28.5801L47.3418 28.5801C47.7175 28.084 47.9054 27.836 47.9054 27.5ZM27.5 34.375C31.297 34.375 34.375 31.297 34.375 27.5C34.375 23.703 31.297 20.625 27.5 20.625C23.7031 20.625 20.625 23.703 20.625 27.5C20.625 31.297 23.7031 34.375 27.5 34.375Z"
                fill="#8995A8"
            />
        </Svg>
    );
};

export default EyeIcon;
