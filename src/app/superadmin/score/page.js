import ScoreTable from "@/components/Score";
import ScoreData from "@/components/ScoreList";

export default function ScoreList(){
    return(
        <div className="my-0 p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            <h1 className="font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-xl mb-5">Top of the day</h1>
          <ScoreTable/>
          </div>
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <ScoreData/>
          </div>
      </div>
    )
}