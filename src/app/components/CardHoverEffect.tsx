

import { HoverEffect } from "@/app/components/ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Innovative Digital Solutions",
    description:
      "We combine cutting-edge technology with tried-and-true marketing techniques to help businesses thrive in the current digital environment. We offer solutions that future-proof your company while improving operational effectiveness and consumer engagement by staying ahead of digital trends.",
    
  },
  {
    title: "Technology-Driven Growth",
    description:
      "To seize fresh chances for expansion, we employ cutting-edge technologies like artificial intelligence, machine learning, and data analytics",
   
  },
  {
    title: "Results-Focused Approach",
    description:
      "We put a strong emphasis on measurable outcomes and long-term, sustainable success while designing our solutions to optimize return on investment.",
    
  },
  {
    title: "Client-Centric Approach",
    description:
      "We customized our services to your company's particular objectives, problems, and demands. Personalized, high-impact tactics are what we develop partnerships for, not simply services, to ensure your brand grows.",
    
  },
  {
    title: "Collaborative Partnerships",
    description:
      " From strategy to execution, we always collaborate with our clients to make sure they are part of the process.",
   
  },
  {
    title: "Persistent Optimization",
    description:
      "We constantly assess and improve our tactics to adjust to shifting market dynamics and company objectives.",
    
  },{
    title:"Adaptive and Agile",
    description:"Being a startup, we're flexible, adaptable, and forward-thinking. We take extreme pride in our ability to quickly change course and modify our tactics in response to new developments in the market, our clients' changing needs, and new technologies."
  },
  {
    title:"Real-Time Adaptation",
    description:"We make sure your company never loses its competitive edge by promptly adapting to changes in the industry."
  },
  {
    title:"Scalable Solutions",
    description:"Our services are made to develop alongside your company, using scalable tactics that change as it does."
  }
];
