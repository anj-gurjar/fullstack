import { userfind } from '@/app/core/user/user.service'
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
if(req.method='GET'){
 const data=userfind()
 if(data){

    res.status(200).json({ message: 'Hello from Next.js!' })
 }
   
}
  
}