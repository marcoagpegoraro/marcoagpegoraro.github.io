import React from "react"

export function FlexFillRow(){
    return <div style={{flex: 1}}></div> 
}
export function FlexBreakLine(props: any){
    return <div {...props} style={{ flexBasis: '100%', height: 0 }}></div>
}