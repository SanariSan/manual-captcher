import EventEmitter from "events";

const logEmitter = new EventEmitter();

export const log = (...args: unknown[]) => {
  logEmitter.emit("log", ...args);
};

export const subscribeLogger = (cb: (...args: unknown[]) => void) => {
  logEmitter.on("log", cb);
};

export const unsubscribeLogger = (cb: (...args: unknown[]) => void) => {
  logEmitter.removeListener("log", cb);
};

// ---

export const clearLogs = () => {
  logEmitter.emit("clear", "logs");
};

export const subscribeClearLogs = (cb: (...args: unknown[]) => void) => {
  logEmitter.on("clear", cb);
};

export const unsubscribeClearLogs = (cb: (...args: unknown[]) => void) => {
  logEmitter.removeListener("clear", cb);
};
