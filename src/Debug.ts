import Config from './Config';

/**
 * Debugging logger helper
 *
 * @export
 * @class Debug
 */
export default class Debug {
    /**
     * Log verbose message to the console
     *
     * Verbose message will be logged only if verbose
     * logging is enabled in the config
     * @param args
     */
    public static logVerbose(...args: any[]) {
        if (Config.ENABLE_DEBUG_VERBOSE) {
            this.log('DEBUG', ...args);
        }
    }

    /**
     * Log message to the console
     *
     * Message will be logged only if the logging
     * is enabled in the config
     * @param args
     */
    public static log(...args: any[]) {
        if (Config.ENABLE_DEBUG && Config.ENABLE_DEBUG_LOGGING) {
            // tslint:disable-next-line:no-console
            console.log('DEBUG', ...args);
        }
    }
}
