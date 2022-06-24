import Date from "./Date";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-sm lg:text-3xl dark:text-white font-bold transition duration-300 hidden md:block m-5 lg:m-10 self-start">
        Bo's To Do List 👺
      </h1>
      <div className="dark:text-white transition duration-300 m-5 lg:m-10 ">
        <Date />
      </div>
    </div>
  );
}
