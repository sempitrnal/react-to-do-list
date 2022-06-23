import Moment from "react-moment";
export default function DateNow() {
  const dateToFormat = new Date();

  return (
    <div className="flex items-center">
      <Moment format="dddd" className="text-xs text-gray-400 mr-5" />
      <Moment format=" MMMM D, YYYY" />
    </div>
  );
}
