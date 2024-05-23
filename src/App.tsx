import './App.css'
import { useEffect, useState } from 'react'
import { User } from './types'
import Filters from './components/Filters'
import Table from './components/Table'
import api from './lib/api/Randomusers'
type UserArray = User[]
function App() {
  const [users, setUsers] = useState<UserArray>()
  const [paintedRows, setPaintedRows] = useState(false)
  const [refetch, setRefetch] = useState(false)
  useEffect(() => {
    async function fetchData() {
      try {
        await api
          .getUsers('seed=alvaro&results=100')
          .then((res) => setUsers(res.data.results))
      } catch (error) {
        return error
      }
    }
    fetchData()
  }, [refetch])
  const handleDelete = (email: string) => {
    const filteredUsers = users?.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <h1>Prueba técnica</h1>
      <Filters
        labels={['Colorear filas', 'Ordenar por país', 'Resetear estado']}
        paintedRows={paintedRows}
        setPaintedRows={setPaintedRows}
        refetch={refetch}
        setRefetch={setRefetch}
      />
      <Table
        users={users}
        titles={['Foto', 'Nombre', 'Apellido', 'País', 'Acciones']}
        deleteUser={handleDelete}
        paintedRows={paintedRows}
      />
    </div>
  )
}

export default App
