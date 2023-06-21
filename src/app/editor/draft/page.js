import GameDataAction from "@/components/GameEdit"
import TopC from "@/components/TopCard"

export default function Draft(){
    return(
        <div className="my-0 p-4 sm:ml-64">
        <div className="my-5 p-8 border-2 border-gray-200 border-dashed rounded-lg">
          <TopC/>
          <TopC/>
        </div>
        <GameDataAction/>
        </div>
    )
}