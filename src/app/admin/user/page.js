import AddForm from "@/components/InsertForm";
import TableData from "@/components/UserList";

export default function UserList(){
    return(

        <div className="my-0 p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            <AddForm/>
          </div>
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            <TableData/>
          </div>
      </div>
    )
}