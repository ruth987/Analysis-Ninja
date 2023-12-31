import React from 'react'
import { FaUserCircle } from 'react-icons/fa';


const sampleProblems = [
  { number: 1, title: 'Problem 1', rating: 1200, user: 'user1', date: '1 day ago' },
  { number: 2, title: 'Problem 2', rating: 1500, user: 'user2', date: '2 days ago' },
  { number: 3, title: 'Problem 3', rating: 1800, user: 'user3', date: 'a week ago' },
];


const ProblemTable = () => {
  return (
    <div className="p-4 rounded-lg h-1/2 bg-gray-200 text-gray-700">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Last Solved Problems</h2>

                <table className="w-full">
                    <thead>
                    <tr>
                        <th className="px-4 py-2">Problem Number</th>
                        <th className="px-4 py-2">Problem Title</th>
                        <th className="px-4 py-2">Rating</th>
                        <th className="px-4 py-2">User Profile</th>
                        <th className="px-4 py-2">Date Solved/Analyzed</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sampleProblems.map((problem, index) => (
                        <tr key={index}>
                        <td className="pl-24 px-4 py-2 border-b border-gray-300">{problem.number}</td>
                        <td className="px-4 py-2 border-b border-gray-300">{problem.title}</td>
                        <td className="px-4 py-2 border-b border-gray-300">{problem.rating}</td>
                        <td className="px-4 py-2 border-b border-gray-300">
                            <div className='flex items-center'>
                            <FaUserCircle className="text-blue-500 w-8 h-8 pr-2" />
                            {problem.user}
                            </div>
                        </td>
                        <td className="px-4 py-2 border-b border-gray-300">{problem.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
  )
}

export default ProblemTable