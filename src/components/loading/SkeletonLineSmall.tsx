
export default function SkeletonLineSmall() {
  return (
    <div role="status" className="w-9xl animate-pulse">
      <div className="h-[200px] bg-gray-200 rounded-[16px] dark:bg-gray-700 w-full mb-4"></div>
      <span className="sr-only">Loading...</span>
  </div>
  );
}
