import "./skills.css"
import { FaCode ,FaServer,FaDatabase,FaInfinity } from 'react-icons/fa';
function Skills() {
  return (
    <div className=' bg-gray-900 h-full w-full '>
        <div className="flex flex-col md:gap-16 p-5">
           <h1 className='font-serif '>I can help you with ...</h1>
            <div className="w-full flex  flex-wrap md:flex-row md:flex-nowrap md:gap-10"> 
            {/* frontend */}
                 <div className="md:w-1/4 sm:1/2 p-4">
                    <FaCode className="icon"/>
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='font-serif text-4xl text-left my-4 md:my-8 text-gray-500'>Frontend </h2>
                    <div className="text-box ">
                           <p>I build scalable websites from scratch that fit seamlessly with design.</p>
                           <p>My expertise lies in creating captivating micro animations, smooth transitions, and engaging interactions that bring websites to life.</p>
                    </div>
                 </div> 
            {/* Backend */}
                 <div className="md:w-1/4 sm:1/2 p-4">
                    <FaServer className="icon"/>
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='font-serif text-4xl text-left my-4 md:my-8 text-gray-500'>Backend </h2>
                    <div className="text-box ">
                           <p>Whether it&apos;s building RESTful services, integrating third-party APIs, or optimizing server response times, my focus remains on delivering a seamless user experience through my backend craftsmanship.</p>
                    </div>
                 </div> 
            {/* Database */}
                 <div className="md:w-1/4 sm:1/2 p-4">
                    <FaDatabase className="icon"/>
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='font-serif text-4xl text-left my-4 md:my-8 text-gray-500'>Database </h2>
                    <div className="text-box ">
                           {/* <p> From structuring database schemas to optimizing queries, I am committed to ensuring seamless data management for web applications.</p> */}
                           <p>I meticulously organize data models to enhance data integrity and facilitate data retrieval, ensuring optimal performance even with large datasets.</p>
                    </div>
                 </div> 
            {/* DevOps */}
                 <div className="md:w-1/4 sm:1/2 p-4">
                    <FaInfinity className="icon"/>
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='font-serif text-4xl text-left my-4 md:my-8 text-gray-500'>DevOps </h2>
                    <div className="text-box ">
                      <p>As a DevOps practitioner, I focus on automating and integrating various stages of the development lifecycle, from continuous integration (CI) to continuous delivery (CD).</p>       
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
