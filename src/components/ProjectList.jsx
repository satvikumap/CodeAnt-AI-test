import databaseIcon from '../assets/databaseicon.png'

const ProjectList = ({ repo }) => (
 
        <div className="border-t-[1px] py-2 px-6 hover:bg-[#F5F5F5]">
            <div className="flex gap-4 my-1 pb-3 ">
                <p className="font-medium text-[#181D27]   text-xl  ">{repo.name}</p>
                <div className="rounded-xl border-[1px] border-[#B2DDFF] bg-[#EFF8FF] px-[0.5rem] py-[0.2rem]" > <p className="text-[#175CD3] text-sm  ">{repo.visibility}</p></div>
            </div>
            <div className="flex items-center gap-5 ">
            <div className='flex items-center gap-2'>
                <p className='text-base font-normal font-Inter text-[#181D27]  '>{repo.language}</p>
                <div className='bg-[#1570EF] w-2 h-2 rounded-full'></div>

            </div>
                <div className='flex items-center gap-2'>
                <img src={databaseIcon} width={'10.5px'} height={'12px'} loading="laze" alt="bd"/>
                <p className='text-base font-normal font-Inter text-[#181D27]  '>{repo.size}</p>
                </div>
                <p className='text-base font-normal font-Inter text-[#181D27]  '>updated {repo.lastUpdated}</p>
            </div>


        </div>

    
  );
  
  export default ProjectList;
  