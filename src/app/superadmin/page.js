import GameTable from "@/components/Game";
import ScoreTable from "@/components/Score";
import TableData from "@/components/UserList";



export default function SuperAdmin() {
   return (

      <div className="my-0 p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            <TableData/>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 mb-2">
            <GameTable/>
            <ScoreTable/>
          </div>
      
      </div>

   )
}