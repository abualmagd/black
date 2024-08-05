import { useState } from "react";
import { Layout } from "../components/layout";


export function BookCall(){
const [message,setMessage]=useState({
    name:'',
    email:'',
    subject:'',
    content:''  
})
    const send=(e)=>{
        e.preventDefault();
        if(message.email.length>0){
        console.log(message)
        }
    }

    const change=(e,target)=>{
        
        switch (target) {
                case 'name':
                    setMessage({...message,name:e.target.value})             
                    break;
                case 'email':
                    setMessage({...message,email:e.target.value})
                    break;
                case 'subject':
                    setMessage({...message,subject:e.target.value})
                    break;
                case 'content':
                    setMessage({...message,content:e.target.value})
                    break;
            
                default:
                    break;
            }
        
       
        console.log(target);
        console.log(e.target.value);
       
       
    }
    return <Layout>
        <form className=" w-80 flex flex-col mb-20" onSubmit={(e)=>send(e)}>
        <CallInput  label={'name'} placeholder={'your name dear'} index={1}   type={'text'} onChange={change} target={'name'}/>
        <CallInput  label={'email'} placeholder={'your email'} index={2} type={'email'} onChange={change} target={'email'}/>
        <CallInput  label={'Im intersted in'} placeholder={'subject'} index={3} type={'text'} onChange={change} target={'subject'}/>
        <CallInput  label={'message'} placeholder={'your comment'} index={4} type={'text'} onChange={change}  target={'content'}/>
        <div className="h-10"></div>
        <input type="submit" className=" btn btn-sm btn-outline ml-auto bg-primary" value={'Send'}/>
        </form>
          
    </Layout>
}




// eslint-disable-next-line react/prop-types
export function CallInput({label,index,placeholder,type,onChange,target}){
    return <div className="flex flex-col justify-start items-start w-full">
        <label htmlFor={'input'+index} className=" capitalize mt-6">{label} </label>
        <input type={type}  id={'input'+index} onChange={(e)=>onChange(e,target)} className="w-full  mt-2 outline-none border-gray-400 border-b-[1px] bg-transparent placeholder:text-xs placeholder:text-gray-500" placeholder={placeholder} />
    </div>
}