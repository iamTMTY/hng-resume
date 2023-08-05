import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import Modal from 'components/Modal';
import {useState, useEffect} from "react"
type Props = {}

declare global {
  interface Window {
    grecaptcha:any;
  }
}

let grecaptcha = window.grecaptcha;

export default function Contact({}: Props) {

  const [modal, setModal] = useState({open: false, type: ""})
  const [isLoading, setIsLoading] = useState(false)
  const [captchaToken, setCaptchaToken] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(captchaToken) {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      setIsLoading(true)
      const body = {
      service_id: 'service_ma0g8st',
      template_id: 'template_pldy4gh',
      user_id: 'SRViE03-qcgDJ69vI',
      template_params: {
          'from_name': formData.get("name"),
          'from_email': formData.get("email"),
          'message': formData.get("message"),
          'g-recaptcha-response': captchaToken
        }
      };
  
      try {
        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        })
        setModal({open: true, type: ""})
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setError("Error sending message")
        console.log(error);
        
      }
    } else {
      setError("You must verify before sending")
    }
  }

  useEffect(() => {
    try {
      grecaptcha.render("recaptcha", {
        sitekey: '6LcmGn4nAAAAAEE-GKKHmucIFGHAlwTqmviIyfFj',
        callback: function(token: any) {
          setCaptchaToken(token)
        }
      });
    } catch (error) {
      // console.log(error);
      
    }
  }, [])

  return (
    <div className="px-4 sm:px-10 w-full flex flex-col items-center">
      <p className="text-base lg:text-xl mb-10 text-center">You can send me a message below</p>
      <div className="w-full max-w-[1000px]">
        <form className="flex flex-col items-center w-full gap-y-8" onSubmit={handleSubmit}>
          <fieldset className="flex flex-col w-full">
            <label>Name</label>
            <input className="rounded-md p-2 text-black outline-none border-[2px] border-transparent focus:border-accent bg-[#dedfe0] " type="text" name="name" required placeholder="Temitayo" />
          </fieldset>
          <fieldset className="flex flex-col w-full">
            <label>Email</label>
            <input className="rounded-md p-2 text-black outline-none border-[2px] border-transparent focus:border-accent bg-[#dedfe0]" type="email" name="email" required placeholder="johndoe@gmail.com" />
          </fieldset>
          <fieldset className="flex flex-col w-full">
            <label>Message</label>
            <textarea required name="message" className="rounded-md p-2 text-black outline-none border-[2px] border-transparent focus:border-accent bg-[#dedfe0]" rows={6} placeholder="Type your message here" />
          </fieldset>
          <div id="recaptcha" className="g-recaptcha" data-type="image" data-sitekey="6LcmGn4nAAAAAEE-GKKHmucIFGHAlwTqmviIyfFj"></div>
          <button type="submit" disabled={isLoading} className={`bg-secondary disabled:hover:bg-secondary text-black hover:bg-accent transition-all rounded-lg px-10 py-4 w-max mx-auto font-medium ${isLoading ? "italic" : ""}`}>{isLoading ? "Sending message..." : "Send Message"}</button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </div>
      <p className="text-lg lg:text-3xl my-10">OR</p>
      <p className="mb-8">Connect with me online</p>
      <div className="flex flex-wrap gap-8">
        <a href="https://github.com/iamTMTY"><FaGithubSquare size={50} className="fill-white hover:fill-accent transition-all" /></a>
        <a href="https://linkedin.com/in/tmtys"><FaLinkedin size={50} className="fill-white hover:fill-accent transition-all" /></a>
      </div>
      <Modal open={modal.open} handleClose={() => {setModal({open: false, type: ""})}}>
        <div className="bg-white w-[400px] h-[400px] rounded-xl text-black flex flex-col gap-y-4 justify-center items-center">
          <h3 className="text-xl md:text-2xl font-medium">Message sent!</h3>
          <p className="text-sm md:text-base">You'll get a reply from me ASAP</p>
        </div>
      </Modal>
    </div>
  )
}