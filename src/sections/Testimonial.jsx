import { clients } from "../exports"
import ClientGrid from '../components/ClientGrid'

function Testimonial() {
  return (
    <section id="testimonials" className="w-full flex flex-col gap-5 h-fit p-7 lg:p-20">
      <p className="text-center text-xl">Testimonials</p>
      <h1 className="text-green-600 font-bold text-5xl lg:text-6xl text-center leading-[68px]">What Clients Say's</h1>
      <p className="text-slate-950 text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora consectetur dolore odit illo similique facilis vero officia ullam tenetur!</p>
      <div className="flex justify-center items-center flex-wrap mt-5 gap-6 w-full">
        {clients.map((client) =>(
          <div key={client.name} className="w-80">
            <ClientGrid {...client}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial