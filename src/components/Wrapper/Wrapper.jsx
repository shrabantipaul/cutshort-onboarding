const Wrapper = ({width, children}) => {
  return (
    <div style={{width: width}} className='wrapper'>
        {children}
    </div>
  )
}

export default Wrapper