import type { User } from '../types'
const Table = ({
  titles,
  users,
  deleteUser,
  paintedRows,
}: {
  titles: string[]
  users?: User[]
  deleteUser: Function
  paintedRows: Boolean
}) => {
  return (
    <table className='mt-3 table-auto  border-separate w-screen p-10'>
      <thead className=''>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => (
          <tr
            key={index}
            className={
              paintedRows
                ? index % 2 == 0
                  ? 'bg-slate-100/50'
                  : 'bg-slate-400/50'
                : ''
            }
          >
            <td className='flex justify-center'>
              <img
                src={user.picture.thumbnail}
                alt='Avatar'
                className='rounded-full'
              />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button onClick={() => deleteUser(user.email)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
