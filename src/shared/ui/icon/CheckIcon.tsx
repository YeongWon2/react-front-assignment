import CheckIconSvg from '@/shared/assets/svg/icon/check-icon.svg?react';

interface ICheckIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

function CheckIcon(props: ICheckIconProps) {
  return <CheckIconSvg {...props} />;
}

export default CheckIcon;
