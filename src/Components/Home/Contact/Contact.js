
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_8a856c6', 'template_wjgzj3v', e.target, 'user_HMhuHkhIW9U3lf4FWzJlR')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });
      }

    
    return (
        <section id='contact'>
            <div className="contact-form">
                <div className="contact-me">
                    <h1>CONTACT ME</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae tempora perspiciatis consequatur earum quo quisquam accusamus eos cupiditate itaque!</p>
                </div>
                <div className="contact">

                    <form onSubmit={sendEmail}>
                        <div class="mb-3">
                            
                            <input type="text" name='name' class="form-control" placeholder='Your Name' required/>
                            
                        </div>
                        <div class="mb-3">
                            
                            <input type="email" class="form-control" name='email' placeholder='Your Email' required/>
                        </div>
                        <div class="mb-3">
                            
                            <textarea type="text" class="form-control textarea" name='message' placeholder='Message' required/>
                        </div>

                        <button type="submit" class="btn btn-primary">Send MAIL</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;