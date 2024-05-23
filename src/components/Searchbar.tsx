const Searchbar = ({ placeholder }: { placeholder: string }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  return (
    <form>
      <input
        type='text'
        placeholder={placeholder}
        className='placeholder:text-sm placeholder:p-1'
        onChange={handleChange}
      />
    </form>
  )
}

export default Searchbar
