const fs = require('fs');
const serviceDataPath = 'c:/Users/ANSH/OneDrive/Desktop/serevion/seravion/lib/serviceData.ts';
const chunk1Path = 'C:/Users/ANSH/.gemini/antigravity-ide/brain/5eaacdbf-672e-4c8c-bab0-5e7dd4b83c11/scratch/servicesData_chunk.txt';
const chunk2Path = 'C:/Users/ANSH/.gemini/antigravity-ide/brain/5eaacdbf-672e-4c8c-bab0-5e7dd4b83c11/scratch/servicesData_chunk_2.txt';

const chunk1 = fs.readFileSync(chunk1Path, 'utf8');
const chunk2 = fs.readFileSync(chunk2Path, 'utf8');

const finalContent = chunk1 + '\n' + chunk2 + `
];

// Helper to find a service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
`;

// we need to combine the top of the original file and the replaced bottom part
let content = fs.readFileSync(serviceDataPath, 'utf8');
const splitIndex = content.indexOf('export const servicesData: ServiceData[] = [');

const topPart = content.substring(0, splitIndex);

fs.writeFileSync(serviceDataPath, topPart + finalContent);
console.log('Fixed successfully');
