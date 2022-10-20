export interface CircleUserImageProps {
  src: string;
  variant: string;
}

export interface ButtonIconProps {
  children: React.ReactNode;
  onClick: () => void;
  variant: string;
}

export interface ItemInfoProps {
  icon: React.ReactNode;
  variant?: string;
  title?: string;
  onClick: () => void;
  notification?: string;
  active?: boolean;
}

export interface CollapseMenuProps {
  children: React.ReactNode;
  title?: string;
}

export interface ItemTitleProps {
  title: string;
  children: React.ReactNode;
}
