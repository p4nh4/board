import GameTable from "@/components/Game";
import GameDataAction from "@/components/GameEdit";
import ScoreTable from "@/components/Score";
import TopC from "@/components/TopCard";
import TableData from "@/components/UserList";



export default function Editor() {
   return (

      <div className="my-0 p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            <TopC/>
          </div>
          <div className="mt-10">
            <GameDataAction/>
           
          </div>
      
      </div>

   )
}