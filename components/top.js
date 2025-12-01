import Layout from './Layout';

export default function Home() {
  return (
    <div>
      <h1 className="text-white text-center text-3xl sm:text-5xl fade-in">
        <div className="typewriter-line1 text-xl sm:text-4xl">Hello. My name is Taro</div>
        <br />
        <div className="typewriter-line2 mt-5 text-xl sm:text-4xl">Welcome to my profile site</div>
      </h1>
      <p className="text-white text-center text-2xl sm:text-4xl mt-12 fade-in-p blink">Please scroll</p>
    </div>
  );
}