import {
  ExclamationCircleIcon,
  BanknotesIcon,
  Battery0Icon,
} from "@heroicons/react/24/outline";
import Buttons from "./components/Buttons";
import Alert from "./components/Alert";
import Badges from "./components/Badges";
import Card from "./components/Card";


function App() {
  return (
    <div className='space-y-6 w-full text-center'>
      <h1 className='text-3xl font-bold '>Component Library Tailwind</h1>
      <div className='lg:w-[700px] mx-auto text-center space-x-1'>
        <h2 className=' ml-4'>Buttons pick size color and if its diabled</h2>
        <Buttons size='text-base' color='bg-red-500'>
          I am a button
        </Buttons>
        <Buttons size='text-base' color='bg-blue-500' disabled={true}>
          {" "}
          Disabled button{" "}
        </Buttons>
      </div>
      <div>
        <h2>Alerts</h2>
        <Alert
          color='bg-red-500'
          icon={<ExclamationCircleIcon />}
          onDismiss={false}
        />
        <Alert
          color='bg-blue-500'
          icon={<ExclamationCircleIcon />}
          onDismiss={true}
        />
      </div>
      <div>
        <h2>Badges</h2>
        <div className=' flex justify-center space-x-2 mb-2'>
          <Badges icon={<Battery0Icon />} size='text-xs' color='bg-gray-200'>
            Little badge
          </Badges>
          <Badges icon={<BanknotesIcon />} size='text-sm' color='bg-pink-500'>
            Bigger badge
          </Badges>
        </div>
        <div>
        <h2>Cards</h2>
        <div className=" flex justify-center">
          <Card
          
            imgAlt='Meaningful alt text for an image that is not purely decorative'
            imgSrc='https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80'
            link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
          >
            
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-4'>
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              
            </p>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
