import ScoreTable from "@/components/Score";
import ScoreData from "@/components/ScoreList";

export default function ScoreList(){
    return(
        <div className="my-0 p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <ScoreTable/>
          </div>
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <ScoreData/>
          </div>
      </div>
    )
}