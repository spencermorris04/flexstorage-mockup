import { type Config } from "tailwindcss";
import formsPlugin from '@tailwindcss/forms';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        'corinth-image': "url(https://www.flexstorage.com/images/gallery/corinth/corinth-storage-1.jpg)",
        
      }
    },
  },
  plugins: [formsPlugin],
};

export default config;