import Moment from "react-moment";
export default function DateNow() {
  const dateToFormat = new Date();

  return (
    <div className="flex items-center justify-end">
      <Moment
        format="dddd"
        className="text-[.6rem] md:text-xs text-gray-400 mr-2 lg:mr-5"
      />
      <Moment format=" MMMM D, YYYY" className="text-sm md:text-base" />
    </div>
  );
}
