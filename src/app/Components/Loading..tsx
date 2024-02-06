export default function Loading() {
  return (
    <>
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title font-mono">Status</div>
          <div className="terminal-controls">
            <div className="control close" />
            <div className="control minimize" />
            <div className="control masximize" />
          </div>
        </div>
        <div className="text-1 font-mono">Loading...</div>
      </div>
    </>
  );
}
