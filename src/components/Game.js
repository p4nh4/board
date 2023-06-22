export default function GameTable()
{
    return(
        <>
       
            <div class=" mb-10 ">
            {/* <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-600 md:text-lg lg:text-xl dark:text-white">GAME</h1> */}
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Game
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 " src="../assets/img/team-2.jpg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                </div>
                            </th>
                            <td class="px-6 py-4">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">OPEN</button>
                            </td>
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 " src="../assets/img/team-2.jpg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Natasha S.</div>
                                </div>
                            </th>
                            <td class="px-6 py-4">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">OPEN</button>
                            </td>
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 " src="../assets/img/team-2.jpg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Kai Lims</div>
                                </div>
                            </th>
                            <td class="px-6 py-4">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">OPEN</button>
                            </td>
                        </tr>
                    </thead>
                    </table>
                    </div>
        </>
    )
}