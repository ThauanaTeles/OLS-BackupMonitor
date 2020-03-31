import React from 'react'; 
import Sidebar from './Sidebar';
//import Charts from './Charts';

const Home = () =>  {

  const items = [
    { name: 'home', label: 'Home' },
    {
      name: 'relatorios',
      label: 'Relatórios',
      items: [
        { name: 'create', label: 'Criar novo' },
        { name: 'gerados', label: 'Gerados' },
      ],
    },
    {
      name: 'backup',
      label: 'Backup',
      items: [{ name: 'gerados-backup', label: 'Gerados' }],
    },
  ]
    
  return (
    <div><h1>Oiii</h1>
      <Sidebar items={items} />
    </div>
  )
}
  
  export default Home;