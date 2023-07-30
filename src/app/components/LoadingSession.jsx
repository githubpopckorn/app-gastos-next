export default function LoadingSession() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">
        Validando usuario...
      </div>
    </div>
  );
}
