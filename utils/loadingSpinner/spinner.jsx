// components/LoadingSpinner.jsx
export default function LoadingSpinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
      <img
        className="w-20 h-20 animate-spin"
        src="https://www.svgrepo.com/show/448500/loading.svg"
        alt="Loading icon"
      />
    </div>
  );
}
