import React from 'react'


const postData = () => {
    axios({
        method: "POST", 
        url:"http://localhost:3000/send", 
        data: {
      name: req.body.message,
      email: this.state.email,
      messageHtml: messageHtml
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Email sent, awesome!"); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Oops, something went wrong. Try again")
        }
    })
}

export default ({ close }) => (
    
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <form method="POST" onSubmit={e => this.formSubmit(e)}>
      <div className="header"> Send CV to your Mail </div>
      <div className="content">
        <input
          onChange={e => this.setState({ message: e.target.value })}
          type="text"
          placeholder="Your Name"
          name="message"
        />

        <input
          onChange={e => this.setState({ email: e.target.value })}
          type="password"
          placeholder="Your Email"
          name="email"
          required
        />

        <button type="button" class="cancelbtn">
          Send
        </button>
      </div>
    </form>
  </div>
)
