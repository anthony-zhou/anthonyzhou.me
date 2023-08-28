import React from 'react';

export default function Resources() {
  const resources = [
    {
      title: 'typescript-boilerplate',
      description: 'A boilerplate for TypeScript Node projects, with ESLint + Airbnb JavaScript styleguide.',
      url: 'https://github.com/anthony-zhou/typescript-node-boilerplate',
    },
    {
      title: 'shell-scripts',
      description: 'A collection of shell scripts I use.',
      url: 'https://github.com/anthony-zhou/shell-scripts',
    },
    {
      title: 'dynamo-function-cache',
      description: 'Use DynamoDB as a cache for slow or computationally expensive functions in Node.js',
      url: 'https://github.com/anthony-zhou/dynamo-function-cache',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-display text-center mb-5">Resources</h2>
      <table className="">
        <tbody>
          {resources.map(({ title, description, url }) => (
            <tr key={title}>
              <td className="font-mono py-1 w-80 align-top">
                <a href={url} target="_blank" rel="noreferrer">{title}</a>
              </td>
              <td className="py-1">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
