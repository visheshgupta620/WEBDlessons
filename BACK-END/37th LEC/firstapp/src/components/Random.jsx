import React from 'react'

const Random = () => {
    const RandomNum = Math.floor(Math.random()*10) ;
    const emojis = ['🤣', '😊', '😂', '❤️', '💕', '👌'];
    const emojilist = emojis.map((item,index)=>{
        return <li key={index}>{item}</li>
    })

    return (
        <div>
            {RandomNum}
            {emojilist}
            {RandomNum%2===0 ? 'even' : 'odd number'}
            
            {/* {emojis} */}
        </div>
    )
}

export default Random