
interface SkeletonLineType {
    width: string;
    height: string;
}
export default function SkeletonLine() {
  return (
    <div role="status" className="animate-pulse">
      <div className="h-[60px] bg-gray-200 rounded-full w-full mb-4"></div>
      <div className="h-[60px] bg-gray-200 rounded-full w-full mb-4"></div>
      <div className="h-[30px] bg-gray-200 rounded-full w-full mb-4"></div>
      <div className="h-[30px] bg-gray-200 rounded-full w-full mb-4"></div>
      <div className="h-[15px] bg-gray-200 rounded-full w-full mb-4"></div>
      <div className="h-[15px] bg-gray-200 rounded-full w-full mb-4"></div>
      <span className="sr-only">Loading...</span>
  </div>
  );
}
