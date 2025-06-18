import "./App.css";
import { FcFolder } from "react-icons/fc";
import { FaFile } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

type Folder = {
  name: string;
  children?: Folder[];
};
function App() {
  let folders: Folder[] = [
    {
      name: "Home",
      // 1
      children: [
        {
          // 1.1
          name: "Movies",
          // 1.1.1
          children: [
            {
              name: "Comedy",
              children: [
                {
                  name: "Neplai",
                  children: [
                    { name: "Chakka Panja.mp4" },
                    { name: "kabbadi 3.mp4" },
                  ],
                },
                {
                  name: "Hindi",
                  children: [
                    { name: "Housefull 5.mp4" },
                    { name: "Dhamal.mp4" },
                  ],
                },
                { name: "Hollywood", children: [] },
              ],
            },
            // 1.1.2
            {
              name: "Action",
              children: [
                { name: "Avengers.mp4" },
                { name: "Iron Man.mp4" },
                { name: "Captain America.mp4" },
              ],
            },
          ],
        },
        // 2
        {
          name: "Music",

          children: [
            {
              name: "Nepop",
              children: [
                { name: "Yama Buddha", children: [{ name: "sathee.mp3" }] },
                { name: "Laure", children: [] },
              ],
            },
            { name: "Dohori", children: [] },
          ],
        },
        // 3
        { name: "Pictures", children: [] },
        // 4
        { name: "Documents", children: [] },
        // 5
        { name: "lecture.pdf" },
      ],
    },
  ];

  return (
    <div className="p-8">
      <ul>
        <li className="my-1.5">
          <ul className="pl-6">
            {folders.map((folder) => (
              <RecursiveFolder key={folder.name} folder={folder} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default App;

export function RecursiveFolder({ folder }: { folder: Folder }) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const toggleFolder = () => setIsFolderOpen((prev) => !prev);

  return (
    <li className="my-1.5">
      <span className="flex items-center gap-1.5">
        {folder.children && folder.children.length > 0 && (
          <button
            onClick={toggleFolder}
            className={`transition-transform duration-200 ${
              isFolderOpen ? "rotate-90" : ""
            }`}
          >
            <IoIosArrowForward />
          </button>
        )}

        {folder.children ? <FcFolder size={30} /> : <FaFile size={20} />}
        {folder.name}
      </span>

      {isFolderOpen && folder.children && (
        <ul className="pl-6">
          {folder.children.map((child) => (
            <RecursiveFolder key={child.name} folder={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
