import Searchbar from '../components/Searchbar'
function Filters({
  labels,
  paintedRows,
  setPaintedRows,
  refetch,
  setRefetch,
}: {
  labels: string[]
  paintedRows: Boolean
  setPaintedRows: Function
  refetch: Boolean
  setRefetch: Function
}) {
  return (
    <div className='flex gap-3 p-3 items-center'>
      <button
        onClick={() => {
          setPaintedRows(!paintedRows)
        }}
      >
        {labels[0]}
      </button>
      <button>{labels[1]}</button>
      <button
        onClick={() => {
          setRefetch(!refetch)
        }}
      >
        {labels[2]}
      </button>
      <Searchbar placeholder='Filtra por país' />
    </div>
  )
}

export default Filters
