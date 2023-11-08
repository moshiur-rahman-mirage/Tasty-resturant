import React from 'react';
import HelmetTitle from '../HelmetTitle';

const Blog = () => {
    return (
        <div className='flex min-h-screen text-neutral-content gap-5 max-w-6xl mx-auto flex-col'>
            <HelmetTitle title="Blog" />
            <div className='flex text-neutral-content gap-5 flex-row font-bold text-4xl'>
                <h1>Question</h1>

                <div className='text-neutral-content text-center font-bold text-4xl'>
                   <p className='text-center'>Answer</p>
                </div>

            </div>
            <div className='flex text-neutral-content gap-5 flex-row'>
                <h1>What Is a two way data binding</h1>

                <div className='text-neutral-content'>
                    Ans:Interaction between the user and the form, where changes made in the input
                    field are immediately reflected in the state of the component,
                </div>

            </div>

            <div className='flex text-neutral-content gap-5 flex-row'>
                <h1>What Is npm in Node.js</h1>

                <div className='text-neutral-content'>
                    Ans : npm is node package manager.
                </div>

            </div>

            <div className='flex text-neutral-content gap-5 flex-row'>
                <h1> Different between Mongodb database vs mySQL database</h1>

                <div className='text-neutral-content'>
                    Ans: Mongodb is a nosql database and mysql is a sql database.
                </div>

            </div>
        </div>
    );
};

export default Blog;