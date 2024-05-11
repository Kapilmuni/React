function fruitlist(){
    let arr=[mango,gvava,lichi,orange,graps,papaya]
    return (
        <ul>
            {arr.map((fruit)=>(
                <li>{fruit}</li>
            ))}
        
        </ul>
    )
}
export default fruits