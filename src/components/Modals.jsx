import { Modal } from 'flowbite-react';
import Buttons from './Buttons';
const Modals = ({
  show,
  onClose,
  size,
  SetOnClose,
  SetShow,
}) => {
    const Header = ({children}) => {
    
        return (
        <div className='flex border-b-2 mb-2 border-gray-400 p-3 justify-between'>
        <div className=" text-2xl">{children}</div>
        <div>
        <button
        className=" hover:text-gray-800"
        onClick={handleOnClose}
      >
        X
      </button>
        </div>
        
      </div>
        );
      }
      Modal.Header = Header;

      const Body =({children}) => {
        return ( 
        <div className=' p-4'>
            {children}
        </div> 
        );
      }
      Modal.Body = Body;

      const Footer =({children}) => {
        return ( 
        <div className=' p-4'>
            {children}
        </div> 
        );
      }
      Modal.Footer = Footer;
      function handleOnClose() {
        
        SetOnClose(true);
        SetShow(false);
      }

  return (
    <>
      {show & !onClose ? (
        <Modal>
        <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center ${size}`}>
        <div className=' relative w-[500px] min-h-[300px] bg-gray-200 rounded-xl'>
    
    <Modal.Header>
    Terms of Service
  </Modal.Header>
  <Modal.Body>
    <div className="space-y-6">
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
          companies around the world are updating their terms of service agreements to comply.
        
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
          ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
          possible of high-risk data breaches that could personally affect them.
        
      </p>
    </div>
  </Modal.Body>
  <Modal.Footer>
  <Buttons size='text-base' color='bg-sky-400' onClickfunc={handleOnClose}>
          Close
    </Buttons>
  </Modal.Footer>
  </div>
  </div>
</Modal>

 ) : null}
    </>
  );
}

export default Modals;
