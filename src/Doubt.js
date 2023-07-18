import {useState} from "react";
import emailjs from "@emailjs/browser";

function Doubt()
{
	const[name,setName]=useState("");
	const[phone,setPhone]=useState("");
	const[doubt,setDoubt]=useState("");


	const hName=(event)=>{setName(event.target.value);}
	const hPhone=(event)=>{setPhone(event.target.value);}
	const hDoubt=(event)=>{setDoubt(event.target.value);}


	const save = (event) =>{
		
		event.preventDefault();
		let data={"name":name,"phone":phone,"doubt":doubt};
		emailjs.send("service_1234","template_c9v8yat",data,"4M9kPto3Lkb-c0W4u")
		.then(res=>{
			alert("we will get back to you")
			setName("");
			setPhone("");
			setDoubt("");
		})
		.catch(err => alert("issue "+err));
	}


	return(
		<>
			<center>
				<h1>Doubt solving app</h1>	
				<form onSubmit={save}>
					<input type="text" placeholder="enter ur name" onChange={hName} value={name}/>
					<br/><br/>
					<input type="number" placeholder="enter ur phone" onChange={hPhone} value={phone}/>
					<br/><br/>
					<textarea placeholder="enter ur doubt" rows={5} cols={30} onChange={hDoubt} value={doubt}/>
					<br/><br/>
					<input type="submit"/>
				</form>
			</center>
		</>
	
	);
}

export default Doubt;		