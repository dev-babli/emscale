import Image from "next/image";
import { X } from "lucide-react";

const platforms = [
  {
    name: "AWS",
    href: "https://console.flotorch.cloud/auth/signup?provider=flotorch",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/svgs/689cc31e7b37581c4de7dd12_icons8-aws-logo-13.svg?",
    width: 80,
    height: 48,
  },
  {
    name: "Azure",
    href: "https://console-azure.flotorch.cloud/auth/signup?provider=flotorch",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/svgs/689cc4525a0a7a0a63a88fdb_Group-14.svg?",
    width: 96,
    height: 27,
  },
  {
    name: "GCP",
    href: "https://console-gcp.flotorch.cloud/auth/signup?provider=flotorch",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/68c9177904c34d3a5af8784f_gcp-10.webp?",
    width: 110,
    height: 24,
  },
  {
    name: "Salesforce",
    href: "https://salesforce.flotorch.cloud/auth/signup?provider=flotorch",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/67f799703c0d759e85ae62ef_salesforce-6.png?",
    width: 106,
    height: 74,
  },
  {
    name: "Databricks",
    href: "https://databricks.flotorch.cloud/auth/signup?provider=flotorch",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/67f79970f47f978c9957b2c7_databricskl-7.png?",
    width: 157,
    height: 30,
  },
];

export default function CloudPlatformSelection() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Images/cloud.jpg')" }}
    >
      <div className="container">
        <div className="relative p-8 md:p-12 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Choose your cloud platform
            </h2>
            <p className="text-gray-200 mb-8 max-w-lg">
              Select your preferred cloud platform to begin the setup process
            </p>
            <div className="grid grid-cols-5 gap-4 w-full max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 h-24 bg-white/0 border border-border rounded-xl transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={platform.width}
                    height={platform.height}
                    className="h-auto w-auto max-h-full max-w-full"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
