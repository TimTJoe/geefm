import {PauseCircle, PlayCircle } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useState } from "react"

const PlayButton = () => {
    const [ play, setPlay ] = useState<boolean>(false)
    const handlePlay = () => {
        setPlay(!play)
    }
    return (
        <IconButton  onClick={handlePlay}>
            {play ? <PlayCircle /> : <PauseCircle />}
        </IconButton>
    )
}

export default PlayButton