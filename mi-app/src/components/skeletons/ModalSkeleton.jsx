import SkeletonBox from "./SkeletonBox"
export const ModalSkeleton = () => (
  <div>
    <SkeletonBox className="h-125 w-full rounded-t-lg" />
    <div className="p-8 flex flex-col gap-3">
      <SkeletonBox className="h-6 w-1/3" />
      <SkeletonBox className="h-4 w-full" /> 
      <SkeletonBox className="h-4 w-2/3" />
    </div>
  </div>
)