import SkeletonBox from "./SkeletonBox"
export const RowSkeleton = ({ count = 6 }) => (
  <div className="flex gap-2 pl-10 py-5">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonBox key={i} className="w-70 aspect-video rounded-xl shrink-0" />
    ))}
  </div>
)
