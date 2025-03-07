interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return <div className={`page-wrapper ${className}`}>{children}</div>;
};

export default PageWrapper;
