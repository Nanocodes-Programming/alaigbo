import { auth } from '@clerk/nextjs';
import { createUploadthing } from 'uploadthing/next';

const f = createUploadthing();

const handleAuth = () => {
  const { userId } = auth();
  if (!userId) throw new Error('Unauthorized');

  return { userId: userId };
};

export const ourFileRouter = {
  profileImg: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  fileImg: f({ pdf: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
};
