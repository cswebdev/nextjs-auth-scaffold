const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-b from-sky-500/90 to-blue-800/95">
      {children}
    </div>
  );
};

export default AuthLayout;
