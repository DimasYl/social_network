export const UpdateObjectInArray = (items : Array<any>, itemId: number, objPropName: string, newObjProps: any) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, newObjProps}
        }
        return u
    })
}