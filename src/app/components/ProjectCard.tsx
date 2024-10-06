// src/app/components/ProjectCard.tsx
'use client';

import { useRouter } from 'next/navigation';

interface ProjectCardProps {
    id?: string;
    title: string;
    description: string;
    status?: string;
    createdAt?: string;
}

const ProjectCard = ({ id = '1', title, description, status = 'Active', createdAt }: ProjectCardProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/client/projects/${id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
        >
            <div className="flex flex-col h-48">
                <h3 className="text-2xl font-semibold text-[#3450A3] mb-3">{title}</h3>
                <p className="text-gray-600 text-xl mb-4 flex-grow">{description}</p>

                <div className="flex justify-between items-center mt-auto">
          <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
            {status}
          </span>
                    {createdAt && (
                        <span className="text-sm text-gray-500">
              Created: {createdAt}
            </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
