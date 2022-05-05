const TextBox = ({ colorValue, hexValue }) => {
  return (
    <div className="card">
      <h5 className="uppercase font-bold text-slate-400">
        {colorValue ? colorValue : 'please add pick a color'}
      </h5>
      <h5 className="uppercase text-neutral-400">
        {hexValue ? hexValue : null}
      </h5>
    </div>
  )
}

export default TextBox
