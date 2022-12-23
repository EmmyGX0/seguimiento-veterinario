const Error = ({children}) => {
  return (
    <div className='bg-red-300 text-red-900 text-center p-2 uppercase font-bold border-2
    border-red-900 mb-3 rounded-md'>
        {children}
   </div>
  )
}

export default Error
