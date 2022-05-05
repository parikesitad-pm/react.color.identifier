import { Box, Input, TextBox } from './Components'

import { useState } from 'react'

const App = () => {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')

  return (
    <div className="h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex flex-content-center justify-center align-item-center text-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="card mt-10">
            <h1 className="text-lg font-bold text-teal-500">
              React Color Identifier
            </h1>
          </div>
          <Box colorValue={colorValue} />
          <TextBox colorValue={colorValue} hexValue={hexValue} />
          <Input
            colorValue={colorValue}
            setColorValue={setColorValue}
            setHexValue={setHexValue}
          />
        </div>
      </div>
    </div>
  )
}

App.defaultPorps = {
  colorValue: 'Empty Color Value',
}

export default App
