import { LockIcon } from "lucide-react";


export type Certificate = {
  id: number;
  title: string;
  instructor: string;
  image: string;
  date: string;
  status?: "verified" | "pending";
};
type Props = {
  certificate: Certificate;
};

const CertificateCard = ({ certificate }: Props) => {
  return (
    <div className="group flex flex-col mb-6 bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all shadow-sm hover:shadow-md ">

      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform"
          style={{ backgroundImage: `url(${certificate.image})` }}
        />

        {/* Status */}
        {certificate.status === "verified" && (
          <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded">
            Verified
          </div>
        )}

        {certificate.status === "pending" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-sm w-32 h-10 border flex items-center justify-center text-black">
              <LockIcon />
              Processing
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold">{certificate.title}</h3>
        <p className="text-sm text-slate-500">{certificate.instructor}</p>

        <div className="mt-auto pt-4">
          <p className="text-xs text-slate-400">
            {certificate.status === "pending"
              ? `Estimated: ${certificate.date}`
              : `Completed: ${certificate.date}`}
          </p>

          <div className="flex gap-2 mt-3">
            {certificate.status !== "pending" ? (
              <>
                <button className="flex-1 bg-[#ec5b13] text-white py-2 rounded">
                  Preview
                </button>
                <button className="flex-1 bg-[#ec5b13]/10 text-primary py-2 rounded">
                  Download
                </button>
              </>
            ) : (
              <button disabled className="w-full bg-gray-300 py-2 rounded">
                Pending
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CertificateCard