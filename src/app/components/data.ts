
import { client } from "@/sanity/lib/client";
export const getIntroData = async () => {
  const res = await client.fetch(`*[_type == "intro" ] | order(_createdAt desc){
     intro,
     "cvFile": cvFile.asset->url ,
     projects,
     certifications,
     years,
     about,
     skills,
     cerList,
     education,
     certLinks,
     }`);
  return res;
}
export const getProjectData = async () => {
  const res = await client.fetch(`*[_type == "project" ] | order(_createdAt desc)
    {
    _id,
    title,
    description,
    "image": image.asset->url,
    tag,
    gitUrl,
    previewUrl
  }`);
  return res;
}
