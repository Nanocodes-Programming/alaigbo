'use client';
import { UploadDropzone } from '@/lib/uploadthing';
import '@uploadthing/react/styles.css';
import { X } from 'lucide-react';
import Image from 'next/image';

const FileUpload = ({ onChange, value, endpoint }) => {
  const fileType = value?.split('.').pop();

  if (value && fileType !== 'pdf') {
    return (
      <div className="w-full min-h-[180px] flex items-center justify-center">
        <div className="relative h-20 w-20">
          <Image
            fill
            src={value}
            alt="Upload"
            className="rounded-full object-cover"
          />
          <button
            onClick={() => onChange('')}
            className="absolute top-0 right-0 shadow-sm bg-red-500 text-white p-1 rounded-full"
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      onUploadError={(err) => console.log(err)}
    />
  );
};

export default FileUpload;
