export function wrap(handler) {
    return function(req, res, next) {
        handler(req, res, next).catch(next);
    }
}
