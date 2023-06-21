import GameTable from "@/components/Game";
import GameData from "@/components/GameList";

export default function Game(){
    return(
        <div className="my-0 p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
           <GameTable/>
          </div>
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
        <GameData/>
          </div>
      </div>
    )
}