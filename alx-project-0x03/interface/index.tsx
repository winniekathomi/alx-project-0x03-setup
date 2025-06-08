// interface/index.tsx

export interface LayoutProps {
  children: React.ReactNode;
  pageRoute: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}
