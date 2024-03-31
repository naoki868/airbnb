import Image from 'next/image'
import { useRouter } from 'next/router'

const Logo = () => {



    return (
        // md:blockは要検証
        
        <Image src="/images/logo.png" alt='logo' width={100} height={100} className='cursor-pointer md:block'/>
    )
}
 
export default Logo