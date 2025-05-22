function App() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl text-blue-500 font-bold mb-4">Welcome to my page</h1>
      <p className="text-gray-700 mb-4">This is a page using Vite + React + TypeScript + Tailwind CSS </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>My name is Shen Han</li>
        <li>I like eating beef</li>
        <li>I like travelling </li>
      </ul>
      <img
        src="https://picx.zhimg.com/80/v2-8d9b55588fa912d766783da23ae418b5_1440w.webp"
        alt="the picture"
        className="rounded-lg border border-gray-300 shadow-md"
      />
    </div>
  );
}

export default App;
