function Skeleton() {

    function line() {
        let skeleton =[]
        for (let x = 0; x <= 7; x++) {
            skeleton.push(
                <tr key={x}>
                    <td ><span className="blink"></span></td>
                    <td ><span className="blink"></span></td>
                    <td ><span className="blink"></span></td>
                </tr>
            )
        }
        return skeleton
    }

    
    return (
        <>
            {line()}
        </>
    )
}

export default Skeleton;