import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-slate-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal | Copyright: &copy; {new Date().getFullYear()}
                    </p>
                    <div className='flex gap-6 mt-5'>
                        <LinkedinLogo 
                            size={48} 
                            weight='bold' 
                            className="transition-all duration-300 transform hover:scale-110 hover:text-blue-500" 
                        />
                        <InstagramLogo 
                            size={48} 
                            weight='bold' 
                            className="transition-all duration-300 transform hover:scale-110 hover:text-pink-500" 
                        />
                        <FacebookLogo 
                            size={48} 
                            weight='bold' 
                            className="transition-all duration-300 transform hover:scale-110 hover:text-blue-700" 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
