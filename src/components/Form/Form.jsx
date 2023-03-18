import {useState} from 'react'
import {db} from "../../firebase"
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target

        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        db.collection("contact").add({
            formData: formData
        }).then(() => {
            alert("Message Sent")
        }).catch((err) => {
            alert(err.message)
        })

        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
        <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="" />
        <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            id="" cols="30" rows="10"
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  )
}

export default Form
