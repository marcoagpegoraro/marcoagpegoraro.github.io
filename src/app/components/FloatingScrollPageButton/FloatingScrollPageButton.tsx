import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import './FloatingScrollPageButton.css'
import useDetectScroll from "@smakss/react-scroll-direction";

export default function FloatingScrollPageButton() {

  const scrollDir = useDetectScroll({});

  const [hiddenButtonClass, setHiddenButtonClass] = useState('hidden');

  useEffect(() => {
    setHiddenButtonClass('hidden')
  }, [scrollDir])

  return <>
    {scrollDir}
    <div className={hiddenButtonClass}>
      <Button
        style={{ position: 'fixed', zIndex: '999', bottom: '40px', right: '40px' }}
        onClick={() => {
          setHiddenButtonClass('hidden')
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }}
      >
        Clique aqui para descer a página
      </Button>
    </div>
  </>
}