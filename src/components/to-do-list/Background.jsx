export default function Background({ children }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white dark:bg-[#151515] transition duration-300">
      {children}
    </div>
  );
}
