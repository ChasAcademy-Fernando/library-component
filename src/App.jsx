import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import Buttons from './components/Buttons'
import Alert from './components/Alert'

function App() {
  

  return (
    <div className='space-y-6 w-full text-center'>
      <h1 className="text-3xl font-bold ">
        Component Library Tailwind
    </h1>
    <div className='lg:w-[700px] mx-auto text-center space-x-1'>
    <h2 className=' ml-4'>Buttons pick size color and if its diabled</h2>
    <Buttons size='text-base' color='bg-red-500'/>
    <Buttons size='text-base' color='bg-blue-500' disabled={true}/>
    </div>
    <div>
      <h2>Alerts</h2>
      <Alert color='bg-red-500' icon={<ExclamationCircleIcon/>} onDismiss={false}/>
      <Alert color='bg-blue-500' icon={<ExclamationCircleIcon/>}onDismiss={true}/>
    </div>
    </div>
  )
}

export default App
