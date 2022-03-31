export function hasClass(el: HTMLElement, className: string): boolean {
    const reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

export function addClass(el: HTMLElement, className: string) {
    if (hasClass(el, className)) {
        return
    }
    const classArray = el.className.split(' ')
    classArray.push(className)
    el.className = classArray.join(' ')
}
export function removeClass(el: HTMLElement, className: string) {
    if (!hasClass(el, className)) {
        return
    }
    const classArray = el.className.split(' ')
    const index = classArray.indexOf(className)
    classArray.splice(index, 1)
    el.className = classArray.join(' ')
}

interface Fn {
    call: (arg1: any, arg: any) => void
}
export function throttle(fn: Fn, delay = 1000) {
    let start = 0
    return function (this: any, arg: any) {
        const now = Date.now()
        if (now - start >= delay) {
            fn.call(this, arg)
            start = now
        }
    }
}
