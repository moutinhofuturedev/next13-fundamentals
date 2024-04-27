export const SkeletonProfile = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse mt-8">
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <span className="sr-only">Loading profile do github..</span>
    </div>
  )
}
