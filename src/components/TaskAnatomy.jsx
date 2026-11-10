import { useRef, useState } from "react";
import { FiFileText, FiFolder } from "react-icons/fi";
import { sampleTask } from "../data/profile";

/**
 * Interactive breakdown of a Terminal-Bench task. The file list is an ARIA
 * tablist (arrow keys move between files); the right pane shows what goes
 * into the selected file and a short excerpt of it.
 */
const TaskAnatomy = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const files = sampleTask.files;
  const file = files[active];

  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next = null;
    if (e.key in keys) next = (active + keys[e.key] + files.length) % files.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = files.length - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-night-line bg-night-raised">
      <div className="grid grid-cols-1 md:grid-cols-[15rem_minmax(0,1fr)]">
        {/* File tree */}
        <div className="min-w-0 border-b border-night-line p-3 md:border-b-0 md:border-r">
          <p className="flex items-center gap-2 px-2 pb-2 pt-1 font-mono text-[0.8125rem] text-night-muted">
            <FiFolder aria-hidden="true" />
            {sampleTask.name}/
          </p>
          <div
            role="tablist"
            aria-label="Files in the task"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="flex flex-col gap-1"
          >
            {files.map((f, i) => {
              const selected = i === active;
              return (
                <button
                  key={f.path}
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  id={`task-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="task-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`flex min-h-11 shrink-0 items-center gap-2 rounded-md px-3 text-left font-mono text-[0.8125rem] transition-colors md:pl-5 ${
                    selected
                      ? "bg-night text-night-text shadow-[inset_2px_0_0_var(--color-night-signal)]"
                      : "text-night-muted hover:bg-night/60 hover:text-night-text"
                  }`}
                >
                  <FiFileText aria-hidden="true" className="shrink-0" />
                  <span className="break-all md:whitespace-nowrap md:break-normal">{f.path}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected file */}
        <div
          role="tabpanel"
          id="task-panel"
          aria-labelledby={`task-tab-${active}`}
          className="min-w-0 p-5 sm:p-7"
        >
          <h4 className="text-[1.3125rem] font-semibold text-night-text">{file.label}</h4>
          <p className="mt-2 max-w-[60ch] text-night-muted">{file.explain}</p>
          <pre
            key={file.path}
            className="mt-5 overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-night-line bg-night p-4 font-mono text-[0.8125rem] leading-[1.7] text-night-text sm:whitespace-pre sm:text-[0.875rem]"
          >
            <code>{file.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TaskAnatomy;
