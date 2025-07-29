import Image from "next/image"
import Link from "next/link"

export default function Footer() {

    const socialMedias = [
        {
            href: "http://linkedin.com/in/oyekola-abdulqobid-bolaji-999490271",
            src: "/assets/socials/linknd.png",
            alt: "Linkend" 
        }, 
        {
            href: "https://github.com/Oyetech3",
            src: "/assets/socials/github.png",
            alt: "Github"
        },
        {
            href: "https://x.com/oyekolaabdulqo1?s=21",
            src: "/assets/socials/twitter.png",
            alt: "twitter"
        }
    ]

    return (
      <footer className=" w-full py-6 text-center text-gray-400 text-sm border-t border-[#222241] mt-28">
        <div className="flex items-center justify-center gap-4 my-8">
            {
                socialMedias.map((socials) => (  
                    <Link className="flex items-center justify-center w-8 bg-white rounded" key={socials.href} href={socials.href}>
                        <Image className="w-8 h-8" src={socials.src} alt={socials.alt} width={200} height={200} />
                    </Link>   
                ))
            }
        </div>
        
        <p className="px-5">&copy; {new Date().getFullYear()} OYETECH | Abdulqobid Oyekola. All rights reserved.</p>
      </footer>
    )
  }
  