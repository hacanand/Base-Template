import React from 'react';

const ProjectModal = ({ project, onCloseModal }) => {
    if (!project) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <ul className="list-disc list-inside">
                    {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={onCloseModal}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;
