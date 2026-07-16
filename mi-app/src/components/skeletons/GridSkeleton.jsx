
const GridSkeleton = ({ count }) => {
  return (
    <div className="grid p-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="aspect-video rounded-xl bg-zinc-800 animate-pulse"
        />
      ))}
    </div>
  )
}

export default GridSkeleton