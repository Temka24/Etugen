import {NextResponse, NextRequest} from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import User from '@/model/User'


export async function POST(req: NextRequest) {
    try{
        await connectToDatabase()
        const {phone, password} = await req.json()
        if(!phone || !password){
            return NextResponse.json({error: 'Fill the field'})
        }
        
        const user = new User({phone, password})
        await user.save();
        return NextResponse.json({user})

        
    }
    catch(error: any){
        console.error('Error in API:', error)
        return NextResponse.json({error: error.message})
    }
}