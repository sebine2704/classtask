import { useState ,useEffect} from 'react'
import axios from "axios"

const TableNumber = () => {
const [box,setBox]=useState([])
const [companyNameInp,setcompanyName]=useState("")
const [countryInp,setCountry]=useState("")
const [cityInp,setCity]=useState("")
const [phoneInp,setPhone]=useState("")
const [supplierValue,setsupplierId]=useState("")


const GetAllData=async()=>{
const res=await axios.get("https://northwind.vercel.app/api/suppliers")
setBox(res?.data)
console.log(res?.data);
}
const DeleteBox=async(id)=>{
await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
GetAllData()
}
const AddBox=async(e)=>{
  e.preventDefault()
await axios.post("https://northwind.vercel.app/api/suppliers",{
  supplierId:supplierValue,
  companyName:companyNameInp, 
  address:{
    country:countryInp,
    city:cityInp,
    phone:phoneInp
  }
})
GetAllData()
}
const EditBox=(companyName,country,city,phone,id)=>{
  setcompanyName(companyName)
  setCountry(country)
  setCity(city)
  setPhone(phone)
  setsupplierId(id)
}
const HandleUpdate=async()=>{
await axios.put(`https://northwind.vercel.app/api/suppliers/${supplierValue}`,{
  supplierId:supplierValue,
  companyName:companyNameInp,
  address:{
    country:countryInp,
    city:cityInp,
    phone:phoneInp
  }
})
GetAllData()
}
const RemoveInp=()=>{
  setcompanyName("")
  setCountry("")
  setCity("")
  setPhone("")
}

useEffect(()=>{
  GetAllData()
},[])
  return (
    <div>
     <form action="" onSubmit={AddBox}>
     <input type="text" name='companyNameInp' value={companyNameInp} onChange={(e)=>setcompanyName(e.target.value)} placeholder='Company Name'/>
     <input type="text" name='countryInp' value={countryInp} onChange={(e)=>setCountry(e.target.value)} placeholder='Country'/>
     <input type="text" name='cityInp' value={cityInp} onChange={(e)=>setCity(e.target.value)} placeholder='City'/>
     <input type="text" name='phoneInp' value={phoneInp} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone'/>
    <div className='Buttons'>
    <button type='submit' className='AddBtn'>add</button>
     <button onClick={RemoveInp}>Remove</button>
    </div>
    </form>
    <div className="AllBox">
    {
      box
      .sort((a,b)=>a.id-b.id)
      .map((item)=>{
     return <div className="Box-size" key={item.id}>
      <div className='TextBox'>
      <p>Company Name: {item?.companyName}</p>
      <p>Country: {item?.address?.country}</p>
     <p>City: {item?.address?.city}</p>
     <p>Phone: {item?.address?.phone}</p>
     </div>
     <button className='EditBtn'onClick={()=>EditBox(item.companyName,item.address.country,item.address.city,item.address.phone)}>Edit</button>
     <button onClick={()=>DeleteBox(item.id)}>Delete</button>
     <button className='UpdateBtn' onClick={HandleUpdate}>Update</button>
     </div>
      })
    }
    </div>
    </div>
  )
}

export default TableNumber
