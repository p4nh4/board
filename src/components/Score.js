export default function ScoreTable()
{
    return(
        <>
       
       <div class=" mb-10 ">
                <h1 className="mb-3">SCORE</h1>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Player
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Rank
                            </th>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="../assets/img/team-2.jpg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                </div>
                            </th>
                          
                            <td class="px-6 py-4">
                            <p class="text-base font-semibold">#1</p>
                            </td>
                        </tr>
                    </thead>
                    </table>
                    </div>
        </>
    )
}