import FilledButton from "./FilledButton";

const CourseCard = () => {
  return (
    <div className="w-full max-w-sm p-4 rounded-[18px] shadow-md bg-white overflow-hidden">
      {/* Image and "New" label */}
      <div className="relative">
        <img
          src="/img/coursecard.svg"
          alt="Course"
          className="w-full h-48 object-cover rounded-[18px]"
        />
        <span className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          New
        </span>
      </div>

      {/* Content */}
      <div className="mt-3 space-y-3">
        <h3 className="text-[24px] font-semibold text-[#1A1A1A]">Associate Project Management</h3>

        {/* Rating */}
        <div className="flex items-center text-lg font-medium text-gray-600 gap-2">
          <span>4.0</span>
          <div className="flex text-yellow-500">
            {[...Array(4)].map((_, i) => (
              <img key={i} src="/icons/filledStar.svg" alt="ratings" />
            ))}
            <img src="/icons/star.svg" alt="ratings" />
          </div>
          <span className="ml-1 text-gray-500">(40)</span>
        </div>

        {/* Duration and Hours */}
        <div className="flex items-center font-medium text-lg text-[#1A1A1A] gap-2">
          {/* <Clock3 size={14} className="text-gray-500" /> */}
          <div className="flex"><img src="/icons/duration.svg" alt="duration" className="mr-1" /> 10 weeks</div>
          <div className="mx-1 text-gray-400">•</div>
          <div className="flex"><img src="/icons/clock.svg" alt="duration" className="mr-1" /> 20 Total hours</div>
        </div>

        {/* Price */}
        <div className="text-[28px] text-accent font-semibold">£ 215.00</div>

        {/* Enrol Button */}
        <FilledButton onClickFun={() => { }} text={"Enrol Now"}  classForBtn="w-full" />
      </div>
    </div>
  );
};

export default CourseCard;