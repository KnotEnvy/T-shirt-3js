import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          "#4B0082",
          "#FFC0CB",
          "#00FFFF",
          "#FFD700",
          "#800000",
          "#008000",
          "#FFA500",
          "#0000FF",
          "#808080",
          "#800080",
          "#FFFF00",
          "#00FF00",
          "#FF0025",
          "#C0C0C0"
        ]}
        
        onChange={(color) => state.color = color.hex}
      />

      

    </div>
  )
}

export default ColorPicker