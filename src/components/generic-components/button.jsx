// components/Button.jsx
const Button = ({ children, href, onClick, className }) => {
  const baseClasses = 'bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition inline-flex items-center justify-center';

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
