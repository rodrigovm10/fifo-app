import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://vxbgkdvmuqntdcyqipik.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4YmdrZHZtdXFudGRjeXFpcGlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0OTI1NDIsImV4cCI6MjA1MzA2ODU0Mn0.QMQUAdYs1W38bENP6rQwTUgK39HFBXFFucfEtK9be9o'
)

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries()
  }, [])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()
    setCountries(data)
  }

  return (
    <ul>
      {countries.map(country => (
        <li key={country?.name}>{country?.name}</li>
      ))}
    </ul>
  )
}

export default App
