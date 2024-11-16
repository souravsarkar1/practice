import logo from "../../../assets/landingpage/logo.svg"
import { Facebook, Instagram, LinkedinIcon, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <div className="py-8">
            <div className="max-w-10xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <img src={logo} alt='logo' className="h-12" />
                    </div>
                    <div>
                        <p className="text-[#224859] text-sm md:text-base text-center">
                            ©2024 Fleishman and Associates. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Facebook color="#224859" size={15} className="w-6 h-6 text-white hover:text-[#FF8450] cursor-pointer transition-colors" />
                        <LinkedinIcon color="#224859" size={15} className="w-6 h-6 text-white hover:text-[#FF8450] cursor-pointer transition-colors" />
                        <Youtube color="#224859" size={15} className="w-6 h-6 text-white hover:text-[#FF8450] cursor-pointer transition-colors" />
                        <Instagram color="#224859" size={15} className="w-6 h-6 text-white hover:text-[#FF8450] cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
