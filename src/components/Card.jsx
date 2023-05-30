
const Header = ({children})=>{
    <div>
        {children}
    </div>
}
const Card = ({ imgAlt, imgSrc, link, children }) => {
   
  return (
    <div className=' min-h-[400px] max-w-[300px] rounded-2xl bg-gray-200 shadow-md text-left'>
        <Header/>
      <div className=' w-full'>
        <a href={link}>
          <img src={imgSrc} alt={imgAlt} className=' object-cover rounded-t-2xl' />
        </a>
      </div>
      <div className="p-2">
      {children}
      </div>
      
    </div>
  );
};

export default Card ; Header;
