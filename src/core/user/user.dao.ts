import  {userTable}  from './user.schema'
import {db} from '../../lib/database/db'

export const userFindAll=async()=>{
    db.select().from(userTable)
}