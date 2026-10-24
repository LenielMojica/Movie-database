import { useEffect, useState, useContext } from "react"
import { useSearchParams } from "react-router-dom"
import { Play, X, Plus, ThumbsUp, Check, Volume2, VolumeX } from "lucide-react"
import { getDetails } from "../../services/tmdb"
import Button from "../ui/Button"
import IconButton from "../ui/IconButton"
import Badge from "../ui/Badge"
import { MyListContext } from "../myList/MyListContext"
import Teaser from "./Teaser"
import useHover from "../../hooks/useHover"
import { ModalSkeleton } from "../skeletons/ModalSkeleton"

const formatDuration = (details) => {
  if (details?.number_of_seasons) {
    const n = details.number_of_seasons
    return `${n} season${n > 1 ? "s" : ""}`   // plural only if > 1
  }
  if (details?.runtime) {
    const h = Math.floor(details.runtime / 60)
    const m = details.runtime % 60
    return h ? `${h}h ${m}m` : `${m}m`   // under 1h: minutes only
  }
  return ""
}

const DetailModal = ({ id, type }) => {
  const [isHovered, hoverHandlers] = useHover({ onLeave: () => setMute(true) })
  const [searchParams, setSearchParams] = useSearchParams()
  const [details, setDetails] = useState()
  const { toggleItem, myList } = useContext(MyListContext)
  const [mute, setMute] = useState(true)
  const isAdded = myList.some(m => m.id === Number(id))

  const onClose = () => {
    setSearchParams(prev => {
      prev.delete("item")
      prev.delete("type")
      return prev
    })
  }

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setDetails(await getDetails(id, type))
      } catch (e) {
        console.log(e)
      }
    }
    fetchDetail()
    if (!id) return
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "auto" }
  }, [id])

  useEffect(() => {
    if (!id) return
    const handleKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [id])

  if (!id) return null

  return (
    <div
      className="bg-black/50 fixed inset-0 z-50 flex items-center justify-center"
      onClick={() => onClose()}
    >
      <div
        className="rounded-lg animate-[modalIn_0.3s_ease-out] max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-[#181818]"
        onClick={e => e.stopPropagation()}
      >
        {details ? (
          <>
            <div
              className="h-125 flex overflow-hidden bg-cover w-full bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${details?.backdrop_path})` }}
              {...hoverHandlers}
            >
              <div className={`absolute inset-0 z-0 scale-125 pointer-events-none ${isHovered ? "opacity-100" : "opacity-0"}`}>
                <Teaser videoKey={details?.key} mute={mute} />
              </div>
              <div className="bg-linear-to-t z-10 from-[#181818] from-0% via-[#181818] via-25% absolute to-transparent to-75% inset-0"></div>

              <div className="absolute top-4 right-0 z-10">
                <IconButton
                  icon={<X />}
                 
                  style={"cursor-pointer m-3 rounded-full p-2 hover:bg-black/90 bg-[#181818] text-white"}
                  onClick={() => onClose()}
                />
              </div>

              <div className="absolute bottom-25 right-4 z-20">
                <IconButton
                  icon={mute ? <VolumeX /> : <Volume2 />}
                  onClick={() => setMute(prev => !prev)}
                  style={"rounded-full cursor-pointer z-20 transition-colors duration-300 bg-[#b3b3b3]/50 hover:bg-[#b3b3b3]/30 p-2"}
                />
              </div>

              <div className="absolute bottom-0 left-0 z-10 p-8 flex flex-col gap-4">
                <h1 className="text-4xl font-bold">{details?.title ?? details?.name}</h1>
                <div className="flex gap-2">
                  <Button
                    icon={<Play />}
                    text={"Play"}
                    style={"hover:bg-gray/90 transition-colors duration-300 cursor-pointer bg-white font-bold text-black rounded-lg px-6 py-2"}
                  />
                  <IconButton
                    icon={isAdded ? <Check size={20} /> : <Plus size={20} />}
                    tooltip={"Add to my list"}
                    style={`cursor-pointer rounded-full border-2 hover:border-white p-2 transition-all duration-300 active:scale-75 ${
                      isAdded
                        ? "bg-white text-black scale-110 border-white"
                        : "bg-[#181818] text-white border-gray-400 scale-100"
                    }`}
                    onClick={() => toggleItem(details)}
                  />
                  <IconButton
                    icon={<ThumbsUp size={20} />}
                    tooltip={"Like"}
                    style={"cursor-pointer rounded-full border border-gray-400 p-2 hover:bg-white/10 bg-[#181818] text-white"}
                  />
                </div>
              </div>
            </div>

            <div className="p-8 flex gap-8 text-zinc-300">
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center text-sm gap-3">
                  <span className="text-gray">{details?.release_date?.slice(0, 4) ?? details?.first_air_date?.slice(0, 4)}</span>
                  <span className="text-gray">{formatDuration(details)}</span>
                  <Badge text={"HD"} />
                  <Badge text={details?.adult ? "18+" : "13+"} />
                </div>
                <p className="leading-relaxed">{details?.overview}</p>
              </div>

              <div className="w-1/3 flex flex-col gap-3 text-sm">
                <p><span className="text-zinc-400">Cast: {details?.credits?.cast?.slice(0, 4).map(a => a.name).join(", ")}</span></p>
                <p><span className="text-zinc-400 text-wrap">Genres: {details?.genres?.join(", ")}</span></p>
              </div>
            </div>
          </>
        ) : (
          <ModalSkeleton />
        )}
      </div>
    </div>
  )
}

export default DetailModal
