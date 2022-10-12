import React from 'react';

const Answer = () => {
    return (
        <div>
            <div className='w-96 md:w-1/2 mx-auto text-left text-sm md:text-2xl my-10 shadow-2xl rounded-xl'>
                <h1 className='bg-pink-400 text-lg md:text-4xl rounded-xl p-2'><strong><span>Question 01 :</span></strong> What is react perfrom of react Router?</h1>
                <p className='text-justify p-3'><span className='font-bold'>Ans:</span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
            </div>
            <div className='w-96 md:w-1/2 mx-auto text-left text-sm md:text-2xl my-10 shadow-2xl rounded-xl'>
                <h1 className='bg-pink-400 text-lg md:text-4xl rounded-xl p-2'><strong><span>Question 02 : </span></strong>How does context API work? </h1>
                <p className='text-justify p-3'><span className='font-bold'>Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around . This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='w-96 md:w-1/2 mx-auto text-left text-sm md:text-2xl my-10 shadow-2xl rounded-xl'>
                <h1 className='bg-pink-400 text-lg md:text-4xl rounded-xl p-2'><strong><span>Question 03 : </span></strong>UseRef কী ? এটার কাজ কী? </h1>
                <p className='text-justify p-3'><span className='font-bold'>Ans:</span> প্রথমে আসা যাক এটার অফিসিয়াল সংজ্ঞায়ে। useRef hook হচ্ছে একটি ফাংশন যেটা আমাদের একটি mutable (মানে যারা value modify করা যায়) রেফ (ref) অবজেক্ট রিটার্ন করে। এবং এই অবজেক্ট এর একটি প্রপার্টি হচ্ছে current যেটাতে আমরা initial ভেলু সেট করতে পারি আর্গুমেন্ট পাস করে। আর এই অবজেক্টটি আমাদের component আর পুরো লাইফ সাইকেল জুড়ে পারসিস্ট থাকে।

                উপড়ের অংশটি হচ্ছে আমাদের সংজ্ঞা, এটা দেখে ভড়কে যাওয়ার কিছু নেই। আমরা এখন সহজ ভাবে এটা বুঝার ট্রাই করবো। আমরা ফার্স্টে বললাম যে useRef hook আমাদের একটি mutable রেফ (ref) অবজেক্ট রিটার্ন করে, তাহলে আমাদের বুঝা লাগবে রেফ অবজেক্টটি আসলে কি? সহজ ভাষায় রেফ আমাদের কে DOM অথবা React Element কে access করার একটা উপায় করে দেয়। মানে হচ্ছে আমরা আমাদের যেসব React Element গুলোকে render করে থাকি সেগুলোকে ধরে ব্যাবহার করার একটা সুযোগ করে দেয়। একটা উদাহরণ দিয়ে আমরা সহজে বুঝতে পারব।

                আমরা ধরে নেই আমাদের কম্পোনেন্টে একটা TextInput আছে, এখন আমরা চাচ্ছি যে আমাদের কম্পোনেন্ট যখন load হবে তখন আমরা আমাদের ইনপুটটাকে ফোকাস করবো। এখন আমরা এটাও জানি যে ইনপুটকে ফোকাস করার জন্যে আমাদের focus() ফাংশনকে call করা লাগবে। কিন্তু প্রশ্ন হচ্ছে আমাদেরকে তো আসলে প্রথমে TextInput টাকে ধরা লাগবে এবং সেটাকে ধরেই focus() ফাংশনকে call করা লাগবে। ঠিক এখানেই আমাদের useRef এর দরকার। আমরা আগেই বলেছি useRef hook আমাদের একটি mutable রেফ (ref) অবজেক্ট রিটার্ন করে এবং এই ref অবজেক্টের সাহায্যে আমরা React Element কে ধরতে পারি, কাজেই আমরা এখন সেই কাজটি করবো ।</p>
            </div>
        </div>
    );
};

export default Answer;