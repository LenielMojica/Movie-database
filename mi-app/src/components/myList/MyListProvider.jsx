import { useEffect, useState } from "react";
import { MyListContext } from "./MyListContext";
import { addToMyList, goToMyList, removeFromMyList } from "../../services/auth";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const MyListProvider = ({ children }) => {
  const { isAuth } = useContext(AuthContext)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [myList, setMyList] = useState([])

  const load = async () => {
    try {
      setLoading(true)
      const res = await goToMyList()
      setMyList(res)
    }
    // 401 is handled by the axios interceptor; here we only catch other failures.
    catch (e) {
      setError(true)
    }
    finally {
      setLoading(false)
    }
  }

  // Only load when logged in; [isAuth] re-runs this once isAuth turns true.
  useEffect(() => {
    if (isAuth) load()
  }, [isAuth])

  const toggleItem = async (item) => {
    try {
      const isInMyList = myList.some(m => m.id === item.id)
      if (isInMyList) {
        const newList = await removeFromMyList(item)
        setMyList(newList)
      } else {
        const newList = await addToMyList(item)
        setMyList(newList)
      }
    }
    catch (e) {
      console.error(e)
    }
  }

  return (
    <MyListContext.Provider value={{ myList, error, toggleItem, load, loading }}>
      {children}
    </MyListContext.Provider>
  )
}

export default MyListProvider
