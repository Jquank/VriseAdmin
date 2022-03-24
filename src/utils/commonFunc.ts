interface FlatItem {
    [key: string]: any
}
export const itemFlatByKey = (item: FlatItem, key: keyof FlatItem): any[] => {
    const child = item[key] as any[]
    const arr: any[] = []
    if (child && child.length) {
        return itemFlatByKey(child, key)
    } else {
        return arr.concat(item)
    }
    // return arr.reduce((pre, cur) => {
    //     if (Object.prototype.toString.call(cur) === '[object Object]') {
    //         if (!cur[key]) {
    //             return pre.concat(cur)
    //         } else {
    //             // return pre.concat(
    //             //     Object.prototype.toString.call(cur) === '[object Array]' ? arrayFlat(cur, depth - 1) : cur
    //             // )
    //         }
    //     } else {
    //         return {}
    //     }
    // }, [])
}

// [{ children: []}]
