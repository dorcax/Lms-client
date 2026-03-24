import CertificateCard from "@/component/CertificateCard"
import { Certificates } from "@/constants/data"


const CertificateList = () => {
  return (
    <div className="grid grid-cols-3 gap-6 py-8 ">
       {
        Certificates.map((certificate) =>(
             <CertificateCard certificate={certificate}/>
        ))
       }
    </div>
  )
}

export default CertificateList