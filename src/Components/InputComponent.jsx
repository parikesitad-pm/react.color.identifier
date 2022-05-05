import colorNames from 'colornames'

const Input = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <div className="card">
      <div className=" flex items-center border-b border-teal-500 py-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="required:appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            autoFocus
            type="text"
            placeholder="Add Color Name"
            value={colorValue}
            onChange={(e) => {
              setColorValue(e.target.value)
              setHexValue(colorNames(e.target.value))
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default Input
