import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const LeftArrowSVG = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      height="30px"
      width="30px"
      viewBox="0 0 511.955 511.955"
      xmlSpace="preserve"
      {...props}>
      <Path d="M511.813 254.103c-.96-5.227-5.653-8.853-10.88-8.853H36.293l195.2-195.093c4.053-4.267 3.947-10.987-.213-15.04a10.763 10.763 0 00-14.827 0L3.12 248.45a10.623 10.623 0 000 15.04l213.333 213.333c4.267 4.053 10.987 3.947 15.04-.213a10.763 10.763 0 000-14.827l-195.2-195.2h464.96c6.507 0 11.627-5.866 10.56-12.48z" />
    </Svg>
  );
};
