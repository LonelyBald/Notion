import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const AddPlusCircleSVG = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="70px"
      height="70px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M12.75 5a.75.75 0 00-1.5 0v6.25H5a.75.75 0 000 1.5h6.25V19a.75.75 0 001.5 0v-6.25H19a.75.75 0 000-1.5h-6.25z"
        fill="white"
        fillRule="evenodd"
      />
    </Svg>
  );
};
