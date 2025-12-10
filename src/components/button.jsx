// components/Button.jsx
const Button = ({ children, href, onClick, className }) => {
  const baseClasses = 'mt-8 bg-yellow-400 text-black font-bold py-2 px-6 rounded transition';

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
