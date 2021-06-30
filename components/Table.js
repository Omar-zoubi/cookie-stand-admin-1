export default function Table(props) {

    let randomNumber = function (minNumOfCst, maxNumOfCst) {
        return Math.floor(Math.random() * (maxNumOfCst - minNumOfCst + 1) + minNumOfCst);
    }

    console.log(props);
    let hours = ['Location', '7 AM','4 Am', '5 AM','6am', '6am','6am','6am','6am','6am','6am','6am','6am','6am', 'Total'];
    let random = [];
    for (let i = 0; i < 2; i++) {
        random.push(randomNumber(props.sentdata.min, props.sentdata.max) * props.sentdata.ave);

    }
    console.log(random);
    return (
        <table>
            <thead>
                <tr>
                    {hours.map((hour, idx) => {
                        return (
                            <th key={idx}>
                                {hour}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {props.sentdata.map((loc, idx) => {
                        return (
                            <td key={idx}>{loc.location}</td>                        
                        )
                    })
                }
                {
                    random.map((item, idx)=>{
                        return (
                            <td key={idx}> {item}</td>
                        )
                    })
                }
                </tr>
            </tbody>
        </table>
    )


    
}


