export default interface LayoutProps {
  title: string;
  children: React.ReactNode;
  onChange?: () => void;
}
