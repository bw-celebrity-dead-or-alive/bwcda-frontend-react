import { setState } from "react";

const setAniToggle = () => {

  const [ani, setAni] = setState()

  setState(() => {
    if (ani === true)
      document.querySelector('celeb-card').classList.add('celeb-card-ani')
    else
      document.querySelector('celeb-card').classList.remove('celeb-card-ani')
  }, [ani])
  return [ani, setAni]
}

export default setAniToggle
